
FROM node:26-bookworm-slim AS base

WORKDIR /app

# Install dependencies
FROM base AS deps

ENV CI=true

RUN npm install --global npm@12.1.0

COPY package.json package-lock.json ./
COPY frontend/web/package.json ./frontend/web/package.json
COPY .husky/install.mjs ./.husky/install.mjs

RUN npm ci --no-audit --no-fund


# Build Next.js application
FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/package-lock.json ./package-lock.json
COPY --from=deps /app/frontend/web/package.json ./frontend/web/package.json

COPY . .
COPY frontend/web/.env ./frontend/web/.env
COPY frontend/web/.env.production ./frontend/web/.env.production

ARG BASE_API_URL
ARG MAIN_PAGE_BANNER
ARG MAIN_PAGE_TERMS
ARG S3_BUCKET_URL
ARG NEXT_PUBLIC_MAIN_PAGE_BANNER
ARG NEXT_PUBLIC_MAIN_PAGE_TERMS
ARG NEXT_PUBLIC_S3_BUCKET_URL
ARG NEXT_PUBLIC_SITE_URL

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build --workspace=@frontend/web


# Production runtime
FROM node:26-bookworm-slim AS runner

WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

RUN groupadd --system --gid 1001 nodejs \
    && useradd --system --uid 1001 --gid nodejs nextjs

COPY --from=builder --chown=nextjs:nodejs \
    /app/frontend/web/.next/standalone ./

WORKDIR /app/frontend/web

COPY --from=builder --chown=nextjs:nodejs \
    /app/frontend/web/.next/static ./.next/static

COPY --from=builder --chown=nextjs:nodejs \
    /app/frontend/web/public ./public

RUN mkdir -p .next/cache \
    && chown -R nextjs:nodejs .next

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
