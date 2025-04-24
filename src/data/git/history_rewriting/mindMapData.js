import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Git History\nRewriting',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Changing commit history in Git for cleanup, reordering, or correction — powerful but potentially dangerous.',
  },

  // Level 1 Topics
  {
    id: 'amend_commits',
    label: 'Amend\nCommits',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Modify the most recent commit without creating a new one.',
  },
  {
    id: 'interactive_rebase',
    label: 'Interactive\nRebase',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Reorder, squash, or reword multiple previous commits.',
  },
  {
    id: 'reset_commands',
    label: 'Reset\nCommands',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Move the HEAD and branch pointer to a previous state.',
  },
  {
    id: 'force_push_risks',
    label: 'Pitfall:\nForce Push Risks',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      "Force pushing rewrites public history and can break teammates' local branches.",
  },

  // Level 2: Amend
  {
    id: 'git_commit_amend',
    label: 'git commit\n--amend',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Used to revise the last commit message or content.',
  },

  // Level 2: Rebase
  {
    id: 'git_rebase_i',
    label: 'git rebase\n-i HEAD~N',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Interactive rebase lets you squash, edit, reword, or drop commits.',
  },

  // Level 2: Reset
  {
    id: 'git_reset_soft',
    label: 'git reset\n--soft',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Moves HEAD to a previous commit but keeps changes staged.',
  },
  {
    id: 'git_reset_mixed',
    label: 'git reset\n--mixed',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Moves HEAD and unstages changes (default behavior).',
  },
  {
    id: 'git_reset_hard',
    label: 'git reset\n--hard',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Moves HEAD and deletes all changes — use with extreme caution.',
  },

  // Level 2: Pitfall Detail
  {
    id: 'force_push',
    label: 'git push\n--force',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Force-pushing rewritten history can cause divergence and data loss for others.',
  },
]

export const links = [
  { source: 'root', target: 'amend_commits' },
  { source: 'root', target: 'interactive_rebase' },
  { source: 'root', target: 'reset_commands' },
  { source: 'root', target: 'force_push_risks' },

  { source: 'amend_commits', target: 'git_commit_amend' },
  { source: 'interactive_rebase', target: 'git_rebase_i' },
  { source: 'reset_commands', target: 'git_reset_soft' },
  { source: 'reset_commands', target: 'git_reset_mixed' },
  { source: 'reset_commands', target: 'git_reset_hard' },
  { source: 'force_push_risks', target: 'force_push' },
]
