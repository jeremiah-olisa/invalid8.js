# Contributing to Invalid8.js

Thank you for your interest in contributing to Invalid8.js! This document provides guidelines and instructions for contributing to this monorepo.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Project Structure](#project-structure)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing](#testing)
- [Documentation](#documentation)

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Setup

1. Fork the repository on GitHub
2. Clone your fork locally:

   ```bash
   git clone https://github.com/YOUR_USERNAME/invalid8.js.git
   cd invalid8.js
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Build all packages:

   ```bash
   pnpm run build
   ```

5. Run tests to ensure everything works:
   ```bash
   pnpm run test
   ```

## Development Workflow

### Creating a New Branch

Always create a new branch for your work:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

### Making Changes

1. Make your changes in the appropriate package(s)
2. Ensure your code follows the coding standards (see below)
3. Add or update tests as needed
4. Build and test your changes:
   ```bash
   pnpm run build
   pnpm run lint
   pnpm run test
   ```

### Working with Packages

```bash
# Build a specific package
pnpm --filter @invalid8/core run build

# Test a specific package
pnpm --filter @eventbus/core run test

# Run a command in all packages
pnpm -r run build
```

## Project Structure

```
invalid8.js/
├── core/                  # @invalid8/core
├── cache/
│   ├── memory/           # @invalid8/memory
│   └── redis/            # @invalid8/redis
├── event/
│   ├── core/             # @eventbus/core
│   ├── memory/           # @eventbus/memory
│   ├── kafka/            # @eventbus/kafka
│   └── rabbitmq/         # @eventbus/rabbitmq
└── ...
```

Each package follows this structure:

```
package/
├── src/
│   ├── core/            # Core functionality
│   ├── interfaces/      # TypeScript interfaces
│   ├── types/           # TypeScript types
│   └── index.ts         # Public API exports
├── test/                # Test files (if applicable)
├── package.json
├── tsconfig.json
└── README.md
```

## Coding Standards

### TypeScript

- Use TypeScript for all code
- Enable strict mode in tsconfig.json
- Prefer interfaces over types for object shapes
- Use explicit return types for functions
- Avoid `any` type - use `unknown` if necessary

### Code Style

We use Prettier and ESLint to maintain code quality:

```bash
# Format code
pnpm run format

# Lint code
pnpm run lint
```

Key style points:

- Use single quotes for strings
- Use 2 spaces for indentation
- Add trailing commas in objects and arrays
- Maximum line length: 100 characters
- Use semicolons

### Naming Conventions

- **Files**: kebab-case (e.g., `query-client.ts`)
- **Classes**: PascalCase (e.g., `QueryClient`)
- **Interfaces**: PascalCase (e.g., `CacheProvider`)
- **Functions/Methods**: camelCase (e.g., `queryAsync`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `DEFAULT_CACHE_TIME`)
- **Private members**: prefix with underscore (e.g., `_internalMethod`)

## Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Code style changes (formatting, missing semicolons, etc.)
- **refactor**: Code change that neither fixes a bug nor adds a feature
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Changes to build process or auxiliary tools

### Scope

The scope should be the name of the package affected:

- `core`
- `memory`
- `redis`
- `eventbus`
- `kafka`
- `rabbitmq`

### Examples

```bash
feat(core): add support for tag-based invalidation
fix(redis): resolve connection timeout issue
docs(memory): update usage examples
test(eventbus): add tests for event subscription
```

## Pull Request Process

1. **Update your fork**:

   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Push your changes**:

   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request** on GitHub

4. **PR Requirements**:
   - Clear description of changes
   - All tests passing
   - Code formatted and linted
   - Documentation updated (if needed)
   - No merge conflicts

5. **PR Title**: Follow conventional commit format

   ```
   feat(core): add support for distributed cache invalidation
   ```

6. **Review Process**:
   - Address review comments
   - Update PR as needed
   - Maintain a clean commit history

## Testing

### Running Tests

```bash
# Run all tests
pnpm run test

# Run tests with coverage
pnpm run test:cov

# Run tests for specific package
pnpm --filter @invalid8/core run test

# Watch mode
pnpm --filter @invalid8/core run test:watch
```

### Writing Tests

- Use Jest for testing
- Place test files in `__tests__` directory or name them `*.spec.ts` or `*.test.ts`
- Aim for high code coverage (>80%)
- Test both success and error cases
- Use descriptive test names

Example:

```typescript
describe('QueryClient', () => {
  it('should cache query results', async () => {
    // Arrange
    const client = new QueryClient(mockAdapter);

    // Act
    const result = await client.queryAsync(['key'], fetchData);

    // Assert
    expect(result).toBeDefined();
  });
});
```

## Documentation

### Code Documentation

- Use JSDoc comments for public APIs
- Document parameters and return types
- Include usage examples for complex features

Example:

````typescript
/**
 * Executes a query with caching support.
 *
 * @param key - Cache key as an array of strings
 * @param queryFn - Function to fetch data if cache miss
 * @param options - Optional query configuration
 * @returns Promise resolving to cached or fresh data
 *
 * @example
 * ```typescript
 * const user = await client.queryAsync(
 *   ['users', userId],
 *   () => fetchUser(userId),
 *   { staleTime: 5 * 60 * 1000 }
 * );
 * ```
 */
async queryAsync<T>(
  key: CacheKey,
  queryFn: () => Promise<T>,
  options?: QueryOptions
): Promise<T>
````

### Package README

Each package should have a comprehensive README with:

- Description and purpose
- Installation instructions
- Usage examples
- API reference
- Configuration options

### Main README

Update the main README if you:

- Add a new package
- Change the project structure
- Add new features that affect the overall project

## Questions?

If you have questions or need help:

- Open an issue for discussion
- Join our community discussions
- Check existing documentation

## License

By contributing to Invalid8.js, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing! 🎉
