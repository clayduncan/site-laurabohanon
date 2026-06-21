# Local Setup

This Astro rebuild is intentionally static, fast, and content-first.

## Required Tools

- Homebrew
- nvm or another Node version manager
- Node 22
- Git
- Netlify CLI, only when linking or testing deploy configuration locally

## First-Time Setup

```sh
git clone git@github.com:clayduncan/site-clayduncan.git
cd site-clayduncan
nvm use 22
npm install
npm run dev
```

The local dev server usually starts at `http://localhost:4321`.

## Useful Commands

```sh
npm run dev
npm run build
npm run preview
npm run format
```

## Codex Desktop Notes

- Open this repository folder in Codex Desktop.
- Keep substantive rebuild work off `main`; use `codex/*` feature branches.
- Netlify deploys production from `main`.

## Netlify CLI

Only link the project when deploy configuration needs local verification:

```sh
netlify link
```
