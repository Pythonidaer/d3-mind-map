import { COLORS } from '../../../theme/colors';

export const nodes = [
    // Root node
    {
      id: 'root',
      label: 'Object‑Oriented \n Programming \n in JavaScript',
      definition:
        'A paradigm that organizes code into objects and classes, emphasizing encapsulation, inheritance, polymorphism, and abstraction to model real‑world entities.',
      shape: 'roundRect',
      color: 'root',
    },
    // First-level nodes (direct children of root)
    {
      id: 'keyPrinciples',
      label: 'Key Principles',
      definition:
        'Core concepts include encapsulation, inheritance, polymorphism, abstraction, and use of classes/prototypes to structure code.',
      shape: 'ellipse',
      color: 'nodePositive1',
    },
    {
      id: 'benefits',
      label: 'Benefits',
      definition:
        'OOP enables intuitive modeling, modularity, reusability, and maintainability by bundling state and behavior into objects.',
      shape: 'ellipse',
      color: 'nodePositive1',
    },
    {
      id: 'cons',
      label: 'Cons',
      definition:
        'OOP can be verbose for simple tasks, prone to tight coupling, and sometimes less performant or harder to debug if misused.',
      shape: 'hexagon',
      color: 'nodeNegative1',
    },
    {
      id: 'antipatterns',
      label: 'Anti‑Patterns',
      definition:
        'Common pitfalls include god objects, excessive inheritance, misusing "this", overusing global singletons, and modifying built‑in prototypes.',
      shape: 'hexagon',
      color: 'nodeNegative1',
    },
    {
      id: 'examples',
      label: 'Examples & APIs',
      definition:
        'JavaScript‑specific examples include ES6 classes, prototypal inheritance, closure‑based modules, and OOP‑based frameworks.',
      shape: 'ellipse',
      color: 'nodePositive1',
    },
    // Second-level nodes for Key Principles
    {
      id: 'encapsulation',
      label: 'Encapsulation',
      definition:
        'Bundling data with methods; exposing a public interface while hiding internal details.',
      shape: 'rect',
      color: 'nodePositive2',
    },
    {
      id: 'inheritance',
      label: 'Inheritance',
      definition:
        'Creating new classes or objects by extending existing ones to promote code reuse.',
      shape: 'rect',
      color: 'nodePositive2',
    },
    {
      id: 'polymorphism',
      label: 'Polymorphism',
      definition:
        'Allowing objects of different types to be used interchangeably via a common interface.',
      shape: 'rect',
      color: 'nodePositive2',
    },
    {
      id: 'abstraction',
      label: 'Abstraction',
      definition: 'Hiding complex implementation details behind simpler interfaces.',
      shape: 'rect',
      color: 'nodePositive2',
    },
    {
      id: 'classesPrototypes',
      label: 'Classes & Prototypes',
      definition:
        'Using ES6 classes for syntactic sugar over JavaScript’s prototypal inheritance model.',
      shape: 'rect',
      color: 'nodePositive2',
    },
    // Third-level node under Inheritance
    {
      id: 'prototypalChain',
      label: 'Prototypal Chain',
      definition:
        'Leveraging JavaScript’s prototype-based inheritance for dynamic object extension.',
      shape: 'diamond',
      color: 'nodePositive3',
    },
    // Second-level nodes for Benefits
    {
      id: 'intuitiveModeling',
      label: 'Intuitive Modeling',
      definition: 'Models real‑world entities naturally through objects and classes.',
      shape: 'rect',
      color: 'nodePositive2',
    },
    {
      id: 'modularity',
      label: 'Modularity & Reusability',
      definition:
        'Encapsulation and inheritance allow code to be organized into discrete, reusable units.',
      shape: 'rect',
      color: 'nodePositive2',
    },
    {
      id: 'maintainability',
      label: 'Maintainability',
      definition:
        'Changes to an object’s internals do not affect external code as long as its interface remains consistent.',
      shape: 'rect',
      color: 'nodePositive2',
    },
    {
      id: 'codeOrganization',
      label: 'Code Organization',
      definition: 'Classes and objects help break down complex systems into manageable components.',
      shape: 'rect',
      color: 'nodePositive2',
    },
    // Second-level nodes for Cons
    {
      id: 'verboseComplexity',
      label: 'Verbosity/Complexity',
      definition: 'For small tasks, the overhead of defining classes and objects can be overkill.',
      shape: 'rect',
      color: 'nodeNegative2',
    },
    {
      id: 'tightCoupling',
      label: 'Tight Coupling',
      definition: 'Inheritance can create strong dependencies between classes, making changes fragile.',
      shape: 'rect',
      color: 'nodeNegative2',
    },
    {
      id: 'performanceOverhead',
      label: 'Performance Overhead',
      definition: 'Dynamic dispatch and object creation may incur extra performance costs.',
      shape: 'rect',
      color: 'nodeNegative2',
    },
    {
      id: 'learningCurve',
      label: 'Learning Curve & Misuse',
      definition: 'Misunderstanding prototypes or “this” can lead to bugs and misuse of the paradigm.',
      shape: 'rect',
      color: 'nodeNegative2',
    },
    // Second-level nodes for Anti‑Patterns
    {
      id: 'godObjects',
      label: 'God Objects',
      definition: 'Objects that take on too many responsibilities, reducing clarity and maintainability.',
      shape: 'rect',
      color: 'nodeNegative2',
    },
    {
      id: 'excessiveInheritance',
      label: 'Excessive Inheritance',
      definition: 'Deep inheritance hierarchies can lead to brittle, hard‑to‑maintain code.',
      shape: 'rect',
      color: 'nodeNegative2',
    },
    {
      id: 'misusingThis',
      label: 'Misusing "this"',
      definition: 'Losing the correct context in methods can lead to unexpected behavior.',
      shape: 'rect',
      color: 'nodeNegative2',
    },
    {
      id: 'globalState',
      label: 'Global State/Singletons',
      definition: 'Overuse of global objects or singletons undermines encapsulation and increases coupling.',
      shape: 'rect',
      color: 'nodeNegative2',
    },
    {
      id: 'modifyingPrototypes',
      label: 'Modifying Prototypes',
      definition:
        'Changing built‑in prototypes can cause conflicts and unexpected behavior across the application.',
      shape: 'rect',
      color: 'nodeNegative2',
    },
    // Second-level nodes for Examples & APIs
    {
      id: 'es6Classes',
      label: 'ES6 Classes',
      definition:
        'Modern syntax for defining classes and inheritance (using "class", "constructor", "extends", "super").',
      shape: 'rect',
      color: 'nodePositive2',
    },
    {
      id: 'prototypalInheritance',
      label: 'Prototypal Inheritance',
      definition:
        'Directly linking objects via prototypes using Object.create() or function constructors.',
      shape: 'rect',
      color: 'nodePositive2',
    },
    {
      id: 'closuresModules',
      label: 'Encapsulation via Closures',
      definition: 'Module pattern using closures to hide private data while exposing a public API.',
      shape: 'rect',
      color: 'nodePositive2',
    },
    {
      id: 'frameworksOOP',
      label: 'Frameworks & Tools',
      definition:
        'OOP is integral in frameworks like Angular or in libraries such as TypeScript for structured, class‑based coding.',
      shape: 'rect',
      color: 'nodePositive2',
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
    { source: 'keyPrinciples', target: 'encapsulation' },
    { source: 'keyPrinciples', target: 'inheritance' },
    { source: 'keyPrinciples', target: 'polymorphism' },
    { source: 'keyPrinciples', target: 'abstraction' },
    { source: 'keyPrinciples', target: 'classesPrototypes' },
    // Inheritance third-level child
    { source: 'inheritance', target: 'prototypalChain' },
    // Benefits branch
    { source: 'benefits', target: 'intuitiveModeling' },
    { source: 'benefits', target: 'modularity' },
    { source: 'benefits', target: 'maintainability' },
    { source: 'benefits', target: 'codeOrganization' },
    // Cons branch
    { source: 'cons', target: 'verboseComplexity' },
    { source: 'cons', target: 'tightCoupling' },
    { source: 'cons', target: 'performanceOverhead' },
    { source: 'cons', target: 'learningCurve' },
    // Anti‑Patterns branch
    { source: 'antipatterns', target: 'godObjects' },
    { source: 'antipatterns', target: 'excessiveInheritance' },
    { source: 'antipatterns', target: 'misusingThis' },
    { source: 'antipatterns', target: 'globalState' },
    { source: 'antipatterns', target: 'modifyingPrototypes' },
    // Examples branch
    { source: 'examples', target: 'es6Classes' },
    { source: 'examples', target: 'prototypalInheritance' },
    { source: 'examples', target: 'closuresModules' },
    { source: 'examples', target: 'frameworksOOP' },
  ];