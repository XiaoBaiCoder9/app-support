# App Support Center

A static, multi-app support and privacy-policy website for XiaoBaiCoder9 apps, hosted with GitHub Pages. All content is in English.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Support center: app list, in-app FAQs, general questions, contact entry. Includes Pageo, ID Photo, GlowLens, MathGarden, CineCam and PyPal. |
| `privacy.html` | Universal privacy policy plus per-app data practices. Supports `?app=<id>` to highlight one app. |
| `apps-data.js` | Shared registry: site contact info and every app's details, practices and FAQs. |

## Deploy to GitHub Pages

1. Push this repository to `https://github.com/XiaoBaiCoder9/app-support` (branch: `main`).
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source: Deploy from a branch**, choose branch `main` and folder `/ (root)`, then **Save**.
4. Wait a few minutes; the site is available at:
   `https://xiaobaicoder9.github.io/app-support/`

## Add a new app

All app content lives in `apps-data.js`. To list another app:

1. Open `apps-data.js`.
2. Copy an existing object inside the `APPS` array.
3. Fill in the fields:
   - `id` — unique, lowercase, no spaces (used in links and `?app=`).
   - `name`, `tagline`, `category`, `platform`, `accent`, `icon`.
   - `bundleId` — the App Store bundle identifier.
   - `summary` — one-paragraph app description.
   - `practices` — on-device processing, cloud/sync, account, tracking, ads, purchases, data collected.
   - `faqs` — array of `{ q, a }` questions and answers.
4. Save. The support page and privacy policy render the new app automatically; no HTML edit is needed.

Remove the `template-app` example entry before going public.

## Placeholders to replace before release

- `SITE.contactEmail` in `apps-data.js` — currently `2357179575@qq.com`; change only if the support mailbox changes.
- Each app's `appStoreUrl` — add the App Store product link when available. GlowLens currently has no App Store URL until the app record is created.
- Verify every `practices` statement matches what the shipped app actually does.

## Notes

- The site uses only static HTML, CSS and vanilla JavaScript; no build step, no backend, no analytics.
- Links are relative, so the site works under the GitHub Pages subpath `/app-support/`.
