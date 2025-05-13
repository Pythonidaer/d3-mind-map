import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Essential\nFigma Plugins',
    shape: 'roundRect',
    color: 'root',
    definition: 'Community-developed tools to extend Figma’s functionality for developers.',
  },

  // Positive Level 1
  {
    id: 'code_gen_inspection',
    label: 'Code Gen\n& Inspection',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Plugins that generate code or enhance design-to-code inspection.',
  },
  {
    id: 'asset_export_opt',
    label: 'Asset Export\n& Optimization',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Tools for batch exporting and optimizing images and icons.',
  },
  {
    id: 'editor_integrations',
    label: 'Editor\nIntegrations',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Plugins that bridge Figma with code editors and IDEs.',
  },
  {
    id: 'pm_integrations',
    label: 'PM & Repo\nIntegrations',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Connectors for project management and version control systems.',
  },
  {
    id: 'spec_documentation',
    label: 'Spec &\nDocumentation',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Tools for generating specs, design tokens, and style docs.',
  },

  // Positive Level 2 elaborations
  // Code Gen & Inspection children
  {
    id: 'cssgen_plugin',
    label: 'CSSGen',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'code_gen_inspection',
    definition: 'Generate CSS variables and code snippets directly from Styles.',
  },
  {
    id: 'designdoc_plugin',
    label: 'DesignDoc',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'code_gen_inspection',
    definition: 'Add annotations and measurements to designs for clearer specs.',
  },
  {
    id: 'anima_plugin',
    label: 'Anima',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'code_gen_inspection',
    definition: 'Export responsive HTML/CSS code from Figma layouts.',
  },

  // Asset Export & Optimization children
  {
    id: 'tinyimage_plugin',
    label: 'TinyImage\nCompressor',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'asset_export_opt',
    definition: 'Optimize PNG/JPG assets to reduce file size for web use.',
  },
  {
    id: 'svgo_plugin',
    label: 'SVGO\nCompressor',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'asset_export_opt',
    definition: 'Minify and optimize SVG code for faster load times.',
  },
  {
    id: 'batch_export_plugin',
    label: 'Batch\nExport',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'asset_export_opt',
    definition: 'Configure and export multiple assets in one operation.',
  },

  // Editor Integrations children
  {
    id: 'figma_vs_code',
    label: 'Figma for\nVS Code',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'editor_integrations',
    definition: 'Inspect Figma designs and copy code snippets inside VS Code.',
  },
  {
    id: 'tokens_vs_code',
    label: 'Figma Tokens\nExtension',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'editor_integrations',
    definition: 'Sync design token values into your code editor automatically.',
  },

  // PM & Repo Integrations children
  {
    id: 'jira_plugin',
    label: 'Jira\nConnector',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'pm_integrations',
    definition: 'Link Figma frames and comments to Jira tickets.',
  },
  {
    id: 'github_plugin',
    label: 'GitHub\nIntegration',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'pm_integrations',
    definition: 'Attach design previews and version links to GitHub issues.',
  },
  {
    id: 'storybook_plugin',
    label: 'Storybook\nSync',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'pm_integrations',
    definition: 'Connect Figma components with Storybook stories for live docs.',
  },

  // Spec & Documentation children
  {
    id: 'eight_shapes',
    label: 'EightShapes\nSpecs',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'spec_documentation',
    definition: 'Auto-generate detailed specs and redlines from your designs.',
  },
  {
    id: 'style_organizer',
    label: 'Style\nOrganizer',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'spec_documentation',
    definition: 'Identify and clean unused or duplicate Styles in the file.',
  },
  {
    id: 'figma_tokens_plugin',
    label: 'Figma\nTokens',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'spec_documentation',
    definition: 'Manage design tokens and export them in JSON or CSS formats.',
  },

  // Negative Level 1 (anti-patterns)
  {
    id: 'ignoring_plugins',
    label: 'Ignoring\nPlugins',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Manually handling tasks that plugins could automate.',
  },
  {
    id: 'plugin_overload',
    label: 'Plugin\nOverload',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Installing too many plugins, causing confusion and slowdowns.',
  },
  {
    id: 'unvetted_plugins',
    label: 'Unvetted\nPlugins',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Using third-party plugins without reviewing security or performance.',
  },
  {
    id: 'outdated_plugins',
    label: 'Outdated\nPlugins',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Failing to update plugins, leading to compatibility issues.',
  },

  // Negative Level 2 elaborations
  // Ignoring Plugins children
  {
    id: 'manual_work',
    label: 'Manual\nWork',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'ignoring_plugins',
    definition: 'Repeating time-consuming tasks that plugins automate.',
  },
  {
    id: 'repetitive_errors',
    label: 'Repetitive\nErrors',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'ignoring_plugins',
    definition: 'Increased mistakes from manual exports and inspections.',
  },

  // Plugin Overload children
  {
    id: 'sluggish_performance',
    label: 'Sluggish\nPerformance',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'plugin_overload',
    definition: 'Excessive plugins slow Figma startup and editing.',
  },
  {
    id: 'tool_sprawl',
    label: 'Tool\nSprawl',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'plugin_overload',
    definition: 'Too many similar plugins cause feature overlap and confusion.',
  },

  // Unvetted Plugins children
  {
    id: 'security_risks',
    label: 'Security\nRisks',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'unvetted_plugins',
    definition: 'Malicious plugins can access or leak sensitive design data.',
  },
  {
    id: 'privacy_concerns',
    label: 'Privacy\nConcerns',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'unvetted_plugins',
    definition: 'Third-party code may collect usage or asset information.',
  },

  // Outdated Plugins children
  {
    id: 'compatibility_issues',
    label: 'Compatibility\nIssues',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'outdated_plugins',
    definition: 'Plugins break or misbehave after Figma updates.',
  },
  {
    id: 'missing_features',
    label: 'Missing\nFeatures',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'outdated_plugins',
    definition: 'Not updating means you miss new improvements or fixes.',
  }
];

export const links = [
  // Root → Positive Level 1
  { source: 'root', target: 'code_gen_inspection' },
  { source: 'root', target: 'asset_export_opt' },
  { source: 'root', target: 'editor_integrations' },
  { source: 'root', target: 'pm_integrations' },
  { source: 'root', target: 'spec_documentation' },

  // Positive Level 1 → Level 2 elaborations
  { source: 'code_gen_inspection', target: 'cssgen_plugin' },
  { source: 'code_gen_inspection', target: 'designdoc_plugin' },
  { source: 'code_gen_inspection', target: 'anima_plugin' },

  { source: 'asset_export_opt', target: 'tinyimage_plugin' },
  { source: 'asset_export_opt', target: 'svgo_plugin' },
  { source: 'asset_export_opt', target: 'batch_export_plugin' },

  { source: 'editor_integrations', target: 'figma_vs_code' },
  { source: 'editor_integrations', target: 'tokens_vs_code' },

  { source: 'pm_integrations', target: 'jira_plugin' },
  { source: 'pm_integrations', target: 'github_plugin' },
  { source: 'pm_integrations', target: 'storybook_plugin' },

  { source: 'spec_documentation', target: 'eight_shapes' },
  { source: 'spec_documentation', target: 'style_organizer' },
  { source: 'spec_documentation', target: 'figma_tokens_plugin' },

  // Root → Negative Level 1
  { source: 'root', target: 'ignoring_plugins' },
  { source: 'root', target: 'plugin_overload' },
  { source: 'root', target: 'unvetted_plugins' },
  { source: 'root', target: 'outdated_plugins' },

  // Negative Level 1 → Level 2 elaborations
  { source: 'ignoring_plugins', target: 'manual_work' },
  { source: 'ignoring_plugins', target: 'repetitive_errors' },

  { source: 'plugin_overload', target: 'sluggish_performance' },
  { source: 'plugin_overload', target: 'tool_sprawl' },

  { source: 'unvetted_plugins', target: 'security_risks' },
  { source: 'unvetted_plugins', target: 'privacy_concerns' },

  { source: 'outdated_plugins', target: 'compatibility_issues' },
  { source: 'outdated_plugins', target: 'missing_features' }
];
