import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Web Development\nPricing Models',
    shape: 'roundRect',
    color: 'root',
    definition: 'Different pricing structures available for small businesses seeking web development services, each with trade-offs in flexibility, cost, and predictability.',
  },

  // Level 1
  {
    id: 'hourly_pricing',
    label: 'Hourly\nPricing',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Billing based on hours worked. Offers flexibility but can be unpredictable in cost.',
    parent: 'root',
  },
  {
    id: 'fixed_price',
    label: 'Fixed\nPrice',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'A set total cost for a defined scope. Predictable but inflexible.',
    parent: 'root',
  },
  {
    id: 'value_based',
    label: 'Value-Based\nPricing',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Pricing based on business outcomes and perceived value. Aligns goals, but is complex to implement.',
    parent: 'root',
  },
  {
    id: 'hybrid_pricing',
    label: 'Hybrid\nModels',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Combination of pricing strategies, such as fixed + retainer. Balances structure with adaptability.',
    parent: 'root',
  },

  // Level 2 (Hourly)
  {
    id: 'hourly_pros',
    label: 'Pros',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Highlights the strengths of hourly pricing for developers and clients.',
    parent: 'hourly_pricing',
  },
  {
    id: 'hourly_cons',
    label: 'Cons',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Challenges for small businesses using hourly pricing, especially cost unpredictability.',
    parent: 'hourly_pricing',
  },

  // Level 2 (Fixed)
  {
    id: 'fixed_pros',
    label: 'Pros',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Advantages of fixed-price agreements like cost predictability and less client involvement.',
    parent: 'fixed_price',
  },
  {
    id: 'fixed_cons',
    label: 'Cons',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Risks include inflexibility and potential quality trade-offs.',
    parent: 'fixed_price',
  },

  // Level 2 (Value-Based)
  {
    id: 'value_pros',
    label: 'Pros',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Aligns price with business outcomes and strengthens partnerships.',
    parent: 'value_based',
  },
  {
    id: 'value_cons',
    label: 'Cons',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Requires deep understanding of business value and sales skills. Complex to price.',
    parent: 'value_based',
  },

  // Level 2 (Hybrid)
  {
    id: 'hybrid_pros',
    label: 'Pros',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Combines predictability and flexibility; retainer models support long-term maintenance.',
    parent: 'hybrid_pricing',
  },
  {
    id: 'hybrid_cons',
    label: 'Cons',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Complexity in execution and potential for unused hours or vendor lock-in.',
    parent: 'hybrid_pricing',
  },
]

export const links = [
  { source: 'root', target: 'hourly_pricing' },
  { source: 'root', target: 'fixed_price' },
  { source: 'root', target: 'value_based' },
  { source: 'root', target: 'hybrid_pricing' },

  { source: 'hourly_pricing', target: 'hourly_pros' },
  { source: 'hourly_pricing', target: 'hourly_cons' },

  { source: 'fixed_price', target: 'fixed_pros' },
  { source: 'fixed_price', target: 'fixed_cons' },

  { source: 'value_based', target: 'value_pros' },
  { source: 'value_based', target: 'value_cons' },

  { source: 'hybrid_pricing', target: 'hybrid_pros' },
  { source: 'hybrid_pricing', target: 'hybrid_cons' },
]
