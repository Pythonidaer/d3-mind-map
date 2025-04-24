const articleData = {
  introduction:
    'In this section, we explore the fundamental principles that underpin modern JavaScript frameworks—defining what a framework provides, how it orchestrates application flow, and the patterns that guide project structure and component design.',

  keyPrinciples: {
    title: 'Core Concepts Overview',
    content: [
      'Framework Definition: A reusable scaffold offering components, lifecycle hooks, and enforced conventions.',
      'Inversion of Control: The framework drives the application loop and invokes user callbacks at defined moments.',
      'Opinionated Structure: Prescribed file layouts and naming conventions enforce consistency.',
      'Component Architecture: Encapsulating UI into modular, standalone units.',
      'Reactive Data Binding: Automatic synchronization between data and UI.',
      'Templating: Declarative syntax (JSX, HTML templates) for defining view structure.',
      'State Management: Strategies to store, read, and update application state.',
      'Routing: Client-side navigation and view composition for SPAs.',
    ],
  },

  antiPatterns: {
    title: 'Anti-Pattern: Tight Coupling',
    content: [
      'Embedding framework-specific APIs directly into business logic makes migration or testing difficult.',
    ],
  },

  codeExamples: [
    {
      title: 'Framework Definition — Component Skeleton',
      code: `// React component skeleton
  import React from 'react';
  
  class MyComponent extends React.Component {
    render() {
      return <div>My Framework Component</div>;
    }
  }
  
  export default MyComponent;`,
    },
    {
      title: 'Inversion of Control — React useEffect',
      code: `import React, { useEffect } from 'react';
  
  function App() {
    useEffect(() => {
      // Framework invokes this on mount
      console.log('App mounted');
    }, []);
    return <div>Hello</div>;
  }`,
    },
    {
      title: 'Opinionated Structure — Project Layout Example',
      code: `// Vue CLI default structure
  src/
  ├── assets/
  ├── components/
  │   ├── Header.vue
  │   └── Footer.vue
  ├── router/
  │   └── index.js
  └── App.vue`,
    },
    {
      title: 'Component Architecture — Reusable Button',
      code: `// Svelte button component
  <script>
    export let onClick;
  </script>
  
  <button on:click={onClick}>
    <slot>Click Me</slot>
  </button>`,
    },
    {
      title: 'Reactive Data Binding — Vue v-model',
      code: `<template>
    <input v-model="message" placeholder="Type..." />
    <p>{{ message }}</p>
  </template>
  
  <script>
  export default {
    data() {
      return { message: '' };
    }
  };
  </script>`,
    },
    {
      title: 'Templating — JSX vs HTML Template',
      code: `// JSX (React)
  return <h1>{title}</h1>;
  
  // Vue Template
  // <h1>{{ title }}</h1>`,
    },
    {
      title: 'State Management — React useState',
      code: `import React, { useState } from 'react';
  
  function Counter() {
    const [count, setCount] = useState(0);
    return (
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
    );
  }`,
    },
    {
      title: 'Routing — React Router Example',
      code: `import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
  
  function App() {
    return (
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  }`,
    },
    {
      title: 'Tight Coupling — Direct DOM Access',
      code: `// Anti-pattern: bypassing framework
  function updateTitle(newTitle) {
    document.querySelector('#app-title').textContent = newTitle;
  }`,
    },
  ],

  conclusion:
    'These core concepts form the building blocks of any JavaScript framework. Mastering them ensures you can evaluate, adopt, and work effectively with frameworks in diverse projects.',
}

export default articleData
