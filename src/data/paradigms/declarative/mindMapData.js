import { COLORS } from '../../../theme/colors';

export const nodes = [
    // Root node
    {
      id: 'root',
      label: 'Declarative \n Programming \n in JavaScript',
      definition:
        'A style that focuses on describing what should be done rather than how to do it. It emphasizes clear expression of intent, often using frameworks and high‑level abstractions.',
      shape: 'roundRect',
      color: 'root',
    },
    // First-level nodes (direct children of root)
    {
      id: 'keyPrinciples',
      label: 'Key Principles',
      definition:
        'Focus on describing the desired outcome, using implicit control flow and high‑level abstractions rather than explicit step‑by‑step instructions.',
      shape: 'ellipse',
      color: 'veryLightGreen',
    },
    {
      id: 'benefits',
      label: 'Benefits',
      definition:
        'Improved readability, maintainability, fewer side effects, and closer alignment to domain languages, making code easier to reason about.',
      shape: 'ellipse',
      color: 'veryLightGreen',
    },
    {
      id: 'cons',
      label: 'Cons',
      definition:
        'May incur performance overhead, offer less fine‑grained control, and can be challenging for developers unfamiliar with abstract concepts.',
      shape: 'hexagon',
      color: 'lightRed',
    },
    {
      id: 'antipatterns',
      label: 'Anti-Patterns',
      definition:
        'Common pitfalls include mixing imperative logic into declarative code, over‑abstraction, state synchronization issues, and ignoring performance details.',
      shape: 'hexagon',
      color: 'lightRed',
    },
    {
      id: 'examples',
      label: 'Examples & APIs',
      definition:
        'Examples include using React (JSX) for UI, chaining array methods (map, filter, reduce), promise chaining, and GraphQL for data queries.',
      shape: 'ellipse',
      color: 'veryLightGreen',
    },
    // Second-level nodes for Key Principles
    {
      id: 'whatNotHow',
      label: 'What, Not How',
      definition:
        'Expresses the desired outcome rather than the sequence of steps to achieve it.',
      shape: 'rect',
      color: 'mintGreen',
    },
    {
      id: 'implicitControl',
      label: 'Implicit Control Flow',
      definition:
        'Relies on libraries or frameworks to manage execution order (e.g., React re‑rendering based on state changes).',
      shape: 'rect',
      color: 'mintGreen',
    },
    {
      id: 'immutabilityStateless',
      label: 'Immutability & Statelessness',
      definition: 'Favors unchanging data and pure functions to minimize side effects.',
      shape: 'rect',
      color: 'mintGreen',
    },
    {
      id: 'highLevel',
      label: 'High‑Level Abstractions',
      definition:
        'Uses declarative constructs such as JSX, template languages, and DSLs to express logic.',
      shape: 'rect',
      color: 'mintGreen',
    },
    // Second-level nodes for Benefits
    {
      id: 'readability',
      label: 'Readability',
      definition: 'Code clearly communicates intent, making it easier to understand at a glance.',
      shape: 'rect',
      color: 'mintGreen',
    },
    {
      id: 'maintainability',
      label: 'Maintainability',
      definition: 'Changes in implementation are hidden behind high‑level declarations.',
      shape: 'rect',
      color: 'mintGreen',
    },
    {
      id: 'fewerSideEffects',
      label: 'Fewer Side Effects',
      definition: 'Pure functions and immutable data reduce unexpected behavior in the code.',
      shape: 'rect',
      color: 'mintGreen',
    },
    {
      id: 'domainAlignment',
      label: 'Domain Alignment',
      definition:
        'Declarative code often mirrors the domain language (e.g., HTML, GraphQL), making it intuitive for domain experts.',
      shape: 'rect',
      color: 'mintGreen',
    },
    // Second-level nodes for Cons
    {
      id: 'performanceOverhead',
      label: 'Performance Overhead',
      definition:
        'Abstractions may add extra processing layers, potentially reducing performance in critical paths.',
      shape: 'rect',
      color: 'lighterRed',
    },
    {
      id: 'lessControl',
      label: 'Less Fine‑Grained Control',
      definition: 'Developers have less control over execution details and optimizations.',
      shape: 'rect',
      color: 'lighterRed',
    },
    {
      id: 'learningCurve',
      label: 'Learning Curve',
      definition: 'For those used to imperative styles, shifting to declarative thinking may be challenging.',
      shape: 'rect',
      color: 'lighterRed',
    },
    {
      id: 'opaqueAbstractions',
      label: 'Opaque Abstractions',
      definition: 'High‑level abstractions can sometimes hide complexity, making debugging harder.',
      shape: 'rect',
      color: 'lighterRed',
    },
    // Second-level nodes for Anti‑Patterns
    {
      id: 'mixingStyles',
      label: 'Mixing Imperative Logic',
      definition: 'Inserting imperative steps into declarative code undermines clarity and benefits.',
      shape: 'rect',
      color: 'lighterRed',
    },
    {
      id: 'overAbstraction',
      label: 'Over‑Abstraction',
      definition: 'Creating overly complex abstractions that obscure the intended behavior.',
      shape: 'rect',
      color: 'lighterRed',
    },
    {
      id: 'stateIssues',
      label: 'State Synchronization Issues',
      definition: 'Failing to properly manage state can lead to inconsistencies and bugs.',
      shape: 'rect',
      color: 'lighterRed',
    },
    {
      id: 'ignorePerf',
      label: 'Ignoring Performance',
      definition: 'Relying solely on declarative methods without considering performance can be problematic.',
      shape: 'rect',
      color: 'lighterRed',
    },
    // Second-level nodes for Examples & APIs
    {
      id: 'reactJSX',
      label: 'React & JSX',
      definition: 'Using React’s declarative component model to describe UI based on state.',
      shape: 'rect',
      color: 'mintGreen',
    },
    {
      id: 'arrayMethods',
      label: 'Array Methods',
      definition: 'Using .map, .filter, .reduce for data processing in a declarative style.',
      shape: 'rect',
      color: 'mintGreen',
    },
    {
      id: 'promiseChaining',
      label: 'Promise Chaining',
      definition: 'Chaining asynchronous actions declaratively using promises.',
      shape: 'rect',
      color: 'mintGreen',
    },
    {
      id: 'graphql',
      label: 'GraphQL & Templates',
      definition: 'Declaring data requirements with GraphQL or using template languages to describe UI.',
      shape: 'rect',
      color: 'mintGreen',
    },
  ];
  
  export const links = [
    // Connect root to first-level nodes
    { source: 'root', target: 'keyPrinciples' },
    { source: 'root', target: 'benefits' },
    { source: 'root', target: 'cons' },
    { source: 'root', target: 'antipatterns' },
    { source: 'root', target: 'examples' },
    // Key Principles branch
    { source: 'keyPrinciples', target: 'whatNotHow' },
    { source: 'keyPrinciples', target: 'implicitControl' },
    { source: 'keyPrinciples', target: 'immutabilityStateless' },
    { source: 'keyPrinciples', target: 'highLevel' },
    // Benefits branch
    { source: 'benefits', target: 'readability' },
    { source: 'benefits', target: 'maintainability' },
    { source: 'benefits', target: 'fewerSideEffects' },
    { source: 'benefits', target: 'domainAlignment' },
    // Cons branch
    { source: 'cons', target: 'performanceOverhead' },
    { source: 'cons', target: 'lessControl' },
    { source: 'cons', target: 'learningCurve' },
    { source: 'cons', target: 'opaqueAbstractions' },
    // Anti‑Patterns branch
    { source: 'antipatterns', target: 'mixingStyles' },
    { source: 'antipatterns', target: 'overAbstraction' },
    { source: 'antipatterns', target: 'stateIssues' },
    { source: 'antipatterns', target: 'ignorePerf' },
    // Examples branch
    { source: 'examples', target: 'reactJSX' },
    { source: 'examples', target: 'arrayMethods' },
    { source: 'examples', target: 'promiseChaining' },
    { source: 'examples', target: 'graphql' },
  ];