// src/data/imperative/articleData.js
const imperativeArticleData = {
  introduction: `
    Imperative programming in JavaScript focuses on coding how to do something, step by step. The programmer gives exact commands for each operation, specifying the sequence of actions to achieve a result.
  `,
  keyPrinciples: {
    title: "Key Principles and Concepts",
    content: [
      "**Explicit Instructions and Control Flow:** Imperative programming means coding how to do something, step by step. The programmer gives exact commands for each operation.",
      "**Mutable State:** Imperative code often involves changing program state over time. Variables are created and updated, data structures are modified in-place.",
      "**Sequencing and Order:** The order of statements is critical in imperative programming. Because we mutate state, doing step A before step B can yield a different result than B before A.",
      "**Includes Procedural and OOP:** Imperative is a broad category that includes procedural programming and object-oriented programming as sub-paradigms.",
      "**Examples of Imperative Operations:** Low-level manipulation, such as iterating with a for loop, indexing into arrays, reassigning variables, pushing to an array, DOM calls like element.setAttribute(...) or document.write(), are all imperative.",
    ],
  },
  codeExamples: [
    {
      title: "Imperative Summing of an Array",
      code: `
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
          sum += nums[i];
        }
        console.log("Total:", sum);
      `,
    },
    {
      title: "DOM Updates Imperatively",
      code: `
        const btn = document.getElementById('myButton');
        btn.style.backgroundColor = 'red';
        btn.textContent = "Click me";
        btn.addEventListener('click', () => {
          btn.style.backgroundColor = 'green';
          btn.textContent = "Clicked";
        });
      `,
    },
    {
      title: "Merge Sorted Arrays Imperatively",
      code: `
        function mergeSorted(arr1, arr2) {
          let i = 0, j = 0;
          const merged = [];
          while(i < arr1.length && j < arr2.length) {
            if(arr1[i] < arr2[j]) {
              merged.push(arr1[i++]);
            } else {
              merged.push(arr2[j++]);
            }
          }
          // push remaining items
          while(i < arr1.length) merged.push(arr1[i++]);
          while(j < arr2.length) merged.push(arr2[j++]);
          return merged;
        }
      `,
    },
  ],
  benefits: {
    title: "Benefits (Pros)",
    content: [
      "**Precise Control and Optimization:** Because you spell out every step, you can optimize and tweak each part of the process. Imperative programming gives you full control over how tasks are performed.",
      "**Straightforward to Debug (Stepwise):** Debugging imperative code can be straightforward since you can follow the program flow in a linear way, simulating how the computer executes it.",
      "**Familiarity and Universality:** Most programmers learn imperative style first. It’s a very intuitive way to tell a computer what to do, akin to giving someone detailed directions.",
      "**Flexibility:** Not constrained by the abstractions of declarative frameworks, you can do anything that’s possible in the language. If you need to do something unusual, imperative code lets you.",
      "**Transparency:** Performance characteristics and memory usage tend to be more transparent in imperative code, because you’re writing the actual loops and allocations.",
    ],
  },
  cons: {
    title: "Cons",
    content: [
      "**Code Complexity and Verbosity:** Writing everything out can lead to a lot of code, especially for complex tasks. As projects grow, imperative code can become hard to manage due to sheer volume of stepwise logic.",
      "**Harder to Scale and Maintain:** Imperative code often uses mutable state freely, which can cause parts of the program to become interdependent in non-obvious ways. As codebases get larger, keeping track of what is modified where becomes challenging.",
      "**Prone to Side-Effect Bugs:** Since imperative programming encourages updating state, it’s easy to accidentally introduce bugs via side effects. A single misordered operation or an unintended mutation can lead to incorrect results.",
      "**Less Abstracted (Reinventing the Wheel):** You may end up writing a lot of similar loops or patterns. For instance, filtering an array in five different places with near-identical code, because you didn’t abstract it.",
      "**Readability for Intent:** Someone reading imperative code might have to mentally execute a sequence to understand what it achieves, rather than seeing the goal immediately.",
    ],
  },
  antiPatterns: {
    title: "Common Anti-Patterns / Pitfalls",
    content: [
      "**Spaghetti Code (Unstructured Flow):** As with procedural, unstructured imperative code (using goto-like logic or deeply nested control structures) is a major pitfall.",
      "**Excessive Mutability:** Changing many global or external variables in a function can cause hidden couplings. The anti-pattern is not limiting side effects – ideally functions should do one thing and not secretly alter a bunch of state unrelated to their core purpose.",
      "**Tight Coupling to Execution Context:** Imperative code can become very context-dependent – i.e., a block of code might only work if certain other code ran before it (setting up variables).",
      "**Repetition and Lack of Abstraction:** Writing out similar loops or logic in multiple places (copy-paste coding) is a pitfall that imperative newbies might fall into.",
      "**Callback Hell (in older JS):** Imperative asynchronous code can lead to the infamous “callback hell” (a pyramid of nested callbacks) when dealing with many async operations sequentially.",
      "**Ignoring Return Values / Status Codes:** In an imperative style, functions may return status codes or signals (think C-style). A pitfall is to ignore these and proceed as if things succeeded.",
    ],
  },
  conclusion: `
    Imperative programming in JavaScript involves giving explicit, step-by-step instructions to the computer. While it offers precise control and optimization, it can also lead to complex and hard-to-maintain code. Understanding its strengths and weaknesses is crucial for effective use.
  `,
};

export default imperativeArticleData;