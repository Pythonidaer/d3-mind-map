import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Database\nPerformance',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Optimizing how data is queried, indexed, structured, and returned to improve speed, reliability, and scalability.',
  },

  // Level 1 - Positive Strategies
  {
    id: 'query_optimization',
    label: 'Query\nOptimization',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Writing efficient SQL or query logic to reduce execution time and resource usage.',
    parent: 'root',
  },
  {
    id: 'indexing',
    label: 'Indexing\nTechniques',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Using indexes to enable faster lookup and filtering on large tables.',
    parent: 'root',
  },
  {
    id: 'schema_design',
    label: 'Schema\nDesign',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Designing tables and relationships for efficient data access, minimal redundancy, and performance scalability.',
    parent: 'root',
  },
  {
    id: 'db_choice',
    label: 'Database\nChoice',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Choosing the right type of database (e.g., SQL vs NoSQL) based on query patterns and data structures.',
    parent: 'root',
  },

  // Level 2 - Query Optimization
  {
    id: 'selectivity',
    label: 'Column\nSelectivity',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Query only needed columns and rows; avoid SELECT * to reduce IO and memory.',
    parent: 'query_optimization',
  },
  {
    id: 'query_plan',
    label: 'Analyze\nQuery Plans',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Use EXPLAIN or similar tools to detect bottlenecks, slow joins, or table scans.',
    parent: 'query_optimization',
  },

  // Level 2 - Indexing
  {
    id: 'btree_indexes',
    label: 'B-tree\nIndexes',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Ideal for most range and equality searches on ordered data.',
    parent: 'indexing',
  },
  {
    id: 'composite_indexes',
    label: 'Composite\nIndexes',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Indexes that span multiple columns, useful for filtering and sorting queries on combined fields.',
    parent: 'indexing',
  },

  // Level 2 - Schema Design
  {
    id: 'normalization',
    label: 'Proper\nNormalization',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Eliminates redundancy and improves data integrity through structured relationships.',
    parent: 'schema_design',
  },
  {
    id: 'denormalization',
    label: 'Strategic\nDenormalization',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Introduces controlled redundancy for speed in read-heavy workloads.',
    parent: 'schema_design',
  },

  // Level 1 - Negative Concerns
  {
    id: 'db_bottlenecks',
    label: 'Database\nBottlenecks',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Slow queries, overused resources, or inefficient design that delays responses and strains systems.',
    parent: 'root',
  },

  // Level 2 - Bottlenecks
  {
    id: 'missing_indexes',
    label: 'Missing\nIndexes',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Forces full table scans, severely slowing query performance.',
    parent: 'db_bottlenecks',
  },
  {
    id: 'over_connections',
    label: 'Too Many\nOpen Connections',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Exceeding database connection limits can throttle throughput or crash the server.',
    parent: 'db_bottlenecks',
  },
  {
    id: 'inefficient_queries',
    label: 'Inefficient\nQueries',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Poorly written SQL—like nested SELECTs or functions in WHERE—can create performance cliffs.',
    parent: 'db_bottlenecks',
  },
];

export const links = [
  { source: 'root', target: 'query_optimization' },
  { source: 'root', target: 'indexing' },
  { source: 'root', target: 'schema_design' },
  { source: 'root', target: 'db_choice' },
  { source: 'root', target: 'db_bottlenecks' },

  { source: 'query_optimization', target: 'selectivity' },
  { source: 'query_optimization', target: 'query_plan' },

  { source: 'indexing', target: 'btree_indexes' },
  { source: 'indexing', target: 'composite_indexes' },

  { source: 'schema_design', target: 'normalization' },
  { source: 'schema_design', target: 'denormalization' },

  { source: 'db_bottlenecks', target: 'missing_indexes' },
  { source: 'db_bottlenecks', target: 'over_connections' },
  { source: 'db_bottlenecks', target: 'inefficient_queries' },
];
