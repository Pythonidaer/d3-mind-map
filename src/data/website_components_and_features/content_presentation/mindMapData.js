import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Content\nPresentation',
    shape: 'roundRect',
    color: 'root',
    definition: 'How content is structured, styled, and rendered to support clarity, accessibility, and engagement across devices.',
  },

  // Level 1
  {
    id: 'text_formatting',
    label: 'Text\nFormatting',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Controls font readability, spacing, alignment, and contrast for effective reading experiences.',
  },
  {
    id: 'image_presentation',
    label: 'Image\nPresentation',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Techniques for organizing and displaying images, including responsive grids and interactivity.',
  },
  {
    id: 'video_integration',
    label: 'Video\nIntegration',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Strategies for embedding video with controls, captions, and performance optimization.',
  },
  {
    id: 'lists_and_tables',
    label: 'Lists and\nTables',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Organizing information using semantic list structures and tabular data formats.',
  },
  {
    id: 'typography_and_hierarchy',
    label: 'Typography and\nHierarchy',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Establishing content hierarchy through font pairings, sizing, spacing, and visual rhythm.',
  },
  {
    id: 'iconography',
    label: 'Iconography',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Using icons to support content, navigation, and interaction with clarity and consistency.',
  },
  {
    id: 'search_functionality',
    label: 'Search\nFunctionality',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Enabling users to find content quickly using inputs, filters, and autocomplete features.',
  },
  {
    id: 'visual_enhancements',
    label: 'Visual\nEnhancements',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Subtle design flourishes like parallax, layering, or transitions that improve perception.',
  },
  {
    id: 'cons',
    label: 'Cons',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Anti-patterns that damage accessibility, clarity, or performance.',
  },

  // Text Formatting – Level 2
  {
    id: 'font_selection',
    label: 'Font\nSelection',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'text_formatting',
    definition: 'Choosing readable web-safe fonts and applying consistent families across UI.',
  },
  {
    id: 'line_and_paragraph_spacing',
    label: 'Line and Paragraph\nSpacing',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'text_formatting',
    definition: 'Adjusting line-height and spacing for optimal scanning and rhythm.',
  },
  {
    id: 'text_alignment',
    label: 'Text\nAlignment',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'text_formatting',
    definition: 'Left, center, or justified alignment to support different content types and flow.',
  },
  {
    id: 'contrast_and_accessibility',
    label: 'Contrast and\nAccessibility',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'text_formatting',
    definition: 'Meeting WCAG contrast ratios and ensuring readable, accessible text.',
  },

  // Image Presentation – Level 2
  {
    id: 'image_gallery',
    label: 'Image\nGallery',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'image_presentation',
    definition: 'Grid-based layout to display multiple related images responsively.',
  },
  {
    id: 'slideshow_or_carousel',
    label: 'Slideshow or\nCarousel',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'image_presentation',
    definition: 'Sequential display of featured media, often with arrows or auto-play.',
  },
  {
    id: 'lightbox_viewer',
    label: 'Lightbox\nViewer',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'image_presentation',
    definition: 'Expands image/video into modal overlay for focused viewing experience.',
  },
  {
    id: 'lazy_loading',
    label: 'Lazy\nLoading',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'image_presentation',
    definition: 'Delays media loading until it enters the viewport to save bandwidth and speed up pages.',
  },

  // Video Integration – Level 2
  {
    id: 'embedded_video',
    label: 'Embedded\nVideo',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'video_integration',
    definition: 'Using YouTube, Vimeo, or other embed methods to insert hosted video.',
  },
  {
    id: 'html5_video',
    label: 'HTML5\nVideo',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'video_integration',
    definition: 'Browser-native <video> elements supporting custom controls and subtitles.',
  },
  {
    id: 'video_captions',
    label: 'Captions and\nSubtitles',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'video_integration',
    definition: 'Text alternatives for speech, important for accessibility and comprehension.',
  },
  {
    id: 'download_options',
    label: 'Download\nOptions',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'video_integration',
    definition: 'Allowing users to download and view video offline.',
  },

  // Lists and Tables
  {
    id: 'bulleted_lists',
    label: 'Bulleted\nLists',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'lists_and_tables',
    definition: 'Unordered lists for presenting related items.',
  },
  {
    id: 'numbered_lists',
    label: 'Numbered\nLists',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'lists_and_tables',
    definition: 'Ordered steps or ranked lists for sequential content.',
  },
  {
    id: 'semantic_tables',
    label: 'Semantic\nTables',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'lists_and_tables',
    definition: 'Structured tabular content using <thead>, <tbody>, and <th> tags for clarity.',
  },

  // Typography and Hierarchy
  {
    id: 'font_pairing',
    label: 'Font\nPairing',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'typography_and_hierarchy',
    definition: 'Combining heading and body fonts that visually complement each other.',
  },
  {
    id: 'visual_structure',
    label: 'Visual\nStructure',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'typography_and_hierarchy',
    definition: 'Sizing, weight, spacing, and alignment used to create a clear hierarchy.',
  },

  // Iconography
  {
    id: 'icon_styles',
    label: 'Icon\nStyles',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'iconography',
    definition: 'Line, flat, filled, or animated icons depending on tone and context.',
  },
  {
    id: 'icon_usage',
    label: 'Icon\nUsage',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'iconography',
    definition: 'Icons support CTAs, nav, forms, or alerts with clear affordances.',
  },

  // Visual Enhancements
  {
    id: 'parallax_effects',
    label: 'Parallax\nEffects',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'visual_enhancements',
    definition: 'Creates depth through scroll-offset motion between layers. Best used sparingly.',
  },

  // Cons
  {
    id: 'overuse_of_effects',
    label: 'Overuse of\nEffects',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Excessive animation, sliders, or motion that distract or slow performance.',
  },
  {
    id: 'parallax_effects_bad',
    label: 'Parallax Overuse',
    shape: 'diamond',
    color: 'nodeNegative3',
    parent: 'overuse_of_effects',
    definition: 'Overuse of parallax disrupts flow, worsens performance, and causes motion sickness.',
  },
  {
    id: 'video_autoplay',
    label: 'Video\nAutoplay',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Forcing video playback without user interaction breaks accessibility and trust.',
  },
  {
    id: 'missing_alt_text',
    label: 'Missing Alt\nText',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Images without alt text are invisible to screen readers and harm SEO.',
  },
  {
    id: 'justified_text_blocks',
    label: 'Justified Text\nBlocks',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Creates awkward word spacing, reducing legibility.',
  },
  {
    id: 'icon_only_ui',
    label: 'Icon-Only\nUI',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Lack of labels for icons confuses users unfamiliar with symbolic meaning.',
  }
];

export const links = [
  { source: 'root', target: 'text_formatting' },
  { source: 'root', target: 'image_presentation' },
  { source: 'root', target: 'video_integration' },
  { source: 'root', target: 'lists_and_tables' },
  { source: 'root', target: 'typography_and_hierarchy' },
  { source: 'root', target: 'iconography' },
  { source: 'root', target: 'search_functionality' },
  { source: 'root', target: 'visual_enhancements' },
  { source: 'root', target: 'cons' },

  { source: 'text_formatting', target: 'font_selection' },
  { source: 'text_formatting', target: 'line_and_paragraph_spacing' },
  { source: 'text_formatting', target: 'text_alignment' },
  { source: 'text_formatting', target: 'contrast_and_accessibility' },

  { source: 'image_presentation', target: 'image_gallery' },
  { source: 'image_presentation', target: 'slideshow_or_carousel' },
  { source: 'image_presentation', target: 'lightbox_viewer' },
  { source: 'image_presentation', target: 'lazy_loading' },

  { source: 'video_integration', target: 'embedded_video' },
  { source: 'video_integration', target: 'html5_video' },
  { source: 'video_integration', target: 'video_captions' },
  { source: 'video_integration', target: 'download_options' },

  { source: 'lists_and_tables', target: 'bulleted_lists' },
  { source: 'lists_and_tables', target: 'numbered_lists' },
  { source: 'lists_and_tables', target: 'semantic_tables' },

  { source: 'typography_and_hierarchy', target: 'font_pairing' },
  { source: 'typography_and_hierarchy', target: 'visual_structure' },

  { source: 'iconography', target: 'icon_styles' },
  { source: 'iconography', target: 'icon_usage' },

  { source: 'visual_enhancements', target: 'parallax_effects' },

  { source: 'cons', target: 'overuse_of_effects' },
  { source: 'cons', target: 'video_autoplay' },
  { source: 'cons', target: 'missing_alt_text' },
  { source: 'cons', target: 'justified_text_blocks' },
  { source: 'cons', target: 'icon_only_ui' },
  { source: 'overuse_of_effects', target: 'parallax_effects_bad' }
];
