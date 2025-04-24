import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Git Collaboration\nWorkflows',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Best practices and structured approaches for working with Git in collaborative team environments.',
  },

  // Level 1 Workflows
  {
    id: 'centralized_workflow',
    label: 'Centralized\nWorkflow',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'A single central repository where all developers push and pull from main.',
  },
  {
    id: 'feature_branching',
    label: 'Feature\nBranching',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Each feature or fix is developed in a separate branch and merged after review.',
  },
  {
    id: 'forking_workflow',
    label: 'Forking\nWorkflow',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Developers fork a central repo and contribute via pull requests from their own forks.',
  },
  {
    id: 'pitfall_lack_standards',
    label: 'Pitfall:\nNo Workflow Standard',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Without a defined process, teams face merge chaos and miscommunication.',
  },

  // Centralized Details
  {
    id: 'push_to_main',
    label: 'Push\nDirectly to Main',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Simple, but risky — all developers update main directly, requiring trust and discipline.',
  },

  // Feature Branching Details
  {
    id: 'merge_requests',
    label: 'Pull/Merge\nRequests',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Formal proposals for merging branches after review and tests.',
  },
  {
    id: 'branch_naming',
    label: 'Branch\nNaming Conventions',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Standardized prefixes like feature/, fix/, or chore/ improve team clarity.',
  },

  // Forking Workflow Details
  {
    id: 'remote_upstream',
    label: 'Add Remote\nUpstream',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Forks must track the central repo with an upstream remote to stay updated.',
  },
  {
    id: 'sync_fork',
    label: 'Sync Fork\nwith Upstream',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Periodically pull changes from upstream to keep your fork current.',
  },

  // Pitfall Detail
  {
    id: 'merge_disorder',
    label: 'Inconsistent\nMerges & Breakages',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Without a shared model, inconsistent merges lead to code breakages and poor visibility.',
  },
]

export const links = [
  { source: 'root', target: 'centralized_workflow' },
  { source: 'root', target: 'feature_branching' },
  { source: 'root', target: 'forking_workflow' },
  { source: 'root', target: 'pitfall_lack_standards' },

  { source: 'centralized_workflow', target: 'push_to_main' },

  { source: 'feature_branching', target: 'merge_requests' },
  { source: 'feature_branching', target: 'branch_naming' },

  { source: 'forking_workflow', target: 'remote_upstream' },
  { source: 'forking_workflow', target: 'sync_fork' },

  { source: 'pitfall_lack_standards', target: 'merge_disorder' },
]
