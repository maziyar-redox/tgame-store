# syntax=docker/dockerfile:1.7

# The monorepo declares Node >=26 and npm@12.1.0.
FROM node:26-bookworm-slim AS base
WORKDIR /app

# Install dependencies from the monorepo root so npm can resolve workspaces
# and use the root package-lock.json.
FROM base AS deps
ENV CI=true
RUN npm install --global npm@12.1.0

COPY package.json package-lock.json ./
# COPY frontend/admin/package.json ./frontend/admin/package.json
COPY frontend/web/package.json ./frontend/web/package.json
# The root prepare script imports this file. CI=true makes it exit safely.
COPY .husky/install.mjs ./.husky/install.mjs

RUN --mount=type=cache,target=/root/.npm \
    npm ci --no-audit --no-fund

# Build only the public web application.
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/package-lock.json ./package-lock.json
# COPY --from=deps /app/frontend/admin/package.json ./frontend/admin/package.json
COPY --from=deps /app/frontend/web/package.json ./frontend/web/package.json

# Copy the repository source after dependency installation to preserve
# the dependency layer when application code changes.
COPY . .

# These variables are required while next.config.ts imports env-schema.
# NEXT_PUBLIC_* values are embedded in the browser bundle at build time.
ARG BASE_API_URL
ARG MAIN_PAGE_BANNER
ARG MAIN_PAGE_TERMS
ARG S3_BUCKET_URL
ARG NEXT_PUBLIC_MAIN_PAGE_BANNER
ARG NEXT_PUBLIC_MAIN_PAGE_TERMS
ARG NEXT_PUBLIC_S3_BUCKET_URL

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build --workspace=@frontend/web

# Minimal production runtime: Next.js standalone output only.
FROM node:26-bookworm-slim AS runner
WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

RUN groupadd --system --gid 1001 nodejs \
    && useradd --system --uid 1001 --gid nodejs nextjs

# outputFileTracingRoot is set to the monorepo root, so standalone preserves
# the frontend/web path. The generated server is frontend/web/server.js.
COPY --from=builder --chown=nextjs:nodejs /app/frontend/web/.next/standalone ./

WORKDIR /app/frontend/web

# Next.js standalone does not include these two directories automatically.
COPY --from=builder --chown=nextjs:nodejs \
    /app/frontend/web/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs \
    /app/frontend/web/public ./public

# Allow Next.js to write its runtime cache (ISR/image cache, where applicable).
RUN mkdir -p .next/cache \
    && chown -R nextjs:nodejs .next

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
