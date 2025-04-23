// mindMapData.js
import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'CSS Fundamentals',
    shape: 'roundRect',
    color: 'root',
    definition: 'Essential CSS concepts that underpin every design system, ensuring styles are predictable, structured, and maintainable.'
  },

  // Level 1 Positive
  {
    id: 'selectors',
    label: 'Selectors',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Mechanisms for targeting elements to apply styles, ranging from basic tags to complex queries.'
  },
  {
    id: 'specificity',
    label: 'Specificity',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Determines which style takes precedence when multiple rules apply to the same element.'
  },
  {
    id: 'cascade',
    label: 'Cascade',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Defines the order in which styles are applied based on source order, specificity, and importance.'
  },
  {
    id: 'inheritance',
    label: 'Inheritance',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Allows child elements to receive certain styles from their parent elements by default.'
  },
  {
    id: 'cascade_layers',
    label: 'Cascade Layers',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Newer CSS feature for explicitly ordering sources of styles using @layer.'
  },
  {
    id: 'flat_architecture',
    label: 'Flat\nArchitecture',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Avoids deep nesting and complex overrides by favoring class-based styling and minimal specificity.'
  },

  // Level 2: Selectors
  {
    id: 'selector_types',
    label: 'Selector Types',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Common types include element, class, ID, attribute, pseudo-class, and pseudo-element.'
  },
  {
    id: 'combinators_and_groups',
    label: 'Combinators\n& Groups',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Combine selectors or apply styles to multiple elements efficiently.'
  },
  {
    id: 'is_where',
    label: ':is() & :where()',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Modern selectors that simplify complex rules and control specificity.'
  },

  // Level 3: Examples of selector applications
  {
    id: 'attribute_selector_use',
    label: 'Attribute Selectors\nfor UI State',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Targeting elements by attributes like [aria-disabled="true"] for accessibility and behavior control.'
  },
  {
    id: 'pseudo_class_use',
    label: 'Pseudo-Classes\nfor Interaction',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Styling states like :hover, :focus, :checked for richer user experiences.'
  },
  {
    id: 'pseudo_element_use',
    label: 'Pseudo-Elements\nfor Decoration',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Styling parts of elements like ::before and ::after for layout or visual effects.'
  }
];

export const links = [
  { source: 'root', target: 'selectors' },
  { source: 'root', target: 'specificity' },
  { source: 'root', target: 'cascade' },
  { source: 'root', target: 'inheritance' },
  { source: 'root', target: 'cascade_layers' },
  { source: 'root', target: 'flat_architecture' },

  // Level 2 from selectors
  { source: 'selectors', target: 'selector_types' },
  { source: 'selectors', target: 'combinators_and_groups' },
  { source: 'selectors', target: 'is_where' },

  // Level 3 from selector_types
  { source: 'selector_types', target: 'attribute_selector_use' },
  { source: 'selector_types', target: 'pseudo_class_use' },
  { source: 'selector_types', target: 'pseudo_element_use' }
];
