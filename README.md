# Andhra Cinematic Wedding Invite

A premium, cinematic, fully responsive Hindu Telugu Andhra Pradesh wedding invitation website built with Next.js, Tailwind CSS, and Framer Motion.

## What is inside

- Home, Events, Traditions, Contact pages
- English and Telugu switch
- Hero section with cinematic feel
- Countdown timer
- Background music toggle
- WhatsApp share button
- QR code sharing
- Add-to-calendar button
- Google Maps button
- SEO metadata and Open Graph
- Vercel-ready structure

## Simple folder map

- `app/` = pages
- `components/` = reusable blocks
- `lib/` = data and helpers
- `public/` = images, music, and icons

## Before you run it

1. Install Node.js 18+.
2. Put your real wedding details in `lib/site-data.ts`.
3. Add optional files inside `public/`:
   - `music/wedding-instrumental.mp3`
   - `hero-texture.svg`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel

1. Push this project to GitHub.
2. Open Vercel and choose **New Project**.
3. Import the GitHub repository.
4. Add this environment variable:
   - `NEXT_PUBLIC_SITE_URL=https://your-final-domain.vercel.app`
5. Click **Deploy**.

## Tiny kid version

- `app` = the rooms of the website
- `components` = LEGO blocks
- `public` = the toy box
- Vercel = the online home where the site lives

## Notes

- Replace placeholder names, date, venue, phone, and email.
- If you want the music button to work, add an MP3 file in `public/music/`.
- The QR code and WhatsApp share use your live site link.
