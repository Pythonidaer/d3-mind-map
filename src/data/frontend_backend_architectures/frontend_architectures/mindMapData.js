import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Frontend Architectures',
    shape: 'roundRect',
    color: 'root',
    definition:
      'The structural design and organization of frontend applications, determining how components, data, rendering, and communication are managed.',
  },

  // Node 2 categories
  {
    id: 'rendering_strategies',
    label: 'Rendering\nStrategies',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Strategies that determine how and when frontend content is rendered.',
    parent: 'root',
  },
  {
    id: 'component_and_state_patterns',
    label: 'Component &\nState Patterns',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Architectural patterns for managing UI structure and application state.',
    parent: 'root',
  },
  {
    id: 'modular_frontends',
    label: 'Modular /\nExtensible \nFrontends',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Architectures focused on decomposing frontend applications into smaller, manageable pieces.',
    parent: 'root',
  },

  // Node 3 under Rendering Strategies
  {
    id: 'csr',
    label: 'Client-Side\nRendering (CSR)',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Rendering happens entirely in the browser after JavaScript is downloaded.',
    parent: 'rendering_strategies',
  },
  {
    id: 'ssr',
    label: 'Server-Side\nRendering (SSR)',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'HTML is generated on the server for each request and sent to the client.',
    parent: 'rendering_strategies',
  },
  {
    id: 'isomorphic',
    label: 'Isomorphic /\nUniversal Rendering',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Same codebase runs on both client and server to render the application.',
    parent: 'rendering_strategies',
  },
  {
    id: 'isr',
    label: 'Incremental Static\nRegeneration (ISR)',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Static pages are updated incrementally without rebuilding the entire site.',
    parent: 'rendering_strategies',
  },
  {
    id: 'pwa',
    label: 'Progressive Web\nApp (PWA)',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Web applications with offline-first capabilities and native-like experiences.',
    parent: 'rendering_strategies',
  },
  {
    id: 'islands_architecture',
    label: 'Islands\nArchitecture',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Only interactive parts (islands) are hydrated with JavaScript; the rest remains static.',
    parent: 'rendering_strategies',
  },
  {
    id: 'jamstack',
    label: 'Jamstack\nArchitecture',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Pre-rendered static sites enhanced with JavaScript and APIs.',
    parent: 'rendering_strategies',
  },
  {
    id: 'buildless_architecture',
    label: 'Buildless\nArchitecture',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Shipping native browser-compatible modules without a build step.',
    parent: 'rendering_strategies',
  },

  // Node 3 under Component and State Patterns
  {
    id: 'component_based',
    label: 'Component-Based\nArchitecture',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Building UIs from modular, reusable components.',
    parent: 'component_and_state_patterns',
  },
  {
    id: 'functional_core_imperative_shell',
    label: 'Functional Core /\nImperative Shell',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'UI logic is pure and functional; side-effects are handled imperatively.',
    parent: 'component_and_state_patterns',
  },
  {
    id: 'state_machine_ui',
    label: 'State Machine-\nBased UI',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Managing UI states explicitly using finite state machines.',
    parent: 'component_and_state_patterns',
  },
  {
    id: 'flux_redux',
    label: 'Flux / Redux\nArchitecture',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Managing application state with unidirectional data flow and a single source of truth.',
    parent: 'component_and_state_patterns',
  },
  {
    id: 'mvvm',
    label: 'MVVM\n(Model-View-ViewModel)',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Separating UI logic into Model, View, and ViewModel for better maintainability.',
    parent: 'component_and_state_patterns',
  },
  {
    id: 'mvc',
    label: 'MVC\n(Model-View-Controller)',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Traditional separation of concerns between Model, View, and Controller.',
    parent: 'component_and_state_patterns',
  },

  // Node 3 under Modular Frontends
  {
    id: 'micro_frontends',
    label: 'Micro Frontends',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Decomposing a frontend into smaller, independently deployable apps.',
    parent: 'modular_frontends',
  },
  {
    id: 'module_federation',
    label: 'Module Federation',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Webpack feature for sharing code between multiple frontend apps at runtime.',
    parent: 'modular_frontends',
  },
  {
    id: 'web_components',
    label: 'Web Components\nArchitecture',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Building reusable custom HTML elements encapsulated from the rest of the code.',
    parent: 'modular_frontends',
  },
  {
    id: 'meta_framework',
    label: 'Meta-Framework\nArchitecture',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Frameworks built on top of libraries to provide SSR, routing, and tooling (e.g., Next.js, Remix).',
    parent: 'modular_frontends',
  },
]

export const links = [
  { source: 'root', target: 'rendering_strategies' },
  { source: 'root', target: 'component_and_state_patterns' },
  { source: 'root', target: 'modular_frontends' },

  { source: 'rendering_strategies', target: 'csr' },
  { source: 'rendering_strategies', target: 'ssr' },
  { source: 'rendering_strategies', target: 'isomorphic' },
  { source: 'rendering_strategies', target: 'isr' },
  { source: 'rendering_strategies', target: 'pwa' },
  { source: 'rendering_strategies', target: 'islands_architecture' },
  { source: 'rendering_strategies', target: 'jamstack' },
  { source: 'rendering_strategies', target: 'buildless_architecture' },

  { source: 'component_and_state_patterns', target: 'component_based' },
  {
    source: 'component_and_state_patterns',
    target: 'functional_core_imperative_shell',
  },
  { source: 'component_and_state_patterns', target: 'state_machine_ui' },
  { source: 'component_and_state_patterns', target: 'flux_redux' },
  { source: 'component_and_state_patterns', target: 'mvvm' },
  { source: 'component_and_state_patterns', target: 'mvc' },

  { source: 'modular_frontends', target: 'micro_frontends' },
  { source: 'modular_frontends', target: 'module_federation' },
  { source: 'modular_frontends', target: 'web_components' },
  { source: 'modular_frontends', target: 'meta_framework' },
]
