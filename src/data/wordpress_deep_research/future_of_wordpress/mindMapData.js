import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Future of\nWordPress',
    shape: 'roundRect',
    color: 'root',
    definition: 'A forward-looking view on WordPress’s evolution, including technology trends, ecosystem shifts, and expected roadmap changes through 2025 and beyond.',
  },

  // Positive Nodes - Level 1
  {
    id: 'block_editor_evolution',
    label: 'Block Editor\nEvolution',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'The ongoing development of the Gutenberg block editor and its expansion into full site editing, workflows, and performance.'
  },
  {
    id: 'headless_architecture',
    label: 'Headless\nArchitecture',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Continued growth in decoupled WordPress setups using REST or GraphQL to power modern frontends like React or Vue.'
  },
  {
    id: 'ai_integration',
    label: 'AI\nIntegration',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Emerging features using AI for content suggestions, layout generation, accessibility checks, and editor enhancements.'
  },
  {
    id: 'performance_focus',
    label: 'Performance\nFocus',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Improvements in load speed, asset bundling, block rendering, and server-side optimizations, including speculative loading and caching advances.'
  },
  {
    id: 'release_cycle',
    label: 'Annual\nRelease Cycle',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Starting in 2025, WordPress core will shift to one major release per year to improve planning and stability.'
  },
  {
    id: 'editorial_workflows',
    label: 'Improved\nWorkflows',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Enhancements to the editorial experience, such as collaborative editing, content scheduling, and previewing tools.'
  },

  // Level 2 Positive Nodes
  {
    id: 'block_patterns',
    label: 'Block\nPatterns',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'block_editor_evolution',
    definition: 'Reusable block layouts that streamline content creation by providing pre-designed structures.'
  },
  {
    id: 'site_editor',
    label: 'Full Site\nEditor',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'block_editor_evolution',
    definition: 'Extending the block interface to headers, footers, sidebars, and templates.'
  },
  {
    id: 'gutenberg_phase3',
    label: 'Gutenberg\nPhase 3+4',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'block_editor_evolution',
    definition: 'Upcoming phases that focus on collaboration, multilingual support, and performance.'
  },
  {
    id: 'wpgraphqL_growth',
    label: 'WPGraphQL\nAdoption',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'headless_architecture',
    definition: 'GraphQL adoption for more efficient API querying and frontend flexibility in decoupled WordPress.'
  },
  {
    id: 'cloud_integrations',
    label: 'Cloud\nIntegrations',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'ai_integration',
    definition: 'AI-powered tools integrated into cloud platforms (e.g., Jetpack AI, OpenAI plugins, image enhancements).'
  },

  // Negative Nodes
  {
    id: 'nodeNegative1_learning_curve',
    label: 'Learning\nCurve',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'The growing complexity of WordPress and its tooling may alienate beginners or non-developers.'
  },
  {
    id: 'nodeNegative1_plugin_bloat',
    label: 'Plugin\nBloat',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Too many plugins or poor development practices may cause performance or security issues as functionality expands.'
  },
  {
    id: 'nodeNegative1_fragmentation',
    label: 'Theme & Editor\nFragmentation',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'The ecosystem may fragment between classic themes, hybrid approaches, and block-first paradigms.'
  },

  // Sub-Negatives
  {
    id: 'nodeNegative2_editor_compatibility',
    label: 'Editor\nCompatibility',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'nodeNegative1_fragmentation',
    definition: 'Classic editor users may face difficulty transitioning to blocks and full site editing workflows.'
  },
  {
    id: 'nodeNegative2_ui_overload',
    label: 'UI\nOverload',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'nodeNegative1_learning_curve',
    definition: 'An overabundance of options and controls may overwhelm new users or occasional editors.'
  }
]

export const links = [
  { source: 'root', target: 'block_editor_evolution' },
  { source: 'root', target: 'headless_architecture' },
  { source: 'root', target: 'ai_integration' },
  { source: 'root', target: 'performance_focus' },
  { source: 'root', target: 'release_cycle' },
  { source: 'root', target: 'editorial_workflows' },
  { source: 'root', target: 'nodeNegative1_learning_curve' },
  { source: 'root', target: 'nodeNegative1_plugin_bloat' },
  { source: 'root', target: 'nodeNegative1_fragmentation' },

  { source: 'block_editor_evolution', target: 'block_patterns' },
  { source: 'block_editor_evolution', target: 'site_editor' },
  { source: 'block_editor_evolution', target: 'gutenberg_phase3' },
  { source: 'headless_architecture', target: 'wpgraphqL_growth' },
  { source: 'ai_integration', target: 'cloud_integrations' },

  { source: 'nodeNegative1_fragmentation', target: 'nodeNegative2_editor_compatibility' },
  { source: 'nodeNegative1_learning_curve', target: 'nodeNegative2_ui_overload' }
]
