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
      label: 'Imperative \n Programming \n in JavaScript',
      definition:
        'A style where you explicitly define every step and state change, controlling exactly how tasks are executed.',
      shape: 'roundRect',
      color: 'root',
    },
    // First-level nodes (direct children of root)
    {
      id: 'keyPrinciples',
      label: 'Key Principles',
      definition:
        'Focuses on explicit instructions, mutable state, and precise control over program flow and data changes.',
      shape: 'ellipse',
      color: 'veryLightGreen', // 1st-level (off root),
    },
    {
      id: 'benefits',
      label: 'Benefits',
      definition:
        'Provides precise control, easy step‑by‑step debugging, and a familiar, transparent mapping to how computers execute instructions.',
      shape: 'ellipse',
      color: 'veryLightGreen', // 1st-level (off root),
    },
    {
      id: 'cons',
      label: 'Cons',
      definition:
        'Can become verbose, complex, and error‑prone due to heavy mutation and intricate control flows.',
      shape: 'hexagon',
      color: 'lightRed', // 1st-level (off root)
    },
    {
      id: 'antipatterns',
      label: 'Anti‑Patterns',
      definition:
        'Pitfalls include spaghetti code, excessive mutability, tight coupling, repetitive code, and ignoring return values.',
      shape: 'hexagon',
      color: 'lightRed', // 1st-level (off root)
    },
    {
      id: 'examples',
      label: 'Examples & APIs',
      definition:
        'Includes explicit loops, in‑place array methods, direct DOM manipulation, async/await control, and low‑level binary operations.',
      shape: 'ellipse',
      color: 'veryLightGreen', // 1st-level (off root),
    },
    // Second-level nodes for Key Principles
    {
      id: 'explicitInstructions',
      label: 'Explicit Instructions',
      definition: 'Each operation is clearly stated in sequence; nothing is left implicit.',
      shape: 'rect',
      color: 'mintGreen', // 2nd-level (off veryLightGreen),
    },
    {
      id: 'mutableState',
      label: 'Mutable State',
      definition: 'Variables and data structures are changed in place to reflect progress.',
      shape: 'rect',
      color: 'mintGreen', // 2nd-level (off veryLightGreen),
    },
    {
      id: 'sequencing',
      label: 'Sequencing & Order',
      definition: 'The order of commands is critical as each step directly affects subsequent operations.',
      shape: 'rect',
      color: 'mintGreen', // 2nd-level (off veryLightGreen),
    },
    {
      id: 'proceduralOOP',
      label: 'Procedural/OOP Inclusion',
      definition: 'Imperative style underlies both procedural and OOP approaches by detailing how operations occur.',
      shape: 'rect',
      color: 'mintGreen', // 2nd-level (off veryLightGreen),
    },
    // Second-level nodes for Benefits
    {
      id: 'preciseControl',
      label: 'Precise Control',
      definition: 'Allows fine‑tuning of performance and exact behavior through detailed commands.',
      shape: 'rect',
      color: 'mintGreen', // 2nd-level (off veryLightGreen),
    },
    {
      id: 'stepwiseDebugging',
      label: 'Step‑by‑Step Debugging',
      definition: 'Straightforward execution order makes it easier to trace how state changes over time.',
      shape: 'rect',
      color: 'mintGreen', // 2nd-level (off veryLightGreen),
    },
    {
      id: 'familiarity',
      label: 'Familiarity',
      definition: 'Matches the natural “do this, then that” way many programmers initially learn to code.',
      shape: 'rect',
      color: 'mintGreen', // 2nd-level (off veryLightGreen),
    },
    {
      id: 'transparency',
      label: 'Transparency',
      definition: 'State and operations are explicit, making the underlying process clear.',
      shape: 'rect',
      color: 'mintGreen', // 2nd-level (off veryLightGreen),
    },
    // Second-level nodes for Cons
    {
      id: 'verbosity',
      label: 'Verbosity & Complexity',
      definition: 'The need to detail every step can lead to large amounts of boilerplate code.',
      shape: 'rect',
      color: 'lighterRed', // 2nd-level (off lightRed),
    },
    {
      id: 'scalabilityChallenges',
      label: 'Scalability Challenges',
      definition: 'Complex, tightly coupled code can become difficult to maintain as the application grows.',
      shape: 'rect',
      color: 'lighterRed', // 2nd-level (off lightRed),
    },
    {
      id: 'sideEffectBugs',
      label: 'Side‑Effect Bugs',
      definition: 'Frequent mutation increases the chance of unintended interactions and bugs.',
      shape: 'rect',
      color: 'lighterRed', // 2nd-level (off lightRed),
    },
    {
      id: 'repetitiveCode',
      label: 'Repetitive Code',
      definition: 'Without abstraction, similar operations are repeated, making maintenance harder.',
      shape: 'rect',
      color: 'lighterRed', // 2nd-level (off lightRed),
    },
    // Second-level nodes for Anti‑Patterns
    {
      id: 'spaghettiCode',
      label: 'Spaghetti Code',
      definition: 'Unstructured, nested control flows that are hard to follow and debug.',
      shape: 'rect',
      color: 'lighterRed', // 2nd-level (off lightRed),
    },
    {
      id: 'excessiveMutability',
      label: 'Excessive Mutability',
      definition: 'Over‑reliance on in‑place modifications leads to hidden bugs and unpredictable behavior.',
      shape: 'rect',
      color: 'lighterRed', // 2nd-level (off lightRed),
    },
    {
      id: 'tightCoupling',
      label: 'Tight Coupling',
      definition: 'Components become interdependent, making isolated changes difficult.',
      shape: 'rect',
      color: 'lighterRed', // 2nd-level (off lightRed),
    },
    {
      id: 'ignoredReturns',
      label: 'Ignoring Return Values',
      definition: 'Failing to check function outputs can cause errors to propagate unnoticed.',
      shape: 'rect',
      color: 'lighterRed', // 2nd-level (off lightRed),
    },
    // Second-level nodes for Examples & APIs
    {
      id: 'loopsImperative',
      label: 'Explicit Loops',
      definition: 'Using for/while loops and direct variable assignments to control flow.',
      shape: 'rect',
      color: 'mintGreen', // 2nd-level (off veryLightGreen),
    },
    {
      id: 'inPlaceMethods',
      label: 'In‑Place Array Methods',
      definition: 'Methods like .sort(), .push(), and .splice() that modify arrays directly.',
      shape: 'rect',
      color: 'mintGreen', // 2nd-level (off veryLightGreen),
    },
    {
      id: 'domImperative',
      label: 'Direct DOM API',
      definition: 'Using native DOM methods (e.g., element.setAttribute, appendChild) to manipulate the document.',
      shape: 'rect',
      color: 'mintGreen', // 2nd-level (off veryLightGreen),
    },
    {
      id: 'asyncAwait',
      label: 'async/await',
      definition: 'Writing asynchronous code in a step‑by‑step manner that waits for each operation.',
      shape: 'rect',
      color: 'mintGreen', // 2nd-level (off veryLightGreen),
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
    { source: 'keyPrinciples', target: 'explicitInstructions' },
    { source: 'keyPrinciples', target: 'mutableState' },
    { source: 'keyPrinciples', target: 'sequencing' },
    { source: 'keyPrinciples', target: 'proceduralOOP' },
    // Benefits branch
    { source: 'benefits', target: 'preciseControl' },
    { source: 'benefits', target: 'stepwiseDebugging' },
    { source: 'benefits', target: 'familiarity' },
    { source: 'benefits', target: 'transparency' },
    // Cons branch
    { source: 'cons', target: 'verbosity' },
    { source: 'cons', target: 'scalabilityChallenges' },
    { source: 'cons', target: 'sideEffectBugs' },
    { source: 'cons', target: 'repetitiveCode' },
    // Anti‑Patterns branch
    { source: 'antipatterns', target: 'spaghettiCode' },
    { source: 'antipatterns', target: 'excessiveMutability' },
    { source: 'antipatterns', target: 'tightCoupling' },
    { source: 'antipatterns', target: 'ignoredReturns' },
    // Examples branch
    { source: 'examples', target: 'loopsImperative' },
    { source: 'examples', target: 'inPlaceMethods' },
    { source: 'examples', target: 'domImperative' },
    { source: 'examples', target: 'asyncAwait' },
  ];