import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Data Handling &\nUploads in Dashboards',
    definition: 'Strategies for validating, parsing, mapping, and safely uploading job description data into dashboards.',
    shape: 'roundRect',
    color: 'root',
  },

  // Positive Level 1
  {
    id: 'file_validation',
    label: 'File\nValidation',
    definition: 'Ensure uploaded files meet type, size, and format expectations.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'parsing_strategies',
    label: 'Parsing\nStrategies',
    definition: 'Efficiently convert uploaded file contents into usable job data.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'schema_mapping',
    label: 'Schema Definition\n& Mapping',
    definition: 'Align user-uploaded fields with internal data structure.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'upload_error_handling',
    label: 'Error Handling\n& Messaging',
    definition: 'Guide users through upload problems with helpful feedback.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // Negative Level 1
  {
    id: 'data_upload_anti_patterns',
    label: 'Data Upload\nAnti-Patterns',
    definition: 'Common issues that reduce reliability or frustrate users during data upload.',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },

  // Children of File Validation
  {
    id: 'accepted_file_types',
    label: 'Accepted\nFile Types',
    definition: 'Restrict uploads to CSV, JSON, or other supported formats.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'size_limits',
    label: 'File Size\nLimits',
    definition: 'Prevent large file uploads from slowing down or crashing the app.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'structure_checks',
    label: 'Structural\nValidation',
    definition: 'Check required columns and header formats before processing.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Children of Parsing Strategies
  {
    id: 'csv_parsing',
    label: 'CSV Parsing\n(PapaParse)',
    definition: 'Use performant libraries like PapaParse to handle large CSVs in-browser.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'json_normalization',
    label: 'JSON Parsing\n& Flattening',
    definition: 'Handle nested JSON objects and normalize structures before storage.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Children of Schema Mapping
  {
    id: 'column_mapping_ui',
    label: 'Column Mapping\nUI',
    definition: 'Allow users to visually map file columns to expected dashboard fields.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'schema_flexibility',
    label: 'Flexible Schema\nSupport',
    definition: 'Accept common variations in column names or missing fields with fallback logic.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Children of Error Handling
  {
    id: 'real_time_validation',
    label: 'Real-Time\nValidation Errors',
    definition: 'Show users errors as soon as they select a file—not after upload.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'user_friendly_messages',
    label: 'Clear\nError Messages',
    definition: 'Explain what went wrong and how to fix it in plain language.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Children of Anti-Patterns
  {
    id: 'uncaught_file_types',
    label: 'Uncaught or\nUnsupported Files',
    definition: 'Failing to block .docx, .exe, or other invalid formats frustrates users.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'silent_failures',
    label: 'Silent Upload\nFailures',
    definition: 'Data disappears or fails without explanation, breaking trust.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'tight_coupling_schema',
    label: 'Rigid Schema\nCoupling',
    definition: 'Only accepting exact matches for column headers breaks usability.',
    shape: 'rect',
    color: 'nodeNegative2',
  },

  // Grandchildren of Anti-Patterns
  {
    id: 'no_column_fallback',
    label: 'No Column\nFallback Logic',
    definition: 'Systems reject data if headers don’t match exactly instead of mapping.',
    shape: 'diamond',
    color: 'nodeNegative3',
  },
  {
    id: 'no_loading_indicators',
    label: 'No Upload\nProgress Feedback',
    definition: 'Users are left wondering if upload is working or frozen.',
    shape: 'diamond',
    color: 'nodeNegative3',
  }
];

export const links = [
  { source: 'root', target: 'file_validation' },
  { source: 'root', target: 'parsing_strategies' },
  { source: 'root', target: 'schema_mapping' },
  { source: 'root', target: 'upload_error_handling' },
  { source: 'root', target: 'data_upload_anti_patterns' },

  { source: 'file_validation', target: 'accepted_file_types' },
  { source: 'file_validation', target: 'size_limits' },
  { source: 'file_validation', target: 'structure_checks' },

  { source: 'parsing_strategies', target: 'csv_parsing' },
  { source: 'parsing_strategies', target: 'json_normalization' },

  { source: 'schema_mapping', target: 'column_mapping_ui' },
  { source: 'schema_mapping', target: 'schema_flexibility' },

  { source: 'upload_error_handling', target: 'real_time_validation' },
  { source: 'upload_error_handling', target: 'user_friendly_messages' },

  { source: 'data_upload_anti_patterns', target: 'uncaught_file_types' },
  { source: 'data_upload_anti_patterns', target: 'silent_failures' },
  { source: 'data_upload_anti_patterns', target: 'tight_coupling_schema' },

  { source: 'tight_coupling_schema', target: 'no_column_fallback' },
  { source: 'silent_failures', target: 'no_loading_indicators' }
];
