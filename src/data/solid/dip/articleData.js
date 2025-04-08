const dipArticleData = {
    introduction: `
      The Dependency Inversion Principle reduces coupling between high-level and low-level code by introducing abstractions between them.
      This enables more flexible, testable, and modular systems.
    `,
    keyPrinciples: {
      title: "Key Concepts",
      content: [
        "**High-Level Modules:** Orchestrate system behavior (e.g., business rules).",
        "**Low-Level Modules:** Perform low-level work (e.g., database, network).",
        "**Abstractions in the Middle:** Both types should depend on shared interfaces, not on each other directly.",
        "**Inversion:** Instead of top-level code depending on concrete classes, concrete classes are injected at runtime.",
      ],
    },
    codeExamples: [
      {
        title: "Before DIP (Bad Example)",
        code: `
          class MySQLDatabase {
            save(data) {
              console.log("Saving to MySQL");
            }
          }
  
          class UserService {
            constructor() {
              this.db = new MySQLDatabase();
            }
            saveUser(user) {
              this.db.save(user);
            }
          }
        `,
      },
      {
        title: "After DIP (Good Example)",
        code: `
          class DatabaseInterface {
            save(data) {
              throw new Error("Not implemented");
            }
          }
  
          class MySQLDatabase extends DatabaseInterface {
            save(data) {
              console.log("Saving to MySQL");
            }
          }
  
          class UserService {
            constructor(database) {
              this.db = database;
            }
            saveUser(user) {
              this.db.save(user);
            }
          }
  
          const db = new MySQLDatabase();
          const service = new UserService(db);
          service.saveUser({ name: "Alice" });
        `,
      },
    ],
    benefits: {
      title: "Benefits (Pros)",
      content: [
        "**Testability:** Easily mock dependencies in tests.",
        "**Flexibility:** Swap out implementations without changing high-level logic.",
        "**Separation of Concerns:** Encourages decoupled architecture.",
      ],
    },
    cons: {
      title: "Cons / Gotchas",
      content: [
        "**Added Complexity:** Requires upfront planning and extra abstractions.",
        "**Over-Engineering:** May not be necessary for small, simple apps.",
      ],
    },
    antiPatterns: {
      title: "Common Anti-Patterns",
      content: [
        "**Tight Coupling:** Directly instantiating dependencies within a class.",
        "**Hardcoding Dependencies:** Using `new` inside business logic instead of injection.",
      ],
    },
    conclusion: `
      DIP ensures that your code is driven by abstractions, not details.
      This makes it easier to test, evolve, and plug-and-play different modules across your application.
    `,
  };
  
  export default dipArticleData;
  