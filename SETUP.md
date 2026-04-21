# Local Setup (ELUSOC / New Contributors)

This guide is the single source of truth for running Havenly locally.

## Prerequisites

- **Node.js**: v18+ (v20+ recommended)
- **pnpm**: v9+ (this repo uses `pnpm-lock.yaml`)

## 1) Install & Run

```sh
git clone https://github.com/akshay0611/havenly.git
cd havenly
pnpm install
pnpm dev
```

App runs at `http://localhost:3000`.

## 3) Useful Commands

```sh
pnpm dev      # start dev server
pnpm lint     # lint the codebase
pnpm build    # production build
pnpm start    # start production build locally
```

## Troubleshooting

- **Build Failures**: If you see `ERR_PNPM_OUTDATED_LOCKFILE`, run `pnpm install` locally to update the lockfile.
- **Node Version**: Ensure you are using a compatible Node.js version (`node -v`).

## FAQ

- **Is a database required?** Currently, the project uses high-fidelity dummy data for all features. Real-time database integration is on the roadmap.
- **Why pnpm?** pnpm is faster and more disk-efficient than npm. If you don't have it, install it via `npm install -g pnpm`.
