const articleData = {
  introduction:
    'Merge conflicts are a natural part of working in Git, especially in collaborative environments. This article breaks down what causes them, how to resolve them effectively, and how to reduce their likelihood. Understanding these techniques empowers teams to move fast without fear of breaking things.',

  keyPrinciples: {
    title: 'Core Conflict Concepts',
    content: [
      '**Merge Conflict:** Occurs when Git can’t automatically reconcile differences between branches.',
      '**Conflict Markers:** Git inserts `<<<<<<<`, `=======`, and `>>>>>>>` to mark conflicting code.',
      '**Resolution Required:** You must manually edit or choose a resolution strategy.',
      '**Conflict = Collaboration:** Conflicts happen when two people work on the same part of a file.',
    ],
  },

  benefits: {
    title: 'Why Learn Conflict Resolution',
    content: [
      'Increases your confidence when merging branches.',
      'Reduces fear of collaboration and code integration.',
      'Teaches debugging skills and code awareness.',
      'Promotes communication and teamwork among developers.',
    ],
  },

  cons: {
    title: 'What Can Go Wrong',
    content: [
      'Accidentally committing unresolved conflict markers.',
      'Manually resolving incorrectly and introducing logic bugs.',
      'Letting long-lived branches drift and cause major conflicts later.',
    ],
  },

  antiPatterns: {
    title: 'Anti-Patterns to Avoid',
    content: [
      '**Ignoring Conflicts:** Never assume Git resolved everything for you — always check.',
      '**Massive PRs:** Large pull requests increase chances of overlapping edits.',
      '**Uncoordinated Team Changes:** Working on the same logic without syncing often creates pain.',
    ],
  },

  codeExamples: [
    {
      title: 'Conflict Example During Merge',
      code: `# Start a merge that triggers a conflict
  git switch main
  git merge feature
  
  # Git will pause with a conflict message:
  # Auto-merging app.js
  # CONFLICT (content): Merge conflict in app.js
  # Automatic merge failed; fix conflicts and then commit.`,
    },
    {
      title: 'How Conflict Markers Look in a File',
      code: `# Git uses special characters to show conflicting lines
  # <<<<<<< shows the current branch (e.g., main)
  # ======= is the separator between versions
  # >>>>>>> shows the incoming branch (e.g., feature)
  
  <<<<<<< HEAD
  const title = "Homepage";
  =======
  const title = "Dashboard";
  >>>>>>> feature
  
  # Your job is to remove the markers and decide the final result.
  # For example:
  # const title = "Dashboard";`,
    },
    {
      title: 'Resolve and Finalize the Merge',
      code: `# Step 1: Manually edit and fix app.js to remove conflict markers
  # Step 2: Stage the fixed file
  git add app.js
  
  # Step 3: Commit the resolution
  git commit -m "Resolve merge conflict in app.js"`,
    },
    {
      title: 'Use a Merge Tool for Visual Aid',
      code: `# VS Code, Meld, kdiff3 and others can help visualize conflicts
  # Example:
  git mergetool
  
  # Git opens the configured tool to let you compare and resolve.
  # Save and close when finished.`,
    },
    {
      title: 'Prevent Conflicts Through Good Practices',
      code: `# Pull latest changes before pushing
  git pull origin main
  
  # Break work into smaller PRs
  # Communicate frequently when working in shared files
  # Rebase or merge frequently to stay in sync`,
    },
  ],

  conclusion:
    "Merge conflicts are not errors — they're opportunities for coordination. By understanding how they happen and how to fix them cleanly, developers build habits that lead to smoother workflows and higher-quality codebases. Mastering conflict resolution means you’re ready to collaborate at scale.",
}

export default articleData
