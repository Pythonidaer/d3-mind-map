import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Taoism',
    definition:
      'A Chinese philosophy and religion founded around the 4th century BCE focused on harmony with the Tao (the Way).',
    shape: 'roundRect',
    color: 'root',
  },
  {
    id: 'coreConcepts',
    label: 'Core \n Concepts',
    definition:
      'Foundational principles that define Taoist philosophy and practice.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'tao',
    label: 'Tao (Dao)',
    definition:
      'The ineffable, natural force or way that governs the universe.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'wuWei',
    label: 'Wu Wei',
    definition: 'Effortless action or non-action aligned with the Tao.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'yinYang',
    label: 'Yin & Yang',
    definition: 'Opposing but complementary forces in nature and life.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'texts',
    label: 'Key \n Texts',
    definition: 'Sacred writings that outline Taoist thought and ethics.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'daoDeJing',
    label: 'Dao De Jing',
    definition:
      'Attributed to Laozi, this text emphasizes living in harmony with the Tao.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'zhuangzi',
    label: 'Zhuangzi',
    definition:
      'A philosophical text with allegories that challenge rigid structures and value spontaneity.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'philosophical',
    label: 'Philosophical \n Taoism',
    definition:
      'Focuses on metaphysics and ethics based on early Taoist texts.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'religious',
    label: 'Religious \n Taoism',
    definition:
      'Developed later, includes rituals, deities, alchemy, and priesthood.',
    shape: 'rect',
    color: 'nodePositive2',
  },
]

export const links = [
  { source: 'root', target: 'coreConcepts' },
  { source: 'coreConcepts', target: 'tao' },
  { source: 'coreConcepts', target: 'wuWei' },
  { source: 'coreConcepts', target: 'yinYang' },
  { source: 'root', target: 'texts' },
  { source: 'texts', target: 'daoDeJing' },
  { source: 'texts', target: 'zhuangzi' },
  { source: 'root', target: 'philosophical' },
  { source: 'root', target: 'religious' },
]
