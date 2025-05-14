import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'D3.js\nReal-World Applications',
    shape: 'roundRect',
    color: 'root',
    definition: 'Examples of how D3 is used across journalism, business, research, and development to create impactful data visualizations.',
  },

  {
    id: 'journalism',
    label: 'Data Journalism',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Interactive storytelling powered by data, enabling readers to explore datasets themselves.',
  },
  {
    id: 'nyt',
    label: 'The New York\nTimes',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'journalism',
    definition: 'Uses D3 for election maps, scenario simulations, and interactive articles.',
  },
  {
    id: 'guardian_pudding',
    label: 'The Guardian &\nThe Pudding',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'journalism',
    definition: 'Create exploratory stories with custom graphics and scrolling effects using D3.',
  },

  {
    id: 'business',
    label: 'Business Intelligence',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Custom dashboards, KPI monitoring, and executive reporting using D3 visualizations.',
  },
  {
    id: 'dashboards',
    label: 'Executive\nDashboards',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'business',
    definition: 'Companies visualize revenue, retention, and conversion funnels in bespoke D3 charts.',
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce\nAnalytics',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'business',
    definition: 'Track real-time sales trends and visualize customer behavior flows.',
  },

  {
    id: 'science',
    label: 'Scientific Research',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Visualizing models, time series, and experiments in fields like genomics, climate, and epidemiology.',
  },
  {
    id: 'orbvis',
    label: 'ORBIS Project',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'science',
    definition: 'Stanford’s Roman Empire transportation network visualization powered by D3 and topojson.',
  },
  {
    id: 'climate_models',
    label: 'Climate Models\n& Disease Maps',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'science',
    definition: 'Researchers use D3 to explore data on temperatures, spread, and impact over time and space.',
  },

  {
    id: 'development',
    label: 'Software Development',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Integrating D3 into component systems and interactive UI frameworks.',
  },
  {
    id: 'visx',
    label: 'Airbnb visx',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'development',
    definition: 'A React-based wrapper that uses D3 utilities to build reusable charting components.',
  },
  {
    id: 'framework_integration',
    label: 'React & Vue\nIntegration',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'development',
    definition: 'Teams integrate D3 with component frameworks to maintain interactivity and reactivity.',
  },

  {
    id: 'public_health',
    label: 'Public Health & Humanities',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'D3 enables interactive visualization of humanistic and epidemiological datasets.',
  },
  {
    id: 'disease_tracking',
    label: 'Disease\nTracking',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'public_health',
    definition: 'Maps showing spread of viruses, vaccination rates, or health disparities using choropleths and timelines.',
  },
  {
    id: 'kindred_britain',
    label: 'Digital\nHumanities',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'public_health',
    definition: 'Projects like Kindred Britain visualize historic relationships and genealogies interactively.',
  },
];

export const links = [
  { source: 'root', target: 'journalism' },
  { source: 'journalism', target: 'nyt' },
  { source: 'journalism', target: 'guardian_pudding' },

  { source: 'root', target: 'business' },
  { source: 'business', target: 'dashboards' },
  { source: 'business', target: 'ecommerce' },

  { source: 'root', target: 'science' },
  { source: 'science', target: 'orbvis' },
  { source: 'science', target: 'climate_models' },

  { source: 'root', target: 'development' },
  { source: 'development', target: 'visx' },
  { source: 'development', target: 'framework_integration' },

  { source: 'root', target: 'public_health' },
  { source: 'public_health', target: 'disease_tracking' },
  { source: 'public_health', target: 'kindred_britain' },
];
