<p align="center">
  <img src="public/tavryz-logo-centered.svg" alt="Tavryz" width="64" />
</p>

<h1 align="center">Tavryz</h1>

<p align="center">
  <strong>Premium digital engineering — AI, web, mobile, security, and design.</strong><br/>
  <a href="https://tavryz.com">tavryz.com</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-blue?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Firebase-Hosting-orange?logo=firebase" alt="Firebase" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss" alt="Tailwind" />
</p>

<br/>

---

## What is Tavryz?

Tavryz is a **full-service digital engineering agency** website. It showcases twelve core domains of expertise — from AI/ML and web development to cybersecurity, blockchain, and creative services.

The site is built as a **single-page application** with client-side routing, deployed automatically to **Firebase Hosting** via GitHub Actions.

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19 + Vite 6 |
| **Routing** | React Router 7 |
| **UI** | Framer Motion 13, Lucide Icons |
| **Styling** | Tailwind CSS v4 |
| **Backend** | Firebase (Hosting, Firestore) |
| **CI/CD** | GitHub Actions → Firebase Hosting |
| **Language** | TypeScript 5 |

## Design System

The UI is built around a **liquid glass** design language — translucent frosted-glass surfaces, neomorphic depth, and editorial typography on a pure black canvas. See [DESIGN.md](./DESIGN.md) for full documentation.

## Domains

The site highlights **12 specialized domains**:

- AI & Machine Learning Engineering
- Web App Development
- Mobile App Development
- Cybersecurity & Compliance
- Blockchain & Web3 Development
- E-Commerce Solutions
- UI/UX & Product Design
- SEO (Search Engine Optimization)
- Digital Marketing
- Marketing & Performance Ads
- Media & Creative Services
- Graphic & Brand Design

## Features

- **Dynamic testimonials** — loaded from Firestore, with a submit form for new reviews
- **Liquid glass UI** — frosted-glass surfaces with backdrop blur, layered shadows, and border highlights
- **Animated UI** — spring-based entrance animations on scroll via Framer Motion
- **Magnetic cursor effect** — custom interactive hover on key elements
- **Particle background** — ambient floating particles and glowing orbs
- **Code-split routing** — lazy-loaded pages via `React.lazy` for faster initial load
- **Responsive design** — desktop-first with mobile bottom nav and adaptive layouts
- **Auto-deploy** — push to `main` → GitHub Actions builds & deploys to Firebase

## Getting Started

### Prerequisites

- Node.js 22+
- npm

### Install & Run

```bash
# Clone the repo
git clone https://github.com/xeeshan-zs/tav-2.0.git
cd tav-2.0

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

Production build is output to the `dist/` directory.

## Deployment

### Automatic (recommended)

Every push to `main` triggers a GitHub Actions workflow that:
1. Installs dependencies
2. Typechecks and builds with Vite
3. Deploys to Firebase Hosting

### Manual

```bash
npm run deploy
```

This runs `vite build && firebase deploy --only hosting`.

### CI/CD Setup

Add one GitHub Actions secret:

| Secret | How to get it |
|---|---|
| `FIREBASE_SERVICE_ACCOUNT` | Firebase Console → Project Settings → Service Accounts → Generate New Private Key |

## Project Structure

```
├── .github/workflows/deploy.yml   # CI/CD pipeline
├── src/
│   ├── main.tsx                    # React entry point
│   ├── App.tsx                     # Router + lazy-loaded routes
│   ├── app/
│   │   ├── globals.css             # Design tokens & neomorphic utilities
│   │   ├── page.tsx                # Home page
│   │   ├── not-found.tsx           # 404 radar page
│   │   ├── privacy/page.tsx
│   │   └── terms/page.tsx
│   ├── components/
│   │   ├── Navbar.tsx              # Glass pill nav (desktop + mobile)
│   │   ├── Hero.tsx                # Full-screen hero with spring animations
│   │   ├── Domains.tsx             # 12-domain service grid
│   │   ├── CaseStudies.tsx         # Project showcase
│   │   ├── Testimonials.tsx        # Firestore-powered testimonials
│   │   ├── FAQ.tsx                 # Accordion FAQ
│   │   ├── Footer.tsx              # Glass CTA panel + footer
│   │   ├── CardStack.tsx           # Swipeable card carousel
│   │   ├── GlassFlow.tsx           # Canvas glass blob animation
│   │   ├── ParticleBackground.tsx  # Ambient particle system
│   │   └── Magnetic.tsx            # Magnetic hover wrapper
│   └── lib/
│       └── firebase.ts             # Firebase client config
├── index.html                      # Vite entry point
├── vite.config.ts                  # Vite + React + Tailwind config
├── firebase.json                   # Firebase hosting rules
├── firestore.rules                 # Firestore security rules
└── DESIGN.md                       # Full design system documentation
```

## License

Private — Tavryz Digital Engineering.

---

<p align="center">
  Built with precision by <strong>Tavryz</strong>
</p>
