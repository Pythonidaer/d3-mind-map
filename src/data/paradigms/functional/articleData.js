// src/data/functional/articleData.js
const functionalArticleData = {
    introduction: `
    Functional programming in JavaScript emphasizes immutability, pure functions, and composition. These concepts lead to more predictable and maintainable applications.
  `,
    keyPrinciples: {
      title: "Key Principles and Concepts",
      content: [
        "**Immutability:** Data should not be modified once created. Instead, any change produces a new data structure. This minimizes unexpected side effects and makes state transitions predictable.",
        "**Pure Functions:** A pure function always produces the same output for the same input and has no side effects (it does not alter any external state). This makes testing and reasoning much simpler.",
        "**First-Class and Higher-Order Functions:** Functions are treated as values; they can be passed as arguments, returned from other functions, or assigned to variables. This enables powerful patterns like function composition and currying.",
        "**Function Composition:** Building complex functionality by combining smaller, simpler functions. This promotes reusability and makes the flow of data explicit.",
        "**Declarative Style:** Functional code focuses on describing what needs to be done rather than detailing step-by-step instructions. This often results in more concise, expressive code.",
        "**Avoiding Side Effects:** By keeping functions pure and data immutable, functional programming minimizes hidden state changes, making programs easier to understand and debug.",
      ],
    },
    codeExamples: [
      {
        title: "Array Methods: map, filter, reduce",
        code: `
          const numbers = [1, 2, 3, 4, 5];
          const doubled = numbers.map(n => n * 2);
          const evens = numbers.filter(n => n % 2 === 0);
          const sum = numbers.reduce((acc, n) => acc + n, 0);
  
          console.log(doubled); // Output: [2, 4, 6, 8, 10]
          console.log(evens); // Output: [2, 4]
          console.log(sum); // Output: 15
        `,
      },
      {
        title: "Arrow Functions",
        code: `
          const add = (a, b) => a + b;
          console.log(add(5, 3)); // Output: 8
        `,
      },
      {
        title: "Function Composition",
        code: `
          const compose = (f, g) => x => f(g(x));
          const increment = x => x + 1;
          const double = x => x * 2;
          const incrementThenDouble = compose(double, increment);
  
          console.log(incrementThenDouble(3)); // Output: 8
        `,
      },
      {
        title: "Currying",
        code: `
          const curry = fn => (...args) =>
            args.length >= fn.length ? fn(...args) : (...more) => curry(fn)(...args, ...more);
          const multiply = (a, b) => a * b;
          const curriedMultiply = curry(multiply);
          const doubleValue = curriedMultiply(2);
  
          console.log(doubleValue(5)); // Output: 10
        `,
      },
      {
        title: "Immutable Updates with Spread Operator",
        code: `
          const arr = [1, 2, 3];
          const newArr = [...arr, 4]; // adds 4 without modifying arr
          const obj = { a: 1, b: 2 };
          const newObj = { ...obj, b: 3 }; // updates b without modifying obj
  
          console.log(arr); // Output: [1, 2, 3]
          console.log(newArr); // Output: [1, 2, 3, 4]
          console.log(obj); // Output: { a: 1, b: 2 }
          console.log(newObj); // Output: { a: 1, b: 3 }
        `,
      },
    ],
    benefits: {
      title: "Benefits (Pros)",
      content: [
        "**Predictability and Testability:** Pure functions and immutable data structures ensure that given the same inputs, your functions behave consistently. This greatly simplifies unit testing.",
        "**Modularity and Reusability:** Small, self-contained functions can be easily composed to create complex behavior. This modular approach encourages code reuse.",
        "**Easier Reasoning:** With fewer side effects and clear data flows, functional programs are often easier to reason about. You can trace data transformations step by step.",
        "**Concurrency-Friendly:** Immutability helps prevent race conditions and other issues that can occur in concurrent environments, making functional programming a good fit for data-intensive applications.",
        "**Declarative Clarity:** The focus on what should be done (rather than how) means that code often reads more like a description of a transformation, which can be more intuitive.",
      ],
    },
    cons: {
      title: "Cons",
      content: [
        "**Performance Overhead:** Creating new copies of data rather than modifying in place can lead to performance and memory overhead, especially in large data sets. Libraries often mitigate this with persistent data structures.",
        "**Steep Learning Curve:** Concepts such as function composition, currying, and high-order functions can be abstract and challenging if you’re coming from an imperative or OOP background.",
        "**Over-Abstraction:** Excessive use of functional abstractions (like point-free style or deeply nested compositions) can sometimes lead to code that is hard to read and understand.",
        "**Interoperability:** In a codebase that mixes paradigms, ensuring that functional code plays nicely with imperative or object-oriented modules can require extra care.",
      ],
    },
    antiPatterns: {
      title: "Common Anti-Patterns / Pitfalls",
      content: [
        "**Accidental Mutation:** Even when aiming for immutability, it’s easy to inadvertently mutate an object or array. Always be cautious with methods that modify data in place.",
        "**Overuse of Point-Free Style:** While concise, writing code without clear parameter names (point-free) can obscure what the function does, reducing readability.",
        "**Excessive Abstraction:** Creating too many small, highly abstract functions may result in code that is overly fragmented, making it difficult to follow the overall logic.",
        "**Misusing Higher-Order Functions:** Overly complex chains of higher-order functions can be hard to debug if you’re not careful with naming and composition. Strive for clarity over cleverness.",
        "**Neglecting Performance:** Functional patterns can lead to unnecessary data copying if not managed carefully. Use libraries or strategies (like lazy evaluation) when performance becomes critical.",
      ],
    },
    conclusion: `
    Functional programming in JavaScript emphasizes immutability, pure functions, and composition. It brings predictability, reusability, and easier reasoning to your code. However, there is a trade-off in terms of performance overhead and complexity for those new to the paradigm. By leveraging built-in array methods, the spread operator, and libraries like Ramda or Immutable.js, you can write clean, maintainable, and testable code that handles data transformations effectively. Embracing these principles alongside other paradigms (OOP, Declarative, etc.) lets you choose the right approach for each problem, creating robust applications that are easier to maintain and scale.
  `,
  };
  
  export default functionalArticleData;