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
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'performance_memorization',
        name: 'Memorization',
        path: 'performance_memorization',
        addToNav: true,
        addToSubNav: false,
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
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'data',
        name: 'Data',
        path: 'data',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'browser',
        name: 'Browser',
        path: 'browser',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'async',
        name: 'Async',
        path: 'async',
        addToNav: true,
        addToSubNav: false,
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
        addToNav: true,
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
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'declarative',
        name: 'Declarative',
        path: 'declarative',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'oop',
        name: 'Object-Oriented',
        path: 'oop',
        addToNav: true,
        addToSubNav: false,
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
        addToNav: true,
        addToSubNav: false,
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
        addToNav: true,
        addToSubNav: false,
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
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'benefits',
        name: 'Benefits',
        path: 'benefits',
        addToNav: true,
        addToSubNav: false,
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
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'anti_patterns',
        name: 'Anti-Patterns',
        path: 'anti_patterns',
        addToNav: true,
        addToSubNav: false,
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
        addToNav: true,
        addToSubNav: false,
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
        name: 'TDD',
        path: 'tdd',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'testable_code',
        name: 'Testable Code',
        path: 'testable_code',
        addToNav: true,
        addToSubNav: false,
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
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'responsiveness',
        name: 'Responsiveness',
        path: 'responsiveness',
        addToNav: true,
        addToSubNav: false,
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
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'performance_tab',
        name: 'Performance',
        path: 'performance',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'memory_tab',
        name: 'Memory',
        path: 'memory',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'application_tab',
        name: 'Application',
        path: 'application',
        addToNav: true,
        addToSubNav: false,
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
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'branching_merging',
        name: 'Branching & Merging',
        path: 'branching_merging',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'rebase_vs_merge',
        name: 'Rebase vs Merge',
        path: 'rebase_vs_merge',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'conflict_resolution',
        name: 'Conflict Resolution',
        path: 'conflict_resolution',
        addToNav: true,
        addToSubNav: false,
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
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'backend_architectures',
        name: 'Backend',
        path: 'backend_architectures',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'crosscutting_architectures',
        name: 'Cross-Cutting',
        path: 'crosscutting_architectures',
        addToNav: true,
        addToSubNav: false,
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
        id: 'srp',
        name: 'SRP',
        path: 'srp',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'ocp',
        name: 'OCP',
        path: 'ocp',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'lsp',
        name: 'LSP',
        path: 'lsp',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'isp',
        name: 'ISP',
        path: 'isp',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'dip',
        name: 'DIP',
        path: 'dip',
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
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'react',
        name: 'React',
        path: 'react',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'component-patterns',
        name: 'Component Patterns',
        path: 'component-patterns',
        addToNav: true,
        addToSubNav: false,
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
        name: 'SSR',
        path: 'server_side_rendering',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'client_side_rendering',
        name: 'CSR',
        path: 'client_side_rendering',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'static_site_generation',
        name: 'SSG',
        path: 'static_site_generation',
        addToNav: true,
        addToSubNav: false,
      },
      {
        id: 'incremental_static_regeneration',
        name: 'ISR',
        path: 'incremental_static_regeneration',
        addToNav: true,
        addToSubNav: false,
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
        addToNav: true,
        addToSubNav: false,
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
