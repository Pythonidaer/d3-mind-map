const articleData = {
    introduction:
      `Authentication and authorization are often mentioned together, yet they are fundamentally distinct processes. 
  Each plays a critical role in protecting web applications, APIs, and user data. 
  Authentication is the process of confirming that a user is who they claim to be. Authorization, on the other hand, determines what that authenticated user is allowed to do. 
  Insecure handling or misunderstanding of these concepts leads to broken access control, one of the most severe vulnerabilities on the OWASP Top 10 list. 
  This article provides an in-depth explanation of how these two mechanisms differ, work together, and how to implement each correctly in a modern JavaScript ecosystem.`,
  
    keyPrinciples: {
      title: 'Key Principles of Authentication and Authorization',
      content: [
        'Authentication comes first: you must confirm identity before deciding what actions that identity can take.',
        'Authorization always depends on a successful authentication step. Without identity, permissions have no reference point.',
        'Authentication is binary (either the identity is confirmed or not), whereas authorization can be highly granular and contextual.',
        'Authorization can occur multiple times throughout a session — every time a user accesses a new protected resource.',
        'Both authentication and authorization must be securely enforced at the backend, not just the user interface.',
      ],
    },
  
    benefits: {
      title: 'Benefits of Clear Separation',
      content: [
        'Improved code structure: Separating identity verification and access control enables better architectural layering.',
        'Security hardening: Ensures users can never bypass access restrictions without first proving their identity.',
        'Audit readiness: Systems with clear separation provide better logs and insight into who did what and when.',
        'Scalability of policies: It becomes easier to assign granular permissions (authorization) without rewriting login logic (authentication).',
        'Interoperability: Enables use of third-party identity providers (e.g., Google Auth) for authentication while preserving custom authorization policies in your application.',
      ],
    },
  
    cons: {
      title: 'Potential Pitfalls',
      content: [
        'Misunderstanding the relationship between the two often results in over-trusting identity tokens and exposing sensitive resources.',
        'Some developers conflate UI visibility with true authorization, allowing frontend logic to “hide” actions but not actually block them.',
        'Improper session handling can allow users to remain “authorized” after their identity should have expired or been revoked.',
        'Incorrect or missing authorization checks in backend APIs are a leading cause of privilege escalation vulnerabilities.',
      ],
    },
  
    antiPatterns: {
      title: 'Common Anti-Patterns',
      content: [
        'Assuming authentication equals authorization — users who are logged in should not automatically have access to everything.',
        'Checking permissions only on the frontend (e.g., hiding buttons) but failing to enforce those permissions in backend routes.',
        'Using hardcoded role checks scattered throughout the app instead of centralized, reusable permission logic.',
        'Allowing any request to proceed if a token exists, without verifying the token’s signature or expiration.',
      ],
    },
  
    codeExamples: [
      {
        title: 'Example: Secure Backend Authorization in Next.js',
        code: `import { getSession } from 'next-auth/react';
  
  export default async function handler(req, res) {
    const session = await getSession({ req });
  
    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    if (session.user.role !== 'admin') {
      return res.status(403).json({ error: 'Forbidden' });
    }
  
    res.status(200).json({ data: 'Sensitive admin data' });
  }`,
      },
      {
        title: 'Example: Authentication with OAuth and OpenID Connect',
        code: `// OAuth 2.0 flow typically starts on the frontend
  // Redirect to Google's auth server to initiate authentication
  window.location.href = \`https://accounts.google.com/o/oauth2/v2/auth?client_id=\${CLIENT_ID}&response_type=code&scope=email%20profile&redirect_uri=\${REDIRECT_URI}\`;`,
      },
      {
        title: 'Example: Role-Based Access Control Logic',
        code: `// Centralized role check (e.g., middleware or shared util)
  function canAccess(resource, user) {
    const permissions = {
      admin: ['read', 'write', 'delete'],
      editor: ['read', 'write'],
      viewer: ['read']
    };
  
    return permissions[user.role]?.includes(resource.action);
  }`,
      },
    ],
  
    conclusion:
      `Understanding the distinction between authentication and authorization is essential for every full-stack developer, security engineer, and architect. 
  Authentication confirms who the user is — whether through traditional credentials or delegated identity providers like Google or GitHub. 
  Authorization defines what that verified identity is permitted to do. These two processes operate sequentially but serve separate security objectives. 
  
  Authentication should be implemented with a strong foundation: secure credential handling, multi-factor options, or federated login systems. 
  Authorization should be contextual, role-based, and enforced server-side using data from the authenticated session or token. 
  Only when both systems are properly integrated can an application maintain the principle of least privilege, reduce attack surfaces, and pass security audits with confidence.
  
  Missteps in either area — such as relying on client-side checks or failing to verify token authenticity — often result in unauthorized access, privilege escalation, and serious data breaches.
  As you continue designing secure systems, make it a habit to always ask two distinct questions: 
  (1) Do I know who this is? and (2) Am I sure they’re allowed to do this?
  
  These are the pillars on which secure software stands.`,
  
  };
  
  export default articleData;
  