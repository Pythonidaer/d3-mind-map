import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Instructional\nDesign Models',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Structured frameworks that guide how educational content is analyzed, developed, delivered, and evaluated for optimal learning effectiveness.',
  },

  // Positive Level 1 Nodes
  {
    id: 'addie',
    label: 'ADDIE\nModel',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'A five-phase framework—Analyze, Design, Develop, Implement, Evaluate—for building structured and iterative learning experiences.',
  },
  {
    id: 'ubd',
    label: 'Understanding\nby Design (UbD)',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'A backward design model where learning goals are defined first, then assessments, and lastly instructional methods.',
  },
  {
    id: 'bloomTaxonomy',
    label: 'Bloom’s\nTaxonomy',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'A hierarchical model categorizing cognitive learning objectives from basic recall to complex creation.',
  },
  {
    id: 'cognitiveLoadTheory',
    label: 'Cognitive Load\nTheory',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'A design theory based on human memory limitations, emphasizing load management to enhance learning.',
  },
  {
    id: 'backwardDesign',
    label: 'Backward\nDesign Thinking',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Start by identifying desired outcomes, then plan assessments, and only then plan lessons—ensures alignment with learning goals.',
  },
  {
    id: 'modelIntegration',
    label: 'Model\nIntegration',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Combining compatible elements of models (e.g. ADDIE + Bloom) to tailor a scalable instructional framework.',
  },

  // Anti-patterns
  {
    id: 'checklistDesign',
    label: 'Checklist-\nDriven Design',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Blindly applying instructional steps without contextual tailoring or feedback loops.',
  },
  {
    id: 'outcomeNeglect',
    label: 'Neglecting\nLearning Outcomes',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Focusing on teaching activities without anchoring them to measurable understanding or goals.',
  },
]

export const links = [
  { source: 'root', target: 'addie' },
  { source: 'root', target: 'ubd' },
  { source: 'root', target: 'bloomTaxonomy' },
  { source: 'root', target: 'cognitiveLoadTheory' },
  { source: 'root', target: 'backwardDesign' },
  { source: 'root', target: 'modelIntegration' },

  { source: 'root', target: 'checklistDesign' },
  { source: 'root', target: 'outcomeNeglect' },
]
