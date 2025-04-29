import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Application\nTab',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Inspect and manage client-side storage, service workers, manifest files, and background services in web applications.',
  },

  // Level 1
  {
    id: 'storage_inspection',
    label: 'Storage\nInspection',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'View and manage Local Storage, Session Storage, IndexedDB, and Cookies.',
  },
  {
    id: 'service_workers',
    label: 'Service\nWorkers',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Debug offline behavior, caching, and background scripts.',
  },
  {
    id: 'manifest',
    label: 'PWA\nManifest',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Inspect the web app manifest for installability and metadata validation.',
  },
  {
    id: 'cache_storage',
    label: 'Cache\nStorage',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Analyze assets stored in the browser cache for offline use.',
  },
  {
    id: 'background_services',
    label: 'Background\nServices',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Monitor features like Background Sync, Background Fetch, and Push Notifications.',
  },

  // Level 2 under Storage Inspection
  {
    id: 'local_storage',
    label: 'Local\nStorage',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Persistent key-value storage surviving page reloads and browser restarts.',
  },
  {
    id: 'session_storage',
    label: 'Session\nStorage',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Key-value storage tied to the lifespan of a tab or window session.',
  },
  {
    id: 'indexeddb',
    label: 'IndexedDB',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Low-level API for client-side storage of large structured data sets.',
  },
  {
    id: 'cookies',
    label: 'Cookies',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Small pieces of data stored and sent with HTTP requests for session tracking, authentication, etc.',
  },

  // Level 2 under Service Workers
  {
    id: 'registering_service_workers',
    label: 'Registering\nService Workers',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Install background scripts for offline support and caching control.',
  },
  {
    id: 'lifecycle_management',
    label: 'Lifecycle\nManagement',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Inspect states: installing, waiting, active, and redundant.',
  },
  {
    id: 'debugging_sw',
    label: 'Debugging\nService Workers',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Simulate offline, push updates, and unregister service workers manually.',
  },

  // Level 2 under Manifest
  {
    id: 'manifest_properties',
    label: 'Manifest\nProperties',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Review name, icons, theme color, start URL, and display mode for PWAs.',
  },
  {
    id: 'installability_criteria',
    label: 'Installability\nCriteria',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Ensure site meets requirements to be installed as a web app.',
  },

  // Level 2 under Cache Storage
  {
    id: 'inspect_cached_assets',
    label: 'Inspect\nCached Assets',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'View and manage cached resources handled by service workers.',
  },
  {
    id: 'deleting_cache_entries',
    label: 'Deleting\nCache Entries',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Remove outdated or invalid cached files.',
  },

  // Level 2 under Background Services
  {
    id: 'background_sync',
    label: 'Background\nSync',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Schedule tasks to retry when network connectivity is restored.',
  },
  {
    id: 'background_fetch',
    label: 'Background\nFetch',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Allow large file downloads to continue even after navigation away.',
  },
  {
    id: 'push_notifications',
    label: 'Push\nNotifications',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Monitor and debug push notification behavior and permissions.',
  },
]

export const links = [
  { source: 'root', target: 'storage_inspection' },
  { source: 'root', target: 'service_workers' },
  { source: 'root', target: 'manifest' },
  { source: 'root', target: 'cache_storage' },
  { source: 'root', target: 'background_services' },

  // Storage Inspection breakdown
  { source: 'storage_inspection', target: 'local_storage' },
  { source: 'storage_inspection', target: 'session_storage' },
  { source: 'storage_inspection', target: 'indexeddb' },
  { source: 'storage_inspection', target: 'cookies' },

  // Service Workers breakdown
  { source: 'service_workers', target: 'registering_service_workers' },
  { source: 'service_workers', target: 'lifecycle_management' },
  { source: 'service_workers', target: 'debugging_sw' },

  // Manifest breakdown
  { source: 'manifest', target: 'manifest_properties' },
  { source: 'manifest', target: 'installability_criteria' },

  // Cache Storage breakdown
  { source: 'cache_storage', target: 'inspect_cached_assets' },
  { source: 'cache_storage', target: 'deleting_cache_entries' },

  // Background Services breakdown
  { source: 'background_services', target: 'background_sync' },
  { source: 'background_services', target: 'background_fetch' },
  { source: 'background_services', target: 'push_notifications' },
]
