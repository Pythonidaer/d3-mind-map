import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Code & AI to\nFigma Generation',
    shape: 'roundRect',
    color: 'root',
    definition: 'Programmatic and AI-driven methods to create or modify Figma designs.',
  },

  // Positive Level 1
  {
    id: 'api_scripting',
    label: 'API-based\nScripting',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Use Figma REST and Plugin APIs to generate or update design files via code.',
  },
  {
    id: 'plugin_authoring',
    label: 'Plugin\nAuthoring',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Write custom Figma plugins to programmatically create components, layouts, and assets.',
  },
  {
    id: 'text_to_design',
    label: 'Text-to-\nDesign AI',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Leverage natural language prompts to auto-generate layout suggestions and components.',
  },
  {
    id: 'figjam_ai',
    label: 'FigJam\nAI',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Use built-in or plugin AI to create wireframes, diagrams, and meeting templates.',
  },
  {
    id: 'image_to_design',
    label: 'Image-to-\nDesign AI',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Convert reference images into editable Figma elements using AI vectorization.',
  },

  // Positive Level 2 elaborations
  // API-based Scripting children
  {
    id: 'generate_frames_layers',
    label: 'Generate\nFrames & Layers',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'api_scripting',
    definition: 'Programmatically create frames, groups, and layer hierarchies with the API.',
  },
  {
    id: 'set_properties_styles',
    label: 'Set\nProperties & Styles',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'api_scripting',
    definition: 'Apply fills, text styles, and effects via code for consistent theming.',
  },
  {
    id: 'import_assets',
    label: 'Import\nAssets & Images',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'api_scripting',
    definition: 'Upload and reference external images and icons in your design file through API calls.',
  },

  // Plugin Authoring children
  {
    id: 'custom_ui_panels',
    label: 'Custom\nUI Panels',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'plugin_authoring',
    definition: 'Build in-app panels to gather user input or display dynamic data.',
  },
  {
    id: 'automation_scripts',
    label: 'Automation\nScripts',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'plugin_authoring',
    definition: 'Write scripts to batch-rename layers, sync styles, or enforce design rules.',
  },
  {
    id: 'component_factories',
    label: 'Component\nFactories',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'plugin_authoring',
    definition: 'Generate libraries of components programmatically from templates or data sources.',
  },

  // Text-to-Design AI children
  {
    id: 'prompt_crafting',
    label: 'Prompt\nCrafting',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'text_to_design',
    definition: 'Design effective prompts to guide layout and style choices by the AI.',
  },
  {
    id: 'style_controls',
    label: 'Style\nControls',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'text_to_design',
    definition: 'Adjust parameters like color palette, spacing, and typography via prompt hints.',
  },
  {
    id: 'iterative_refinement',
    label: 'Iterative\nRefinement',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'text_to_design',
    definition: 'Refine generated designs through successive prompt revisions and edits.',
  },

  // FigJam AI children
  {
    id: 'diagram_templates',
    label: 'Diagram\nTemplates',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'figjam_ai',
    definition: 'Auto-generate flowcharts, mind maps, and org charts from prompts.',
  },
  {
    id: 'timeline_visuals',
    label: 'Timeline\nVisuals',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'figjam_ai',
    definition: 'Create timeline or roadmap visuals using AI-assisted layout tools.',
  },
  {
    id: 'meeting_templates',
    label: 'Meeting\nTemplates',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'figjam_ai',
    definition: 'Generate workshop and brainstorming templates with AI suggestions.',
  },

  // Image-to-Design AI children
  {
    id: 'vector_extraction',
    label: 'Vector\nExtraction',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'image_to_design',
    definition: 'Convert raster images into editable vector shapes and paths.',
  },
  {
    id: 'palette_generation',
    label: 'Palette\nGeneration',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'image_to_design',
    definition: 'Extract and apply color palettes from images to design elements.',
  },
  {
    id: 'layout_inference',
    label: 'Layout\nInference',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'image_to_design',
    definition: 'Infer grid and spacing rules based on imported image structure.',
  },

  // Negative Level 1 (Anti-Patterns)
  {
    id: 'ignoring_programmatic',
    label: 'Ignoring\nProgrammatic Methods',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Skipping code-driven or AI-assisted generation reduces efficiency and scale.',
  },
  {
    id: 'unmanaged_ai_generation',
    label: 'Unmanaged\nAI Generation',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Using AI tools without oversight results in inconsistent or irrelevant outcomes.',
  },
  {
    id: 'lack_of_validation',
    label: 'Lack of\nValidation',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Failing to review generated designs leads to broken components and UX issues.',
  },
  {
    id: 'security_privacy',
    label: 'Security\n& Privacy',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Exposing tokens or design data to external services risks leaks and breaches.',
  },

  // Negative Level 2 elaborations
  {
    id: 'manual_repetition',
    label: 'Manual\nRepetition',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'ignoring_programmatic',
    definition: 'Performing repetitive tasks by hand instead of automating them.',
  },
  {
    id: 'scalability_constraints',
    label: 'Scalability\nConstraints',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'ignoring_programmatic',
    definition: 'Human error and time demands limit the amount of design work possible.',
  },

  {
    id: 'style_inconsistency',
    label: 'Style\nInconsistency',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'unmanaged_ai_generation',
    definition: 'AI-generated elements may not adhere to established design tokens or guidelines.',
  },
  {
    id: 'irrelevant_outputs',
    label: 'Irrelevant\nOutputs',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'unmanaged_ai_generation',
    definition: 'AI may produce designs that do not fit project context or requirements.',
  },

  {
    id: 'broken_components',
    label: 'Broken\nComponents',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'lack_of_validation',
    definition: 'Generated frames or assets lack proper naming, constraints, or structure.',
  },
  {
    id: 'accessibility_oversight',
    label: 'Accessibility\nOversight',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'lack_of_validation',
    definition: 'Missing semantic roles or contrast checks result in unusable designs.',
  },

  {
    id: 'token_exposure',
    label: 'Token\nExposure',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'security_privacy',
    definition: 'Hardcoded or logged tokens can be hijacked for unauthorized API access.',
  },
  {
    id: 'data_leakage',
    label: 'Data\nLeakage',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'security_privacy',
    definition: 'Sending private design assets to external AI services without encryption.',
  }
];

export const links = [
  // Root → Positive Level 1
  { source: 'root', target: 'api_scripting' },
  { source: 'root', target: 'plugin_authoring' },
  { source: 'root', target: 'text_to_design' },
  { source: 'root', target: 'figjam_ai' },
  { source: 'root', target: 'image_to_design' },

  // Positive Level 1 → Level 2 elaborations
  { source: 'api_scripting', target: 'generate_frames_layers' },
  { source: 'api_scripting', target: 'set_properties_styles' },
  { source: 'api_scripting', target: 'import_assets' },

  { source: 'plugin_authoring', target: 'custom_ui_panels' },
  { source: 'plugin_authoring', target: 'automation_scripts' },
  { source: 'plugin_authoring', target: 'component_factories' },

  { source: 'text_to_design', target: 'prompt_crafting' },
  { source: 'text_to_design', target: 'style_controls' },
  { source: 'text_to_design', target: 'iterative_refinement' },

  { source: 'figjam_ai', target: 'diagram_templates' },
  { source: 'figjam_ai', target: 'timeline_visuals' },
  { source: 'figjam_ai', target: 'meeting_templates' },

  { source: 'image_to_design', target: 'vector_extraction' },
  { source: 'image_to_design', target: 'palette_generation' },
  { source: 'image_to_design', target: 'layout_inference' },

  // Root → Negative Level 1
  { source: 'root', target: 'ignoring_programmatic' },
  { source: 'root', target: 'unmanaged_ai_generation' },
  { source: 'root', target: 'lack_of_validation' },
  { source: 'root', target: 'security_privacy' },

  // Negative Level 1 → Level 2 elaborations
  { source: 'ignoring_programmatic', target: 'manual_repetition' },
  { source: 'ignoring_programmatic', target: 'scalability_constraints' },

  { source: 'unmanaged_ai_generation', target: 'style_inconsistency' },
  { source: 'unmanaged_ai_generation', target: 'irrelevant_outputs' },

  { source: 'lack_of_validation', target: 'broken_components' },
  { source: 'lack_of_validation', target: 'accessibility_oversight' },

  { source: 'security_privacy', target: 'token_exposure' },
  { source: 'security_privacy', target: 'data_leakage' }
];
