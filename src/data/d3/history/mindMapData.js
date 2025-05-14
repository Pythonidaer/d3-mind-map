import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'D3.js\nHistory & Origins',
    shape: 'roundRect',
    color: 'root',
    definition: 'The historical background, motivations, and evolution of D3.js from its academic roots to widespread adoption.',
  },

  {
    id: 'founders',
    label: 'Founders',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'D3.js was created by Mike Bostock, with key contributions from Jason Davies, Jeffrey Heer, and Vadim Ogievetsky.',
  },
  {
    id: 'stanford_origin',
    label: 'Stanford\nUniversity Roots',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'founders',
    definition: 'The creators were affiliated with Stanford’s Visualization Group, known for research in interactive graphics.',
  },

  {
    id: 'protovis',
    label: 'Predecessor:\nProtovis',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'D3 evolved from Protovis, a declarative JavaScript visualization library that prioritized simplicity over flexibility.',
  },
  {
    id: 'protovis_limitations',
    label: 'Protovis\nLimitations',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'protovis',
    definition: 'Protovis lacked dynamic interactivity and required proprietary intermediate structures, limiting flexibility.',
  },

  {
    id: 'd3_creation',
    label: 'Birth of D3.js',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'D3 was released in 2011 to leverage modern web standards and offer better control, performance, and modularity.',
  },
  {
    id: 'native_web',
    label: 'Native Web\nTechnologies',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'd3_creation',
    definition: 'Focused on HTML, SVG, and CSS, enabling direct DOM manipulation and better tooling support.',
  },
  {
    id: 'svg_html_support',
    label: 'Beyond SVG:\nSupports HTML/CSS',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'd3_creation',
    definition: 'D3 can work with any DOM element, making it more versatile than SVG-only libraries.',
  },

  {
    id: 'version_history',
    label: 'Version History',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Major versions reflect architectural evolution, modularization, and community feedback.',
  },
  {
    id: 'v2_0',
    label: 'v2.0\n(Aug 2011)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'version_history',
    definition: 'Introduced selector functions, transparent transitions, and basic testing.',
  },
  {
    id: 'v3_0',
    label: 'v3.0\n(Dec 2012)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'version_history',
    definition: 'Enhanced projection system and performance; better transitions and geospatial tools.',
  },
  {
    id: 'v4_0',
    label: 'v4.0\n(Jun 2016)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'version_history',
    definition: 'Introduced modular architecture via npm; broke D3 into standalone packages.',
  },
  {
    id: 'v7_9_0',
    label: 'v7.9.0+\n(Mar 2024)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'version_history',
    definition: 'Latest release focused on incremental improvements, bug fixes, and modernization.',
  },

  {
    id: 'endorsement',
    label: 'Official Endorsement',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'In 2011, Protovis was deprecated and its creators recommended switching to D3.js.',
  },

  {
    id: 'anti_patterns',
    label: 'Anti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Misconceptions and pitfalls when referencing D3’s history and intent.',
  },
  {
    id: 'd3_vs_chartlibs',
    label: 'Comparing D3 to\nChart Libraries',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition: 'Assuming D3 was made to replace chart libraries; it was made to empower custom solutions.',
  },
  {
    id: 'ignoring_web_standards',
    label: 'Ignoring D3’s\nWeb Standard Philosophy',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition: 'Using D3 while ignoring its design around HTML/SVG/CSS integration misses the point of its creation.',
  },
];

export const links = [
  { source: 'root', target: 'founders' },
  { source: 'founders', target: 'stanford_origin' },

  { source: 'root', target: 'protovis' },
  { source: 'protovis', target: 'protovis_limitations' },

  { source: 'root', target: 'd3_creation' },
  { source: 'd3_creation', target: 'native_web' },
  { source: 'd3_creation', target: 'svg_html_support' },

  { source: 'root', target: 'version_history' },
  { source: 'version_history', target: 'v2_0' },
  { source: 'version_history', target: 'v3_0' },
  { source: 'version_history', target: 'v4_0' },
  { source: 'version_history', target: 'v7_9_0' },

  { source: 'root', target: 'endorsement' },

  { source: 'root', target: 'anti_patterns' },
  { source: 'anti_patterns', target: 'd3_vs_chartlibs' },
  { source: 'anti_patterns', target: 'ignoring_web_standards' },
];
