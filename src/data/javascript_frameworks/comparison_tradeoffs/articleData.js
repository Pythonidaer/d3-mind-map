const articleData = {
  introduction:
    'Choosing a JavaScript framework involves trade-offs across multiple dimensions—performance, community size, flexibility, learning curve, and long-term maintainability. This section outlines the strengths and limitations developers must weigh, and strategies to mitigate common downsides.',

  keyPrinciples: {
    title: 'Key Trade-Off Dimensions',
    content: [
      'Performance: Some frameworks focus on runtime speed (e.g., SolidJS, Svelte), while others balance feature richness and overhead (e.g., Angular, React).',
      'Learning Curve: Lightweight libraries are easier to pick up (e.g., Vue, Svelte), whereas full-featured frameworks may be harder to onboard (e.g., Angular).',
      'Ecosystem: Mature ecosystems like React and Angular offer wide tooling, but newer frameworks like Qwik may lack depth.',
      'Flexibility vs Convention: Highly configurable frameworks give more control (e.g., React), while opinionated ones guide patterns (e.g., Ember, Angular).',
      'Tooling & Dev Experience: The quality of the CLI, debugging tools, error overlays, and integrations can dramatically affect developer satisfaction.',
      'Scalability: Some frameworks scale better in large teams and codebases due to clear patterns and ecosystem maturity.',
    ],
  },

  antiPatterns: {
    title: 'Framework Trade-Off Pitfalls',
    content: [
      'Bloated Bundles: Ignoring tree-shaking or failing to code-split can lead to performance issues on slower networks.',
      'Vendor Lock-In: Deep reliance on custom APIs or tooling can make switching frameworks expensive or unrealistic.',
    ],
  },

  codeExamples: [
    {
      title: 'Tree Shaking with ES Modules',
      code: `// UnusedFunction will be removed if not referenced
  export function UsedFunction() {
    console.log('I am used');
  }
  
  export function UnusedFunction() {
    console.log('I am never used');
  }`,
    },
    {
      title: 'Code Splitting with React.lazy()',
      code: `import React, { Suspense, lazy } from 'react';
  
  const Profile = lazy(() => import('./Profile'));
  
  function App() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Profile />
      </Suspense>
    );
  }`,
    },
    {
      title: 'Vendor Lock-In via Custom Syntax (JSX)',
      code: `function App() {
    return <div>Hello JSX!</div>; // JSX requires a compiler like Babel or framework-specific handling
  }`,
    },
    {
      title: 'Highly Opinionated Folder Structure (Angular)',
      code: `src/
  ├── app/
  │   ├── app.component.ts
  │   ├── app.module.ts
  │   └── app-routing.module.ts // Angular enforces these conventions
  `,
    },
  ],

  conclusion:
    'Every framework offers trade-offs. The right choice depends on project goals, team expertise, and long-term vision. Understanding performance constraints, flexibility, and ecosystem maturity enables informed decision-making that scales with your app.',
}

export default articleData
