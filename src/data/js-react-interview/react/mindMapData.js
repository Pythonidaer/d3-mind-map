export const nodes = [
    {
      id: 'root',
      label: 'React Fundamentals',
      definition: 'Key concepts and patterns for building modern user interfaces using React, including components, hooks, state, props, rendering, and composition.',
      shape: 'roundRect',
      color: '#37474F'
    },
    {
      id: 'components',
      label: 'Components',
      definition: 'The building blocks of React UIs. Can be functional or class-based and are used to compose interfaces.',
      shape: 'ellipse',
      color: '#98EE99'
    },
    {
      id: 'hooks',
      label: 'React Hooks',
      definition: 'APIs that enable state and lifecycle features in functional components.',
      shape: 'ellipse',
      color: '#98EE99'
    },
    {
      id: 'stateProps',
      label: 'State & Props',
      definition: 'Mechanisms for passing and managing data in a component hierarchy.',
      shape: 'ellipse',
      color: '#98EE99'
    },
    {
      id: 'rendering',
      label: 'Rendering Logic',
      definition: 'Controlling what displays in the UI based on conditions or lists.',
      shape: 'ellipse',
      color: '#98EE99'
    },
    {
      id: 'composition',
      label: 'Component\nComposition',
      definition: 'Building UIs by combining smaller, reusable components together.',
      shape: 'ellipse',
      color: '#98EE99'
    },
    {
      id: 'forms',
      label: 'Forms & \n Controlled Inputs',
      definition: 'Handling form input state with controlled components and validation.',
      shape: 'ellipse',
      color: '#98EE99'
    },
    {
      id: 'events',
      label: 'Event Handling',
      definition: 'Responding to user interactions such as clicks, input, and submit.',
      shape: 'ellipse',
      color: '#98EE99'
    },
    {
      id: 'benefits',
      label: 'Benefits / Pros',
      definition: 'Advantages of using React such as reusability, fast updates, and strong tooling.',
      shape: 'ellipse',
      color: '#98EE99'
    },
    {
      id: 'cons',
      label: 'Cons',
      definition: 'Potential drawbacks including boilerplate, learning curve, or overengineering.',
      shape: 'hexagon',
      color: '#FF8A80'
    },
    {
      id: 'antiPatterns',
      label: 'Anti-Patterns',
      definition: 'Common mistakes that reduce maintainability or performance in React apps.',
      shape: 'hexagon',
      color: '#FF8A80'
    },
  
    // Grandchildren: Components
    { id: 'functionalComponents', label: 'Functional\nComponents', definition: 'Stateless or stateful components written as functions.', shape: 'rect', color: '#B9F6CA' },
    { id: 'jsx', label: 'JSX Syntax', definition: 'A syntax extension that looks like HTML and is used to describe UI structure.', shape: 'rect', color: '#B9F6CA' },
  
    // Grandchildren: Hooks
    { id: 'useState', label: 'useState', definition: 'Hook to manage local state in a functional component.', shape: 'rect', color: '#B9F6CA' },
    { id: 'useEffect', label: 'useEffect', definition: 'Hook to perform side effects such as data fetching or subscriptions.', shape: 'rect', color: '#B9F6CA' },
    { id: 'useContext', label: 'useContext', definition: 'Hook to consume values from React context without prop drilling.', shape: 'rect', color: '#B9F6CA' },
    { id: 'useRef', label: 'useRef', definition: 'Hook for referencing DOM elements or storing persistent mutable values.', shape: 'rect', color: '#B9F6CA' },
    { id: 'useMemo', label: 'useMemo', definition: 'Hook that memoizes computed values to avoid expensive calculations on re-render.', shape: 'rect', color: '#B9F6CA' },
    { id: 'useCallback', label: 'useCallback', definition: 'Hook that memoizes functions to prevent unnecessary re-renders.', shape: 'rect', color: '#B9F6CA' },
  
    // Grandchildren: State & Props
    { id: 'propDrilling', label: 'Prop\nDrilling', definition: 'Passing data through multiple levels of components.', shape: 'rect', color: '#B9F6CA' },
    { id: 'liftingState', label: 'Lifting\nState Up', definition: 'Moving state to the nearest common ancestor to share between children.', shape: 'rect', color: '#B9F6CA' },
    { id: 'controlledProps', label: 'Controlled\nProps', definition: 'Props used to control form inputs or child behavior.', shape: 'rect', color: '#B9F6CA' },
  
    // Grandchildren: Rendering Logic
    { id: 'conditionalRendering', label: 'Conditional\nRendering', definition: 'Show UI based on certain conditions using if, &&, ternary, etc.', shape: 'rect', color: '#B9F6CA' },
    { id: 'listRendering', label: 'List\nRendering', definition: 'Render repeated components with array.map and unique keys.', shape: 'rect', color: '#B9F6CA' },
  
    // Grandchildren: Composition
    { id: 'childrenProp', label: 'Children\nProp', definition: 'Special prop to allow components to nest and render passed content.', shape: 'rect', color: '#B9F6CA' },
    { id: 'customHooks', label: 'Custom\nHooks', definition: 'Encapsulate reusable logic using shared hooks.', shape: 'rect', color: '#B9F6CA' },
    { id: 'compoundComponents', label: 'Compound\nComponents', definition: 'Pattern to share state between parent and nested components via context.', shape: 'rect', color: '#B9F6CA' },
  
    // Grandchildren: Forms
    { id: 'formState', label: 'Form\nState', definition: 'Track and update input values using useState.', shape: 'rect', color: '#B9F6CA' },
    { id: 'validation', label: 'Validation', definition: 'Ensure form input meets required conditions before submit.', shape: 'rect', color: '#B9F6CA' },
  
    // Grandchildren: Event Handling
    { id: 'onClick', label: 'onClick /\nonChange', definition: 'React’s SyntheticEvent system for handling user interaction.', shape: 'rect', color: '#B9F6CA' },
    { id: 'preventDefault', label: 'preventDefault()', definition: 'Prevents default browser behavior such as page reload on form submit.', shape: 'rect', color: '#B9F6CA' },
  
    // Grandchildren: Cons
    { id: 'boilerplate', label: 'Boilerplate', definition: 'May require lots of setup for routing, state management, and build tools.', shape: 'rect', color: '#FFB3B3' },
    { id: 'learningCurve', label: 'Learning\nCurve', definition: 'JSX, hooks, and the component lifecycle can be challenging for beginners.', shape: 'rect', color: '#FFB3B3' },
    { id: 'overheadSimpleSites', label: 'Overhead for\nSimple Sites', definition: 'React might be overkill for static or low-interactivity sites.', shape: 'rect', color: '#FFB3B3' },
  
    // Grandchildren: Anti-Patterns
    { id: 'propDrillingAP', label: 'Prop\nDrilling', definition: 'Excessively passing props through many layers. Consider context.', shape: 'rect', color: '#FFB3B3' },
    { id: 'overuseUseEffect', label: 'Overusing\nuseEffect', definition: 'Using useEffect for things that don’t need it, causing unnecessary renders.', shape: 'rect', color: '#FFB3B3' },
    { id: 'anonymousFunctionsJSX', label: 'Anonymous\nFunctions in JSX', definition: 'Inline arrow functions in render may cause re-renders and performance issues.', shape: 'rect', color: '#FFB3B3' },
    { id: 'mutatingStateDirectly', label: 'Mutating\nState Directly', definition: 'Modify state using setters instead of direct mutation to avoid stale state bugs.', shape: 'rect', color: '#FFB3B3' },
    { id: 'missingKeys', label: 'Missing\nKeys in Lists', definition: 'Lack of stable unique keys in list rendering affects diffing performance.', shape: 'rect', color: '#FFB3B3' },
    {
        id: 'errorHandling',
        label: 'Error\nBoundaries',
        definition: 'Components that catch render errors in child trees using lifecycle methods.',
        shape: 'ellipse',
        color: '#98EE99'
      },
      {
        id: 'errorBoundaryComponent',
        label: 'Error\nBoundary\nComponent',
        definition: 'A class component that implements getDerivedStateFromError and componentDidCatch.',
        shape: 'rect',
        color: '#B9F6CA'
      },
      {
        id: 'lazyLoading',
        label: 'Lazy\nLoading &\nSuspense',
        definition: 'Technique for code-splitting by dynamically loading components using React.lazy and Suspense.',
        shape: 'ellipse',
        color: '#98EE99'
      },
      {
        id: 'reactLazy',
        label: 'React.lazy()',
        definition: 'Function for loading components lazily with dynamic import().',
        shape: 'rect',
        color: '#B9F6CA'
      },
      {
        id: 'reactSuspense',
        label: 'Suspense\nComponent',
        definition: 'Fallback UI component used to wrap lazy-loaded children.',
        shape: 'rect',
        color: '#B9F6CA'
      },
  ];
  
  export const links = [
    { source: 'root', target: 'components' },
    { source: 'root', target: 'hooks' },
    { source: 'root', target: 'stateProps' },
    { source: 'root', target: 'rendering' },
    { source: 'root', target: 'composition' },
    { source: 'root', target: 'forms' },
    { source: 'root', target: 'events' },
    { source: 'root', target: 'benefits' },
    { source: 'root', target: 'cons' },
    { source: 'root', target: 'antiPatterns' },
    { source: 'root', target: 'errorHandling' },
{ source: 'errorHandling', target: 'errorBoundaryComponent' },
{ source: 'root', target: 'lazyLoading' },
{ source: 'lazyLoading', target: 'reactLazy' },
{ source: 'lazyLoading', target: 'reactSuspense' },
  
    { source: 'components', target: 'functionalComponents' },
    { source: 'components', target: 'jsx' },
  
    { source: 'hooks', target: 'useState' },
    { source: 'hooks', target: 'useEffect' },
    { source: 'hooks', target: 'useContext' },
    { source: 'hooks', target: 'useRef' },
    { source: 'hooks', target: 'useMemo' },
    { source: 'hooks', target: 'useCallback' },
  
    { source: 'stateProps', target: 'propDrilling' },
    { source: 'stateProps', target: 'liftingState' },
    { source: 'stateProps', target: 'controlledProps' },
  
    { source: 'rendering', target: 'conditionalRendering' },
    { source: 'rendering', target: 'listRendering' },
  
    { source: 'composition', target: 'childrenProp' },
    { source: 'composition', target: 'customHooks' },
    { source: 'composition', target: 'compoundComponents' },
  
    { source: 'forms', target: 'formState' },
    { source: 'forms', target: 'validation' },
  
    { source: 'events', target: 'onClick' },
    { source: 'events', target: 'preventDefault' },
  
    { source: 'cons', target: 'boilerplate' },
    { source: 'cons', target: 'learningCurve' },
    { source: 'cons', target: 'overheadSimpleSites' },
  
    { source: 'antiPatterns', target: 'propDrillingAP' },
    { source: 'antiPatterns', target: 'overuseUseEffect' },
    { source: 'antiPatterns', target: 'anonymousFunctionsJSX' },
    { source: 'antiPatterns', target: 'mutatingStateDirectly' },
    { source: 'antiPatterns', target: 'missingKeys' }
  ];