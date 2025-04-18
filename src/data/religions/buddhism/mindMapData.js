import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Buddhism \n Branches',
    definition:
      'A Dharmic religion founded by Siddhartha Gautama in the 5th–6th century BCE, centered on the path to enlightenment.',
    shape: 'roundRect',
    color: 'root',
  },
  {
    id: 'coreTeachings',
    label: 'Core \n Teachings',
    definition: 'Foundational ideas shared across most Buddhist traditions.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'fourNobleTruths',
    label: 'Four Noble \n Truths',
    definition:
      'Suffering exists, has a cause, can cease, and the path leads to cessation.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'eightfoldPath',
    label: 'Eightfold \n Path',
    definition:
      'Right view, intention, speech, action, livelihood, effort, mindfulness, and concentration.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'threeMarks',
    label: 'Three Marks \n of Existence',
    definition:
      'Impermanence (anicca), suffering (dukkha), and non-self (anatta).',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'theravada',
    label: 'Theravāda',
    definition:
      '"Teaching of the Elders"—focuses on monastic life and the Pali Canon.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'mahayana',
    label: 'Mahāyāna',
    definition:
      '"Great Vehicle"—emphasizes compassion, lay participation, and bodhisattvas.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'vajrayana',
    label: 'Vajrayāna',
    definition:
      '"Diamond Vehicle"—Tibetan Buddhism; uses rituals, mantras, and tantra.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'texts',
    label: 'Sacred \n Texts',
    definition:
      'Canonical scriptures vary by branch; often include sutras and commentaries.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'paliCanon',
    label: 'Pāli Canon',
    definition:
      'The earliest and most complete Buddhist scripture, central in Theravāda.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'mahayanaSutras',
    label: 'Mahāyāna Sutras',
    definition:
      'Texts like the Lotus Sutra and Heart Sutra, central to Mahāyāna Buddhism.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'tantras',
    label: 'Tantras',
    definition: 'Ritual and esoteric texts central to Vajrayāna practices.',
    shape: 'rect',
    color: 'nodePositive2',
  },
]

export const links = [
  { source: 'root', target: 'coreTeachings' },
  { source: 'root', target: 'theravada' },
  { source: 'root', target: 'mahayana' },
  { source: 'root', target: 'vajrayana' },
  { source: 'root', target: 'texts' },
  { source: 'coreTeachings', target: 'fourNobleTruths' },
  { source: 'coreTeachings', target: 'eightfoldPath' },
  { source: 'coreTeachings', target: 'threeMarks' },
  { source: 'texts', target: 'paliCanon' },
  { source: 'texts', target: 'mahayanaSutras' },
  { source: 'texts', target: 'tantras' },
]
