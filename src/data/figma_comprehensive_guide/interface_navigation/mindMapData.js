import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Navigating the\nFigma Interface',
    shape: 'roundRect',
    color: 'root',
    definition: 'Key areas and tools within the Figma UI that frontend developers use to inspect and extract design details.',
  },

  // Positive Level 1
  {
    id: 'toolbar',
    label: 'Toolbar',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Top bar containing tools for selection, navigation, and commenting.',
  },
  {
    id: 'layers_panel',
    label: 'Layers\nPanel',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Sidebar that shows the hierarchical structure of pages, frames, groups, and layers.',
  },
  {
    id: 'properties_panel',
    label: 'Properties\nPanel',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Sidebar for viewing and editing selected element attributes and Dev Mode inspection.',
  },
  {
    id: 'assets_panel',
    label: 'Assets\nPanel',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Sidebar for browsing and inserting Components and Styles from the library.',
  },
  {
    id: 'canvas',
    label: 'Canvas',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Main workspace where design elements are displayed and manipulated.',
  },

  // Positive Level 2 elaborations
  // Toolbar children
  {
    id: 'selection_tool',
    label: 'Selection\nTool',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'toolbar',
    definition: 'Used to select, move, and resize objects on the canvas.',
  },
  {
    id: 'hand_tool',
    label: 'Hand\nTool',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'toolbar',
    definition: 'Enables panning across the canvas without altering objects.',
  },
  {
    id: 'comment_tool',
    label: 'Comment\nTool',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'toolbar',
    definition: 'Allows leaving contextual feedback directly on designs.',
  },

  // Layers Panel children
  {
    id: 'hierarchy_view',
    label: 'Hierarchy\nView',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'layers_panel',
    definition: 'Displays nested pages, frames, and groups to mirror the DOM structure.',
  },
  {
    id: 'selection_navigation',
    label: 'Selection\nNavigation',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'layers_panel',
    definition: 'Clicking names to select elements and isolate sections quickly.',
  },

  // Properties Panel children
  {
    id: 'design_tab',
    label: 'Design\nTab',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'properties_panel',
    definition: 'Shows styling controls like colors, typography, and layout grids.',
  },
  {
    id: 'inspect_tab',
    label: 'Inspect\nTab',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'properties_panel',
    definition: 'Provides measurements, CSS code snippets, and export options in Dev Mode.',
  },

  // Assets Panel children
  {
    id: 'components_tab',
    label: 'Components\nTab',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'assets_panel',
    definition: 'Lists all library Components available for insertion into the design.',
  },
  {
    id: 'styles_tab',
    label: 'Styles\nTab',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'assets_panel',
    definition: 'Shows shared Styles for colors, text, and effects for consistent reuse.',
  },

  // Canvas children
  {
    id: 'zoom_pan',
    label: 'Zoom &\nPan',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'canvas',
    definition: 'Controls viewport scale and position for detailed inspection.',
  },
  {
    id: 'direct_selection',
    label: 'Direct\nSelection',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'canvas',
    definition: 'Clicking or marquee-selecting objects to inspect or edit them.',
  },

  // Negative Level 1 (antipatterns)
  {
    id: 'toolbar_antipattern',
    label: 'Ignoring\nToolbar',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Not using key tools or shortcuts, leading to inefficient workflows.',
  },
  {
    id: 'layers_panel_antipattern',
    label: 'Skipping\nLayer Panel',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Overlooking the hierarchy, causing misaligned selections and confusion.',
  },
  {
    id: 'properties_panel_antipattern',
    label: 'Misreading\nProperties',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Misinterpreting design specs or missing Dev Mode, resulting in inaccurate implementation.',
  },
  {
    id: 'assets_panel_antipattern',
    label: 'Asset\nMismanagement',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Poor use of export settings or library, leading to missing or incorrect assets.',
  },
  {
    id: 'canvas_antipattern',
    label: 'Canvas\nClutter',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Overcrowded or unorganized canvas makes it hard to locate and inspect elements.',
  },

  // Negative Level 2 elaborations
  {
    id: 'missing_shortcuts',
    label: 'Not Using\nShortcuts',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'toolbar_antipattern',
    definition: 'Slows down interaction by relying solely on mouse clicks.',
  },
  {
    id: 'layer_name_confusion',
    label: 'Layer Name\nConfusion',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'layers_panel_antipattern',
    definition: 'Poorly named layers make navigation and selection error-prone.',
  },
  {
    id: 'unit_misuse',
    label: 'Unit\nMisuse',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'properties_panel_antipattern',
    definition: 'Ignoring px/rem toggles or copy-pasting wrong values leads to layout bugs.',
  },
  {
    id: 'export_errors',
    label: 'Wrong Export\nSettings',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'assets_panel_antipattern',
    definition: 'Exporting at incorrect scales or formats causes unusable assets.',
  },
  {
    id: 'haphazard_grouping',
    label: 'Haphazard\nGrouping',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'canvas_antipattern',
    definition: 'Random object placement without structure makes the canvas overwhelming.',
  }
];

export const links = [
  // Root → Positive Level 1
  { source: 'root', target: 'toolbar' },
  { source: 'root', target: 'layers_panel' },
  { source: 'root', target: 'properties_panel' },
  { source: 'root', target: 'assets_panel' },
  { source: 'root', target: 'canvas' },

  // Positive Level 1 → Level 2
  { source: 'toolbar', target: 'selection_tool' },
  { source: 'toolbar', target: 'hand_tool' },
  { source: 'toolbar', target: 'comment_tool' },
  { source: 'layers_panel', target: 'hierarchy_view' },
  { source: 'layers_panel', target: 'selection_navigation' },
  { source: 'properties_panel', target: 'design_tab' },
  { source: 'properties_panel', target: 'inspect_tab' },
  { source: 'assets_panel', target: 'components_tab' },
  { source: 'assets_panel', target: 'styles_tab' },
  { source: 'canvas', target: 'zoom_pan' },
  { source: 'canvas', target: 'direct_selection' },

  // Root → Negative Level 1
  { source: 'root', target: 'toolbar_antipattern' },
  { source: 'root', target: 'layers_panel_antipattern' },
  { source: 'root', target: 'properties_panel_antipattern' },
  { source: 'root', target: 'assets_panel_antipattern' },
  { source: 'root', target: 'canvas_antipattern' },

  // Negative Level 1 → Level 2
  { source: 'toolbar_antipattern', target: 'missing_shortcuts' },
  { source: 'layers_panel_antipattern', target: 'layer_name_confusion' },
  { source: 'properties_panel_antipattern', target: 'unit_misuse' },
  { source: 'assets_panel_antipattern', target: 'export_errors' },
  { source: 'canvas_antipattern', target: 'haphazard_grouping' }
];
