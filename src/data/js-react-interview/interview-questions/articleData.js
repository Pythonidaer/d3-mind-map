const interviewQuestionsArticleData = {
    introduction: `
      Frontend interviews evaluate both technical expertise and collaboration skills. This guide categorizes common frontend interview questions into JavaScript, React, system design, performance, accessibility, and behavioral sections—along with tips and code snippets to practice your answers.
    `,
  
    keyPrinciples: {
      title: "Key Interview Focus Areas",
      content: [
        "**JavaScript Fundamentals:** Scope, hoisting, closures, async behavior, and ES features.",
        "**React Concepts:** Hooks, rendering behavior, state/props, and component design.",
        "**System Design:** Architecture, state management, modularity, and scalability.",
        "**Performance:** Optimizations like memoization, lazy loading, and throttling.",
        "**Accessibility:** Inclusive UIs via semantic HTML, keyboard access, and ARIA.",
        "**Behavioral:** Communication, feedback, conflict resolution, and team collaboration."
      ]
    },
  
    codeExamples: [
      {
        title: "Closure Example",
        code: `
          function outer() {
            let count = 0;
            return function inner() {
              return ++count;
            };
          }
          const counter = outer();
          counter(); // 1
          counter(); // 2
        `
      },
      {
        title: "useEffect Dependencies",
        code: `
          useEffect(() => {
            const handler = () => console.log('resize');
            window.addEventListener('resize', handler);
            return () => window.removeEventListener('resize', handler);
          }, []); // Empty array = run once on mount
        `
      },
      {
        title: "Lifting State Up",
        code: `
          function Parent() {
            const [value, setValue] = useState('');
            return <Child value={value} onChange={setValue} />;
          }
  
          function Child({ value, onChange }) {
            return <input value={value} onChange={e => onChange(e.target.value)} />;
          }
        `
      },
      {
        title: "Memoization",
        code: `
          const expensive = useMemo(() => slowCalculation(data), [data]);
          const callback = useCallback(() => doSomething(data), [data]);
        `
      },
      {
        title: "ARIA Role Example",
        code: `
          <button aria-label=\"Close\">X</button>
          <div role=\"alert\">Form submission failed</div>
        `
      },
      {
        title: "Debounce Input",
        code: `
          const debounce = (fn, delay) => {
            let timeout;
            return (...args) => {
              clearTimeout(timeout);
              timeout = setTimeout(() => fn(...args), delay);
            };
          };
        `
      }
    ],
  
    benefits: {
      title: "Interview Success Tips",
      content: [
        "**Clarify Requirements:** Restate the prompt and ask clarifying questions.",
        "**Think Aloud:** Share your thought process while coding or designing.",
        "**Test Incrementally:** Check your assumptions and verify output early.",
        "**Explain Tradeoffs:** When suggesting improvements, mention why you'd use one tool or method over another.",
        "**Ask Questions Back:** Show curiosity and collaboration by discussing requirements or constraints."
      ]
    },
  
    cons: {
      title: "Common Mistakes",
      content: [
        "**Rushing into Code:** Start with a plan before typing.",
        "**Not Clarifying Assumptions:** Guessing requirements instead of asking.",
        "**Too Verbose or Too Quiet:** Strike a balance between explaining and coding.",
        "**Ignoring Edge Cases:** Always consider null, empty, error, or boundary conditions.",
        "**Not Using Tools Effectively:** Forgetting DevTools, console logs, or component structure."
      ]
    },
  
    antiPatterns: {
      title: "Anti-Patterns in Interviews",
      content: [
        "**Copy-Paste Thinking:** Repeating code you've memorized without adapting it to the problem.",
        "**Over-Engineering:** Using advanced patterns or abstractions unnecessarily.",
        "**Global State Abuse:** Using context or Redux where local state would suffice.",
        "**Premature Optimization:** Worrying about performance before correctness or clarity."
      ]
    },
  
    conclusion: `
      Preparing for frontend interviews means practicing technical concepts and how you communicate them. Use this guide to rehearse both your answers and your approach. Confidence, clarity, and structure will make you stand out.
    `
  };
  
  export default interviewQuestionsArticleData;