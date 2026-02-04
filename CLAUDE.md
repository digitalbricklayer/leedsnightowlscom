# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
# Install dependencies
npm install

# Local development with hot reload
npx eleventy --serve

# Build for production
npx eleventy
```

Output directory: `_site/`

## Technology Stack

- **Eleventy (11ty) v3.0.0** - Static site generator
- **Nunjucks** - Primary templating language (.njk files)
- **Bootstrap 5.3** - CSS framework (CDN)
- **PhotoSwipe 5.4** - Lightbox gallery (CDN)

## Architecture

### Content Flow
Pages can be `.njk`, `.html`, or `.md` files in the root or subdirectories. Eleventy processes them using:
- `_includes/page.njk` - Base layout with Bootstrap structure
- `_includes/gallery.njk` - PhotoSwipe-enabled gallery layout
- `_includes/game.njk` - Game card component

### Data
- `_data/site.json` - Global site configuration (name, URL)
- Front-matter in content files defines page metadata

### Collections
Events use `tags: event` in front-matter to create the events collection, referenced via `eleventyImport` in templates.

### Static Assets
- `public/` - Copied to output root (images, redirects)
- `css/` - Stylesheets bundled per-page via eleventy-plugin-bundle

## Deployment

Deploys to Cloudflare Pages. The `public/_redirects` file handles legacy URL rewrites from previous site versions.
