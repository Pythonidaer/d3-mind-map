// src/data/oop/articleData.js
const oopArticleData = {
  introduction: `
    Object-Oriented Paradigm (OOP) in JavaScript allows developers to model real-world entities as code using objects that encapsulate data and behavior. It emphasizes concepts like encapsulation, inheritance, polymorphism, and abstraction.
  `,
  keyPrinciples: {
    title: "Key Principles and Concepts",
    content: [
      "**Encapsulation:** Bundling data (state) with methods (behavior) inside objects. The object exposes a public interface and hides its internal state, ensuring internal changes don’t affect external code.",
      "**Inheritance:** Creating new object classes by extending existing ones, so that child objects inherit properties/methods of parents. This promotes code reuse.",
      "**Polymorphism:** Ability for different classes to be treated via a common interface, typically by overriding methods. In JavaScript, this is often achieved through duck typing – if two objects have the same method name, they can be used interchangeably.",
      "**Abstraction:** Hiding complex implementation details and exposing only what is necessary. In practice, this means defining clear APIs on objects and possibly using private fields (ES2022 #privateField) to prevent outside access to internal data.",
      "**Classes & Prototypes:** Traditionally, JavaScript uses prototypal inheritance – objects inherit directly from other objects (prototypes). ES6 introduced the class syntax which provides a cleaner, class-based OOP style (under the hood it still uses prototypes). Classes define a blueprint (constructor and methods) for creating object instances with shared behavior.",
    ],
  },
  codeExamples: [
    {
      title: "Classes and Instances",
      code: `
        class Person {
          constructor(name) {
            this.name = name;
          }
          greet() {
            console.log(\`Hello, I am \${this.name}.\`);
          }
        }
        const alice = new Person("Alice");
        alice.greet(); // Hello, I am Alice.
      `,
    },
    {
      title: "Prototypal Inheritance",
      code: `
        function Animal(kind) { this.kind = kind; }
        Animal.prototype.speak = function() { console.log(\`\${this.kind} makes a sound.\`); };
        function Dog(name) { 
          Animal.call(this, "Dog"); // inherit properties 
          this.name = name; 
        }
        Dog.prototype = Object.create(Animal.prototype); // inherit methods
        Dog.prototype.constructor = Dog;
        Dog.prototype.speak = function() { 
          console.log(\`\${this.name} barks.\`);  // override speak
        };
        let fido = new Dog("Fido");
        fido.speak(); // Fido barks.
      `,
    },
    {
      title: "Encapsulation with Closures/Modules",
      code: `
        const Counter = (function(){
          let _count = 0; // private variable
          return {
            increment() { _count++; },
            getCount() { return _count; }
          };
        })();
        Counter.increment();
        console.log(Counter.getCount()); // 1
      `,
    },
  ],
  benefits: {
    title: "Benefits (Pros)",
    content: [
      "**Intuitive Modeling:** OOP offers a natural way to model real-world entities as code. It’s easier to conceptualize a program as interacting objects with properties and actions.",
      "**Modularity and Reusability:** Encapsulation and inheritance promote modular code. Objects and classes can be extended or reused in new contexts without rewriting code.",
      "**Maintainability:** Encapsulation creates a “firewall” between an object and the rest of the system. This means you can change an object’s internal implementation without breaking other parts of the program, as long as the public interface remains consistent. Large applications with many related parts are easier to manage by organizing code into classes/modules.",
      "**Code Organization:** OOP encourages organizing code by responsibility (each class handles a specific thing). This can make complex systems more understandable by abstracting details behind class interfaces.",
    ],
  },
  cons: {
    title: "Cons",
    content: [
      "**Verbose/Complex for Simple Tasks:** For small or straightforward tasks, setting up classes and objects can be overkill. OOP code tends to be more verbose and abstract, which can make simple operations more complex than necessary.",
      "**Tight Coupling & Fragile Base Classes:** Inheritance can lead to tight coupling between classes. A change in a base (parent) class might inadvertently break subclasses (a problem known as the fragile base class problem). Deep inheritance hierarchies are hard to understand and maintain, and can make the code fragile if parent classes change.",
      "**Performance and Overhead:** Objects and dynamic dispatch (determining which method to call at runtime) add some overhead. Highly optimized code might avoid OOP patterns if every millisecond counts. Also, creating many objects or long prototype chains can use more memory.",
      "**Learning Curve & Misuse:** Developers not familiar with prototype-based OOP might misuse the paradigm – for example, forgetting to use new when calling a constructor (leading to bugs with this), or trying to mimic class inheritance patterns from other languages in JavaScript incorrectly.",
    ],
  },
  antiPatterns: {
    title: "Common Anti-Patterns / Pitfalls",
    content: [
      "**God Objects / Large Classes:** An object that knows or does too much (violating single-responsibility) is hard to maintain. It indicates poor encapsulation since one class handles many unrelated tasks.",
      "**Excessive Inheritance:** Deep, multi-level inheritance hierarchies make code fragile and complex. Over-reliance on inheritance (instead of composition) is an OOP anti-pattern – it can lead to brittle code where a small change cascades issues. (Best practice is often composition over inheritance.)",
      "**Misusing this Context:** In JavaScript, methods use this to refer to the current object. A common pitfall is losing the correct this context (e.g., passing a method as a callback and losing the object context). This leads to runtime errors or unexpected behavior. The anti-pattern is not binding this properly or not using arrow functions when needed.",
      "**Global State via Singletons:** Excessive use of singletons or global objects for shared state (sometimes used in OOP for config or caches) can turn into a pseudo-global state. This undermines modularity and can introduce hidden dependencies (making testing and maintenance harder). A singleton is a known anti-pattern if misused – it introduces a global access point that can be modified from anywhere.",
      "**Modifying Built-in Prototypes:** Adding or overriding methods on native prototypes (like Array.prototype or Object.prototype) is generally considered a bad practice in JS – it can cause conflicts or unexpected behavior in other parts of a program. This is a form of monkey-patching that breaks encapsulation at the global level.",
    ],
  },
  conclusion: `
    Object-Oriented Programming (OOP) in JavaScript provides a powerful way to structure code by modeling real-world entities. While it offers benefits like modularity and maintainability, it also comes with potential drawbacks like verbosity and the risk of tight coupling. Understanding and applying OOP principles correctly is essential for building robust and scalable applications.
  `,
};

export default oopArticleData;