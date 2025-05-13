import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Figma-to-Code\nLandscape',
    shape: 'roundRect',
    color: 'root',
    definition: 'Overview of options for converting Figma designs into front-end code.',
  },

  // Positive Level 1
  {
    id: 'built_in_snippets',
    label: 'Built-in\nCode Snippets',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Dev Mode auto-generates CSS, SwiftUI, Compose, and XML snippets for selected elements.',
  },
  {
    id: 'export_tools',
    label: 'Third-Party\nExport Tools',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Platforms like Anima, DhiWise, Zeplin, and Avocode that export complete code templates.',
  },
  {
    id: 'design_token_tools',
    label: 'Design-Token\nTools',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Plugins and CLIs (Figma Tokens, Style Dictionary) that export shared tokens as code.',
  },
  {
    id: 'ai_code_generation',
    label: 'AI-based\nGeneration',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Emerging AI services (TeleportHQ, Uizard) that convert designs or prompts to code.',
  },
  {
    id: 'pipeline_integration',
    label: 'CI/CD\nIntegration',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Automated pipelines pulling design updates into build processes and token syncs.',
  },

  // Positive Level 2 elaborations
  // Built-in Code Snippets children
  {
    id: 'css_snippets',
    label: 'CSS\n& Styles',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'built_in_snippets',
    definition: 'Auto-generated CSS properties with px/rem values from the Inspect panel.',
  },
  {
    id: 'platform_snippets',
    label: 'Mobile/\nWeb Snippets',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'built_in_snippets',
    definition: 'Snippets for SwiftUI, UIKit, Android Compose, and web XML layouts.',
  },

  // Export Tools children
  {
    id: 'anima_tool',
    label: 'Anima',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'export_tools',
    definition: 'Exports responsive HTML/CSS converting Auto Layout into Flexbox/Grid code.',
  },
  {
    id: 'dhiwise_tool',
    label: 'DhiWise',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'export_tools',
    definition: 'Smart editor for modifying auto-generated code and integrating APIs.',
  },
  {
    id: 'zeplin_avocode',
    label: 'Zeplin/\nAvocode',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'export_tools',
    definition: 'Provides code snippets, style guides, and asset export pipelines.',
  },

  // Design-Token Tools children
  {
    id: 'figma_tokens',
    label: 'Figma\nTokens',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'design_token_tools',
    definition: 'Exports design tokens (colors, typography, spacing) to JSON or CSS formats.',
  },
  {
    id: 'style_dictionary',
    label: 'Style\nDictionary',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'design_token_tools',
    definition: 'Converts shared tokens across platforms via configurable JSON mappings.',
  },

  // AI-based Generation children
  {
    id: 'figma_ai_tools',
    label: 'FigJam\nAI',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'ai_code_generation',
    definition: 'Uses AI to generate basic layouts and asset suggestions from text prompts.',
  },
  {
    id: 'sketch_to_code',
    label: 'TeleportHQ\n& Uizard',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'ai_code_generation',
    definition: 'Platforms converting UI sketches or designs into React, Vue, or HTML code.',
  },

  // CI/CD Integration children
  {
    id: 'automated_exports',
    label: 'Automated\nExports',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'pipeline_integration',
    definition: 'Scripts in CI that pull Figma file updates and commit generated code assets.',
  },
  {
    id: 'token_sync_ci',
    label: 'Token Sync\nCI',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'pipeline_integration',
    definition: 'Continuous synchronization of design tokens to code repositories.',
  },

  // Negative Level 1 (anti-patterns)
  {
    id: 'overreliance_auto_code',
    label: 'Overreliance\non Auto-Code',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Assuming auto-generated code is production-ready without manual review.',
  },
  {
    id: 'ignoring_refinement',
    label: 'Ignoring\nManual Refinement',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Skipping cleanup and optimization of generated code, leading to bloat.',
  },
  {
    id: 'lockin_tools',
    label: 'Proprietary\nLock-In',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Dependence on specific tools that hinder migration or customization.',
  },
  {
    id: 'code_quality_issues',
    label: 'Code\nQuality Issues',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Generated code may be verbose, unsemantic, or lack accessibility features.',
  },

  // Negative Level 2 elaborations
  {
    id: 'unmaintainable_code',
    label: 'Unmaintainable\nCode',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'overreliance_auto_code',
    definition: 'Auto-generated outputs lack abstraction and are hard to update.',
  },
  {
    id: 'inconsistent_styles',
    label: 'Inconsistent\nStyles',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'overreliance_auto_code',
    definition: 'Auto-code mixes inline styles and classes unpredictably.',
  },
  {
    id: 'performance_bloat',
    label: 'Performance\nBloat',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'ignoring_refinement',
    definition: 'Excess code and unused assets slow down your application.',
  },
  {
    id: 'accessibility_issues',
    label: 'Accessibility\nIssues',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'ignoring_refinement',
    definition: 'Generated code often misses ARIA roles and semantic tags.',
  },
  {
    id: 'migration_difficulty',
    label: 'Migration\nDifficulty',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'lockin_tools',
    definition: 'Tightly coupled exports make switching tools a major effort.',
  },
  {
    id: 'vendor_dependencies',
    label: 'Vendor\nDependencies',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'lockin_tools',
    definition: 'Reliance on proprietary APIs can incur unexpected costs or downtime.',
  },
  {
    id: 'non_semantic_html',
    label: 'Non-Semantic\nHTML',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'code_quality_issues',
    definition: 'Generic divs instead of semantic elements hinder SEO and accessibility.',
  },
  {
    id: 'poor_responsiveness',
    label: 'Poor\nResponsiveness',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'code_quality_issues',
    definition: 'Lack of fluid layouts and mobile-first patterns in the generated code.',
  }
];

export const links = [
  // Root → Positive Level 1
  { source: 'root', target: 'built_in_snippets' },
  { source: 'root', target: 'export_tools' },
  { source: 'root', target: 'design_token_tools' },
  { source: 'root', target: 'ai_code_generation' },
  { source: 'root', target: 'pipeline_integration' },

  // Positive Level 1 → Level 2 elaborations
  { source: 'built_in_snippets', target: 'css_snippets' },
  { source: 'built_in_snippets', target: 'platform_snippets' },

  { source: 'export_tools', target: 'anima_tool' },
  { source: 'export_tools', target: 'dhiwise_tool' },
  { source: 'export_tools', target: 'zeplin_avocode' },

  { source: 'design_token_tools', target: 'figma_tokens' },
  { source: 'design_token_tools', target: 'style_dictionary' },

  { source: 'ai_code_generation', target: 'figma_ai_tools' },
  { source: 'ai_code_generation', target: 'sketch_to_code' },

  { source: 'pipeline_integration', target: 'automated_exports' },
  { source: 'pipeline_integration', target: 'token_sync_ci' },

  // Root → Negative Level 1
  { source: 'root', target: 'overreliance_auto_code' },
  { source: 'root', target: 'ignoring_refinement' },
  { source: 'root', target: 'lockin_tools' },
  { source: 'root', target: 'code_quality_issues' },

  // Negative Level 1 → Level 2 elaborations
  { source: 'overreliance_auto_code', target: 'unmaintainable_code' },
  { source: 'overreliance_auto_code', target: 'inconsistent_styles' },
  { source: 'ignoring_refinement', target: 'performance_bloat' },
  { source: 'ignoring_refinement', target: 'accessibility_issues' },
  { source: 'lockin_tools', target: 'migration_difficulty' },
  { source: 'lockin_tools', target: 'vendor_dependencies' },
  { source: 'code_quality_issues', target: 'non_semantic_html' },
  { source: 'code_quality_issues', target: 'poor_responsiveness' }
];
