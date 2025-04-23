// articleData.js
const articleData = {
  introduction:
    'Anti-patterns in TypeScript undermine the benefits of static typing and can introduce maintenance challenges, runtime issues, and confusion in large codebases.',

  keyPrinciples: {
    title: 'Key Anti-Patterns',
    content: [
      '**Overusing Any:** Relying on `any` bypasses type safety and can lead to unexpected runtime errors.',
      '**Ignoring Errors:** Using `// @ts-ignore` or suppressing compiler warnings accumulates technical debt.',
      '**Mixing Modules & Namespaces:** Inconsistent import patterns and global namespace pollution complicate module resolution.',
      '**Overcomplicating Types:** Excessively complex type definitions hinder readability and onboarding.',
      '**Disabled Strict Mode:** Turning off strict compiler options weakens the type system protections.',
    ],
  },

  codeExamples: [
    {
      title: 'Overusing Any',
      code: `// Anti-pattern: any defeats static checks
  function parse(input: any) {
    return JSON.parse(input);
  }
  
  // Better: use unknown and validate
  function parseSafe(input: unknown) {
    if (typeof input === 'string') {
      return JSON.parse(input);
    }
    throw new Error('Invalid input');
  }`,
    },
    {
      title: 'Ignoring Errors',
      code: `// Anti-pattern: silencing errors
  // @ts-ignore
  const count: number = someUnknownValue;
  
  // Better: handle errors explicitly
  if (typeof someUnknownValue === 'number') {
    const countSafe: number = someUnknownValue;
  } else {
    throw new Error('Expected a number');
  }`,
    },
  ],

  benefits: {
    title: 'Mitigations',
    content: [
      '**Prefer Unknown Over Any:** Use `unknown` and perform type checks to maintain safety.',
      '**Resolve Errors:** Fix type mismatches instead of suppressing them with directives.',
      '**Standardize Imports:** Stick to ES modules (`import/export`) and avoid legacy namespaces.',
      '**Simplify Types:** Leverage utility types and avoid excessive nested generics.',
      '**Enable Strict Mode:** Keep compiler strict settings on to catch issues early.',
    ],
  },

  cons: {
    title: 'Consequences',
    content: [
      '**Runtime Failures:** Lack of compile-time checks leads to uncaught exceptions in production.',
      '**Inconsistent Codebase:** Varied patterns cause confusion and harder maintenance.',
      '**Bloated Definitions:** Complex types slow down IDEs and increase cognitive load.',
      '**Technical Debt:** Suppressed warnings accumulate and become costly to resolve later.',
    ],
  },

  antiPatterns: {
    title: 'Anti-Patterns List',
    content: [
      'Overusing Any',
      'Ignoring Errors',
      'Mixing Modules & Namespaces',
      'Overcomplicating Types',
      'Disabled Strict Mode',
    ],
  },

  conclusion:
    'Avoiding these anti-patterns and applying the recommended mitigations ensures TypeScript projects remain robust, maintainable, and true to the benefits of static typing.',
}

export default articleData
