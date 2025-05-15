import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'WordPress\nCore History',
    shape: 'roundRect',
    color: 'root',
    definition: 'A timeline of major WordPress core version releases, showcasing key features, turning points, and future roadmap.',
  },

  {
    id: 'early_versions',
    label: 'Early\nVersions',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'The foundational releases that established WordPress as a blogging tool, from v0.7 to v2.x.',
  },
  {
    id: 'version_1_0',
    label: 'v1.0\n(Davis, 2004)',
    parent: 'early_versions',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Introduced permalinks, multiple categories, comment moderation, plugin support.',
  },
  {
    id: 'version_1_5',
    label: 'v1.5\n(Strayhorn, 2005)',
    parent: 'early_versions',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Brought Pages and the Theme system, broadening WordPress beyond blogging.',
  },
  {
    id: 'version_2_0',
    label: 'v2.0\n(Duke, 2005)',
    parent: 'early_versions',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Overhauled admin UI with AJAX, added image upload and Akismet.',
  },

  {
    id: 'cms_shift',
    label: 'Becoming a\nFull CMS',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'The transition from blogging platform to full content management system, led by custom content types and multisite.',
  },
  {
    id: 'version_3_0',
    label: 'v3.0\n(Thelonious, 2010)',
    parent: 'cms_shift',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Merged WordPress MU; introduced Custom Post Types, Taxonomies, and Menu Editor.',
  },

  {
    id: 'modern_editor',
    label: 'Modern\nEditor Era',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'The shift to block-based content creation with Gutenberg and Full Site Editing (FSE).',
  },
  {
    id: 'version_5_0',
    label: 'v5.0\n(Bebo, 2018)',
    parent: 'modern_editor',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Introduced Gutenberg block editor, replacing classic TinyMCE.',
  },
  {
    id: 'version_6_2',
    label: 'v6.2\n(Shirley, 2023)',
    parent: 'modern_editor',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'FSE exited beta, adding global style and template editing across themes.',
  },
  {
    id: 'version_6_8',
    label: 'v6.8\n(Cecil, 2025)',
    parent: 'modern_editor',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Adds bcrypt, editor polish, speculative loading, Style Book enhancements.',
  },

  {
    id: 'future_roadmap',
    label: 'Future\nReleases',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'The upcoming versions of WordPress that emphasize AI, speed, and annual release cycles.',
  },
  {
    id: 'version_7_0',
    label: 'v7.0+\n(TBA)',
    parent: 'future_roadmap',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Planned for 2027+, expected to include deeper AI integration, UX improvements, and editor refinements.',
  },
]

export const links = [
  { source: 'root', target: 'early_versions' },
  { source: 'early_versions', target: 'version_1_0' },
  { source: 'early_versions', target: 'version_1_5' },
  { source: 'early_versions', target: 'version_2_0' },

  { source: 'root', target: 'cms_shift' },
  { source: 'cms_shift', target: 'version_3_0' },

  { source: 'root', target: 'modern_editor' },
  { source: 'modern_editor', target: 'version_5_0' },
  { source: 'modern_editor', target: 'version_6_2' },
  { source: 'modern_editor', target: 'version_6_8' },

  { source: 'root', target: 'future_roadmap' },
  { source: 'future_roadmap', target: 'version_7_0' },
]
