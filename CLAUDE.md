# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Matt Godbolt's CppCon 2025 keynote presentation: **"C++: Some Assembly Required"**. The presentation explores how the C++ ecosystem evolved through emergent, community-driven development rather than central planning, using the metaphor of a rainforest ecosystem.

## Technical Setup

The presentation uses **reveal.js** with custom integrations:

- **Build Tool**: Vite for fast development and building
- **Framework**: reveal.js for HTML presentations
- **Custom Plugin**: reveal-ce for Compiler Explorer integration
- **Content**: Mixed HTML/Markdown slides

## Development Commands

```bash
npm start          # Start development server (opens in browser)
npm run build      # Build production version
npm run preview    # Preview production build
```

## Project Structure

```
├── index.html      # Main presentation HTML with reveal.js configuration
├── intro.md        # Markdown slides content
├── notes.md        # Detailed presentation outline and speaker notes
├── style.css       # Custom styling
├── reveal.js/      # reveal.js framework (submodule)
└── reveal-ce/      # Compiler Explorer plugin (submodule)
```

## Presentation Configuration

Key settings stored towards the end of `index.html`

## Content Guidelines

### Working with Slides

- Slides are in `intro.md` using Markdown format
- Use `---` between vertical slides, `----` for horizontal
- Speaker notes use `Note:` prefix
- Code blocks with `data-ce` attribute become clickable CE links, see `reveal-ce/README.md` for more info

### Visual Elements

- Custom CSS in `style.css` for presentation styling
- Images and diagrams support the rainforest metaphor
- Consistent color scheme throughout

## Working with This Project

### Adding Content

1. Edit `intro.md` for slide content (and/or add new sections)
2. Use `notes.md` as reference for planned content structure
3. Test locally (ask the user to ensure `npm start` is running in a terminal; it will autoreload the page)

### Modifying CE Integration

Unlikely to be needed, but the CE Integration is a submodule that can be modified if there's missing functionality.

- Edit `reveal-ce/index.js` for plugin behavior
- Run tests after changes: `cd reveal-ce && npm test`
- Follow conventional commits for the plugin

## Specific Preferences for This Project

- Maintain the narrative arc from "central planning" to "emergent ecosystem"
- Keep code examples concise and demonstrative
- Ensure all CE links work before presentation
- Focus on community contributions and evolution of C++
- Use the rainforest metaphor consistently throughout
