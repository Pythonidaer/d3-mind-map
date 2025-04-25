import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Architecture & Workflows',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Structural patterns and development workflows that shape how React and Next.js applications are built, deployed, and maintained.',
  },

  // Standalone React Applications
  {
    id: 'standalone_react',
    label: 'Standalone\nReact Apps',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'React applications focused on client-side rendering (CSR), often using libraries like React Router and manual data-fetching solutions.',
  },
  {
    id: 'standalone_pros',
    label: 'Pros of\nStandalone React',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'standalone_react',
    definition:
      'High flexibility, decoupled frontend, and full control over architecture and routing.',
  },
  {
    id: 'standalone_cons',
    label: 'Cons of\nStandalone React',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'standalone_react',
    definition:
      'Requires more manual setup for routing, SEO, data fetching, and server communication.',
  },

  // Next.js Applications
  {
    id: 'nextjs_apps',
    label: 'Next.js\nApplications',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Frameworks built on React with built-in SSR, SSG, routing, and API capabilities for full-stack web development.',
  },
  {
    id: 'nextjs_pros',
    label: 'Pros of\nNext.js',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'nextjs_apps',
    definition:
      'Built-in optimizations (SSR, SSG, ISR), automatic routing, hybrid server-client capabilities, SEO advantages.',
  },
  {
    id: 'nextjs_cons',
    label: 'Cons of\nNext.js',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'nextjs_apps',
    definition:
      'Steeper learning curve; certain custom server setups (e.g., custom Express servers) can complicate deployments on serverless hosts.',
  },

  // Architecture Considerations
  {
    id: 'architecture_considerations',
    label: 'Architecture\nConsiderations',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Important decisions regarding application structure, deployment strategy, and performance optimizations.',
  },
  {
    id: 'csr_vs_ssr',
    label: 'CSR vs SSR\nDecisions',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'architecture_considerations',
    definition:
      'Choosing whether to render on client, server, or pre-generate pages based on SEO, performance, and dynamic content needs.',
  },
  {
    id: 'routing_strategies',
    label: 'Routing\nStrategies',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'architecture_considerations',
    definition:
      'Using file-system routing in Next.js vs manual routing in standalone React apps; considering dynamic, nested, and static routes.',
  },
  {
    id: 'api_design',
    label: 'API Layer\nDesign',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'architecture_considerations',
    definition:
      'Choosing between API Routes (Next.js) or separate API servers; aligning API design with frontend data-fetching strategies.',
  },

  // Pitfalls
  {
    id: 'architecture_pitfalls',
    label: 'Architecture\nPitfalls',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition:
      'Common mistakes when designing the overall structure and development workflows of React and Next.js apps.',
  },
  {
    id: 'overcomplication',
    label: 'Overcomplicated\nArchitecture',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'architecture_pitfalls',
    definition:
      'Introducing unnecessary microservices, redundant layers, or complex routing strategies in simple applications.',
  },
  {
    id: 'wrong_ssr_usage',
    label: 'Improper SSR\nUsage',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'architecture_pitfalls',
    definition:
      'Using server-side rendering where static generation or client-side rendering would perform better.',
  },
  {
    id: 'tight_coupling',
    label: 'Tight\nCoupling',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'architecture_pitfalls',
    definition:
      'Binding frontend and backend code too closely together, reducing scalability and flexibility in larger applications.',
  },
]

export const links = [
  // Core branches
  { source: 'root', target: 'standalone_react' },
  { source: 'root', target: 'nextjs_apps' },
  { source: 'root', target: 'architecture_considerations' },
  { source: 'root', target: 'architecture_pitfalls' },

  // Standalone React details
  { source: 'standalone_react', target: 'standalone_pros' },
  { source: 'standalone_react', target: 'standalone_cons' },

  // Next.js Applications details
  { source: 'nextjs_apps', target: 'nextjs_pros' },
  { source: 'nextjs_apps', target: 'nextjs_cons' },

  // Architecture Considerations details
  { source: 'architecture_considerations', target: 'csr_vs_ssr' },
  { source: 'architecture_considerations', target: 'routing_strategies' },
  { source: 'architecture_considerations', target: 'api_design' },

  // Pitfalls details
  { source: 'architecture_pitfalls', target: 'overcomplication' },
  { source: 'architecture_pitfalls', target: 'wrong_ssr_usage' },
  { source: 'architecture_pitfalls', target: 'tight_coupling' },
]
