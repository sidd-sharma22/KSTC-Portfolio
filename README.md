# Khatu Shyam Trading Co. (KSTC) — Corporate Portfolio

[![Live Website](https://img.shields.io/badge/Live%20Website-kstco.vercel.app-0F8A63?style=for-the-badge&logo=vercel&logoColor=white)](https://kstco.vercel.app)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://en.wikipedia.org/wiki/HTML5)
[![Vanilla CSS3](https://img.shields.io/badge/Vanilla_CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://en.wikipedia.org/wiki/CSS)
[![JavaScript](https://img.shields.io/badge/ES6_JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-Proprietary-18231F?style=for-the-badge)](LICENSE)

Welcome to the official repository for the **Khatu Shyam Trading Co. (KSTC)** corporate portfolio and wholesale catalog website. 

KSTC is the leading authorized regional wholesale distributor for **Sentini Flopipes**, **Johnson Pedder Sanitary Ware**, and **Polyworld Water Storage Tanks** across the Gwalior and Chambal regions in Madhya Pradesh, India.

- **Production URL:** [https://kstco.vercel.app](https://kstco.vercel.app)
- **Official Store Link:** [https://store-kstco.vercel.app](https://store-kstco.vercel.app)

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Visual Design System: "Emerald & Sand"](#visual-design-system-emerald--sand)
- [Authorized Distributorships & Catalog](#authorized-distributorships--catalog)
- [Project Structure](#project-structure)
- [Getting Started & Local Development](#getting-started--local-development)
- [SEO & Social Previews (Open Graph)](#seo--social-previews-open-graph)
- [Deployment on Vercel](#deployment-on-vercel)
- [Distribution Facility & Contact Desk](#distribution-facility--contact-desk)
- [License & Intellectual Property](#license--intellectual-property)

---

## Overview

The KSTC portfolio website is engineered as a high-performance, single-page corporate portal designed for retail clients, contractors, trade dealers, and plumbing professionals. 

Built entirely with **vanilla web technologies** (HTML5, Vanilla CSS3, and ES6 JavaScript), the site delivers near-instant page loads, zero runtime dependencies, and maximum search engine discoverability.

---

## Key Features

- **Sticky Glassmorphic Header:** Docked frosted navigation bar (`backdrop-filter: blur(16px)`) with brand logo, smooth-scrolling section links, and direct Store CTA.
- **Architectural Hero Section:** Luxury modern bathroom architectural photography paired with a transparent gradient text effect (`background-clip: text`) for high-impact visual presentation.
- **Official Brand Showcase:** Direct partnership badges and links for Sentini Flopipes, Johnson Pedder, and Polyworld Water Tanks.
- **About KSTC Story:** Enterprise background detailing distribution capabilities, regional coverage, and commercial wholesale reliability.
- **3-Column Product Catalog:** Clean 3-column grid displaying all 12 core product lines (Borewell Casings, Column Pipes, UPVC, CPVC, SWR, Sanitary Ware, CP Fittings, and Polyworld Water Tanks) with subtle high-contrast hashtag badges.
- **Interactive Contact & Warehouse Section:** Full-width embedded Google Map coupled with physical warehouse location, operating schedule, and a consolidated **Connect Us** card.
- **Minimalist Sand-Tone Footer:** Single-line copyright bar matching the warm `#FAF8F2` sand canvas with clean typography and authorized wholesale distributor notice.
- **Floating WhatsApp Desk:** Persistent one-click chat button with pre-configured wholesale inquiry message.
- **Trade Notification Modal:** Contextual announcement popup for trade partners and dealers.

---

## Tech Stack

This project deliberately avoids heavy JavaScript frameworks or CSS utility build steps to maximize performance, stability, and longevity:

| Layer | Technology | Details |
|---|---|---|
| **Structure** | Semantic HTML5 | Accessible, SEO-structured semantic markup |
| **Styling** | Pure Vanilla CSS3 | Custom design system using CSS custom properties (`:root`) |
| **Interactivity** | Vanilla ES6 JavaScript | Mobile navigation drawer, notice modal lifecycle |
| **Typography** | Arial Black / Arial | Universally supported, high-contrast, bold enterprise font stack |
| **Icons** | Font Awesome 6.5.1 | Lightweight vector iconography via CDN |
| **Hosting** | Vercel Edge Network | Global CDN deployment with automatic SSL and caching |

---

## Visual Design System: "Emerald & Sand"

The portfolio is built on KSTC's cohesive **Emerald & Sand** color system:

### Color Palette Tokens

| Variable | Hex Value | Usage |
|---|---|---|
| `--primary-emerald` | `#0F8A63` | Primary brand accent, primary CTA buttons, active states, key icons |
| `--hover-emerald` | `#0B7453` | Hover states for primary buttons and interactive links |
| `--dark` | `#18231F` | Deep forest dark tone for main headings and strong text |
| `--sand-bg` | `#FAF8F2` | Warm organic sand background canvas used globally |
| `--white` | `#FFFFFF` | Card surfaces, interactive inputs, and modal backgrounds |
| `--light-emerald` | `#DCF5E9` | Light green tint for badges, subtle fills, and social icons |
| `--border-color` | `#E5EEE8` | Clean, subtle border separators and outlines |
| `--primary-text` | `#1F2937` | High-contrast body copy and form inputs |
| `--secondary-text` | `#64748B` | Supporting descriptions, metadata labels, and footer notes |

### Layout Specifications
- **Container Max-Width:** Strictly configured to **`1170px`** (`--site-max-width: 1170px;`) for optimal visual proportion and readability across desktop viewports.
- **Responsive Breakpoints:** Smooth fluid adjustments for desktops (`>1024px`), tablets (`900px` - `640px`), and mobile devices (`<640px`).

---

## Authorized Distributorships & Catalog

KSTC maintains direct authorized factory distribution channels for:

1. **Sentini Flopipes:**
   - CPVC Hot & Cold Water Piping Systems
   - UPVC Plumbing & Pressure Pipes
   - SWR Drainage & Soil Waste Systems
   - Submersible Column Pipes
   - Borewell Casing Pipes
   - Underground Drainage (UGD) Systems
   - Agricultural Piping Networks
2. **Johnson Pedder:**
   - Vitreous China Water Closets (Wall-hung, One-piece, Floor-mount)
   - Designer Ceramic Washbasins
   - Urinals & Commercial Sanitary Fixtures
   - Premium Chrome-Plated (CP) Bathroom Faucets & Diverters
3. **Polyworld Water Tanks:**
   - Multi-layer Heavy-Duty Rotomolded Water Storage Tanks
   - UV-Stabilized Anti-Bacterial Food-Grade Storage Solutions

---

## Project Structure

```text
KSTC-Portfolio/
├── index.html                 # Main single-page corporate portal and catalog
├── style.css                  # Pure Vanilla CSS stylesheet (Emerald & Sand system, 1170px layout)
├── script.js                  # Vanilla JavaScript logic (mobile drawer, notice modal)
├── README.md                  # Comprehensive portfolio documentation (this file)
├── CLI_Git-Vercel.md          # Git and Vercel CLI deployment quick-reference
├── .gitignore                 # Standard Git ignore file
└── Resources/                 # Media assets, product images, and branding marks
    ├── hero-bathroom.jpg      # High-resolution aesthetic bathroom hero photograph
    ├── og-preview.png         # Open Graph preview card image (1200x630 px)
    ├── KSTC/                  # Official KSTC logo and brand marks
    ├── Sentini/               # Sentini Flopipes product line photography & logo
    ├── Johnson/               # Johnson Pedder sanitary ware images & logo
    ├── Polyworld/             # Polyworld Water Tanks logo & graphics
    └── PaymentLogo/           # Verified digital payment provider icons
```

---

## Getting Started & Local Development

Because this project is built entirely on native web standards, **no build process, compilation, or package manager installation is required**.

### Option 1: Direct File Preview
Simply double-click `index.html` in your file manager, or run:

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Option 2: Local HTTP Server (Recommended)
Running through an HTTP server ensures correct handling of relative paths, iframes, and local storage:

```bash
# Using Node.js npx serve
npx serve .

# Or using Python 3
python -m http.server 3000

# Or using VS Code Live Server extension
# Click "Go Live" on the bottom status bar
```

Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## SEO & Social Previews (Open Graph)

The portfolio includes rich search engine optimization (SEO) and social media sharing tags configured in the `<head>` of `index.html`:

- **Canonical URL:** `https://kstco.vercel.app/`
- **Theme Color:** `#0F8A63` (matches browser mobile header bars)
- **Open Graph (WhatsApp, Facebook, LinkedIn, Telegram):**
  - Image: `https://kstco.vercel.app/Resources/og-preview.png`
  - Dimensions: 1200 × 630 px
  - Title: *Khatu Shyam Trading Co. — Authorized Wholesale Distributor*
  - Type: `website`
- **Twitter / X Cards:**
  - Card Type: `summary_large_image`
  - Image: `https://kstco.vercel.app/Resources/og-preview.png`

---

## Deployment on Vercel

The portfolio is deployed directly on **Vercel** with zero build configuration needed:

### Using Git Integration (Automatic)
Push commits to the connected repository branch (`main` or `master`); Vercel automatically deploys updates to [https://kstco.vercel.app](https://kstco.vercel.app).

### Using Vercel CLI (Manual)
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy preview build
vercel

# Deploy to production
vercel --prod
```

---

## Distribution Facility & Contact Desk

Wholesale trade inquiries, authorized price lists, and contractor orders can be placed directly with the distribution facility:

- **Facility Address:** Radhapuram, Vaibhav Enclave, Maharajpura, near Amity University, Gwalior – 474005, Madhya Pradesh, India
- **Operating Schedule:** Monday through Saturday, 10:00 AM – 05:00 PM IST
- **Primary Phone:** [+91 93404 86840](tel:+919340486840)
- **Alternate Phone:** [+91 90749 12742](tel:+919074912742)
- **Official Email:** [kstradingco88@gmail.com](mailto:kstradingco88@gmail.com)
- **WhatsApp Support:** [+91 93404 86840](https://wa.me/919340486840)
- **Google Maps:** [Get Directions to Showroom](https://maps.app.goo.gl/HMytKeSHLpnLAgAp7)
- **Online E-Commerce Store:** [https://store-kstco.vercel.app](https://store-kstco.vercel.app)

---

## License & Intellectual Property

© 2026 **Khatu Shyam Trading Co.** All Rights Reserved.  
Authorized Wholesale Distributor for Sentini Flopipes, Johnson Pedder Sanitary Ware, and Polyworld Water Tanks.

All manufacturer logos, brand trademarks, and product names belong to their respective owners and are utilized under authorized regional distribution agreements.
