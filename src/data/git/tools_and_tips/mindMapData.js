import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Git Tools\n& Tips',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Helpful tools, commands, and habits to improve your Git workflow and productivity.',
  },

  // Level 1 Categories
  {
    id: 'cli_utilities',
    label: 'CLI\nUtilities',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Command-line Git tools that enhance visibility and speed up common tasks.',
  },
  {
    id: 'visual_clients',
    label: 'Visual\nClients',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Graphical Git interfaces that help visualize branches and conflicts.',
  },
  {
    id: 'gitignore_config',
    label: '.gitignore &\nConfig Tips',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Ignore unnecessary files and customize your Git experience globally or per-repo.',
  },
  {
    id: 'pitfall_alias_confusion',
    label: 'Pitfall:\nAlias Misuse\n or Forgetting',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Too many aliases or poorly documented shortcuts lead to errors and confusion.',
  },

  // CLI Utilities
  {
    id: 'git_log_graph',
    label: 'git log\n--oneline --graph',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Shows a condensed and visual representation of your commit history.',
  },
  {
    id: 'git_alias',
    label: 'Create Git\nAliases',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Set up custom short commands for frequent Git actions.',
  },

  // Visual Clients
  {
    id: 'vscode_git',
    label: 'VS Code\nGit Tools',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Source control integration, inline diffing, commit history — all from your editor.',
  },
  {
    id: 'sourcetree',
    label: 'Sourcetree\n& GitKraken',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Popular desktop Git clients for managing and visualizing repositories.',
  },

  // Gitignore & Config
  {
    id: 'gitignore_templates',
    label: 'Use Global &\nTemplate .gitignore',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Avoid clutter by ignoring node_modules, build artifacts, and OS/system files.',
  },
  {
    id: 'git_config_global',
    label: 'git config\n--global Tips',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Set name, email, default editor, merge tool, and helpful UI preferences.',
  },

  // Pitfall Detail
  {
    id: 'alias_conflicts',
    label: 'Conflicts with\nOther Shell Aliases',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Git aliases can override shell aliases or behave unexpectedly across environments.',
  },
]

export const links = [
  { source: 'root', target: 'cli_utilities' },
  { source: 'root', target: 'visual_clients' },
  { source: 'root', target: 'gitignore_config' },
  { source: 'root', target: 'pitfall_alias_confusion' },

  { source: 'cli_utilities', target: 'git_log_graph' },
  { source: 'cli_utilities', target: 'git_alias' },

  { source: 'visual_clients', target: 'vscode_git' },
  { source: 'visual_clients', target: 'sourcetree' },

  { source: 'gitignore_config', target: 'gitignore_templates' },
  { source: 'gitignore_config', target: 'git_config_global' },

  { source: 'pitfall_alias_confusion', target: 'alias_conflicts' },
]
