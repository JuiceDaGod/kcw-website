# KCW — Krazy Championship Wrestling website

A plain HTML/CSS/JavaScript website. No build step and nothing to install.
Open `index.html` in a browser to preview it, or upload the whole folder to any web host.

## Pages
| File | Page |
|---|---|
| `index.html` | Home: logo, next show and countdown, roster preview, latest matches, socials |
| `roster.html` | Full roster grid with filters and search. Click a card to open the bio |
| `wrestler.html?w=<slug>` | Individual bio page: photo, bio, stats, socials, KCW intro video, match history |
| `events.html` | Upcoming shows (Sunday Night Swarm) and past events |
| `videos.html` | KCW match videos, official uploads, Tron intros, TikTok intros |
| `about.html` | About KCW / The Hive, our stance, staff, sponsors |
| `contact.html` | Follow / contact on YouTube, TikTok, Instagram, Facebook, Threads, and email |

## Add or edit a wrestler
1. **Photo:** save the image to `assets/roster/` and name it after the wrestler, e.g. `assets/roster/new-guy.jpg`.
   Wide 16:9 images (like the KCW Tron graphics, 1280×720) look best. If you don't have a photo yet,
   leave `photo: ""` and the card shows a "Photo coming soon" silhouette.
2. **Info:** open `data/roster.js` in any text editor (Notepad or TextEdit works). Copy an existing `{ ... },` block,
   paste it where you want the wrestler to appear in the list, and change the fields:

```js
{
  slug: "new-guy",                 // unique, lowercase, dashes. Becomes wrestler.html?w=new-guy
  name: "New Guy",
  nickname: "The Rookie",          // or ""
  category: "Singles",             // Singles | Tag Team | Manager | Announce Team | Officials
  photo: "assets/roster/new-guy.jpg",
  bio: "Official bio text here.",  // "" shows 'Bio coming soon'
  bioSource: "KCW Instagram",
  stats: [
    { label: "Hometown", value: "Providence, RI" },
    { label: "Finisher", value: "The Stinger" }
  ],
  socials: [
    { type: "instagram", url: "https://www.instagram.com/handle" }   // instagram|tiktok|youtube|facebook|threads|x|website
  ],
  intro: { youtube: "VIDEO_ID", tiktok: "https://www.tiktok.com/@krazycwrestling/video/..." },
  matches: [
    { title: "New Guy vs Somebody", youtube: "VIDEO_ID", promotion: "KCW", date: "Dec 6, 2026", kcw: true }
  ],
  partners: ["other-slug"]         // optional: tag partner / manager
},
```

- The YouTube **VIDEO_ID** is the part after `watch?v=` in a YouTube link (for example `gcMrXoAlM04`).
- Matches with `kcw: true` show under "In KCW" and also appear on the Videos page automatically.
- Watch the commas and quotes. Each block ends with `},`. If the roster page goes blank, a comma or quote is usually missing.
- To remove a wrestler, delete their block. To reorder the roster, move the blocks.

## Edit shows, socials, sponsors
Open `data/site.js`:
- `events`: upcoming shows (date format `2026-12-06T19:00:00-05:00`). Weekly Sundays are filled in automatically after the last listed show.
- `pastEvents`, `featured` (official YouTube uploads), `sponsors`, `merchUrl`.
- `socials`: official YouTube, TikTok, Instagram, Facebook and Threads links.
- `email`: the contact address shown on KCW's Facebook page (`KrazyCampionshipWrestling@gmail.com`).

## Upload / host (free options)
- **Netlify Drop:** go to https://app.netlify.com/drop and drag this whole folder onto the page. You get a live link right away, and you can add your own domain later in Netlify settings.
- **GitHub Pages:** create a public repository, upload all files (keep the folder structure), then go to Settings → Pages → Deploy from branch → `main` / root.
- **Cloudflare Pages** (also free) or any regular web host: upload the folder contents to the site's root (`public_html`).

Note: YouTube won't play embedded videos when the site is opened directly from your computer (`file://`), so clicking a video opens it on YouTube instead. Once the site is hosted, videos play right on the page.

## Merchandise

- Official store URL is `merchUrl` in `data/site.js` (KCW's Spreadshop). The Merch page (`merch.html`) is also in the site nav.
- If a wrestler has a verified personal store, add it on their object in `data/roster.js`:

```js
merch: { type: "store", url: "https://example.com/shop", label: "Official merch", image: "assets/merch/name-store.jpg" }
```

- Wrestlers without a verified store use a **concept tee** built from that person's official KCW Tron (or official intro) name logo and photo. No generated likenesses and no invented wordmarks when an official logo exists. Files: the dark-tee mockup (`image`) and the flat official graphic (`design`):

```js
merch: {
  type: "concept",
  image: "assets/merch/slug-tee.jpg",
  design: "assets/merch/slug-design.jpg",
  title: "Name Tron concept tee",
  kind: "tron",  // or "intro-card" if no YouTube Tron was posted
  source: "Official KCW Tron title card (YouTube: ...)"
}
```

Concept orders go by email to `email` in `data/site.js` (subject includes the wrestler's name and design). Replace the images in `assets/merch/` if you print a final design.

## Logo

The site logo is the official KCW YouTube channel avatar (highest-resolution official graphic we could pull from KCW socials), not a photo of the business card. Files live in `assets/img/` (`kcw-logo.png`, `kcw-logo-sm.png`, favicons, `og-image.jpg`, `kcw-banner.jpg` from the official YouTube banner).
