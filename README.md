<p align="center">
  <img src="public/tavryz-logo-centered.svg" alt="Tavryz" width="64" />
</p>

<h1 align="center">Tavryz</h1>

<p align="center">
  <strong>Premium digital engineering — AI, web, mobile, security, and design.</strong><br/>
  <a href="https://tavryz-live.web.app">tavryz-live.web.app</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-blue?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Firebase-Hosting-orange?logo=firebase" alt="Firebase" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss" alt="Tailwind" />
</p>

<br/>

---

## What is Tavryz?

Tavryz is a **full-service digital engineering agency** website. It showcases twelve core domains of expertise — from AI/ML and web development to cybersecurity, blockchain, and creative services.

The site is built as a **static export** deployed automatically to **Firebase Hosting** via GitHub Actions.

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router, static export) |
| **UI** | React 19, Framer Motion, Lucide Icons |
| **Styling** | Tailwind CSS v4 |
| **Backend** | Firebase (Hosting, Firestore) |
| **CI/CD** | GitHub Actions → Firebase Hosting |
| **Language** | TypeScript 5 |

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
- **Animated UI** — spring-based entrance animations on scroll via Framer Motion
- **Magnetic cursor effect** — custom interactive hover on key elements
- **Particle background** — ambient floating particles on the hero
- **Responsive design** — desktop-first with full mobile support
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

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

Static export is output to the `out/` directory.

## Deployment

### Automatic (recommended)

Every push to `main` triggers a GitHub Actions workflow that:
1. Installs dependencies
2. Builds the Next.js static export
3. Deploys to Firebase Hosting

### Manual

```bash
npm run deploy
```

This runs `next build && firebase deploy --only hosting`.

### CI/CD Setup

Add one GitHub Actions secret:

| Secret | How to get it |
|---|---|
| `FIREBASE_SERVICE_ACCOUNT` | Firebase Console → Project Settings → Service Accounts → Generate New Private Key |

## Project Structure

```
├── .github/workflows/deploy.yml   # CI/CD pipeline
├── src/
│   ├── app/                        # Next.js App Router pages
│   ├── components/                 # UI components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Domains.tsx
│   │   ├── CaseStudies.tsx
│   │   ├── Testimonials.tsx        # Firestore-powered
│   │   ├── Footer.tsx
│   │   ├── ParticleBackground.tsx
│   │   └── Magnetic.tsx
│   └── lib/
│       └── firebase.ts             # Firebase client config
├── firebase.json                   # Firebase hosting rules
├── firestore.rules                 # Firestore security rules
└── next.config.ts                  # Static export config
```

## License

Private — Tavryz Digital Engineering.

---

<p align="center">
  Built with precision by <strong>Tavryz</strong>
</p>
