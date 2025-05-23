import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Web Accessibility\n(Core Concepts)',
    definition: 'Foundational understanding of what web accessibility (a11y) means, its scope, and its universal benefits.',
    color: 'root',
    shape: 'roundRect',
  },
  {
    id: 'a11y_definition',
    label: 'Definition of a11y',
    definition: 'Accessibility means making web content usable by people with disabilities, including visual, auditory, motor, and cognitive impairments.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'inclusive_practice',
    label: 'Inclusive Practice\n& Universal Design',
    definition: 'Design that benefits all users, including those with temporary, situational, or permanent disabilities.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'curb_cut_effect',
    label: 'Curb-Cut Effect',
    definition: 'Designs created for accessibility often help broader user groups — e.g., captions help in noisy environments.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'broad_benefits',
    label: 'Broader User\nBenefits',
    definition: 'Accessibility helps users on mobile, with slow connections, in noisy settings, or with temporary impairments.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'w3c_vision',
    label: 'W3C Vision',
    definition: '“The web is designed to work for all people, regardless of ability.” — World Wide Web Consortium (W3C)',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'disability_spectrum',
    label: 'Disability Spectrum',
    definition: 'Includes auditory, cognitive, neurological, physical, speech, and visual impairments.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'barrier_removal',
    label: 'Barrier Removal',
    definition: 'The goal is to eliminate interaction and access obstacles for all types of users.',
    color: 'nodePositive2',
    shape: 'rect',
  }
];

export const links = [
  { source: 'root', target: 'a11y_definition' },
  { source: 'root', target: 'inclusive_practice' },
  { source: 'inclusive_practice', target: 'curb_cut_effect' },
  { source: 'inclusive_practice', target: 'broad_benefits' },
  { source: 'root', target: 'w3c_vision' },
  { source: 'a11y_definition', target: 'disability_spectrum' },
  { source: 'a11y_definition', target: 'barrier_removal' },
];
