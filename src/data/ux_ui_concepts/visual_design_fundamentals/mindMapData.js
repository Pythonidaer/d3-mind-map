import { COLORS } from '../../../theme/colors';

export const nodes = [
  // Root
  {
    id: 'root',
    label: 'Visual Design',
    definition: 'A comprehensive discipline covering the visual language of user interfaces, including layout, color, typography, motion, affordance, and feedback.',
    shape: 'roundRect',
    color: 'root',
  },

  // Top-Level Branches
  { id: 'principles', label: 'Design Principles', definition: 'Core principles like alignment, contrast, and hierarchy that govern visual structure and perception.', shape: 'ellipse', color: 'nodePositive1' },
  { id: 'layout_composition', label: 'Layout & Composition', definition: 'Spatial organization of visual elements using grids, whitespace, and rhythm.', shape: 'ellipse', color: 'nodePositive1' },
  { id: 'typography', label: 'Typography', definition: 'The art and technique of arranging type to make written language legible, readable, and visually appealing.', shape: 'ellipse', color: 'nodePositive1' },
  { id: 'color_theory', label: 'Color Theory', definition: 'The science and emotion of color, including contrast, harmony, and brand alignment.', shape: 'ellipse', color: 'nodePositive1' },
  { id: 'imagery_icons', label: 'Imagery & Iconography', definition: 'Use of illustrations, photography, and icons to convey meaning and reinforce identity.', shape: 'ellipse', color: 'nodePositive1' },
  { id: 'motion_feedback', label: 'Motion & Feedback', definition: 'Visual transitions, animations, and affordances that enhance usability and clarity.', shape: 'ellipse', color: 'nodePositive1' },
  { id: 'responsive_design', label: 'Responsive Design Impacts', definition: 'Design considerations to preserve usability and beauty across screen sizes.', shape: 'ellipse', color: 'nodePositive1' },
  { id: 'visual_data_design', label: 'Visual Design + Data', definition: 'How visual design principles support the presentation of data in interfaces.', shape: 'ellipse', color: 'nodePositive1' },
  { id: 'depth_elevation', label: 'Depth & Elevation', definition: 'Use of layering, shadow, and z-index to create structured interfaces.', shape: 'ellipse', color: 'nodePositive1' },

  // Existing Level 2 Nodes...
  { id: 'principle_hierarchy', label: 'Visual Hierarchy', definition: 'Directs the viewer’s attention using size, contrast, and position.', shape: 'rect', color: 'nodePositive2' },
  { id: 'principle_balance', label: 'Balance & Symmetry', definition: 'Distributes elements evenly or intentionally creates asymmetry to guide flow.', shape: 'rect', color: 'nodePositive2' },
  { id: 'principle_alignment', label: 'Alignment & Grids', definition: 'Creates order through consistent vertical and horizontal positioning.', shape: 'rect', color: 'nodePositive2' },
  { id: 'principle_contrast', label: 'Contrast & Emphasis', definition: 'Establishes difference and focal points through shape, color, and size.', shape: 'rect', color: 'nodePositive2' },

  // Layout
  { id: 'grid_systems', label: 'Grid Systems', definition: 'Column- or module-based layouts that structure content spatially.', shape: 'rect', color: 'nodePositive2' },
  { id: 'spacing_whitespace', label: 'Whitespace & Margins', definition: 'Empty space that separates elements and reduces visual noise.', shape: 'rect', color: 'nodePositive2' },
  { id: 'content_density', label: 'Content Density', definition: 'Balancing how much content appears in a single view or component.', shape: 'rect', color: 'nodePositive2' },

  // Typography
  { id: 'font_choice', label: 'Font Selection', definition: 'Choosing readable, brand-aligned fonts for headlines and body text.', shape: 'rect', color: 'nodePositive2' },
  { id: 'typography_hierarchy', label: 'Typographic Hierarchy', definition: 'Using size, weight, and spacing to distinguish headings, body, and UI labels.', shape: 'rect', color: 'nodePositive2' },
  { id: 'line_length', label: 'Character Line Length', definition: 'Keeping lines of text around 45–75 characters for optimal readability.', shape: 'rect', color: 'nodePositive2' },
  { id: 'leading_tracking', label: 'Leading & Tracking', definition: 'Line height and letter spacing tuned for readability across sizes and contexts.', shape: 'rect', color: 'nodePositive2' },

  // Color
  { id: 'color_meaning', label: 'Color Psychology', definition: 'Associating emotion or intent with color (e.g., red = warning, green = success).', shape: 'rect', color: 'nodePositive2' },
  { id: 'color_harmony', label: 'Color Harmony', definition: 'Combinations like analogous, complementary, and triadic that are visually pleasing.', shape: 'rect', color: 'nodePositive2' },
  { id: 'color_accessibility', label: 'Color Contrast & Accessibility', definition: 'Ensuring foreground and background colors meet WCAG contrast standards.', shape: 'rect', color: 'nodePositive2' },

  // Imagery
  { id: 'illustrations', label: 'Illustrations', definition: 'Custom graphics that communicate concepts, emotions, or workflows.', shape: 'rect', color: 'nodePositive2' },
  { id: 'icons', label: 'Icons', definition: 'Small symbolic visuals that communicate action or meaning without text.', shape: 'rect', color: 'nodePositive2' },
  { id: 'photography', label: 'Photography', definition: 'Authentic or stylized imagery to enhance credibility and storytelling.', shape: 'rect', color: 'nodePositive2' },

  // Motion
  { id: 'microinteractions', label: 'Microinteractions', definition: 'Small animations that provide feedback or enhance understanding of change.', shape: 'rect', color: 'nodePositive2' },
  { id: 'transition_design', label: 'Transitions', definition: 'Animated shifts between views or UI states that reduce cognitive dissonance.', shape: 'rect', color: 'nodePositive2' },
  { id: 'affordances', label: 'Visual Affordance', definition: 'Design cues that suggest an element’s functionality (e.g., buttons that look clickable).', shape: 'rect', color: 'nodePositive2' },

  // Responsive Design
  { id: 'fluid_typography', label: 'Fluid Typography', definition: 'Text that scales with screen size to maintain legibility across devices.', shape: 'rect', color: 'nodePositive2' },
  { id: 'adaptive_layouts', label: 'Adaptive Layouts', definition: 'Design patterns that reflow or restructure content based on breakpoints.', shape: 'rect', color: 'nodePositive2' },

  // Visual + Data
  { id: 'data_density_balance', label: 'Data Density Balance', definition: 'Managing content and white space in dashboards and data-heavy interfaces.', shape: 'rect', color: 'nodePositive2' },
  { id: 'visual_encoding', label: 'Visual Encoding', definition: 'Using shape, size, color, or placement to represent meaning and scale in UI.', shape: 'rect', color: 'nodePositive2' },

  // Depth
  { id: 'z_layering', label: 'Z-Layering', definition: 'Managing stacking order and UI elevation for modals, dropdowns, and cards.', shape: 'rect', color: 'nodePositive2' },
  { id: 'shadows_highlights', label: 'Shadows & Highlights', definition: 'Subtle effects that create depth and visual separation in flat UI.', shape: 'rect', color: 'nodePositive2' }
];

export const links = [
  { source: 'root', target: 'principles' },
  { source: 'root', target: 'layout_composition' },
  { source: 'root', target: 'typography' },
  { source: 'root', target: 'color_theory' },
  { source: 'root', target: 'imagery_icons' },
  { source: 'root', target: 'motion_feedback' },
  { source: 'root', target: 'responsive_design' },
  { source: 'root', target: 'visual_data_design' },
  { source: 'root', target: 'depth_elevation' },

  { source: 'principles', target: 'principle_hierarchy' },
  { source: 'principles', target: 'principle_balance' },
  { source: 'principles', target: 'principle_alignment' },
  { source: 'principles', target: 'principle_contrast' },

  { source: 'layout_composition', target: 'grid_systems' },
  { source: 'layout_composition', target: 'spacing_whitespace' },
  { source: 'layout_composition', target: 'content_density' },

  { source: 'typography', target: 'font_choice' },
  { source: 'typography', target: 'typography_hierarchy' },
  { source: 'typography', target: 'line_length' },
  { source: 'typography', target: 'leading_tracking' },

  { source: 'color_theory', target: 'color_meaning' },
  { source: 'color_theory', target: 'color_harmony' },
  { source: 'color_theory', target: 'color_accessibility' },

  { source: 'imagery_icons', target: 'illustrations' },
  { source: 'imagery_icons', target: 'icons' },
  { source: 'imagery_icons', target: 'photography' },

  { source: 'motion_feedback', target: 'microinteractions' },
  { source: 'motion_feedback', target: 'transition_design' },
  { source: 'motion_feedback', target: 'affordances' },

  { source: 'responsive_design', target: 'fluid_typography' },
  { source: 'responsive_design', target: 'adaptive_layouts' },

  { source: 'visual_data_design', target: 'data_density_balance' },
  { source: 'visual_data_design', target: 'visual_encoding' },

  { source: 'depth_elevation', target: 'z_layering' },
  { source: 'depth_elevation', target: 'shadows_highlights' }
];
