// src/config/contentCategories.js

export const contentCategories = [
  {
    id: 'cognitive_learning',
    name: 'Cognitive Systems',
    baseRoute: '/cognitive_learning',
    dataPath: 'cognitive_learning',
    addToNav: true,
    subcategories: [
      {
        id: 'abstraction_model',
        name: '4-Level Abstraction Model',
        path: 'abstraction_model',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'memory_strategies',
        name: 'Memory Strategies',
        path: 'memory_strategies',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'rapid_learning',
        name: 'Rapid Skill Acquisition',
        path: 'rapid_learning',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'performance_memorization',
        name: 'Memorization',
        path: 'performance_memorization',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'learning_tools',
        name: 'Tools',
        path: 'learning_tools',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'study_schedules',
        name: 'Study Schedule',
        path: 'study_schedules',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'instructional_models',
        name: 'Instructional Models',
        path: 'instructional_models',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'evidence_strategies',
        name: 'Evidence-Based Strategies',
        path: 'evidence_strategies',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'visual_frameworks',
        name: 'Visualization & UX',
        path: 'visual_frameworks',
        addToNav: false,
        addToSubNav: true,
      },
    ],
  },
  {
    id: 'fundamentals',
    name: 'JavaScript (JS)',
    baseRoute: '/fundamental', // Distinct base route for this category
    dataPath: 'fundamentals',
    addToNav: true,
    subcategories: [
      {
        id: 'core',
        name: 'Core',
        path: 'core',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'data',
        name: 'Data',
        path: 'data',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'browser',
        name: 'Browser',
        path: 'browser',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'async',
        name: 'Async',
        path: 'async',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'advanced',
        name: 'Advanced',
        path: 'advanced',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'tooling_and_testing',
        name: 'Tooling & Testing',
        path: 'tooling_and_testing',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'benchmarking_js_react_next_ts',
        name: 'Benchmarking',
        path: 'benchmarking_js_react_next_ts',
        addToNav: false,
        addToSubNav: true,
      },
      // Future fundamental topics (like 'variables', 'data-types') added here
    ],
  },
  {
    id: 'paradigms', // Unique ID for the category
    name: 'JS Paradigms', // Name for display (e.g., in Navbar dropdown label)
    baseRoute: '/paradigm', // Base URL path segment for this category
    dataPath: 'paradigms', // Corresponding folder name in src/data/
    addToNav: true, // Include this category in Navbar navigation
    subcategories: [
      {
        id: 'functional',
        name: 'Functional',
        path: 'functional',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'declarative',
        name: 'Declarative',
        path: 'declarative',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'oop',
        name: 'Object-Oriented',
        path: 'oop',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'procedural',
        name: 'Procedural',
        path: 'procedural',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'imperative',
        name: 'Imperative',
        path: 'imperative',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'js_paradigm_breakdown',
        name: 'JavaScript Paradigm Performance',
        path: 'js_paradigm_breakdown',
        addToNav: false,
        addToSubNav: true,
      },
    ],
  },
  {
    id: 'performance',
    name: 'Performance',
    baseRoute: '/performance',
    dataPath: 'performance',
    addToNav: true,
    subcategories: [
      {
        id: 'frontend_performance',
        name: 'Frontend Performance',
        path: 'frontend_performance',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'critical_rendering_path',
        name: 'Critical Rendering Path',
        path: 'critical_rendering_path',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'efficient_rendering',
        name: 'Efficient Rendering Techniques',
        path: 'efficient_rendering',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'minimize_javascript',
        name: 'Minimizing JavaScript Execution',
        path: 'minimize_javascript',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'frontend_assets',
        name: 'Frontend Asset Optimization',
        path: 'frontend_assets',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'backend_performance',
        name: 'Backend Performance',
        path: 'backend_performance',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'database_performance',
        name: 'Database Performance',
        path: 'database_performance',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'react_optimizations',
        name: 'React-Specific Optimizations',
        path: 'react_optimizations',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'performance_measurement',
        name: 'Performance Measurement & Tracking',
        path: 'performance_measurement',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'performance_conclusion',
        name: 'Conclusion & Best Practices',
        path: 'performance_conclusion',
        addToNav: false,
        addToSubNav: true,
      },
    ],
  },
  {
    id: 'javascript_frameworks',
    name: 'JS Frameworks',
    baseRoute: '/javascript_frameworks',
    dataPath: 'javascript_frameworks',
    addToNav: true,
    subcategories: [
      {
        id: 'introduction_landscape',
        name: 'Introduction',
        path: 'introduction_landscape',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'core_concepts',
        name: 'Core Concepts',
        path: 'core_concepts',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'popular_frameworks',
        name: 'Popular Frameworks',
        path: 'popular_frameworks',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'emerging_meta_frameworks',
        name: 'Meta-Frameworks',
        path: 'emerging_meta_frameworks',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'architecture_paradigms',
        name: 'Architecture & Paradigms',
        path: 'architecture_paradigms',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'comparison_tradeoffs',
        name: 'Trade-Offs',
        path: 'comparison_tradeoffs',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'frameworks_vs_libraries',
        name: 'Frameworks vs. Libraries',
        path: 'frameworks_vs_libraries',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'creation_distribution',
        name: 'Creating & Distributing',
        path: 'creation_distribution',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'use_cases_applications',
        name: 'Use Cases & Applications',
        path: 'use_cases_applications',
        addToNav: false,
        addToSubNav: true,
      },
    ],
  },
  {
    id: 'react_next_ecosystem',
    name: 'React & Next.js',
    baseRoute: '/react_next_ecosystem',
    dataPath: 'react_next_ecosystem',
    addToNav: true,
    subcategories: [
      {
        id: 'core_principles',
        name: 'Core',
        path: 'core_principles',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'routing',
        name: 'Routing',
        path: 'routing',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'state_management',
        name: 'State Management',
        path: 'state_management',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'data_fetching_caching',
        name: 'Data Fetching & Caching',
        path: 'data_fetching_caching',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'authentication',
        name: 'Authentication',
        path: 'authentication',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'backend_integration',
        name: 'Backend Integration',
        path: 'backend_integration',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'ui_component_libraries',
        name: 'UI Libraries',
        path: 'ui_component_libraries',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'specialized_react_libraries',
        name: 'Specialized React Libraries',
        path: 'specialized_react_libraries',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'architecture_workflows',
        name: 'Architecture & Workflows',
        path: 'architecture_workflows',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'typescript_integration',
        name: 'TypeScript',
        path: 'typescript_integration',
        addToNav: false,
        addToSubNav: true,
      },
    ],
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    baseRoute: '/typescript',
    dataPath: 'typescript',
    addToNav: true,
    subcategories: [
      {
        id: 'fundamentals',
        name: 'Fundamentals',
        path: 'fundamentals',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'benefits',
        name: 'Benefits',
        path: 'benefits',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'use_cases',
        name: 'Use Cases',
        path: 'use_cases',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'advanced',
        name: 'Advanced Features',
        path: 'advanced',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'challenges',
        name: 'Challenges',
        path: 'challenges',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'best_practices',
        name: 'Best Practices',
        path: 'best_practices',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'anti_patterns',
        name: 'Anti-Patterns',
        path: 'anti_patterns',
        addToNav: false,
        addToSubNav: true,
      },
    ],
  },
  {
    id: 'testing',
    name: 'Testing',
    baseRoute: '/testing',
    dataPath: 'testing',
    addToNav: true,
    subcategories: [
      {
        id: 'unit',
        name: 'Unit Tests',
        path: 'unit',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'integration',
        name: 'Integration Tests',
        path: 'integration',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'e2e',
        name: 'End-to-End Tests',
        path: 'e2e',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'tdd',
        name: 'Test Driven Development',
        path: 'tdd',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'testable_code',
        name: 'Testable Code',
        path: 'testable_code',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'tooling',
        name: 'Tools',
        path: 'tooling',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'patterns',
        name: 'Patterns',
        path: 'patterns',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'pyramid',
        name: 'Pyramid',
        path: 'pyramid',
        addToNav: false,
        addToSubNav: true,
      },
    ],
  },
  {
    id: 'css_design_systems',
    name: 'CSS Design',
    baseRoute: '/css_design_systems',
    dataPath: 'css_design_systems',
    addToNav: true,
    subcategories: [
      {
        id: 'css_fundamentals',
        name: 'Fundamentals',
        path: 'css_fundamentals',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'core_principles',
        name: 'Core Principles',
        path: 'core_principles',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'typography',
        name: 'Typography',
        path: 'typography',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'layout',
        name: 'Layout',
        path: 'layout',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'color',
        name: 'Color',
        path: 'color',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'responsiveness',
        name: 'Responsiveness',
        path: 'responsiveness',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'components',
        name: 'Reusable Components',
        path: 'components',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'libraries',
        name: 'CSS Libraries',
        path: 'libraries',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'maintenance',
        name: 'Maintenance & Governance',
        path: 'maintenance',
        addToNav: false,
        addToSubNav: true,
      },
    ],
  },

  // {
  //   id: 'religions',
  //   name: 'Religious Studies',
  //   baseRoute: '/religion',
  //   dataPath: 'religions',
  //   addToNav: true,
  //   subcategories: [
  //     {
  //       id: 'world',
  //       name: 'World Religions',
  //       path: 'world',
  //       addToNav: true,
  //     },
  //     {
  //       id: 'christianity',
  //       name: 'Christianity',
  //       path: 'christianity',
  //       addToNav: true,
  //     },
  //     {
  //       id: 'islam',
  //       name: 'Islam',
  //       path: 'islam',
  //       addToNav: true,
  //     },
  //     {
  //       id: 'hinduism',
  //       name: 'Hinduism',
  //       path: 'hinduism',
  //       addToNav: false,
  //     },
  //     {
  //       id: 'judaism',
  //       name: 'Judaism',
  //       path: 'judaism',
  //       addToNav: true,
  //     },
  //     {
  //       id: 'buddhism',
  //       name: 'Buddhism',
  //       path: 'buddhism',
  //       addToNav: false,
  //     },
  //     {
  //       id: 'taoism',
  //       name: 'Taoism',
  //       path: 'taoism',
  //       addToNav: false,
  //     },
  //   ],
  // },
  {
    id: 'chrome_devtools',
    name: 'Chrome DevTools',
    baseRoute: '/chrome_devtools',
    dataPath: 'chrome_devtools',
    addToNav: true,
    subcategories: [
      {
        id: 'elements_tab',
        name: 'Elements',
        path: 'elements',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'console_tab',
        name: 'Console',
        path: 'console',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'sources_tab',
        name: 'Sources',
        path: 'sources',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'network_tab',
        name: 'Network',
        path: 'network',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'performance_tab',
        name: 'Performance',
        path: 'performance',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'memory_tab',
        name: 'Memory',
        path: 'memory',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'application_tab',
        name: 'Application',
        path: 'application',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'lighthouse_tab',
        name: 'Lighthouse',
        path: 'lighthouse',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'recorder_tab',
        name: 'Recorder',
        path: 'recorder',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'security_tab',
        name: 'Security',
        path: 'security',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'harnessing_devtools',
        name: 'Harnessing DevTools',
        path: 'harnessing_devtools',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'structuring_understanding',
        name: 'Structured Understanding',
        path: 'structuring_understanding',
        addToNav: false,
        addToSubNav: true,
      },
    ],
  },
  {
    id: 'git',
    name: 'Git',
    baseRoute: '/git',
    dataPath: 'git',
    addToNav: true,
    subcategories: [
      {
        id: 'commands_and_workflow',
        name: 'Commands & Workflow',
        path: 'commands_and_workflow',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'branching_merging',
        name: 'Branching & Merging',
        path: 'branching_merging',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'rebase_vs_merge',
        name: 'Rebase vs Merge',
        path: 'rebase_vs_merge',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'conflict_resolution',
        name: 'Conflict Resolution',
        path: 'conflict_resolution',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'history_rewriting',
        name: 'History Rewriting',
        path: 'history_rewriting',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'collaboration_workflows',
        name: 'Collaboration Workflows',
        path: 'collaboration_workflows',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'tools_and_tips',
        name: 'Tools & Tips',
        path: 'tools_and_tips',
        addToNav: false,
        addToSubNav: true,
      },
    ],
  },
  {
    id: 'frontend_backend_architectures',
    name: 'Architectures',
    baseRoute: '/frontend_backend_architectures',
    dataPath: 'frontend_backend_architectures',
    addToNav: true,
    subcategories: [
      {
        id: 'frontend_architectures',
        name: 'Frontend',
        path: 'frontend_architectures',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'backend_architectures',
        name: 'Backend',
        path: 'backend_architectures',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'crosscutting_architectures',
        name: 'Cross-Cutting',
        path: 'crosscutting_architectures',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'technologies_and_tools',
        name: 'Technologies and Tools',
        path: 'technologies_and_tools',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'code_snippets_and_patterns',
        name: 'Snippets and Patterns',
        path: 'code_snippets_and_patterns',
        addToNav: false,
        addToSubNav: true,
      },
    ],
  },
  {
    id: 'solid',
    name: 'SOLID',
    baseRoute: '/solid',
    dataPath: 'solid',
    addToNav: true,
    subcategories: [
      {
        id: 'solid',
        name: 'SOLID',
        path: 'solid',
        addToNav: true,
        addToSubNav: false,
      },
    ],
  },
  {
    id: 'js-react-interview',
    name: 'Interview Prep',
    baseRoute: '/js-react-interview',
    dataPath: 'js-react-interview',
    addToNav: true,
    subcategories: [
      {
        id: 'javascript',
        name: 'JavaScript',
        path: 'javascript',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'react',
        name: 'React',
        path: 'react',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'component-patterns',
        name: 'Component Patterns',
        path: 'component-patterns',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'interview-questions',
        name: 'Interview Questions',
        path: 'interview-questions',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'engineering-principles',
        name: 'Engineering Principles',
        path: 'engineering-principles',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'system-thinking',
        name: 'System Thinking',
        path: 'system-thinking',
        addToNav: false,
        addToSubNav: true,
      },
    ],
  },
  {
    id: 'web_rendering_techniques',
    name: 'Rendering Techniques',
    baseRoute: '/web_rendering_techniques',
    dataPath: 'web_rendering_techniques',
    addToNav: true,
    subcategories: [
      {
        id: 'server_side_rendering',
        name: 'Server Side Rendering',
        path: 'server_side_rendering',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'client_side_rendering',
        name: 'Client Side Rendering',
        path: 'client_side_rendering',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'static_site_generation',
        name: 'Static Site Generation',
        path: 'static_site_generation',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'incremental_static_regeneration',
        name: 'Incremental Static Regeneration',
        path: 'incremental_static_regeneration',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'hydration',
        name: 'Hydration',
        path: 'hydration',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'streaming_rendering',
        name: 'Streaming Rendering',
        path: 'streaming_rendering',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'edge_rendering',
        name: 'Edge Rendering',
        path: 'edge_rendering',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'hybrid_rendering',
        name: 'Hybrid Rendering',
        path: 'hybrid_rendering',
        addToNav: false,
        addToSubNav: true,
      },
    ],
  },
  {
    id: 'large_language_models_and_ai',
    name: 'LLMs and AI',
    baseRoute: '/large_language_models_and_ai',
    dataPath: 'large_language_models_and_ai',
    addToNav: true,
    subcategories: [
      {
        id: 'introduction_to_llms_and_ai',
        name: 'Intro',
        path: 'introduction_to_llms_and_ai',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'understanding_ai_agents_and_agentic_systems',
        name: 'Agentic Systems',
        path: 'understanding_ai_agents_and_agentic_systems',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'getting_started_in_llm_and_ai_development',
        name: 'Getting Started',
        path: 'getting_started_in_llm_and_ai_development',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'project_ideas_for_llm_and_ai',
        name: 'Project Ideas',
        path: 'project_ideas_for_llm_and_ai',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'essential_tools_libraries_frameworks',
        name: 'Essentials',
        path: 'essential_tools_libraries_frameworks',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'development_processes_and_workflows',
        name: 'Processes',
        path: 'development_processes_and_workflows',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'essential_terminology',
        name: 'Terminology',
        path: 'essential_terminology',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'ethical_and_societal_considerations',
        name: 'Ethics',
        path: 'ethical_and_societal_considerations',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'common_pitfalls_and_challenges',
        name: 'Challenges',
        path: 'common_pitfalls_and_challenges',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'pros_and_cons_of_llms_and_ai_in_production',
        name: 'Pros and Cons',
        path: 'pros_and_cons_of_llms_and_ai_in_production',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'design_patterns_and_anti_patterns',
        name: 'Patterns',
        path: 'design_patterns_and_anti_patterns',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'related_tools_and_technologies',
        name: 'Related Tools',
        path: 'related_tools_and_technologies',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'building_robust_llm_applications',
        name: 'Building LLM Apps',
        path: 'building_robust_llm_applications',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'securing_llm_applications',
        name: 'Security',
        path: 'securing_llm_applications',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'future_of_llms_and_ai_development',
        name: 'Future',
        path: 'future_of_llms_and_ai_development',
        addToNav: false,
        addToSubNav: true,
      },
    ],
  },
  {
    id: 'optimizing_system_prompts_cascade_ai',
    name: 'Cascade Prompting',
    baseRoute: '/optimizing_system_prompts_cascade_ai',
    dataPath: 'optimizing_system_prompts_cascade_ai',
    addToNav: true,
    subcategories: [
      {
        id: 'core_principles_prompt_engineering',
        name: 'Core Principles',
        path: 'core_principles_prompt_engineering',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'consistent_naming_strategies',
        name: 'Consistent Naming',
        path: 'consistent_naming_strategies',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'automatic_test_generation',
        name: 'Automatic Test Generation',
        path: 'automatic_test_generation',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'modular_code_generation',
        name: 'Modular Code Generation',
        path: 'modular_code_generation',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'eliciting_clarifying_questions',
        name: 'Clarifying Questions',
        path: 'eliciting_clarifying_questions',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'reducing_cognitive_complexity',
        name: 'Reducing Cognitive Complexity',
        path: 'reducing_cognitive_complexity',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'tailoring_prompts_cascade_ai',
        name: 'Tailoring Prompts',
        path: 'tailoring_prompts_cascade_ai',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'conclusion_recommendations',
        name: 'Conclusion',
        path: 'conclusion_recommendations',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'cascade_prompt_process',
        name: 'Prompt Process',
        path: 'cascade_prompt_process',
        addToNav: false,
        addToSubNav: true,
      },
    ],
  },
  {
    id: 'storybook_overview',
    name: 'Storybook',
    baseRoute: '/storybook_overview',
    dataPath: 'storybook_overview',
    addToNav: true,
    subcategories: [
      {
        id: 'core_concepts',
        name: 'Core Concepts',
        path: 'core_concepts',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'primary_use_cases',
        name: 'Primary Use Cases',
        path: 'primary_use_cases',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'full_scope_features',
        name: 'Full Scope of Features',
        path: 'full_scope_features',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'typical_workflow',
        name: 'Typical Workflow',
        path: 'typical_workflow',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'benefits',
        name: 'Why Use Storybook',
        path: 'benefits',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'community_and_adoption',
        name: 'Community & Adoption',
        path: 'community_and_adoption',
        addToNav: false,
        addToSubNav: true,
      },
    ],
  },
  {
    id: 'small_business_web_dev',
    name: 'Web Dev for Small Biz',
    baseRoute: '/small_business_web_dev',
    dataPath: 'small_business_web_dev',
    addToNav: true,
    subcategories: [
      {
        id: 'pricing_models',
        name: 'Pricing Models',
        path: 'pricing_models',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'cms_comparison',
        name: 'CMS Comparison',
        path: 'cms_comparison',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'custom_vs_existing',
        name: 'Custom vs Existing CMS',
        path: 'custom_vs_existing',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'domain_and_hosting',
        name: 'Domain & Hosting',
        path: 'domain_and_hosting',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'freelancer_hiring',
        name: 'Hiring a Developer',
        path: 'freelancer_hiring',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'project_discussion',
        name: 'Discussing Scope & Pricing',
        path: 'project_discussion',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'seo_basics',
        name: 'Basic SEO Practices',
        path: 'seo_basics',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'maintenance_packages',
        name: 'Maintenance Packages',
        path: 'maintenance_packages',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'business_understanding',
        name: 'Understanding the Business',
        path: 'business_understanding',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'current_online_presence',
        name: 'Current Online Presence',
        path: 'current_online_presence',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'website_objectives',
        name: 'Website Objectives',
        path: 'website_objectives',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'detailed_requirements',
        name: 'Detailed Requirements',
        path: 'detailed_requirements',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'technical_considerations',
        name: 'Technical Considerations',
        path: 'technical_considerations',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'budget_and_timeline',
        name: 'Budget & Timeline',
        path: 'budget_and_timeline',
        addToNav: false,
        addToSubNav: true
      }
    ]
  },
  {
    id: 'startup_success',
    name: 'Startup Success',
    baseRoute: '/startup_success_foundations',
    dataPath: 'startup_success_foundations',
    addToNav: true,
    subcategories: [
      {
        id: 'lean_startup_basics',
        name: 'Lean Startup Basics',
        path: 'lean_startup_basics',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'website_traction_and_design',
        name: 'Website Traction & Design',
        path: 'website_traction_and_design',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'brand_and_ui_strategy',
        name: 'Branding & UI Strategy',
        path: 'brand_and_ui_strategy',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'user_acquisition',
        name: 'User Acquisition',
        path: 'user_acquisition',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'user_feedback_loops',
        name: 'User Feedback Loops',
        path: 'user_feedback_loops',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'funding_readiness',
        name: 'Funding Readiness',
        path: 'funding_readiness',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'startup_case_studies',
        name: 'Startup Case Studies',
        path: 'startup_case_studies',
        addToNav: false,
        addToSubNav: true,
      },
      {
        id: 'startup_summary',
        name: 'Startup Journey Summary',
        path: 'startup_summary',
        addToNav: false,
        addToSubNav: true,
      },
    ],
  }
  // Add future categories  here following the same structure
]

// Static pages configuration
export const staticPages = [
  { id: 'about', name: 'About', route: '/about', addToNav: true },
  // Add other static pages here if any
]

// --- Helper Functions ---

/**
 * Finds the full configuration for a content page based on URL parameters.
 * @param {string} categoryParam - The category part of the URL (e.g., 'paradigm').
 * @param {string} subcategoryParam - The subcategory part of the URL (e.g., 'functional').
 * @returns {object|null} Object containing category and subcategory config, or null if not found.
 */
export function getContentConfig(categoryParam, subcategoryParam) {
  // Match category by the URL segment (e.g., 'paradigm' from '/paradigm/functional')
  const category = contentCategories.find(
    (cat) => cat.baseRoute === `/${categoryParam}`
  )
  if (!category) {
    console.error(`Category config not found for param: ${categoryParam}`)
    return null
  }

  // Match subcategory by its path segment (e.g., 'functional')
  const subcategory = category.subcategories.find(
    (sub) => sub.path === subcategoryParam
  )
  if (!subcategory) {
    console.error(
      `Subcategory config not found for param: ${subcategoryParam} in category ${categoryParam}`
    )
    return null // If URL is invalid (e.g., /paradigm/nonexistent), return null
  }

  return { category, subcategory }
}

/**
 * Finds the category configuration based on the category URL parameter.
 * Used by Navbar to sync its state with the current content page's category.
 * @param {string} categoryParam - The category part of the URL (e.g., 'paradigm').
 * @returns {object|null} The category configuration object or null.
 */
export function findCategoryByParam(categoryParam) {
  return (
    contentCategories.find((cat) => cat.baseRoute === `/${categoryParam}`) ||
    null
  )
}

/**
 * Generates structured data specifically for building the Navbar UI.
 * @returns {object} Object with 'dynamic' and 'static' arrays for nav items.
 */
export function getNavData() {
  const dynamicNavItems = contentCategories
    .filter((cat) => cat.addToNav)
    .map((cat) => ({
      // Info for the dropdown label/selector
      id: cat.id, // e.g., 'paradigms'
      name: cat.name, // "Paradigms"
      // Info for the links within the dropdown
      subcategories: cat.subcategories
        .filter((sub) => sub.addToNav)
        .map((sub) => ({
          id: sub.id, // e.g., 'functional'
          name: sub.name, // "Functional"
          path: `${cat.baseRoute}/${sub.path}`, // "/paradigm/functional"
        })),
    }))

  const staticNavItems = staticPages
    .filter((page) => page.addToNav)
    .map((page) => ({
      id: page.id, // "about"
      name: page.name, // "About"
      path: page.route, // "/about"
      isStatic: true,
    }))

  // Determine the default category to show in Navbar (first one defined)
  const defaultCategory = dynamicNavItems.length > 0 ? dynamicNavItems[0] : null

  return { dynamic: dynamicNavItems, static: staticNavItems, defaultCategory }
}
