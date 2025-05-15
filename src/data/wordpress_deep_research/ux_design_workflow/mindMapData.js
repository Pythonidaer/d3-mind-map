import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'UX Design\nWorkflow',
    shape: 'roundRect',
    color: 'root',
    definition: 'The iterative process for planning, researching, designing, testing, and refining user experiences in digital products like websites or applications.'
  },

  // Phase nodes
  {
    id: 'research',
    label: 'Research &\nDiscovery',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'The phase where user needs, goals, and pain points are gathered using methods like interviews, analytics, and competitor analysis.'
  },
  {
    id: 'planning',
    label: 'Information\nArchitecture',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'The structuring of content and features to support usability and navigation through site maps, content audits, and taxonomy systems.'
  },
  {
    id: 'wireframes',
    label: 'Wireframes &\nPrototyping',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'The creation of low- and high-fidelity visual representations of layouts and interfaces to define structure and flow before final design.'
  },
  {
    id: 'testing',
    label: 'User Testing &\nValidation',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Involves testing early designs with real users to validate assumptions, uncover usability issues, and refine based on feedback.'
  },
  {
    id: 'handoff',
    label: 'Design Handoff &\nIteration',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Transitioning finalized designs to development while continuously iterating based on stakeholder and user feedback.'
  },

  // Children of Research
  {
    id: 'user_interviews',
    label: 'User\nInterviews',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'research',
    definition: 'Talking directly with target users to understand their goals, behaviors, and pain points.'
  },
  {
    id: 'analytics_review',
    label: 'Analytics\nReview',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'research',
    definition: 'Examining behavioral data from tools like Google Analytics to identify drop-offs and friction points.'
  },
  {
    id: 'persona_dev',
    label: 'Persona\nDevelopment',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'research',
    definition: 'Creating fictional archetypes representing key user groups to guide design decisions.'
  },

  // Children of Planning
  {
    id: 'sitemaps',
    label: 'Sitemaps',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'planning',
    definition: 'A high-level map of all major pages and how they relate hierarchically.'
  },
  {
    id: 'content_audit',
    label: 'Content\nAudit',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'planning',
    definition: 'Reviewing existing content to determine what to keep, update, or remove.'
  },
  {
    id: 'navigation_flows',
    label: 'Navigation\nFlows',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'planning',
    definition: 'Designing the logical and intuitive flow between content and features.'
  },

  // Children of Wireframes
  {
    id: 'low_fidelity',
    label: 'Low-Fidelity\nWireframes',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'wireframes',
    definition: 'Sketches or basic digital layouts to test structure and hierarchy early on.'
  },
  {
    id: 'interactive_prototypes',
    label: 'Interactive\nPrototypes',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'wireframes',
    definition: 'Clickable representations of layouts used for usability testing and validation.'
  },

  // Children of Testing
  {
    id: 'usability_testing',
    label: 'Usability\nTesting',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'testing',
    definition: 'Observing users as they interact with a product to identify usability issues.'
  },
  {
    id: 'heatmaps',
    label: 'Heatmaps &\nRecordings',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'testing',
    definition: 'Visual tools that show where users click, scroll, and hover on a page.'
  },

  // Children of Handoff
  {
    id: 'figma_to_dev',
    label: 'Figma to\nDevelopment',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'handoff',
    definition: 'Exporting finalized designs and specs to frontend teams via Figma or similar tools.'
  },
  {
    id: 'iteration_loops',
    label: 'Feedback &\nIteration Loops',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'handoff',
    definition: 'Using stakeholder feedback, bug reports, or design QA to refine designs post-handoff.'
  },

  // Cons
  {
    id: 'nodeNegative1',
    label: 'Cons',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Potential challenges and downsides of UX design workflows when poorly implemented or under-resourced.'
  },
  {
    id: 'incomplete_research',
    label: 'Incomplete\nUser Research',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'nodeNegative1',
    definition: 'Skipping or rushing research can lead to invalid assumptions about user needs.'
  },
  {
    id: 'handoff_breakdown',
    label: 'Design to Dev\nHandoff Breakdown',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'nodeNegative1',
    definition: 'Poor communication or lack of specs can lead to implementation errors and rework.'
  },
  {
    id: 'ignoring_testing',
    label: 'Ignoring\nTesting Results',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'nodeNegative1',
    definition: 'Not acting on usability insights undermines the entire UX process.'
  }
]

export const links = [
  { source: 'root', target: 'research' },
  { source: 'root', target: 'planning' },
  { source: 'root', target: 'wireframes' },
  { source: 'root', target: 'testing' },
  { source: 'root', target: 'handoff' },
  { source: 'root', target: 'nodeNegative1' },

  { source: 'research', target: 'user_interviews' },
  { source: 'research', target: 'analytics_review' },
  { source: 'research', target: 'persona_dev' },

  { source: 'planning', target: 'sitemaps' },
  { source: 'planning', target: 'content_audit' },
  { source: 'planning', target: 'navigation_flows' },

  { source: 'wireframes', target: 'low_fidelity' },
  { source: 'wireframes', target: 'interactive_prototypes' },

  { source: 'testing', target: 'usability_testing' },
  { source: 'testing', target: 'heatmaps' },

  { source: 'handoff', target: 'figma_to_dev' },
  { source: 'handoff', target: 'iteration_loops' },

  { source: 'nodeNegative1', target: 'incomplete_research' },
  { source: 'nodeNegative1', target: 'handoff_breakdown' },
  { source: 'nodeNegative1', target: 'ignoring_testing' }
]
