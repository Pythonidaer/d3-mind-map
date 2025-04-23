// articleData.js
const articleData = {
  introduction:
    'TypeScript fundamentals lay the groundwork for adding static typing, improved tooling, and object-oriented features to JavaScript. Understanding these core concepts is essential for writing safer, more maintainable code in large-scale projects.',

  keyPrinciples: {
    title: 'Key Principles',
    content: [
      '**Static Typing:** Optional type annotations enable compile-time checks, catching errors before runtime.',
      '**Basic Syntax:** Extends JavaScript syntax with types while retaining familiar constructs like let/const, arrays, and interfaces.',
      '**Classes & OOP:** Adds class-based inheritance, access modifiers, and interfaces for structured, reusable code.',
      '**Enums:** Defines named constants for improved readability and maintainability.',
      '**Generics:** Creates reusable components that maintain type safety across different data types.',
      '**Decorators:** Applies declarative meta-programming features to classes and their members.',
      '**Modules & Namespaces:** Organizes code into ES modules or TS namespaces for clarity and isolation.',
      '**Control Flow Analysis:** Infers and narrows variable types through program logic for enhanced type safety.',
      '**Syntactic Sugar:** Offers concise syntax (arrow functions, template literals) without altering runtime behavior.',
    ],
  },

  codeExamples: [
    {
      title: 'Static Typing Example',
      code: `// Explicit type annotations
let age: number = 30;
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}`,
    },
    {
      title: 'Type Inference Example',
      code: `// Compiler infers the type as number
let count = 42;
// count = 'forty-two'; // Error: Type 'string' is not assignable to type 'number'`,
    },
    {
      title: 'Generic Function Example',
      code: `function identity<T>(arg: T): T {
  return arg;
}
const output = identity<string>('myString'); // output inferred as string`,
    },
    {
      title: 'Generic Class Example',
      code: `class Box<T> {
  constructor(public value: T) {}
}
const box = new Box<number>(123); // box.value is a number`,
    },
    {
      title: 'Decorator Example',
      code: `function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class Greeter {
  constructor(public greeting: string) {}
}`,
    },
    {
      title: 'Module Example',
      code: `// math.ts
export function add(a: number, b: number): number {
  return a + b;
}
// app.ts
import { add } from './math';
console.log(add(2, 3)); // 5`,
    },
    {
      title: 'Control Flow Analysis Example',
      code: `function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value;
  }
  if (typeof padding === 'string') {
    return padding + value;
  }
  throw new Error('Invalid padding');
}`,
    },
    {
      title: 'Syntactic Sugar Example',
      code: `// Arrow function and template literal
const sum = (a: number, b: number) => a + b;
const name = 'World';
console.log(\`Hello, \${name}!\`);`,
    },
  ],

  benefits: {
    title: 'Benefits',
    content: [
      '**Early error detection:** Compile-time type checking catches bugs before runtime.',
      '**Enhanced IDE support:** Autocompletion, refactoring, and inline documentation powered by type information.',
      '**Improved maintainability:** Type annotations serve as self-documenting code, making large codebases easier to manage.',
    ],
  },

  cons: {
    title: 'Drawbacks',
    content: [
      '**Additional compilation step:** TypeScript requires transpilation to JavaScript before execution.',
      '**Learning curve:** Developers new to static typing must learn concepts like interfaces and generics.',
      '**Potential verbosity:** Explicit type annotations can make code more verbose than plain JavaScript.',
    ],
  },

  antiPatterns: {
    title: 'Anti-Patterns',
    content: [
      '**Overusing any:** Bypasses type safety and undermines TypeScript’s benefits.',
      '**Ignoring compiler errors:** Leads to unexpected runtime bugs when static checks are overlooked.',
      '**Mixing modules and namespaces:** Creates confusion and potential resolution issues in modern codebases.',
    ],
  },

  conclusion:
    'Understanding TypeScript fundamentals is key to leveraging its static typing and advanced features to build robust and maintainable applications. Mastery of these basics sets the stage for exploring more advanced TypeScript capabilities and best practices.',
}

export default articleData
