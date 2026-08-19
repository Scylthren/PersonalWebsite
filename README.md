# my-portfolio

A personal site: About (home), Projects, and a Markdown-powered Blog.

## Run it

```
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Structure

```
src/
├── components/Navbar.jsx      nav bar, shared across pages
├── pages/
│   ├── About.jsx              home page
│   ├── Projects.jsx           reads from src/data/projects.js
│   ├── Blog.jsx                lists posts from src/content/posts
│   └── BlogPost.jsx            renders a single post
├── data/projects.js           edit this to add/remove projects
├── content/posts/*.md         one file per blog post
└── utils/posts.js             loads + parses the markdown files
```

## Adding a project

Add an object to the array in `src/data/projects.js`.

## Adding a blog post

Create a new file in `src/content/posts/`, e.g. `my-new-post.md`:

```
---
title: My New Post
date: 2026-09-01
excerpt: One sentence describing the post.
---

Write the post here in normal Markdown.
```

It'll appear on `/blog` automatically, sorted newest-first by date. No
other code changes needed.

## Deploying

This is a static site (Vite build), so it deploys well to Vercel, Netlify,
or GitHub Pages. Run `npm run build` and deploy the generated `dist/`
folder, or connect the repo directly to Vercel/Netlify and let them run
the build for you.

One thing to configure on whichever host you use: this site uses
client-side routing (`react-router`), so the host needs to redirect all
unknown paths to `index.html` (Vercel and Netlify do this automatically
for Vite projects; GitHub Pages needs a small workaround if you go that
route — ask if you get there).
