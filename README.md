design system: localhost:6006

# BAB Starter Monorepo

## Getting Started

Clone the repository and install dependencies:

```sh
git clone <repo-url>
cd bab-starter-app
pnpm install
```

To start the development servers:

```sh
pnpm dev
```

- App: [http://localhost:5173](http://localhost:5173)
- Design System (Storybook): [http://localhost:6006](http://localhost:6006)

---

## Monorepo Structure

### Apps and Packages

- **web**: React + TypeScript app powered by [Vite](https://vitejs.dev)
- **@repo/ui**: Shared component library (design system)
- **@repo/eslint-config**: Shared ESLint configuration
- **@repo/typescript-config**: Shared TypeScript configuration (`tsconfig.json`)

All packages and apps use [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo comes pre-configured with:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

---

## Scripts

- `pnpm dev` - Start all apps in development mode
- `pnpm build` - Build all apps and packages
- `pnpm lint` - Lint all packages
- `pnpm format` - Format code with Prettier

---

## License

MIT
