const articleData = {
  introduction:
    'In collaborative environments, choosing the right Git workflow ensures smooth teamwork, reduces conflicts, and maintains code quality. This article explores the three most common collaboration workflows — Centralized, Feature Branching, and Forking — with examples, tools, and tips to avoid chaos.',

  keyPrinciples: {
    title: 'Core Workflow Concepts',
    content: [
      '**Workflow = Process:** A defined sequence of steps for collaborating via Git.',
      '**Pull Requests (PRs):** Formal code reviews and merge proposals.',
      '**Upstream Remote:** A central repo tracked from a forked clone.',
      '**Branch Discipline:** Clear names and usage reduce confusion.',
      '**Main = Protected:** Most teams protect the main branch from direct changes.',
    ],
  },

  benefits: {
    title: 'Why Use Workflows',
    content: [
      'Prevents accidental overwrites or direct changes to production code.',
      'Encourages clean commit history and code review culture.',
      'Supports distributed teams contributing simultaneously.',
      'Scales development across individuals and organizations.',
    ],
  },

  cons: {
    title: 'What Can Go Wrong',
    content: [
      'Merging without reviews leads to buggy or unapproved code.',
      'Without conventions, teams suffer from branch sprawl or collisions.',
      'Unsynced forks diverge and become hard to merge.',
    ],
  },

  antiPatterns: {
    title: 'Anti-Patterns to Avoid',
    content: [
      '**No Defined Workflow:** Teams working ad hoc risk chaos and broken builds.',
      '**Pushing Directly to Main:** Skips testing and review, endangers stability.',
      '**Never Syncing a Fork:** Leads to conflicts when submitting pull requests.',
    ],
  },

  codeExamples: [
    {
      title: 'Centralized Workflow: Push Directly to Main (not recommended)',
      code: `# Make changes and commit
  git add .
  git commit -m "Quick fix in header"
  
  # Push directly to main (allowed in very small teams)
  git push origin main
  
  # ⚠️ Risk: No review, no rollback buffer.`,
    },
    {
      title: 'Feature Branching Workflow',
      code: `# Create and switch to a feature branch
  git checkout -b feature/contact-form
  
  # Commit changes
  git add .
  git commit -m "Add contact form component"
  
  # Push to remote
  git push origin feature/contact-form
  
  # Open a pull request on GitHub or GitLab for review`,
    },
    {
      title: 'Branch Naming Convention Example',
      code: `# Suggested prefix formats:
  feature/login-form
  fix/typo-about-page
  chore/update-deps
  
  # Keep names short, lowercase, and descriptive.`,
    },
    {
      title: 'Forking Workflow: Sync with Upstream',
      code: `# Add upstream remote for main project
  git remote add upstream https://github.com/org/repo.git
  
  # Fetch and sync with latest upstream main
  git fetch upstream
  git checkout main
  git merge upstream/main
  
  # Push to your forked origin to stay current
  git push origin main`,
    },
  ],

  conclusion:
    "Git workflows provide structure for collaboration, but teams must choose and enforce one consistently. Whether you're solo or on a global team, well-defined workflows make your codebase reliable, scalable, and friendly to contributors.",
}

export default articleData
