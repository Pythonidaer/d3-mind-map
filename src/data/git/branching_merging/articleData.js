const articleData = {
  introduction:
    "Branching and merging are core to Git's power as a distributed version control system. They allow developers to isolate work, collaborate safely, and integrate changes cleanly. This article explains how to create, switch, merge, and delete branches, while handling common pitfalls like committing to the wrong branch.",

  keyPrinciples: {
    title: 'Branching Fundamentals',
    content: [
      '**Branch = Pointer:** A Git branch is simply a movable pointer to a commit.',
      '**Default Branch:** Repositories typically start with a `main` or `master` branch.',
      '**Feature Isolation:** Create a new branch for each feature, fix, or experiment.',
      '**Cheap & Fast:** Creating or switching branches is nearly instantaneous.',
      '**Merge = Integration:** Merging joins branches, preserving or combining their histories.',
    ],
  },

  benefits: {
    title: 'Why Use Branching',
    content: [
      'Keep main code stable while developing features in isolation.',
      'Enable parallel development by different team members.',
      'Simplify code reviews through clear separation of changes.',
      'Create multiple versions of a codebase (e.g., stable vs experimental).',
    ],
  },

  cons: {
    title: 'Pitfalls to Watch For',
    content: [
      'Accidentally committing to the wrong branch (e.g. `main`).',
      'Long-lived branches can diverge too far from main and cause conflicts.',
      'Forgetting to delete old or merged branches creates clutter.',
    ],
  },

  antiPatterns: {
    title: 'Anti-Patterns',
    content: [
      '**Working on Main:** Never write features directly on `main`.',
      '**Mega Branches:** Avoid letting branches grow for weeks without syncing.',
      '**Ignoring Fast-Forwards:** Understand when a merge can be a fast-forward and don’t add noise.',
    ],
  },

  codeExamples: [
    {
      title: 'Create and Switch to a New Branch',
      code: `# Create a branch but stay on current one
  git branch feature/login
  
  # Create AND switch to it
  git switch -c feature/login
  
  # Older way (still works)
  git checkout -b feature/login`,
    },
    {
      title: 'Switch Between Branches',
      code: `# Move to another existing branch
  git switch main
  
  # With older Git versions
  git checkout main`,
    },
    {
      title: 'List, Delete, and Rename Branches',
      code: `# Show local branches
  git branch
  
  # Delete a fully merged branch
  git branch -d feature/login
  
  # Force delete (even if not merged)
  git branch -D feature/wip
  
  # Rename a branch (while on it)
  git branch -m new-branch-name`,
    },
    {
      title: 'Merge a Branch into Main',
      code: `# Switch to the target branch (e.g., main)
  git switch main
  
  # Merge the feature branch
  git merge feature/login
  
  # If no changes on main, this might be a fast-forward
  # Otherwise Git will create a merge commit`,
    },
    {
      title: 'Fast-Forward Merge Explained',
      code: `# Fast-forward merge happens when no divergence exists
  # Example history before merge:
  # main --> A -- B
  #                \
  #                C -- D (feature)
  
  # If main is still at B, and you merge feature,
  # Git simply moves main to D (no merge commit created).`,
    },
    {
      title: 'Pitfall: Fixing Commits Made to Wrong Branch',
      code: `# Oops! You committed on main by mistake
  
  # Step 1: Create a branch to save your work
  git switch -c feature/mistake
  
  # Step 2: Move main back to previous commit
  git switch main
  git reset --hard HEAD~2  # or however many commits back
  
  # Step 3: Continue work on the correct feature branch.`,
    },
  ],

  conclusion:
    "Git branches are lightweight and powerful, encouraging experimentation and safe collaboration. Once your team adopts a branch-per-feature workflow and understands the nuances of merging, Git becomes a superpower. Just remember to communicate changes, prune old branches, and double-check you're working on the right one.",
}

export default articleData
