import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Synthesis Best Practices',
    shape: 'roundRect',
    color: 'root',
    definition: 'Strategies for effectively combining research data into actionable insights and UX design direction.'
  },

  // Positive Tier 1
  {
    id: 'affinity_mapping',
    label: 'Affinity Mapping',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Organizing qualitative data into themes by grouping related observations.'
  },
  {
    id: 'pattern_recognition',
    label: 'Pattern\nRecognition',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Identifying trends and commonalities in user feedback to form key insights.'
  },
  {
    id: 'prioritization',
    label: 'Insight\nPrioritization',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Focusing on insights with the highest user impact and business relevance.'
  },
  {
    id: 'visualization',
    label: 'Synthesis\nVisualization',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Using diagrams, frameworks, and visuals to communicate synthesized findings.'
  },
  {
    id: 'triangulation',
    label: 'Data\nTriangulation',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Cross-validating insights by comparing different data sources and methods.'
  },
  {
    id: 'bias_awareness',
    label: 'Bias\nAwareness',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Recognizing and reducing personal or team bias during the synthesis process.'
  },

  // Positive Tier 2
  {
    id: 'group_themes',
    label: 'Group\nObservations',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'affinity_mapping',
    definition: 'Start with user quotes or sticky notes, then group similar sentiments together.'
  },
  {
    id: 'label_clusters',
    label: 'Label\nClusters',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'affinity_mapping',
    definition: 'Name each group with a clear theme or pattern to summarize its meaning.'
  },
  {
    id: 'quantify_patterns',
    label: 'Quantify\nPatterns',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'pattern_recognition',
    definition: 'Track how often themes appear across sessions or participants.'
  },
  {
    id: 'compare_segments',
    label: 'Compare\nSegments',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'pattern_recognition',
    definition: 'See how patterns vary by user group, context, or platform.'
  },
  {
    id: 'impact_matrix',
    label: 'Impact vs Effort\nMatrix',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'prioritization',
    definition: 'Map insights on an axis of user impact and implementation effort.'
  },
  {
    id: 'align_stakeholders',
    label: 'Align with\nStakeholders',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'prioritization',
    definition: 'Present top insights in a way that supports product strategy and stakeholder buy-in.'
  },
  {
    id: 'journey_maps',
    label: 'User\nJourney Maps',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'visualization',
    definition: 'Use journey maps to visualize user emotions, pain points, and touchpoints.'
  },
  {
    id: 'insight_dashboards',
    label: 'Insight\nDashboards',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'visualization',
    definition: 'Summarize key themes and metrics in a single visual or artifact.'
  },
  {
    id: 'cross_method',
    label: 'Cross-Method\nValidation',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'triangulation',
    definition: 'Validate an insight with both qualitative and quantitative data.'
  },
  {
    id: 'team_review',
    label: 'Team\nDebriefs',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'triangulation',
    definition: 'Bring multiple team perspectives together to confirm or challenge insights.'
  },
  {
    id: 'reflective_questions',
    label: 'Reflective\nQuestions',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'bias_awareness',
    definition: 'Ask: Are we assuming too much? What’s missing? Who’s not represented?'
  },
  {
    id: 'external_audit',
    label: 'External\nReview',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'bias_awareness',
    definition: 'Invite someone outside the core team to review and question the insights.'
  },

  // Negative Tier 1
  {
    id: 'nodeNegative1_overgeneralizing',
    label: 'Overgeneralizing\nFindings',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Mistaking a few user behaviors or quotes as universal truths.'
  },
  {
    id: 'nodeNegative1_no_structure',
    label: 'No\nSynthesis Structure',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Jumping straight to insights without sorting or categorizing raw data.'
  },

  // Negative Tier 2
  {
    id: 'nodeNegative2_missing_segments',
    label: 'Ignoring\nUser Segments',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'nodeNegative1_overgeneralizing',
    definition: 'Failing to recognize when patterns only apply to specific demographics or contexts.'
  },
  {
    id: 'nodeNegative2_quote_bias',
    label: 'Overweighting\nQuotes',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'nodeNegative1_overgeneralizing',
    definition: 'Letting dramatic or memorable quotes skew the overall synthesis.'
  },
  {
    id: 'nodeNegative2_data_dumps',
    label: 'Raw Data\nDump',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'nodeNegative1_no_structure',
    definition: 'Delivering raw transcripts or stickies without distilling actionable insights.'
  },
  {
    id: 'nodeNegative2_rushed_analysis',
    label: 'Rushed\nAnalysis',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'nodeNegative1_no_structure',
    definition: 'Skipping proper synthesis due to time pressure or handoff urgency.'
  }
];

export const links = [
  // Tier 1 to Tier 2 (Positive)
  { source: 'affinity_mapping', target: 'group_themes' },
  { source: 'affinity_mapping', target: 'label_clusters' },
  { source: 'pattern_recognition', target: 'quantify_patterns' },
  { source: 'pattern_recognition', target: 'compare_segments' },
  { source: 'prioritization', target: 'impact_matrix' },
  { source: 'prioritization', target: 'align_stakeholders' },
  { source: 'visualization', target: 'journey_maps' },
  { source: 'visualization', target: 'insight_dashboards' },
  { source: 'triangulation', target: 'cross_method' },
  { source: 'triangulation', target: 'team_review' },
  { source: 'bias_awareness', target: 'reflective_questions' },
  { source: 'bias_awareness', target: 'external_audit' },

  // Root to Positive Tier 1
  { source: 'root', target: 'affinity_mapping' },
  { source: 'root', target: 'pattern_recognition' },
  { source: 'root', target: 'prioritization' },
  { source: 'root', target: 'visualization' },
  { source: 'root', target: 'triangulation' },
  { source: 'root', target: 'bias_awareness' },

  // Root to Negative Tier 1
  { source: 'root', target: 'nodeNegative1_overgeneralizing' },
  { source: 'root', target: 'nodeNegative1_no_structure' },

  // Negative Tier 1 to Tier 2
  { source: 'nodeNegative1_overgeneralizing', target: 'nodeNegative2_missing_segments' },
  { source: 'nodeNegative1_overgeneralizing', target: 'nodeNegative2_quote_bias' },
  { source: 'nodeNegative1_no_structure', target: 'nodeNegative2_data_dumps' },
  { source: 'nodeNegative1_no_structure', target: 'nodeNegative2_rushed_analysis' }
];
