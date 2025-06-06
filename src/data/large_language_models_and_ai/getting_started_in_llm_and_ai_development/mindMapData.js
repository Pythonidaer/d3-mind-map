import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Getting Started in\nLLM and AI Development',
    shape: 'roundRect',
    color: 'root',
    definition: 'Essential first steps for developers beginning their journey into Large Language Models (LLMs) and AI agentic systems.',
  },
  {
    id: 'fundamentals_of_ai',
    label: 'Mastering\nFundamentals',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Learning foundational concepts in AI, machine learning, LLMs, and agent architectures is critical to getting started.',
  },
  {
    id: 'ai_basics',
    label: 'AI and\nMachine Learning Basics',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'fundamentals_of_ai',
    definition: 'Understanding core concepts like supervised learning, unsupervised learning, neural networks, and model training.',
  },
  {
    id: 'llm_core_concepts',
    label: 'Large Language\nModel Core Concepts',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'fundamentals_of_ai',
    definition: 'Grasping how LLMs tokenize text, use transformers, and generate coherent language based on context.',
  },
  {
    id: 'agents_basics',
    label: 'Agentic System\nFoundations',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'fundamentals_of_ai',
    definition: 'Learning about autonomy, planning, memory, and how agents combine tools and reasoning for real-world tasks.',
  },
  {
    id: 'prompt_engineering',
    label: 'Learning\nPrompt Engineering',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Mastering the design of effective prompts to guide LLM behavior and optimize output quality.',
  },
  {
    id: 'prompt_design_principles',
    label: 'Effective Prompt\nDesign Principles',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'prompt_engineering',
    definition: 'Using clarity, specificity, role assignment, examples, and iterative refinement to improve LLM responses.',
  },
  {
    id: 'prompt_experiments',
    label: 'Experimenting\nwith Prompts',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'prompt_engineering',
    definition: 'Testing different prompt structures, few-shot examples, and output formats to fine-tune interactions.',
  },
  {
    id: 'beginner_friendly_resources',
    label: 'Beginner-Friendly\nResources',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Accessing courses, guides, libraries, and communities that provide entry points into AI and LLM development.',
  },
  {
    id: 'intro_courses_guides',
    label: 'Introductory Courses\nand Guides',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'beginner_friendly_resources',
    definition: 'Resources like HiddenLayer, OpenAI tutorials, and Red Hat learning paths designed for beginners.',
  },
  {
    id: 'framework_documentation',
    label: 'Framework\nDocumentation',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'beginner_friendly_resources',
    definition: 'Learning from LangChain, AutoGen, and other frameworks by studying their official docs and examples.',
  },
  {
    id: 'community_engagement',
    label: 'Community\nEngagement',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'beginner_friendly_resources',
    definition: 'Joining communities like Azure AI Discord, Reddit AI forums, and open-source contribution groups to learn collaboratively.',
  },
  {
    id: 'cloud_platforms_support',
    label: 'Support from\nCloud Platforms',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Major cloud providers offer managed environments and tools that simplify LLM and agent development.',
  },
  {
    id: 'managed_infrastructure',
    label: 'Managed\nInfrastructure',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'cloud_platforms_support',
    definition: 'Platforms like Azure AI Foundry and Red Hat OpenShift AI provide pre-built setups for easier experimentation.',
  },
  {
    id: 'prebuilt_models_tools',
    label: 'Access to\nPrebuilt Models and Tools',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'cloud_platforms_support',
    definition: 'Cloud services often offer access to pretrained models, APIs, and specialized toolkits for faster project initiation.',
  },
  {
    id: 'overwhelmed_by_resources',
    label: 'Anti-Pattern:\nOverwhelmed by Resources',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Beginners can get overwhelmed by too many courses, frameworks, and trends, leading to analysis paralysis instead of action.',
  },
];

export const links = [
  { source: 'root', target: 'fundamentals_of_ai' },
  { source: 'fundamentals_of_ai', target: 'ai_basics' },
  { source: 'fundamentals_of_ai', target: 'llm_core_concepts' },
  { source: 'fundamentals_of_ai', target: 'agents_basics' },

  { source: 'root', target: 'prompt_engineering' },
  { source: 'prompt_engineering', target: 'prompt_design_principles' },
  { source: 'prompt_engineering', target: 'prompt_experiments' },

  { source: 'root', target: 'beginner_friendly_resources' },
  { source: 'beginner_friendly_resources', target: 'intro_courses_guides' },
  { source: 'beginner_friendly_resources', target: 'framework_documentation' },
  { source: 'beginner_friendly_resources', target: 'community_engagement' },

  { source: 'root', target: 'cloud_platforms_support' },
  { source: 'cloud_platforms_support', target: 'managed_infrastructure' },
  { source: 'cloud_platforms_support', target: 'prebuilt_models_tools' },

  { source: 'root', target: 'overwhelmed_by_resources' },
];
