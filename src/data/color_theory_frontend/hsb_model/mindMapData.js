import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Hue, Saturation,\nBrightness (HSB)',
    definition: 'A color model that describes how we perceive and define colors visually. Commonly used in digital design tools.',
    shape: 'roundRect',
    color: 'root',
  },

  // Hue
  {
    id: 'hue',
    label: 'Hue',
    definition: 'The base attribute of a color (e.g., red, green, blue) represented as a position on the color wheel from 0° to 360°.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'hue_examples',
    label: 'Hue\nExamples',
    definition: '0° = red, 120° = green, 240° = blue. Hues form the circular spectrum of the color wheel.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'hue_visual_role',
    label: 'Hue in\nDesign',
    definition: 'Establishes the dominant color family and helps set mood, brand identity, and emotion.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Saturation
  {
    id: 'saturation',
    label: 'Saturation',
    definition: 'Measures the intensity or purity of a color. High saturation = vivid. Low saturation = muted or gray.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'saturation_scale',
    label: 'Saturation\nScale',
    definition: 'Ranges from 0% (gray) to 100% (pure color). Affects emotional impact and readability.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'saturation_use',
    label: 'UI Use\nof Saturation',
    definition: 'High saturation for alerts or CTAs; low saturation for disabled states or backgrounds.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Brightness (Value)
  {
    id: 'brightness',
    label: 'Brightness\n(Value)',
    definition: 'Refers to how much light is in the color. 0% = black, 100% = fully lit.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'brightness_ui_role',
    label: 'Brightness in\nUI Design',
    definition: 'Controls contrast and legibility. Essential for light/dark mode support and visual hierarchy.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'brightness_vs_saturation',
    label: 'Brightness vs\nSaturation',
    definition: 'Brightness affects lightness/darkness; saturation affects vividness. Both shape perception differently.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Usage in Tools
  {
    id: 'hsb_usage',
    label: 'Usage in\nDesign Tools',
    definition: 'HSB (or HSV) sliders are standard in color pickers in apps like Figma, Photoshop, and DevTools.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'developer_applications',
    label: 'Developer\nApplications',
    definition: 'Manipulate HSB in JS or CSS for animations, hover effects, theme generation, and dynamic color tuning.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'hsb_vs_hsl',
    label: 'HSB vs\nHSL',
    definition: 'HSL is similar but defines lightness differently. HSB better reflects perceived brightness.',
    shape: 'rect',
    color: 'nodePositive2',
  }
];

export const links = [
  { source: 'root', target: 'hue' },
  { source: 'hue', target: 'hue_examples' },
  { source: 'hue', target: 'hue_visual_role' },

  { source: 'root', target: 'saturation' },
  { source: 'saturation', target: 'saturation_scale' },
  { source: 'saturation', target: 'saturation_use' },

  { source: 'root', target: 'brightness' },
  { source: 'brightness', target: 'brightness_ui_role' },
  { source: 'brightness', target: 'brightness_vs_saturation' },

  { source: 'root', target: 'hsb_usage' },
  { source: 'hsb_usage', target: 'developer_applications' },
  { source: 'hsb_usage', target: 'hsb_vs_hsl' }
];
