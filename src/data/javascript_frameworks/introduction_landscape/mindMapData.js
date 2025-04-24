import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Introduction & Landscape',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Overview of the JavaScript framework ecosystem, key definitions, and landscape trends.',
  },
  {
    id: 'def_framework',
    label: 'What is a \nFramework?',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'A structured foundation of reusable components and conventions to build web applications efficiently.',
  },
  {
    id: 'why_use',
    label: 'Why Use \nFrameworks?',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Benefits of using frameworks, such as productivity, consistency, and performance optimizations.',
  },
  {
    id: 'evolution_trends',
    label: 'Evolution & Trends',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Historical progression and emerging directions in the JavaScript framework ecosystem.',
  },
  {
    id: 'ecosystem_dynamics',
    label: 'Ecosystem \nDynamics',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Community size, maturity of frameworks, and the balance between stability and innovation.',
  },
  {
    id: 'pitfalls',
    label: 'Pitfalls & Fatigue',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Challenges of framework proliferation, frequent breaking changes, and upgrade burden.',
  },
  // Second-level nodes
  {
    id: 'ioc',
    label: 'Inversion of Control',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Frameworks dictate application flow by calling user code instead of vice versa.',
  },
  {
    id: 'structure_conventions',
    label: 'Structure & Conventions',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Opinionated patterns that guide code organization and development practices.',
  },
  {
    id: 'productivity',
    label: 'Productivity',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Pre-built components and tooling accelerate development speed.',
  },
  {
    id: 'consistency',
    label: 'Consistency',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Uniform architecture across the codebase simplifies collaboration.',
  },
  {
    id: 'perf_opt',
    label: 'Performance Optimizations',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Techniques like virtual DOM and compile-time optimizations.',
  },
  {
    id: 'early_dom_libs',
    label: 'Early DOM Libraries',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'jQuery era focused on direct DOM manipulation.',
  },
  {
    id: 'single_page_apps',
    label: 'SPA Frameworks',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Rise of Angular, React, and Vue for single-page applications.',
  },
  {
    id: 'modern_meta',
    label: 'Modern Meta-Frameworks',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Next.js, Nuxt.js, and SvelteKit for SSR and SSG workflows.',
  },
  {
    id: 'community',
    label: 'Community Size',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Number of contributors, ecosystem health, and third-party libraries.',
  },
  {
    id: 'stability_vs_innovation',
    label: 'Stability vs Innovation',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Trade-off between mature platforms and cutting-edge features.',
  },
  {
    id: 'learning_curve',
    label: 'Learning Curve',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Difficulty new developers face when adopting frameworks.',
  },
  {
    id: 'upgrade_path',
    label: 'Upgrade Path',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Effort required to migrate between framework versions.',
  },
]

export const links = [
  { source: 'root', target: 'def_framework' },
  { source: 'root', target: 'why_use' },
  { source: 'root', target: 'evolution_trends' },
  { source: 'root', target: 'ecosystem_dynamics' },
  { source: 'root', target: 'pitfalls' },

  { source: 'def_framework', target: 'ioc' },
  { source: 'def_framework', target: 'structure_conventions' },

  { source: 'why_use', target: 'productivity' },
  { source: 'why_use', target: 'consistency' },
  { source: 'why_use', target: 'perf_opt' },

  { source: 'evolution_trends', target: 'early_dom_libs' },
  { source: 'evolution_trends', target: 'single_page_apps' },
  { source: 'evolution_trends', target: 'modern_meta' },

  { source: 'ecosystem_dynamics', target: 'community' },
  { source: 'ecosystem_dynamics', target: 'stability_vs_innovation' },

  { source: 'pitfalls', target: 'learning_curve' },
  { source: 'pitfalls', target: 'upgrade_path' },
]
