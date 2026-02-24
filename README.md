# AudioHaus

---

## Tech Stack

| Layer     | Tool                                                                      |
| :-------- | :------------------------------------------------------------------------ |
| Framework | [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + TypeScript |
| Styling   | [Tailwind CSS v4](https://tailwindcss.com/) (Utility-first, zero-runtime) |
| Forms     | [react-hook-form](https://react-hook-form.com/)                           |
| Email     | [@emailjs/browser](https://www.emailjs.com/docs/sdk/installation/)        |
| Fonts     | Google Fonts — Bebas Neue, IBM Plex Mono                                  |

---

## Getting Started

```bash
npm install
npm run dev       # starts dev server at http://localhost:5173
npm run build     # production build into /dist
npm run preview   # serve the production build locally
```

---

## Project Structure

```text
audiohaus/
├── vite.config.ts
├── tsconfig.json
├── package.json
├── src/
│   ├── components/
│   │   ├── Nav.tsx          # Navigation bar
│   │   ├── Hero.tsx         # Responsive hero + waveform
│   │   ├── Services.tsx     # Services grid
│   │   ├── About.tsx        # Brand bio + stats
│   │   ├── GearMarquee.tsx  # Infinite scroll marquee
│   │   ├── GearInventory.tsx# Full equipment list
│   │   ├── Process.tsx      # Vertical/horizontal workflow
│   │   ├── Shows.tsx        # Client/Event panels
│   │   ├── Contact.tsx      # Hook-form + EmailJS
│   │   └── Footer.tsx       # Copyright + branding
│   ├── hooks/
│   │   └── useFadeIn.ts     # IntersectionObserver logic
│   ├── content.ts           # CENTRAL CONTENT HUB
│   ├── index.css            # Base styles & variables
│   ├── main.tsx             # Entry point
│   └── App.tsx              # Root component
└── index.html
```

---

## Content Management

Everything you see on the site is managed in **`src/content.ts`**. This is the only file you need to touch to update text, swap gear, or change prices.

| Export           | Component       | Controls                                  |
| :--------------- | :-------------- | :---------------------------------------- |
| `SITE`           | Global          | Site name, tagline, copyright             |
| `NAV_LINKS`      | `Nav`           | Top navigation items                      |
| `HERO`           | `Hero`          | Headline, body, CTA, Ticker items         |
| `SERVICES`       | `Services`      | Icon, title, description for each card    |
| `ABOUT`          | `About`         | Brand story and statistic boxes           |
| `GEAR_MARQUEE`   | `GearMarquee`   | The scrolling items in the infinite loop  |
| `GEAR_INVENTORY` | `GearInventory` | Full equipment list (grouped by category) |
| `SHOWS`          | `Shows`         | Both event panels (formal & live)         |
| `PROCESS`        | `Process`       | Workflow steps                            |
| `CONTACT`        | `Contact`       | Form fields, emailjs IDs, social details  |

---

## Styling Conventions

The project uses **Tailwind CSS v4** for all styling:

- **`src/index.css`**: The main entry point. Imports Tailwind and defines the site's theme (colors like `black`, `white`, `grey`, and fonts like `font-mono`, `font-bebas`). It also contains custom `@layer` styles for global resets, the film-grain overlay, and keyframe animations.
- **Utility Classes**: Component layout and styling are handled via Tailwind classes in the `.tsx` files (e.g., `flex`, `grid-cols-4`, `animate-ticker`).
- **Responsive Layout**: Breakpoints are handled inline with prefix modifiers (e.g., `md:grid-cols-2`).
- **Custom Utilities**: Global utilities like `.fade-in` (scroll animation) and `.text-outline` (outlined headers) are defined in `index.css`.
- **Theme Variables**: All custom colors and borders are mapped to Tailwind theme variables (e.g., `border-rule`, `text-grey`).

---

## Components

All components are responsive and utilize the `useFadeIn` hook for scroll-triggered entrance animations. They are strictly data-driven via `content.ts`.

### `<Nav>`

Fixed top bar. Logo on the left, anchor links on the right. Links collapse on screens below 768px (`md:` breakpoint).

### `<Hero>`

Full-viewport split layout featuring an animated SVG waveform (pulsing rects with staggered delays) and a horizontally scrolling ticker of keywords.

### `<Services>`

A grid of service cards (2 cols on mobile, 4 on desktop) with hover interactions.

### `<About>`

A 3-section strip: rotated label, body text, and statistics.

### `<GearMarquee>`

An infinite scrolling banner of flagship equipment items using the `animate-marquee` utility.

### `<GearInventory>`

A categorized list of all equipment. Automatically groups items by the `category` field from `content.ts`.

### `<Process>`

A step-by-step walkthrough of the client workflow with custom gradient accents.

### `<Shows>`

Side-by-side panels for different event types. Supports an `inverted` flag for white-background themes.

### `<Contact>`

A split layout with brand info on the left and a functional inquiry form on the right.

### `<Footer>`

Simple branding and copyright line.

---

## Contact Form

The form uses **react-hook-form** for validation and **EmailJS** for delivery.

### Fields

| Field        | Validation                    |
| :----------- | :---------------------------- |
| Name         | Required                      |
| Email        | Required, valid email pattern |
| Event Type   | Required (dropdown)           |
| Date & Venue | Optional                      |
| Notes        | Optional                      |

### EmailJS Setup

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Add an **Email Service** (note the **Service ID**)
3. Create an **Email Template** using `{{from_name}}`, `{{from_email}}`, `{{event_type}}`, `{{date_venue}}`, `{{notes}}` (note the **Template ID**)
4. Copy your **Public Key** from Account → API Keys
5. Update `src/content.ts` with these credentials.
