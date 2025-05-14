const articleData = {
    introduction:
      "This guide provides a full, end-to-end walkthrough for implementing authentication and role-based authorization in a secure Next.js application using NextAuth.js. Instead of just showing what to do, this article explains *why* each step matters — from setup and configuration, to session protection, to audit logging. Whether you’re building a multi-user dashboard or a paywalled service, these practices will set your authentication foundation on solid ground.",
  
    keyPrinciples: {
      title: "Implementation Philosophy",
      content: [
        "Authentication must verify identity securely, without exposing credentials or tokens.",
        "Authorization must be enforced server-side, not just with frontend logic.",
        "Tokens and cookies must be configured with strict flags to prevent hijacking.",
        "Your application should be auditable, modular, and testable at every layer.",
      ],
    },
  
    steps: {
      title: "Step-by-Step Guide with Deep Explanations",
      content: [
        "### Step 1: Install and Configure Environment",
        "Before building anything, install the necessary dependencies and configure environment variables to keep sensitive values secure.",
        "**Why it matters:** Secrets like your JWT signing key, Google client IDs, and database credentials must never be hardcoded into your source files.",
        "**Install packages:**",
        "`npm install next-auth @next-auth/react bcrypt dotenv`",
        "**Set up your .env.local file:**",
        "`NEXTAUTH_SECRET=your_long_random_string`",
        "`GOOGLE_CLIENT_ID=your_google_id`",
        "`GOOGLE_CLIENT_SECRET=your_google_secret`",
  
        "### Step 2: Create `[...nextauth].js` Auth API Route",
        "This file serves as the brain of your authentication logic. You define your login providers, manage JWTs, sessions, and inject custom claims like user roles.",
        "**Why it matters:** This is where you control the *shape* of your session and token — without it, you're stuck with defaults and can’t enforce roles, metadata, or backend logic.",
        "**Example configuration:**",
        `\`\`\`js
  import NextAuth from "next-auth";
  import GoogleProvider from "next-auth/providers/google";
  
  export default NextAuth({
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
    callbacks: {
      async jwt({ token, user }) {
        if (user) token.role = user.role || "user";
        return token;
      },
      async session({ session, token }) {
        session.user.role = token.role;
        return session;
      },
    },
    session: { strategy: "jwt" },
    secret: process.env.NEXTAUTH_SECRET,
  });
  \`\`\``,
  
        "### Step 3: Add Sign-In / Sign-Out Frontend UI",
        "Use NextAuth’s hooks (`useSession`, `signIn`, `signOut`) to show login/logout buttons and personalize the experience.",
        "**Why it matters:** This doesn’t enforce security — it reflects the user's session state. Backend still needs to verify roles.",
        "**Example:**",
        `\`\`\`js
  import { signIn, signOut, useSession } from "next-auth/react";
  
  export default function Navbar() {
    const { data: session } = useSession();
    return session ? (
      <>
        <p>Hi {session.user.name}</p>
        {session.user.role === "admin" && <a href="/admin">Admin Panel</a>}
        <button onClick={() => signOut()}>Logout</button>
      </>
    ) : (
      <button onClick={() => signIn("google")}>Login with Google</button>
    );
  }
  \`\`\``,
  
        "### Step 4: Protect API Routes and SSR Pages",
        "**Why it matters:** If you forget to check the session on the server, attackers can bypass the UI and hit protected endpoints directly.",
        "**API Route Protection:**",
        `\`\`\`js
  import { getSession } from "next-auth/react";
  
  export default async function handler(req, res) {
    const session = await getSession({ req });
    if (!session || session.user.role !== "admin") {
      return res.status(403).json({ error: "Forbidden" });
    }
    res.json({ data: "Secure info" });
  }
  \`\`\``,
        "**SSR Page Protection:**",
        `\`\`\`js
  import { getServerSession } from "next-auth/next";
  import { authOptions } from "./api/auth/[...nextauth]";
  
  export async function getServerSideProps(context) {
    const session = await getServerSession(context.req, context.res, authOptions);
    if (!session) {
      return { redirect: { destination: "/login", permanent: false } };
    }
    return { props: { session } };
  }
  \`\`\``,
  
        "### Step 5: Implement Role-Based Access",
        "**Why it matters:** Role-based authorization lets you build granular access control (e.g., admins vs editors vs users).",
        "**Set role in JWT:**",
        `\`\`\`js
  async jwt({ token, user }) {
    if (user) {
      token.role = await getUserRole(user.email); // fetch from DB
    }
    return token;
  }
  \`\`\``,
        "**Verify role in route:**",
        `\`\`\`js
  if (session.user.role !== "admin") {
    return res.status(403).end("Not authorized");
  }
  \`\`\``,
  
        "### Step 6: Secure Tokens and Cookies",
        "**Why it matters:** Storing tokens in JavaScript-accessible environments like localStorage makes you vulnerable to XSS.",
        "**Secure cookie config (NextAuth default):**",
        `\`\`\`js
  cookies: {
    sessionToken: {
      name: "__Secure-next-auth.session-token",
      options: {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
        path: "/",
      },
    },
  }
  \`\`\``,
  
        "### Step 7: Audit and Maintain",
        "**Why it matters:** Over time, sessions expire, dependencies age, and misuse can go unnoticed without logging.",
        "**Log events (example):**",
        `\`\`\`js
  logEvent({
    userId: session.user.id,
    action: "LOGIN_SUCCESS",
    timestamp: new Date(),
  });
  \`\`\``,
        "**Keep libraries patched:** Run:** `npm audit fix` or use tools like Snyk.",
      ],
    },
  
    conclusion:
      "Authentication and authorization are more than checkboxes — they're your application’s front door. Each step you take here reduces risk, increases stability, and builds trust with your users. By structuring your implementation around secure principles and deep reasoning, you’ll build an app that’s ready for real-world use — and real-world adversaries.",
  };
  
  export default articleData;
  