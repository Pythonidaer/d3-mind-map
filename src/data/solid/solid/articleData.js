// src/data/solid/articleData.js
const articleData = {
    introduction: `
      The SOLID Principles are a set of five foundational guidelines in object-oriented design
      that promote maintainable, flexible, and robust code. By applying these principles,
      developers can create systems that are easier to understand, extend, and test over time.
    `,
  
    keyPrinciples: {
      title: 'Key Principles and Concepts',
      content: [
        'Single Responsibility Principle (SRP): A class or module should have only one reason to change.',
        'Open/Closed Principle (OCP): Entities should be open for extension but closed for modification.',
        'Liskov Substitution Principle (LSP): Subtypes must be substitutable for their base types.',
        'Interface Segregation Principle (ISP): Clients should not be forced to depend on interfaces they do not use.',
        'Dependency Inversion Principle (DIP): High-level modules should not depend on low-level modules—both should depend on abstractions.',
      ],
    },
  
    codeExamples: [
      // SRP Examples
      {
        title: 'Single Responsibility Principle - JavaScript Good Example',
        code: `// Good Example: SRP in JavaScript
  // This example separates validation and persistence into distinct classes.
  
  class UserValidator {
    // Responsible only for validation
    validate(user) {
      if (!user.name) throw new Error('Name required');
      // point of interest: no persistence here
    }
  }
  
  class UserRepository {
    // Responsible only for data access
    save(user) {
      // simulate DB save
      console.log('User saved:', user);
    }
  }`
      },
      {
        title: 'Single Responsibility Principle - JavaScript Bad Example',
        code: `// Bad Example: SRP Violation in JavaScript
  // This class handles validation, persistence, and email sending—all in one.
  
  class UserManager {
    save(user) {
      // combining validation, database, and email logic
      if (!user.name) throw new Error('Name required');                // mixed concern
      console.log('Saving to DB');                                     // mixed concern
      console.log('Sending welcome email');                            // mixed concern
    }
  }`
      },
      {
        title: 'Single Responsibility Principle - React Good Example',
        code: `// Good Example: SRP in React with Hooks and Components
  // Hook handles data fetching; component handles rendering only.
  
  // useFetchUser.js
  export function useFetchUser(id) {
    const [user, setUser] = useState(null);
    useEffect(() => {
      fetch(\`/api/user/\${id}\`)
        .then(res => res.json())
        .then(setUser);
    }, [id]);
    return user;
  }
  
  // UserProfile.js
  export function UserProfile({ id }) {
    const user = useFetchUser(id);
    if (!user) return <p>Loading...</p>;
    return <div>User: {user.name}</div>;                           // UI rendering only
  }`
      },
      {
        title: 'Single Responsibility Principle - React Bad Example',
        code: `// Bad Example: SRP Violation in React
  // This component fetches data, validates input, and updates API in one.
  
  function UserForm({ id }) {
    const [name, setName] = useState('');
    useEffect(() => {
      fetch(\`/api/user/\${id}\`)
        .then(r => r.json())
        .then(u => setName(u.name));                                  // data + state logic
    }, [id]);
  
    function handleSubmit() {
      if (!name) return;                                             // validation logic
      fetch('/api/user', { method: 'POST', body: JSON.stringify({ name }) }); // API call
    }
  
    return (
      <>                                                             // mixes UI, validation, and fetch
        <input value={name} onChange={e => setName(e.target.value)} />
        <button onClick={handleSubmit}>Save</button>
      </>
    );
  }`
      },
  
      // OCP Examples
      {
        title: 'Open/Closed Principle - JavaScript Good Example',
        code: `// Good Example: OCP in JavaScript with Strategy Pattern
  // New behaviors added via subclasses without modifying existing code.
  
  class PricingStrategy {
    calculate(price) { return price; }                              // base behavior
  }
  class SaleStrategy extends PricingStrategy {
    calculate(price) { return price * 0.9; }                        // extension
  }
  class ClearanceStrategy extends PricingStrategy {
    calculate(price) { return price * 0.5; }                        // extension
  }
  
  const strategies = {
    sale: new SaleStrategy(),
    clearance: new ClearanceStrategy(),
  };
  console.log(strategies.sale.calculate(100));                      // uses extended behavior
  `    },
      {
        title: 'Open/Closed Principle - JavaScript Bad Example',
        code: `// Bad Example: OCP Violation in JavaScript
  // Modifying function body to add new conditions violates closure.
  
  function calculateDiscount(price, type) {
    if (type === 'regular') return 0;
    if (type === 'sale') return price * 0.1;
    // adding new type requires editing this code directly
    if (type === 'vip') return price * 0.2;
  }`
      },
      {
        title: 'Open/Closed Principle - React Good Example',
        code: `// Good Example: OCP in React via Component Composition
  // Base Button is untouched; extended variants are new components.
  
  function Button({ className, children }) {
    return <button className={className}>{children}</button>;
  }
  export function PrimaryButton(props) {
    return <Button {...props} className="btn-primary" />;         // extension via composition
  }
  export function DangerButton(props) {
    return <Button {...props} className="btn-danger" />;          // extension via composition
  }`
      },
      {
        title: 'Open/Closed Principle - React Bad Example',
        code: `// Bad Example: OCP Violation in React
  // Adding new types requires editing this single component.
  
  function Button({ type, children }) {
    const className =
      type === 'primary' ? 'btn-primary' :
      type === 'danger'  ? 'btn-danger'  :
      'btn-default';
    return <button className={className}>{children}</button>;      // closed for extension violation
  }`
      },
  
      // LSP Examples
      {
        title: 'Liskov Substitution Principle - JavaScript Good Example',
        code: `// Good Example: LSP in JavaScript
  // Subclasses implement same contract without altering behavior.
  
  class Shape {
    area() { throw new Error('Implement area'); }
  }
  class Rectangle extends Shape {
    constructor(w, h) { super(); this.w = w; this.h = h; }
    area() { return this.w * this.h; }                             // consistent contract
  }
  class Square extends Shape {
    constructor(s) { super(); this.s = s; }
    area() { return this.s * this.s; }                              // consistent contract
  }`
      },
      {
        title: 'Liskov Substitution Principle - JavaScript Bad Example',
        code: `// Bad Example: LSP Violation in JavaScript
  // Subclass changes expected behavior of parent.
  
  class Rectangle {
    setWidth(w) { this.w = w; }
    setHeight(h) { this.h = h; }
    area() { return this.w * this.h; }
  }
  class Square extends Rectangle {
    setWidth(w) { this.w = this.h = w; }                           // breaks height-width contract
  }
  `    },
      {
        title: 'Liskov Substitution Principle - React Good Example',
        code: `// Good Example: LSP in React with Props
  // ProfilePic can replace Avatar without breaking UIs.
  
  function Avatar({ size, src }) {
    return <img width={size} height={size} src={src} />;
  }
  export function ProfilePic(props) {
    return <Avatar {...props} />;                                   // honors same props contract
  }`
      },
      {
        title: 'Liskov Substitution Principle - React Bad Example',
        code: `// Bad Example: LSP Violation in React
  // Subclass component throws error, breaking parent contract.
  
  class Button extends React.Component {
    handleClick() { console.log('clicked'); }
  }
  class BrokenButton extends Button {
    handleClick() { throw new Error('Not supported'); }           // violates expected behavior
  }`
      },
  
      // ISP Examples
      {
        title: 'Interface Segregation Principle - JavaScript Good Example',
        code: `// Good Example: ISP in JavaScript (Segregated Interfaces)
  // Interfaces focus on specific capabilities.
  
  interface IReader { read(): string; }
  interface IWriter { write(data: string): void; }
  class FileService implements IReader, IWriter {
    read() { return 'data'; }
    write(data: string) { /* save logic */ }
  }`
      },
      {
        title: 'Interface Segregation Principle - JavaScript Bad Example',
        code: `// Bad Example: ISP Violation in JavaScript (Fat Interface)
  // One interface forces implementers to define unused methods.
  
  interface IMachine {
    print(): void;
    scan(): void;
    fax(): void;
  }
  class SimplePrinter implements IMachine {
    print() {}
    scan() { throw new Error('Unsupported'); }                    // unnecessary
    fax()  { throw new Error('Unsupported'); }                    // unnecessary
  }`
      },
      {
        title: 'Interface Segregation Principle - React Good Example',
        code: `// Good Example: ISP in React (Focused Props)
  // Components receive only needed props.
  
  function Title({ text }) {
    return <h1>{text}</h1>;
  }
  function SaveButton({ onSave }) {
    return <button onClick={onSave}>Save</button>;                 // no extra props
  }`
      },
      {
        title: 'Interface Segregation Principle - React Bad Example',
        code: `// Bad Example: ISP Violation in React (Overloaded Props)
  // Component receives many props it never uses.
  
  function Widget({ title, onSave, onDelete, theme, locale }) {
    return <div>{title}</div>;                                     // theme & locale unused
  }`
      },
  
      // DIP Examples
      {
        title: 'Dependency Inversion Principle - JavaScript Good Example',
        code: `// Good Example: DIP in JavaScript (Constructor Injection)
  // High-level service depends on abstraction (apiClient).
  
  class UserService {
    constructor(apiClient) { this.client = apiClient; }
    fetchUsers() { return this.client.get('/users'); }
  }
  `    },
      {
        title: 'Dependency Inversion Principle - JavaScript Bad Example',
        code: `// Bad Example: DIP Violation in JavaScript (Tight Coupling)
  // Service instantiates concrete implementation directly.
  
  class UserService {
    constructor() {
      this.client = new HttpClient();                              // tight coupling
    }
    fetchUsers() { return this.client.get('/users'); }
  }
  `    },
      {
        title: 'Dependency Inversion Principle - React Good Example',
        code: `// Good Example: DIP in React (Context Injection)
  // Component obtains client from context, not instantiating it.
  
  // ApiContext.js
  export const ApiContext = React.createContext(null);
  
  // Dashboard.js
  export function Dashboard() {
    const apiClient = useContext(ApiContext);
    useEffect(() => { apiClient.get('/data').then(setData); }, [apiClient]);
    return <div>{JSON.stringify(data)}</div>;
  }
  `    },
      {
        title: 'Dependency Inversion Principle - React Bad Example',
        code: `// Bad Example: DIP Violation in React (Direct Instantiation)
  // Component directly calls fetch, coupling logic to global API.
  
  function Dashboard() {
    useEffect(() => {
      fetch('/data')                                                // direct coupling
        .then(r => r.json())
        .then(setData);
    }, []);
    return <div>{data}</div>;
  }
  `    }
    ],
  
    benefits: {
      title: 'Benefits of SOLID',
      content: [
        'Improved maintainability through clear responsibilities.',
        'Enhanced testability by decoupling modules.',
        'Greater flexibility and extensibility of code.',
        'Reduced coupling between components.',
        'Simplified refactoring and scaling of systems.'
      ],
    },
  
    cons: {
      title: 'Cons / Gotchas',
      content: [
        'More boilerplate and files may increase initial overhead.',
        'Layers of abstraction can add complexity.',
        'Learning curve for new developers.',
        'Risk of over-engineering small projects.'
      ],
    },
  
    antiPatterns: {
      title: 'Common Anti-Patterns',
      content: [
        'God Objects: Violates SRP.',
        'Switch Statements: Violates OCP.',
        'Broken Substitution: Violates LSP.',
        'Fat Interfaces: Violates ISP.',
        'Tight Coupling: Violates DIP.'
      ],
    },
  
    conclusion: `
      Applying the SOLID principles consistently leads to cleaner, more robust codebases.
      While it requires discipline, the long-term benefits in maintainability,
      testability, and extensibility are well worth the effort.
    `,
  };
  
  export default articleData;
  