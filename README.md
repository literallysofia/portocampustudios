# Porto Campus Studios

Website for [portocampustudios.com](https://portocampustudios.com), student studios and apartments opposite ISEP, on the Asprela university campus in Porto. Built with [Astro](https://astro.build), in Portuguese (`/`) and English (`/en/`).

## Run it locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-checks and builds to dist/
npm run preview  # serves the production build
```

Pushing to `main` deploys to GitHub Pages (`.github/workflows/deploy.yml`).

## Editing the site

You don't need to touch any code to change the text or photos.

| What | Where |
|---|---|
| Email, phone/WhatsApp, address, Facebook | `src/config.ts` |
| Home page text (both languages) | `src/content/home/pt.md`, `en.md` |
| Rooms: text, features, cover, gallery | `src/content/rooms/{pt,en}/{studio,t0,t4}.md` |
| Services ("o que está incluído") | `src/content/services/pt.md`, `en.md` |
| Location, transport, places to see | `src/content/location/pt.md`, `en.md` |
| FAQ | `src/content/faq/pt.md`, `en.md` |
| Booking page | `src/content/book/pt.md`, `en.md` |
| Buttons, menus and other small labels | `src/i18n/index.ts` |
| URLs (e.g. `/habitacoes/`) | `routeSlugs` in `src/i18n/index.ts` |
| Colours, fonts, spacing | `src/styles/theme.css` |

- **Photos** live in `src/assets/photos/`. Add a file there and reference it from the content file, e.g. `../../../assets/photos/t4/dsc-0985.jpg` (paths are relative to the `.md` file). Every gallery photo needs an `alt` description in both languages.
- **Content is checked at build time**: a missing field or a broken photo path stops `npm run build` with an error that names the file.

## Work-in-progress gate

While the site is being built, production shows a "coming soon" screen with a password and tells search engines not to index it. The dev server never shows it.

- **Change the password:** `node scripts/gate-hash.mjs "new password"` and paste the printed `salt` and `hash` into `siteGate` in `src/config.ts`.
- **Launch:** set `wip` to `false` in `src/config.ts`.

GitHub Pages is static hosting, so the gate keeps casual visitors and search engines out but isn't real access control.
