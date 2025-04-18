// src/functional/mindMapData.js
import { COLORS } from '../../../theme/colors';

// -- Color Sequence
// 0. Root: 37474F
// 1. Very light green -- #98EE99
// 2. Mint green -- #B9F6CA
// 3. Almost white green -- #E8F5E9
// 4. Light red -- #FF8A80
// 5. Lighter red -- #FFB3B3
// 6. Very light red -- #FFE0E0

export const nodes = [
    // Root node
    {
      id: 'root',
      label: 'Procedural \n Programming \n in JavaScript',
      definition:
        'A style that relies on step‑by‑step instructions, organizing code into procedures (functions) that operate on shared data.',
      shape: 'roundRect',
      color: 'root',
    },
    // First-level nodes (direct children of root)
    {
      id: 'keyPrinciples',
      label: 'Key Principles',
      definition:
        'Focus on linear, sequential steps using functions and control structures to manipulate shared state.',
      shape: 'ellipse',
      color: 'nodePositive1', // 1st-level (off root)
    },
    {
      id: 'benefits',
      label: 'Benefits',
      definition:
        'Simple, straightforward code for small tasks with clear execution order and transparent state changes.',
      shape: 'ellipse',
      color: 'nodePositive1', // 1st-level (off root)
    },
    {
      id: 'cons',
      label: 'Cons',
      definition:
        'Can lead to spaghetti code, difficulty scaling, and high risk of bugs due to mutable shared state.',
      shape: 'hexagon',
      color: 'nodeNegative1', // 1st-level (off root)
    },
    {
      id: 'antipatterns',
      label: 'Anti‑Patterns',
      definition:
        'Pitfalls include excessive global variables, god functions, and tight coupling of code due to implicit ordering.',
      shape: 'hexagon',
      color: 'nodeNegative1', // 1st-level (off root)
    },
    {
      id: 'examples',
      label: 'Examples & APIs',
      definition:
        'Includes use of loops, conditionals, and direct DOM manipulation, as well as algorithm implementations in plain JavaScript.',
      shape: 'ellipse',
      color: 'nodePositive1', // 1st-level (off root)
    },
    // Second-level nodes for Key Principles
    {
      id: 'stepByStep',
      label: 'Step‑by‑Step Instructions',
      definition: 'Explicitly defines each action the computer must take in order.',
      shape: 'rect',
      color: 'nodePositive2', // 2nd-level (off nodePositive1)
    },
    {
      id: 'procedures',
      label: 'Procedures (Functions)',
      definition: 'Organizes code into functions that perform specific tasks.',
      shape: 'rect',
      color: 'nodePositive2', // 2nd-level (off nodePositive1)
    },
    {
      id: 'sharedState',
      label: 'Shared State',
      definition:
        'Uses variables that are modified by multiple procedures, often as global or higher‑scope variables.',
      shape: 'rect',
      color: 'nodePositive2', // 2nd-level (off nodePositive1)
    },
    {
      id: 'structured',
      label: 'Structured Programming',
      definition: 'Relies on loops, conditionals, and structured control flows instead of arbitrary jumps.',
      shape: 'rect',
      color: 'nodePositive2', // 2nd-level (off nodePositive1)
    },
    // Second-level nodes for Benefits
    {
      id: 'simplicity',
      label: 'Simplicity',
      definition: 'Ideal for small programs and quick scripting tasks with a clear, sequential flow.',
      shape: 'rect',
      color: 'nodePositive2', // 2nd-level (off nodePositive1)
    },
    {
      id: 'debugging',
      label: 'Easy Debugging',
      definition: 'Straight‑forward execution order makes tracing state changes simpler.',
      shape: 'rect',
      color: 'nodePositive2', // 2nd-level (off nodePositive1)
    },
    {
      id: 'lowOverhead',
      label: 'Low Overhead',
      definition:
        'Minimal abstraction means the code does exactly what is written, often with less memory or performance overhead.',
      shape: 'rect',
      color: 'nodePositive2', // 2nd-level (off nodePositive1)
    },
    {
      id: 'scripting',
      label: 'Scripting & Automation',
      definition: 'Well suited for one‑off scripts and automation tasks where a quick solution is needed.',
      shape: 'rect',
      color: 'nodePositive2', // 2nd-level (off nodePositive1)
    },
    // Second-level nodes for Cons
    {
      id: 'scalability',
      label: 'Poor Scalability',
      definition: 'Code can become unmanageable and error‑prone as programs grow larger.',
      shape: 'rect',
      color: 'nodeNegative2', // 2nd-level (off nodeNegative1)
    },
    {
      id: 'maintenance',
      label: 'Maintenance Difficulties',
      definition: 'Lack of modularity can lead to tightly coupled code that is hard to modify.',
      shape: 'rect',
      color: 'nodeNegative2', // 2nd-level (off nodeNegative1)
    },
    {
      id: 'bugRisk',
      label: 'High Bug Risk',
      definition: 'Frequent mutation of shared state increases the chance of unintended side effects and bugs.',
      shape: 'rect',
      color: 'nodeNegative2', // 2nd-level (off nodeNegative1)
    },
    {
      id: 'reusability',
      label: 'Limited Reusability',
      definition:
        'Procedures are often context‑dependent, making them harder to reuse across different parts of an application.',
      shape: 'rect',
      color: 'nodeNegative2', // 2nd-level (off nodeNegative1)
    },
    // Second-level nodes for Anti‑Patterns
    {
      id: 'globalVars',
      label: 'Excessive Global Variables',
      definition: 'Overuse of global state can lead to unpredictable interactions and bugs.',
      shape: 'rect',
      color: 'nodeNegative2', // 2nd-level (off nodeNegative1)
    },
    {
      id: 'godFunction',
      label: 'God Function',
      definition: 'One massive function that does too much, making it hard to debug and maintain.',
      shape: 'rect',
      color: 'nodeNegative2', // 2nd-level (off nodeNegative1)
    },
    {
      id: 'orderDependency',
      label: 'Implicit Order Dependency',
      definition:
        'Code relying too much on the specific sequence of operations, causing fragility if the order changes.',
      shape: 'rect',
      color: 'nodeNegative2', // 2nd-level (off nodeNegative1)
    },
    // Second-level nodes for Examples & APIs
    {
      id: 'loops',
      label: 'Loops & Conditionals',
      definition: 'Using for/while loops, if/else, and switch statements to control program flow.',
      shape: 'rect',
      color: 'nodePositive2', // 2nd-level (off nodePositive1)
    },
    {
      id: 'domProcedural',
      label: 'Direct DOM Manipulation',
      definition: 'Manipulating DOM elements via methods like document.createElement and element.appendChild.',
      shape: 'rect',
      color: 'nodePositive2', // 2nd-level (off nodePositive1)
    },
    {
      id: 'algorithmic',
      label: 'Algorithm Implementations',
      definition: 'Procedural solutions to algorithms (e.g., sorting, searching) written explicitly.',
      shape: 'rect',
      color: 'nodePositive2', // 2nd-level (off nodePositive1)
    },
    {
      id: 'nodeScripts',
      label: 'Node.js Scripting',
      definition: 'Using Node.js for writing small, linear scripts that perform file or network operations.',
      shape: 'rect',
      color: 'nodePositive2', // 2nd-level (off nodePositive1)
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
    { source: 'keyPrinciples', target: 'stepByStep' },
    { source: 'keyPrinciples', target: 'procedures' },
    { source: 'keyPrinciples', target: 'sharedState' },
    { source: 'keyPrinciples', target: 'structured' },
    // Benefits branch
    { source: 'benefits', target: 'simplicity' },
    { source: 'benefits', target: 'debugging' },
    { source: 'benefits', target: 'lowOverhead' },
    { source: 'benefits', target: 'scripting' },
    // Cons branch
    { source: 'cons', target: 'scalability' },
    { source: 'cons', target: 'maintenance' },
    { source: 'cons', target: 'bugRisk' },
    { source: 'cons', target: 'reusability' },
    // Anti‑Patterns branch
    { source: 'antipatterns', target: 'globalVars' },
    { source: 'antipatterns', target: 'godFunction' },
    { source: 'antipatterns', target: 'orderDependency' },
    // Examples branch
    { source: 'examples', target: 'loops' },
    { source: 'examples', target: 'domProcedural' },
    { source: 'examples', target: 'algorithmic' },
    { source: 'examples', target: 'nodeScripts' },
  ];