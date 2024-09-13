# Angular Code Quality Enforcer

## Project Description

This project demonstrates the setup and configuration of ESLint and Prettier in an Angular environment to improve code quality and consistency. It includes custom ESLint rules, Prettier integration, npm scripts for linting and formatting, and pre-commit hooks to ensure code quality before each commit.

## Setup Instructions

1. Clone the repository:

   ```
   git clone https://github.com/your-username/angular-code-quality-enforcer.git
   cd angular-code-quality-enforcer
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up ESLint:

   - ESLint packages are already installed as devDependencies
   - The `.eslintrc.json` file is configured with recommended Angular ESLint rules and custom rules

4. Set up Prettier:

   - Prettier is installed and configured to work alongside ESLint
   - The `.prettierrc` file contains the Prettier configuration

5. Set up VS Code (optional):
   - Install the ESLint and Prettier extensions
   - Configure VS Code to format on save using Prettier

## ESLint and Prettier Configurations

### ESLint Configuration

The `.eslintrc.json` file extends the recommended Angular ESLint configuration and includes two custom rules:

1. `"no-console": "warn"`: Warns when `console.log` statements are used
2. `"max-len": ["error", { "code": 100 }]`: Enforces a maximum line length of 100 characters

### Prettier Configuration

The `.prettierrc` file sets the following options:

```json
{
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 100,
  "tabWidth": 2,
  "semi": true
}
```

## npm Scripts

The following npm scripts are available:

- `npm run lint`: Runs ESLint on the entire project
- `npm run format`: Runs Prettier on all files
- `npm run lint:fix`: Runs ESLint with auto-fix on the entire project
- `npm run format:fix`: Runs Prettier with auto-fix on all files
- `npm run code-quality`: Runs both linting and formatting checks
- `npm run code-quality:fix`: Runs both linting and formatting with auto-fix

## Using Linting and Formatting Tools

1. To check for linting issues:

   ```
   npm run lint
   ```

2. To automatically fix linting issues:

   ```
   npm run lint:fix
   ```

3. To check formatting:

   ```
   npm run format
   ```

4. To automatically format code:

   ```
   npm run format:fix
   ```

5. To run both linting and formatting checks:

   ```
   npm run code-quality
   ```

6. To automatically fix both linting and formatting issues:
   ```
   npm run code-quality:fix
   ```

Pre-commit Hook:
A pre-commit hook is set up using husky to run linting and formatting checks before each commit. If there are any issues, the commit will be blocked until they are resolved.
