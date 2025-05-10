const articleData = {
    introduction: `JavaScript is a multi-paradigm language that supports Functional, Declarative, Object-Oriented, Procedural, and Imperative programming. Each paradigm represents a different mental model for writing and organizing code. This article dives into each paradigm, explaining how JavaScript syntax aligns with them, where they overlap, and what tradeoffs they bring. It also integrates broader distinctions such as expressions vs. statements, callbacks, async/await behavior, and the relevance of event-driven and reactive patterns.`,
  
    keyPrinciples: {
      title: 'Key Paradigm Principles in JavaScript',
      content: [
        'Functional Programming: Composes logic using pure functions, immutability, and values passed and returned via expressions.',
        'Declarative Programming: Describes what the code should accomplish, often using expressions that yield values and abstracting control flow.',
        'Object-Oriented Programming: Encapsulates state and behavior inside objects and uses inheritance or composition.',
        'Procedural Programming: Breaks down tasks into sequences of instructions and organizes them into procedures or routines.',
        'Imperative Programming: Explicitly dictates how the computer should perform each step using statements and mutations.'
      ]
    },
  
    benefits: {
      title: 'Benefits of Multi-Paradigm JavaScript',
      content: [
        'Lets developers choose the best style for a problem, increasing flexibility and adaptability.',
        'Promotes clearer abstractions: functional for data flows, OOP for entity behavior, and imperative for direct control.',
        'Enables composability and reuse with functions and modules.',
        'Supports asynchronous logic and event-driven systems natively.',
        'Encourages better organization through expressions, classes, or structured steps depending on the use case.'
      ]
    },
  
    cons: {
      title: 'Challenges to Watch For',
      content: [
        'Overmixing paradigms can lead to tangled or confusing code.',
        'Relying too much on mutable state increases the risk of bugs.',
        'Class-based OOP can become overly hierarchical or abstract.',
        'Improper use of async/await or callbacks can obscure execution flow.',
        'Declarative abstractions may hide performance pitfalls or debugging complexity.'
      ]
    },
  
    antiPatterns: {
      title: 'Common Anti-Patterns Across Paradigms',
      content: [
        'Using imperative logic inside functional pipelines (e.g., side effects in map).',
        'Mutating shared state in a function intended to be pure.',
        'Excessive reliance on nested callbacks (callback hell).',
        'Treating all problems as object-oriented when simpler constructs suffice.',
        'Overusing conditional logic in declarative frameworks instead of composing small components.'
      ]
    },
  
    codeExamples: [
      {
        title: 'Functional Programming Examples',
        code: `// Pure function
  const square = x => x * x;
  
  // Higher-order function
  const withLogging = fn => (...args) => {
    console.log('Calling function');
    return fn(...args);
  };
  
  // Immutability with const
  const PI = 3.14;
  const area = r => PI * r * r;
  
  // Chaining with map, filter, reduce
  const result = [1, 2, 3, 4]
    .filter(n => n % 2 === 0)
    .map(n => n * 2)
    .reduce((sum, n) => sum + n, 0);`
      },
  
      {
        title: 'Declarative Programming Examples',
        code: `// Ternary expression
  const greeting = isLoggedIn ? 'Welcome' : 'Please login';
  
  // Template literal
  const message = \`Hello, \${name}!\`;
  
  // Destructuring and rest/spread
  const [a, b] = [1, 2];
  const clone = { ...original };
  
  // Promise chaining (declarative async)
  fetch('/api')
    .then(res => res.json())
    .then(data => console.log(data));`
      },
  
      {
        title: 'Object-Oriented Programming Examples',
        code: `// Class syntax
  class Dog {
    constructor(name) {
      this.name = name;
    }
    bark() {
      console.log(\`\${this.name} says woof!\`);
    }
  }
  const fido = new Dog('Fido'); // using 'new'
  
  // Object literal with methods
  const user = {
    name: 'Alice',
    greet() {
      console.log(\`Hi, I'm \${this.name}\`);
    }
  };
  
  // Prototypal inheritance
  function Animal(name) {
    this.name = name;
  }
  Animal.prototype.speak = function () {
    console.log(\`\${this.name} makes a noise.\`);
  };`
      },
  
      {
        title: 'Procedural Programming Examples',
        code: `// if/else if/else
  let status = '';
  if (score > 90) {
    status = 'A';
  } else if (score > 80) {
    status = 'B';
  } else {
    status = 'C';
  }
  
  // switch statement
  switch (statusCode) {
    case 200:
      console.log('OK');
      break;
    case 404:
      console.log('Not Found');
      break;
    default:
      console.log('Unknown');
  }
  
  // while loop
  let count = 0;
  while (count < 3) {
    console.log('Counting:', count);
    count++;
  }
  
  // for...in loop
  const obj = { a: 1, b: 2 };
  for (const key in obj) {
    console.log(key, obj[key]);
  }
  
  // for loop and accumulator
  let total = 0;
  const numbers = [1, 2, 3];
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  
  // forEach loop
  [1, 2, 3].forEach(n => {
    console.log('Value:', n);
  });
  
  // try/catch block for safe error handling
  function parseJSON(jsonStr) {
    try {
      return JSON.parse(jsonStr);
    } catch (err) {
      console.error('Failed to parse:', err);
      return null;
    }
  }`
      },
  
      {
        title: 'Imperative Programming Examples',
        code: `// Direct DOM manipulation
  const el = document.getElementById('app');
  el.textContent = 'Hello world';
  
  // Event listener
  button.addEventListener('click', () => {
    alert('Clicked!');
  });
  
  // State mutation
  let count = 0;
  count++;
  
  // Async/Await with sequential logic
  async function loadData() {
    try {
      const res = await fetch('/data');
      const json = await res.json();
      console.log(json);
    } catch (err) {
      console.error('Async error:', err);
    }
  }`
      }
    ],
  
    conclusion: `Understanding how JavaScript supports multiple paradigms helps you choose the most appropriate one for a given task. Functional and declarative paradigms focus on building and returning values through expressions, improving predictability and composability. Imperative and procedural paradigms offer hands-on control and step-by-step logic that’s often more intuitive in asynchronous or UI-driven contexts. Object-oriented programming helps model complex systems using encapsulation and behavior. Additionally, JavaScript is heavily event-driven, and frameworks like React blend declarative syntax with imperative mechanics behind the scenes. The best JavaScript developers know not only how to use each paradigm—but when, why, and how to blend them effectively.`
  };
  
  export default articleData;
  