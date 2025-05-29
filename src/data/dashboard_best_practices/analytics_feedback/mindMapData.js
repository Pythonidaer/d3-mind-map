import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Analytics & Feedback\nin Dashboards',
    definition: 'Tools and strategies for gathering insights about user behavior and collecting qualitative feedback in dashboards.',
    shape: 'roundRect',
    color: 'root',
  },

  // Positive Level 1
  {
    id: 'session_tracking',
    label: 'User Session\nTracking',
    definition: 'Track user journeys through the dashboard to understand behavior patterns.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'error_monitoring',
    label: 'Error\nMonitoring',
    definition: 'Log, detect, and respond to application crashes and frontend errors.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'usage_heatmaps',
    label: 'Feature Usage\nHeatmaps',
    definition: 'Visualize where users are interacting the most within your dashboard.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'user_feedback',
    label: 'User Feedback\nCollection',
    definition: 'Allow users to submit feedback directly within the dashboard experience.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // Negative Level 1
  {
    id: 'analytics_pitfalls',
    label: 'Analytics\nAnti-Patterns',
    definition: 'Common mistakes in tracking, interpreting, or acting on dashboard analytics.',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },

  // Children of Session Tracking
  {
    id: 'tools_for_tracking',
    label: 'Tracking Tools:\nPostHog, LogRocket',
    definition: 'Session replay tools help reveal how users navigate and where they drop off.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'event_logging',
    label: 'Custom\nEvent Logging',
    definition: 'Track button clicks, filters, and key actions via manual or tag-based logging.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Children of Error Monitoring
  {
    id: 'error_tracking_tools',
    label: 'Tools:\nSentry, Bugsnag',
    definition: 'Automatically log and alert teams when frontend or backend errors occur.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'user_context',
    label: 'Error Logs with\nUser Context',
    definition: 'Attach user session data and state snapshot to logs for faster debugging.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Children of Heatmaps
  {
    id: 'heatmap_clicks',
    label: 'Click-Based\nHeatmaps',
    definition: 'Reveal which dashboard components receive the most user attention.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'scrollmaps',
    label: 'Scrollmaps:\nEngagement Depth',
    definition: 'Visualize how far users scroll to find data or give up viewing content.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Children of Feedback Collection
  {
    id: 'feedback_modal',
    label: 'In-App\nFeedback Modal',
    definition: 'Prompt users for insights without leaving the dashboard experience.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'surveys_and_scores',
    label: 'Surveys:\nNPS or CSAT',
    definition: 'Collect structured feedback through forms, star ratings, or scores.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Children of Analytics Pitfalls
  {
    id: 'overtracking',
    label: 'Overtracking\nEverything',
    definition: 'Too many low-value metrics create noise and slow performance.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'unclear_kpis',
    label: 'Unclear or\nUnstable KPIs',
    definition: 'Vague or shifting metrics make it hard to measure true product success.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'privacy_concerns',
    label: 'Ignoring\nUser Privacy',
    definition: 'Failing to anonymize session data or secure tracking violates trust and laws.',
    shape: 'rect',
    color: 'nodeNegative2',
  },

  // Grandchildren of Analytics Pitfalls
  {
    id: 'no_action_on_data',
    label: 'Collecting Data\nBut Taking No Action',
    definition: 'Gathering metrics without closing the loop leads to wasted effort.',
    shape: 'diamond',
    color: 'nodeNegative3',
  },
  {
    id: 'lack_of_transparency',
    label: 'Lack of\nTransparency',
    definition: 'Not telling users what’s tracked damages trust and ethical integrity.',
    shape: 'diamond',
    color: 'nodeNegative3',
  }
];

export const links = [
  { source: 'root', target: 'session_tracking' },
  { source: 'root', target: 'error_monitoring' },
  { source: 'root', target: 'usage_heatmaps' },
  { source: 'root', target: 'user_feedback' },
  { source: 'root', target: 'analytics_pitfalls' },

  { source: 'session_tracking', target: 'tools_for_tracking' },
  { source: 'session_tracking', target: 'event_logging' },

  { source: 'error_monitoring', target: 'error_tracking_tools' },
  { source: 'error_monitoring', target: 'user_context' },

  { source: 'usage_heatmaps', target: 'heatmap_clicks' },
  { source: 'usage_heatmaps', target: 'scrollmaps' },

  { source: 'user_feedback', target: 'feedback_modal' },
  { source: 'user_feedback', target: 'surveys_and_scores' },

  { source: 'analytics_pitfalls', target: 'overtracking' },
  { source: 'analytics_pitfalls', target: 'unclear_kpis' },
  { source: 'analytics_pitfalls', target: 'privacy_concerns' },

  { source: 'privacy_concerns', target: 'lack_of_transparency' },
  { source: 'unclear_kpis', target: 'no_action_on_data' }
];
