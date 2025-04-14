const componentPatternsArticleData = {
    introduction: `
      React component patterns help developers write scalable, maintainable, and reusable UI code. By applying established design techniques, teams can separate concerns, isolate logic, and improve flexibility across components.
    `,
  
    keyPrinciples: {
      title: "Key Component Patterns",
      content: [
        "**Presentational & Container:** Divide components into dumb (UI-only) and smart (logic/state) units.",
        "**Compound Components:** Use parent-child composition and shared context for flexible, declarative usage.",
        "**Higher-Order Components (HOC):** Wrap components with added functionality using a function.",
        "**Render Props:** Pass render logic via a function prop to enable flexible component behavior.",
        "**Controlled vs. Uncontrolled:** Decide whether a component manages its own state or receives state as props.",
        "**Hooks as Abstraction:** Custom hooks promote DRY logic and better separation of concerns.",
        "**Slots / Children API:** Let parent components inject layout/behavior into children flexibly via children or prop APIs."
      ]
    },
  
    codeExamples: [
      {
        title: "Presentational vs Container",
        code: `
          // Presentational
          const UserList = ({ users }) => (
            <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
          );
  
          // Container
          const UserListContainer = () => {
            const [users, setUsers] = useState([]);
            useEffect(() => { fetchUsers().then(setUsers); }, []);
            return <UserList users={users} />;
          };
        `
      },
      {
        title: "Compound Components",
        code: `
          const Tabs = ({ children }) => <div>{children}</div>;
          Tabs.Panel = ({ children }) => <div>{children}</div>;
  
          // Usage
          <Tabs>
            <Tabs.Panel>Panel 1</Tabs.Panel>
            <Tabs.Panel>Panel 2</Tabs.Panel>
          </Tabs>
        `
      },
      {
        title: "Higher-Order Component (HOC)",
        code: `
          function withLoading(Component) {
            return function Wrapped(props) {
              return props.loading ? <p>Loading...</p> : <Component {...props} />;
            };
          }
        `
      },
      {
        title: "Render Props",
        code: `
          const MouseTracker = ({ render }) => {
            const [pos, setPos] = useState({ x: 0, y: 0 });
            return <div onMouseMove={e => setPos({ x: e.clientX, y: e.clientY })}>
              {render(pos)}
            </div>;
          };
        `
      },
      {
        title: "Controlled vs Uncontrolled",
        code: `
          // Controlled input
          const [value, setValue] = useState('');
          <input value={value} onChange={e => setValue(e.target.value)} />;
  
          // Uncontrolled input
          <input defaultValue="default" />;
        `
      },
      {
        title: "Hooks as Abstraction",
        code: `
          function useCounter() {
            const [count, setCount] = useState(0);
            const increment = () => setCount(c => c + 1);
            return { count, increment };
          }
  
          function Counter() {
            const { count, increment } = useCounter();
            return <button onClick={increment}>{count}</button>;
          }
        `
      },
      {
        title: "Children / Slots API",
        code: `
          const Card = ({ title, children, footer }) => (
            <div>
              <h3>{title}</h3>
              <div>{children}</div>
              {footer && <footer>{footer}</footer>}
            </div>
          );
  
          <Card title="Profile" footer={<p>Footer content</p>}>
            <p>Main content</p>
          </Card>;
        `
      }
    ],
  
    benefits: {
      title: "Benefits (Pros)",
      content: [
        "**Reusability:** Isolate logic and markup for reuse across the app.",
        "**Separation of Concerns:** Clarify responsibilities between layout, state, and behavior.",
        "**Testability:** Small and pure components are easier to test.",
        "**Composition:** Enables flexible nesting and overrides via props, children, or render functions."
      ]
    },
  
    cons: {
      title: "Cons",
      content: [
        "**Over-Abstraction:** Too many layers may obscure the intent of logic.",
        "**Premature Optimization:** Introducing patterns too early can make simple components complex."
      ]
    },
  
    antiPatterns: {
      title: "Common Anti-Patterns / Pitfalls",
      content: [
        "**Mixing Patterns:** Combining HOCs and render props or hooks in one component can be confusing.",
        "**Tightly Coupled State/UI:** Baking logic directly into components without abstraction.",
        "**Misusing Context:** Using context as a replacement for local state or for deeply nested unrelated data."
      ]
    },
  
    conclusion: `
      Component design patterns are the foundation of scalable React applications. Understanding when and how to apply these techniques is key to delivering readable, maintainable, and user-friendly interfaces.
    `
  };
  
  export default componentPatternsArticleData;