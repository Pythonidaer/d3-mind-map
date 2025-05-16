import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Elementor\nFree Features',
    shape: 'roundRect',
    color: 'root',
    definition: 'Key capabilities provided by the free version of Elementor, including visual editing tools, widgets, templates, and responsive design features.',
  },

  // Core Editor
  {
    id: 'editor_core',
    label: 'Visual\nEditor',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Main visual editing environment used to build pages in Elementor Free.',
  },
  {
    id: 'drag_drop_editor',
    label: 'Drag & Drop\nInterface',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'editor_core',
    definition: 'Add widgets by dragging them onto the canvas without writing any code.',
  },
  {
    id: 'live_preview',
    label: 'Live\nPreview',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'editor_core',
    definition: 'See your edits in real time while designing a page.',
  },
  {
    id: 'inline_editing',
    label: 'Inline Text\nEditing',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'editor_core',
    definition: 'Edit text directly on the canvas instead of in a sidebar panel.',
  },

  // Responsive
  {
    id: 'responsive_controls',
    label: 'Responsive\nControls',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Basic mobile responsiveness features available in Elementor Free.',
  },
  {
    id: 'visibility_controls',
    label: 'Show/Hide\nElements',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'responsive_controls',
    definition: 'Choose which widgets are visible on desktop, tablet, or mobile.',
  },
  {
    id: 'device_previews',
    label: 'Device\nPreviews',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'responsive_controls',
    definition: 'Preview your layout on different screen sizes inside the editor.',
  },
  {
    id: 'responsive_typography',
    label: 'Text & Padding\nAdjustments',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'responsive_controls',
    definition: 'Change font size, padding, and margins per device.',
  },

  // Styling
  {
    id: 'global_styles',
    label: 'Global Colors\n& Fonts',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Define brand styling settings to use across your entire site.',
  },
  {
    id: 'color_palette',
    label: 'Color\nPalette',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'global_styles',
    definition: 'Set primary, secondary, and accent colors used in multiple widgets.',
  },
  {
    id: 'font_settings',
    label: 'Font\nControl',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'global_styles',
    definition: 'Choose fonts, sizes, weights, and letter spacing.',
  },

  // SEO + Structure
  {
    id: 'basic_seo',
    label: 'Basic\nSEO Tools',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Simple SEO structuring tools within Elementor Free.',
  },
  {
    id: 'heading_tags',
    label: 'Heading Tag\nControl',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'basic_seo',
    definition: 'Assign H1–H6 tags to headings for semantic clarity.',
  },
  {
    id: 'image_alt_text',
    label: 'Image Alt\nText',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'basic_seo',
    definition: 'Edit image alt attributes directly inside widgets.',
  },

  // Undo/Redo + Navigation
  {
    id: 'editing_tools',
    label: 'Undo, Redo,\nNavigator',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Basic editor tools for managing layout flow and change tracking.',
  },
  {
    id: 'undo_redo',
    label: 'Undo /\nRedo',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'editing_tools',
    definition: 'Quickly revert or restore recent changes.',
  },
  {
    id: 'navigator_panel',
    label: 'Navigator\nPanel',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'editing_tools',
    definition: 'Tree-view panel showing every widget on the page for easy access.',
  },

  // Widgets
  {
    id: 'essential_widgets',
    label: 'Widgets\n(40+)',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Widgets provided in the free version for content layout, media, and interactivity.',
  },
  {
    id: 'design_widgets',
    label: 'Design\nWidgets',
    shape: 'diamond',
    color: 'nodePositive3',
    parent: 'essential_widgets',
    definition: 'Layout and visual elements like Spacer, Divider, Container, etc.',
  },
  {
    id: 'content_widgets',
    label: 'Content\nWidgets',
    shape: 'diamond',
    color: 'nodePositive3',
    parent: 'essential_widgets',
    definition: 'Text and media elements such as Image, Heading, Text Editor, Video.',
  },
  {
    id: 'interactive_widgets',
    label: 'Interactive\nWidgets',
    shape: 'diamond',
    color: 'nodePositive3',
    parent: 'essential_widgets',
    definition: 'Elements like Tabs, Accordion, Toggle, Icon List, Counter.',
  },

  // Templates
  {
    id: 'templates_library',
    label: 'Template\nLibrary',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Pre-built pages and blocks available in Elementor Free.',
  },
  {
    id: 'save_reuse_templates',
    label: 'Saved\nTemplates',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Save your own sections or pages as reusable templates.',
  },

  // Workflow
  {
    id: 'workflow_tools',
    label: 'Workflow\nFeatures',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Tools that improve productivity and speed up design.',
  },
  {
    id: 'keyboard_shortcuts',
    label: 'Keyboard\nShortcuts',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'workflow_tools',
    definition: 'Hotkeys for actions like undo, save, and preview.',
  },
  {
    id: 'autosave',
    label: 'Autosave\nSupport',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'workflow_tools',
    definition: 'Automatically saves work to reduce risk of losing changes.',
  },
  {
    id: 'media_drag_drop',
    label: 'Media Drag\n& Drop',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'workflow_tools',
    definition: 'Drop images or videos directly from your desktop into the canvas.',
  }
]

export const links = [
  { source: 'editor_core', target: 'root' },
  { source: 'drag_drop_editor', target: 'editor_core' },
  { source: 'live_preview', target: 'editor_core' },
  { source: 'inline_editing', target: 'editor_core' },

  { source: 'responsive_controls', target: 'root' },
  { source: 'visibility_controls', target: 'responsive_controls' },
  { source: 'device_previews', target: 'responsive_controls' },
  { source: 'responsive_typography', target: 'responsive_controls' },

  { source: 'global_styles', target: 'root' },
  { source: 'color_palette', target: 'global_styles' },
  { source: 'font_settings', target: 'global_styles' },

  { source: 'basic_seo', target: 'root' },
  { source: 'heading_tags', target: 'basic_seo' },
  { source: 'image_alt_text', target: 'basic_seo' },

  { source: 'editing_tools', target: 'root' },
  { source: 'undo_redo', target: 'editing_tools' },
  { source: 'navigator_panel', target: 'editing_tools' },

  { source: 'essential_widgets', target: 'root' },
  { source: 'design_widgets', target: 'essential_widgets' },
  { source: 'content_widgets', target: 'essential_widgets' },
  { source: 'interactive_widgets', target: 'essential_widgets' },

  { source: 'templates_library', target: 'root' },
  { source: 'save_reuse_templates', target: 'root' },

  { source: 'workflow_tools', target: 'root' },
  { source: 'keyboard_shortcuts', target: 'workflow_tools' },
  { source: 'autosave', target: 'workflow_tools' },
  { source: 'media_drag_drop', target: 'workflow_tools' }
]
