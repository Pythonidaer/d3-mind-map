// src/data/declarative/articleData.js
const declarativeArticleData = {
  introduction: `
    Declarative programming in JavaScript focuses on describing what needs to be done, rather than how to do it. This paradigm emphasizes specifying the desired outcome without explicitly outlining the steps.
  `,
  keyPrinciples: {
    title: "Key Principles and Concepts",
    content: [
      "**Describe What Not How:** Declarative programming is about specifying the desired outcome or logic of a computation without spelling out step-by-step instructions.",
      "**Implicit Control Flow:** The flow of the program is determined by the system or language, not by explicit loops or control structures in your code.",
      "**Immutability and Statelessness:** Declarative styles (especially in UI and functional programming) favor immutable data and minimizing side effects.",
      "**Higher-Level Abstractions:** Declarative code is often built on top of imperative implementations.",
      "**Examples of Declarative Constructs:** HTML, CSS, JSX templates in React, and chained array methods are declarative in style.",
    ],
  },
  codeExamples: [
    {
      title: "Array Processing (Declarative vs Imperative)",
      code: `
        // Imperative approach:
        const nums = [1,2,3];
        const doubled = [];
        for (let i = 0; i < nums.length; i++) {
          doubled.push(nums[i] * 2);
        }
        // doubled is [2,4,6]

        // Declarative approach:
        const doubled2 = nums.map(n => n * 2);
        // doubled2 is [2,4,6]
      `,
    },
    {
      title: "Declarative DOM Manipulation (React Example)",
      code: `
        // React component (declarative UI)
        function Hello(props) {
          return <p>Hello, {props.name}</p>;
        }
        // Usage:
        // <Hello name="World" />
      `,
    },
    {
      title: "Promises and Async Chains",
      code: `
        fetchData() 
          .then(processData)
          .then(saveResult)
          .catch(handleError);
      `,
    },
  ],
  benefits: {
    title: "Benefits (Pros)",
    content: [
      "**Less Mutable State = Fewer Bugs:** Declarative code tends to minimize direct mutation of state. By avoiding extensive shared state and in-place updates, there are fewer opportunities for unintended side effects.",
      "**More Readable, High-Level Code:** Once familiar with the abstractions, declarative code can be more concise and closer to human reasoning about the problem. You can often understand what the code is doing at a glance, without mentally executing every step.",
      "**Maintainability and Scaling:** Describing the logic at a higher level makes it easier to change the implementation without changing the interface of the code. Declarative code often results in context-independent components.",
      "**Closer to Domain Language:** Declarative styles allow creation of Domain-Specific Languages (DSLs) or APIs that match the problem domain.",
      "**Examples of Productivity:** In UI frameworks, simply declaring that “UI = f(state)” (a function of state) and letting the framework handle updates can speed up development.",
    ],
  },
  cons: {
    title: "Cons",
    content: [
      "**Performance Overhead & Less Control:** Abstraction can come at a slight performance cost. Because you’re not manually optimizing every step, a declarative approach might do things in a more generic way.",
      "**Steeper Learning Curve (if Unfamiliar):** Developers used to step-by-step thinking may find declarative paradigms less intuitive at first.",
      "**Debugging Can Be Challenging:** If something goes wrong, you have “complex debugging” at times because the program’s control flow is not explicit.",
      "**Limited by Abstraction:** In a purely declarative approach, you are constrained to the operations the paradigm provides. If you need something outside the provided “vocabulary,” it can be awkward.",
      "**Overuse and Misuse:** Using many layers of abstraction can lead to code that is declarative but opaque – e.g., extremely chained calls or heavy use of functional combinators that make the intent hard to decipher.",
    ],
  },
  antiPatterns: {
    title: "Common Anti-Patterns / Pitfalls",
    content: [
      "**Mixing Imperative Logic into Declarative Structure:** A common mistake is to break the declarative paradigm by sneaking in imperative steps, which undermines the benefits.",
      "**Not Understanding the Abstraction:** Developers might misuse declarative methods because they don’t realize what’s happening under the hood.",
      "**Over-Abstraction (Too “Clever” Code):** Writing overly terse declarative code can reduce readability – e.g., combining multiple .map().filter().reduce() into one giant chain or deeply nesting ternary operators in JSX.",
      "**State Synchronization Issues:** In complex apps, a pitfall is assuming declarative frameworks magically handle all state. If the programmer doesn’t keep mental track of the application state, they might inadvertently introduce bugs like updating state in an uncontrolled way.",
      "**Ignoring Performance Characteristics:** Writing declarative code that is clear but not noticing that it, say, loops multiple times under the hood. For example, array.filter(...).map(...) loops twice (one for filter, one for map).",
    ],
  },
  conclusion: `
    Declarative programming in JavaScript emphasizes describing what needs to be done, allowing developers to focus on the desired outcome rather than the step-by-step process. While it offers benefits like readability and maintainability, it also introduces challenges such as performance overhead and a steeper learning curve. Understanding and applying declarative principles correctly is essential for leveraging its advantages effectively.
  `,
};

export default declarativeArticleData;