const articleData = {
    introduction:
      `Authorization is the process of determining what actions an authenticated user is permitted to perform within an application. 
  While authentication answers the question "Who are you?", authorization asks "What are you allowed to do?". 
  In JavaScript applications, especially those built with frontend-backend separation, implementing proper authorization is not only a matter of user experience — it is a matter of system security. 
  This article explores the primary strategies for authorization in JavaScript applications, including frontend UI shaping, backend enforcement, access control models like RBAC and ABAC, and common anti-patterns that can leave your application vulnerable to privilege escalation and unauthorized access.`,
  
    keyPrinciples: {
      title: 'Key Authorization Principles',
      content: [
        'Authorization must always occur after authentication. The system must first confirm who the user is before deciding what they can do.',
        'Authorization logic should always be enforced on the backend. The frontend may reflect permissions to adjust the UI, but the server should be the final gatekeeper.',
        'Role-Based Access Control (RBAC) and Attribute-Based Access Control (ABAC) are common strategies for assigning and managing permissions.',
        'Frontend applications can use session or token data to adjust the interface — but must never rely on it to enforce security.',
        'Centralized and consistent permission checks reduce duplication, improve security auditing, and enhance maintainability.',
      ],
    },
  
    benefits: {
      title: 'Benefits of Strong Authorization Systems',
      content: [
        'Prevents unauthorized access to sensitive operations, settings, and user data.',
        'Improves user experience by limiting confusion — users only see what they are allowed to use.',
        'Supports scalability by abstracting permission logic into roles or rules that can be reused across features.',
        'Enhances compliance by enabling audit logs and separation of duties (e.g., only admins can manage users).',
        'Works in tandem with authentication systems like JWTs or sessions to provide a full access control solution.',
      ],
    },
  
    cons: {
      title: 'Challenges in Authorization Implementation',
      content: [
        'Authorization logic can become fragmented or inconsistent if not centralized.',
        'Frontends often over-rely on hiding UI elements without enforcing backend rules.',
        'ABAC provides flexibility but is more complex to implement and test.',
        'Improper token role encoding (e.g., stale or incorrect role claims) can lead to incorrect permission checks.',
        'Multitenant apps require more careful boundary enforcement to prevent cross-tenant data access.',
      ],
    },
  
    antiPatterns: {
      title: 'Common Authorization Anti-Patterns',
      content: [
        'Frontend-only authorization: hiding buttons or links in the UI but failing to verify roles or permissions on the server.',
        'Hardcoding role checks into each route or component instead of using centralized role mapping or permission evaluation functions.',
        'Assuming all authenticated users are equal: not distinguishing between user types (e.g., admin vs guest) in business logic.',
        'Skipping authorization checks in internal or "admin-only" tools under the assumption that internal equals secure.',
      ],
    },
  
    codeExamples: [
      {
        title: 'Example: RBAC Role Check in Express Middleware',
        code: `function authorizeRole(requiredRole) {
    return function (req, res, next) {
      const user = req.user; // Assumes user is already authenticated
  
      if (!user || user.role !== requiredRole) {
        return res.status(403).json({ error: 'Forbidden' });
      }
  
      next();
    };
  }
  
  // Usage
  app.get('/admin/settings', authorizeRole('admin'), (req, res) => {
    res.send('Welcome to the admin panel');
  });`,
      },
      {
        title: 'Example: Conditional UI Rendering Based on Role',
        code: `import { useSession } from 'next-auth/react';
  
  export default function Dashboard() {
    const { data: session } = useSession();
  
    if (session?.user?.role === 'admin') {
      return <AdminDashboard />;
    }
  
    return <UserDashboard />;
  }`,
      },
      {
        title: 'Example: Permission Mapping System',
        code: `const rolePermissions = {
    admin: ['create', 'edit', 'delete', 'view'],
    editor: ['edit', 'view'],
    viewer: ['view']
  };
  
  function canPerform(user, action) {
    return rolePermissions[user.role]?.includes(action);
  }`,
      },
    ],
  
    conclusion:
      `Authorization is one of the most critical components of application security, yet it's also one of the most misunderstood and inconsistently applied. 
  In JavaScript applications, developers must carefully balance frontend user experience with backend enforcement of access control rules. 
  While UI visibility may improve clarity for the user, it does not offer any real protection. 
  All authorization decisions — whether role-based, attribute-based, or based on dynamic policies — must ultimately be enforced by the backend or API layer that controls access to data and functionality.
  
  Adopting a model like RBAC helps to formalize who can do what and makes permission logic easier to manage and audit. 
  For more flexible needs, ABAC allows for powerful access decisions based on combinations of user attributes, environmental context, and resource sensitivity.
  
  Ultimately, a strong authorization system improves both your application's security and maintainability. 
  Use role maps, validate permissions consistently, and make sure that all sensitive functionality is protected server-side — not just hidden in the interface. 
  Properly implemented, authorization becomes a source of confidence in your system, ensuring that users only have access to what they are truly allowed to use.`,
  };
  
  export default articleData;
  