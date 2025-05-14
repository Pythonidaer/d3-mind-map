import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Step-by-Step:\nNext.js Auth + Authorization',
    shape: 'roundRect',
    color: 'root',
    definition: 'A linear, numbered implementation guide for secure authentication and authorization using NextAuth.js in a Next.js app.',
  },

  // Step 1
  {
    id: 'step1',
    label: 'Step 1:\nInstall and Configure',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Install NextAuth.js, set up .env variables, and prepare your auth provider config.',
  },
  {
    id: 'step1_1',
    label: '1.1 Install\nnext-auth + dotenv',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'step1',
    definition: 'Install `next-auth`, `@next-auth/react`, and any database adapters.',
  },
  {
    id: 'step1_2',
    label: '1.2 Set .env\nSecrets and IDs',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'step1',
    definition: 'Include `NEXTAUTH_SECRET`, client ID/secret, and DB credentials in `.env.local`.',
  },

  // Step 2
  {
    id: 'step2',
    label: 'Step 2:\nCreate Auth API Route',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Use `pages/api/auth/[...nextauth].js` to define providers, callbacks, and sessions.',
  },
  {
    id: 'step2_1',
    label: '2.1 Configure\nProviders',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'step2',
    definition: 'Add Google, GitHub, or credentials-based login support.',
  },
  {
    id: 'step2_2',
    label: '2.2 Add Callbacks\n(jwt, session)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'step2',
    definition: 'Use callbacks to inject user role and metadata into the session token.',
  },

  // Step 3
  {
    id: 'step3',
    label: 'Step 3:\nAdd Sign-In / Session UI',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Use `signIn`, `signOut`, and `useSession()` to control frontend behavior.',
  },
  {
    id: 'step3_1',
    label: '3.1 Add Login/\nLogout Buttons',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'step3',
    definition: 'Call `signIn()` and `signOut()` from UI components.',
  },
  {
    id: 'step3_2',
    label: '3.2 Use\nuseSession()',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'step3',
    definition: 'Access session details and user roles in your components.',
  },

  // Step 4
  {
    id: 'step4',
    label: 'Step 4:\nProtect Routes (API + Pages)',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Restrict access to sensitive APIs and pages using `getSession()` and role checks.',
  },
  {
    id: 'step4_1',
    label: '4.1 Use\ngetSession() in API',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'step4',
    definition: 'Verify the session and user role before executing logic.',
  },
  {
    id: 'step4_2',
    label: '4.2 Use\ngetServerSession() (SSR)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'step4',
    definition: 'Restrict SSR pages by calling `getServerSession()` on the server.',
  },

  // Step 5
  {
    id: 'step5',
    label: 'Step 5:\nAdd Role-Based Access',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Assign roles in your DB and enforce authorization server-side.',
  },
  {
    id: 'step5_1',
    label: '5.1 Inject Role into\nJWT Callback',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'step5',
    definition: 'Read user role from DB and store it in the token during login.',
  },
  {
    id: 'step5_2',
    label: '5.2 Create Role\nMiddleware',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'step5',
    definition: 'Protect API endpoints by validating role from session or token.',
  },

  // Step 6
  {
    id: 'step6',
    label: 'Step 6:\nSecure Tokens + Cookies',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Apply cookie flags and configure token expiration to minimize hijacking risks.',
  },
  {
    id: 'step6_1',
    label: '6.1 Use\nHTTP-only Secure Cookies',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'step6',
    definition: 'Avoid XSS leaks by disabling JavaScript access to cookies.',
  },
  {
    id: 'step6_2',
    label: '6.2 Rotate and Expire\nTokens Periodically',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'step6',
    definition: 'Use short-lived tokens and implement refresh logic when needed.',
  },

  // Step 7
  {
    id: 'step7',
    label: 'Step 7:\nAudit + Maintain',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Log auth activity, monitor for abuse, and update dependencies regularly.',
  },
  {
    id: 'step7_1',
    label: '7.1 Log Auth Events\nand Role Changes',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'step7',
    definition: 'Track login attempts, permission updates, and access failures.',
  },
  {
    id: 'step7_2',
    label: '7.2 Patch and Update\nAuth Libraries',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'step7',
    definition: 'Apply security updates to NextAuth, bcrypt, and your DB layers.',
  },
]

export const links = [
  { source: 'step1', target: 'root' },
  { source: 'step1_1', target: 'step1' },
  { source: 'step1_2', target: 'step1' },

  { source: 'step2', target: 'root' },
  { source: 'step2_1', target: 'step2' },
  { source: 'step2_2', target: 'step2' },

  { source: 'step3', target: 'root' },
  { source: 'step3_1', target: 'step3' },
  { source: 'step3_2', target: 'step3' },

  { source: 'step4', target: 'root' },
  { source: 'step4_1', target: 'step4' },
  { source: 'step4_2', target: 'step4' },

  { source: 'step5', target: 'root' },
  { source: 'step5_1', target: 'step5' },
  { source: 'step5_2', target: 'step5' },

  { source: 'step6', target: 'root' },
  { source: 'step6_1', target: 'step6' },
  { source: 'step6_2', target: 'step6' },

  { source: 'step7', target: 'root' },
  { source: 'step7_1', target: 'step7' },
  { source: 'step7_2', target: 'step7' },
]
