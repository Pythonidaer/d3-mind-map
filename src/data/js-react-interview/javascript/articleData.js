const javascriptArticleData = {
    introduction: `
      JavaScript is the language of the web. Understanding its foundations — from variables, functions, and objects to async/await, DOM events, and error handling — is essential for building modern web apps. This guide includes concepts and practical code examples to help reinforce key interview-ready patterns.
    `,
  
    keyPrinciples: {
      title: "Key JavaScript Principles",
      content: [
        "**Dynamic Typing:** Variables can hold any type, and types are resolved at runtime.",
        "**First-Class Functions:** Functions are treated like values and can be assigned, passed, or returned.",
        "**Closures and Lexical Scope:** Functions retain access to variables from their outer scope.",
        "**Asynchronous Execution:** JavaScript uses the event loop to handle async tasks via callbacks, promises, and async/await.",
        "**Single-Threaded Non-Blocking Model:** Despite being single-threaded, JavaScript handles I/O efficiently through non-blocking patterns."
      ]
    },
  
    codeExamples: [
      {
        title: "Scope & Closures",
        code: `
          function outer() {
            let count = 0;
            return function inner() {
              count++;
              return count;
            };
          }
          const counter = outer();
          console.log(counter()); // 1
          console.log(counter()); // 2
        `
      },
      {
        title: "Hoisting",
        code: `
          console.log(a); // undefined due to hoisting
          var a = 5;
  
          // Function hoisting
          greet(); // 'Hello'
          function greet() {
            console.log('Hello');
          }
        `
      },
      {
        title: "'this' Keyword",
        code: `
          const person = {
            name: 'Alice',
            greet() {
              console.log('Hi, I\'m ' + this.name);
            }
          };
          person.greet(); // 'Hi, I\'m Alice'
        `
      },
      {
        title: "Arrow Functions",
        code: `
          const add = (a, b) => a + b;
          console.log(add(2, 3)); // 5
        `
      },
      {
        title: "Callback Functions",
        code: `
          function processUserInput(callback) {
            const name = 'Bob';
            callback(name);
          }
          processUserInput(name => console.log('Hello ' + name));
        `
      },
      {
        title: "IIFE",
        code: `
          (function() {
            console.log('Executed immediately');
          })();
        `
      },
      {
        title: "Promises",
        code: `
          const promise = new Promise(resolve => {
            setTimeout(() => resolve('Done!'), 1000);
          });
          promise.then(result => console.log(result));
        `
      },
      {
        title: "Async/Await",
        code: `
          async function getData() {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const data = await res.json();
            console.log(data);
          }
          getData();
        `
      },
      {
        title: "Fetch API",
        code: `
          fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => console.log(data));
        `
      },
      {
        title: "map, filter, reduce",
        code: `
          const nums = [1, 2, 3, 4];
          const squared = nums.map(n => n * n);
          const even = nums.filter(n => n % 2 === 0);
          const sum = nums.reduce((acc, n) => acc + n, 0);
          console.log({ squared, even, sum });
        `
      },
      {
        title: "Destructuring & Spread/Rest",
        code: `
          const person = { name: 'Alice', age: 30 };
          const { name, age } = person;
  
          const arr = [1, 2, 3];
          const [first, ...rest] = arr;
  
          const extended = { ...person, job: 'Engineer' };
          console.log(name, age, first, rest, extended);
        `
      },
      {
        title: "DOM Events",
        code: `
          const button = document.querySelector('button');
          button.addEventListener('click', () => {
            alert('Clicked!');
          });
        `
      },
      {
        title: "try/catch",
        code: `
          try {
            JSON.parse('{ bad json }');
          } catch (e) {
            console.error('Failed to parse JSON:', e);
          }
        `
      },
      {
        title: "Async Error Handling",
        code: `
          async function load() {
            try {
              const response = await fetch('/some-api');
              const data = await response.json();
            } catch (error) {
              console.error('Fetch failed:', error);
            }
          }
        `
      },
      {
        title: "Cons Examples",
        code: `
          // Type coercion
          console.log('5' + 1); // '51'
          console.log('5' - 1); // 4
  
          // Loose equality
          console.log(null == undefined); // true
        `
      },
      {
        title: "Anti-Patterns",
        code: `
          // Global scope pollution
          window.myVar = 'leak';
  
          // Deep nesting
          if (a) {
            if (b) {
              if (c) {
                console.log('Nested');
              }
            }
          }
        `
      },
      {
        title: "Template Literals",
        code: `
          const name = 'Alice';
          const age = 30;
          const greeting = \`Hello, my name is \${name} and I am \${age} years old.\`;
          console.log(greeting);
        `
      },
      {
        title: "Ternary Operator",
        code: `
          const age = 18;
          const canVote = age >= 18 ? 'Yes' : 'No';
          console.log(canVote); // 'Yes'
        `
      },
      {
        title: "ES Modules (import/export)",
        code: `
          // utils.js
          export function add(a, b) {
            return a + b;
          }
  
          // main.js
          import { add } from './utils.js';
          console.log(add(2, 3)); // 5
        `
      }
    ],
  
    benefits: {
      title: "Benefits (Pros)",
      content: [
        "**Flexibility and Ubiquity:** JavaScript runs in every browser and on many backends (Node.js), making it the most accessible language today.",
        "**Dynamic Nature:** The dynamic typing and object model enable rapid prototyping and iteration.",
        "**Powerful Functional Tools:** With first-class functions, array methods, and async constructs, you can write expressive and efficient code.",
        "**Rich Ecosystem:** There are countless libraries and tools that extend JavaScript’s capabilities."
      ]
    },
  
    cons: {
      title: "Cons",
      content: [
        "**Lack of Type Safety:** Without TypeScript or runtime validation, bugs can result from wrong assumptions about types.",
        "**Inconsistent Browser Support:** Although improving, some JavaScript features behave differently in legacy browsers.",
        "**Callback Hell (historically):** Deeply nested callbacks made async code messy before Promises and async/await.",
        "**Loose Syntax:** Automatic semicolon insertion, truthy/falsy values, and coercion can lead to bugs."
      ]
    },
  
    antiPatterns: {
      title: "Common Anti-Patterns / Pitfalls",
      content: [
        "**Modifying Global Scope:** Avoid polluting the global namespace. Use modules or closures.",
        "**Not Handling Errors in Async Code:** Always wrap await calls in try/catch.",
        "**Deep Nesting:** Excessive nesting in callbacks or logic leads to unreadable code. Use early returns and abstraction.",
        "**Mutating Shared State:** Prefer immutability when possible to avoid side effects and race conditions.",
        "**Overusing 'this':** Arrow functions can prevent confusing 'this' binding issues."
      ]
    },
  
    conclusion: `
      Mastering JavaScript’s fundamentals is key to becoming a strong frontend engineer. While the language has quirks, its flexibility, ecosystem, and async patterns make it ideal for building rich, interactive applications. Use best practices, avoid common pitfalls, and focus on clarity and maintainability.
    `
  };
  
  export default javascriptArticleData;