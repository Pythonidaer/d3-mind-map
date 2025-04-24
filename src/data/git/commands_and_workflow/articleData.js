const articleData = {
  introduction:
    "Understanding Git's core command workflow is essential for any developer collaborating in a modern codebase. This article explains how to initialize or clone a repository, add and commit changes, inspect project state, and sync with remotes using foundational Git commands. Each command is broken down with real examples, use cases, and common pitfalls.",

  keyPrinciples: {
    title: 'Core Concepts',
    content: [
      '**Three Git Zones:** Git operates across the working directory, staging area, and local repository.',
      '**Atomic Commits:** Each commit should represent a meaningful, self-contained unit of work.',
      '**Distributed by Design:** All operations happen locally first before syncing with remotes.',
      '**Staging Area:** Git uniquely lets you choose which changes to include in a commit.',
      '**Push/Pull Workflow:** Git distinguishes between local work and remote synchronization.',
    ],
  },

  benefits: {
    title: 'Benefits of Mastering Git Workflow',
    content: [
      'Allows you to isolate and commit changes purposefully.',
      'Makes team collaboration predictable and reversible.',
      'Reduces the risk of committing incomplete or incorrect work.',
      'Improves understanding of your codebase through history.',
      'Empowers branching, merging, and advanced workflows later.',
    ],
  },

  cons: {
    title: 'Common Pitfalls',
    content: [
      'Forgetting to stage changes (`git add`) before committing leads to empty commits.',
      'Misunderstanding the difference between `git pull` and `git fetch` can cause merge confusion.',
      'Using `git push` without understanding upstream configuration may fail or misdirect commits.',
    ],
  },

  antiPatterns: {
    title: 'Anti-Patterns',
    content: [
      '**Committing Everything:** Avoid blindly running `git add .` before reviewing changes.',
      '**Unclear Commit Messages:** Always describe *what* and *why*, not just "updated".',
      '**Working on Main:** Avoid doing feature development directly on `main`.',
    ],
  },

  codeExamples: [
    {
      title: 'Initialize a New Git Repository',
      code: `# Create a new project folder and initialize Git
  mkdir my-project
  cd my-project
  git init
  
  # Output:
  # Initialized empty Git repository in /my-project/.git
  
  # .git directory is now tracking your version history locally.`,
    },
    {
      title: 'Clone an Existing Remote Repository',
      code: `# Clone a repository from GitHub (or another Git host)
  git clone https://github.com/user/repo.git
  
  # This creates a local folder named 'repo' and pulls all files and history.
  cd repo
  ls -a  # You'll see a .git folder which means this is now a Git repo.`,
    },
    {
      title: 'Add Changes to Staging Area',
      code: `# Check file changes in your project
  git status
  
  # Stage a single file
  git add index.html
  
  # Stage all changes
  git add .
  
  # Stage part of a file (interactive)
  git add -p
  
  # These changes are now staged and ready for commit.`,
    },
    {
      title: 'Commit Staged Changes',
      code: `# Commit with a meaningful message
  git commit -m "Add homepage layout with responsive grid"
  
  # Commits are snapshots of your staged files.
  # Best practice: One logical change per commit.`,
    },
    {
      title: 'Check Project Status, History, and Diffs',
      code: `# See the current Git state
  git status
  
  # Show recent commits
  git log --oneline --graph
  
  # Show differences between last commit and working files
  git diff
  
  # Show differences between staged and committed version
  git diff --cached`,
    },
    {
      title: 'Push and Pull from Remote Repositories',
      code: `# Push your branch to remote (first time with upstream)
  git push -u origin main
  
  # Push later changes normally
  git push
  
  # Pull and merge changes from remote
  git pull
  
  # OR, just fetch without merging
  git fetch
  # Then inspect with:
  git log origin/main --not main`,
    },
  ],

  conclusion:
    "Git's core workflow commands are deceptively simple, yet incredibly powerful. Mastering them enables a deep understanding of how your code evolves, makes collaboration seamless, and builds the foundation for advanced Git usage like branching, rebasing, and resolving conflicts. Every team benefits when developers adopt intentional, well-documented Git practices.",
}

export default articleData
