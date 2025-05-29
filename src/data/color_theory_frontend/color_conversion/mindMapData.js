import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Color Conversion',
    definition: 'Processes for converting between different color spaces and formats (e.g., HEX to RGB).',
    shape: 'roundRect',
    color: 'root',
  },

  // Conversion Basics
  {
    id: 'conversion_basics',
    label: 'Conversion\nBasics',
    definition: 'Understanding the importance and applications of converting between color formats.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'why_convert',
    label: 'Why Convert\nColors?',
    definition: 'Reasons include design compatibility, accessibility, theme consistency, and print prep.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'automatic_tools',
    label: 'Auto Tools\nvs Manual',
    definition: 'Color pickers and libraries automate conversion; manual methods provide control.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Common Conversions
  {
    id: 'common_conversions',
    label: 'Common\nConversions',
    definition: 'Frequent conversions include HEX, RGB, HSL, and CMYK for frontend or print.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'hex_rgb',
    label: 'HEX ↔ RGB',
    definition: 'Convert using formulas or tools like `parseInt()` or CSS color functions.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'rgb_hsl',
    label: 'RGB ↔ HSL',
    definition: 'Useful for dynamic color adjustments like brightness or hue shifts.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'rgb_cmyk',
    label: 'RGB ↔ CMYK',
    definition: 'Needed when preparing digital designs for print media.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'rgb_lab',
    label: 'RGB ↔ LAB',
    definition: 'LAB enables perceptual uniformity; often used for precise color difference.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Libraries & Tools
  {
    id: 'conversion_tools',
    label: 'Libraries &\nTools',
    definition: 'Libraries and services streamline color conversion in code and design systems.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'chroma_js',
    label: 'Chroma.js',
    definition: 'JavaScript library supporting conversions between HEX, RGB, HSL, LAB, etc.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'color_js',
    label: 'color.js',
    definition: 'Modern W3C-backed color conversion and interpolation library.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'd3_interpolate',
    label: 'D3 Color\nInterpolate',
    definition: 'Supports LCH/LAB interpolations and transitions between color spaces.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Pitfalls
  {
    id: 'conversion_issues',
    label: 'Conversion\nPitfalls',
    definition: 'Errors in conversion can result in perceptual mismatches or broken themes.',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },
  {
    id: 'lossy_conversion',
    label: 'Lossy Conversions',
    definition: 'Converting between spaces like CMYK → RGB can result in data loss.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'inconsistent_support',
    label: 'Inconsistent\nSupport',
    definition: 'Not all browsers/devices interpret color profiles or conversions the same.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'no_gamma_handling',
    label: 'Missing Gamma\nHandling',
    definition: 'Ignoring gamma correction can skew RGB ↔ HSL or LAB conversions.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
];

export const links = [
  { source: 'root', target: 'conversion_basics' },
  { source: 'root', target: 'common_conversions' },
  { source: 'root', target: 'conversion_tools' },
  { source: 'root', target: 'conversion_issues' },

  { source: 'conversion_basics', target: 'why_convert' },
  { source: 'conversion_basics', target: 'automatic_tools' },

  { source: 'common_conversions', target: 'hex_rgb' },
  { source: 'common_conversions', target: 'rgb_hsl' },
  { source: 'common_conversions', target: 'rgb_cmyk' },
  { source: 'common_conversions', target: 'rgb_lab' },

  { source: 'conversion_tools', target: 'chroma_js' },
  { source: 'conversion_tools', target: 'color_js' },
  { source: 'conversion_tools', target: 'd3_interpolate' },

  { source: 'conversion_issues', target: 'lossy_conversion' },
  { source: 'conversion_issues', target: 'inconsistent_support' },
  { source: 'conversion_issues', target: 'no_gamma_handling' },
];
