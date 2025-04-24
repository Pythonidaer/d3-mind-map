import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Branching &\nMerging in Git',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Techniques for isolating work and integrating changes in Git using branches and merge strategies.',
  },

  // Level 1 Branches
  {
    id: 'creating_switching',
    label: 'Creating &\nSwitching Branches',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'How to create new branches and move between them during development.',
  },
  {
    id: 'merging_changes',
    label: 'Merging\nBranches',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Combining work from different branches using Git merge operations.',
  },
  {
    id: 'branch_cleanup',
    label: 'Cleaning Up\nBranches',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Deleting and organizing branches after merges to maintain a clean project history.',
  },
  {
    id: 'pitfall_wrong_branch',
    label: 'Pitfall:\nWrong Branch Work',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Accidentally committing work on the wrong branch, such as `main`, without realizing it.',
  },

  // Level 2 Nodes
  {
    id: 'git_branch',
    label: 'git branch',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Lists, creates, or deletes branches.',
  },
  {
    id: 'git_switch',
    label: 'git switch',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Switches between branches or creates and switches in one command with -c.',
  },
  {
    id: 'git_checkout',
    label: 'git checkout',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Legacy way to switch branches or checkout commits/files.',
  },
  {
    id: 'git_merge',
    label: 'git merge',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Merges changes from one branch into another, possibly creating a merge commit.',
  },
  {
    id: 'fast_forward_merge',
    label: 'Fast-Forward\nMerge',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'When the current branch is directly updated without a new commit because no divergence exists.',
  },
  {
    id: 'git_branch_d',
    label: 'git branch -d',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Deletes a fully merged local branch.',
  },

  // Pitfall Fix Node
  {
    id: 'fix_wrong_branch',
    label: 'Fix with\nbranch + reset',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Create new branch from current commit, then reset main to prior state.',
  },
]

export const links = [
  { source: 'root', target: 'creating_switching' },
  { source: 'root', target: 'merging_changes' },
  { source: 'root', target: 'branch_cleanup' },
  { source: 'root', target: 'pitfall_wrong_branch' },

  { source: 'creating_switching', target: 'git_branch' },
  { source: 'creating_switching', target: 'git_switch' },
  { source: 'creating_switching', target: 'git_checkout' },

  { source: 'merging_changes', target: 'git_merge' },
  { source: 'merging_changes', target: 'fast_forward_merge' },

  { source: 'branch_cleanup', target: 'git_branch_d' },

  { source: 'pitfall_wrong_branch', target: 'fix_wrong_branch' },
]
