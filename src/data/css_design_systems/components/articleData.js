// articleData.js
const articleData = {
    introduction:
      'Reusable components are the backbone of scalable design systems. They allow for consistent UI patterns, encapsulate styling logic, and empower developers to build quickly with predictable results. A strong component strategy includes naming conventions, scoped styling, customization mechanisms, and clear documentation.',
  
    keyPrinciples: {
      title: 'Reusable Component Concepts',
      content: [
        '**Naming Conventions:** Use consistent, semantic naming (e.g., BEM) to clarify class purpose and structure.',
        '**Scoped Styles:** Prevent style collisions across components using scoping techniques like CSS Modules or CSS-in-JS.',
        '**Modifier Support:** Components should support multiple states or variants (e.g., primary, disabled) using tokens or modifier classes.',
        '**Documentation:** Every component should have clear usage instructions, examples, and notes on behavior and accessibility.'
      ]
    },
  
    benefits: {
      title: 'Benefits',
      content: [
        '✅ Increases consistency across UI patterns.',
        '✅ Reduces redundancy and rework by enabling reuse.',
        '✅ Improves team collaboration by standardizing structure.',
        '✅ Makes onboarding easier with documented and discoverable components.'
      ]
    },
  
    cons: {
      title: 'Cons',
      content: [
        '🚧 Poorly scoped styles can leak and break unrelated components.',
        '🚧 Inconsistent naming can confuse usage and limit discoverability.',
        '🚧 Without documentation, components are harder to adopt or extend.'
      ]
    },
  
    antiPatterns: {
      title: 'Anti-Patterns',
      content: [
        '**Style Leakage:** Using global or overly generic selectors causes styles to unintentionally affect other components.',
        '**Non-Semantic Class Names:** Descriptive class names like `.red-box` or `.wide-button` reflect styling, not role or intent.',
        '**Undocumented Components:** Components with unclear or missing docs lead to inconsistent usage and duplication.'
      ]
    },
  
    codeExamples: [
      {
        title: 'BEM Class Naming',
        code: `.button {
    display: inline-block;
    padding: 0.5rem 1rem;
  }
  .button--primary {
    background-color: var(--color-primary);
  }
  .button__icon {
    margin-right: 0.5rem;
  }`
      },
      {
        title: 'Scoped Styles with CSS Modules',
        code: `/* button.module.css */
  .button {
    background: var(--color-primary);
    border-radius: 8px;
    padding: 0.75rem 1.25rem;
  }
  
  /* Component */
  import styles from './button.module.css';
  
  export function Button() {
    return <button className={styles.button}>Click me</button>;
  }`
      },
      {
        title: 'CSS Variables for Modifiers',
        code: `.button {
    background-color: var(--btn-bg, #4f46e5);
    color: var(--btn-color, white);
    font-size: var(--btn-size, 1rem);
  }
  
  /* Theme override */
  .theme-dark {
    --btn-bg: #111827;
    --btn-color: #f9fafb;
  }`
      },
      {
        title: 'Documenting States with Storybook',
        code: `// Button.stories.js
  import { Button } from './Button';
  
  export default {
    title: 'Components/Button',
    component: Button
  };
  
  export const Primary = () => <Button variant="primary">Primary</Button>;
  export const Disabled = () => <Button disabled>Disabled</Button>;`
      },
      {
        title: 'Multi-State API Documentation',
        code: `/** 
   * Props:
   * - variant: "primary" | "secondary"
   * - disabled: boolean
   * - onClick: function
   * 
   * States:
   * - default
   * - hover
   * - focus
   * - loading
   */`
      }
    ],
  
    conclusion:
      'Reusable components accelerate development, enforce consistency, and improve maintainability. By combining scoped styling, semantic naming, flexible customization, and complete documentation, teams can build UI libraries that are intuitive, robust, and future-proof.'
  };
  
  export default articleData;
  