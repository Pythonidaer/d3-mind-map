import { COLORS } from '../../../theme/colors';

export const nodes = [
    {
      id: 'root',
      label: 'System\nThinking for\nFrontend Engineers',
      definition: 'System thinking is the practice of analyzing how frontend code interacts within broader systems, including teams, tools, architecture, and users.',
      shape: 'roundRect',
      color: 'root'
    },
  
    // Primary branches
    {
      id: 'userExperience',
      label: 'User\nExperience',
      definition: 'Understanding how changes affect usability, responsiveness, accessibility, and perceived performance.',
      shape: 'ellipse',
      color: 'veryLightGreen'
    },
    {
      id: 'teamImpact',
      label: 'Team &\nCollaboration Impact',
      definition: 'How changes affect other engineers, reviewers, designers, and shared code.',
      shape: 'ellipse',
      color: 'veryLightGreen'
    },
    {
      id: 'dependencies',
      label: 'Dependencies &\nVersioning',
      definition: 'How libraries, packages, and external services impact and evolve within the system.',
      shape: 'ellipse',
      color: 'veryLightGreen'
    },
    {
      id: 'architecture',
      label: 'Architecture &\nBoundaries',
      definition: 'Separation of concerns, ownership, state locality, and minimizing ripple effects.',
      shape: 'ellipse',
      color: 'veryLightGreen'
    },
    {
      id: 'observability',
      label: 'Monitoring &\nObservability',
      definition: 'Track, log, and debug what happens in production and staging environments.',
      shape: 'ellipse',
      color: 'veryLightGreen'
    },
    {
      id: 'resilience',
      label: 'Resilience &\nFailure Modes',
      definition: 'How the system behaves under failure, edge cases, degraded APIs, or client constraints.',
      shape: 'ellipse',
      color: 'veryLightGreen'
    },
  
    // Subtopics
    { id: 'perceivedPerformance', label: 'Perceived\nPerformance', definition: 'How fast the experience feels to the user, even before full content loads.', shape: 'rect', color: 'mintGreen' },
    { id: 'accessibility', label: 'Accessibility', definition: 'Ensure no change introduces keyboard, screen reader, or contrast regressions.', shape: 'rect', color: 'mintGreen' },
  
    { id: 'codeOwnership', label: 'Code\nOwnership', definition: 'Clarify who maintains shared files, modules, or APIs.', shape: 'rect', color: 'mintGreen' },
    { id: 'reviewLoad', label: 'Review\nLoad', definition: 'Avoid pull requests that are too large, rushed, or opaque to reviewers.', shape: 'rect', color: 'mintGreen' },
  
    { id: 'semanticVersioning', label: 'Semantic\nVersioning', definition: 'Update major, minor, and patch versions with care.', shape: 'rect', color: 'mintGreen' },
    { id: 'thirdParty', label: 'Third-Party\nDependencies', definition: 'Understand the cost, size, risk, and compatibility of added packages.', shape: 'rect', color: 'mintGreen' },
  
    { id: 'stateIsolation', label: 'State\nIsolation', definition: 'Avoid lifting state too high or sharing it unnecessarily across modules.', shape: 'rect', color: 'mintGreen' },
    { id: 'modularBoundaries', label: 'Modular\nBoundaries', definition: 'Encapsulate functionality with clear input/output contracts.', shape: 'rect', color: 'mintGreen' },
  
    { id: 'logEvents', label: 'Event\nLogging', definition: 'Track actions that lead to outcomes or bugs in production.', shape: 'rect', color: 'mintGreen' },
    { id: 'errorReporting', label: 'Error\nReporting', definition: 'Use tools like Sentry to monitor real-time issues.', shape: 'rect', color: 'mintGreen' },
  
    { id: 'fallbacks', label: 'UI\nFallbacks', definition: 'Use loading spinners, error states, and skeletons to gracefully degrade.', shape: 'rect', color: 'mintGreen' },
    { id: 'timeoutHandling', label: 'Timeout /\nRetry Logic', definition: 'Gracefully retry or timeout requests to avoid user frustration.', shape: 'rect', color: 'mintGreen' }
  ];
  
  export const links = [
    { source: 'root', target: 'userExperience' },
    { source: 'root', target: 'teamImpact' },
    { source: 'root', target: 'dependencies' },
    { source: 'root', target: 'architecture' },
    { source: 'root', target: 'observability' },
    { source: 'root', target: 'resilience' },
  
    { source: 'userExperience', target: 'perceivedPerformance' },
    { source: 'userExperience', target: 'accessibility' },
  
    { source: 'teamImpact', target: 'codeOwnership' },
    { source: 'teamImpact', target: 'reviewLoad' },
  
    { source: 'dependencies', target: 'semanticVersioning' },
    { source: 'dependencies', target: 'thirdParty' },
  
    { source: 'architecture', target: 'stateIsolation' },
    { source: 'architecture', target: 'modularBoundaries' },
  
    { source: 'observability', target: 'logEvents' },
    { source: 'observability', target: 'errorReporting' },
  
    { source: 'resilience', target: 'fallbacks' },
    { source: 'resilience', target: 'timeoutHandling' }
  ];
  