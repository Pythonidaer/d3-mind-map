import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Digital Asset\nManagement (DAM)',
    shape: 'roundRect',
    color: 'root',
    definition: 'Systems and practices for organizing, storing, retrieving, and integrating digital assets like images, videos, and documents across a WordPress site or multisite network.',
  },

  // NodePositive1 - Core Concepts
  {
    id: 'dam_concepts',
    label: 'Core Concepts',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Understanding the fundamental goals, roles, and functions of DAM in the context of WordPress websites.',
  },
  {
    id: 'asset_types',
    label: 'Asset Types',
    parent: 'dam_concepts',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Common digital assets include images, videos, documents, logos, audio, and brand files used in content.',
  },
  {
    id: 'metadata_management',
    label: 'Metadata\nManagement',
    parent: 'dam_concepts',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'The practice of organizing assets using metadata like titles, tags, alt text, copyright, and usage rights.',
  },
  {
    id: 'version_control',
    label: 'Version\nControl',
    parent: 'dam_concepts',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Tracking and managing different versions of assets to avoid outdated or incorrect usage.',
  },

  // NodePositive1 - Integration
  {
    id: 'integration',
    label: 'WordPress\nIntegration',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'How DAM platforms or practices are integrated with the WordPress ecosystem to streamline asset usage.',
  },
  {
    id: 'media_library_enhancement',
    label: 'Media Library\nEnhancement',
    parent: 'integration',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Plugins or systems that improve the default WordPress media library with folders, filters, and tagging.',
  },
  {
    id: 'cloud_connectors',
    label: 'Cloud\nConnectors',
    parent: 'integration',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Connections to external DAMs like Bynder, Cloudinary, or Dropbox to access centralized media.',
  },
  {
    id: 'multisite_asset_sharing',
    label: 'Multisite Asset\nSharing',
    parent: 'integration',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Systems for sharing and syncing assets across multiple sites within a WordPress Multisite network.',
  },

  // NodePositive1 - Tools and Platforms
  {
    id: 'dam_tools',
    label: 'Tools &\nPlatforms',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Third-party digital asset managers and WordPress-compatible plugins that support centralized asset control.',
  },
  {
    id: 'bynder',
    label: 'Bynder',
    parent: 'dam_tools',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'A cloud-based DAM used by enterprises to manage brand assets, now integrated with WordPress via plugins and APIs.',
  },
  {
    id: 'cloudinary',
    label: 'Cloudinary',
    parent: 'dam_tools',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'A media platform offering storage, delivery, and on-the-fly transformation of images and videos, with WordPress plugins.',
  },
  {
    id: 'filebird',
    label: 'FileBird',
    parent: 'dam_tools',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'A plugin that adds folder-based organization to the WordPress media library for improved navigation and control.',
  },

  // NodeNegative1 - Anti-Patterns
  {
    id: 'anti_patterns',
    label: 'Anti-Patterns',
    parent: 'root',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Common mistakes and misconfigurations that cause inefficiencies or confusion in asset handling.',
  },
  {
    id: 'no_folder_structure',
    label: 'Flat Media\nLibrary',
    parent: 'anti_patterns',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Storing all files in a single directory with no folder hierarchy, making it hard to locate assets later.',
  },
  {
    id: 'missing_metadata',
    label: 'Missing\nMetadata',
    parent: 'anti_patterns',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Failing to provide alt text, descriptions, or keywords, reducing SEO and accessibility.',
  },
  {
    id: 'manual_duplicates',
    label: 'Manual\nDuplicates',
    parent: 'anti_patterns',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Uploading multiple copies of the same asset instead of referencing the original or using a centralized system.',
  }
]

export const links = [
  { source: 'root', target: 'dam_concepts' },
  { source: 'dam_concepts', target: 'asset_types' },
  { source: 'dam_concepts', target: 'metadata_management' },
  { source: 'dam_concepts', target: 'version_control' },

  { source: 'root', target: 'integration' },
  { source: 'integration', target: 'media_library_enhancement' },
  { source: 'integration', target: 'cloud_connectors' },
  { source: 'integration', target: 'multisite_asset_sharing' },

  { source: 'root', target: 'dam_tools' },
  { source: 'dam_tools', target: 'bynder' },
  { source: 'dam_tools', target: 'cloudinary' },
  { source: 'dam_tools', target: 'filebird' },

  { source: 'root', target: 'anti_patterns' },
  { source: 'anti_patterns', target: 'no_folder_structure' },
  { source: 'anti_patterns', target: 'missing_metadata' },
  { source: 'anti_patterns', target: 'manual_duplicates' }
]
