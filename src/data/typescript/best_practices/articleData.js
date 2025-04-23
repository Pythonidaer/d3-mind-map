// articleData.js
const articleData = {
  introduction:
    'TypeScript best practices help teams maintain code quality, consistency, and scalability by establishing guidelines around project structure, naming, configuration, and tooling.',

  keyPrinciples: {
    title: 'Key Principles',
    content: [
      '**Module Organization:** Group code by feature or domain to maintain separation of concerns and discoverability.',
      '**Naming Conventions:** Use consistent and descriptive names for files, classes, functions, and types to improve readability.',
      '**Barrel Files:** Create index.ts files to consolidate exports, simplifying import statements and reducing coupling.',
      '**Monorepo Strategy:** Adopt a monorepo for shared code and easier dependency management across packages.',
      '**Linting & Formatting:** Enforce style standards with ESLint and Prettier to ensure consistency and automate fixes.',
      '**Error Handling:** Define custom error classes and use try-catch blocks to handle runtime exceptions robustly.',
      '**Strict Compiler Settings:** Enable strictOptions (strictNullChecks, noImplicitAny) to catch issues early.',
      '**Documentation with TSDoc:** Document APIs and complex types to aid understanding and enable code generation.',
      '**Feature-Based Folder Structure:** Organize files by feature (e.g., user/, auth/, dashboard/) to scale intuitively.',
      '**Scoped Barrel Files:** Use index.ts within each feature folder to encapsulate domain exports.',
      '**Typed Errors & Union Models:** Use domain-specific error types and union-based return values for clarity and safety.',
    ],
  },

  codeExamples: [
    {
      title: 'Barrel File Example (index.ts)',
      code: "// src/models/index.ts\nexport * from './User';\nexport * from './Product';",
    },
    {
      title: 'Enabling Strict Settings (tsconfig.json)',
      code: `{
  "compilerOptions": {
    "strict": true,
    "strictNullChecks": true,
    "noImplicitAny": true
  }
}`,
    },
    {
      title: 'TSDoc Comment Example',
      code: `/** 
 * Fetches a user by ID.
 * @param userId - The unique identifier for the user.
 * @returns A Promise that resolves to the User object.
 */
function getUser(userId: string): Promise<User> { /* ... */ }`,
    },
    {
      title: 'Feature Folder Organization',
      code: `// src/user/
// ├── index.ts
// ├── components/
// ├── hooks/
// ├── services/
// └── types.ts`,
    },
    {
      title: 'Typed Error Pattern',
      code: `class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}`,
    },
    {
      title: 'Union-Based Result Pattern',
      code: `type Result = { success: true; data: User } | { success: false; error: string };

function fetchUser(): Result {
  // Simulate fetch
  return { success: false, error: 'User not found' };
}`,
    },
  ],

  benefits: {
    title: 'Benefits',
    content: [
      '**Consistency:** Enforced conventions reduce cognitive load and merge conflicts.',
      '**Scalability:** Clear structure and strict typing support large codebases and teams.',
      '**Maintainability:** Automated linting and documentation streamline onboarding and refactoring.',
      '**Reliability:** Strict settings and error-handling patterns catch issues early in development.',
      '**Discoverability:** Folder and barrel file patterns make it easier to locate features and APIs.',
      '**Safety:** Typed errors and compiler flags prevent accidental misuse and runtime crashes.',
    ],
  },

  cons: {
    title: 'Drawbacks',
    content: [
      '**Initial Overhead:** Setting up configs and conventions can take extra time at project start.',
      '**Complexity:** Advanced patterns (monorepo, strict settings) may be overkill for small projects.',
      '**Learning Curve:** Team members new to TypeScript or these tools require training.',
    ],
  },

  antiPatterns: {
    title: 'Anti-Patterns',
    content: [
      '**Inconsistent Module Layout:** Mixing feature-based and layer-based folder structures.',
      '**Ad-Hoc Imports:** Deep-importing individual files instead of using barrel files.',
      '**Disabled Lint Rules:** Turning off rules that enforce critical best practices for convenience.',
      '**Ignoring Compiler Warnings:** Suppressing errors without resolving root causes.',
      '**Catching Everything:** Overuse of `try { } catch (e) {}` without type-checking the error.',
    ],
  },

  conclusion:
    'By adopting these best practices—ranging from project organization to strict typing and automation—you’ll build TypeScript projects that are reliable, maintainable, and easy for teams to collaborate on.',
}

export default articleData
