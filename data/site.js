/* =====================================================================
   KCW SITE SETTINGS — socials, shows, videos, sponsors.
   Edit freely; every page reads from here.
   ===================================================================== */
window.KCW_SITE = {
  name: "Krazy Championship Wrestling",
  short: "KCW",
  tagline: "Our roster and fans are one colony. Together, we are The Hive.",
  slogan: "One Team. One Colony. Total Domination!",
  instagramBio: "Official Instagram of KCW · Krazy Championship Wrestling · Our roster and fans are one colony. Together, we are The Hive. Feel the sting!",
  facebookIntro: "Welcome to Krazy Championship Wrestling—where the roster and the fans are one family. Together, we are the Hive! Follow for events, matches and KCW action. One Team. One Colony. Total Domination!",
  email: "KrazyCampionshipWrestling@gmail.com",
  region: "New England",
  merchUrl: "https://krazy-championship-wrestling.myspreadshop.com",
  merchName: "Official KCW Spreadshop",
  merchImage: "assets/img/official-merch.jpg",
  merchSource: "Official KCW Instagram post, Nov 19, 2026",
  merchBlurb: "REP THE HIVE! Official KCW merch is here. Our new AWA-inspired shield pays tribute to old-school pro wrestling with five stars, taped fists, and one fired-up KCW Yellow Jacket. Grab a tee, hoodie, mug, or sticker and show your support for Krazy Championship Wrestling. The Hive is Family.",


  socials: [
    { type: "youtube",   label: "YouTube",   handle: "@krazychampionshipwrestling", url: "https://www.youtube.com/@krazychampionshipwrestling" },
    { type: "tiktok",    label: "TikTok",    handle: "@krazycwrestling",            url: "https://www.tiktok.com/@krazycwrestling" },
    { type: "instagram", label: "Instagram", handle: "@krazychampionshipwrestling", url: "https://www.instagram.com/krazychampionshipwrestling/" },
    { type: "facebook",  label: "Facebook",  handle: "Krazy Championship Wrestling", url: "https://www.facebook.com/p/Krazy-Championship-Wrestling-61593201761055/" },
    { type: "threads",   label: "Threads",   handle: "@krazychampionshipwrestling", url: "https://www.threads.net/@krazychampionshipwrestling" }
  ],

  /* Shows. Dates use ISO format with Eastern Time offset (-05:00 in winter). */
  events: [
    { title: "KCW Sunday Night Swarm — Episode 1 (Series Premiere)", start: "2026-11-27T19:00:00-05:00",
      where: "Streaming on YouTube, Facebook, Instagram & TikTok",
      blurb: "This Black Friday, the opening bell rings for the first time on KCW Sunday Night Swarm. Hard hits. Big personalities. Pro wrestling with something to prove.",
      source: "KCW Instagram & TikTok" },
    { title: "KCW Sunday Night Swarm — Episode 2", start: "2026-11-29T19:00:00-05:00",
      where: "Streaming on YouTube, Facebook, Instagram & TikTok",
      blurb: "Right back in the ring Sunday night, with a new episode every Sunday at 7 PM Eastern.",
      source: "KCW Instagram" }
  ],
  weekly: { title: "Sunday Night Swarm", day: 0, time: "7:00 PM ET", note: "New episode every Sunday at 7 PM ET on all KCW socials." },
  pastEvents: [
    { title: "KCW event (10/18/2026)", date: "2026-10-18", note: "The Primal Mafia vs Jordyn Grange & Chris Black", youtube: "j1RJGqU-XBg" }
  ],

  /* Official KCW YouTube uploads */
  featured: [
    { youtube: "JSQBlBtw4SU", title: "Commissioner John Lowe: Get Ready for the Swarm!", kind: "Short" },
    { youtube: "cr0mFN021Lc", title: "KRAZY CHAMPIONSHIP WRESTLING", kind: "Short" },
    { youtube: "utENrM_GiTQ", title: "The KCW Theme Song", kind: "Short" },
    { youtube: "1FEtsYCvEhE", title: "KCW Breaks Its Silence: Abuse & Bullying Have NO Place in Wrestling!", kind: "Statement" }
  ],
  tiktokHighlights: [
    { url: "https://www.tiktok.com/@krazycwrestling/video/7704129530713181470", title: "The Swarm is Coming! — Sunday Night Swarm teaser", img: "assets/img/sunday-night-swarm.jpg" }
  ],

  sponsors: [
    { name: "Dubby", url: "https://dubby.gg", note: "Code KCW4LIFE for 10% off" },
    { name: "Rogue Energy", url: "https://rogueenergy.com", note: "Code KCW4LIFE for 10% off" },
    { name: "Poggers", url: "https://poggers.shop", note: "Code KCW4LIFE for 10% off" }
  ]
};
