import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'TypeScript Integration',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Enhancing React and Next.js applications with static typing for improved developer experience, code quality, and maintainability.',
  },

  // Benefits
  {
    id: 'typescript_benefits',
    label: 'Benefits of\nTypeScript',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Provides static typing, better autocompletion, earlier error detection, and improved documentation through types.',
  },
  {
    id: 'type_safety',
    label: 'Type\nSafety',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'typescript_benefits',
    definition:
      'Catch potential bugs at compile-time rather than runtime, ensuring safer application logic.',
  },
  {
    id: 'developer_experience',
    label: 'Developer\nExperience',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'typescript_benefits',
    definition:
      'Intelligent autocomplete, faster debugging, and easier refactoring with IDE type awareness.',
  },

  // TypeScript in React
  {
    id: 'typescript_react',
    label: 'Using TypeScript\nin React',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Adding type safety to React components, props, context, hooks, and state management.',
  },
  {
    id: 'typing_props',
    label: 'Typing\nProps',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'typescript_react',
    definition:
      'Defining interfaces or types for component props to validate expected input shapes.',
  },
  {
    id: 'typing_state',
    label: 'Typing\nState',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'typescript_react',
    definition:
      'Providing initial values and state types to prevent runtime type mismatches.',
  },

  // TypeScript in Next.js
  {
    id: 'typescript_nextjs',
    label: 'Using TypeScript\nin Next.js',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Next.js offers built-in TypeScript support with automatic configuration and strong typing for pages, API routes, and server functions.',
  },
  {
    id: 'pages_typing',
    label: 'Pages and API\nRoute Typing',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'typescript_nextjs',
    definition:
      'Strongly typing Next.js page props, query parameters, and API request/response shapes.',
  },
  {
    id: 'server_functions_typing',
    label: 'Typing\nServer Functions',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'typescript_nextjs',
    definition:
      'Providing types for getServerSideProps, getStaticProps, and middleware handlers to ensure consistent server-side behavior.',
  },

  // Progressive Enhancement
  {
    id: 'progressive_adoption',
    label: 'Progressive\nAdoption',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Gradually migrating files from JavaScript to TypeScript over time, allowing for incremental hardening without a full rewrite.',
  },
  {
    id: 'mixed_codebase_support',
    label: 'Mixed JS/TS\nSupport',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'progressive_adoption',
    definition:
      'React and Next.js allow both .js and .ts/.tsx files to coexist, enabling progressive TypeScript adoption in real-world projects.',
  },

  // Pitfalls
  {
    id: 'typescript_pitfalls',
    label: 'TypeScript\nPitfalls',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition:
      'Common mistakes when adopting TypeScript improperly or inconsistently in React/Next.js projects.',
  },
  {
    id: 'overengineering_types',
    label: 'Overengineering\nTypes',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'typescript_pitfalls',
    definition:
      'Writing overly complex or redundant type definitions that slow down development instead of improving safety.',
  },
  {
    id: 'inconsistent_typing',
    label: 'Inconsistent\nTyping',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'typescript_pitfalls',
    definition:
      'Mixing typed and untyped code across the codebase, leading to unreliable type guarantees and confusion.',
  },
]

export const links = [
  { source: 'root', target: 'typescript_benefits' },
  { source: 'root', target: 'typescript_react' },
  { source: 'root', target: 'typescript_nextjs' },
  { source: 'root', target: 'progressive_adoption' },
  { source: 'root', target: 'typescript_pitfalls' },

  { source: 'typescript_benefits', target: 'type_safety' },
  { source: 'typescript_benefits', target: 'developer_experience' },

  { source: 'typescript_react', target: 'typing_props' },
  { source: 'typescript_react', target: 'typing_state' },

  { source: 'typescript_nextjs', target: 'pages_typing' },
  { source: 'typescript_nextjs', target: 'server_functions_typing' },

  { source: 'progressive_adoption', target: 'mixed_codebase_support' },

  { source: 'typescript_pitfalls', target: 'overengineering_types' },
  { source: 'typescript_pitfalls', target: 'inconsistent_typing' },
]
