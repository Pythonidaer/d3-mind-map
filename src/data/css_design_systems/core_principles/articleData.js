// articleData.js
const articleData = {
    introduction:
      'Core principles are the foundation of any CSS Design System. These principles guide how components are built, styled, and maintained across an application, ensuring consistency, flexibility, and long-term scalability.',
  
    keyPrinciples: {
      title: 'Core Principles',
      content: [
        '**Consistency:** Maintains visual and behavioral uniformity throughout the system.',
        '**Succinctness:** Encourages clean, minimal CSS that is easier to read and maintain.',
        '**Separation of Concerns:** Keeps styles, structure, and behavior modular and independent.',
        '**Modularity:** Ensures components are self-contained and focused on a single task.',
        '**Cohesion:** Keeps related styles and logic grouped semantically inside components.',
        '**Composability & Configurability:** Makes components flexible and reusable via modifiers or tokens.',
        '**Loose Coupling:** Reduces interdependency between components by using interfaces for communication.',
        '**Soft Encapsulation:** Protects component boundaries while still allowing overrides when necessary.',
        '**Documentation:** Provides clear explanations and examples for usage and decision-making.'
      ]
    },
  
    benefits: {
      title: 'Benefits',
      content: [
        '✅ Predictable and scalable UI development process.',
        '✅ Easier collaboration between teams through shared conventions.',
        '✅ Faster onboarding for new developers due to standardized patterns.',
        '✅ Reduced bugs from inconsistent or overlapping styles.',
        '✅ Easier maintenance and refactoring over time.'
      ]
    },
  
    cons: {
      title: 'Cons',
      content: [
        '🚧 Initial setup and documentation can be time-consuming.',
        '🚧 Strict adherence may limit creative flexibility for UI designers.',
        '🚧 Requires team-wide discipline to follow conventions consistently.'
      ]
    },
  
    antiPatterns: {
      title: 'Anti-Patterns',
      content: [
        '**Global CSS Overreach:** Overusing global selectors or base styles that leak into components.',
        '**Deep Specificity Chains:** Overly nested selectors that become hard to override and maintain.',
        '**Inconsistent Naming:** Lack of a naming convention causes confusion and redundancy.',
        '**Overly Coupled Components:** Components that rely on specific DOM structures around them.',
        '**Documentation Drift:** When documentation becomes outdated or fails to reflect the system’s evolution.'
      ]
    },
  
    codeExamples: [
      {
        title: 'BEM-style Component CSS',
        code: `/* Block: button, Element: icon, Modifier: primary */
  .button {
    padding: 1rem 2rem;
    font-weight: bold;
  }
  .button--primary {
    background-color: var(--color-primary);
    color: white;
  }
  .button__icon {
    margin-right: 0.5rem;
  }`
      },
      {
        title: 'Using CSS Variables for Theming',
        code: `:root {
    --font-size-base: 16px;
    --color-primary: #4f46e5;
  }
  .button {
    font-size: var(--font-size-base);
    background-color: var(--color-primary);
  }`
      },
      {
        title: 'Scoped CSS with CSS Modules',
        code: `/* button.module.css */
  .button {
    border-radius: 8px;
    padding: 10px 20px;
    background: var(--color-primary);
  }
  
  /* React component */
  import styles from './button.module.css';
  export const Button = () => (
    <button className={styles.button}>Click me</button>
  );`
      }
    ],
  
    conclusion:
      'These core principles form the philosophical and practical basis for any CSS Design System. By codifying rules around modularity, consistency, and encapsulation, teams can build UIs that are not only beautiful and functional but also resilient to change and easy to evolve.'
  };
  
  export default articleData;
  