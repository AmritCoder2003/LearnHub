# Initialize and publish the LearnHub Git repository

## Goal

Initialize the LearnHub workspace as a Git repository, append a LearnHub heading to its README, commit that README change as the initial commit, configure the supplied GitHub remote, and publish the main branch.

## Context inspected

- `AGENTS.md`
- Current `README.md`
- Git status and configured remotes: no Git repository currently exists.

## Actions

1. Append `# LearnHub` to `README.md`.
2. Run `git init` in the `learnhub` workspace.
3. Stage only `README.md` and create commit `first commit`.
4. Rename the initial branch to `main`.
5. Add `https://github.com/AmritCoder2003/LearnHub.git` as remote `origin`.
6. Push and set upstream for `main`.

## Decision

The provided sequence runs `git branch -M main` but pushes `master`. Because `master` will no longer exist after that rename, the publish command will be `git push -u origin main`.

## Security considerations

- The push is an external, irreversible publication of the README-only commit to the user-specified GitHub repository.
- No secrets are read, written, or included in the commit.

## Acceptance criteria

- Local repository uses branch `main`.
- The initial commit contains only `README.md`.
- `origin` points to the supplied GitHub HTTPS URL.
- `main` is pushed to `origin` with upstream tracking.

## Checks and manual test

1. Run `git status --short --branch` and `git remote -v`.
2. Confirm the repository page shows the `first commit` on `main`.
