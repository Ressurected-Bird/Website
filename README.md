# Ressurected-Bird — Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/f50d044f-7a47-4f7d-9ce9-ea591f29d02c/deploy-status)](https://app.netlify.com/projects/ressurectedbird/deploys)

> Official website source for Ressurected-Bird — a clean, fast, and community-friendly static site focused on cybersecurity and gaming.

---

## Table of contents

* [About](#about)
* [Highlights](#highlights)
* [Project structure](#project-structure)
* [Getting started](#getting-started)
* [Development workflow](#development-workflow)
* [Contributing](#contributing)
* [Reporting issues](#reporting-issues)
* [Pull request checklist](#pull-request-checklist)
* [License](#license)
* [Contact](#contact)

---

## About

This repository contains the source files for the Ressurected-Bird website: static HTML, CSS, JavaScript, and assets used to publish the public-facing site. The site is designed to be minimal, performant, and easy for contributors to extend.

## Highlights

* Focus: Cybersecurity tools, demos, and gaming content.
* Static-site friendly — deployable to Netlify, Vercel, or any static host.
* Simple, modular folder layout for designers and developers.
* Clear contributing guidelines and pull request process.

## Project structure

```
Website/
├── .vscode/                 # Editor settings (optional)
├── assets/                  # Images, icons, fonts
├── Centauriwebkit/          # Theme / third-party assets
├── css/                     # Stylesheets
├── js/                      # JavaScript files
├── pages/                   # Extra HTML pages (About, Contact, Features..)
├── video/                   # Example or hero videos
├── index.html               # Main landing page
├── README.md                # This file
├── CONTRIBUTING.md          # Contribution guidelines
├── PULL_REQUEST.md          # PR template / guidance
└── LICENSE                  # MIT License
```

> Note: The repository contains several example pages (e.g. `router_expolit.html`, `adb_expolit.html`) and utility files (`netlify.toml`, `manifest.json`) used for deployment and PWA support.

## Getting started

### Prerequisites

* Git
* A modern web browser
* (Optional) Node.js and an HTTP server or Live Server extension for live reload

### Quick local preview

```bash
# clone the repo
git clone https://github.com/Ressurected-Bird/Website.git
cd Website

# open index.html in your browser, or use a local server
# with Python 3.x
python -m http.server 8000
# then visit http://localhost:8000
```

Or use VS Code + Live Server and open `index.html`.

## Development workflow

* Create a feature branch: `git checkout -b feat/your-feature`
* Make incremental, well-scoped commits
* Run a quick local check by opening the modified HTML in a browser
* Push the branch and open a pull request for review

### Coding style

* Keep markup semantic and accessible.
* Keep CSS modular; prefer class-based utility rules.
* Keep JavaScript unobtrusive and progressive.

## Contributing

We welcome contributions from developers, designers, and content creators.

1. Read `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md`.
2. Fork the repository and open a topic branch.
3. Make your changes and include descriptive commit messages.
4. Open a Pull Request describing the change and its purpose.

### Good first issues

Look for issues labelled `good first issue` or `help wanted`.

## Reporting issues

Please use the repository Issues to report bugs or request features. Include:

* A short, descriptive title
* Steps to reproduce (if bug)
* Expected vs actual behaviour
* Browser and environment details

## Pull request checklist

* [ ] My changes are limited in scope and documented
* [ ] Code follows the repository style
* [ ] I have tested locally (opened pages and checked console)
* [ ] Any assets added are optimized for web

## License

This repository is released under the **MIT License**. See the `LICENSE` file for details.

## Contact

For questions or collaboration, open an issue or contact the maintainer via the GitHub profile: `Ressurected-Bird`.

---

*Thank you for your interest in the project — contributions make this project better for everyone.*
