// mindMapData.js
import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Color Systems',
    shape: 'roundRect',
    color: 'root',
    definition: 'Color systems define the palette, structure, and semantic roles of colors used across a design system to ensure visual consistency and accessibility.'
  },

  // Level 1 Positive
  {
    id: 'color_palette',
    label: 'Color Palette',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'A collection of base, accent, and neutral colors used consistently across the UI.'
  },
  {
    id: 'color_tokens',
    label: 'Color Tokens',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Named variables (e.g., `--color-primary`) that reference specific color values for use in components.'
  },
  {
    id: 'branding',
    label: 'Brand Alignment',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Ensures color usage reflects brand identity and emotional tone.'
  },
  {
    id: 'accessibility',
    label: 'Accessibility',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Ensures colors meet contrast standards and are not the sole indicators of information.'
  },

  // Level 2 Positive
  {
    id: 'primary_secondary',
    label: 'Primary,\nSecondary, Neutral',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Categories of colors used for key actions (primary), accents (secondary), and background/text (neutral).'
  },
  {
    id: 'semantic_tokens',
    label: 'Semantic Tokens',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Map color variables to UI meanings (e.g., `success`, `error`, `background`).'
  },
  {
    id: 'contrast_guidelines',
    label: 'Contrast Guidelines',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Ensure WCAG-compliant color ratios for text, links, and controls.'
  },

  // Level 3 Positive
  {
    id: 'theming',
    label: 'Dark Mode\n& Theming',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Switch between light/dark themes or brand variants using token overrides and media queries.'
  },
  {
    id: 'contrast_tools',
    label: 'Contrast\nCheckers',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Automated tools that verify color contrast for accessibility (e.g., WebAIM, Stark).'
  },

  // Level 1 Negative
  {
    id: 'color_antipatterns',
    label: 'Anti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Common mistakes in color usage that undermine usability, brand clarity, or accessibility.'
  },

  // Level 2 Negative
  {
    id: 'visual_only',
    label: 'Color-Only Indicators',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Using color alone (e.g., red text) to convey meaning without labels, icons, or patterns.'
  },
  {
    id: 'inconsistent_use',
    label: 'Inconsistent Use of Color',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Using different colors for similar functions causes confusion and weakens branding.'
  },
  {
    id: 'hardcoded_colors',
    label: 'Hardcoded\nColor Values',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Directly using hex values (e.g., `#3498db`) in CSS instead of tokens reduces flexibility and theming support.'
  }
];

export const links = [
  // Level 1
  { source: 'root', target: 'color_palette' },
  { source: 'root', target: 'color_tokens' },
  { source: 'root', target: 'branding' },
  { source: 'root', target: 'accessibility' },

  // Level 2
  { source: 'color_palette', target: 'primary_secondary' },
  { source: 'color_tokens', target: 'semantic_tokens' },
  { source: 'accessibility', target: 'contrast_guidelines' },

  // Level 3
  { source: 'semantic_tokens', target: 'theming' },
  { source: 'contrast_guidelines', target: 'contrast_tools' },

  // Anti-Patterns
  { source: 'root', target: 'color_antipatterns' },
  { source: 'color_antipatterns', target: 'visual_only' },
  { source: 'color_antipatterns', target: 'inconsistent_use' },
  { source: 'color_antipatterns', target: 'hardcoded_colors' }
];
