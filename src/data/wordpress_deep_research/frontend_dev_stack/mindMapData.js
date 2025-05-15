import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Frontend\nDevelopment Stack',
    shape: 'roundRect',
    color: 'root',
    definition: 'The complete set of languages, frameworks, tools, and workflows used to build the user-facing part of websites and applications.'
  },

  // Core Layers
  {
    id: 'html_css_js',
    label: 'HTML / CSS /\nJavaScript',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'The foundational trio of the frontend: HTML structures content, CSS styles it, and JavaScript makes it interactive.'
  },
  {
    id: 'frameworks',
    label: 'Frameworks &\nLibraries',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Tools like React, Vue, and Svelte that simplify or enhance frontend development through reusable components and optimized DOM updates.'
  },
  {
    id: 'tooling',
    label: 'Build Tools &\nBundlers',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Software like Vite, Webpack, or Parcel used to compile, bundle, and optimize source code for production.'
  },
  {
    id: 'styling',
    label: 'Styling &\nCSS Tools',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Preprocessors (SASS), frameworks (Tailwind, Bootstrap), and methodologies (BEM, CSS Modules) used to style applications.'
  },
  {
    id: 'state_management',
    label: 'State\nManagement',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Managing application state across components and views using libraries like Redux, Zustand, or React Context.'
  },
  {
    id: 'api_handling',
    label: 'API\nIntegration',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Handling external data sources using REST, GraphQL, Axios, Fetch API, and client libraries like SWR or React Query.'
  },
  {
    id: 'testing',
    label: 'Testing &\nQA Tools',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Tools like Jest, Vitest, Cypress, and Testing Library used to ensure quality and stability of frontend code.'
  },

  // Children
  {
    id: 'react',
    label: 'React',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'frameworks',
    definition: 'A declarative, component-based JavaScript library for building user interfaces maintained by Meta.'
  },
  {
    id: 'vue',
    label: 'Vue',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'frameworks',
    definition: 'A progressive framework for building user interfaces with a strong focus on simplicity and gradual adoption.'
  },
  {
    id: 'vite',
    label: 'Vite',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'tooling',
    definition: 'A modern frontend build tool that provides instant server start and fast HMR by leveraging native ES modules.'
  },
  {
    id: 'webpack',
    label: 'Webpack',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'tooling',
    definition: 'A powerful and highly configurable module bundler widely used for complex frontend applications.'
  },
  {
    id: 'tailwind',
    label: 'Tailwind CSS',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'styling',
    definition: 'A utility-first CSS framework that enables rapid UI development through atomic classes.'
  },
  {
    id: 'redux',
    label: 'Redux',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'state_management',
    definition: 'A predictable state container for JavaScript apps, often used with React.'
  },
  {
    id: 'react_query',
    label: 'React Query',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'api_handling',
    definition: 'A data-fetching and caching library for React that handles remote server state efficiently.'
  },
  {
    id: 'jest',
    label: 'Jest',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'testing',
    definition: 'A JavaScript testing framework with built-in assertion libraries, mocking, and snapshot testing.'
  },
  {
    id: 'cypress',
    label: 'Cypress',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'testing',
    definition: 'An end-to-end testing framework for web apps that runs directly in the browser.'
  },

  // Cons
  {
    id: 'nodeNegative1',
    label: 'Cons',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Common downsides of working with a complex frontend development stack.'
  },
  {
    id: 'tooling_overhead',
    label: 'Tooling\nOverhead',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'nodeNegative1',
    definition: 'Modern frontend stacks require familiarity with a lot of tools and configurations, increasing complexity.'
  },
  {
    id: 'dependency_hell',
    label: 'Dependency\nManagement',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'nodeNegative1',
    definition: 'Large apps with many npm packages can suffer from version conflicts, outdated libraries, or bloated builds.'
  }
]

export const links = [
  { source: 'root', target: 'html_css_js' },
  { source: 'root', target: 'frameworks' },
  { source: 'root', target: 'tooling' },
  { source: 'root', target: 'styling' },
  { source: 'root', target: 'state_management' },
  { source: 'root', target: 'api_handling' },
  { source: 'root', target: 'testing' },
  { source: 'root', target: 'nodeNegative1' },

  { source: 'frameworks', target: 'react' },
  { source: 'frameworks', target: 'vue' },

  { source: 'tooling', target: 'vite' },
  { source: 'tooling', target: 'webpack' },

  { source: 'styling', target: 'tailwind' },

  { source: 'state_management', target: 'redux' },

  { source: 'api_handling', target: 'react_query' },

  { source: 'testing', target: 'jest' },
  { source: 'testing', target: 'cypress' },

  { source: 'nodeNegative1', target: 'tooling_overhead' },
  { source: 'nodeNegative1', target: 'dependency_hell' }
]
