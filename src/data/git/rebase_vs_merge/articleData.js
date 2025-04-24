const articleData = {
  introduction:
    'Rebase and merge are two powerful ways to integrate changes between Git branches. Understanding the differences between them helps teams choose the right tool for cleaner histories and safer collaboration. This article explores both concepts, their use cases, and when to avoid them.',

  keyPrinciples: {
    title: 'Merge vs Rebase: Key Concepts',
    content: [
      '**Merge:** Combines histories by creating a merge commit when branches diverge.',
      '**Rebase:** Rewrites history by placing your commits on top of another branch.',
      '**Fast-forward:** If no divergence exists, Git can simply move the pointer forward.',
      '**Merge preserves context:** Shows when and where branches came together.',
      '**Rebase simplifies history:** Creates a linear, easy-to-read log.',
    ],
  },

  benefits: {
    title: 'Why This Matters',
    content: [
      'Choosing the right strategy improves collaboration.',
      'Rebasing keeps commit history linear and clean.',
      'Merging ensures history remains intact for teams.',
      'Understanding both tools prevents mistakes in shared repos.',
    ],
  },

  cons: {
    title: 'Potential Drawbacks',
    content: [
      'Rebasing can cause confusion if used on public/shared branches.',
      'Merges can clutter history if used excessively on small updates.',
      'Force-pushing after rebase can disrupt teammates.',
    ],
  },

  antiPatterns: {
    title: 'Anti-Patterns to Avoid',
    content: [
      '**Rebasing Shared Branches:** Never rebase after pushing a branch others are using.',
      '**Using Merge for Cleanup:** Avoid merge commits when cleaning up your own commits.',
      '**Rebasing for the Sake of It:** Only rebase when you need clean linear history or commit squashing.',
    ],
  },

  codeExamples: [
    {
      title: 'Merge a Feature Branch into Main',
      code: `# Start on the main branch
  git switch main
  
  # Merge the feature branch
  git merge feature/login
  
  # If no divergence, this may result in a fast-forward.
  # Otherwise, Git creates a merge commit.`,
    },
    {
      title: 'Rebase a Feature Branch onto Main',
      code: `# Switch to your feature branch
  git switch feature/login
  
  # Rebase onto main to move commits
  git rebase main
  
  # Resolving conflicts (if any):
  # - Fix files
  # - git add .
  # - git rebase --continue
  
  # Use git rebase --abort to cancel.`,
    },
    {
      title: 'Fast-Forward Merge Explained',
      code: `# If main has no new commits since branch point,
  # merging will just move the pointer.
  
  # Example:
  # main: A -- B
  #              \
  # feature:      C -- D
  
  # Merging feature into main just advances main to D.`,
    },
    {
      title: 'Avoid Rebase on Shared Branches',
      code: `# Bad practice: rebasing a branch that's already pushed
  # and being used by teammates
  
  git rebase main
  
  # This rewrites history, requiring force-push:
  git push --force
  
  # Teammates may get duplicate commits and diverged histories.`,
    },
    {
      title: 'Rebase for Commit Cleanup',
      code: `# Use interactive rebase to clean up local history before pushing
  git rebase -i HEAD~3
  
  # Options:
  # - pick: keep commit
  # - squash: combine with previous
  # - reword: edit message
  
  # This is great for polishing before PR submission.`,
    },
  ],

  conclusion:
    'Merge and rebase are both essential to an effective Git workflow. Use merge to preserve shared history, and rebase to keep your own work tidy before sharing. The right choice depends on context — just never rebase shared history unless you want to cause trouble.',
}

export default articleData
