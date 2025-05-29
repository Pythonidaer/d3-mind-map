import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Color Systems &\nNaming Conventions',
    definition: 'Standards and methods for defining, referencing, and communicating colors in digital design and frontend development.',
    shape: 'roundRect',
    color: 'root',
  },

  // Level 1: Core Concepts
  {
    id: 'color_models',
    label: 'Color\nModels',
    definition: 'Mathematical representations of color using various dimensions like RGB, HSL, or CMYK.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'naming_conventions',
    label: 'Naming\nConventions',
    definition: 'Standardized and custom naming systems for defining colors in CSS, design tokens, or design systems.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'color_formats',
    label: 'Color\nFormats',
    definition: 'The actual syntax formats used in code to define a color (hex, RGBa, HSL, etc).',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'interoperability',
    label: 'Cross-System\nInteroperability',
    definition: 'How different systems (Figma, CSS, accessibility tools) align or conflict when defining and parsing colors.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // Level 2: Models
  {
    id: 'rgb_model',
    label: 'RGB\n(Red, Green, Blue)',
    definition: 'Additive color model based on light, used in screens and CSS.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'hsl_model',
    label: 'HSL\n(Hue, Sat, Light)',
    definition: 'Human-readable model ideal for color adjustments and themes.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'cmyk_model',
    label: 'CMYK\n(Print Colors)',
    definition: 'Subtractive model for physical printing (Cyan, Magenta, Yellow, Key/Black).',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Level 2: Naming
  {
    id: 'css_named_colors',
    label: 'CSS\nNamed Colors',
    definition: 'Built-in color names like "red", "aquamarine", or "slategray" supported in browsers.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'design_token_names',
    label: 'Design Token\nNaming',
    definition: 'Semantic names like "primary-500" or "surface-light" for scalable design systems.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'utility_color_names',
    label: 'Utility\nColor Scales',
    definition: 'Color naming in libraries like Tailwind (e.g., gray-700, blue-200).',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Level 2: Formats
  {
    id: 'hex_format',
    label: 'Hexadecimal\n(#RRGGBB)',
    definition: 'Most common web format; concise, with optional alpha (#RRGGBBAA).',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'rgba_format',
    label: 'RGBa\n(RGBA)',
    definition: 'Red, Green, Blue + Alpha for transparency control in web design.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'hsl_format',
    label: 'HSL/HSLa\n(Hue-Based)',
    definition: 'Useful for programmatically lightening or darkening colors.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Level 2: Interoperability
  {
    id: 'figma_color_styles',
    label: 'Figma Styles &\nVariables',
    definition: 'Figma’s local/global styles use HSL but export to HEX/RGB for devs.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'css_variable_mapping',
    label: 'CSS Custom\nProperties',
    definition: 'CSS variables map tokens to runtime themes, ensuring flexible design across systems.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'accessibility_color_mapping',
    label: 'Accessible\nColor Systems',
    definition: 'Tools like Color Contrast Analyzer and WCAG test different formats equally if defined properly.',
    shape: 'rect',
    color: 'nodePositive2',
  },
];

export const links = [
  { source: 'root', target: 'color_models' },
  { source: 'root', target: 'naming_conventions' },
  { source: 'root', target: 'color_formats' },
  { source: 'root', target: 'interoperability' },

  { source: 'color_models', target: 'rgb_model' },
  { source: 'color_models', target: 'hsl_model' },
  { source: 'color_models', target: 'cmyk_model' },

  { source: 'naming_conventions', target: 'css_named_colors' },
  { source: 'naming_conventions', target: 'design_token_names' },
  { source: 'naming_conventions', target: 'utility_color_names' },

  { source: 'color_formats', target: 'hex_format' },
  { source: 'color_formats', target: 'rgba_format' },
  { source: 'color_formats', target: 'hsl_format' },

  { source: 'interoperability', target: 'figma_color_styles' },
  { source: 'interoperability', target: 'css_variable_mapping' },
  { source: 'interoperability', target: 'accessibility_color_mapping' },
];
