import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Color Spaces\nand Models',
    color: 'root',
    shape: 'roundRect',
    definition: 'Color spaces and models define how colors are represented and interpreted digitally, visually, and mathematically for design and computation.',
  },

  // Primary Nodes
  {
    id: 'rgb',
    label: 'RGB Model',
    color: 'nodePositive1',
    shape: 'ellipse',
    definition: 'Red, Green, Blue additive color model used in digital displays. Combined light makes white.',
  },
  {
    id: 'cmyk',
    label: 'CMYK Model',
    color: 'nodePositive1',
    shape: 'ellipse',
    definition: 'Cyan, Magenta, Yellow, and Key (Black). Used in subtractive color mixing for printing.',
  },
  {
    id: 'hsl_hsv_hsb',
    label: 'HSL / HSV / HSB',
    color: 'nodePositive1',
    shape: 'ellipse',
    definition: 'Human-friendly color models representing Hue, Saturation, and Lightness or Brightness.',
  },
  {
    id: 'lab_lch',
    label: 'LAB and LCH',
    color: 'nodePositive1',
    shape: 'ellipse',
    definition: 'Perceptually uniform color models based on human vision, used for accurate color difference.',
  },
  {
    id: 'hex',
    label: 'HEX Values',
    color: 'nodePositive1',
    shape: 'ellipse',
    definition: 'Base-16 hexadecimal color format used in web development, derived from RGB.',
  },
  {
    id: 'color_profiles',
    label: 'Color Profiles\nand Calibration',
    color: 'nodePositive1',
    shape: 'ellipse',
    definition: 'Profiles like sRGB and Adobe RGB ensure color consistency across devices and platforms.',
  },
  {
    id: 'anti_patterns',
    label: 'Anti-Patterns',
    color: 'nodeNegative1',
    shape: 'hexagon',
    definition: 'Misuse or misunderstanding of color models leading to inconsistent or incorrect rendering.',
  },

  // RGB Children
  {
    id: 'rgb_range',
    label: 'RGB Range\n(0-255)',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Each channel (R, G, B) ranges from 0 to 255, determining the intensity of light.',
  },
  {
    id: 'rgb_additive',
    label: 'Additive Mixing\nfor Screens',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Colors are added via light; full intensity of all three equals white.',
  },

  // CMYK Children
  {
    id: 'cmyk_subtractive',
    label: 'Subtractive\nMixing for Print',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Ink absorbs light; full combination produces near-black.',
  },
  {
    id: 'print_precision',
    label: 'Print Color\nPrecision',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Used in offset and digital printing for accurate pigment reproduction.',
  },

  // HSL/HSV/HSB Children
  {
    id: 'hue_circle',
    label: 'Hue as\nColor Angle',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Hue represented as an angle on the color wheel from 0° to 360°.',
  },
  {
    id: 'saturation_brightness',
    label: 'Saturation and\nLightness/Brightness',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Saturation = color intensity; Lightness/Brightness = perceived luminance.',
  },

  // LAB/LCH Children
  {
    id: 'lab_channels',
    label: 'L = Lightness,\na & b = Color Axes',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'L for luminance, a for green–red, b for blue–yellow axes.',
  },
  {
    id: 'lch_hue_chroma',
    label: 'LCH: Hue,\nChroma, Lightness',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'LCH rearranges LAB for more intuitive perception-based color design.',
  },

  // HEX Children
  {
    id: 'hex_format',
    label: 'Hex Format:\n#RRGGBB',
    color: 'nodePositive2',
    shape: 'rect',
    definition: '2-digit hexadecimal values for Red, Green, and Blue components.',
  },
  {
    id: 'hex_shorthand',
    label: 'Shorthand:\n#RGB',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Condensed HEX where each digit is duplicated (e.g., #ABC = #AABBCC).',
  },

  // Color Profiles
  {
    id: 'srgb',
    label: 'sRGB (Web Standard)',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Standard RGB color space for web and many consumer devices.',
  },
  {
    id: 'adobe_rgb',
    label: 'Adobe RGB / ProPhoto RGB',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Expanded gamut color profiles used in photography and high-fidelity displays.',
  },

  // Anti-Patterns
  {
    id: 'mixing_spaces',
    label: 'Mixing Color\nSpaces Improperly',
    color: 'nodeNegative2',
    shape: 'rect',
    definition: 'Using colors from different models without conversion leads to mismatches.',
  },
  {
    id: 'incorrect_profile',
    label: 'Wrong Profile\nfor Medium',
    color: 'nodeNegative2',
    shape: 'rect',
    definition: 'Using Adobe RGB on web leads to colors looking desaturated or wrong.',
  }
]

export const links = [
  { source: 'root', target: 'rgb' },
  { source: 'root', target: 'cmyk' },
  { source: 'root', target: 'hsl_hsv_hsb' },
  { source: 'root', target: 'lab_lch' },
  { source: 'root', target: 'hex' },
  { source: 'root', target: 'color_profiles' },
  { source: 'root', target: 'anti_patterns' },

  { source: 'rgb', target: 'rgb_range' },
  { source: 'rgb', target: 'rgb_additive' },

  { source: 'cmyk', target: 'cmyk_subtractive' },
  { source: 'cmyk', target: 'print_precision' },

  { source: 'hsl_hsv_hsb', target: 'hue_circle' },
  { source: 'hsl_hsv_hsb', target: 'saturation_brightness' },

  { source: 'lab_lch', target: 'lab_channels' },
  { source: 'lab_lch', target: 'lch_hue_chroma' },

  { source: 'hex', target: 'hex_format' },
  { source: 'hex', target: 'hex_shorthand' },

  { source: 'color_profiles', target: 'srgb' },
  { source: 'color_profiles', target: 'adobe_rgb' },

  { source: 'anti_patterns', target: 'mixing_spaces' },
  { source: 'anti_patterns', target: 'incorrect_profile' },
]
