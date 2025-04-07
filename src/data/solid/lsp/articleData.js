const lspArticleData = {
    introduction: `
      The Liskov Substitution Principle ensures that subclasses can stand in for their parent classes without introducing errors or unexpected behavior.
    `,
    keyPrinciples: {
      title: "Key Concepts",
      content: [
        "**Substitutability:** Derived classes should be usable in place of their base classes without changing the program’s meaning.",
        "**Preserve Behavior:** Subclasses must honor the base class's intent, not just match method signatures.",
        "**No Surprises:** Don't override methods in a way that violates assumptions made by the client code.",
      ],
    },
    codeExamples: [
      {
        title: "Before LSP (Bad Example)",
        code: `
          class Rectangle {
            setWidth(w) {
              this.width = w;
            }
            setHeight(h) {
              this.height = h;
            }
            getArea() {
              return this.width * this.height;
            }
          }
  
          class Square extends Rectangle {
            setWidth(w) {
              this.width = this.height = w;
            }
            setHeight(h) {
              this.width = this.height = h;
            }
          }
  
          const shape = new Square();
          shape.setWidth(5);
          shape.setHeight(10);
          console.log(shape.getArea()); // 100 — Unexpected!
        `,
      },
      {
        title: "After LSP (Good Example)",
        code: `
          class Shape {
            getArea() {
              throw new Error("Must implement getArea");
            }
          }
  
          class Rectangle extends Shape {
            constructor(w, h) {
              super();
              this.width = w;
              this.height = h;
            }
            getArea() {
              return this.width * this.height;
            }
          }
  
          class Square extends Shape {
            constructor(side) {
              super();
              this.side = side;
            }
            getArea() {
              return this.side * this.side;
            }
          }
        `,
      },
    ],
    benefits: {
      title: "Benefits (Pros)",
      content: [
        "**Robust Hierarchies:** Guarantees that base and derived classes behave predictably.",
        "**Improved Reuse:** Subclasses can be safely used in generic algorithms.",
        "**Easier Refactoring:** Clear contracts make future changes less risky.",
      ],
    },
    cons: {
      title: "Cons / Gotchas",
      content: [
        "**Design Complexity:** Not all real-world relationships fit cleanly into substitution.",
        "**Enforcement is Subtle:** You must test behavior, not just syntax.",
      ],
    },
    antiPatterns: {
      title: "Common Anti-Patterns",
      content: [
        "**Overriding to Break Behavior:** Returning different types or throwing errors unexpectedly.",
        "**Assumption Violation:** Changing return value formats or throwing on valid inputs.",
      ],
    },
    conclusion: `
      LSP is about behavioral compatibility between base and derived types. By respecting this principle, your code remains intuitive, robust, and easier to extend without fear of subtle breakages.
    `,
  };
  
  export default lspArticleData;
  