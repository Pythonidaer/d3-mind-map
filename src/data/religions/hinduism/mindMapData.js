import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Hinduism',
    definition:
      'An ancient Indian religion characterized by diverse philosophies, rituals, and deities, with concepts like dharma, karma, and moksha at its core.',
    shape: 'roundRect',
    color: COLORS.root,
  },
  {
    id: 'coreConcepts',
    label: 'Core Concepts',
    definition: 'Foundational beliefs shared across most Hindu traditions.',
    shape: 'ellipse',
    color: COLORS.veryLightGreen,
  },
  {
    id: 'dharma',
    label: 'Dharma',
    definition:
      'Moral duty, righteousness, and ethical living according to one’s role in society.',
    shape: 'rect',
    color: COLORS.mintGreen,
  },
  {
    id: 'karma',
    label: 'Karma',
    definition:
      'The law of cause and effect; actions influence future outcomes.',
    shape: 'rect',
    color: COLORS.mintGreen,
  },
  {
    id: 'moksha',
    label: 'Moksha',
    definition:
      'Liberation from the cycle of rebirth (samsara); ultimate spiritual goal.',
    shape: 'rect',
    color: COLORS.mintGreen,
  },
  {
    id: 'atman',
    label: 'Atman',
    definition:
      'The eternal self or soul that is ultimately identical with Brahman.',
    shape: 'rect',
    color: COLORS.mintGreen,
  },
  {
    id: 'brahman',
    label: 'Brahman',
    definition:
      'The ultimate, unchanging reality and source of all that exists.',
    shape: 'rect',
    color: COLORS.mintGreen,
  },
  {
    id: 'schools',
    label: 'Philosophical \n Schools',
    definition:
      'Six orthodox schools (darshanas) offering distinct metaphysical frameworks.',
    shape: 'ellipse',
    color: COLORS.veryLightGreen,
  },
  {
    id: 'nyaya',
    label: 'Nyaya',
    definition:
      'Logic and epistemology; focuses on reasoning and sources of knowledge.',
    shape: 'rect',
    color: COLORS.mintGreen,
  },
  {
    id: 'vaisheshika',
    label: 'Vaisheshika',
    definition: 'Atomistic theory of matter and metaphysics.',
    shape: 'rect',
    color: COLORS.mintGreen,
  },
  {
    id: 'samkhya',
    label: 'Samkhya',
    definition:
      'Dualist school distinguishing consciousness (Purusha) and matter (Prakriti).',
    shape: 'rect',
    color: COLORS.mintGreen,
  },
  {
    id: 'yoga',
    label: 'Yoga',
    definition:
      'Discipline of mind and body to attain liberation; closely linked to Samkhya.',
    shape: 'rect',
    color: COLORS.mintGreen,
  },
  {
    id: 'mimamsa',
    label: 'Mimamsa',
    definition: 'Focuses on ritual interpretation of the Vedas and duties.',
    shape: 'rect',
    color: COLORS.mintGreen,
  },
  {
    id: 'vedanta',
    label: 'Vedanta',
    definition: 'Explores the end of the Vedas; emphasizes unity with Brahman.',
    shape: 'rect',
    color: COLORS.mintGreen,
  },
  {
    id: 'texts',
    label: 'Sacred Texts',
    definition:
      'Canonical scriptures ranging from ancient hymns to philosophical epics.',
    shape: 'ellipse',
    color: COLORS.veryLightGreen,
  },
  {
    id: 'vedas',
    label: 'Vedas',
    definition:
      'The oldest and most authoritative scriptures, consisting of four main collections.',
    shape: 'rect',
    color: COLORS.mintGreen,
  },
  {
    id: 'upanishads',
    label: 'Upanishads',
    definition:
      'Philosophical teachings exploring the nature of reality and self.',
    shape: 'rect',
    color: COLORS.mintGreen,
  },
  {
    id: 'mahabharata',
    label: 'Mahabharata',
    definition:
      'Epic poem that includes the Bhagavad Gita; explores dharma in complex scenarios.',
    shape: 'rect',
    color: COLORS.mintGreen,
  },
  {
    id: 'ramayana',
    label: 'Ramayana',
    definition:
      'Epic recounting the life of Prince Rama, ideal dharma, and devotion.',
    shape: 'rect',
    color: COLORS.mintGreen,
  },
  {
    id: 'puranas',
    label: 'Puranas',
    definition:
      'Narratives of gods, cosmology, and moral lessons used in devotional worship.',
    shape: 'rect',
    color: COLORS.mintGreen,
  },
]

export const links = [
  { source: 'root', target: 'coreConcepts' },
  { source: 'root', target: 'schools' },
  { source: 'root', target: 'texts' },
  { source: 'coreConcepts', target: 'dharma' },
  { source: 'coreConcepts', target: 'karma' },
  { source: 'coreConcepts', target: 'moksha' },
  { source: 'coreConcepts', target: 'atman' },
  { source: 'coreConcepts', target: 'brahman' },
  { source: 'schools', target: 'nyaya' },
  { source: 'schools', target: 'vaisheshika' },
  { source: 'schools', target: 'samkhya' },
  { source: 'schools', target: 'yoga' },
  { source: 'schools', target: 'mimamsa' },
  { source: 'schools', target: 'vedanta' },
  { source: 'texts', target: 'vedas' },
  { source: 'texts', target: 'upanishads' },
  { source: 'texts', target: 'mahabharata' },
  { source: 'texts', target: 'ramayana' },
  { source: 'texts', target: 'puranas' },
]
