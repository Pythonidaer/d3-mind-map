import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'NextAuth.js and\nGoogle Authentication',
    shape: 'roundRect',
    color: 'root',
    definition: 'Comparison and implementation of NextAuth.js and direct Google OAuth for managing authentication in modern JavaScript applications.',
  },

  // NextAuth Overview
  {
    id: 'nextauth_overview',
    label: 'What is\nNextAuth.js?',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'A full-featured authentication library for Next.js apps that supports multiple providers and secure session management.',
  },
  {
    id: 'nextauth_setup',
    label: 'Setting Up\nNextAuth',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'nextauth_overview',
    definition: 'Requires a dynamic API route, provider config, environment variables, and optional DB integration.',
  },
  {
    id: 'nextauth_features',
    label: 'Key Features',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'nextauth_overview',
    definition: 'Supports OAuth, JWTs, credentials, sessions, callbacks, adapters, and UI customization.',
  },

  // Google Auth Overview
  {
    id: 'google_auth',
    label: 'Google Auth\nOverview',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Google OAuth 2.0 + OpenID Connect provides delegated login and ID token access via their identity platform.',
  },
  {
    id: 'google_id_token',
    label: 'Google ID\nToken Verification',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'google_auth',
    definition: 'Requires signature and audience verification using a backend library (e.g., google-auth-library in Node.js).',
  },
  {
    id: 'frontend_signin_flow',
    label: 'Frontend Login\nand Callback Flow',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'google_auth',
    definition: 'Includes Google button, redirect, consent screen, and handling authorization code or ID token.',
  },

  // Session Management
  {
    id: 'session_management',
    label: 'Session\nManagement',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'How login state and tokens are persisted and accessed on both client and server.',
  },
  {
    id: 'http_cookie_sessions',
    label: 'HTTP-Only\nCookie Sessions',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'session_management',
    definition: 'Used by default in NextAuth for secure storage of session and access tokens.',
  },
  {
    id: 'getsession_hook',
    label: 'Accessing\nSessions',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'session_management',
    definition: 'UseSession hook (frontend) and getSession (backend) allow seamless session data retrieval.',
  },

  // Custom Logic
  {
    id: 'custom_logic',
    label: 'Adding\nCustom Logic',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Enforcing permissions, storing additional data, or augmenting login flow.',
  },
  {
    id: 'role_checks',
    label: 'Role-Based\nAccess Checks',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'custom_logic',
    definition: 'Include user roles in session and enforce access control on protected routes or APIs.',
  },
  {
    id: 'user_mapping',
    label: 'Mapping Google ID\nTo App User',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'custom_logic',
    definition: 'Look up or create users based on the Google user ID and associate with internal roles and metadata.',
  },

  // Decision Factors
  {
    id: 'comparison',
    label: 'Choosing Between\nNextAuth vs Google Auth',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Deciding which approach to use depends on your need for abstraction, multi-provider support, and manual control.',
  },
  {
    id: 'when_to_use_nextauth',
    label: 'When to Use\nNextAuth',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'comparison',
    definition: 'Ideal for multi-provider apps using Next.js, especially when you want session management out of the box.',
  },
  {
    id: 'when_to_use_google_direct',
    label: 'When to Use\nGoogle Directly',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'comparison',
    definition: 'Useful if Google is your only provider and you want direct control over tokens, storage, and user linking.',
  },
]

export const links = [
  { source: 'nextauth_overview', target: 'root' },
  { source: 'nextauth_setup', target: 'nextauth_overview' },
  { source: 'nextauth_features', target: 'nextauth_overview' },

  { source: 'google_auth', target: 'root' },
  { source: 'google_id_token', target: 'google_auth' },
  { source: 'frontend_signin_flow', target: 'google_auth' },

  { source: 'session_management', target: 'root' },
  { source: 'http_cookie_sessions', target: 'session_management' },
  { source: 'getsession_hook', target: 'session_management' },

  { source: 'custom_logic', target: 'root' },
  { source: 'role_checks', target: 'custom_logic' },
  { source: 'user_mapping', target: 'custom_logic' },

  { source: 'comparison', target: 'root' },
  { source: 'when_to_use_nextauth', target: 'comparison' },
  { source: 'when_to_use_google_direct', target: 'comparison' },
]
