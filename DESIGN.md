# Tavryz Studio — UI & Design System

> A premium dark-mode design system built around **liquid glass**, **neomorphism**, and **editorial typography**. Every surface, interaction, and transition is crafted to feel like polished hardware — tactile, dimensional, and alive.

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Liquid Glass Design Language](#4-liquid-glass-design-language)
5. [Neomorphic Utilities](#5-neomorphic-utilities)
6. [Component Inventory](#6-component-inventory)
7. [Layout & Spacing](#7-layout--spacing)
8. [Animations & Motion](#8-animations--motion)
9. [Responsive Design](#9-responsive-design)
10. [File Structure](#10-file-structure)
11. [Tech Stack](#11-tech-stack)

---

## 1. Design Philosophy

The Tavryz site is a **single-page application** with three routes (`/`, `/privacy`, `/terms`). The entire UI is dark-mode-only, built on a pure black (`#000000`) canvas. The design language draws from Apple's Liquid Glass aesthetic — translucent layers, subtle light refraction, and physical depth through light and shadow.

**Core principles:**
- **Dark canvas, light surfaces** — content lives on `rgba(255,255,255,0.03–0.08)` glass layers over `#000`
- **Dimensional depth** — multi-layered `box-shadow` + `border` creates physical raise/inset feel
- **Motion with purpose** — Framer Motion springs for reveals, Magnetic hover for interactivity
- **Typography as hierarchy** — editorial headlines in Plus Jakarta Sans, body in Geist, code in Geist Mono

---

## 2. Color System

### Primary Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-background` | `#000000` | Page background, pure black |
| `--color-foreground` | `#FFFFFF` | Primary text |
| `--color-card` | `#0a0a0a` | Card/surface backgrounds |
| `--color-muted-text` | `#737373` | Secondary text, labels |
| `--color-border-dark` | `rgba(255,255,255,0.08)` | Default border opacity |
| `--color-accent` | `#ffffff` | Accent/CTA color |

### Text Colors (Tailwind classes used in components)

| Class | Hex | Role |
|-------|-----|------|
| `text-white` | `#FFFFFF` | Headlines, primary text |
| `text-[#a3a3a3]` | `#a3a3a3` | Body text, descriptions |
| `text-[#737373]` | `#737373` | Captions, labels, timestamps |
| `text-[#525252]` | `#525252` | Muted numbers, IDs, badges |
| `text-[#d4d4d4]` | `#d4d4d4` | Testimonial quotes |

### Surface / Glass Layers

| Layer | Value | Usage |
|-------|-------|-------|
| Base | `bg-white/[0.03]` | Cards, content areas |
| Hover | `bg-white/[0.05]` | Interactive hover state |
| Active | `bg-white/[0.08]` | Dropdown menus, pressed |
| Border | `border-white/[0.06]` | Default card borders |
| Hover border | `border-white/[0.1]` | Active/expanded borders |
| Nav glass | `bg-white/[0.04]` | Navbar unscrolled |
| Nav glass | `bg-white/[0.08]` | Navbar scrolled |

### CTA / Button Colors

| Element | Background | Text | Shadow |
|---------|-----------|------|--------|
| Primary button | `bg-white` | `text-black` | `shadow-[0_2px_8px_rgba(255,255,255,0.1)]` |
| Primary hover | `bg-zinc-200` | `text-black` | — |
| Ghost link | transparent | `text-white` | — |
| Ghost hover | — | `text-[#a3a3a3]` | — |

---

## 3. Typography

### Font Families

| Font | CSS Variable | Tailwind Class | Weight | Role |
|------|-------------|----------------|--------|------|
| **Geist** | `--font-sans` | `font-sans` | 100–900 | Body text, UI elements |
| **Plus Jakarta Sans** | `--font-display` | `font-display` | 400–800 | Display headlines, section titles |
| **Geist Mono** | `--font-mono` | `font-mono` | 100–900 | Code, labels, timestamps, IDs |

All fonts are loaded via Google Fonts `<link>` in `index.html`.

### Type Scale

| Element | Size | Weight | Letter-spacing | Line-height |
|---------|------|--------|----------------|-------------|
| Display headline | `clamp(2rem, 5vw, 4rem)` | bold (700+) | `-0.03em` | `1.05` |
| Section headline (md) | `text-4xl md:text-5xl` | bold | `-0.03em` | `1.1` |
| Section headline (lg) | `text-5xl md:text-7xl lg:text-[5.5rem]` | bold | `-0.03em` | `1.05` |
| Card title | `text-lg md:text-xl` | bold | `-0.025em` | `1.1` |
| Card title (featured) | `text-2xl md:text-3xl` | bold | `-0.025em` | `1.1` |
| Body text | `text-sm` / `text-[13px]` | normal (400) | `0` | `1.6` |
| Caption / label | `text-[11px]` | normal | `0.03em` | `1.4` |
| Micro label | `text-[10px]` | normal | `0.3em` uppercase | — |
| Badge / ID | `text-[9px]` | bold | `0.2em` uppercase | — |

### Typography Utility Classes

```css
.display-text   /* clamp(2rem,5vw,4rem), 1.05 line-height, -0.03em tracking */
.heading-lg     /* -0.025em tracking, 1.1 line-height */
.heading-md     /* -0.02em tracking, 1.2 line-height */
.body-text      /* 0 tracking, 1.6 line-height */
.caption-text   /* 0.03em tracking, 1.4 line-height */
```

---

## 4. Liquid Glass Design Language

The "liquid glass" effect is the visual signature of the Tavryz UI. It creates translucent, frosted-glass surfaces that appear to float above the dark canvas with realistic light interaction.

### 4.1 Navbar — Apple Glass Pill

**Desktop nav** (`fixed top, centered`):
- Unscrolled: `bg-white/[0.04]` + `backdrop-blur-xl` + subtle shadow
- Scrolled: `bg-white/[0.08]` + `backdrop-blur-2xl` + deeper shadow + brighter border
- Border: `border-white/[0.06]` → `border-white/[0.12]` on scroll
- Shadow: `0_4px_16px_rgba(0,0,0,0.2)` → `0_8px_32px_rgba(0,0,0,0.3)` + `inset_0_1px_0_rgba(255,255,255,0.06)` highlight

**Mobile nav** (`fixed bottom, floating pill`):
- Always visible: `bg-white/[0.08]` + `backdrop-blur-2xl`
- Same shadow/border system as scrolled desktop
- Stylized lowercase italic "t" logo with gradient glass treatment:
  ```
  bg-gradient-to-br from-white/[0.22] via-white/[0.08] to-transparent
  border border-white/[0.22]
  shadow-[0_4px_20px_rgba(0,0,0,0.4), inset_0_1px_0_rgba(255,255,255,0.18)]
  after: gradient overlay from-white/[0.12] → transparent → white/[0.04]
  ```

### 4.2 Dropdown Menu — Glass Card

Expanding card dropdown with spring animation (`stiffness: 400, damping: 30`):
- Background: `bg-white/[0.08]` + `backdrop-blur-2xl`
- Border: `border-white/[0.1]`
- Shadow: `0_24px_80px_rgba(0,0,0,0.4)` + `inset_0_1px_0_rgba(255,255,255,0.06)`
- Items hover: `bg-white/[0.06]` → `bg-white/[0.1]`
- Icon containers: `bg-white/[0.06] border border-white/[0.08]`

### 4.3 Glass Card Pattern (Used Everywhere)

The core glass card pattern appears in **Domain cards**, **Case Studies**, **Testimonials**, **FAQ**, and **Footer contact cards**:

```
bg-white/[0.03]          /* translucent surface */
border border-white/[0.06] /* subtle edge light */
rounded-2xl              /* generous radius */
hover:bg-white/[0.05]    /* lift on hover */
hover:border-white/[0.1] /* brighter edge on hover */
```

### 4.4 Glass CTA Section (Footer Contact)

The main CTA card in the Footer uses a full glass panel:
- Outer: `rounded-3xl` container
- Background layer: `bg-white/[0.03]` + `backdrop-blur-xl` + `border-white/[0.06]`
- Contains email card, availability card, time card — all `bg-white/[0.04] border-white/[0.06]`

### 4.5 Glass Flow Canvas Background

`GlassFlow.tsx` renders a `<canvas>` with animated glass blobs:
- 4 radial gradient blobs (`rgba(65,174,172, 0.04–0.08)`, `rgba(33,150,243, 0.06)`, `rgba(161,233,224, 0.05)`)
- Slow sinusoidal movement (0.0002–0.0004 speed)
- 5 diagonal glass streaks with white gradient (0.01–0.02 opacity)
- CSS `filter: blur(60px)` for frosted look
- Overlay: `bg-[#0a0e1a]/40` for depth blending

### 4.6 Particle Background

`ParticleBackground.tsx` creates the ambient atmosphere:
- **Two large glowing orbs**: `bg-white/[0.1]` and `bg-white/[0.04]` with `blur-[150px]` / `blur-[180px]`, animated with 30–35s slow drift
- **25 floating particles**: `bg-gradient-to-r from-white to-gray-300`, `box-shadow: 0 0 8px rgba(255,255,255,0.3)`, floating upward at varying speeds
- **Grid overlay**: subtle blue grid lines at `rgba(33,150,243,0.015)`, 40px spacing
- Background: `bg-[#030816]` (very dark navy-black)

### 4.7 Card Stack Glass Effects

`CardStack.tsx` uses per-card glow colors:
```
boxShadow: 0 15px 35px -10px ${glowColor}60,
           0 0 25px 2px ${glowColor}30,
           0 0 0 1px ${glowColor}25,
           0 30px 60px -15px rgba(0,0,0,0.95)
```
- Top glow line: `linear-gradient(90deg, transparent, ${glowColor}, transparent)` with `box-shadow: 0 0 14px 2px ${glowColor}`
- Ambient glow blob: `bg-${glowColor}` + `blur-[50px]` + `opacity-25`
- Card body: `bg-[#121212]` + `border border-white/10`

### 4.8 404 Page — Radar Glass

The not-found page uses a radar/sweep glass effect:
- Concentric circles: `border border-white/[0.04]`, 4 rings at 200px intervals
- Sweep line: gradient `from-[#ffffff]/60` to transparent
- Conic sweep glow: `conic-gradient(from -90deg, transparent 0deg, rgba(65,174,172, 0.08) 60deg, transparent 90deg)`
- 404 numeral: `WebkitTextStroke: 2px rgba(255,255,255,0.15)` with `color: transparent` (outline style)
- Teal overlay: `WebkitTextStroke: 2px rgba(65,174,172,0.4)` with animated clip-path sync

### 4.9 Search Input — Neo Inset Glass

The search bar on 404 and footer:
```
neo-inset rounded-full px-5 py-3
border border-white/[0.06]
bg-[#0a0a0a] + inset box-shadows
```

---

## 5. Neomorphic Utilities

A full set of dark-mode neomorphic utility classes defined in `globals.css`:

| Class | Effect | Use Case |
|-------|--------|----------|
| `.neo-raised` | Raised surface, dual shadow | Cards, containers |
| `.neo-raised-lg` | Larger raised surface | Hero sections, modals |
| `.neo-pressed` | Inset + scale(0.98) on active | Press feedback |
| `.neo-inset` | Fully inset, no raised shadow | Input fields, search bars |
| `.neo-button` | Medium raised, interactive | Buttons, clickable elements |
| `.neo-button-dark` | Same as neo-button with dark bg | Dark-themed buttons |
| `.neo-pill` | Semi-transparent inset | Tags, badges, pills |
| `.neo-circle` | Circular raised surface | Icon buttons, avatars |
| `.neo-circle-transparent` | Circle without bg, shadow only | Floating icon buttons |

**Shadow anatomy** (using `.neo-raised` as example):
```css
box-shadow:
  8px 8px 20px rgba(0,0,0,0.8),        /* dark shadow (bottom-right) */
  -8px -8px 20px rgba(255,255,255,0.02), /* light highlight (top-left) */
  inset 0 1px 0 rgba(255,255,255,0.04);  /* top edge highlight */
border: 1px solid rgba(255,255,255,0.06); /* subtle edge */
```

**Transition curve**: `cubic-bezier(0.16, 1, 0.3, 1)` — fast out, slow settle (Apple-style spring feel).

---

## 6. Component Inventory

### Core Components

| Component | File | Description |
|-----------|------|-------------|
| **Navbar** | `Navbar.tsx` | Fixed glass pill nav (desktop top / mobile bottom), dropdown menus with Framer Motion AnimatePresence |
| **Hero** | `Hero.tsx` | Full-screen hero with staggered spring animations, logo, headline, CTA, logo row |
| **Domains** | `Domains.tsx` | 12-card grid of service domains with spring entrance animations |
| **CaseStudies** | `CaseStudies.tsx` | Featured project (full-width) + 2-column grid, metrics, external links |
| **Testimonials** | `Testimonials.tsx` | Masonry grid from Firestore, star rating, add-testimonial form |
| **FAQ** | `FAQ.tsx` | Two-column layout: sticky header + accordion list with AnimatePresence |
| **Footer** | `Footer.tsx` | Glass CTA card (email, availability, time), social links, copyright |
| **Magnetic** | `Magnetic.tsx` | Magnetic hover wrapper — element follows cursor within range, spring physics |
| **CardStack** | `CardStack.tsx` | Swipeable card carousel with drag, auto-rotate, glow effects |
| **GlassFlow** | `GlassFlow.tsx` | Canvas-based animated glass blobs and streaks |
| **ParticleBackground** | `ParticleBackground.tsx` | Ambient floating particles, glowing orbs, blue grid overlay |

### Page Components

| Page | Route | Content |
|------|-------|---------|
| **Home** | `/` | Navbar → Hero → Domains → CaseStudies → Testimonials → FAQ → Footer |
| **Privacy** | `/privacy` | Navbar → Legal content → Footer |
| **Terms** | `/terms` | Navbar → Legal content → Footer |
| **404** | `*` | Radar sweep animation, search bar, back-to-home link |

---

## 7. Layout & Spacing

### Page Structure

```
<body>                          /* min-h-full flex flex-col bg-black */
  <ParticleBackground />        /* fixed z-0 ambient layer */
  <Navbar />                    /* fixed z-50 glass pill */
  <main className="flex-1">    /* fills remaining height */
    <Hero />                    /* min-h-screen, pt-16 md:pt-20 */
    <Domains />                 /* py-20 md:py-32 */
    <CaseStudies />             /* py-20 md:py-32 */
    <Testimonials />            /* py-20 md:py-32 */
    <FAQ />                     /* py-20 md:py-32 */
  </main>
  <Footer />                    /* pb-24 sm:pb-0 (mobile bottom nav clearance) */
</body>
```

### Content Widths

| Container | Max-width | Padding |
|-----------|-----------|---------|
| Full-width sections | — | `px-6` |
| Hero content | `max-w-5xl` | `px-6` |
| Domains / CaseStudies / Testimonials / FAQ | `max-w-6xl` | `px-6` |
| Footer CTA card | `max-w-5xl` | `p-10 md:p-16 lg:p-20` |
| Footer bottom | `max-w-7xl` | `px-6` |
| Privacy / Terms content | `max-w-3xl` | `px-6`, `pt-32 md:pt-40` |

### Section Spacing

- Between sections: `py-20 md:py-32` (80px → 128px)
- Section header to content: `mb-12`
- Between card grid items: `gap-4` (small) or `gap-6` (large)
- Footer CTA to bottom bar: `mb-20`

### Border Radius Tokens

| Radius | Value | Usage |
|--------|-------|-------|
| Small | `rounded-lg` | Badges, tags |
| Medium | `rounded-xl` | Cards, icon containers |
| Large | `rounded-2xl` | Main cards, dropdowns |
| XL | `rounded-3xl` | CTA panel, hero glass |
| Full | `rounded-full` | Buttons, pills, nav bar, avatars, search inputs |

---

## 8. Animations & Motion

**Library**: Framer Motion v13

### Entrance Animations (Scroll-triggered)

| Pattern | Animation | Timing |
|---------|-----------|--------|
| Section headers | `opacity: 0, y: 20` → `opacity: 1, y: 0` | `duration: 0.6` |
| Card grid items | `opacity: 0, y: 20` → visible | `spring: stiffness 300, damping 24`, staggered `delay: index * 0.05` |
| Featured cards | `opacity: 0, y: 25` → visible | `duration: 0.6, ease: [0.16, 1, 0.3, 1]` |

### Hero Animations

| Element | Animation | Timing |
|---------|-----------|--------|
| Logo | `opacity: 0, scale: 0.9` → `1, 1` | `duration: 0.6, ease: "easeOut"` |
| Headlines | `y: "110%"` → `y: 0` (per line) | `spring: stiffness 150, damping 20`, staggered |
| Subtitle / CTA | `opacity: 0, y: 30` → visible | `spring: stiffness 200, damping 24` |
| Logo row | `opacity: 0` → `1` | `delay: 0.8, duration: 0.8` |

### Navbar Animations

| Element | Animation | Timing |
|---------|-----------|--------|
| Dropdown open | `opacity: 0, y: -8, scale: 0.96` → `1, 0, 1` | `spring: stiffness 400, damping 30` |
| Dropdown close | Reverse of open | Same spring |
| Scroll detection | Smooth class transition | `transition-all duration-500` |

### FAQ Accordion

| Element | Animation | Timing |
|---------|-----------|--------|
| Panel open | `height: 0, opacity: 0` → `height: auto, opacity: 1` | `spring: stiffness 300, damping 28` |
| Panel close | Reverse | Same spring |

### Card Stack (Drag & Drop)

| Behavior | Implementation |
|----------|---------------|
| Drag | `drag="x"`, `dragElastic: 0.7` |
| Dismiss threshold | `offset.x > 80px` or `velocity.x > 0.3` |
| Dismiss animation | `spring: stiffness 200, damping 25` to `x: ±400` |
| Auto-rotate | `setInterval` every 3500ms |
| Cooldown | 2200ms after dismiss, 1200ms after snap-back |
| Stack variants | `second: scale(0.94)`, `third: scale(0.88)`, `hidden: scale(0.82) opacity(0)` |

### Magnetic Hover (`Magnetic.tsx`)

- Range: configurable (default 35px), strength: 0.35
- Element follows cursor when within range
- Spring: `stiffness 300, damping 24, mass 0.5` (critically damped, no overshoot)
- Used on: Nav logo, CTA buttons, social icons, footer links

### Particle Background

| Element | Animation | Timing |
|---------|-----------|--------|
| Large orbs | `x/y/scale` drift | 30–35s infinite easeInOut |
| Particles | `y: "0vh" → "-100vh"` upward float | 20–40s per particle, linear |
| Radar sweep (404) | `rotate(0deg → 360deg)` | 30ms per degree, continuous |

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

---

## 9. Responsive Design

### Breakpoint System (Tailwind defaults)

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Default (mobile) | `< 640px` | Single column, mobile bottom nav, stacked layouts |
| `sm` | `≥ 640px` | Desktop top nav replaces mobile bottom nav |
| `md` | `≥ 768px` | 2-column grids, larger typography, side-by-side layouts |
| `lg` | `≥ 1024px` | 3-column grids, full editorial layouts |

### Mobile-Specific

- **Bottom nav**: `fixed bottom-6 left-4 right-4`, full-width floating glass pill
- **Mobile nav items**: Compact labels + "Start a Project" CTA button
- **Card stacks**: `max-w-[320px] xs:max-w-[360px] sm:max-w-[400px]`
- **Footer**: `pb-24` to clear bottom nav (removed at `sm:`)
- **Headlines**: Scale from `text-4xl` (mobile) → `text-5xl` (md) → `text-6xl/7xl` (lg)

### Desktop-Specific

- **Top nav**: `fixed top-0`, centered pill, hidden below `sm:`
- **Dropdown menus**: 420px wide, positioned below nav links
- **Masonry testimonials**: `columns-1 md:columns-2 lg:columns-3`

---

## 10. File Structure

```
src/
├── main.tsx                          # React entry point
├── App.tsx                           # Router + Suspense + routes
├── app/
│   ├── globals.css                   # Design tokens, neomorphic utilities, animations
│   ├── page.tsx                      # Home page (assembles all sections)
│   ├── not-found.tsx                 # 404 radar page
│   ├── privacy/
│   │   └── page.tsx                  # Privacy policy
│   └── terms/
│       └── page.tsx                  # Terms of service
├── components/
│   ├── Navbar.tsx                    # Glass pill nav (desktop + mobile)
│   ├── Hero.tsx                      # Full-screen hero with spring animations
│   ├── Domains.tsx                   # 12-domain service grid
│   ├── CaseStudies.tsx              # Project showcase (featured + grid)
│   ├── Testimonials.tsx             # Firestore-backed masonry testimonials
│   ├── FAQ.tsx                       # Accordion FAQ with sticky header
│   ├── Footer.tsx                    # Glass CTA panel + footer links
│   ├── Magnetic.tsx                  # Magnetic hover wrapper
│   ├── CardStack.tsx                 # Swipeable card carousel
│   ├── GlassFlow.tsx                # Canvas glass blob animation
│   └── ParticleBackground.tsx       # Ambient particle system
└── lib/
    └── firebase.ts                   # Firebase/Firestore initialization
```

---

## 11. Tech Stack

| Technology | Version | Role |
|------------|---------|------|
| React | 19.2.x | UI framework |
| Vite | 6.x | Build tool & dev server |
| React Router | 7.x | Client-side routing |
| Framer Motion | 13.x | Animations & gestures |
| Tailwind CSS | 4.x | Utility-first styling |
| Firebase | 12.x | Firestore (testimonials), hosting |
| Lucide React | 0.577.x | Icon library |
| TypeScript | 5.x | Type safety |

### Key Design Decisions

- **No component library** — all UI is hand-crafted with Tailwind utilities + custom CSS
- **No `<div>` layout** — all spacing/sizing via Tailwind utilities or glass components
- **Firebase only for testimonials** — Firestore stores user-submitted reviews
- **Static SPA** — deployed to Firebase Hosting with client-side routing
- **Single dark theme** — no light mode, no theme toggle
