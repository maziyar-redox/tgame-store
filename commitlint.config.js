// commitlint.config.mjs
export default {
    extends: ["@commitlint/config-conventional"],
    rules: {
        // Enforce scope for monorepo clarity
        "scope-empty": [2, "never"],
        // Allowed scopes — maps to your project structure
        "scope-enum": [
            2,
            "always",
            [
                "web",        // Next.js public app
                "admin",      // Next.js admin app
                "api",        // FastAPI backend
                "shared",     // shared packages
                "ci",         // CI/CD
                "deps",       // dependency updates
                "release",    // release commits
            ],
        ],
        "type-enum": [
            2,
            "always",
            [
                "feat",
                "fix",
                "refactor",
                "perf",
                "test",
                "docs",
                "chore",
                "ci",
                "build",
                "revert",
            ],
        ],
        "subject-max-length": [2, "always", 72],
        "body-max-line-length": [1, "always", 100],
    },
};