// mindMapData.js
import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Use\nCases',
    definition: 'Where TypeScript is commonly applied across different domains',
    shape: 'roundRect',
    color: 'root',
  },
  {
    id: 'frontend_web_dev',
    label: 'Frontend\nWeb Dev',
    definition:
      'Building type-safe UIs with frameworks like React, Angular, and Vue',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'backend_services',
    label: 'Backend\nServices',
    definition:
      'Server-side development using Node.js, Deno, and related frameworks',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'mobile_apps',
    label: 'Mobile\nApps',
    definition:
      'Cross-platform mobile applications with React Native and Ionic',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'desktop_apps',
    label: 'Desktop\nApps',
    definition: 'Desktop applications built with Electron and web technologies',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'game_development',
    label: 'Game\nDevelopment',
    definition: 'Browser-based games using engines like Phaser and BabylonJS',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'cli_tools',
    label: 'CLI\nTools',
    definition:
      'Command-line utilities and scripts using ts-node or compiled JS',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'infrastructure_as_code',
    label: 'Infrastructure\nas Code',
    definition: 'IaC scripts and configs with Pulumi, AWS CDK, and similar',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'ai_ml',
    label: 'AI &\nML',
    definition: 'Type-safe AI and ML libraries like TensorFlow.js and ONNX.js',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // Level 2 nodes
  {
    id: 'react',
    label: 'React',
    definition: 'Building UIs with React + TypeScript',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'angular',
    label: 'Angular',
    definition: 'Enterprise apps with Angular’s full TS integration',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'vue',
    label: 'Vue',
    definition: 'Progressive web UIs with Vue 3’s Composition API',
    shape: 'rect',
    color: 'nodePositive2',
  },

  {
    id: 'react_native',
    label: 'React\nNative',
    definition: 'Cross-platform mobile with TS',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'ionic',
    label: 'Ionic',
    definition: 'Hybrid apps with TS',
    shape: 'rect',
    color: 'nodePositive2',
  },

  {
    id: 'aws_cdk',
    label: 'AWS\nCDK',
    definition: 'TS-first IaC definitions',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'pulumi',
    label: 'Pulumi',
    definition: 'Multi-cloud IaC with TS',
    shape: 'rect',
    color: 'nodePositive2',
  },

  {
    id: 'ts_node',
    label: 'ts-node',
    definition: 'Run TS scripts directly without compiling',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'oclif',
    label: 'Oclif',
    definition: 'Framework for building CLI apps with TS',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Level 3 nodes
  {
    id: 'nextjs',
    label: 'Next.js',
    definition: 'SSR and SSG with TypeScript',
    shape: 'diamond',
    color: 'nodePositive3',
  },
  {
    id: 'gatsby',
    label: 'Gatsby',
    definition: 'Static site generation with TS',
    shape: 'diamond',
    color: 'nodePositive3',
  },

  {
    id: 'cdk_constructs',
    label: 'Constructs',
    definition: 'Reusable CDK components',
    shape: 'diamond',
    color: 'nodePositive3',
  },
  {
    id: 'cdk_cicd',
    label: 'CI/CD\nPipelines',
    definition: 'Define pipelines as code in TS',
    shape: 'diamond',
    color: 'nodePositive3',
  },
]

export const links = [
  { source: 'root', target: 'frontend_web_dev' },
  { source: 'root', target: 'backend_services' },
  { source: 'root', target: 'mobile_apps' },
  { source: 'root', target: 'desktop_apps' },
  { source: 'root', target: 'game_development' },
  { source: 'root', target: 'cli_tools' },
  { source: 'root', target: 'infrastructure_as_code' },
  { source: 'root', target: 'ai_ml' },

  // Level 2 links
  { source: 'frontend_web_dev', target: 'react' },
  { source: 'frontend_web_dev', target: 'angular' },
  { source: 'frontend_web_dev', target: 'vue' },

  { source: 'mobile_apps', target: 'react_native' },
  { source: 'mobile_apps', target: 'ionic' },

  { source: 'infrastructure_as_code', target: 'aws_cdk' },
  { source: 'infrastructure_as_code', target: 'pulumi' },

  { source: 'cli_tools', target: 'ts_node' },
  { source: 'cli_tools', target: 'oclif' },

  // Level 3 links
  { source: 'react', target: 'nextjs' },
  { source: 'react', target: 'gatsby' },

  { source: 'aws_cdk', target: 'cdk_constructs' },
  { source: 'aws_cdk', target: 'cdk_cicd' },
]

export default { nodes, links }
