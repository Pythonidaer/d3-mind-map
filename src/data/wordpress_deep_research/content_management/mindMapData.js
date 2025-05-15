import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Content\nManagement',
    shape: 'roundRect',
    color: 'root',
    definition: 'Organizing, structuring, and managing all content types in WordPress including pages, posts, media, metadata, and taxonomies.',
  },

  // Positive Level 1
  {
    id: 'content_types',
    label: 'Content Types',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Different types of content in WordPress, including built-in and custom-defined post types.',
  },
  {
    id: 'taxonomy_organization',
    label: 'Tags &\nCategories',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Hierarchical and non-hierarchical systems to group and relate content within WordPress.',
  },
  {
    id: 'media_management',
    label: 'Media\nManagement',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Tools and workflows for uploading, organizing, and embedding media in WordPress.',
  },
  {
    id: 'user_permissions',
    label: 'User Roles &\nPermissions',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Defines what actions users can perform based on their assigned roles in WordPress.',
  },

  // Positive Level 2: Content Types
  {
    id: 'pages_vs_posts',
    label: 'Pages vs.\nPosts',
    parent: 'content_types',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Pages are for static, timeless content; posts are for blog-style, time-based entries.',
  },
  {
    id: 'custom_post_types',
    label: 'Custom Post\nTypes (CPT)',
    parent: 'content_types',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'User-defined content types, such as products, events, or reviews, to suit specific site needs.',
  },

  // Positive Level 2: Tags & Categories
  {
    id: 'categories',
    label: 'Categories\n(Hierarchical)',
    parent: 'taxonomy_organization',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Broad classification for posts; allows parent-child relationships.',
  },
  {
    id: 'tags',
    label: 'Tags\n(Flat)',
    parent: 'taxonomy_organization',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Non-hierarchical keywords that describe specific aspects of posts.',
  },

  // Positive Level 2: Media Management
  {
    id: 'media_library',
    label: 'Media Library',
    parent: 'media_management',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Central interface for uploading, browsing, and organizing images, videos, audio, and documents.',
  },
  {
    id: 'media_access',
    label: 'Upload\nPermissions',
    parent: 'media_management',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Controlled via user roles; not all users can upload or manage media.',
  },

  // Positive Level 2: User Permissions
  {
    id: 'default_roles',
    label: 'Default\nRoles',
    parent: 'user_permissions',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Roles like Administrator, Editor, Author, Contributor, Subscriber each with preset permissions.',
  },
  {
    id: 'custom_roles',
    label: 'Custom Roles &\nCapabilities',
    parent: 'user_permissions',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Developers can define granular permission sets beyond default roles.',
  },

  // Negative: Cons
  {
    id: 'cons',
    label: 'Cons',
    parent: 'root',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Challenges or drawbacks associated with managing content in WordPress.',
  },
  {
    id: 'inconsistent_structure',
    label: 'Inconsistent\nStructure',
    parent: 'cons',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Mixing pages, posts, and CPTs without a content model can lead to confusion and inefficiency.',
  },
  {
    id: 'media_clutter',
    label: 'Media\nClutter',
    parent: 'cons',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Large volumes of unorganized media can slow site performance and hinder content reuse.',
  },
  {
    id: 'role_limitations',
    label: 'Role\nLimitations',
    parent: 'cons',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Default WordPress roles may not provide fine-grained access control without plugins or custom logic.',
  },
]

export const links = [
  { source: 'root', target: 'content_types' },
  { source: 'root', target: 'taxonomy_organization' },
  { source: 'root', target: 'media_management' },
  { source: 'root', target: 'user_permissions' },
  { source: 'root', target: 'cons' },

  { source: 'content_types', target: 'pages_vs_posts' },
  { source: 'content_types', target: 'custom_post_types' },

  { source: 'taxonomy_organization', target: 'categories' },
  { source: 'taxonomy_organization', target: 'tags' },

  { source: 'media_management', target: 'media_library' },
  { source: 'media_management', target: 'media_access' },

  { source: 'user_permissions', target: 'default_roles' },
  { source: 'user_permissions', target: 'custom_roles' },

  { source: 'cons', target: 'inconsistent_structure' },
  { source: 'cons', target: 'media_clutter' },
  { source: 'cons', target: 'role_limitations' },
]
