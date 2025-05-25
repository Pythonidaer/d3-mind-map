import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Automating\nDocumentation',
    definition:
      'Strategies and tools for generating and maintaining documentation automatically based on your codebase, tests, and developer workflows.',
    color: 'root',
    shape: 'roundRect'
  },

  // JSDoc & Typedoc
  {
    id: 'jsdoc_typedoc',
    label: 'JSDoc &\nTypedoc',
    definition:
      'Tools that generate documentation from structured code comments and TypeScript annotations.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'jsdoc_comments',
    label: 'Inline\nComments',
    definition:
      'Add documentation directly to functions and modules using JSDoc-style annotations (`@param`, `@returns`, etc).',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'jsdoc_output',
    label: 'HTML &\nMarkdown Output',
    definition:
      'Use JSDoc or Typedoc to generate static HTML sites or Markdown reference files for developer portals.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'typedoc_ts',
    label: 'Typedoc for\nTypeScript',
    definition:
      'Typedoc uses TypeScript’s type system to generate more accurate, safer documentation for complex apps.',
    color: 'nodePositive2',
    shape: 'rect'
  },

  // Tests as Docs
  {
    id: 'tests_docs',
    label: 'Tests as\nDocs',
    definition:
      'Well-written unit and integration tests can double as executable documentation that explains behavior.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'test_naming',
    label: 'Descriptive\nTest Names',
    definition:
      'Use clear, behavior-driven naming to describe test intent, not just function names or inputs.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'tdd_spec_style',
    label: 'TDD &\nSpec Style',
    definition:
      'Write tests first and treat them as specs that describe what the system should do in plain language.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'testdoc_tools',
    label: 'Testdoc &\nGenerators',
    definition:
      'Use tools to convert test names into Markdown/HTML specs. Example: `testdoc` for Jest-like runners.',
    color: 'nodePositive2',
    shape: 'rect'
  },

  // AI-Powered Assistance
  {
    id: 'ai_assistance',
    label: 'AI-Powered\nAssistance',
    definition:
      'Use AI tools to help draft, summarize, and review documentation or generate content from code context.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'code_summary',
    label: 'Code\nSummarization',
    definition:
      'Generate short descriptions for files, functions, or modules using AI trained on the codebase.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'doc_drafts',
    label: 'Markdown\nDrafts',
    definition:
      'Let AI generate first-pass drafts for README sections, function docs, or onboarding instructions.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'human_review',
    label: 'Human Review\nRequired',
    definition:
      'AI suggestions must be reviewed manually to ensure technical accuracy and alignment with intent.',
    color: 'nodePositive2',
    shape: 'rect'
  }
];

export const links = [
  { source: 'root', target: 'jsdoc_typedoc' },
  { source: 'jsdoc_typedoc', target: 'jsdoc_comments' },
  { source: 'jsdoc_typedoc', target: 'jsdoc_output' },
  { source: 'jsdoc_typedoc', target: 'typedoc_ts' },

  { source: 'root', target: 'tests_docs' },
  { source: 'tests_docs', target: 'test_naming' },
  { source: 'tests_docs', target: 'tdd_spec_style' },
  { source: 'tests_docs', target: 'testdoc_tools' },

  { source: 'root', target: 'ai_assistance' },
  { source: 'ai_assistance', target: 'code_summary' },
  { source: 'ai_assistance', target: 'doc_drafts' },
  { source: 'ai_assistance', target: 'human_review' }
];
