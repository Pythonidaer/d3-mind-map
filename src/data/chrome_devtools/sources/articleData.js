const articleData = {
  introduction: `The Sources tab in Chrome DevTools acts as a full-featured code editor and debugger within the browser. It provides capabilities for inspecting files, setting breakpoints, stepping through execution, watching variables, editing resources live, and managing scripts with precision. Mastering the Sources panel is crucial for diagnosing issues, optimizing workflows, and understanding application behavior at runtime.`,

  file_navigator: {
    title: 'File Navigator',
    content: [
      'Browse all resources loaded by the webpage organized by origin (domain).',
      'Locate HTML, CSS, JS, images, fonts, and other assets easily.',
      'Quickly open files to view, debug, or modify them in the built-in editor.',
    ],
  },

  editor: {
    title: 'Editor & Live Editing',
    content: [
      'Directly edit JavaScript, HTML, and CSS resources in DevTools.',
      'Apply temporary changes to debug issues without modifying original server files.',
      'Use Workspaces to persist edits back to local files for seamless development.',
    ],
  },

  breakpoints: {
    title: 'Breakpoints Management',
    content: [
      'Insert standard line breakpoints by clicking the line number.',
      'Set conditional breakpoints that only trigger under specified conditions.',
      'Pause on network (XHR/fetch) activity, event listeners, or DOM mutations.',
    ],
  },

  debugger_controls: {
    title: 'Debugger Controls',
    content: [
      'Step over (next line without entering functions).',
      'Step into (enter a function call).',
      'Step out (exit the current function).',
      'Resume script execution until the next breakpoint.',
    ],
  },

  scope_callstack_watch: {
    title: 'Scope, Call Stack, and Watch',
    content: [
      'Inspect all variables currently in scope: Local, Closure, and Global.',
      'Review the call stack to trace the sequence of function calls.',
      'Add custom watch expressions to monitor specific variables or evaluations over time.',
    ],
  },

  snippets: {
    title: 'Snippets',
    content: [
      'Save small reusable JavaScript scripts directly inside DevTools.',
      'Run snippets to automate tasks, debug workflows, or inject functionality without editing page code.',
    ],
  },

  workspaces: {
    title: 'Workspaces',
    content: [
      'Map local folders to the browser’s loaded resources.',
      'Allow real-time editing of local files with changes persisting between refreshes.',
      'Boost productivity by integrating DevTools directly into the coding workflow.',
    ],
  },

  blackboxing: {
    title: 'Blackboxing Scripts',
    content: [
      'Ignore stepping into third-party library code during debugging.',
      'Focus only on your application logic by excluding vendor scripts.',
      'Reduce noise and improve clarity when diagnosing application bugs.',
    ],
  },

  benefits: {
    title: 'Benefits',
    content: [
      'Deep inspection of code execution flow.',
      'Quick fixes through live edits.',
      'Faster debugging using rich breakpoint and stepping controls.',
      'Improved collaboration by syncing local changes with Workspaces.',
    ],
  },

  cons: {
    title: 'Cons',
    content: [
      'Temporary edits are lost unless using Workspaces.',
      'Navigating deeply nested codebases may require practice.',
      'Stepping through minified or third-party code can be confusing without blackboxing.',
    ],
  },

  codeExamples: [
    {
      title: 'Set a Line Breakpoint',
      code: `// Click a line number in Sources panel to set a breakpoint.
  // Execution will pause here when reached.`,
    },
    {
      title: 'Set a Conditional Breakpoint',
      code: `// Right-click a line number and select "Add Conditional Breakpoint".
  // Example condition:
  index === 5`,
    },
    {
      title: 'Create and Run a Snippet',
      code: `// Go to Snippets > New Snippet
  console.log('Running a saved snippet!');
  // Right-click > Run`,
    },
    {
      title: 'Monitor Variable with Watch',
      code: `// In Scope panel > Watch, add expression:
  userData.email`,
    },
    {
      title: 'Blackbox a Script',
      code: `// Right-click a script file > Blackbox Script
  // DevTools will skip this script during debugging.`,
    },
  ],

  conclusion: `Mastering the Sources tab transforms debugging from a slow, trial-and-error process into an efficient, laser-focused operation. By leveraging features like breakpoints, stepping, call stacks, live edits, snippets, and workspaces, developers gain unmatched insight and control over their applications. Regular use of Sources tools accelerates problem-solving, sharpens understanding of code behavior, and leads to faster, more confident development cycles.`,
}

export default articleData
