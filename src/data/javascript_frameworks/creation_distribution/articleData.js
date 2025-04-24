const articleData = {
  introduction:
    'Building your own JavaScript framework or library is an advanced but rewarding endeavor. It allows you to control architecture, create reusable tools, and contribute to the ecosystem. Once created, these tools can be distributed via npm to share with others.',

  keyPrinciples: {
    title: 'Frameworks vs. Libraries — Creation Paths',
    content: [
      'Framework Creation: Requires architectural decisions, lifecycle control, and often a CLI tool for dev experience.',
      'Library Creation: Focuses on a narrow utility or reusable logic (e.g., date formatting, form validation) with minimal dependencies.',
      'Distribution: Once complete, tools should be packaged, documented, versioned, and published to npm for public use.',
    ],
  },

  antiPatterns: {
    title: 'Anti-Patterns in Packaging & Distribution',
    content: [
      'Improper Versioning: Failing to use semantic versioning leads to breaking changes that surprise users.',
      'No Documentation: Publishing a package without a README.md reduces trust and limits usability.',
    ],
  },

  codeExamples: [
    {
      title: 'Create a Library Utility (math-utils.js)',
      code: `// math-utils.js
  export function add(a, b) {
    return a + b;
  }
  
  export function multiply(a, b) {
    return a * b;
  }`,
    },
    {
      title: 'Avoid Shared State in Libraries',
      code: `// counter.js (BAD — shared state across imports)
  let count = 0;
  export function increment() { count++; return count; }
  
  // Use pure functions instead
  export function createCounter() {
    let count = 0;
    return () => ++count;
  }`,
    },
    {
      title: 'Initialize Your Package',
      code: `// In terminal
  npm init -y // Creates package.json
  
  // Then add README.md and entry file
  // Example: index.js + README.md`,
    },
    {
      title: 'Publish to npm',
      code: `// Make sure you're logged in
  npm login
  
  // Then publish
  npm publish
  
  // Update with semver
  npm version patch // or minor / major`,
    },
  ],

  conclusion:
    'Whether you’re building a lightweight library or a full-featured framework, creating your own tools is a powerful way to learn, iterate, and contribute. Packaging them well—with documentation and version control—is key to making them useful to others.',
}

export default articleData
