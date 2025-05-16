import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Building Blocks\nand Components',
    shape: 'roundRect',
    color: 'root',
    definition: 'The fundamental layout structures in Elementor: Sections, Columns, Containers (Flexbox & Grid), and Widgets. Each plays a specific role in page composition.',
  },

  {
    id: 'section',
    label: 'Section',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'A Section is the top-level container on an Elementor page. It spans the full width or boxed area and holds Columns or Containers.',
  },
  {
    id: 'section_options',
    label: 'Section\nOptions',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'section',
    definition: 'Control width, height, padding, background, and border radius for the entire section.',
  },

  {
    id: 'column',
    label: 'Column',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'A vertical subdivision of a Section. Used for side-by-side layouts. Each Column can hold multiple widgets.',
  },
  {
    id: 'column_layout_controls',
    label: 'Column\nLayout Controls',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'column',
    definition: 'Adjust column width, vertical alignment, and spacing between columns.',
  },

  {
    id: 'container',
    label: 'Container',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'A modern, highly flexible layout block in Elementor that supports Flexbox and Grid display. Can replace Sections and Columns entirely.',
  },
  {
    id: 'container_flex_options',
    label: 'Flexbox Layout\nControls',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'container',
    definition: 'Use flex direction (row/column), gap, alignment, and wrapping for responsive alignment.',
  },
  {
    id: 'container_grid_options',
    label: 'Grid Layout\nControls',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'container',
    definition: 'Enable CSS Grid-style layout: set columns, rows, gaps, item span, and justify/align settings.',
  },

  {
    id: 'nested_layouts',
    label: 'Nesting\nLayouts',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Sections can hold Columns or Containers. Containers can nest other Containers, allowing complex hierarchies and responsive layouts.',
  },
  {
    id: 'inner_section',
    label: 'Inner Section',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'nested_layouts',
    definition: 'Legacy method for nesting Columns inside a Column. Still supported but superseded by nested Containers.',
  },
  {
    id: 'nested_container',
    label: 'Nested\nContainers',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'nested_layouts',
    definition: 'Containers can contain other Containers using Flex or Grid for nested and adaptive layouts.',
  },

  {
    id: 'widget',
    label: 'Widget',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Widgets are the smallest unit in Elementor—used to insert content like text, images, buttons, and other interactive elements.',
  },
  {
    id: 'widget_controls',
    label: 'Widget Styling\n& Controls',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'widget',
    definition: 'Widgets include controls for styling (typography, padding, colors), advanced motion, and responsive visibility.',
  }
]

export const links = [
  { source: 'section', target: 'root' },
  { source: 'section_options', target: 'section' },

  { source: 'column', target: 'root' },
  { source: 'column_layout_controls', target: 'column' },

  { source: 'container', target: 'root' },
  { source: 'container_flex_options', target: 'container' },
  { source: 'container_grid_options', target: 'container' },

  { source: 'nested_layouts', target: 'root' },
  { source: 'inner_section', target: 'nested_layouts' },
  { source: 'nested_container', target: 'nested_layouts' },

  { source: 'widget', target: 'root' },
  { source: 'widget_controls', target: 'widget' }
]
