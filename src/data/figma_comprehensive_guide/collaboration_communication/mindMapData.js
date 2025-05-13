import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Collaboration &\nCommunication',
    shape: 'roundRect',
    color: 'root',
    definition: 'Figma’s features for team collaboration, feedback, and version control.',
  },

  // Positive Level 1
  {
    id: 'real_time_editing',
    label: 'Real-time\nEditing',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Multiple users can work simultaneously in the same file, seeing live updates.',
  },
  {
    id: 'commenting_annotations',
    label: 'Commenting\n& Annotations',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Leave contextual feedback anchored to specific points or layers in the design.',
  },
  {
    id: 'version_history',
    label: 'Version\nHistory',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Automatic and manual checkpoints allow tracking and reverting changes over time.',
  },

  // Positive Level 2 elaborations
  // Real-time Editing children
  {
    id: 'named_cursors',
    label: 'Named\nCursors',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'real_time_editing',
    definition: 'See who is working where, with each collaborator’s cursor labeled by name.',
  },
  {
    id: 'audio_chat',
    label: 'Audio\nChat',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'real_time_editing',
    definition: 'Use built-in voice chat for synchronous discussion without leaving the file.',
  },

  // Commenting & Annotations children
  {
    id: 'anchored_comments',
    label: 'Anchored\nComments',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'commenting_annotations',
    definition: 'Attach feedback directly to layers or regions, preserving context.',
  },
  {
    id: 'mentions_notifications',
    label: '@Mentions\n& Notifications',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'commenting_annotations',
    definition: 'Notify specific teammates by tagging them in comments for faster responses.',
  },

  // Version History children
  {
    id: 'auto_save_checkpoints',
    label: 'Auto-Save\nCheckpoints',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'version_history',
    definition: 'Figma saves file states every 30 minutes, capturing incremental changes.',
  },
  {
    id: 'named_versions',
    label: 'Named\nVersions',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'version_history',
    definition: 'Manually label key milestones for easy reference and rollback.',
  },
  {
    id: 'compare_changes',
    label: 'Compare\nChanges',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'version_history',
    definition: 'Visually diff two versions to see added, removed, or modified layers.',
  },

  // Negative Level 1
  {
    id: 'ignoring_real_time',
    label: 'Ignoring\nReal-time',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Not leveraging live collaboration, leading to siloed work and delays.',
  },
  {
    id: 'skipping_comments',
    label: 'Skipping\nComments',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Failing to use comments, resulting in unclear feedback and repeated misunderstandings.',
  },
  {
    id: 'omitting_versions',
    label: 'Omitting\nVersions',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Neglecting version history, risking loss of work and inability to revert to stable states.',
  },

  // Negative Level 2 elaborations
  // Ignoring Real-time children
  {
    id: 'missing_collaboration_insight',
    label: 'Missing\nInsights',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'ignoring_real_time',
    definition: 'Without real-time editing, you lose visibility into teammates’ progress and intent.',
  },
  {
    id: 'slow_review_cycles',
    label: 'Slow\nReview Cycles',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'ignoring_real_time',
    definition: 'Waiting for asynchronous updates increases turnaround time for design approvals.',
  },

  // Skipping Comments children
  {
    id: 'confusing_feedback',
    label: 'Confusing\nFeedback',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'skipping_comments',
    definition: 'General or misplaced feedback causes ambiguity and implementation errors.',
  },
  {
    id: 'missed_context',
    label: 'Missed\nContext',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'skipping_comments',
    definition: 'Lack of anchored comments means developers miss the rationale behind design decisions.',
  },

  // Omitting Versions children
  {
    id: 'lost_edits',
    label: 'Lost\nEdits',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'omitting_versions',
    definition: 'Work can be accidentally overwritten with no way to recover earlier states.',
  },
  {
    id: 'revert_struggle',
    label: 'Revert\nStruggle',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'omitting_versions',
    definition: 'Without named versions, finding a stable baseline to roll back to is difficult.',
  }
];

export const links = [
  // Root → Positive Level 1
  { source: 'root', target: 'real_time_editing' },
  { source: 'root', target: 'commenting_annotations' },
  { source: 'root', target: 'version_history' },

  // Positive Level 1 → Level 2 elaborations
  { source: 'real_time_editing', target: 'named_cursors' },
  { source: 'real_time_editing', target: 'audio_chat' },
  { source: 'commenting_annotations', target: 'anchored_comments' },
  { source: 'commenting_annotations', target: 'mentions_notifications' },
  { source: 'version_history', target: 'auto_save_checkpoints' },
  { source: 'version_history', target: 'named_versions' },
  { source: 'version_history', target: 'compare_changes' },

  // Root → Negative Level 1
  { source: 'root', target: 'ignoring_real_time' },
  { source: 'root', target: 'skipping_comments' },
  { source: 'root', target: 'omitting_versions' },

  // Negative Level 1 → Level 2 elaborations
  { source: 'ignoring_real_time', target: 'missing_collaboration_insight' },
  { source: 'ignoring_real_time', target: 'slow_review_cycles' },
  { source: 'skipping_comments', target: 'confusing_feedback' },
  { source: 'skipping_comments', target: 'missed_context' },
  { source: 'omitting_versions', target: 'lost_edits' },
  { source: 'omitting_versions', target: 'revert_struggle' }
];
