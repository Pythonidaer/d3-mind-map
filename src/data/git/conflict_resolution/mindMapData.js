import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Conflict\nResolution in Git',
    shape: 'roundRect',
    color: 'root',
    definition:
      'How to identify, resolve, and prevent merge conflicts in Git workflows.',
  },

  // Top-Level Areas
  {
    id: 'understanding_conflicts',
    label: 'Understanding\nConflicts',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'What causes conflicts in Git and how to recognize them during merges or rebases.',
  },
  {
    id: 'resolving_conflicts',
    label: 'Resolving\nConflicts',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Techniques and tools for resolving conflicts when they occur.',
  },
  {
    id: 'preventing_conflicts',
    label: 'Preventing\nConflicts',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Strategies and best practices to avoid conflicts in collaborative development.',
  },

  // Conflict Details
  {
    id: 'conflict_markers',
    label: 'Conflict\nMarkers',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Git marks conflicts with <<<<<<<, =======, >>>>>>> when it cannot auto-merge.',
  },
  {
    id: 'overlapping_edits',
    label: 'Overlapping\nEdits',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Occurs when two branches change the same lines of a file differently.',
  },

  // Conflict Resolution Tools
  {
    id: 'manual_resolution',
    label: 'Manual\nResolution',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Edit the conflicted files directly to remove markers and finalize changes.',
  },
  {
    id: 'merge_tools',
    label: 'Merge\nTools',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'GUI tools (VS Code, Meld, kdiff3) help visualize and resolve conflicts more easily.',
  },
  {
    id: 'git_add_commit',
    label: 'git add &\nCommit to Finalize',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Once resolved, stage the fixed files and commit to conclude the merge.',
  },

  // Prevention Strategies
  {
    id: 'communicate_changes',
    label: 'Communicate\nChanges Early',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Coordinate changes with teammates to avoid editing the same areas concurrently.',
  },
  {
    id: 'pull_often',
    label: 'Pull & Merge\nFrequently',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Keep your branch up to date with main to reduce divergence.',
  },
  {
    id: 'small_commits',
    label: 'Make Small,\nAtomic Commits',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Smaller commits and PRs are easier to merge and less likely to conflict.',
  },

  // Pitfall
  {
    id: 'commit_with_markers',
    label: 'Pitfall:\nCommit with\n Markers',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Accidentally committing unresolved conflict markers breaks the code.',
  },
  {
    id: 'missed_conflict',
    label: 'Unnoticed\nConflict Region',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Missed markers or improperly resolved conflicts lead to logic errors or runtime bugs.',
  },
]

export const links = [
  { source: 'root', target: 'understanding_conflicts' },
  { source: 'root', target: 'resolving_conflicts' },
  { source: 'root', target: 'preventing_conflicts' },
  { source: 'root', target: 'commit_with_markers' },

  { source: 'understanding_conflicts', target: 'conflict_markers' },
  { source: 'understanding_conflicts', target: 'overlapping_edits' },

  { source: 'resolving_conflicts', target: 'manual_resolution' },
  { source: 'resolving_conflicts', target: 'merge_tools' },
  { source: 'resolving_conflicts', target: 'git_add_commit' },

  { source: 'preventing_conflicts', target: 'communicate_changes' },
  { source: 'preventing_conflicts', target: 'pull_often' },
  { source: 'preventing_conflicts', target: 'small_commits' },

  { source: 'commit_with_markers', target: 'missed_conflict' },
]
