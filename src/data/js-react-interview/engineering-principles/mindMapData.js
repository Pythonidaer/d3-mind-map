import { COLORS } from '../../../theme/colors';

export const nodes = [
    {
      id: 'root',
      label: 'Frontend\nEngineering Principles',
      definition: 'Core philosophies and values that guide frontend software development, such as simplicity, reusability, and performance.',
      shape: 'roundRect',
      color: 'root'
    },
  
    // Top-level principles
    {
      id: 'clarity',
      label: 'Clarity &\nReadability',
      definition: 'Write code that is easy to understand, maintain, and reason about.',
      shape: 'ellipse',
      color: 'veryLightGreen'
    },
    {
      id: 'reusability',
      label: 'Reusability &\nDRY',
      definition: 'Avoid duplication by abstracting shared logic into components or utilities.',
      shape: 'ellipse',
      color: 'veryLightGreen'
    },
    {
      id: 'performance',
      label: 'Performance &\nEfficiency',
      definition: 'Strive for fast, responsive applications by optimizing rendering and reducing overhead.',
      shape: 'ellipse',
      color: 'veryLightGreen'
    },
    {
      id: 'accessibility',
      label: 'Accessibility\n(A11y)',
      definition: 'Build inclusive UIs that work for everyone, including users with disabilities.',
      shape: 'ellipse',
      color: 'veryLightGreen'
    },
    {
      id: 'simplicity',
      label: 'Simplicity &\nYAGNI',
      definition: 'Favor simple solutions and avoid overengineering or premature features.',
      shape: 'ellipse',
      color: 'veryLightGreen'
    },
    {
      id: 'scalability',
      label: 'Scalability &\nModularity',
      definition: 'Design your codebase to support growth through modular structure and clean boundaries.',
      shape: 'ellipse',
      color: 'veryLightGreen'
    },
    {
      id: 'testing',
      label: 'Testing &\nReliability',
      definition: 'Write tests to catch regressions and ensure reliability under change.',
      shape: 'ellipse',
      color: 'veryLightGreen'
    },
    {
      id: 'collaboration',
      label: 'Teamwork &\nCollaboration',
      definition: 'Communicate clearly, review thoroughly, and align with team decisions.',
      shape: 'ellipse',
      color: 'veryLightGreen'
    },
  
    // Subpoints for key nodes
    { id: 'naming', label: 'Clear\nNaming', definition: 'Use descriptive, consistent names for variables, components, and files.', shape: 'rect', color: 'mintGreen' },
    { id: 'smallFunctions', label: 'Small\nFunctions', definition: 'Break logic into small, focused units with one responsibility.', shape: 'rect', color: 'mintGreen' },
    { id: 'comments', label: 'Helpful\nComments', definition: 'Explain why, not what — especially around complex logic.', shape: 'rect', color: 'mintGreen' },
  
    { id: 'sharedHooks', label: 'Shared\nHooks / Utils', definition: 'Extract reusable logic into custom hooks or utility modules.', shape: 'rect', color: 'mintGreen' },
    { id: 'componentLibrary', label: 'Component\nLibraries', definition: 'Build or use shared UI components for consistent interfaces.', shape: 'rect', color: 'mintGreen' },
  
    { id: 'lazyLoad', label: 'Lazy\nLoading', definition: 'Defer component loading with React.lazy or dynamic import().', shape: 'rect', color: 'mintGreen' },
    { id: 'virtualization', label: 'List\nVirtualization', definition: 'Render only visible list items to improve large list performance.', shape: 'rect', color: 'mintGreen' },
  
    { id: 'aria', label: 'Use ARIA\nProperly', definition: 'Only use ARIA roles when no native HTML semantics exist.', shape: 'rect', color: 'mintGreen' },
    { id: 'keyboardSupport', label: 'Keyboard\nSupport', definition: 'Make sure all interactive elements are keyboard-accessible.', shape: 'rect', color: 'mintGreen' },
  
    { id: 'modularStructure', label: 'Modular\nStructure', definition: 'Use folders, files, and boundaries that reflect clear responsibilities.', shape: 'rect', color: 'mintGreen' },
    { id: 'looseCoupling', label: 'Loose\nCoupling', definition: 'Avoid tightly coupling modules so that features can evolve independently.', shape: 'rect', color: 'mintGreen' },
  
    { id: 'unitTests', label: 'Unit &\nIntegration Tests', definition: 'Validate individual functions and component behavior together.', shape: 'rect', color: 'mintGreen' },
    { id: 'testEdgeCases', label: 'Test Edge\nCases', definition: 'Always test null, error, and boundary conditions.', shape: 'rect', color: 'mintGreen' },
  
    { id: 'codeReviews', label: 'Code\nReviews', definition: 'Review pull requests for correctness, clarity, and consistency.', shape: 'rect', color: 'mintGreen' },
    { id: 'pairProgramming', label: 'Pair\nProgramming', definition: 'Collaborate live to solve tricky problems and share knowledge.', shape: 'rect', color: 'mintGreen' }
  ];
  
  export const links = [
    { source: 'root', target: 'clarity' },
    { source: 'root', target: 'reusability' },
    { source: 'root', target: 'performance' },
    { source: 'root', target: 'accessibility' },
    { source: 'root', target: 'simplicity' },
    { source: 'root', target: 'scalability' },
    { source: 'root', target: 'testing' },
    { source: 'root', target: 'collaboration' },
  
    { source: 'clarity', target: 'naming' },
    { source: 'clarity', target: 'smallFunctions' },
    { source: 'clarity', target: 'comments' },
  
    { source: 'reusability', target: 'sharedHooks' },
    { source: 'reusability', target: 'componentLibrary' },
  
    { source: 'performance', target: 'lazyLoad' },
    { source: 'performance', target: 'virtualization' },
  
    { source: 'accessibility', target: 'aria' },
    { source: 'accessibility', target: 'keyboardSupport' },
  
    { source: 'scalability', target: 'modularStructure' },
    { source: 'scalability', target: 'looseCoupling' },
  
    { source: 'testing', target: 'unitTests' },
    { source: 'testing', target: 'testEdgeCases' },
  
    { source: 'collaboration', target: 'codeReviews' },
    { source: 'collaboration', target: 'pairProgramming' }
  ];