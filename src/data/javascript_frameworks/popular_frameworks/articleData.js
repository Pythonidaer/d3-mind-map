const articleData = {
  introduction:
    'This article explores the most popular JavaScript frameworks, highlighting their unique characteristics, origins, and why they might be favored for different types of projects. By understanding their histories and design goals, developers can better match tools to their specific use cases.',

  keyPrinciples: {
    title: 'Major Frameworks & Their Strengths',
    content: [
      'React.js (2013, Facebook): Built to solve view rendering in large applications. Prioritizes UI as a function of state, component reuse, and a powerful ecosystem. React is favored for flexibility, large community, and long-term corporate support.',
      'Vue.js (2014, Evan You): Created as a lightweight alternative to Angular with simpler APIs. Designed for gradual adoption and clean syntax. Vue is loved for its clarity, template-driven approach, and excellent documentation.',
      'Angular (2016 rewrite, Google): A complete reimagining of AngularJS. Solves enterprise-scale complexity with strong typing (TypeScript), opinionated structure, and built-in DI, routing, and state. Ideal for large, cohesive teams.',
      'Svelte (2016, Rich Harris): Built to remove the virtual DOM and compile components to optimized vanilla JS. It’s known for incredible performance, minimal runtime, and simplicity in reactivity. Ideal for performance-critical apps or developer joy.',
      'Ember.js (2011, Yehuda Katz and the Ember core team): Born from the need to simplify large web apps with convention-over-configuration. Best suited for long-lived projects where team consistency and strong conventions matter.',
      'SolidJS (2020, Ryan Carniato): Created to push the limits of fine-grained reactivity without a virtual DOM. Solid offers React-like DX with better performance and less abstraction. Excellent for highly interactive UIs with tight DOM bindings.',
    ],
  },

  antiPatterns: {
    title: 'Framework Misuse Patterns',
    content: [
      'Using a full SPA framework (like Angular or React) for a content-only marketing site adds unnecessary complexity.',
      'Choosing based solely on trends rather than project needs or team expertise leads to mismatches in architecture and maintainability.',
    ],
  },

  codeExamples: [
    {
      title: 'React Component with State',
      code: `import { useState } from 'react';
  
  function Counter() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
  }`,
    },
    {
      title: 'React JSX with Props',
      code: `function Greeting({ name }) {
    return <h1>Hello, {name}!</h1>;
  }`,
    },
    {
      title: 'Vue Template with Reactive Data',
      code: `<template>
    <button @click="count++">Count: {{ count }}</button>
  </template>
  
  <script>
  export default {
    data() {
      return { count: 0 };
    }
  }
  </script>`,
    },
    {
      title: 'Vue Single File Component with Props',
      code: `<template>
    <p>{{ message }}</p>
  </template>
  
  <script>
  export default {
    props: ['message']
  }
  </script>`,
    },
    {
      title: 'Svelte Compiler-Based Example',
      code: `<script>
    let count = 0;
  </script>
  
  <button on:click={() => count++}>Count: {count}</button>`,
    },
    {
      title: 'Svelte with Props',
      code: `<script>
    export let name;
  </script>
  
  <h1>Hello {name}!</h1>`,
    },
    {
      title: 'Angular Component with Two-Way Binding',
      code: `// app.component.ts
  @Component({
    selector: 'app-root',
    template: '<input [(ngModel)]="name"> {{ name }}'
  })
  export class AppComponent {
    name = 'Angular';
  }`,
    },
    {
      title: 'Angular Service Injection',
      code: `@Injectable({ providedIn: 'root' })
  export class LoggerService {
    log(msg: string) { console.log(msg); }
  }`,
    },
    {
      title: 'SolidJS Signal-Based Counter',
      code: `import { createSignal } from 'solid-js';
  
  function Counter() {
    const [count, setCount] = createSignal(0);
    return <button onClick={() => setCount(count() + 1)}>Count: {count()}</button>;
  }`,
    },
    {
      title: 'SolidJS Props and JSX',
      code: `function Greeting(props) {
    return <h1>Hello {props.name}</h1>;
  }`,
    },
  ],

  conclusion:
    'Each framework emerged to solve distinct pain points—performance, developer experience, structure, or scalability. Choosing the right one requires aligning its strengths with your project’s goals, your team’s skills, and the scale of your application. There’s no “best” framework universally—only the most appropriate for your context.',
}

export default articleData
