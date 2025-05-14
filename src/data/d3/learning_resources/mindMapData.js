import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'D3.js\nLearning Resources',
    shape: 'roundRect',
    color: 'root',
    definition: 'Key resources, platforms, and communities that support learning, practicing, and mastering D3.js.',
  },

  {
    id: 'official',
    label: 'Official Docs &\nExamples',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Primary documentation, API references, and official examples from the D3 creator.',
  },
  {
    id: 'd3_org',
    label: 'D3js.org API\nDocs',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'official',
    definition: 'Authoritative reference for all modules and methods, hosted at d3js.org.',
  },
  {
    id: 'observable',
    label: 'Observable D3\nGallery',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'official',
    definition: 'Official notebook-based platform showcasing interactive D3 examples and tutorials.',
  },

  {
    id: 'tutorials',
    label: 'Tutorials &\nBooks',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Step-by-step learning material from the D3 community, books, and online guides.',
  },
  {
    id: 'scott_murray',
    label: 'Scott Murray\nBook',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'tutorials',
    definition: '"Interactive Data Visualization for the Web" is a beginner-friendly, widely recommended D3 book.',
  },
  {
    id: 'd3_in_depth',
    label: 'D3 in Depth',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'tutorials',
    definition: 'Comprehensive online guide with deep explanations and examples of core D3 concepts.',
  },
  {
    id: 'udemy_courses',
    label: 'Udemy &\nVideo Courses',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'tutorials',
    definition: 'Paid courses like "Master D3.js" offer structured video-based learning experiences.',
  },

  {
    id: 'code_examples',
    label: 'Code Examples &\nTemplates',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Interactive example collections, galleries, and playgrounds.',
  },
  {
    id: 'd3_graph_gallery',
    label: 'D3 Graph\nGallery',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'code_examples',
    definition: 'Community site with hundreds of categorized D3 examples and live code links.',
  },
  {
    id: 'blocks_org',
    label: 'bl.ocks.org\nArchive',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'code_examples',
    definition: 'Legacy collection of D3 examples created by Mike Bostock and others.',
  },

  {
    id: 'community',
    label: 'Community &\nHelp Forums',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Online spaces for asking questions, troubleshooting, and sharing D3 projects.',
  },
  {
    id: 'stackoverflow',
    label: 'Stack Overflow\n(d3.js)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'community',
    definition: 'Thousands of D3-tagged questions and answers across versions and modules.',
  },
  {
    id: 'reddit',
    label: 'Reddit &\nGitter',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'community',
    definition: 'r/d3js and Gitter channels provide lightweight discussion and troubleshooting support.',
  },
];

export const links = [
  { source: 'root', target: 'official' },
  { source: 'official', target: 'd3_org' },
  { source: 'official', target: 'observable' },

  { source: 'root', target: 'tutorials' },
  { source: 'tutorials', target: 'scott_murray' },
  { source: 'tutorials', target: 'd3_in_depth' },
  { source: 'tutorials', target: 'udemy_courses' },

  { source: 'root', target: 'code_examples' },
  { source: 'code_examples', target: 'd3_graph_gallery' },
  { source: 'code_examples', target: 'blocks_org' },

  { source: 'root', target: 'community' },
  { source: 'community', target: 'stackoverflow' },
  { source: 'community', target: 'reddit' },
];
