// mindMapData.js
import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Reusable Components',
    shape: 'roundRect',
    color: 'root',
    definition: 'Reusable components encapsulate styling, structure, and behavior to promote consistency, scalability, and ease of maintenance across the UI.'
  },

  // Level 1 Positive
  {
    id: 'naming_conventions',
    label: 'Naming \n Conventions',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Establish clear rules for naming CSS classes (e.g., BEM) to improve clarity and avoid style collisions.'
  },
  {
    id: 'component_scoping',
    label: 'Scoped Styles',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Techniques like CSS Modules or CSS-in-JS prevent styles from leaking between components.'
  },
  {
    id: 'modifier_support',
    label: 'Modifier Support',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Support variations through modifier classes or tokens (e.g., `.button--primary`, `--btn-size`).'
  },
  {
    id: 'documentation',
    label: 'Documentation',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Component usage, variations, states, and accessibility notes should be documented for future reuse.'
  },

  // Level 2 Positive
  {
    id: 'bem_syntax',
    label: 'BEM Syntax',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Block-Element-Modifier structure: `.block`, `.block__element`, `.block--modifier` improves semantic clarity.'
  },
  {
    id: 'css_modules',
    label: 'CSS Modules',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Scoped local class names in file-specific CSS improve maintainability and avoid global conflicts.'
  },
  {
    id: 'variation_tokens',
    label: 'CSS Variables for Variations',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Use variables like `--button-bg` to dynamically control themeable styles per component.'
  },
  {
    id: 'storybook',
    label: 'Storybook / Style Guide',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Interactive environments for browsing, testing, and documenting reusable UI components.'
  },

  // Level 3 Positive
  {
    id: 'style_api',
    label: 'Component\nStyle API',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Defines the “props” of a CSS component: which tokens, modifiers, and slots are configurable.'
  },
  {
    id: 'multi_state_docs',
    label: 'Multi-State\nDocumentation',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Shows component in all its visual and interactive states (e.g., hover, disabled, loading).'
  },

  // Level 1 Negative
  {
    id: 'component_antipatterns',
    label: 'Anti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Common mistakes in reusable CSS component design that reduce maintainability and scalability.'
  },

  // Level 2 Negative
  {
    id: 'leaky_styles',
    label: 'Style Leakage',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Global or overly generic selectors affect components unintentionally, leading to side effects.'
  },
  {
    id: 'non_semantic_classes',
    label: 'Non-Semantic\nClass Names',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Names like `.red-box` or `.big-button` describe appearance rather than function or role.'
  },
  {
    id: 'undocumented_components',
    label: 'Undocumented\nComponents',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Lack of usage guidance makes components hard to understand, extend, or adopt.'
  }
];

export const links = [
  // Positive
  { source: 'root', target: 'naming_conventions' },
  { source: 'root', target: 'component_scoping' },
  { source: 'root', target: 'modifier_support' },
  { source: 'root', target: 'documentation' },

  { source: 'naming_conventions', target: 'bem_syntax' },
  { source: 'component_scoping', target: 'css_modules' },
  { source: 'modifier_support', target: 'variation_tokens' },
  { source: 'documentation', target: 'storybook' },

  { source: 'variation_tokens', target: 'style_api' },
  { source: 'storybook', target: 'multi_state_docs' },

  // Anti-patterns
  { source: 'root', target: 'component_antipatterns' },
  { source: 'component_antipatterns', target: 'leaky_styles' },
  { source: 'component_antipatterns', target: 'non_semantic_classes' },
  { source: 'component_antipatterns', target: 'undocumented_components' }
];
