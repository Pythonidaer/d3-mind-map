import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Elements\nTab',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Primary DevTools panel for inspecting and editing the DOM and CSS.',
  },
  {
    id: 'dom_inspection',
    label: 'DOM\nInspection',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'View and navigate the rendered HTML structure and live DOM.',
  },
  {
    id: 'view_edit_html',
    label: 'Real-time\nEditing',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Edit HTML elements and attributes on the fly.',
  },
  {
    id: 'css_styles',
    label: 'CSS\nStyles Pane',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Examine and modify CSS rules applied to elements.',
  },
  {
    id: 'computed',
    label: 'Computed\nPane',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'View final resolved CSS properties for an element.',
  },
  {
    id: 'layout',
    label: 'Layout\nPane',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Visualize CSS Grid and Flexbox layouts with overlays.',
  },
  {
    id: 'event_listeners',
    label: 'Event\nListeners',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Inspect JS event listeners attached to elements.',
  },
  {
    id: 'dom_breakpoints',
    label: 'DOM\nBreakpoints',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Set breakpoints on DOM changes to pause JS execution.',
  },
  {
    id: 'properties_tab',
    label: 'Properties\nTab',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Explore JS object properties of a DOM node.',
  },
  {
    id: 'accessibility',
    label: 'Accessibility\nTab',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Inspect ARIA attributes and accessibility tree.',
  },

  // Level 2 nodes
  {
    id: 'rendered_dom',
    label: 'Rendered\nDOM',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Live HTML after JS modifications.',
  },
  {
    id: 'hover_highlight',
    label: 'Hover\nHighlight',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Highlights element in viewport on hover.',
  },
  {
    id: 'dynamic_updates',
    label: 'Dynamic\nUpdates',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Reflects post-load changes from scripts.',
  },

  {
    id: 'edit_attributes',
    label: 'Edit\nAttributes',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Modify element attributes in real-time.',
  },
  {
    id: 'add_delete_elements',
    label: 'Add/Delete\nElements',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Insert or remove elements dynamically.',
  },
  {
    id: 'persist_changes',
    label: 'Persist\nChanges',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Use Overrides/Workspaces to save edits.',
  },

  {
    id: 'view_applied_rules',
    label: 'Applied\nRules',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Shows all CSS rules affecting element.',
  },
  {
    id: 'edit_css',
    label: 'Edit\nCSS',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Modify or add CSS properties and values.',
  },
  {
    id: 'source_links',
    label: 'Source\nLinks',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Jump to stylesheet and line number.',
  },

  {
    id: 'resolved_props',
    label: 'Resolved\nProperties',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Final computed values after cascade.',
  },
  {
    id: 'inherited_props',
    label: 'Inherited\nProperties',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Properties inherited from parents.',
  },
  {
    id: 'computed_filters',
    label: 'Filter\nSearch',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Search specific computed properties.',
  },

  {
    id: 'grid_overlays',
    label: 'Grid\nOverlays',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Visualize CSS Grid lines and tracks.',
  },
  {
    id: 'flex_overlays',
    label: 'Flexbox\nOverlays',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Highlight flex containers and items.',
  },
  {
    id: 'overlay_colors',
    label: 'Overlay\nColors',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Customize overlay appearance.',
  },

  {
    id: 'listener_types',
    label: 'Listener\nTypes',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Click, mouseover, keydown, etc.',
  },
  {
    id: 'handler_links',
    label: 'Handler\nLinks',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Navigate to listener source code.',
  },
  {
    id: 'passive_flag',
    label: 'Passive\nFlag',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Indicates performance-safe listeners.',
  },

  {
    id: 'subtree_mod',
    label: 'Subtree\nModifications',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Break on child node changes.',
  },
  {
    id: 'attr_mod',
    label: 'Attribute\nModifications',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Break on attribute changes.',
  },
  {
    id: 'node_removal',
    label: 'Node\nRemoval',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Break when element is removed.',
  },

  {
    id: 'own_inherited',
    label: 'Own vs\nInherited',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Differentiate property sources.',
  },
  {
    id: 'enumerability',
    label: 'Enumerable\nProperties',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Show/hide enumerable vs hidden.',
  },
  {
    id: 'nested_inspect',
    label: 'Nested\nObjects',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Expand nested data structures.',
  },

  {
    id: 'aria_attrs',
    label: 'ARIA\nAttributes',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Inspect roles and states.',
  },
  {
    id: 'acc_name',
    label: 'Accessible\nName',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Name announced by screen readers.',
  },
  {
    id: 'acc_tree',
    label: 'Accessibility\nTree',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'View semantic tree for AT.',
  },

  // Level 3 nodes under Applied Rules
  {
    id: 'author_styles',
    label: 'Author\nStyles',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Styles from your stylesheets.',
  },
  {
    id: 'ua_styles',
    label: 'User-Agent\nStyles',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Browser default styles.',
  },
  {
    id: 'inline_styles',
    label: 'Inline\nStyles',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Styles applied directly on elements.',
  },
]

export const links = [
  { source: 'root', target: 'dom_inspection' },
  { source: 'root', target: 'view_edit_html' },
  { source: 'root', target: 'css_styles' },
  { source: 'root', target: 'computed' },
  { source: 'root', target: 'layout' },
  { source: 'root', target: 'event_listeners' },
  { source: 'root', target: 'dom_breakpoints' },
  { source: 'root', target: 'properties_tab' },
  { source: 'root', target: 'accessibility' },

  // Level 2 links
  { source: 'dom_inspection', target: 'rendered_dom' },
  { source: 'dom_inspection', target: 'hover_highlight' },
  { source: 'dom_inspection', target: 'dynamic_updates' },

  { source: 'view_edit_html', target: 'edit_attributes' },
  { source: 'view_edit_html', target: 'add_delete_elements' },
  { source: 'view_edit_html', target: 'persist_changes' },

  { source: 'css_styles', target: 'view_applied_rules' },
  { source: 'css_styles', target: 'edit_css' },
  { source: 'css_styles', target: 'source_links' },

  { source: 'view_applied_rules', target: 'author_styles' },
  { source: 'view_applied_rules', target: 'ua_styles' },
  { source: 'view_applied_rules', target: 'inline_styles' },

  { source: 'computed', target: 'resolved_props' },
  { source: 'computed', target: 'inherited_props' },
  { source: 'computed', target: 'computed_filters' },

  { source: 'layout', target: 'grid_overlays' },
  { source: 'layout', target: 'flex_overlays' },
  { source: 'layout', target: 'overlay_colors' },

  { source: 'event_listeners', target: 'listener_types' },
  { source: 'event_listeners', target: 'handler_links' },
  { source: 'event_listeners', target: 'passive_flag' },

  { source: 'dom_breakpoints', target: 'subtree_mod' },
  { source: 'dom_breakpoints', target: 'attr_mod' },
  { source: 'dom_breakpoints', target: 'node_removal' },

  { source: 'properties_tab', target: 'own_inherited' },
  { source: 'properties_tab', target: 'enumerability' },
  { source: 'properties_tab', target: 'nested_inspect' },

  { source: 'accessibility', target: 'aria_attrs' },
  { source: 'accessibility', target: 'acc_name' },
  { source: 'accessibility', target: 'acc_tree' },
]
