import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Islam \n Branches',
    definition:
      'A monotheistic Abrahamic religion centered on the belief in one God (Allah) and the prophethood of Muhammad.',
    shape: 'roundRect',
    color: 'root',
  },
  {
    id: 'sunni',
    label: 'Sunni Islam',
    definition:
      'The largest branch of Islam, emphasizing consensus and the authority of the four rightly guided caliphs.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'rashidun',
    label: 'Rightly \n Guided \n Caliphs',
    definition:
      'The first four caliphs after Muhammad, viewed as exemplary leaders by Sunnis.',
    shape: 'ellipse',
    color: 'veryLightGreen',
  },
  {
    id: 'abuBakr',
    label: 'Abu Bakr',
    definition:
      'The first caliph; close companion and father-in-law of Muhammad.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'umar',
    label: 'Umar',
    definition: 'The second caliph; expanded the Islamic empire significantly.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'uthman',
    label: 'Uthman',
    definition: 'The third caliph; compiled the Qur’an into a single book.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'ali',
    label: 'Ali',
    definition:
      'The fourth caliph and cousin/son-in-law of Muhammad; also central to Shia Islam.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'shia',
    label: 'Shia Islam',
    definition:
      'Believes leadership should have stayed within the Prophet’s family, particularly through Ali.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'ibadi',
    label: 'Ibadi Islam',
    definition:
      'A minority sect found mostly in Oman; distinct from Sunni and Shia in leadership and theology.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'sunniSchools',
    label: 'Sunni \n Legal \n Schools',
    definition:
      'Different schools of Islamic jurisprudence within Sunni Islam.',
    shape: 'ellipse',
    color: 'veryLightGreen',
  },
  {
    id: 'hanafi',
    label: 'Hanafi',
    definition:
      'The most widely followed Sunni school, known for its flexibility and use of reason.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'maliki',
    label: 'Maliki',
    definition:
      'Predominant in North and West Africa; emphasizes practices of Medina.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'shafii',
    label: 'Shafi’i',
    definition:
      'Known for strict methodology and widespread in Southeast Asia.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'hanbali',
    label: 'Hanbali',
    definition:
      'The most conservative school; foundational to Salafism and Wahhabism.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'quran',
    label: 'Qur’an',
    definition:
      'The holy book of Islam, believed to be the literal word of God as revealed to Muhammad.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'hadith',
    label: 'Hadith',
    definition:
      'Collections of sayings and actions of the Prophet Muhammad, used to guide Islamic practice.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'fivePillars',
    label: 'Five Pillars',
    definition: 'The five core practices required of all Muslims.',
    shape: 'ellipse',
    color: 'veryLightGreen',
  },
  {
    id: 'shahada',
    label: 'Shahada',
    definition:
      'Declaration of faith — “There is no god but Allah, and Muhammad is the messenger of Allah.”',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'salat',
    label: 'Salat',
    definition: 'Ritual prayer performed five times a day.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'zakat',
    label: 'Zakat',
    definition: 'Obligatory charity to aid the poor and purify wealth.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'sawm',
    label: 'Sawm',
    definition: 'Fasting during the month of Ramadan.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'hajj',
    label: 'Hajj',
    definition:
      'Pilgrimage to Mecca, required once in a lifetime for those able.',
    shape: 'rect',
    color: 'mintGreen',
  },
]

export const links = [
  { source: 'root', target: 'sunni' },
  { source: 'root', target: 'shia' },
  { source: 'root', target: 'ibadi' },
  { source: 'root', target: 'quran' },
  { source: 'root', target: 'hadith' },
  { source: 'root', target: 'fivePillars' },
  { source: 'sunni', target: 'sunniSchools' },
  { source: 'sunni', target: 'rashidun' },
  { source: 'rashidun', target: 'abuBakr' },
  { source: 'rashidun', target: 'umar' },
  { source: 'rashidun', target: 'uthman' },
  { source: 'rashidun', target: 'ali' },
  { source: 'sunniSchools', target: 'hanafi' },
  { source: 'sunniSchools', target: 'maliki' },
  { source: 'sunniSchools', target: 'shafii' },
  { source: 'sunniSchools', target: 'hanbali' },
  { source: 'fivePillars', target: 'shahada' },
  { source: 'fivePillars', target: 'salat' },
  { source: 'fivePillars', target: 'zakat' },
  { source: 'fivePillars', target: 'sawm' },
  { source: 'fivePillars', target: 'hajj' },
]
