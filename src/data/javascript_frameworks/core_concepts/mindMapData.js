import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Core Concepts',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Fundamental principles behind JavaScript frameworks: how they work, what they offer, and what trade-offs they introduce.',
  },

  // Top-level core principles
  {
    id: 'component_model',
    label: 'Component\nModel',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Frameworks use reusable components to encapsulate UI + logic.',
  },
  {
    id: 'virtual_dom',
    label: 'Virtual\nDOM',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'An in-memory DOM representation that enables efficient diffing and re-rendering (used in React, Vue, etc.).',
  },
  {
    id: 'reactivity',
    label: 'Reactivity',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Automatic DOM updates when underlying state changes. Seen in Vue, Svelte, SolidJS.',
  },
  {
    id: 'declarative_ui',
    label: 'Declarative\nUI',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Describe what the UI should look like for a given state, rather than imperatively manipulating DOM.',
  },
  {
    id: 'ssr',
    label: 'Server-Side\nRendering (SSR)',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Generates HTML on the server for faster load times and SEO, then hydrates on the client.',
  },

  // Second-level elaborations
  {
    id: 'component_reuse',
    label: 'Reusable\nComponents',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Encapsulate logic and UI once, then use across pages or apps.',
  },
  {
    id: 'component_tree',
    label: 'Component\nTrees',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'UIs are structured as trees of nested components.',
  },

  {
    id: 'dom_diffing',
    label: 'DOM\nDiffing',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Virtual DOM enables efficient re-rendering by comparing changes and updating only what’s necessary.',
  },
  {
    id: 'hydration',
    label: 'Hydration\nTrade-offs',
    shape: 'diamond',
    color: 'nodePositive3',
    definition:
      'Hydration boosts SEO but may introduce a pause before interactivity. Use SSR selectively based on app needs.',
  },

  {
    id: 'fine_grained',
    label: 'Fine-Grained\nReactivity',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Updates only the exact DOM nodes affected by a state change (e.g., SolidJS).',
  },
  {
    id: 'signal_model',
    label: 'Signals\n& Observables',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Reactivity modeled with tracked values and subscriptions (used in SolidJS, Preact Signals).',
  },

  {
    id: 'jsx_templates',
    label: 'JSX /\nTemplate Syntax',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Templates are written in HTML-like syntax (JSX, Vue templates) and interpreted by compilers or VDOM engines.',
  },
  {
    id: 'ui_state_fn',
    label: 'UI as a\nFunction of State',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Frameworks re-render the UI automatically when the underlying state changes.',
  },

  // Negative concepts
  {
    id: 'hydration_cost',
    label: 'Hydration\nOverhead',
    shape: 'diamond',
    color: 'nodeNegative2',
    definition:
      'Hydration adds JS bundle weight and delays interactivity. May be unnecessary for mostly static pages.',
  },
]

export const links = [
  { source: 'root', target: 'component_model' },
  { source: 'component_model', target: 'component_reuse' },
  { source: 'component_model', target: 'component_tree' },

  { source: 'root', target: 'virtual_dom' },
  { source: 'virtual_dom', target: 'dom_diffing' },

  { source: 'root', target: 'reactivity' },
  { source: 'reactivity', target: 'fine_grained' },
  { source: 'reactivity', target: 'signal_model' },

  { source: 'root', target: 'declarative_ui' },
  { source: 'declarative_ui', target: 'jsx_templates' },
  { source: 'declarative_ui', target: 'ui_state_fn' },

  { source: 'root', target: 'ssr' },
  { source: 'ssr', target: 'hydration' },
  { source: 'hydration', target: 'hydration_cost' },
]
