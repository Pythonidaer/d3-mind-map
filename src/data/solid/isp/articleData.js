const ispArticleData = {
    introduction: `
      The Interface Segregation Principle promotes creating smaller, more focused interfaces so that implementing classes are not forced to define unused methods.
    `,
    keyPrinciples: {
      title: "Key Concepts",
      content: [
        "**Client-Specific Interfaces:** Build APIs tailored to the needs of the client, not one-size-fits-all.",
        "**Avoid Fat Interfaces:** Large interfaces tend to force classes to implement irrelevant methods.",
        "**Encapsulation of Roles:** Let each interface represent a single capability or role.",
      ],
    },
    codeExamples: [
      {
        title: "Before ISP (Bad Example)",
        code: `
          class IMachine {
            print() {}
            scan() {}
            fax() {}
          }
  
          class OldPrinter extends IMachine {
            print() { /* works */ }
            scan() { throw new Error("Not supported"); }
            fax() { throw new Error("Not supported"); }
          }
        `,
      },
      {
        title: "After ISP (Good Example)",
        code: `
          class IPrinter {
            print() {}
          }
  
          class IScanner {
            scan() {}
          }
  
          class SimplePrinter extends IPrinter {
            print() {
              console.log("Printing...");
            }
          }
  
          class MultiFunctionPrinter extends IPrinter {
            print() { /* ... */ }
            scan() { /* ... */ }
          }
        `,
      },
    ],
    benefits: {
      title: "Benefits (Pros)",
      content: [
        "**Reduced Implementation Burden:** Implement only what’s relevant to the class.",
        "**Cleaner Abstractions:** Interfaces are easier to understand and maintain.",
        "**Better Decoupling:** Promotes separation of concerns and focused class responsibilities.",
      ],
    },
    cons: {
      title: "Cons / Gotchas",
      content: [
        "**Too Many Interfaces:** Splitting interfaces too finely can lead to complexity and clutter.",
        "**YAGNI Risk:** Prematurely splitting interfaces may be unnecessary for simple systems.",
      ],
    },
    antiPatterns: {
      title: "Common Anti-Patterns",
      content: [
        "**Overloaded Interfaces:** Classes implementing dozens of unrelated methods.",
        "**Throwing NotImplemented Errors:** A sign you're violating ISP and need to separate responsibilities.",
      ],
    },
    conclusion: `
      ISP helps reduce unnecessary dependencies by ensuring classes only implement what they actually use. It results in more modular, flexible, and client-oriented design.
    `,
  };
  
  export default ispArticleData;
  