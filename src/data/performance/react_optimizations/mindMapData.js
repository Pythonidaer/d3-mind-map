import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'React-Specific\nOptimizations',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Performance techniques tailored for React applications, focusing on rendering efficiency, memoization, and minimizing re-renders.',
  },

  // Level 1 Positives
  {
    id: 'memoization',
    label: 'Memoization\nTechniques',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Strategies to avoid redundant re-renders or computations by reusing previously calculated results or instances.',
    parent: 'root',
  },
  {
    id: 'render_control',
    label: 'Render\nControl',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Preventing unnecessary React re-renders through component-level and prop-level optimizations.',
    parent: 'root',
  },
  {
    id: 'react_compiler',
    label: 'React 19\nCompiler',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Improved reactivity and scheduling introduced in React 19 that automatically optimizes components during compilation.',
    parent: 'root',
  },

  // Level 2 Positives
  {
    id: 'usememo',
    label: 'useMemo\nfor Computations',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Memoizes expensive calculations to avoid re-running them on every render unless dependencies change.',
    parent: 'memoization',
  },
  {
    id: 'usecallback',
    label: 'useCallback\nfor Functions',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Prevents functions from being redefined unless dependencies change, which helps with prop stability and React.memo.',
    parent: 'memoization',
  },
  {
    id: 'reactmemo',
    label: 'React.memo for\nFunctional Components',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Wraps components in a shallow prop comparison, preventing re-render unless props change.',
    parent: 'render_control',
  },
  {
    id: 'purecomponent',
    label: 'PureComponent\nfor Classes',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Extends class components with shallow prop/state comparison for automatic re-render prevention.',
    parent: 'render_control',
  },

  // Level 3 Positives
  {
    id: 'stable_references',
    label: 'Stable\nFunction References',
    shape: 'diamond',
    color: 'nodePositive3',
    definition:
      'Avoid passing new object/function references as props unnecessarily; helps React.memo work as expected.',
    parent: 'usecallback',
  },
  {
    id: 'complex_prop_memo',
    label: 'Memoizing\nDerived Props',
    shape: 'diamond',
    color: 'nodePositive3',
    definition:
      'Use useMemo to precompute derived values passed to children to avoid re-render chains.',
    parent: 'usememo',
  },

  // Negative Nodes
  {
    id: 'overmemoization',
    label: 'Overusing\nMemoization',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Using memoization for trivial calculations or rarely updated values may reduce readability and add unnecessary complexity.',
    parent: 'root',
  },
  {
    id: 'identity_issues',
    label: 'Function/Object\nIdentity Pitfalls',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Inline functions or object literals redefined on each render cause child components to rerender even with React.memo.',
    parent: 'overmemoization',
  },
  {
    id: 'prop_drilling',
    label: 'Deep Prop\nDrilling',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Passing props through many components can cause unnecessary renders; prefer context or memoized containers.',
    parent: 'overmemoization',
  },
];

export const links = [
  { source: 'root', target: 'memoization' },
  { source: 'root', target: 'render_control' },
  { source: 'root', target: 'react_compiler' },
  { source: 'root', target: 'overmemoization' },

  { source: 'memoization', target: 'usememo' },
  { source: 'memoization', target: 'usecallback' },

  { source: 'usememo', target: 'complex_prop_memo' },
  { source: 'usecallback', target: 'stable_references' },

  { source: 'render_control', target: 'reactmemo' },
  { source: 'render_control', target: 'purecomponent' },

  { source: 'overmemoization', target: 'identity_issues' },
  { source: 'overmemoization', target: 'prop_drilling' },
];
