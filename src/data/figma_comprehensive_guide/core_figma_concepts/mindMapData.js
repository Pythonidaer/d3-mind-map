import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Core\nFigma Concepts',
    shape: 'roundRect',
    color: 'root',
    definition: 'Fundamental elements and principles in Figma relevant to frontend development.',
  },

  // Positive Level 1
  {
    id: 'frames_groups_sections',
    label: 'Frames, Groups\n& Sections',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Containers and organizational elements that structure designs, mirroring web DOM hierarchies.',
  },
  {
    id: 'components_instances',
    label: 'Components\n& Instances',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Reusable design elements and their instances, analogous to UI components in code.',
  },
  {
    id: 'styles_variables',
    label: 'Styles\n& Variables',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Shared visual styles and dynamic tokens for consistent theming and design systems.',
  },
  {
    id: 'constraints_auto_layout',
    label: 'Constraints &\nAuto Layout',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Responsive layout controls that define element behavior under resizing, similar to CSS Flexbox and Grid.',
  },

  // Positive Level 2 elaborations
  {
    id: 'frames_usage',
    label: 'Frame\nUsage',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'frames_groups_sections',
    definition: 'Use Frames to define structural containers with resize and alignment properties.',
  },
  {
    id: 'groups_usage',
    label: 'Group\nUsage',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'frames_groups_sections',
    definition: 'Use Groups for simple element grouping without layout constraints.',
  },
  {
    id: 'sections_usage',
    label: 'Section\nUsage',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'frames_groups_sections',
    definition: 'Use Sections to organize flows and mark dev-ready areas for handoff.',
  },

  {
    id: 'component_master',
    label: 'Master\nComponent',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'components_instances',
    definition: 'Define a reusable master Component as the source of truth for UI elements.',
  },
  {
    id: 'instance_customization',
    label: 'Instance\nCustomization',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'components_instances',
    definition: 'Override specific properties on Instances without detaching them from the master.',
  },
  {
    id: 'variants_properties',
    label: 'Variants\n& Properties',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'components_instances',
    definition: 'Use Variants for state-based versions and Component Properties for flexible overrides.',
  },

  {
    id: 'color_styles',
    label: 'Color\nStyles',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'styles_variables',
    definition: 'Create shared color definitions to enforce a consistent palette across designs.',
  },
  {
    id: 'text_styles',
    label: 'Text\nStyles',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'styles_variables',
    definition: 'Define typography scales and reuse them to maintain consistent text formatting.',
  },
  {
    id: 'variables_theming',
    label: 'Variables\n& Theming',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'styles_variables',
    definition: 'Use Variables to store design tokens for color modes, spacing, and other dynamic values.',
  },

  {
    id: 'constraint_principles',
    label: 'Constraint\nPrinciples',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'constraints_auto_layout',
    definition: 'Pin and scale child objects to define behavior when parent frames resize.',
  },
  {
    id: 'auto_layout_principles',
    label: 'Auto Layout\nPrinciples',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'constraints_auto_layout',
    definition: 'Use Auto Layout (Flexbox/Grid analog) to build content-driven frames that adapt automatically.',
  },
  {
    id: 'responsive_guidelines',
    label: 'Responsive\nGuidelines',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'constraints_auto_layout',
    definition: 'Leverage combined constraints and Auto Layout settings to ensure designs work at any size.',
  },

  // Negative Level 1 (direct children of root)
  {
    id: 'frames_groups_sections_antipattern',
    label: 'Misusing\nFrames & Groups',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Using Groups instead of Frames for layout, causing inconsistent spacing and poor responsiveness.',
  },
  {
    id: 'components_instances_antipattern',
    label: 'Detaching\nInstances',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Breaking the link between Instances and their master Component, leading to design drift and maintenance headaches.',
  },
  {
    id: 'styles_variables_antipattern',
    label: 'Hardcoding\nStyles',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Embedding visual values directly on elements instead of using shared Styles or Variables, hindering consistency.',
  },
  {
    id: 'constraints_auto_layout_antipattern',
    label: 'Ignoring\nAuto Layout',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Manually positioning elements without Auto Layout, resulting in rigid designs that break on resize.',
  },

  // Negative Level 2 elaborations
  {
    id: 'frames_groups_sections_inconsistent_spacing',
    label: 'Inconsistent\nSpacing',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'frames_groups_sections_antipattern',
    definition: 'Results in uneven spacing that breaks layout rhythm.',
  },
  {
    id: 'frames_groups_sections_no_responsive',
    label: 'No\nResponsive\nBehavior',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'frames_groups_sections_antipattern',
    definition: 'Lack of automatic resizing causes breakage on different screen sizes.',
  },

  {
    id: 'components_instances_design_drift',
    label: 'Design\nDrift',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'components_instances_antipattern',
    definition: 'Instances diverge from the master component, causing inconsistency.',
  },
  {
    id: 'components_instances_fragmentation',
    label: 'Version\nFragmentation',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'components_instances_antipattern',
    definition: 'Multiple unlinked versions lead to a fragmented component library.',
  },

  {
    id: 'styles_variables_inconsistency',
    label: 'Visual\nInconsistency',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'styles_variables_antipattern',
    definition: 'Styles vary across elements due to direct, non-shared formatting.',
  },
  {
    id: 'styles_variables_update_burden',
    label: 'Update\nBurden',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'styles_variables_antipattern',
    definition: 'Global style changes require manual updates on each element.',
  },

  {
    id: 'constraints_auto_layout_rigid_layout',
    label: 'Rigid\nLayout',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'constraints_auto_layout_antipattern',
    definition: 'Static positioning leads to layouts that don’t adapt to content changes.',
  },
  {
    id: 'constraints_auto_layout_manual_fixes',
    label: 'Manual\nFixes',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'constraints_auto_layout_antipattern',
    definition: 'Time-consuming manual adjustments needed after each change.',
  }
];

export const links = [
  // Root → Positive Level 1
  { source: 'root', target: 'frames_groups_sections' },
  { source: 'root', target: 'components_instances' },
  { source: 'root', target: 'styles_variables' },
  { source: 'root', target: 'constraints_auto_layout' },

  // Root → Negative Level 1
  { source: 'root', target: 'frames_groups_sections_antipattern' },
  { source: 'root', target: 'components_instances_antipattern' },
  { source: 'root', target: 'styles_variables_antipattern' },
  { source: 'root', target: 'constraints_auto_layout_antipattern' },

  // Positive Level 1 → Level 2 elaborations
  { source: 'frames_groups_sections', target: 'frames_usage' },
  { source: 'frames_groups_sections', target: 'groups_usage' },
  { source: 'frames_groups_sections', target: 'sections_usage' },

  { source: 'components_instances', target: 'component_master' },
  { source: 'components_instances', target: 'instance_customization' },
  { source: 'components_instances', target: 'variants_properties' },

  { source: 'styles_variables', target: 'color_styles' },
  { source: 'styles_variables', target: 'text_styles' },
  { source: 'styles_variables', target: 'variables_theming' },

  { source: 'constraints_auto_layout', target: 'constraint_principles' },
  { source: 'constraints_auto_layout', target: 'auto_layout_principles' },
  { source: 'constraints_auto_layout', target: 'responsive_guidelines' },

  // Negative Level 1 → Level 2 elaborations
  { source: 'frames_groups_sections_antipattern', target: 'frames_groups_sections_inconsistent_spacing' },
  { source: 'frames_groups_sections_antipattern', target: 'frames_groups_sections_no_responsive' },

  { source: 'components_instances_antipattern', target: 'components_instances_design_drift' },
  { source: 'components_instances_antipattern', target: 'components_instances_fragmentation' },

  { source: 'styles_variables_antipattern', target: 'styles_variables_inconsistency' },
  { source: 'styles_variables_antipattern', target: 'styles_variables_update_burden' },

  { source: 'constraints_auto_layout_antipattern', target: 'constraints_auto_layout_rigid_layout' },
  { source: 'constraints_auto_layout_antipattern', target: 'constraints_auto_layout_manual_fixes' }
];
