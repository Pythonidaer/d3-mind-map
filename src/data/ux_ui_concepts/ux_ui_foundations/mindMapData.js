import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'UX/UI Foundations',
    definition: 'Introduction to the core distinctions and relationships between User Experience (UX) and User Interface (UI) design.',
    shape: 'roundRect',
    color: 'root',
  },
  {
    id: 'ux_definition',
    label: 'User\nExperience (UX)',
    definition: 'Focuses on the overall interaction and satisfaction users have with a product or system.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'ui_definition',
    label: 'User\nInterface (UI)',
    definition: 'Focuses on the visual and interactive elements users directly engage with.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'ux_aspects',
    label: 'Key Aspects\nof UX',
    definition: 'Includes usability, accessibility, desirability, and value.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'ui_elements',
    label: 'UI\nComponents',
    definition: 'Includes buttons, icons, typography, color schemes, and layout.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'ux_goal',
    label: 'Goal of UX',
    definition: 'Understand user behaviors, anticipate needs, and create enjoyable, seamless experiences.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'ui_goal',
    label: 'Goal of UI',
    definition: 'Present information clearly, maintain visual consistency, and facilitate ease of use.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'ux_ui_relationship',
    label: 'UX/UI\nRelationship',
    definition: 'UX strategy informs UI design, which brings it to life through interactive elements.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'ux_strategy',
    label: 'UX\nStrategy',
    definition: 'Empathy-driven research that shapes the overall product experience.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'ui_execution',
    label: 'UI as\nExecution Layer',
    definition: 'Translates UX principles into visual and interactive elements for the user.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'success_combination',
    label: 'Success =\nUX + UI',
    definition: 'Great digital products rely on the harmony between well-researched UX and polished UI.',
    shape: 'rect',
    color: 'nodePositive2',
  },
];

export const links = [
  { source: 'root', target: 'ux_definition' },
  { source: 'root', target: 'ui_definition' },
  { source: 'ux_definition', target: 'ux_aspects' },
  { source: 'ux_definition', target: 'ux_goal' },
  { source: 'ui_definition', target: 'ui_elements' },
  { source: 'ui_definition', target: 'ui_goal' },
  { source: 'root', target: 'ux_ui_relationship' },
  { source: 'ux_ui_relationship', target: 'ux_strategy' },
  { source: 'ux_ui_relationship', target: 'ui_execution' },
  { source: 'ux_ui_relationship', target: 'success_combination' },
];
