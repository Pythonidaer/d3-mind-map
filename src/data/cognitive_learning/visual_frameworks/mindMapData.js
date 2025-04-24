import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Visualization &\nUX for Learning',
    shape: 'roundRect',
    color: 'root',
    definition:
      'User interface and design principles that align with cognitive science to make learning visual, navigable, and cognitively efficient.',
  },

  // Positive Level 1 Nodes
  {
    id: 'mindMaps',
    label: 'Mind Maps &\nConcept Diagrams',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Graphical maps that organize knowledge hierarchically and show relationships between concepts for enhanced recall and orientation.',
  },
  {
    id: 'progressiveDisclosure',
    label: 'Progressive\nDisclosure',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'A design technique that shows high-level information first, allowing users to drill down into detail as needed to reduce overload.',
  },
  {
    id: 'zoomableUIs',
    label: 'Zoomable\nInterfaces',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Interfaces that let users pan and zoom through different levels of abstraction, supporting exploration and layered learning.',
  },
  {
    id: 'twoWayLinking',
    label: 'Two-Way\nLinking',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Bi-directional navigation between theory (concepts) and practice (examples), improving contextual memory and backtracking.',
  },
  {
    id: 'tooltips',
    label: 'Tooltips &\nPopovers',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Lightweight overlays offering just-in-time explanations, reducing cognitive load and supporting inline comprehension.',
  },
  {
    id: 'adaptiveNavigation',
    label: 'Adaptive\nNavigation',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Interfaces that guide or adjust based on user performance or interest, creating personalized and efficient learning journeys.',
  },
  {
    id: 'visCues',
    label: 'Visual Cues &\nSemantic Layout',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Designing interfaces to visually represent learning structure, content hierarchy, and semantic boundaries (e.g. chunked cards).',
  },

  // Anti-patterns
  {
    id: 'visualOverload',
    label: 'Visual\nOverload',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Excessive or cluttered visuals that hinder comprehension and distract from learning goals.',
  },
  {
    id: 'linearOnlyDesign',
    label: 'Strictly Linear\nDesign',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Rigid structures that prevent exploration or self-directed review, leading to disengagement and shallow navigation.',
  },
]

export const links = [
  { source: 'root', target: 'mindMaps' },
  { source: 'root', target: 'progressiveDisclosure' },
  { source: 'root', target: 'zoomableUIs' },
  { source: 'root', target: 'twoWayLinking' },
  { source: 'root', target: 'tooltips' },
  { source: 'root', target: 'adaptiveNavigation' },
  { source: 'root', target: 'visCues' },

  { source: 'root', target: 'visualOverload' },
  { source: 'root', target: 'linearOnlyDesign' },
]
