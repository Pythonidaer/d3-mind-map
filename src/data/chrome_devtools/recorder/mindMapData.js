import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Recorder\nTab',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Record, replay, measure, and export user interactions to automate testing and performance analysis.',
  },

  // Level 1
  {
    id: 'recording_flows',
    label: 'Recording\nFlows',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Capture user interactions (clicks, typing, scrolling) as a sequence of steps.',
  },
  {
    id: 'editing_steps',
    label: 'Editing\nSteps',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Modify, insert, or remove steps to refine recordings.',
  },
  {
    id: 'measuring_performance',
    label: 'Measuring\nPerformance',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Replay recordings and capture performance metrics during execution.',
  },
  {
    id: 'exporting_recordings',
    label: 'Exporting\nRecordings',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Save user flows as JSON files for sharing, re-import, or external testing.',
  },

  // Level 2 under Recording Flows
  {
    id: 'capture_interactions',
    label: 'Capture\nInteractions',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Record clicks, form inputs, navigations, and scroll actions.',
  },
  {
    id: 'start_stop_recording',
    label: 'Start & Stop\nRecording',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Initiate and complete a user flow capture with dedicated controls.',
  },

  // Level 2 under Editing Steps
  {
    id: 'modify_selectors',
    label: 'Modify\nSelectors',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Update element selectors if auto-detected selectors are fragile or incorrect.',
  },
  {
    id: 'insert_waits',
    label: 'Insert\nWaits & Assertions',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Add wait commands or assert page conditions during playback.',
  },

  // Level 2 under Measuring Performance
  {
    id: 'record_performance',
    label: 'Record\nPerformance',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Launch Performance panel automatically during flow replay to analyze metrics.',
  },
  {
    id: 'diagnose_issues',
    label: 'Diagnose\nBottlenecks',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Pinpoint delays or inefficiencies tied to specific user actions.',
  },

  // Level 2 under Exporting Recordings
  {
    id: 'export_json',
    label: 'Export as\nJSON',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Save a recording as a JSON file for backup or collaboration.',
  },
  {
    id: 'import_json',
    label: 'Import\nRecordings',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Re-import JSON recordings to replay or further edit in DevTools.',
  },
]

export const links = [
  { source: 'root', target: 'recording_flows' },
  { source: 'root', target: 'editing_steps' },
  { source: 'root', target: 'measuring_performance' },
  { source: 'root', target: 'exporting_recordings' },

  // Recording Flows breakdown
  { source: 'recording_flows', target: 'capture_interactions' },
  { source: 'recording_flows', target: 'start_stop_recording' },

  // Editing Steps breakdown
  { source: 'editing_steps', target: 'modify_selectors' },
  { source: 'editing_steps', target: 'insert_waits' },

  // Measuring Performance breakdown
  { source: 'measuring_performance', target: 'record_performance' },
  { source: 'measuring_performance', target: 'diagnose_issues' },

  // Exporting Recordings breakdown
  { source: 'exporting_recordings', target: 'export_json' },
  { source: 'exporting_recordings', target: 'import_json' },
]
