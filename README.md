# HeetDevLab Blog

A lightweight, static developer journal for Android development, privacy, security and indie building.

## Structure

```
/
├── index.html                         # Blog homepage and article discovery
├── articles/                           # Canonical article pages
│   ├── how-sentinex-works.html
│   ├── building-secure-android-apps.html
│   └── indie-developer-journey.html
├── assets/
│   ├── css/blog.css                    # Shared responsive design system
│   └── js/blog.js                      # Navigation, search and category filters
├── *.html                              # Legacy article URL redirects
├── style.css                           # Retained legacy stylesheet
├── script.js                           # Retained legacy script
└── particles.js                        # Retained legacy particle script
```

## Editing

- Add new posts inside `articles/`.
- Reuse `assets/css/blog.css` and `assets/js/blog.js` on new pages.
- Link new posts from `index.html` and update the article count.
- Keep old root-level article URLs as redirects when changing a post's canonical path.
- Keep navigation and internal links rooted at `/Blog/` so GitHub Pages paths remain stable.

## Deployment

The repository is designed for GitHub Pages and uses no build step or package dependencies.
