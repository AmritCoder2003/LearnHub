# Publish all LearnHub project files

## Goal

Stage, commit, and push every currently untracked project file and folder in the LearnHub workspace to the existing GitHub `main` branch.

## Context inspected

- `AGENTS.md`
- Current Git status: all files other than the README-only initial commit are untracked.
- `.gitignore`: excludes dependencies, build output, environment files, keys, and debug files.

## Files and folders included

- `.agents/`, `.gitignore`, `AGENTS.md`, `CLAUDE.md`
- `app/`, `design/`, `prompts/`, `public/`
- Project configuration and lockfiles currently listed by Git status.

## Actions

1. Stage all non-ignored workspace content using `git add .`.
2. Review staged changes to confirm ignored assets and environment files remain excluded.
3. Create one commit, `Add LearnHub project files`.
4. Push `main` to the existing `origin` remote.

## Security considerations

- `.gitignore` excludes `.env*` and `*.pem`; no ignored files are included.
- This will publish all currently untracked files, including `.agents/` skill materials and implementation prompts, as explicitly requested.

## Acceptance criteria

- All currently untracked, non-ignored files appear in the commit.
- Local `main` and `origin/main` contain the new commit.
- The worktree is clean afterward.

## Checks and manual test

1. Run `git status --short --branch` after the push; it should show a clean, tracking `main` branch.
2. Inspect the new commit on GitHub.
