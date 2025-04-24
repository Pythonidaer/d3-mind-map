import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Emerging & Meta-Frameworks',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Advanced frameworks built on top of core frameworks to enhance performance, routing, and SSR capabilities.',
  },

  // First-level meta frameworks
  {
    id: 'nextjs',
    label: 'Next.js',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'React-based framework supporting hybrid static & server rendering with file-based routing and API routes.',
  },
  {
    id: 'nuxtjs',
    label: 'Nuxt.js',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Vue-based meta-framework offering SSR, SSG, and modular architecture with file-based routing.',
  },
  {
    id: 'sveltekit',
    label: 'SvelteKit',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Meta-framework for Svelte with built-in routing, SSR, and first-class TypeScript support.',
  },
  {
    id: 'qwik',
    label: 'Qwik',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Resumable framework aiming for instant-on performance by eliminating hydration through lazy loading.',
  },

  // Next.js features
  {
    id: 'next_file_routing',
    label: 'File-Based Routing',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Routes based on filesystem structure under /pages or /app.',
  },
  {
    id: 'next_ssg_ssr',
    label: 'SSG & SSR Support',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Supports static site generation and server-side rendering with `getStaticProps` and `getServerSideProps`.',
  },
  {
    id: 'next_api_routes',
    label: 'API Routes',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Create serverless backend logic directly in the same repo.',
  },

  // Nuxt.js features
  {
    id: 'nuxt_modules',
    label: 'Module Ecosystem',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Ecosystem of prebuilt modules for features like auth, CMS, analytics, and more.',
  },
  {
    id: 'nuxt_ssr_ssg',
    label: 'SSR & SSG Modes',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Flexible rendering modes via serverMiddleware, generate, or hybrid deployment.',
  },

  // SvelteKit features
  {
    id: 'sveltekit_endpoints',
    label: 'Endpoints & Routing',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Define routes and backend logic in a file-system based approach under /src/routes.',
  },
  {
    id: 'sveltekit_ssr_ts',
    label: 'SSR + TypeScript',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Built-in SSR engine with tight TypeScript integration.',
  },

  // Qwik features
  {
    id: 'qwik_resumability',
    label: 'Resumability',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'State and execution context are serialized and resumed in the browser.',
  },
  {
    id: 'qwik_lazy_loading',
    label: 'Lazy Execution Model',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Executes only the code needed for initial interaction; defers everything else.',
  },
]

export const links = [
  { source: 'root', target: 'nextjs' },
  { source: 'root', target: 'nuxtjs' },
  { source: 'root', target: 'sveltekit' },
  { source: 'root', target: 'qwik' },

  { source: 'nextjs', target: 'next_file_routing' },
  { source: 'nextjs', target: 'next_ssg_ssr' },
  { source: 'nextjs', target: 'next_api_routes' },

  { source: 'nuxtjs', target: 'nuxt_modules' },
  { source: 'nuxtjs', target: 'nuxt_ssr_ssg' },

  { source: 'sveltekit', target: 'sveltekit_endpoints' },
  { source: 'sveltekit', target: 'sveltekit_ssr_ts' },

  { source: 'qwik', target: 'qwik_resumability' },
  { source: 'qwik', target: 'qwik_lazy_loading' },
]
