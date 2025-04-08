const srpArticleData = {
    introduction: `
      The Single Responsibility Principle (SRP) is about structuring code so that each module or class handles one and only one aspect of the system’s functionality.
    `,
    keyPrinciples: {
      title: "Key Concepts",
      content: [
        "**One Responsibility:** Each class or module should focus on a single concern.",
        "**Reason to Change:** A module should have only one reason to change. Multiple responsibilities mean multiple potential changes.",
        "**Separation of Concerns:** Split code into layers like validation, business logic, and persistence.",
      ],
    },
    codeExamples: [
      {
        title: "Before SRP (Bad Example)",
        code: `
          class UserManager {
            saveUser(user) {
              // Save user to DB
            }
            validateUser(user) {
              // Validate user data
            }
            sendWelcomeEmail(user) {
              // Send email
            }
          }
        `,
      },
      {
        title: "After SRP (Good Example)",
        code: `
          class UserValidator {
            validate(user) {
              // Validate logic
            }
          }
  
          class UserRepository {
            save(user) {
              // Save to DB
            }
          }
  
          class EmailService {
            sendWelcome(user) {
              // Send email
            }
          }
        `,
      },
    ],
    benefits: {
      title: "Benefits (Pros)",
      content: [
        "**Easier Testing:** Smaller, focused classes are easier to test.",
        "**Better Maintainability:** Fewer side effects when requirements change.",
        "**Improved Reusability:** Single-purpose classes can be reused elsewhere.",
      ],
    },
    cons: {
      title: "Cons / Gotchas",
      content: [
        "**Too Many Classes:** Over-separating responsibilities can lead to class explosion.",
        "**Initial Overhead:** Requires planning and understanding of domain responsibilities.",
      ],
    },
    antiPatterns: {
      title: "Common Anti-Patterns",
      content: [
        "**God Objects:** Classes doing too much (UI, logic, database).",
        "**Mixed Concerns:** Mixing validation with persistence logic.",
      ],
    },
    conclusion: `
      SRP encourages clean, modular, and maintainable code by ensuring each part of your system has a well-defined purpose.
      It’s a foundational principle that supports all other SOLID practices.
    `,
  };
  
  export default srpArticleData;
  