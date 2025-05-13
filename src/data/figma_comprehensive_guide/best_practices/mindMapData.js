import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Best Practices\nfor Developers\nUsing Figma',
    shape: 'roundRect',
    color: 'root',
    definition: 'Guidelines and workflows to maximize efficiency, consistency, and collaboration in Figma.',
  },

  // Positive Level 1
  {
    id: 'early_communication',
    label: 'Early & Frequent\nCommunication',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Maintain continuous dialogue with designers to clarify requirements and resolve issues promptly.',
  },
  {
    id: 'accurate_implementation',
    label: 'Accurate\nImplementation\nVerification',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Use Dev Mode and Inspect tools to ensure code matches design specs exactly.',
  },
  {
    id: 'file_organization',
    label: 'File Organization\n& Naming',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Keep pages, frames, and layers well-structured and named for discoverability and handoff clarity.',
  },
  {
    id: 'library_maintenance',
    label: 'Library\nMaintenance',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Regularly update and prune component and style libraries to prevent drift and bloat.',
  },
  {
    id: 'continuous_learning',
    label: 'Continuous\nFigma Learning',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Stay current with Figma updates, community plugins, and best practices to evolve workflows.',
  },

  // Positive Level 2 elaborations
  // Early & Frequent Communication children
  {
    id: 'early_schedule_feedback',
    label: 'Schedule\nFeedback\nSessions',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'early_communication',
    definition: 'Block regular check-ins with designers to review screens and interactions.',
  },
  {
    id: 'early_comments_mentions',
    label: 'Use Comments\n& @Mentions',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'early_communication',
    definition: 'Anchor feedback directly in Figma and tag team members for swift responses.',
  },
  {
    id: 'early_sync_meetings',
    label: 'Sync\nDesign-System\nMeetings',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'early_communication',
    definition: 'Hold periodic meetings to align on component updates and style guidelines.',
  },

  // Accurate Implementation Verification children
  {
    id: 'accurate_check_constraints',
    label: 'Check\nConstraints',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'accurate_implementation',
    definition: 'Inspect pinning and scaling rules to implement responsive layouts correctly.',
  },
  {
    id: 'accurate_validate_measurements',
    label: 'Validate\nMeasurements',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'accurate_implementation',
    definition: 'Use pixel and rem toggles in Dev Mode to copy precise spacing and sizing.',
  },
  {
    id: 'accurate_style_crosscheck',
    label: 'Cross-check\nStyles & Variables',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'accurate_implementation',
    definition: 'Ensure you reference shared Styles or Variables rather than hardcoding values.',
  },

  // File Organization & Naming children
  {
    id: 'file_hierarchy',
    label: 'Logical\nPage & Frame\nHierarchy',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'file_organization',
    definition: 'Group related screens under pages, and use sections to denote dev-ready areas.',
  },
  {
    id: 'file_descriptive_layers',
    label: 'Descriptive\nLayer Names',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'file_organization',
    definition: 'Use consistent naming conventions (e.g., “Button/Primary/Default”) for clarity.',
  },
  {
    id: 'file_use_sections',
    label: 'Use\nSections',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'file_organization',
    definition: 'Mark and collapse in-progress work to focus developers on finalized designs.',
  },

  // Library Maintenance children
  {
    id: 'library_governance',
    label: 'Governance\nProcesses',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'library_maintenance',
    definition: 'Define ownership and review cycles for component and style updates.',
  },
  {
    id: 'library_archive',
    label: 'Archive\nOutdated\nComponents',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'library_maintenance',
    definition: 'Remove or deprecate unused assets to keep libraries lean and discoverable.',
  },
  {
    id: 'library_versioning',
    label: 'Version\nYour\nLibraries',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'library_maintenance',
    definition: 'Publish named versions when making breaking changes to maintain stability.',
  },

  // Continuous Learning children
  {
    id: 'learning_release_notes',
    label: 'Follow\nRelease Notes',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'continuous_learning',
    definition: 'Review new Figma features and APIs to adopt improvements quickly.',
  },
  {
    id: 'learning_community_resources',
    label: 'Explore\nCommunity\nResources',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'continuous_learning',
    definition: 'Leverage community plugins, tutorials, and templates shared by Figma users.',
  },
  {
    id: 'learning_share_tips',
    label: 'Share\nTips & Tricks',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'continuous_learning',
    definition: 'Document and teach effective workflows within your team to raise proficiency.',
  },

  // Negative Level 1 (Anti-Patterns)
  {
    id: 'ignoring_dev_mode',
    label: 'Ignoring\nDev Mode',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Skipping the Inspect panel leads to approximate implementations and errors.',
  },
  {
    id: 'skipping_org',
    label: 'Skipping\nFile Org',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Unstructured files cause confusion, lost assets, and longer ramp-up times.',
  },
  {
    id: 'not_maintaining_libraries',
    label: 'Not Maintaining\nLibraries',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Outdated or bloated libraries lead to inconsistent designs and performance issues.',
  },
  {
    id: 'overlooking_communication',
    label: 'Overlooking\nCommunication',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Delayed feedback cycles result in misaligned expectations and rework.',
  },
  {
    id: 'outdated_skills',
    label: 'Not Updating\nSkills',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Failing to learn new Figma features or workflows impedes productivity.',
  },

  // Negative Level 2 elaborations
  {
    id: 'dev_missing_measurements',
    label: 'Missing\nMeasurements',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'ignoring_dev_mode',
    definition: 'Manually guessing pixel values leads to alignment and spacing bugs.',
  },
  {
    id: 'dev_incorrect_mapping',
    label: 'Incorrect\nCode Mapping',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'ignoring_dev_mode',
    definition: 'Overlooking unit toggles causes inconsistent rem/px usage in CSS.',
  },

  {
    id: 'org_unreadable_canvas',
    label: 'Unreadable\nCanvas',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'skipping_org',
    definition: 'Cluttered screens make it hard to find relevant frames and layers.',
  },
  {
    id: 'org_lost_assets',
    label: 'Lost\nAssets',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'skipping_org',
    definition: 'Orphaned elements get overlooked and never implemented.',
  },

  {
    id: 'library_outdated_components',
    label: 'Outdated\nComponents',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'not_maintaining_libraries',
    definition: 'Deprecated designs linger, causing confusion and duplication.',
  },
  {
    id: 'library_inconsistency',
    label: 'Inconsistent\nDesign',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'not_maintaining_libraries',
    definition: 'Multiple versions of similar components erode design integrity.',
  },

  {
    id: 'comm_slow_feedback',
    label: 'Slow\nFeedback\nCycles',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'overlooking_communication',
    definition: 'Waiting days for responses stalls development and frustrates teams.',
  },
  {
    id: 'comm_misunderstand_reqs',
    label: 'Misunderstood\nRequirements',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'overlooking_communication',
    definition: 'Incomplete context leads to incorrect feature implementations.',
  },

  {
    id: 'skill_missing_features',
    label: 'Missing\nNew Features',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'outdated_skills',
    definition: 'Not using the latest tools or shortcuts slows down workflows.',
  },
  {
    id: 'skill_inefficient_workflows',
    label: 'Inefficient\nWorkflows',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'outdated_skills',
    definition: 'Relying on manual steps where new Figma capabilities could automate work.',
  }
];

export const links = [
  // Root → Positive Level 1
  { source: 'root', target: 'early_communication' },
  { source: 'root', target: 'accurate_implementation' },
  { source: 'root', target: 'file_organization' },
  { source: 'root', target: 'library_maintenance' },
  { source: 'root', target: 'continuous_learning' },

  // Positive Level 1 → Level 2 elaborations
  { source: 'early_communication', target: 'early_schedule_feedback' },
  { source: 'early_communication', target: 'early_comments_mentions' },
  { source: 'early_communication', target: 'early_sync_meetings' },

  { source: 'accurate_implementation', target: 'accurate_check_constraints' },
  { source: 'accurate_implementation', target: 'accurate_validate_measurements' },
  { source: 'accurate_implementation', target: 'accurate_style_crosscheck' },

  { source: 'file_organization', target: 'file_hierarchy' },
  { source: 'file_organization', target: 'file_descriptive_layers' },
  { source: 'file_organization', target: 'file_use_sections' },

  { source: 'library_maintenance', target: 'library_governance' },
  { source: 'library_maintenance', target: 'library_archive' },
  { source: 'library_maintenance', target: 'library_versioning' },

  { source: 'continuous_learning', target: 'learning_release_notes' },
  { source: 'continuous_learning', target: 'learning_community_resources' },
  { source: 'continuous_learning', target: 'learning_share_tips' },

  // Root → Negative Level 1
  { source: 'root', target: 'ignoring_dev_mode' },
  { source: 'root', target: 'skipping_org' },
  { source: 'root', target: 'not_maintaining_libraries' },
  { source: 'root', target: 'overlooking_communication' },
  { source: 'root', target: 'outdated_skills' },

  // Negative Level 1 → Level 2 elaborations
  { source: 'ignoring_dev_mode', target: 'dev_missing_measurements' },
  { source: 'ignoring_dev_mode', target: 'dev_incorrect_mapping' },

  { source: 'skipping_org', target: 'org_unreadable_canvas' },
  { source: 'skipping_org', target: 'org_lost_assets' },

  { source: 'not_maintaining_libraries', target: 'library_outdated_components' },
  { source: 'not_maintaining_libraries', target: 'library_inconsistency' },

  { source: 'overlooking_communication', target: 'comm_slow_feedback' },
  { source: 'overlooking_communication', target: 'comm_misunderstand_reqs' },

  { source: 'outdated_skills', target: 'skill_missing_features' },
  { source: 'outdated_skills', target: 'skill_inefficient_workflows' }
];
