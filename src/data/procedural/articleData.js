// src/data/procedural/articleData.js
const proceduralArticleData = {
  introduction: `
    Procedural programming in JavaScript involves writing a sequence of instructions that the computer executes in order. It focuses on how to perform tasks, with code organized into procedures (functions) that manipulate data.
  `,
  keyPrinciples: {
    title: "Key Principles and Concepts",
    content: [
      "**Step-by-Step Instructions:** Procedural programming is the classical paradigm of writing a sequence of instructions that the computer executes in order.",
      "**Procedures (Functions):** Code is organized into procedures or routines (in JavaScript, these are functions) that perform specific sub-tasks.",
      "**Shared State via Variables:** Procedural programs often use global or shared variables to store the state that procedures operate on.",
      "**Structured Programming:** Modern procedural programming follows structured programming principles – using loops (for, while) and conditionals instead of arbitrary jumps (no goto).",
      "**Linear Execution (mostly):** There is a clear entry point and sequence. For instance, in a script file, code at the top runs first, then the next, etc., except where you call functions or branch/loop.",
    ],
  },
  codeExamples: [
    {
      title: "Basic Script Example",
      code: `
        // A procedural script to compute and display the area of a rectangle
        let length = 5;
        let width = 3;
        function calculateArea(len, wid) {
          return len * wid;
        }
        function displayArea(area) {
          console.log(\`The area is \${area}\`);
        }
        // Main sequence
        const area = calculateArea(length, width);
        displayArea(area);
      `,
    },
    {
      title: "DOM Manipulation Procedurally",
      code: `
        const items = ["Apple", "Banana", "Cherry"];
        const listEl = document.createElement('ul');
        for (let i = 0; i < items.length; i++) {
          const li = document.createElement('li');
          li.textContent = items[i];
          listEl.appendChild(li);
        }
        document.body.appendChild(listEl);
      `,
    },
    {
      title: "Algorithm Implementation (Bubble Sort)",
      code: `
        function bubbleSort(arr) {
          let n = arr.length;
          for(let i = 0; i < n-1; i++){
            for(let j = 0; j < n-i-1; j++){
              if(arr[j] > arr[j+1]){
                // swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
              }
            }
          }
          return arr;
        }
      `,
    },
  ],
  benefits: {
    title: "Benefits (Pros)",
    content: [
      "**Simplicity (for Small Programs):** Procedural code is straightforward and easy to understand for simple or short programs. The execution flow is explicit and follows the written order, which is intuitive.",
      "**Easy Debugging (Straight-line Flow):** Because the program state changes in a predictable sequence, it can be easier to trace errors. You can step through the code linearly with a debugger or print statements and see how data changes.",
      "**Low Overhead:** There’s minimal indirection – you are working with basic language constructs. This can sometimes yield performance benefits or lower memory usage since you’re not creating lots of objects or closures inherently.",
      "**Suitable for Scripting and Automation:** Many quick scripts (like automating a task or gluing tools together) are naturally procedural – do this, then that, etc. It’s often the fastest way to get a simple job done without needing a complex architecture.",
      "**Transparent State Management:** Since procedural programs might use a few well-known global variables or passed parameters, it’s usually clear where the state lives (albeit all in the open).",
    ],
  },
  cons: {
    title: "Cons",
    content: [
      "**Poor Scalability for Large Projects:** As code grows, purely procedural code can become unmanageable. With many global variables and functions, it becomes hard to track which function affects which piece of state.",
      "**Maintenance Difficulties (Spaghetti Code):** If not well-organized, procedural code can turn into spaghetti code, where the flow jumps around and intertwines in complex ways, making it “almost impossible to maintain or change”.",
      "**High Risk of Bugs from Shared State:** Global variables or shared mutable state are common in procedural programs, and these can lead to accidental corruption of data.",
      "**Code Reusability Limitations:** In procedural design, reusability is achieved via functions, but it’s limited if those functions depend on a lot of global context.",
      "**Less “Real-World” Modeling:** Procedural code doesn’t model real-world entities as clearly. As requirements get complex (say you’re dealing with multiple related entities, like students, courses, grades in a school system), managing all that via separate arrays or structures and parallel functions becomes cumbersome.",
    ],
  },
  antiPatterns: {
    title: "Common Anti-Patterns / Pitfalls",
    content: [
      "**Excessive Global Variables:** Relying heavily on global state is a classic pitfall in procedural programming. Global variables make functions implicitly dependent on context, which can cause bugs.",
      "**Spaghetti Code Structure:** As mentioned, spaghetti code is an anti-pattern where the code’s control flow is tangled. Signs include: lots of flags and state variables guiding logic, deeply nested loops and conditionals, lack of clear module boundaries, or using jumps.",
      "**Massive Functions (God Function):** Instead of one “god object” (OOP anti-pattern), procedural code can end up with a “god function” – a single function that does far too much. Such monolithic functions are hard to debug or extend.",
      "**Lack of Error Handling Structure:** In a simple procedural script, one might not plan how errors propagate (no try/catch, just assuming things work). This can lead to deeply nested if-checks for error codes or, conversely, no checks at all, which is brittle.",
      "**Tight Coupling via Order of Execution:** Procedural code can become order-dependent – one procedure must be called before another or a variable must be set up by step 3 for step 5 to work.",
    ],
  },
  conclusion: `
    Procedural programming in JavaScript involves a straightforward, step-by-step approach to coding. While it offers simplicity and low overhead, it can become challenging to manage in larger projects. Understanding its limitations and avoiding common pitfalls is essential for effective use.
  `,
};

export default proceduralArticleData;