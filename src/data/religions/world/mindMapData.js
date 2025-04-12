export const nodes = [
  {
    id: 'root',
    label: 'World Religions',
    definition:
      'Major global religions, their branches, sacred texts, beliefs, and regional impact.',
    shape: 'roundRect',
    color: '#37474F',
  },
  {
    id: 'abrahamic',
    label: 'Abrahamic \n Faiths',
    definition: 'Monotheistic religions tracing spiritual ancestry to Abraham.',
    shape: 'ellipse',
    color: '#98EE99',
  },
  {
    id: 'dharmic',
    label: 'Dharmic \n Religions',
    definition:
      'Religions originating in India, focused on dharma, karma, and rebirth.',
    shape: 'ellipse',
    color: '#98EE99',
  },
  {
    id: 'taoic',
    label: 'Taoic \n Religions',
    definition:
      'East Asian traditions emphasizing harmony with nature and social order.',
    shape: 'ellipse',
    color: '#98EE99',
  },
  {
    id: 'indigenous',
    label: 'Indigenous \n Traditions',
    definition: 'Spiritual systems rooted in ancestral, land-based practices.',
    shape: 'ellipse',
    color: '#98EE99',
  },
  {
    id: 'newMovements',
    label: 'New Religious \n Movements',
    definition:
      'Modern religions or spiritual systems that emerged in the last two centuries.',
    shape: 'ellipse',
    color: '#98EE99',
  },
  // Abrahamic
  {
    id: 'christianity',
    label: 'Christianity',
    definition:
      'Centered on the life, teachings, and resurrection of Jesus Christ.',
    shape: 'rect',
    color: '#B9F6CA',
  },
  {
    id: 'islam',
    label: 'Islam',
    definition:
      'Monotheistic faith founded on the revelations to the Prophet Muhammad.',
    shape: 'rect',
    color: '#B9F6CA',
  },
  {
    id: 'judaism',
    label: 'Judaism',
    definition:
      'The oldest Abrahamic faith, based on covenant and Torah observance.',
    shape: 'rect',
    color: '#B9F6CA',
  },
  {
    id: 'bahai',
    label: 'Bahaʼi Faith',
    definition:
      'Teaches unity of all religions and prophets, founded by Baháʼu’lláh in 19th-century Persia.',
    shape: 'rect',
    color: '#B9F6CA',
  },
  // Dharmic
  {
    id: 'hinduism',
    label: 'Hinduism',
    definition:
      'A pluralistic religion of dharma, karma, and moksha rooted in Indian tradition.',
    shape: 'rect',
    color: '#B9F6CA',
  },
  {
    id: 'buddhism',
    label: 'Buddhism',
    definition:
      'Founded by Siddhartha Gautama; teaches the path to enlightenment through the Four Noble Truths.',
    shape: 'rect',
    color: '#B9F6CA',
  },
  {
    id: 'jainism',
    label: 'Jainism',
    definition:
      'Emphasizes non-violence and liberation of the soul through self-discipline.',
    shape: 'rect',
    color: '#B9F6CA',
  },
  {
    id: 'sikhism',
    label: 'Sikhism',
    definition:
      'Monotheistic faith founded by Guru Nanak, promoting service, equality, and devotion.',
    shape: 'rect',
    color: '#B9F6CA',
  },
  // Taoic
  {
    id: 'taoism',
    label: 'Taoism',
    definition:
      'Chinese philosophy and religion focused on harmony with the Tao.',
    shape: 'rect',
    color: '#B9F6CA',
  },
  {
    id: 'confucianism',
    label: 'Confucianism',
    definition:
      'Ethical and social philosophy based on the teachings of Confucius.',
    shape: 'rect',
    color: '#B9F6CA',
  },
  {
    id: 'shinto',
    label: 'Shinto',
    definition:
      'Native Japanese spirituality centered on kami (spirits) and ancestral rituals.',
    shape: 'rect',
    color: '#B9F6CA',
  },
  // Indigenous
  {
    id: 'africanTraditional',
    label: 'African Traditional Religions',
    definition:
      'Diverse spiritual traditions rooted in community, ancestors, and nature worship.',
    shape: 'rect',
    color: '#B9F6CA',
  },
  {
    id: 'nativeAmerican',
    label: 'Native American Religions',
    definition:
      'Spiritual practices of Indigenous tribes focusing on nature, spirits, and ceremonies.',
    shape: 'rect',
    color: '#B9F6CA',
  },
  // Paganism (Ancient + Modern)
  {
    id: 'paganism',
    label: 'Paganism',
    definition:
      'An umbrella for ancient polytheistic and earth-centered religions predating Abrahamic traditions.',
    shape: 'ellipse',
    color: '#98EE99',
  },
  {
    id: 'ancientPaganism',
    label: 'Ancient Paganism',
    definition:
      'Historical polytheistic religions including Greek, Roman, Norse, Egyptian, and Mesopotamian.',
    shape: 'rect',
    color: '#B9F6CA',
  },
  {
    id: 'wicca',
    label: 'Wicca',
    definition:
      'Nature-based Pagan religion involving witchcraft, dual deities, and seasonal festivals.',
    shape: 'rect',
    color: '#B9F6CA',
  },
  {
    id: 'druidry',
    label: 'Druidry',
    definition:
      'Modern spiritual path inspired by ancient Celtic traditions, revering nature and wisdom.',
    shape: 'rect',
    color: '#B9F6CA',
  },
  {
    id: 'heathenry',
    label: 'Heathenry',
    definition:
      'Reconstructionist path honoring Norse and Germanic gods like Odin and Thor.',
    shape: 'rect',
    color: '#B9F6CA',
  },
  {
    id: 'scientology',
    label: 'Scientology',
    definition:
      'Modern movement focused on spiritual awareness and self-knowledge through auditing.',
    shape: 'rect',
    color: '#B9F6CA',
  },
]

export const links = [
  { source: 'root', target: 'abrahamic' },
  { source: 'root', target: 'dharmic' },
  { source: 'root', target: 'taoic' },
  { source: 'root', target: 'indigenous' },
  { source: 'root', target: 'newMovements' },
  { source: 'root', target: 'paganism' },
  { source: 'abrahamic', target: 'christianity' },
  { source: 'abrahamic', target: 'islam' },
  { source: 'abrahamic', target: 'judaism' },
  { source: 'abrahamic', target: 'bahai' },
  { source: 'dharmic', target: 'hinduism' },
  { source: 'dharmic', target: 'buddhism' },
  { source: 'dharmic', target: 'jainism' },
  { source: 'dharmic', target: 'sikhism' },
  { source: 'taoic', target: 'taoism' },
  { source: 'taoic', target: 'confucianism' },
  { source: 'taoic', target: 'shinto' },
  { source: 'indigenous', target: 'africanTraditional' },
  { source: 'indigenous', target: 'nativeAmerican' },
  { source: 'paganism', target: 'ancientPaganism' },
  { source: 'paganism', target: 'wicca' },
  { source: 'paganism', target: 'druidry' },
  { source: 'paganism', target: 'heathenry' },
  { source: 'newMovements', target: 'scientology' },
]
