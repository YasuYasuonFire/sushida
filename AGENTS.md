# Repository Guidelines

## Project Structure & Module Organization

- Source: `src/` for app code; group by feature (e.g., `src/game/`, `src/ui/`).
- Tests: `tests/` mirrors `src/` (e.g., `tests/ui/` for `src/ui/`).
- Assets: `assets/` for images, audio, fonts; import via relative paths.
- Scripts & tooling: `scripts/` for local dev helpers; config files at repo root.

## Build, Test, and Development Commands

- Install deps: `npm ci` or `pnpm install` (choose what the repo uses).
- Run dev server: `npm run dev` (hot reload for local iteration).
- Build production: `npm run build` (outputs to `dist/` or `build/`).
- Run tests: `npm test` (watch mode: `npm run test:watch`).
- Lint & format: `npm run lint` and `npm run format`.
  Tip: If using a different stack (Python/Rust), mirror these with `make` targets (e.g., `make test`, `make build`).

## Coding Style & Naming Conventions

- Indentation: 2 spaces for JS/TS; 4 for Python; Rust uses `rustfmt` defaults.
- Names: kebab-case for files, PascalCase for components/classes, camelCase for variables/functions.
- Tools: prefer Prettier + ESLint (JS/TS), Black + Ruff (Python), `rustfmt` + Clippy (Rust).
- Keep modules small; export a clear public API from each folder’s `index`.

## Testing Guidelines

- Frameworks: Vitest/Jest (JS/TS), Pytest (Python), `cargo test` (Rust).
- Structure: co-locate small specs (`*.test.ts`) or mirror under `tests/`.
- Coverage: target 80%+ lines/branches for core logic; exclude assets and generated code.
- Run: `npm test -- --coverage` (or `make test`).

## Commit & Pull Request Guidelines

- Commits: follow Conventional Commits, e.g., `feat(game): add combo counter`.
- PRs: include a clear summary, linked issues, before/after screenshots or clips for UI, and test updates.
- Checks: PRs must pass build, tests, and linting; add or update docs when behavior changes.

## Security & Configuration

- Do not commit secrets. Use `.env.local` and provide `.env.example`.
- Review dependencies regularly; prefer pinned versions and lockfiles (`package-lock.json`/`pnpm-lock.yaml`).
