const articleData = {
  introduction:
    'History rewriting in Git allows developers to polish, restructure, or remove past commits to keep the repository clean and readable. These tools are powerful and sometimes dangerous. This article explores amend, interactive rebase, reset commands, and force pushing — with clear examples and real-world caveats.',

  keyPrinciples: {
    title: 'Concepts of History Rewriting',
    content: [
      '**Amending:** Modify the most recent commit, useful for quick fixes or message corrections.',
      '**Rebase:** Reorder, combine, edit, or remove commits from a branch before it is shared.',
      '**Reset:** Move HEAD and the branch pointer to an earlier commit, optionally clearing staged and working changes.',
      '**Force Push:** Required to publish rewritten history, but may disrupt other contributors.',
    ],
  },

  benefits: {
    title: 'Why Use History Rewriting',
    content: [
      'Clean up messy commits before merging or submitting pull requests.',
      'Correct typos or include missing files without adding extra commits.',
      'Simplify debugging with a readable, linear commit history.',
      'Remove sensitive or incorrect information from history.',
    ],
  },

  cons: {
    title: 'Risks and Warnings',
    content: [
      'Rewriting shared history can break your teammates’ branches.',
      'Resetting with `--hard` erases changes with no recovery.',
      'Force-pushing makes rollback difficult if not carefully tracked.',
    ],
  },

  antiPatterns: {
    title: 'Anti-Patterns to Avoid',
    content: [
      '**Using reset instead of revert:** Reset rewrites history; revert adds a new undo commit safely.',
      '**Force-pushing public branches:** Breaks CI, peer branches, and pull requests.',
      '**Rebasing active branches:** Rebasing a branch that others are working on leads to chaos.',
    ],
  },

  codeExamples: [
    {
      title: 'Amend the Last Commit Message or Files',
      code: `# You forgot to include a file in your last commit:
  git add missing-file.js
  
  # Or want to correct the message:
  git commit --amend -m "Fix typo in function and add missing-file.js"
  
  # This replaces the last commit instead of creating a new one.`,
    },
    {
      title: 'Interactive Rebase for Cleanup',
      code: `# Reword, squash, or delete the last 3 commits
  git rebase -i HEAD~3
  
  # You'll see something like:
  # pick 1a2b3c Add login feature
  # pick 4d5e6f Fix spacing
  # pick 7g8h9i Update button color
  
  # Change 'pick' to 'squash' to combine, or 'reword' to rename.
  # Save and Git will guide you through the process.`,
    },
    {
      title: 'Reset HEAD to an Earlier Commit',
      code: `# View your commit history first:
  git log --oneline
  
  # Reset with soft (keeps staging):
  git reset --soft HEAD~2
  
  # Reset with mixed (unstages files, keeps changes):
  git reset --mixed HEAD~2
  
  # Reset with hard (deletes everything since):
  git reset --hard HEAD~2
  
  # Use --hard carefully. It's destructive and irreversible unless you’ve backed up.`,
    },
    {
      title: 'Force Push After Rewriting History',
      code: `# After rebase or reset, Git requires force-push to update remote
  git push --force
  
  # Warning: Teammates who pulled the old history may now have conflicts or duplicated commits.
  # Only use this when you're confident others haven’t based work on this branch.`,
    },
  ],

  conclusion:
    'History rewriting gives Git users surgical precision in maintaining a clean commit history. But with great power comes great responsibility — communicate before rewriting shared history, avoid force-push unless necessary, and always keep backups.',
}

export default articleData
