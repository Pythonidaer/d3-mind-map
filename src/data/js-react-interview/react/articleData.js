const reactArticleData = {
    introduction: `
      React is a modern JavaScript library for building user interfaces. It allows developers to build encapsulated components that manage their own state, then compose them to make complex UIs. This guide covers essential patterns, hooks, rendering techniques, and best practices.
    `,
  
    keyPrinciples: {
      title: "Key React Principles",
      content: [
        "**Component-Based Architecture:** UI is broken into reusable, isolated pieces called components.",
        "**Declarative Rendering:** Describe what the UI should look like for any given state, and React will update the DOM accordingly.",
        "**Unidirectional Data Flow:** Data flows from parent to child via props, while state changes can be lifted up.",
        "**Hooks:** Enable state, context, and side-effects in functional components.",
        "**Composition over Inheritance:** Components can be nested and reused using children and props."
      ]
    },
  
    codeExamples: [
      {
        title: "Functional Components",
        code: `
          function Greeting({ name }) {
            return <h1>Hello, {name}!</h1>;
          }
          // <Greeting name=\"Alice\" />
        `
      },
      {
        title: "JSX Syntax",
        code: `
          const element = <div className=\"box\">Hello, JSX!</div>;
        `
      },
      {
        title: "useState Hook",
        code: `
          const [count, setCount] = useState(0);
          return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
        `
      },
      {
        title: "useEffect Hook",
        code: `
          useEffect(() => {
            console.log('Component mounted');
            return () => console.log('Cleanup');
          }, []);
        `
      },
      {
        title: "useContext Hook",
        code: `
          const ThemeContext = React.createContext('light');
          const App = () => (
            <ThemeContext.Provider value=\"dark\">
              <Toolbar />
            </ThemeContext.Provider>
          );
          const Toolbar = () => {
            const theme = useContext(ThemeContext);
            return <div className={theme}>Toolbar</div>;
          };
        `
      },
      {
        title: "useRef Hook",
        code: `
          const inputRef = useRef();
          return (
            <>
              <input ref={inputRef} />
              <button onClick={() => inputRef.current.focus()}>Focus</button>
            </>
          );
        `
      },
      {
        title: "useMemo Hook",
        code: `
          const expensiveValue = useMemo(() => slowFunction(input), [input]);
        `
      },
      {
        title: "useCallback Hook",
        code: `
          const memoizedCallback = useCallback(() => {
            doSomething(a, b);
          }, [a, b]);
        `
      },
      {
        title: "Prop Drilling",
        code: `
          const Child = ({ message }) => <p>{message}</p>;
          const Parent = ({ message }) => <Child message={message} />;
          const Grandparent = () => <Parent message=\"Hi\" />;
        `
      },
      {
        title: "Lifting State Up",
        code: `
          const Parent = () => {
            const [value, setValue] = useState('');
            return <Child value={value} onChange={setValue} />;
          };
          const Child = ({ value, onChange }) => (
            <input value={value} onChange={e => onChange(e.target.value)} />
          );
        `
      },
      {
        title: "Conditional Rendering",
        code: `
          return isLoggedIn ? <Dashboard /> : <Login />;
        `
      },
      {
        title: "List Rendering",
        code: `
          const items = ['A', 'B', 'C'];
          return (
            <ul>
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          );
        `
      },
      {
        title: "Children Prop",
        code: `
          const Container = ({ children }) => <div className=\"box\">{children}</div>;
          // <Container><p>Hello</p></Container>
        `
      },
      {
        title: "Custom Hooks",
        code: `
          const useToggle = () => {
            const [value, setValue] = useState(false);
            const toggle = () => setValue(v => !v);
            return [value, toggle];
          };
        `
      },
      {
        title: "Compound Components",
        code: `
          const Tabs = ({ children }) => <div>{children}</div>;
          Tabs.Tab = ({ children }) => <div>{children}</div>;
        `
      },
      {
        title: "Form State",
        code: `
          const [email, setEmail] = useState('');
          <input value={email} onChange={e => setEmail(e.target.value)} />;
        `
      },
      {
        title: "Validation",
        code: `
          const handleSubmit = e => {
            e.preventDefault();
            if (!email.includes('@')) {
              alert('Invalid email');
            }
          };
        `
      },
      {
        title: "onClick / onChange",
        code: `
          <input onChange={e => console.log(e.target.value)} />
          <button onClick={() => alert('Clicked!')}>Click me</button>
        `
      },
      {
        title: "preventDefault",
        code: `
          const handleSubmit = e => {
            e.preventDefault();
            console.log('Form submitted');
          };
        `
      },
      {
        title: "Boilerplate",
        code: `
          // Using React Router
          import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
          <Router>
            <Routes>
              <Route path=\"/\" element={<Home />} />
            </Routes>
          </Router>
        `
      },
      {
        title: "Learning Curve",
        code: `
          // Learning lifecycle, JSX, hooks, and component structure
          useEffect(() => { /* side effects */ }, []);
        `
      },
      {
        title: "Overhead for Simple Sites",
        code: `
          // Static HTML might be enough for a personal landing page
          const HomePage = () => <div>Welcome to my site</div>;
        `
      },
      {
        title: "Prop Drilling (Anti-Pattern)",
        code: `
          const GreatGrandChild = ({ user }) => <p>{user.name}</p>;
          const Child = ({ user }) => <GreatGrandChild user={user} />;
          const Parent = ({ user }) => <Child user={user} />;
        `
      },
      {
        title: "Overusing useEffect",
        code: `
          useEffect(() => {
            console.log('Always logs');
          }); // Missing deps or misused effect
        `
      },
      {
        title: "Anonymous Functions in JSX",
        code: `
          <button onClick={() => console.log('clicked')}>Click</button>
          // Better: define callback outside render
        `
      },
      {
        title: "Mutating State Directly",
        code: `
          const [obj, setObj] = useState({ a: 1 });
          obj.a = 2; // ❌ don’t mutate
          setObj({ ...obj, a: 2 }); // ✅ copy and update
        `
      },
      {
        title: "Missing Keys in Lists",
        code: `
          items.map((item, index) => <li key={index}>{item}</li>); // Not ideal
          // Prefer unique, stable keys
        `
      },
      {
        title: "Error Boundary Component",
        code: `
          class ErrorBoundary extends React.Component {
            constructor(props) {
              super(props);
              this.state = { hasError: false };
            }
      
            static getDerivedStateFromError(error) {
              return { hasError: true };
            }
      
            componentDidCatch(error, info) {
              console.error('Error caught:', error, info);
            }
      
            render() {
              if (this.state.hasError) {
                return <h1>Something went wrong.</h1>;
              }
              return this.props.children;
            }
          }
        `
      },
      {
        title: "React.lazy() with Suspense",
        code: `
          import React, { Suspense } from 'react';
      
          const LazyComponent = React.lazy(() => import('./MyComponent'));
      
          function App() {
            return (
              <Suspense fallback={<div>Loading...</div>}>
                <LazyComponent />
              </Suspense>
            );
          }
        `
      },
    ],
  
    benefits: {
      title: "Benefits (Pros)",
      content: [
        "**Reusable UI Components:** Helps in organizing code and managing complexity.",
        "**Great Developer Experience:** With tools like React DevTools, fast refresh, and hot reloading.",
        "**Strong Ecosystem:** Supported by Next.js, React Router, Redux, and more.",
        "**Efficient Updates:** Virtual DOM and reconciliation make updates fast and predictable.",
        "**Community and Documentation:** A vast ecosystem and well-maintained documentation."
      ]
    },
  
    cons: {
      title: "Cons",
      content: [
        "**Boilerplate:** May require configuration for routing, state, and build tools.",
        "**Frequent Updates:** API changes or new best practices may feel overwhelming.",
        "**JSX Learning Curve:** Mixing HTML and JS may feel unnatural to newcomers.",
        "**Overhead for Simple Sites:** Might be overkill for static or minimal interactions."
      ]
    },
  
    antiPatterns: {
      title: "Common Anti-Patterns / Pitfalls",
      content: [
        "**Prop Drilling:** Passing props through many layers. Consider context or state management.",
        "**Overusing useEffect:** Running side effects when not necessary. Use it thoughtfully.",
        "**Anonymous Functions in JSX:** Can cause re-renders. Memoize with useCallback if needed.",
        "**Mutating State Directly:** Always use state setters; don’t mutate state objects directly.",
        "**Missing Keys in Lists:** Each list item should have a unique key for efficient rendering."
      ]
    },
  
    conclusion: `
      Mastering React involves understanding its core concepts like components, props, state, and hooks. By following best practices and avoiding anti-patterns, you can build maintainable and performant UIs. The patterns you use will shape how readable and scalable your code becomes.
    `
  };
  
  export default reactArticleData;
  