const articleData = {
  introduction:
    'JavaScript frameworks adopt a variety of architectural styles and programming paradigms to structure applications, define data flow, and optimize performance. This section covers foundational patterns like MVC, component-based architecture, reactive programming, and newer compile-time models. It also highlights potential pitfalls in over-architecting simple projects.',

  keyPrinciples: {
    title: 'Core Architectures & Paradigms',
    content: [
      'MVC / MVVM: Separates concerns between data, logic, and UI for improved testability and maintainability.',
      'Component-Based Architecture: Encourages encapsulation and reuse through independent UI components.',
      'Declarative Programming: UI is expressed as a function of state, improving readability and reducing side effects.',
      'Reactive Programming: Changes in application state trigger automatic updates in the UI.',
      'Compiled Frameworks: Pre-compilation optimizes performance by removing unnecessary runtime overhead.',
    ],
  },

  antiPatterns: {
    title: 'Architectural Anti-Patterns',
    content: [
      'Overengineering: Introducing abstractions, patterns, or layers too early in small projects adds complexity without benefit.',
      'State Sync Hell: Maintaining the same data in multiple places manually leads to bugs and duplicated logic.',
    ],
  },

  codeExamples: [
    // MVC / MVVM
    {
      title: 'Angular MVVM Example',
      code: `// Angular uses MVVM where the component (ViewModel) binds data to the template (View)
  @Component({
    selector: 'app-greeting',
    template: '<h1>Hello {{ name }}</h1>' // Template (View) dynamically reflects the bound name
  })
  export class GreetingComponent {
    name = 'World'; // Component logic (ViewModel)
  }`,
    },

    // Component-based
    {
      title: 'React Component Composition',
      code: `// Small, reusable UI pieces composed into larger interfaces
  function Button({ children }) {
    return <button>{children}</button>; // Child content is injected here
  }
  
  function Toolbar() {
    return (
      <div>
        <Button>Save</Button>
        <Button>Cancel</Button>
      </div>
    ); // Toolbar composes two Button components
  }`,
    },

    // Declarative
    {
      title: 'UI as a Function of State (React)',
      code: `// Function returns UI based on current props/state
  function Greeting({ name }) {
    return <h1>Hello, {name}</h1>; // Output depends only on "name" value
  }`,
    },

    // Reactive
    {
      title: 'SolidJS Signals Example',
      code: `// Fine-grained reactivity using "signals"
  import { createSignal } from 'solid-js';
  
  const [count, setCount] = createSignal(0); // create reactive signal
  
  function Counter() {
    return <button onClick={() => setCount(count() + 1)}>
      Count: {count()} // UI updates when signal value changes
    </button>;
  }`,
    },

    // Compiled
    {
      title: 'Svelte Compile-Time Optimized Button',
      code: `<script>
    let count = 0; // Reactive variable tracked at compile time
  </script>
  
  <!-- Svelte compiles this to vanilla JS with no runtime framework -->
  <button on:click={() => count++}>Count: {count}</button>`,
    },

    // Anti-patterns
    {
      title: 'Premature Abstractions (Anti-Pattern)',
      code: `// Abstracting features too early creates complexity
  function useDataFetcher(apiPath) {
    // Introduces indirection when direct logic would suffice
  }`,
    },
    {
      title: 'Redundant State (Anti-Pattern)',
      code: `// Keeping duplicated state increases bug risk
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [summaryData, setSummaryData] = useState({ name: '', email: '' });
  // Manual syncing needed to keep both in sync
  `,
    },
  ],

  conclusion:
    'A strong grasp of architectural models empowers developers to build systems that scale well and remain maintainable. By recognizing the benefits—and limitations—of each paradigm, you can make informed decisions that match the scope and complexity of your project.',
}

export default articleData
