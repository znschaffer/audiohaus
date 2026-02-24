# AudioHaus

---

## Tech Stack

| Layer     | Tool                                                                      |
| --------- | ------------------------------------------------------------------------- |
| Framework | [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + TypeScript |
| Styling   | CSS Modules (scoped, per-component) + global `index.css`                  |
| Forms     | [react-hook-form](https://react-hook-form.com/)                           |
| Email     | [@emailjs/browser](https://www.emailjs.com/docs/sdk/installation/)        |
| Fonts     | Google Fonts — Bebas Neue, IBM Plex Mono                                  |

---

## Getting Started

```bash
pnpm install
pnpm run dev       # starts dev server at http://localhost:5173
pnpm run build     # production build into /dist
pnpm run preview   # serve the production build locally
```

---

## Project Structure

```
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

## Sections

### `<Nav>`

Fixed top bar. Logo on the left, anchor links on the right. Links collapse (hidden) on mobile below 900 px.

### `<Hero>`

Full-viewport split layout:

- **Left column** — eyebrow label, large Bebas Neue headline with an outlined word, body copy, and a CTA button linking to `#contact`.
- **Right column** — 15-bar animated SVG waveform (each bar pulses with a staggered `animation-delay`), plus a horizontally scrolling ticker of keywords at the bottom.

The ticker list in `content.ts` (`HERO.ticker`) is automatically doubled in the component to create a seamless infinite loop.

### `<Services>`

A 4-column grid (2-column on mobile). Each card is driven by an item in `SERVICES`. Cards stagger their fade-in using an inline `transitionDelay` calculated from the array index.

### `<About>`

A 3-column strip: a vertical rotated label, a large-text paragraph with an italic emphasis clause, and a column of three stats. All values are sourced from `ABOUT` in `content.ts`.

### `<GearMarquee>`

A horizontally scrolling banner of equipment names in large outlined Bebas Neue text. Items hover to reveal solid fill. Data comes from `GEAR_MARQUEE` (a short curated list). The array is doubled in the component for a seamless loop.

### `<GearInventory>`

A **full equipment inventory** section (`#gear`), added as a new section beyond the original HTML. Items are stored in `GEAR_INVENTORY` as an array of objects:

```ts
type GearItem = {
  name: string; // e.g. "Shure SM58 Dynamic Vocal"
  category: string; // e.g. "Microphones"
  qty?: string; // e.g. "×16"
};
```

The component groups items by `category` at render time and displays each group as a labeled column in a responsive 4-column grid (3 → 2 → 1 at breakpoints). To add or remove equipment, edit only the `GEAR_INVENTORY` array.

### `<Process>`

Three-step "How It Works" walkthrough in a 3-column grid. Each step has a large ghost number, title, and description. A white-to-transparent gradient line sits above each card. Data comes from `PROCESS.steps`.

### `<Shows>`

Two side-by-side panels — one dark (default), one inverted (white background). Each panel shows a tag, large title, description, and a set of category pills. Controlled by the `SHOWS` array; the `inverted: true` flag on an item applies the inverted colour scheme.

### `<Contact>`

Two-column layout:

- **Left** — `"Let's Talk Sound"` heading (with an outlined word), plus contact details (email, phone, location, availability).
- **Right** — enquiry form (see below).

### `<Footer>`

Simple two-text footer bar. Both strings (`copyright`, `footer`) come from `SITE` in `content.ts`.

---

## Contact Form

The form uses **react-hook-form** for validation and **EmailJS** for delivery.

### Fields

| Field        | Validation                         |
| ------------ | ---------------------------------- |
| Name         | Required                           |
| Email        | Required, must match email pattern |
| Event Type   | Required (select dropdown)         |
| Date & Venue | Optional                           |
| Notes        | Optional (textarea)                |

Validation errors appear inline beneath each field. The submit button is disabled while sending.

### Submission flow

```
User fills form
  → handleSubmit (react-hook-form validates)
    → emailjs.send(serviceId, templateId, templateParams, publicKey)
      → success: show "✓ Inquiry sent" message, reset form
      → error:   show error message with direct mailto fallback
```

The template parameters sent to EmailJS are:

```ts
{
  from_name:  data.name,
  from_email: data.email,
  event_type: data.eventType,
  date_venue: data.dateVenue,
  notes:      data.notes,
}
```

### EmailJS Setup

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Add an **Email Service** (Gmail, Outlook, etc.) — note the **Service ID**
3. Create an **Email Template** — use `{{from_name}}`, `{{from_email}}`, `{{event_type}}`, `{{date_venue}}`, `{{notes}}` as template variables — note the **Template ID**
4. Copy your **Public Key** from Account → API Keys
5. Open `src/content.ts` and fill in:

```ts
// src/content.ts
export const CONTACT = {
  // ...
  emailjs: {
    serviceId: "YOUR_SERVICE_ID",
    templateId: "YOUR_TEMPLATE_ID",
    publicKey: "YOUR_PUBLIC_KEY",
  },
};
```

---

## Animations

### Scroll fade-in

Elements with the class `fade-in` start invisible (`opacity: 0`, `translateY(24px)`) and transition to visible when they enter the viewport. This is wired up by the `useFadeIn` hook, which is called once from `App.tsx` on mount.

The hook uses `IntersectionObserver` with a `0.12` threshold and `unobserve`s each element after it has animated, so it only fires once per element.

### Waveform

The hero SVG waveform uses `scaleY` keyframes (`0.15 → 1 → 0.15`) with each bar offset by `0.08s`. The delays are computed from the bar's index and set as an inline `style` on each `<rect>`.

### Gear marquee

Both the hero ticker and the gear marquee use a CSS `translateX(0 → -50%)` keyframe animation on a container that holds two copies of the item list, creating a seamless loop.

---

## Styling Conventions

The project uses a consolidated styling approach:

- **`src/index.css`**: Contains global design tokens (colors, borders), a CSS reset, and the film-grain overlay.
- **In-Component CSS**: Each component's styles are defined within its `.tsx` file using `<style>` tags. This keeps the logic and presentation together without the need for separate `.module.css` files.
- **Global Variables**: All component styles utilize the CSS variables defined in `index.css` (e.g., `var(--rule)`, `var(--black)`).
- **Responsive Design**: Mobile-first grid adjustments are handled via `@media` queries within each component.
- **Animations**: Scroll-triggered fade-ins (0.7s duration) and custom SVG/Ticker animations are scoped to their respective components.
