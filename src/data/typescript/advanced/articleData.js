// articleData.js
const articleData = {
  introduction:
    'Advanced TypeScript features empower developers to write more expressive, scalable, and maintainable code by leveraging sophisticated typing capabilities and meta-programming constructs.',

  keyPrinciples: {
    title: 'Advanced Features',
    content: [
      '**Interfaces & Type Aliases:** Define precise data shapes and create reusable type compositions.',
      '**OOP Class Features:** Use abstract classes, accessors, readonly modifiers, and static members for complex inheritance hierarchies.',
      '**Function Overloading:** Offer multiple signatures for functions to handle different input types elegantly.',
      '**Generics & Constraints:** Build flexible, type-safe functions and classes with reusable generic parameters and constraints.',
      '**Const Enums:** Optimize bundle size by inlining enum values at compile time.',
      '**Decorators:** Annotate classes and members to implement cross-cutting concerns declaratively.',
      '**Conditional & Mapped Types:** Create types that transform other types dynamically based on conditions or property mappings.',
      '**Utility Types:** Leverage built-in helpers like Partial, Required, Readonly, Pick, and Omit for common type transformations.',
    ],
  },

  codeExamples: [
    {
      title: 'Interface & Type Alias',
      code: `interface User { id: number; name: string; }
type ID = User['id'];`,
    },
    {
      title: 'Class Features',
      code: `abstract class Entity {
  protected readonly id: string;
  constructor(id: string) { this.id = id; }
  abstract print(): void;
}
class Person extends Entity {
  constructor(id: string, private name: string) { super(id); }
  print() { console.log(this.id, this.name); }
}`,
    },
    {
      title: 'Function Overloading',
      code: `function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  return a + b;
}`,
    },
    {
      title: 'Generics & Constraints',
      code: `function wrap<T extends { length: number }>(arg: T): T {
  console.log(arg.length);
  return arg;
}
wrap('hello'); // OK
wrap([1,2,3]); // OK`,
    },
    {
      title: 'Const Enums',
      code: `const enum Roles { Admin, User }
const role: Roles = Roles.Admin;
console.log(role); // 0 (inlined)`,
    },
    {
      title: 'Decorators',
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
      title: 'Conditional & Mapped Types',
      code: `type Options<T> = { [P in keyof T]: T[P] };
type Nullable<T> = { [P in keyof T]?: T[P] | null };`,
    },
    {
      title: 'Utility Types',
      code: `interface Person { name: string; age: number; location?: string; }
type RequiredPerson = Required<Person>;
type PartialPerson = Partial<Person>;
type ReadonlyPerson = Readonly<Person>;`,
    },
  ],

  benefits: {
    title: 'Benefits',
    content: [
      '**Expressive Types:** Capture complex data relationships with precision.',
      '**Code Safety:** Advanced compile-time checks prevent subtle bugs in large codebases.',
      '**Meta-Programming:** Decorators and mapped types unlock powerful patterns like DI and automated validation.',
      '**Optimized Output:** Const enums and inference reduce runtime overhead.',
    ],
  },

  cons: {
    title: 'Drawbacks',
    content: [
      '**Complexity Overhead:** Advanced types can be hard to understand and debug.',
      '**Compilation Impact:** Excessive type computations may slow down the compiler.',
      '**Tooling Limitations:** Some IDE features may struggle with deeply nested or conditional types.',
    ],
  },

  antiPatterns: {
    title: 'Anti-Patterns',
    content: [
      '**Over-Engineering Types:** Creating types that are too abstract or convoluted.',
      '**Unnecessary Decorators:** Using decorators for simple logic that could be implemented directly.',
      '**Ignoring Inference:** Manually annotating where TypeScript could infer types safely.',
    ],
  },

  conclusion:
    'Mastering advanced TypeScript features enables you to architect robust applications with clear contracts and reusable abstractions—but balance complexity to maintain readability and performance.',
}

export default articleData
