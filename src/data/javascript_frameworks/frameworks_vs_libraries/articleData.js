const articleData = {
  introduction:
    'Frameworks and libraries are foundational concepts in JavaScript development, but they serve different purposes and offer different levels of control. Understanding the distinctions between them helps developers select the right tool for the job and structure their projects appropriately.',

  keyPrinciples: {
    title: 'Frameworks vs. Libraries — Key Differences',
    content: [
      'Inversion of Control: Frameworks call your code within a predefined lifecycle, while libraries are utilities you call yourself.',
      'Scope & Size: Frameworks provide a complete structure (e.g., routing, state, SSR), whereas libraries focus on specific tasks (e.g., API requests, utility functions).',
      'Architecture Enforcement: Frameworks enforce a particular way to structure and organize code. Libraries offer tools and leave architecture decisions up to the developer.',
      'Primary Use Case: Frameworks are intended to build entire applications. Libraries are meant to enhance parts of an application.',
    ],
  },

  antiPatterns: {
    title: 'Common Confusions and Pitfalls',
    content: [
      'Confusing Role Boundaries: Some tools blur the line (e.g., React can behave like a library or framework depending on usage).',
      'Overuse of Libraries: Importing too many libraries can lead to performance and maintenance issues.',
    ],
  },

  codeExamples: [
    {
      title: 'Framework: Angular Bootstraps Your App',
      code: `// app.module.ts — Angular framework handles app startup
  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent] // Framework bootstraps your app
  })
  export class AppModule {}`,
    },
    {
      title: 'Library: Lodash Utility Called by You',
      code: `// Lodash — You control when and how it's used
  import _ from 'lodash';
  
  const users = [
    { name: 'Alice' },
    { name: 'Bob' }
  ];
  
  const names = _.map(users, 'name'); // You manually invoke the library
  console.log(names); // ['Alice', 'Bob']`,
    },
    {
      title: 'Inversion of Control Visualized',
      code: `// Framework (e.g., Angular, SvelteKit) controls flow:
  // It decides when to run your logic
  function MyComponent() {
    // Lifecycle method called by framework
    onMount(() => console.log('mounted'));
  }
  
  // Library (e.g., D3, Chart.js)
  // You decide when to call the library:
  import * as d3 from 'd3';
  d3.select('svg').append('circle');`,
    },
    {
      title: 'Overuse of Libraries Example',
      code: `// Too many libraries can lead to bloat
  import _ from 'lodash';
  import dayjs from 'dayjs';
  import moment from 'moment'; // Why both?
  
  // Avoid redundant libraries unless justified
  console.log(_.capitalize(dayjs().format('dddd')));`,
    },
  ],

  conclusion:
    'Frameworks provide a strong foundation and structure for application development, guiding you with lifecycle methods and conventions. Libraries, on the other hand, are focused tools that you control directly. Both are powerful — the key is understanding their role and when to use each effectively.',
}

export default articleData
