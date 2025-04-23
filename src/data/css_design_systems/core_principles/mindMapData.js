import { COLORS } from '../../../theme/colors';

export const nodes = [
      {
        id: 'root',
        label: 'Core Principles',
        shape: 'roundRect',
        color: 'root',
        definition: 'The foundational guidelines that drive consistency, scalability, and maintainability in a CSS Design System.'
      },
  
      // Level 1 Positive
      {
        id: 'consistency',
        label: 'Consistency',
        shape: 'ellipse',
        color: 'nodePositive1',
        definition: 'Ensures that styles, components, and patterns behave predictably across the application.'
      },
      {
        id: 'succinctness',
        label: 'Succinctness',
        shape: 'ellipse',
        color: 'nodePositive1',
        definition: 'Advocates for brief, readable CSS that avoids unnecessary complexity and duplication.'
      },
      {
        id: 'separation_of_concerns',
        label: 'Separation\nof Concerns',
        shape: 'ellipse',
        color: 'nodePositive1',
        definition: 'Encourages isolating styles from structure and behavior, often minimizing deep selector dependencies.'
      },
      {
        id: 'modularity',
        label: 'Modularity',
        shape: 'ellipse',
        color: 'nodePositive1',
        definition: 'Promotes building small, self-contained components that encapsulate their styling and logic.'
      },
      {
        id: 'cohesion',
        label: 'Cohesion',
        shape: 'ellipse',
        color: 'nodePositive1',
        definition: 'Components should group related styles and functionality, making them semantically meaningful.'
      },
      {
        id: 'composability',
        label: 'Composability\n& Configurability',
        shape: 'ellipse',
        color: 'nodePositive1',
        definition: 'Components should be easily reusable and configurable through clear interfaces or modifier classes.'
      },
      {
        id: 'loose_coupling',
        label: 'Loose Coupling',
        shape: 'ellipse',
        color: 'nodePositive1',
        definition: 'Components should communicate via interfaces, not alter each other’s internals or styles.'
      },
      {
        id: 'soft_encapsulation',
        label: 'Soft Encapsulation',
        shape: 'ellipse',
        color: 'nodePositive1',
        definition: 'Limits style and structure leakage from one component into another while remaining override-friendly.'
      },
      {
        id: 'documentation',
        label: 'Documentation',
        shape: 'ellipse',
        color: 'nodePositive1',
        definition: 'Clear usage guidelines, reasoning behind decisions, and examples are vital for adoption and scalability.'
      },
  
      // Level 2 Examples
      {
        id: 'modularity_examples',
        label: 'Single Responsibility,\nEncapsulation',
        shape: 'rect',
        color: 'nodePositive2',
        definition: 'Each component should only do one thing well, with styles that don’t rely on global structure.'
      },
      {
        id: 'configurable_components',
        label: 'Modifier Classes\n& Tokens',
        shape: 'rect',
        color: 'nodePositive2',
        definition: 'Customizable CSS via classes like .button--primary or CSS variables like --btn-padding.'
      },
  
      // Level 3 Granular Concepts
      {
        id: 'component_flexibility',
        label: 'Theme-Friendly\nArchitecture',
        shape: 'diamond',
        color: 'nodePositive3',
        definition: 'Using CSS variables enables easy theming without rewriting component logic.'
      },
      {
        id: 'encapsulation_techniques',
        label: 'Scoped Styles,\nCSS Modules',
        shape: 'diamond',
        color: 'nodePositive3',
        definition: 'Use techniques like CSS Modules to prevent styles from bleeding into unrelated parts of the UI.'
      }
    ];
    export const links = [
      { source: 'root', target: 'consistency' },
      { source: 'root', target: 'succinctness' },
      { source: 'root', target: 'separation_of_concerns' },
      { source: 'root', target: 'modularity' },
      { source: 'root', target: 'cohesion' },
      { source: 'root', target: 'composability' },
      { source: 'root', target: 'loose_coupling' },
      { source: 'root', target: 'soft_encapsulation' },
      { source: 'root', target: 'documentation' },
  
      // Level 2
      { source: 'modularity', target: 'modularity_examples' },
      { source: 'composability', target: 'configurable_components' },
  
      // Level 3
      { source: 'configurable_components', target: 'component_flexibility' },
      { source: 'soft_encapsulation', target: 'encapsulation_techniques' }
    ]
  
  
  