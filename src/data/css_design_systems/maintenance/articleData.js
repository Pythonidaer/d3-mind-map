// articleData.js
const articleData = {
    introduction:
      'A CSS Design System is not a one-and-done project — it’s a living asset. Maintenance and governance ensure it continues to evolve, stay consistent, and deliver long-term value across teams and products.',
  
    keyPrinciples: {
      title: 'Maintenance & Governance Practices',
      content: [
        '**Version Control:** Use Git to track changes, manage releases, and support multiple product versions.',
        '**Documentation Updates:** Keep usage guides in sync with live code, including rationale, examples, and changelogs.',
        '**System Audits:** Perform regular reviews to find inconsistencies, deprecated components, or accessibility issues.',
        '**Collaborative Governance:** Involve both designers and developers in proposing, reviewing, and approving system changes.'
      ]
    },
  
    benefits: {
      title: 'Benefits',
      content: [
        '✅ Prevents design drift and inconsistency over time.',
        '✅ Enables smooth onboarding and adoption through clear documentation.',
        '✅ Aligns updates with product and accessibility goals.',
        '✅ Encourages accountability and shared ownership across teams.'
      ]
    },
  
    cons: {
      title: 'Cons',
      content: [
        '🚧 Requires dedicated time for upkeep and governance.',
        '🚧 Without proper workflows, updates can become bottlenecks.',
        '🚧 Neglecting maintenance leads to outdated styles and loss of trust in the system.'
      ]
    },
  
    antiPatterns: {
      title: 'Anti-Patterns',
      content: [
        '**Outdated Documentation:** If docs don’t match code, the system becomes unreliable and confusing.',
        '**Manual-Only Updates:** Relying solely on human updates increases risk of inconsistency and broken experiences.',
        '**No Ownership or Review Process:** Without a structured process, changes may go unreviewed, or bad patterns may spread.'
      ]
    },
  
    codeExamples: [
      {
        title: 'Semantic Versioning Format',
        code: `# v1.2.3
  # 1 = breaking changes
  # 2 = new features
  # 3 = bug fixes
  
  # Example commit history:
  v2.0.0 - Replaced all base tokens and removed deprecated layouts
  v2.1.0 - Added dark mode toggle to Button
  v2.1.1 - Fixed focus ring bug on Input`
      },
      {
        title: 'Example Changelog',
        code: `## [2.3.0] - 2024-11-10
  ### Added
  - New "SuccessBadge" component
  - Token: --color-success-bg
  
  ### Changed
  - Updated .button--primary to use new spacing scale
  
  ### Fixed
  - Broken box-shadow on .card when hovered`
      },
      {
        title: 'Living Docs with Storybook',
        code: `// Button.stories.js
  export const States = () => (
    <>
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
    </>
  );
  
  // Markdown description:
  ### Props
  - \`variant\`: primary | secondary
  - \`disabled\`: boolean
  - \`loading\`: boolean`
      },
      {
        title: 'Accessibility Testing Script',
        code: `import axe from 'axe-core';
  
  axe.run(document, {
    runOnly: ['color-contrast', 'landmark-one-main', 'button-name']
  }).then(results => {
    console.log(results.violations);
  });`
      },
      {
        title: 'RFC Template for Governance',
        code: `## RFC: Deprecate .text-muted in favor of --text-secondary
  
  ### Summary
  We propose deprecating the class .text-muted to standardize on design tokens.
  
  ### Motivation
  - Reduces duplication
  - Improves theme support
  
  ### Migration Strategy
  - Replace .text-muted with var(--text-secondary)
  - Update docs & Storybook examples`
      }
    ],
  
    conclusion:
      'A strong maintenance and governance strategy transforms your CSS Design System from a one-time style guide into a long-lasting source of truth. With version control, living documentation, audits, and inclusive workflows, your system can evolve without chaos, maintain trust, and scale across teams and products.'
  };
  
  export default articleData;
  