import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Rebase vs\nMerge in Git',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Understanding the difference between Git rebase and merge for integrating changes between branches.',
  },

  // Top-Level Comparison
  {
    id: 'what_is_merge',
    label: 'What is\nMerge?',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Merge combines two branches, preserving both histories and creating a new commit if necessary.',
  },
  {
    id: 'what_is_rebase',
    label: 'What is\nRebase?',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      "Rebase rewrites commit history by applying your branch's changes on top of another branch.",
  },
  {
    id: 'when_to_use',
    label: 'When to Use\nEach One',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Guidelines for choosing merge or rebase based on collaboration and history clarity.',
  },
  {
    id: 'rebase_on_shared_branch',
    label: 'Pitfall:\nRebase on \nShared Branch',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Rebasing commits that others rely on can break history and create duplication.',
  },

  // Merge Details
  {
    id: 'merge_commit',
    label: 'Merge Commit',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'A new commit created when combining divergent branches.',
  },
  {
    id: 'fast_forward',
    label: 'Fast-Forward\nMerge',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'No new commit needed — simply moves branch pointer forward.',
  },

  // Rebase Details
  {
    id: 'reapplied_commits',
    label: 'Reapplied\nCommits',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Commits are reapplied one by one atop the target branch.',
  },
  {
    id: 'linear_history',
    label: 'Linear\nHistory',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Rebase creates a flat, easy-to-read project history.',
  },

  // Decision Guidelines
  {
    id: 'merge_for_shared',
    label: 'Merge for\nShared Branches',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Use merge when integrating shared branches to avoid rewriting history.',
  },
  {
    id: 'rebase_for_cleanup',
    label: 'Rebase for\nLocal Cleanup',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Use rebase before pushing to clean up your local commit history.',
  },

  // Pitfall Detail
  {
    id: 'rebase_causes_duplication',
    label: 'Causes Duplicate\nCommits for Others',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'After rebasing and force-pushing, teammates may see commit duplication and conflicts.',
  },
]

export const links = [
  { source: 'root', target: 'what_is_merge' },
  { source: 'root', target: 'what_is_rebase' },
  { source: 'root', target: 'when_to_use' },
  { source: 'root', target: 'rebase_on_shared_branch' },

  { source: 'what_is_merge', target: 'merge_commit' },
  { source: 'what_is_merge', target: 'fast_forward' },

  { source: 'what_is_rebase', target: 'reapplied_commits' },
  { source: 'what_is_rebase', target: 'linear_history' },

  { source: 'when_to_use', target: 'merge_for_shared' },
  { source: 'when_to_use', target: 'rebase_for_cleanup' },

  { source: 'rebase_on_shared_branch', target: 'rebase_causes_duplication' },
]
