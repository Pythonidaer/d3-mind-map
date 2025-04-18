import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Christianity \n Branches',
    definition:
      'A monotheistic religion centered on the life, teachings, death, and resurrection of Jesus Christ.',
    shape: 'roundRect',
    color: 'root',
  },
  {
    id: 'canonConcepts',
    label: 'Canon vs. \n Apocrypha',
    definition:
      'Key terms for understanding what books are considered official scripture (canonical) versus non-authoritative (apocryphal).',
    shape: 'ellipse',
    color: 'veryLightGreen',
  },
  {
    id: 'canonicalBooks',
    label: 'Canonical \n Books',
    definition:
      'Books accepted as part of the official Bible by a religious tradition (e.g., Gospels, Epistles).',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'apocrypha',
    label: 'Apocrypha',
    definition:
      'Books with religious or historical value not included in all biblical canons (e.g., Tobit, Maccabees).',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'deuterocanonical',
    label: 'Deuterocanonical',
    definition:
      'Books included in the Catholic Old Testament but considered apocryphal by most Protestants.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'pseudepigrapha',
    label: 'Pseudepigrapha',
    definition:
      'Ancient Jewish or Christian writings attributed to biblical figures but excluded from canon.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'catholicism',
    label: 'Catholicism',
    definition:
      'The largest Christian branch, led by the Pope and centered in Rome.',
    shape: 'ellipse',
    color: 'veryLightGreen',
  },
  {
    id: 'orthodoxy',
    label: 'Eastern Orthodoxy',
    definition:
      'Christian churches primarily in Eastern Europe and the Middle East; split from Rome in 1054.',
    shape: 'ellipse',
    color: 'veryLightGreen',
  },
  {
    id: 'protestantism',
    label: 'Protestantism',
    definition:
      'Emerging from the Reformation, emphasizing scripture and faith alone.',
    shape: 'ellipse',
    color: 'veryLightGreen',
  },
  {
    id: 'denominations',
    label: 'Protestant \n Denominations',
    definition:
      'Sub-branches of Protestantism, each with distinct doctrines and governance.',
    shape: 'ellipse',
    color: 'veryLightGreen',
  },
  {
    id: 'lutheran',
    label: 'Lutheran',
    definition:
      'Founded by Martin Luther; stresses justification by faith alone.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'anglican',
    label: 'Anglican',
    definition:
      'Originated from the English Reformation; blends Catholic and Protestant practices.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'methodist',
    label: 'Methodist',
    definition:
      'Focuses on sanctification and social justice; began with John Wesley.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'baptist',
    label: 'Baptist',
    definition: 'Emphasizes adult baptism and congregational governance.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'romanMissal',
    label: 'Roman Missal',
    definition:
      'The liturgical book used for Mass in the Roman Catholic Church.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'mass',
    label: 'Mass',
    definition:
      'The central worship and Eucharistic celebration in Catholicism.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'reformation',
    label: 'Protestant \n Reformation',
    definition:
      'A 16th-century movement to reform the Church, leading to Protestant branches.',
    shape: 'ellipse',
    color: 'veryLightGreen',
  },
  {
    id: 'martinLuther',
    label: 'Martin Luther',
    definition:
      'German monk who sparked the Reformation with his 95 Theses in 1517.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'indulgences',
    label: 'Indulgences',
    definition:
      'Documents sold by the Church to reduce time in purgatory; criticized during the Reformation.',
    shape: 'diamond',
    color: '#FFE0E0',
  },
  {
    id: 'presbyterian',
    label: 'Presbyterian',
    definition:
      'Governed by elders and rooted in Reformed (Calvinist) theology.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'pentecostal',
    label: 'Pentecostal',
    definition:
      'Focuses on direct experience with the Holy Spirit; emphasizes spiritual gifts.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'nonDenom',
    label: 'Non-denominational',
    definition:
      'Independent Christian churches that often emphasize local governance and contemporary worship.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'restorationist',
    label: 'Restorationist \n Movements',
    definition:
      'Movements from the 19th–20th century that seek to restore original Christianity.',
    shape: 'ellipse',
    color: 'veryLightGreen',
  },
  {
    id: 'lds',
    label: 'Latter-day Saints',
    definition:
      'Founded by Joseph Smith; includes the Book of Mormon alongside the Bible.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'jehovahsWitness',
    label: 'Jehovah’s Witnesses',
    definition:
      'Reject the Trinity and emphasize evangelism and apocalyptic beliefs.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'adventist',
    label: 'Seventh-day Adventist',
    definition: 'Emphasizes Saturday Sabbath, health, and end-time prophecies.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'movements',
    label: 'Theological \n Movements',
    definition:
      'Evangelical, Charismatic, Calvinist, Arminian, and other ideological traditions.',
    shape: 'diamond',
    color: 'mintGreen',
  },
  {
    id: 'churchVariants',
    label: 'Organizational \n Variants',
    definition:
      'Examples include Southern Baptist vs. American Baptist, or various Methodist splits.',
    shape: 'diamond',
    color: 'mintGreen',
  },
  {
    id: 'greekOrthodox',
    label: 'Greek Orthodox',
    definition:
      'Centered in Greece and Cyprus, known for its rich liturgical tradition.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'russianOrthodox',
    label: 'Russian Orthodox',
    definition:
      'Largest Eastern Orthodox church, influential in Russia and Eastern Europe.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'serbianOrthodox',
    label: 'Serbian Orthodox',
    definition: 'National church of Serbia and Serbian diaspora communities.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'oca',
    label: 'Orthodox Church \n in America',
    definition:
      'A U.S.-based church with autocephalous status, not universally recognized.',
    shape: 'rect',
    color: 'mintGreen',
  },
]

export const links = [
  { source: 'root', target: 'catholicism' },
  { source: 'root', target: 'orthodoxy' },
  { source: 'root', target: 'protestantism' },
  { source: 'root', target: 'restorationist' },
  { source: 'protestantism', target: 'denominations' },
  { source: 'denominations', target: 'lutheran' },
  { source: 'denominations', target: 'anglican' },
  { source: 'denominations', target: 'methodist' },
  { source: 'denominations', target: 'baptist' },
  { source: 'catholicism', target: 'romanMissal' },
  { source: 'catholicism', target: 'mass' },
  { source: 'protestantism', target: 'reformation' },
  { source: 'reformation', target: 'martinLuther' },
  { source: 'reformation', target: 'indulgences' },
  { source: 'denominations', target: 'presbyterian' },
  { source: 'denominations', target: 'pentecostal' },
  { source: 'denominations', target: 'nonDenom' },
  { source: 'denominations', target: 'movements' },
  { source: 'denominations', target: 'churchVariants' },
  { source: 'restorationist', target: 'lds' },
  { source: 'restorationist', target: 'jehovahsWitness' },
  { source: 'restorationist', target: 'adventist' },
  { source: 'orthodoxy', target: 'greekOrthodox' },
  { source: 'orthodoxy', target: 'russianOrthodox' },
  { source: 'orthodoxy', target: 'serbianOrthodox' },
  { source: 'orthodoxy', target: 'oca' },
  { source: 'root', target: 'canonConcepts' },
  { source: 'canonConcepts', target: 'canonicalBooks' },
  { source: 'canonConcepts', target: 'apocrypha' },
  { source: 'canonConcepts', target: 'deuterocanonical' },
  { source: 'canonConcepts', target: 'pseudepigrapha' },
]
