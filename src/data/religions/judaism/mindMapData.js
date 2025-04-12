export const nodes = [
  {
    id: 'root',
    label: 'Judaism \n Branches',
    definition:
      'An ancient monotheistic religion rooted in the covenant between God and the people of Israel, centered on Torah and a tradition of law and ethics.',
    shape: 'roundRect',
    color: '#37474F',
  },
  {
    id: 'orthodox',
    label: 'Orthodox Judaism',
    definition:
      'Maintains strict adherence to traditional Jewish law and ritual.',
    shape: 'rect',
    color: '#B9F6CA',
  },
  {
    id: 'hasidic',
    label: 'Hasidic Judaism',
    definition:
      'A mystical movement within Orthodox Judaism focused on joy, prayer, and leadership by charismatic rebbes.',
    shape: 'rect',
    color: '#E8F5E9',
  },
  {
    id: 'conservative',
    label: 'Conservative Judaism',
    definition:
      'Seeks a middle ground between tradition and modernity, allowing for historical development of Jewish law.',
    shape: 'rect',
    color: '#B9F6CA',
  },
  {
    id: 'reform',
    label: 'Reform Judaism',
    definition:
      'Emphasizes ethics and individual autonomy, often modifying traditional rituals and laws.',
    shape: 'rect',
    color: '#B9F6CA',
  },
  {
    id: 'reconstructionist',
    label: 'Reconstructionist',
    definition:
      'Views Judaism as an evolving civilization and focuses on cultural identity and community practice.',
    shape: 'rect',
    color: '#B9F6CA',
  },
  {
    id: 'coreTexts',
    label: 'Sacred Texts',
    definition:
      'Foundational writings guiding Jewish belief, practice, and law.',
    shape: 'ellipse',
    color: '#98EE99',
  },
  {
    id: 'tanakh',
    label: 'Tanakh',
    definition:
      'The Hebrew Bible, composed of Torah (Law), Nevi’im (Prophets), and Ketuvim (Writings).',
    shape: 'rect',
    color: '#E8F5E9',
  },
  {
    id: 'talmud',
    label: 'Talmud',
    definition:
      'A vast compilation of rabbinic discussion on law, ethics, and tradition based on the Mishnah.',
    shape: 'rect',
    color: '#E8F5E9',
  },
  {
    id: 'midrash',
    label: 'Midrash',
    definition: 'Interpretive stories and commentary on the Hebrew Bible.',
    shape: 'rect',
    color: '#E8F5E9',
  },
  {
    id: 'kabbalah',
    label: 'Kabbalah',
    definition:
      'Jewish mystical tradition exploring divine realities, creation, and the nature of God; rooted in the Zohar.',
    shape: 'rect',
    color: '#E8F5E9',
  },
  {
    id: 'coreBeliefs',
    label: 'Core Beliefs',
    definition: 'Doctrines shared across most Jewish traditions.',
    shape: 'ellipse',
    color: '#98EE99',
  },
  {
    id: 'monotheism',
    label: 'Monotheism',
    definition:
      'Belief in one, indivisible, and eternal God who is the creator and sustainer of the universe.',
    shape: 'rect',
    color: '#E8F5E9',
  },
  {
    id: 'covenant',
    label: 'Covenant',
    definition:
      'A binding agreement between God and the people of Israel, starting with Abraham and reaffirmed at Sinai.',
    shape: 'rect',
    color: '#E8F5E9',
  },
  {
    id: 'mitzvot',
    label: 'Mitzvot',
    definition:
      'Commandments or religious obligations found in the Torah (traditionally 613 in number).',
    shape: 'rect',
    color: '#E8F5E9',
  },
  {
    id: 'halakhah',
    label: 'Halakhah',
    definition:
      'Jewish law governing daily life, ethics, ritual, and community behavior.',
    shape: 'rect',
    color: '#E8F5E9',
  },
  {
    id: 'messiah',
    label: 'Messianic Hope',
    definition:
      'Belief in a future anointed one (Messiah) who will bring peace and restore Israel.',
    shape: 'rect',
    color: '#E8F5E9',
  },
  {
    id: 'diaspora',
    label: 'Cultural \n Traditions',
    definition:
      'Diverse Jewish customs and lineages shaped by geography, including Ashkenazi, Sephardi, and Mizrahi communities.',
    shape: 'ellipse',
    color: '#98EE99',
  },
]

export const links = [
  { source: 'root', target: 'orthodox' },
  { source: 'orthodox', target: 'hasidic' },
  { source: 'root', target: 'conservative' },
  { source: 'root', target: 'reform' },
  { source: 'root', target: 'reconstructionist' },
  { source: 'root', target: 'coreTexts' },
  { source: 'coreTexts', target: 'tanakh' },
  { source: 'coreTexts', target: 'talmud' },
  { source: 'coreTexts', target: 'midrash' },
  { source: 'coreTexts', target: 'kabbalah' },
  { source: 'root', target: 'coreBeliefs' },
  { source: 'coreBeliefs', target: 'monotheism' },
  { source: 'coreBeliefs', target: 'covenant' },
  { source: 'coreBeliefs', target: 'mitzvot' },
  { source: 'coreBeliefs', target: 'halakhah' },
  { source: 'coreBeliefs', target: 'messiah' },
  { source: 'root', target: 'diaspora' },
]
