# Invalid8.js Monorepo

A monorepo containing the Invalid8 caching library and EventBus system with multiple adapters for distributed caching and event-driven architectures.

## 📦 Packages

### Core Packages
- **[@invalid8/core](./core)** - Core caching library with React Query-like DX
- **[@eventbus/core](./event/core)** - Event bus system for distributed cache invalidation

### Cache Adapters
- **[@invalid8/memory](./cache/memory)** - In-memory cache adapter
- **[@invalid8/redis](./cache/redis)** - Redis cache adapter

### Event Bus Adapters
- **[@eventbus/memory](./event/memory)** - In-memory event bus adapter
- **[@eventbus/kafka](./event/kafka)** - Kafka event bus adapter
- **[@eventbus/rabbitmq](./event/rabbitmq)** - RabbitMQ event bus adapter

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation

```bash
# Install pnpm if you haven't already
npm install -g pnpm@8.15.4

# Install dependencies for all packages
pnpm install

# Bootstrap packages (links local dependencies)
pnpm run bootstrap
```

## 🛠️ Development

### Build All Packages

```bash
# Build all packages
pnpm run build

# Build specific package
pnpm run build:core
pnpm run build:cache
pnpm run build:eventbus
```

### Testing

```bash
# Run tests for all packages
pnpm run test

# Run tests with coverage
pnpm run test:cov
```

### Linting & Formatting

```bash
# Lint all packages
pnpm run lint

# Format all code
pnpm run format

# Check formatting
pnpm run format:check
```

### Development Mode

```bash
# Run all packages in watch mode
pnpm run dev
```

### Clean Up

```bash
# Clean build artifacts
pnpm run clean:build

# Clean all (including node_modules)
pnpm run clean
```

## 📝 Publishing

### Version Management

```bash
# Version patch (1.0.0 -> 1.0.1)
pnpm run version:patch

# Version minor (1.0.0 -> 1.1.0)
pnpm run version:minor

# Version major (1.0.0 -> 2.0.0)
pnpm run version:major

# Version prerelease (1.0.0 -> 1.0.1-alpha.0)
pnpm run version:prerelease
```

### Publishing to NPM

```bash
# Publish all changed packages
pnpm run publish

# Build and publish
pnpm run publish:now

# Release with version bump
pnpm run release:patch
pnpm run release:minor
pnpm run release:major
pnpm run release:alpha
```

## 🏗️ Monorepo Structure

```
invalid8.js/
├── core/                  # @invalid8/core - Core caching library
├── cache/
│   ├── memory/           # @invalid8/memory - In-memory adapter
│   └── redis/            # @invalid8/redis - Redis adapter
├── event/
│   ├── core/             # @eventbus/core - Event bus core
│   ├── memory/           # @eventbus/memory - In-memory event bus
│   ├── kafka/            # @eventbus/kafka - Kafka event bus
│   └── rabbitmq/         # @eventbus/rabbitmq - RabbitMQ event bus
├── package.json          # Root package configuration
├── pnpm-workspace.yaml   # PNPM workspace configuration
├── lerna.json            # Lerna configuration
├── tsconfig.base.json    # Shared TypeScript configuration
├── .eslintrc.js          # Shared ESLint configuration
└── .prettierrc           # Shared Prettier configuration
```

## 🔧 Technology Stack

- **Package Manager**: pnpm (workspace support)
- **Monorepo Tool**: Lerna 8.x (with Nx integration)
- **Language**: TypeScript 5.x
- **Build Tool**: TypeScript Compiler (tsc)
- **Linting**: ESLint with TypeScript support
- **Formatting**: Prettier
- **Testing**: Jest with ts-jest
- **Git Hooks**: Husky

## 📖 Package Dependencies

Packages use `workspace:*` protocol for internal dependencies, which pnpm resolves to linked packages during development and actual versions during publishing.

Example:
```json
{
  "dependencies": {
    "@invalid8/core": "workspace:*",
    "@eventbus/core": "workspace:*"
  }
}
```

## 🤝 Contributing

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Create a feature branch: `git checkout -b feature/my-feature`
4. Make your changes and ensure tests pass: `pnpm run test`
5. Lint your code: `pnpm run lint`
6. Format your code: `pnpm run format`
7. Commit your changes with conventional commits
8. Push and create a pull request

## 📄 License

MIT License - see individual packages for details

## 🔗 Links

- [Documentation](https://github.com/jeremiah-olisa/invalid8.js)
- [Issues](https://github.com/jeremiah-olisa/invalid8.js/issues)
- [NPM Organization](https://www.npmjs.com/org/invalid8)

---

*Built with ❤️ by Jeremiah Olisa*
