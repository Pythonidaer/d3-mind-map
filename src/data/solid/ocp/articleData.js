const ocpArticleData = {
    introduction: `
      The Open/Closed Principle (OCP) helps you design systems that can grow in functionality without changing existing, tested code.
      This leads to safer updates and more resilient systems.
    `,
    keyPrinciples: {
      title: "Key Concepts",
      content: [
        "**Open for Extension:** You can introduce new features or behavior by adding new code.",
        "**Closed for Modification:** Once written and tested, existing code shouldn’t be altered.",
        "**Pluggable Design:** Prefer polymorphism and abstractions over conditional logic.",
      ],
    },
    codeExamples: [
      {
        title: "Before OCP (Bad Example)",
        code: `
          class DiscountCalculator {
            calculate(product) {
              if (product.type === "regular") return product.price;
              if (product.type === "sale") return product.price * 0.9;
              if (product.type === "clearance") return product.price * 0.5;
            }
          }
        `,
      },
      {
        title: "After OCP (Good Example)",
        code: `
          class Product {
            constructor(price) {
              this.price = price;
            }
            getFinalPrice() {
              return this.price;
            }
          }
  
          class SaleProduct extends Product {
            getFinalPrice() {
              return this.price * 0.9;
            }
          }
  
          class ClearanceProduct extends Product {
            getFinalPrice() {
              return this.price * 0.5;
            }
          }
        `,
      },
    ],
    benefits: {
      title: "Benefits (Pros)",
      content: [
        "**Reduced Risk:** Core logic stays untouched, so bugs don’t creep into existing features.",
        "**Scalability:** Easy to grow your codebase by adding new classes or modules.",
        "**Code Stability:** Encourages use of inheritance and polymorphism to minimize changes.",
      ],
    },
    cons: {
      title: "Cons / Gotchas",
      content: [
        "**Abstraction Overhead:** Too much abstraction can make code harder to trace.",
        "**Setup Cost:** Designing for extensibility early might seem like overkill for small apps.",
      ],
    },
    antiPatterns: {
      title: "Common Anti-Patterns",
      content: [
        "**Switch Statements:** Using conditionals to branch behavior by type instead of polymorphism.",
        "**Hardcoding Logic:** Baking in feature logic instead of delegating to extensions.",
      ],
    },
    conclusion: `
      By designing systems to be open to extension and closed to modification, OCP encourages robust architecture that’s easy to evolve over time without destabilizing existing code.
    `,
  };
  
  export default ocpArticleData;
  