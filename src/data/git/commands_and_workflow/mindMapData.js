import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Git Commands & Workflow',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Core Git commands and daily developer workflows for using Git effectively.',
  },

  // --- Basic Setup ---
  {
    id: 'init_clone',
    label: 'Initialize / \nClone Repository',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'How to create a Git repository from scratch or clone an existing one from a remote.',
  },
  {
    id: 'add_commit',
    label: 'Add / \nCommit Changes',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Commands to track files and record changes into the Git history.',
  },
  {
    id: 'status_log_diff',
    label: 'Status / \nLog / Diff',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Inspect repository state, view commit history, and see changes between commits or working files.',
  },
  {
    id: 'push_pull_fetch',
    label: 'Push / \nPull / Fetch',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Commands for synchronizing your local repository with remotes such as GitHub or GitLab.',
  },

  // --- Second-level Nodes ---
  {
    id: 'git_init',
    label: 'git init',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Creates a new Git repository in the current directory.',
  },
  {
    id: 'git_clone',
    label: 'git clone',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Clones an existing Git repository from a remote location.',
  },
  {
    id: 'git_add',
    label: 'git add',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Stages files to be included in the next commit.',
  },
  {
    id: 'git_commit',
    label: 'git commit',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Records staged changes as a new commit.',
  },
  {
    id: 'git_status',
    label: 'git status',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Displays the state of the working directory and staging area.',
  },
  {
    id: 'git_log',
    label: 'git log',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Shows the commit history.',
  },
  {
    id: 'git_diff',
    label: 'git diff',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Displays changes between commits, commit and working tree, etc.',
  },
  {
    id: 'git_push',
    label: 'git push',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Uploads local commits to a remote repository.',
  },
  {
    id: 'git_pull',
    label: 'git pull',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Downloads and merges changes from a remote branch.',
  },
  {
    id: 'git_fetch',
    label: 'git fetch',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Downloads changes from a remote but does not merge.',
  },
]

export const links = [
  { source: 'root', target: 'init_clone' },
  { source: 'root', target: 'add_commit' },
  { source: 'root', target: 'status_log_diff' },
  { source: 'root', target: 'push_pull_fetch' },

  { source: 'init_clone', target: 'git_init' },
  { source: 'init_clone', target: 'git_clone' },

  { source: 'add_commit', target: 'git_add' },
  { source: 'add_commit', target: 'git_commit' },

  { source: 'status_log_diff', target: 'git_status' },
  { source: 'status_log_diff', target: 'git_log' },
  { source: 'status_log_diff', target: 'git_diff' },

  { source: 'push_pull_fetch', target: 'git_push' },
  { source: 'push_pull_fetch', target: 'git_pull' },
  { source: 'push_pull_fetch', target: 'git_fetch' },
]
