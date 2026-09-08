# Festava Live

React + Vite + Tailwind CSS rebuild of the Festava Live landing page (Hero, About,
Artists, Schedule, Pricing, Contact), structured to be modular and easy to extend.

## Run it

```bash
npm install
npm run dev
```

Build for production with `npm run build`; preview that build with `npm run preview`.

## Folder structure

```text
src/
├── assets/            images, icons, fonts
├── components/
│   ├── common/         generic, reusable UI: Button, Card, Badge, Field, SectionTitle...
│   ├── layout/          Navbar, Footer
│   └── sections/         one folder per page section (Hero, About, Artists, Schedule, Pricing, Contact)
├── data/               editable content — dates, copy, lineup, schedule, pricing
├── hooks/              reusable logic (useScroll, useDisclosure, useContactForm)
├── utils/               small pure helpers (cn, formatPrice, formatEventLabel)
├── layouts/            MainLayout wraps every page with Navbar + Footer
├── pages/               Home composes the sections in order
├── App.jsx              app shell — only routing/layout, no content
└── main.jsx             React entry point
```

## Editing content

Nothing is hardcoded inside components. To change what's on the page, edit the
matching file in `src/data/`:

| File | Controls |
|---|---|
| `profile.js` | Festival name, tagline, dates, location, about copy, contact info |
| `navigation.js` | Navbar / footer links |
| `artists.js` | Lineup photos, names, roles |
| `schedule.js` | Days, events, times, stages |
| `pricing.js` | Ticket tiers, features, price |
| `socialLinks.js` | Social icon links |

## Artist photos

`artists.js` currently points to placeholder images (`picsum.photos`) so the
gallery renders immediately. Drop real photos into `src/assets/images/` and
update each artist's `image` field, e.g. `/src/assets/images/artist-1.jpg`.

## Design tokens

Colors, radius and shadows are defined once as CSS variables in `src/index.css`
and mapped in `tailwind.config.js` (`bg`, `surface`, `primary`, `secondary`,
`text`, `muted`, `border`...). Change a value in one place to re-theme the
whole site. Display type is "Unbounded", body type is "Inter" (loaded via
Google Fonts in `index.html`).

## Adding a new section

1. Decide if it's a full page section or a reusable piece.
2. Section → new folder in `components/sections/<Name>/<Name>.jsx`.
3. Static content → add a file in `data/`.
4. Reusable logic → `hooks/` (stateful) or `utils/` (pure functions).
5. Reusable UI → `components/common/`.
6. Import and place it in `pages/Home.jsx`. Never add section markup to `App.jsx`.
