# WetLook BMX Clothing

> **Ride. Sweat. Chill.** — Official brand website for WetLook BMX Clothing, Las Pinas, Philippines.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=flat-square)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white&style=flat-square)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square)](https://tailwindcss.com)

---

## Overview

Single-page website for **WetLook BMX Clothing** — a rider-owned BMX apparel brand based in Las Pinas, Philippines. The site pulls live content directly from the brand's Facebook page using the official Facebook Page Plugin, embedding real posts, photos, reels, and videos without requiring API credentials.

## Features

- **Live Facebook Feed** — embedded Page Plugin (timeline) shows real posts, photos, reels, and videos
- **Videos & Reels** — quick-access tiles linking to Facebook `/videos/`, `/reels/`, `/photos/`
- **Email options** — click-to-open dropdown lets visitors choose Gmail, Outlook, Yahoo, or default mail client
- **Animated ticker** — scrolling marquee with brand keywords
- **Fully responsive** — mobile-first layout with a collapsible navbar
- **Dark BMX aesthetic** — Bebas Neue headings, neon lime (`#c8ff00`) accents, smooth CSS animations

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| TypeScript | 5.9 | Type safety |
| Vite | 8 | Dev server & bundler |
| Tailwind CSS | 4 | Utility-first styling |

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:5173` by default.

## Project Structure

```
wetlookbmxclothing/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   └── hero.png
│   ├── App.tsx        # Full single-page site (all sections)
│   ├── App.css        # Custom animations & scrollbar styles
│   ├── index.css      # Tailwind CSS import
│   └── main.tsx       # React entry point
├── index.html         # Root HTML (fonts, meta tags)
└── package.json
```

## Sections

| Section | Description |
|---|---|
| **Hero** | Full-screen brand intro with animated tagline |
| **Ticker** | Scrolling marquee strip |
| **Stats** | Follower counts and brand stats |
| **About** | Brand story and social links |
| **Feed** | Live Facebook Page Plugin (timeline) |
| **Videos & Reels** | Embedded feed + quick links to Facebook media |
| **Gallery** | Category cards for Photos, Videos, and Instagram |
| **Contact** | Email (with app picker), location, and social cards |

## Social & Contact

| Platform | Link |
|---|---|
| Facebook | [facebook.com/wetlookbmxclothing](https://www.facebook.com/wetlookbmxclothing) |
| Instagram | [@wetlookbmxclothing](https://www.instagram.com/wetlookbmxclothing/) |
| Email | Deltonespiritu@gmail.com |

---

&copy; 2025 WetLook BMX Clothing · Las Pinas, Philippines
