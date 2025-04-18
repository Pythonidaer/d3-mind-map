import { COLORS } from '../../../theme/colors';

export const nodes = [
    {
      id: 'root',
      label: 'React & JS\nInterview Questions',
      definition: 'Common technical and behavioral questions asked in frontend interviews involving JavaScript and React.',
      shape: 'roundRect',
      color: 'root'
    },
  
    // Categories
    {
      id: 'reactConcepts',
      label: 'React\nConcepts',
      definition: 'Key concepts tested such as state, props, rendering, hooks, and composition.',
      shape: 'ellipse',
      color: 'nodePositive1'
    },
    {
      id: 'javascriptConcepts',
      label: 'JavaScript\nConcepts',
      definition: 'Topics like closures, scope, async/await, and ES6+ syntax.',
      shape: 'ellipse',
      color: 'nodePositive1'
    },
    {
      id: 'codingChallenges',
      label: 'Coding\nChallenges',
      definition: 'Tasks such as filtering lists, controlled forms, async fetching, and small UI logic.',
      shape: 'ellipse',
      color: 'nodePositive1'
    },
    {
      id: 'performanceAndTesting',
      label: 'Performance\n& Testing',
      definition: 'Questions about optimizing render performance and unit/integration testing.',
      shape: 'ellipse',
      color: 'nodePositive1'
    },
    {
      id: 'architectureBehavioral',
      label: 'Architecture\n& Behavioral',
      definition: 'Evaluates decision-making, system design, and team collaboration skills.',
      shape: 'ellipse',
      color: 'nodePositive1'
    },
  
    // React Concepts
    { id: 'stateVsProps', label: 'State vs\nProps', definition: 'Compare and contrast data flow and control.', shape: 'rect', color: 'nodePositive2' },
    { id: 'hooksUsage', label: 'useState /\nuseEffect /\nuseContext', definition: 'Common usage, dependencies, side effects.', shape: 'rect', color: 'nodePositive2' },
    { id: 'renderingTypes', label: 'Rendering\nTypes', definition: 'Explain client, server, static rendering differences.', shape: 'rect', color: 'nodePositive2' },
  
    // JavaScript Concepts
    { id: 'closureScope', label: 'Closures &\nScope', definition: 'Lexical scope and retained references.', shape: 'rect', color: 'nodePositive2' },
    { id: 'asyncAwait', label: 'Async/Await &\nPromises', definition: 'How promises and async functions work.', shape: 'rect', color: 'nodePositive2' },
    { id: 'arrayDestructuring', label: 'Array & Object\nDestructuring', definition: 'Use cases for spread/rest and unpacking data.', shape: 'rect', color: 'nodePositive2' },
  
    // Coding Challenges
    { id: 'todoFilter', label: 'Todo List /\nFilter', definition: 'Build and filter lists with state and user input.', shape: 'rect', color: 'nodePositive2' },
    { id: 'formValidation', label: 'Form\nValidation', definition: 'Controlled components with error handling.', shape: 'rect', color: 'nodePositive2' },
    { id: 'mockFetch', label: 'Mock Fetch &\nDisplay', definition: 'Simulate fetch/async logic, loading, and display states.', shape: 'rect', color: 'nodePositive2' },
  
    // Performance & Testing
    { id: 'memoization', label: 'Memoization /\nRe-renders', definition: 'Prevent unnecessary renders using memo/hooks.', shape: 'rect', color: 'nodePositive2' },
    { id: 'testingTypes', label: 'Unit vs\nIntegration\nTesting', definition: 'When to use which, and testing libraries.', shape: 'rect', color: 'nodePositive2' },
  
    // Architecture & Behavioral
    { id: 'componentSplit', label: 'Component\nSplitting', definition: 'How to refactor components for readability.', shape: 'rect', color: 'nodePositive2' },
    { id: 'tellMeTime', label: 'Tell Me About\nA Time When...', definition: 'Behavioral questions on ownership, conflict, delivery, etc.', shape: 'rect', color: 'nodePositive2' }
  ];
  
  export const links = [
    { source: 'root', target: 'reactConcepts' },
    { source: 'root', target: 'javascriptConcepts' },
    { source: 'root', target: 'codingChallenges' },
    { source: 'root', target: 'performanceAndTesting' },
    { source: 'root', target: 'architectureBehavioral' },
  
    { source: 'reactConcepts', target: 'stateVsProps' },
    { source: 'reactConcepts', target: 'hooksUsage' },
    { source: 'reactConcepts', target: 'renderingTypes' },
  
    { source: 'javascriptConcepts', target: 'closureScope' },
    { source: 'javascriptConcepts', target: 'asyncAwait' },
    { source: 'javascriptConcepts', target: 'arrayDestructuring' },
  
    { source: 'codingChallenges', target: 'todoFilter' },
    { source: 'codingChallenges', target: 'formValidation' },
    { source: 'codingChallenges', target: 'mockFetch' },
  
    { source: 'performanceAndTesting', target: 'memoization' },
    { source: 'performanceAndTesting', target: 'testingTypes' },
  
    { source: 'architectureBehavioral', target: 'componentSplit' },
    { source: 'architectureBehavioral', target: 'tellMeTime' }
  ];
  