import { COLORS } from '../../../theme/colors';

export const nodes = [
    {
      id: 'root',
      label: 'React\nComponent Patterns',
      definition: 'Reusable architecture strategies for building flexible and maintainable React components.',
      shape: 'roundRect',
      color: 'root'
    },
  
    // Top-level patterns
    {
      id: 'presentationalContainer',
      label: 'Presentational\n& Container',
      definition: 'Separate UI rendering (presentational) from logic/state (container) for reusability and testing.',
      shape: 'ellipse',
      color: 'nodePositive1'
    },
    {
      id: 'compoundComponents',
      label: 'Compound\nComponents',
      definition: 'Components share state and communicate implicitly through context.',
      shape: 'ellipse',
      color: 'nodePositive1'
    },
    {
      id: 'higherOrderComponents',
      label: 'Higher-Order\nComponents (HOC)',
      definition: 'Functions that take a component and return an enhanced component.',
      shape: 'ellipse',
      color: 'nodePositive1'
    },
    {
      id: 'renderProps',
      label: 'Render\nProps',
      definition: 'A technique for sharing code by passing a render function as a prop.',
      shape: 'ellipse',
      color: 'nodePositive1'
    },
    {
      id: 'controlledUncontrolled',
      label: 'Controlled vs\nUncontrolled',
      definition: 'Patterns for managing component state either internally (uncontrolled) or externally (controlled).',
      shape: 'ellipse',
      color: 'nodePositive1'
    },
    {
      id: 'hooksAsAbstraction',
      label: 'Hooks as\nAbstraction',
      definition: 'Custom hooks encapsulate reusable logic cleanly outside of components.',
      shape: 'ellipse',
      color: 'nodePositive1'
    },
    {
      id: 'slotsChildrenApi',
      label: 'Slots /\nChildren API',
      definition: 'Use children and props to pass layout and logic parts into reusable shell components.',
      shape: 'ellipse',
      color: 'nodePositive1'
    },
    {
      id: 'benefits',
      label: 'Benefits / Pros',
      definition: 'Component patterns improve separation of concerns, testability, and maintainability.',
      shape: 'ellipse',
      color: 'nodePositive1'
    },
    {
      id: 'cons',
      label: 'Cons',
      definition: 'Pattern overuse can lead to abstraction hell or confusing code.',
      shape: 'hexagon',
      color: 'nodeNegative1'
    },
    {
      id: 'antiPatterns',
      label: 'Anti-Patterns',
      definition: 'Misusing or mixing patterns can hurt readability and flexibility.',
      shape: 'hexagon',
      color: 'nodeNegative1'
    },
  
    // Grandchildren: Cons
    {
      id: 'overAbstraction',
      label: 'Over\nAbstraction',
      definition: 'Using too many layers or indirection can obscure logic.',
      shape: 'rect',
      color: 'nodeNegative2'
    },
    {
      id: 'prematurePattern',
      label: 'Premature\nPattern Use',
      definition: 'Applying a complex pattern before it’s actually needed.',
      shape: 'rect',
      color: 'nodeNegative2'
    },
  
    // Grandchildren: Anti-Patterns
    {
      id: 'mixingPatterns',
      label: 'Mixing\nPatterns',
      definition: 'Combining incompatible patterns like HOC and render props inconsistently.',
      shape: 'rect',
      color: 'nodeNegative2'
    },
    {
      id: 'tightCoupling',
      label: 'Tightly\nCoupled State/UI',
      definition: 'State logic baked directly into UI rendering with no separation.',
      shape: 'rect',
      color: 'nodeNegative2'
    },
    {
      id: 'contextMisuse',
      label: 'Misusing\nContext',
      definition: 'Using context for local state or unrelated values can make components hard to reason about.',
      shape: 'rect',
      color: 'nodeNegative2'
    }
  ];
  
  export const links = [
    { source: 'root', target: 'presentationalContainer' },
    { source: 'root', target: 'compoundComponents' },
    { source: 'root', target: 'higherOrderComponents' },
    { source: 'root', target: 'renderProps' },
    { source: 'root', target: 'controlledUncontrolled' },
    { source: 'root', target: 'hooksAsAbstraction' },
    { source: 'root', target: 'slotsChildrenApi' },
    { source: 'root', target: 'benefits' },
    { source: 'root', target: 'cons' },
    { source: 'root', target: 'antiPatterns' },
  
    { source: 'cons', target: 'overAbstraction' },
    { source: 'cons', target: 'prematurePattern' },
  
    { source: 'antiPatterns', target: 'mixingPatterns' },
    { source: 'antiPatterns', target: 'tightCoupling' },
    { source: 'antiPatterns', target: 'contextMisuse' }
  ];
  