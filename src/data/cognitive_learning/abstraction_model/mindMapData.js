import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: '4-Level\nAbstraction Model',
    shape: 'roundRect',
    color: 'root',
    definition:
      'A layered framework for learning that organizes content from big-picture overview to applied practice, inspired by C4 software architecture and grounded in cognitive science.',
  },

  // Level 1
  {
    id: 'level1',
    label: 'Level 1:\nConceptual Overview',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Provides the big-picture schema to anchor future learning. Equivalent to a system context diagram in C4.',
  },
  {
    id: 'level1_schema',
    label: 'Advance\nOrganizer',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Introduces the learner to the subject’s scope and purpose. Activates prior knowledge and sets expectations.',
  },
  {
    id: 'level1_mindmap',
    label: 'Visual\nRepresentation',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Mind maps or summary diagrams make relationships between major concepts explicit.',
  },

  // Level 2
  {
    id: 'level2',
    label: 'Level 2:\nKey Topics or Themes',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Breaks down the domain into its major conceptual components (e.g., chapters, units). Analogous to C4 Containers.',
  },
  {
    id: 'level2_chunking',
    label: 'Cognitive\nChunking',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Organizes information into manageable categories to reduce intrinsic cognitive load.',
  },
  {
    id: 'level2_nav',
    label: 'Structured\nNavigation',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Each topic links to its detailed explanation and tracks user progress, allowing non-linear movement.',
  },

  // Level 3
  {
    id: 'level3',
    label: 'Level 3:\nDetailed Explanations',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'In-depth instructional content: definitions, mechanisms, diagrams. Analogous to C4 Components.',
  },
  {
    id: 'level3_load',
    label: 'Cognitive\nLoad Mgmt',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Uses techniques like segmenting, dual coding, and cross-links to reduce extraneous load.',
  },
  {
    id: 'level3_why',
    label: 'Elaboration\nand Meaning',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Promotes deep understanding by connecting ideas to prior knowledge using elaborative questioning.',
  },

  // Level 4
  {
    id: 'level4',
    label: 'Level 4:\nPractice & Feedback',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Applied examples, quizzes, and memory tools that reinforce learning through retrieval and real-world use.',
  },
  {
    id: 'level4_retrieval',
    label: 'Retrieval\nPractice',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Uses active recall, quizzes, or exercises to strengthen memory and test understanding.',
  },
  {
    id: 'level4_feedback',
    label: 'Immediate\nFeedback',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Corrects misconceptions and deepens understanding by providing explanations or solutions instantly.',
  },
  {
    id: 'level4_linkback',
    label: 'Two-Way\nLinkage',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Each exercise is tied to its explanatory concept, enabling seamless backtracking and re-engagement.',
  },

  // Cons
  {
    id: 'cons',
    label: 'Cons',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Potential limitations or drawbacks of the 4-Level Abstraction Model if improperly implemented or misunderstood.',
  },
  {
    id: 'con_overhead',
    label: 'Initial\nOverhead',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Requires front-loaded effort in organizing material and building visual/interactive infrastructure.',
  },
  {
    id: 'con_rigidity',
    label: 'Misuse:\nRigidity',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'May become rigid if learners or designers feel forced to use levels sequentially without flexibility.',
  },

  // Anti-Patterns
  {
    id: 'anti_patterns',
    label: 'Anti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Common implementation mistakes that undermine the model’s effectiveness.',
  },
  {
    id: 'anti_linear',
    label: 'Strictly\nLinear Use',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Learners may be forced to go top-to-bottom with no shortcuts or branching paths, which frustrates autonomy.',
  },
  {
    id: 'anti_bloat',
    label: 'Overloaded\nLevel 3',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Crams too much detail into Level 3 without sufficient chunking or scaffolding, leading to overload.',
  },
  {
    id: 'anti_orphaned',
    label: 'Orphaned\nLevel 4',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Practice material exists without traceability to any Level 3 concept, breaking the link between theory and application.',
  },
]

export const links = [
  // Positive links
  { source: 'root', target: 'level1' },
  { source: 'level1', target: 'level1_schema' },
  { source: 'level1', target: 'level1_mindmap' },

  { source: 'root', target: 'level2' },
  { source: 'level2', target: 'level2_chunking' },
  { source: 'level2', target: 'level2_nav' },

  { source: 'root', target: 'level3' },
  { source: 'level3', target: 'level3_load' },
  { source: 'level3', target: 'level3_why' },

  { source: 'root', target: 'level4' },
  { source: 'level4', target: 'level4_retrieval' },
  { source: 'level4', target: 'level4_feedback' },
  { source: 'level4', target: 'level4_linkback' },

  // Cons and Anti-Patterns
  { source: 'root', target: 'cons' },
  { source: 'cons', target: 'con_overhead' },
  { source: 'cons', target: 'con_rigidity' },

  { source: 'root', target: 'anti_patterns' },
  { source: 'anti_patterns', target: 'anti_linear' },
  { source: 'anti_patterns', target: 'anti_bloat' },
  { source: 'anti_patterns', target: 'anti_orphaned' },
]
