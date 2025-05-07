const articleData = {
    introduction: `JavaScript is a multi-paradigm language that supports Functional, Declarative, Object-Oriented, Procedural, and Imperative programming. Each of these paradigms influences how code is structured, written, and maintained. This article expands on the mind map by exploring each paradigm in detail, showing how JavaScript syntax and features align with them, and providing code examples to illustrate their practical application.`,
  
    keyPrinciples: {
      title: 'Key Paradigm Principles in JavaScript',
      content: [
        'Functional Programming: Focuses on pure functions, immutability, and composition.',
        'Declarative Programming: Expresses what the program should accomplish without specifying control flow.',
        'Object-Oriented Programming: Organizes code into reusable objects with state and behavior.',
        'Procedural Programming: Structures programs as sequences of instructions grouped in procedures.',
        'Imperative Programming: Provides explicit commands to control program state and flow.'
      ]
    },
  
    benefits: {
      title: 'Benefits of Multi-Paradigm JavaScript',
      content: [
        'Flexible code organization—choose the best paradigm for the task.',
        'Improved code readability and maintainability.',
        'Enhanced testing with pure functions and declarative logic.',
        'Efficient asynchronous flows with promises and async/await.',
        'Modular and reusable components via objects, classes, and higher-order functions.'
      ]
    },
  
    cons: {
      title: 'Challenges to Watch For',
      content: [
        'Mixing paradigms poorly can create confusing codebases.',
        'OOP misuse may lead to over-encapsulation or class hierarchy bloat.',
        'Imperative styles can lead to hard-to-maintain, side-effect-ridden code.',
        'Lack of immutability can cause hidden bugs and unpredictable behavior.'
      ]
    },
  
    antiPatterns: {
      title: 'Common Anti-Patterns Across Paradigms',
      content: [
        'Mutating shared state in functional-style code.',
        'Overusing class-based OOP for simple data structures.',
        'Deeply nested imperative code that hides business logic.',
        'Using array mutation (`push`, `splice`) when immutability is preferred.',
        'Mixing control flow with UI logic imperatively instead of composing with declarative tools.'
      ]
    },
  
    codeExamples: [
      {
        title: 'Functional Example: map + filter',
        code: `const nums = [1, 2, 3, 4, 5];
  const doubledEvens = nums.filter(n => n % 2 === 0).map(n => n * 2);`
      },
      {
        title: 'Declarative Example: Ternary and Template',
        code: `const isDark = true;
  const theme = isDark ? 'Dark Mode' : 'Light Mode';
  console.log(\`Using \${theme}\`);`
      },
      {
        title: 'OOP Example: ES6 Class',
        code: `class Dog {
    constructor(name) {
      this.name = name;
    }
    bark() {
      console.log(\`\${this.name} says woof!\`);
    }
  }
  const fido = new Dog('Fido');
  fido.bark();`
      },
      {
        title: 'Procedural Example: Loop and Mutation',
        code: `let sum = 0;
  const numbers = [1, 2, 3, 4];
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }`
      },
      {
        title: 'Imperative Example: DOM Manipulation',
        code: `const el = document.getElementById('message');
  el.textContent = 'Hello, world!';`
      },
      {
        title: 'Async Example: Promise then()',
        code: `fetch('/data.json')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));`
      },
      {
        title: 'Async/Await Example',
        code: `async function loadData() {
    try {
      const res = await fetch('/data.json');
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }`
      }
    ],
  
    conclusion: `JavaScript’s multi-paradigm nature is one of its greatest strengths, allowing developers to adapt their coding style to the problem at hand. From writing highly readable functional pipelines to structuring complex systems with OOP and managing user interactions imperatively, each paradigm provides useful tools. Understanding which paradigm you are working within—and why—helps you write better, clearer, and more maintainable JavaScript.`
  }
  
  export default articleData;
  