/* =====================================================================
   KCW ROSTER DATA  —  edit this file to add / change wrestlers.
   Every page on the site reads from here. See README.md for a walkthrough.

   Each wrestler is one { ... } block inside KCW_ROSTER. Fields:
     slug        unique id used in the URL (lowercase-with-dashes)  REQUIRED
     name        ring name                                            REQUIRED
     nickname    e.g. "The Wildhound" (leave "" if none)
     category    "Singles" | "Tag Team" | "Manager" | "Announce Team" | "Officials"
     photo       path to image, e.g. "assets/roster/my-wrestler.jpg"  ("" = 'Photo coming soon')
     bio         official KCW bio text ("" = 'Bio coming soon')
     bioSource   where the bio came from (shown under the bio)
     stats       list of { label, value, source }  e.g. Hometown, Height, Finisher
     socials     list of { type, url }  type = instagram|tiktok|youtube|facebook|x|website
     intro       { youtube: "VIDEO_ID", tiktok: "https://..." }  KCW intro / Tron video
     matches     list of { title, youtube:"VIDEO_ID" or url:"https://...", promotion, date, kcw:true/false, note }
     partners    list of slugs this person is aligned with (tag partner, manager...)
   ===================================================================== */

const KCW_TT = "https://www.tiktok.com/@krazycwrestling/video/";
const KCW_CAGEMATCH = "Cagematch.net";

window.KCW_ROSTER = [
  {
    slug: "vertabreaker", name: "Vertabreaker", nickname: "Local Hardcore Legend", category: "Singles",
    photo: "assets/roster/vertabreaker.jpg",
    bio: "This local hardcore legend has recently made his return and is picking up right where he left off. He has shown already that nobody is safe. He has vowed to get Primal and solve any Conflict in KCW.",
    bioSource: "KCW TikTok/Instagram 'Introducing the KCW Roster' (Sept 27, 2026)",
    stats: [
      { label: "Hometown", value: "Providence, Rhode Island", source: KCW_CAGEMATCH },
      { label: "Height / Weight", value: "6'1\" / 220 lbs", source: KCW_CAGEMATCH },
      { label: "Pro debut", value: "March 3, 1996", source: KCW_CAGEMATCH },
      { label: "Trained by", value: "Bobby Moran, Jak Savage, Sandy Starr, Killer Kowalski, Rocco Rock, Jimmy Snuka", source: KCW_CAGEMATCH },
      { label: "Signature moves", value: "Bicycle Dropkick, Cottonmouth Killer, The Spinal Tap", source: KCW_CAGEMATCH },
      { label: "Nicknames", value: "The One Man Riot, Verte 840, The 4-Dimension Wrestler", source: KCW_CAGEMATCH }
    ],
    socials: [
      { type: "facebook", url: "https://www.facebook.com/cmcverte" },
      { type: "youtube", url: "https://www.youtube.com/@egotv-presents" },
      { type: "website", url: "https://www.verte840.com" }
    ],
    merch: { type: "concept", image: "assets/merch/vertabreaker-tee.jpg", title: "Vertabreaker concept tee" },
    intro: { youtube: "gcMrXoAlM04", tiktok: KCW_TT + "7690353191942196511" },
    matches: [
      { title: "Vertabreaker vs Johnny Hellhound (Primal Conflict Championship)", youtube: "YXmO4RCDfRE", promotion: "KCW", kcw: true },
      { title: "Vertabreaker vs The Fly Guy (TV Edit)", youtube: "WWOweQHSyGg", promotion: "KCW", kcw: true },
      { title: "Vertabreaker & Havok vs Dom Paretti & Jordyn Grange (TV Edit)", youtube: "JslPWMec9p4", promotion: "KCW", kcw: true },
      { title: "Vertabreaker & Havok vs Jordyn Grange & Dom Paretti (GoPro cam)", youtube: "xuthcVpsKuo", promotion: "KCW", kcw: true },
      { title: "Vertabreaker vs Jordyn Grange (Street Fight) — Ocean State Showdown", youtube: "LN9qw2mBeHc", promotion: "AWL", date: "Aug 16, 2026" },
      { title: "Vertabreaker vs Thrash — The Primal Thumbtack Match", youtube: "d23q0HGXOIQ", promotion: "EGOtv" },
      { title: "The Vertabreaker vs Suicidal Silva (Hardcore Match)", youtube: "-KIegjFhYGw", promotion: "All Axxess" },
      { title: "PrimalMania — Vertabreaker vs Tiger Khan vs Kevin Karizma vs PR Kid", youtube: "QKxCE1Jn5bA", promotion: "PCW", date: "Dec 1, 2001" },
      { title: "Vertabreaker vs Rob Roberts", youtube: "sucJ0kBxitk", promotion: "YPW", date: "Dec 19, 1999" }
    ]
  },
  {
    slug: "johnny-rivera", name: "Johnny Rivera", nickname: "The Wildhound", category: "Singles",
    photo: "assets/roster/johnny-rivera.jpg",
    bio: "Making a name for himself by working all over New England, The Wildhound wants to show he is the leader of the pack. All that oppose him need to be careful or they might get bit.",
    bioSource: "KCW TikTok 'Introducing the KCW Roster' (Oct 16, 2026)",
    stats: [], socials: [],
    merch: { type: "concept", image: "assets/merch/johnny-rivera-tee.jpg", title: "Johnny Rivera concept tee" },
    intro: { youtube: "eVNoRMPwnX0", tiktok: KCW_TT + "7697321504459066655" },
    matches: [
      { title: "\"The Wild Hound\" Johnny Rivera vs Rock Paint", youtube: "Eo-EttpYnvs", promotion: "XUC Pro Wrestling" },
      { title: "\"The Wild Hound\" Johnny Rivera vs Jora Johl — Born Again '24", youtube: "oAi1dilqlXg", promotion: "Indie" },
      { title: "The Last Sheikh Ahmed Jordan vs Johnny Rivera (Chad Brown Block Party, Providence RI)", youtube: "MEWr80EvsoE", promotion: "Indie" },
      { title: "The Last Sheikh Ahmed Jordan vs Johnny Rivera (VFW Post 4651, Cranston RI)", youtube: "yvNg-LsHI-E", promotion: "Indie" },
      { title: "Ahmed Jordan vs Johnny Rivera (Seekonk, MA)", youtube: "eY5RpWRdfQg", promotion: "Indie" },
      { title: "The Wild Hound Johnny Rivera vs 5 Star Jase", youtube: "FKW8qXVPMa4", promotion: "Indie" }
    ]
  },
  {
    slug: "steve-stallion", name: "Steve Stallion", nickname: "Studdly", category: "Singles",
    photo: "assets/roster/steve-stallion.jpg",
    bio: "Everyone knows Stud. Not only is he a 30 plus year vet but he himself was the CEO of the most extreme, hardcore and memorable promotion in New England. Just what are his plans in KCW? Things might get a little primal.",
    bioSource: "KCW TikTok 'Introducing the KCW Roster' (Oct 15, 2026)",
    stats: [ { label: "Experience", value: "30+ years", source: "KCW official bio" } ],
    socials: [],
    merch: { type: "concept", image: "assets/merch/steve-stallion-tee.jpg", title: "Steve Stallion concept tee" },
    intro: { youtube: "M_5V6V4TDcY", tiktok: KCW_TT + "7697027654116986142" },
    matches: [
      { title: "Steve Stallion (Champ) vs Dambula — NEWA Title, Cranston RI", youtube: "Pa6SKOdDDgc", promotion: "NEWA" },
      { title: "Steve Stallion & Dave Donovan vs Robby Cage & Greg Drago", youtube: "vv4zY-MIa38", promotion: "NEWA", date: "May 12, 2001" },
      { title: "Studly Steve Stallion at AWL Ocean State Showdown", youtube: "kQXh-_UIdPs", promotion: "AWL", date: "Aug 16, 2026" },
      { title: "\"Studly\" Steve Stallion promo", youtube: "xT6XxU8QFOE", promotion: "APCW/NGW", date: "Jul 26, 2003" }
    ]
  },
  {
    slug: "thrash", name: "Thrash", nickname: "", category: "Singles",
    photo: "assets/roster/thrash.jpg",
    bio: "With over 30 years in the business Thrash is still a threat to anyone who opposes him. Having held multiple titles from multiple promotions in the area maybe before he calls it a day he has another title to add to his list. Nobody is too far away from a punch to the throat.",
    bioSource: "KCW TikTok 'Introducing the KCW Roster' (Oct 14, 2026)",
    stats: [ { label: "Experience", value: "30+ years", source: "KCW official bio" } ],
    socials: [],
    merch: { type: "concept", image: "assets/merch/thrash-tee.jpg", title: "Thrash concept tee" },
    intro: { youtube: "iqujokxAqSI", tiktok: KCW_TT + "7696567387209977118" },
    matches: [
      { title: "Vertabreaker vs Thrash — The Primal Thumbtack Match", youtube: "d23q0HGXOIQ", promotion: "EGOtv" },
      { title: "RWA April Reign 2023 — The Mighty Bosch vs Thrash", youtube: "ElPLruyJJAU", promotion: "RWA", date: "2023" },
      { title: "RWA Luck is for Losers — The Uncut Gems vs The Mighty Bosch & Thrash", youtube: "sMRp5LPvwsA", promotion: "RWA" },
      { title: "RWA Wrestle Prom — T Phoenix & Cipriano Abruzzi vs The Mighty Bosch & Thrash", youtube: "potYDcIJGJY", promotion: "RWA" }
    ]
  },
  {
    slug: "havoc", name: "Havoc", nickname: "The Original Thug", category: "Singles",
    photo: "assets/roster/havoc.jpg",
    bio: "He is coming to bring the pain, hardcore to your brain. No one is safe around this hired thug. All eyes are on him and his fellow Convicted Felon Manny Nix. Will they take the tag team division over or will they take over the singles ranks? He said his pain runs deep and he is gonna share it with everyone.",
    bioSource: "KCW TikTok 'Introducing the KCW Roster' (Oct 3, 2026)",
    stats: [ { label: "Tag team", value: "The Convicted Felons (with Manny Nix)", source: "KCW official bio" } ],
    socials: [], partners: ["manny-nix"],
    merch: { type: "concept", image: "assets/merch/havoc-tee.jpg", title: "Havoc concept tee" },
    intro: { youtube: "heX8-bNNW_g", tiktok: KCW_TT + "7692486445906283807" },
    matches: [
      { title: "Vertabreaker & Havok vs Dom Paretti & Jordyn Grange (TV Edit)", youtube: "JslPWMec9p4", promotion: "KCW", kcw: true },
      { title: "\"Franchise\" Brian Sire vs \"The Original Thug\" Havoc", youtube: "0PvW2D3rkcY", promotion: "AWL" },
      { title: "NQW Freakin Frenzy — Havoc vs Sheik Ahmed Jordan", youtube: "GjfRE63RnSE", promotion: "NQW", date: "Apr 26, 2026" },
      { title: "NQW War Of Survival — Team Havoc vs Team Nix", youtube: "y7QWjMyPzM0", promotion: "NQW", date: "Nov 24, 2024" },
      { title: "6-Man Tag: Mr. X Jr, Sgt. Stryker & Blaze Brown vs Low Life, Havoc & Sycho Nix", youtube: "ndtL9BYwaPM", promotion: "Indie" }
    ]
  },
  {
    slug: "manny-nix", name: "Manny Nix", nickname: "Sycho", category: "Singles",
    photo: "assets/roster/manny-nix.jpg",
    bio: "From the 5150, he lives up to his name. Making up one half of the Convicted Felons with Havoc, Nix is not only a threat to the tag division but is a credible challenger to any singles title as well.",
    bioSource: "KCW TikTok 'Introducing the KCW Roster' (Oct 5, 2026)",
    stats: [ { label: "Tag team", value: "The Convicted Felons (with Havoc)", source: "KCW official bio" } ],
    socials: [], partners: ["havoc"],
    merch: { type: "concept", image: "assets/merch/manny-nix-tee.jpg", title: "Manny Nix concept tee" },
    intro: { youtube: "t1lShbKGjIY", tiktok: KCW_TT + "7693281539060272415" },
    matches: [
      { title: "NQW WrestleversarY IV — Manny Nix vs Outlander 1", youtube: "BjW_O1rxY38", promotion: "NQW", date: "Sep 5, 2026" },
      { title: "NQW Freakin Frenzy — Tonto vs Manny Nix", youtube: "R7JilGxNUQA", promotion: "NQW", date: "Apr 26, 2026" },
      { title: "NQW WrestleversarY III — Manny Nix vs Corey Briggs", youtube: "xskZ91iKUL4", promotion: "NQW", date: "Aug 23, 2025" },
      { title: "NQW Madness — BadPsycho vs Manny Nix", youtube: "oXAo684ovPM", promotion: "NQW", date: "May 25, 2025" },
      { title: "NQW WrestleversarY II — Brutus Sane vs Manny Nix", youtube: "Bi8dx0E5KoI", promotion: "NQW", date: "Aug 25, 2024" },
      { title: "NQW War Of Survival — Team Havoc vs Team Nix", youtube: "y7QWjMyPzM0", promotion: "NQW", date: "Nov 24, 2024" }
    ]
  },
  {
    slug: "kainan-bek", name: "Kainan Bek", nickname: "", category: "Singles",
    photo: "assets/roster/kainan-bek.jpg",
    bio: "Standing at 6'6\" and weighing in at 450 lbs. this mammoth monster is a force to be reckoned with. 2 things are always around Kainan, bodies laid out in his wake and Brian Cross.",
    bioSource: "KCW TikTok 'Introducing the KCW Roster' (Oct 2, 2026)",
    stats: [
      { label: "Height", value: "6'6\"", source: "KCW official bio" },
      { label: "Weight", value: "450 lbs", source: "KCW official bio" },
      { label: "Manager", value: "\"The Secret Sauce\" Brian Cross", source: "KCW official bio" }
    ],
    socials: [], partners: ["brian-cross"],
    merch: { type: "concept", image: "assets/merch/kainan-bek-tee.jpg", title: "Kainan Bek concept tee" },
    intro: { youtube: "p6ovhR8_eZU", tiktok: KCW_TT + "7691993396876971294" },
    matches: [
      { title: "Kainan Bek vs Lightning 23", youtube: "h6BiPCc40-c", promotion: "KCW", kcw: true },
      { title: "Kainan Bek vs Dos Locos", youtube: "BKqkhJxAtRU", promotion: "KCW", kcw: true },
      { title: "Kainan Bek vs 3", youtube: "GKK3-R5gJBQ", promotion: "KCW", kcw: true },
      { title: "5-Way Elimination Match (SNW World Openweight Championship)", youtube: "4HpJfuRJDCA", promotion: "SNW", date: "2026" },
      { title: "Derrick Conway & Morgan Kennedy Kilmarnock (c) vs Kainan Bek & Alessandro Russo — OCW Tag Team Title, Cage Match", url: "https://brainbustr.com/en/fights/144813", promotion: "OCW", date: "Feb 28, 2026", note: "Match record (Brainbustr)" }
    ]
  },
  {
    slug: "brian-cross", name: "Brian Cross", nickname: "The Secret Sauce", category: "Manager",
    photo: "assets/roster/brian-cross.jpg",
    bio: "He refuses to follow any scripts and he is a legal team's worst nightmare. He has one of the strongest minds and the brawn to back it up (in the form of one Kainan Bek). What does he have in his bag of tricks? Soon everyone will find out.\n\nOn social media he is @VoiceOfHulk. In his own words, from his X profile: \"I'm the guy that does the best Hulk Hogan impression on the planet!\"",
    bioSource: "KCW TikTok 'Introducing the KCW Roster' (Oct 2, 2026). Additional @VoiceOfHulk line from his official X profile.",
    stats: [
      { label: "Role", value: "Manager of Kainan Bek", source: "KCW official bio" },
      { label: "Also known as", value: "@VoiceOfHulk", source: "Confirmed by Brian Cross" }
    ],
    socials: [
      { type: "instagram", url: "https://www.instagram.com/voiceofhulk/", handle: "@voiceofhulk" },
      { type: "tiktok", url: "https://www.tiktok.com/@voiceofhulk", handle: "@voiceofhulk" },
      { type: "youtube", url: "https://www.youtube.com/@VoiceOfHulk", handle: "@VoiceOfHulk" },
      { type: "youtube", url: "https://www.youtube.com/user/juicedagod", handle: "From The Bottom Of The Rabbit Hole" },
      { type: "x", url: "https://x.com/VoiceOfHulk", handle: "@VoiceOfHulk" },
      { type: "facebook", url: "https://www.facebook.com/FromTheBottomOfTheRabbitHole/", handle: "From The Bottom Of The Rabbit Hole" },
      { type: "threads", url: "https://www.threads.net/@voiceofhulk", handle: "@voiceofhulk" },
      { type: "twitch", url: "https://www.twitch.tv/bottomoftherabbithole", handle: "BottomOfTheRabbitHole" }
    ],
    partners: ["kainan-bek"],
    merch: { type: "concept", image: "assets/merch/brian-cross-tee.jpg", title: "Brian Cross concept tee" },
    intro: { youtube: "VzPsP2-eRgE", tiktok: KCW_TT + "7692230637360532767" },
    matches: [
      { title: "Hulk Hogan hears the greatest Hulk Hogan impression of all time.", youtube: "olOSega1t-k", promotion: "VoiceOfHulk", note: "YouTube appearance" }
    ]
  },
  {
    slug: "blaze-brown", name: "Blaze Brown", nickname: "Fear the Flame", category: "Singles",
    photo: "assets/roster/blaze-brown.jpg",
    bio: "From the depths of hell comes the devil's henchman. If you aren't intrigued when he comes to the ring you will be trying to figure out what is the connection between him, his skull and his Druid that accompany him.",
    bioSource: "KCW TikTok 'Introducing the KCW Roster' (Oct 2, 2026)",
    stats: [], socials: [],
    merch: { type: "concept", image: "assets/merch/blaze-brown-tee.jpg", title: "Blaze Brown concept tee" },
    intro: { youtube: "QkNiY2OdNRo", tiktok: KCW_TT + "7692229309993422111" },
    matches: [
      { title: "Angel The Icon (c) vs Blaze Brown — XUC TV Championship (Resurgence)", youtube: "0tTMHRD0L3g", promotion: "XUC Pro Wrestling" },
      { title: "Blaze Brown vs Orange Rush (West Warwick, RI)", youtube: "kQkm09ovvmY", promotion: "Indie" },
      { title: "Blaze Brown vs Oro", youtube: "G6UO0EMB09k", promotion: "Indie" },
      { title: "6-Man Tag: Mr. X Jr, Sgt. Stryker & Blaze Brown vs Low Life, Havoc & Sycho Nix", youtube: "ndtL9BYwaPM", promotion: "Indie" }
    ]
  },
  {
    slug: "twisted-jester", name: "The Twizsted Jester", nickname: "", category: "Singles",
    photo: "assets/roster/twisted-jester.jpg",
    bio: "He has brought a literal reign of terror all over the area. Nothing is certain around this crazy individual other than whoever he invites into his dark carnival isn't safe.",
    bioSource: "KCW TikTok 'Introducing the KCW Roster' (Oct 1, 2026)",
    stats: [], socials: [],
    merch: { type: "concept", image: "assets/merch/twisted-jester-tee.jpg", title: "The Twizsted Jester concept tee" },
    intro: { youtube: "OCi3BR3D2gE", tiktok: KCW_TT + "7691704469452639518" },
    matches: [
      { title: "\"Notorious\" Rambo Godfrey (c) vs Twisted Jester — SPW Heavyweight Championship Open Challenge", youtube: "FHegOujagds", promotion: "Showcase Pro Wrestling" },
      { title: "G.A. West \"Osirus\" vs Twisted Jester", youtube: "X1vn1aS6CqI", promotion: "Showcase Pro Wrestling", date: "May 6, 2026" },
      { title: "\"Journeyman\" Logan Machina vs Twisted Jester", youtube: "VjI3b6uDgoU", promotion: "Showcase Pro Wrestling", date: "May 2, 2026" },
      { title: "Jay Evans w/ Annabelle vs Twisted Jester", youtube: "SJzAstVknXE", promotion: "Showcase Pro Wrestling" }
    ]
  },
  {
    slug: "cletus", name: "Cletus", nickname: "The Bayou's Favorite Son", category: "Singles",
    photo: "assets/roster/cletus.jpg",
    bio: "This lovable hillbilly is making a name for himself all over the area. Drinking beer, fighting and getting paid sounds like a party to him. There's only one way to make the party even better: if his buddy Gunner joins up with him and we go to CAMO COUNTRY. And if you go get a delicious sandwich from D'Angelo's, be sure to tell them Cletus sent you.",
    bioSource: "KCW TikTok 'Introducing the KCW Roster' (Sept 30, 2026)",
    stats: [
      { label: "Hometown", value: "Warwick, Rhode Island", source: KCW_CAGEMATCH },
      { label: "Height / Weight", value: "6'2\" / 350 lbs", source: KCW_CAGEMATCH },
      { label: "Pro debut", value: "April 22, 2023", source: KCW_CAGEMATCH },
      { label: "Style", value: "Brawler, Powerhouse", source: KCW_CAGEMATCH },
      { label: "Signature moves", value: "The Everglades, Hook Line And Sinker", source: KCW_CAGEMATCH },
      { label: "Tag team", value: "Camo Country (with Gunner)", source: "KCW official bio" }
    ],
    socials: [
      { type: "instagram", url: "https://www.instagram.com/cletus_the_wrestler" },
      { type: "tiktok", url: "https://www.tiktok.com/@cletusthewrestler" },
      { type: "youtube", url: "https://www.youtube.com/@CletusTheWrestler" },
      { type: "x", url: "https://x.com/CletusWrestles" }
    ],
    merch: { type: "concept", image: "assets/merch/cletus-tee.jpg", title: "Cletus concept tee" },
    intro: { youtube: "_n4nBcB9FWo", tiktok: KCW_TT + "7691430710262959391" },
    matches: [
      { title: "C.I.A vs Camo Country (#1 Contenders Match)", youtube: "JvaWkFFsNr4", promotion: "SNW" },
      { title: "Camo Country vs The Ultimate Powers (Jobz & Mullet Man)", youtube: "aoqKTpCErLE", promotion: "GMW", date: "May 19, 2024" },
      { title: "Cletus vs Elia Markopoulos", youtube: "e351JrXXI8E", promotion: "Top Rope Promotions", date: "Sep 8, 2023" },
      { title: "Cletus & Koosh Bandicoot vs The Neighborhood (Kid V & Mani Aries)", youtube: "yk8uoGh6AiU", promotion: "Top Rope Promotions", date: "Jun 2, 2023" }
    ]
  },
  {
    slug: "jordyn-grange", name: "Jordyn Grange", nickname: "Fight Mode", category: "Singles",
    photo: "assets/roster/jordyn-grange.jpg",
    bio: "This 2nd generation talent might have started his career in not the best way calling out Vertabreaker. What can be said about Jordyn is he's always up for a challenge and he doesn't give up.",
    bioSource: "KCW TikTok 'Introducing the KCW Roster' (Sept 30, 2026)",
    stats: [ { label: "Family", value: "2nd generation; brother of Cody Grange", source: "KCW official bios" } ],
    socials: [], partners: ["cody-grange"],
    merch: { type: "concept", image: "assets/merch/jordyn-grange-tee.jpg", title: "Jordyn Grange concept tee" },
    intro: { youtube: "RjA4ANQq0Fc", tiktok: KCW_TT + "7691426158264454431" },
    matches: [
      { title: "KCW (10/18/2026) — The Primal Mafia vs Jordyn Grange & Chris Black", youtube: "j1RJGqU-XBg", promotion: "KCW", date: "Oct 18, 2026", kcw: true },
      { title: "The Rebellious Bajan Chris Black vs Jordyn Grange", youtube: "hu7It_XEh0w", promotion: "KCW", kcw: true },
      { title: "The Primal Conflict Mafia vs Bajan Ras & Jordyn Grange", youtube: "B-Uc7Sx2YDM", promotion: "KCW", kcw: true },
      { title: "Vertabreaker & Havok vs Dom Paretti & Jordyn Grange (TV Edit)", youtube: "JslPWMec9p4", promotion: "KCW", kcw: true },
      { title: "Jordyn Grange KCW Promo (TV Edit)", youtube: "UnA-4WjStPw", promotion: "KCW", kcw: true, note: "Promo" },
      { title: "Vertabreaker vs Jordyn Grange (Street Fight) — Ocean State Showdown", youtube: "LN9qw2mBeHc", promotion: "AWL", date: "Aug 16, 2026" },
      { title: "2 Out Of 3 Falls: Louis Cifero vs Jordyn Grange", youtube: "tNnw-r8o3aM", promotion: "Indie" },
      { title: "Cody Grange vs Jordyn Grange", youtube: "4B2qKVbfrBw", promotion: "Indie" }
    ]
  },
  {
    slug: "cody-grange", name: "Cody Grange", nickname: "", category: "Singles",
    photo: "assets/roster/cody-grange.jpg",
    bio: "This second generation wrestler wants to blaze his own trail and not make it on just his family name. That means doing it on his own without his brother by his side.",
    bioSource: "KCW TikTok 'Introducing the KCW Roster' (Oct 5, 2026)",
    stats: [ { label: "Family", value: "2nd generation; brother of Jordyn Grange", source: "KCW official bios" } ],
    socials: [], partners: ["jordyn-grange"],
    merch: { type: "concept", image: "assets/merch/cody-grange-tee.jpg", title: "Cody Grange concept tee" },
    intro: { youtube: "WeSbEvS57ic", tiktok: KCW_TT + "7693285737889893663" },
    matches: [
      { title: "Lumen vs Cody Grange", youtube: "UN7MzYo-LWc", promotion: "KCW", kcw: true },
      { title: "Knuckleheads vs Kevin Chase & Cody Grange", youtube: "P89erYRL6v0", promotion: "AWL" },
      { title: "Cody Grange vs Jordyn Grange", youtube: "4B2qKVbfrBw", promotion: "Indie" },
      { title: "The Grange Brothers Match", youtube: "kymxDeWwcjA", promotion: "Indie" },
      { title: "AWL Uncensored message from Tag Team Champion Cody Grange", youtube: "78IgpxblJRc", promotion: "AWL", note: "Promo" }
    ]
  },
  {
    slug: "chris-black", name: "Chris Black", nickname: "The Rebellious Bajan Ras", category: "Singles",
    photo: "assets/roster/chris-black.jpg",
    bio: "This youngster is going places and we are glad KCW is one of them. High flying and action packed is the best way to describe Chris Black. Be on the edge of your seat for his matches… 'cause he might end up in it from one of his dives.",
    bioSource: "KCW TikTok 'Introducing the KCW Roster' (Sept 28, 2026)",
    stats: [ { label: "Style", value: "High flyer", source: "KCW official bio" } ],
    socials: [],
    merch: { type: "concept", image: "assets/merch/chris-black-tee.jpg", title: "Chris Black concept tee" },
    intro: { youtube: "Y8nlUjScX6w", tiktok: KCW_TT + "7690646385418407198" },
    matches: [
      { title: "KCW (10/18/2026) — The Primal Mafia vs Jordyn Grange & Chris Black", youtube: "j1RJGqU-XBg", promotion: "KCW", date: "Oct 18, 2026", kcw: true },
      { title: "The Rebellious Bajan Chris Black vs Jordyn Grange", youtube: "hu7It_XEh0w", promotion: "KCW", kcw: true },
      { title: "The Primal Conflict Mafia vs Bajan Ras & Jordyn Grange", youtube: "B-Uc7Sx2YDM", promotion: "KCW", kcw: true },
      { title: "NQW WrestleversarY IV — Gree-D Bones vs Chris Black", youtube: "sWPsykVm1vk", promotion: "NQW", date: "Sep 5, 2026" },
      { title: "Chris Black vs C.I.A's Corey Briggs (SNW Vortex)", youtube: "o5PceD2Fjtw", promotion: "SNW" },
      { title: "Chris Black vs \"Dezirable\" Dez Marciano (SNW Vortex Ep. 5)", youtube: "sTf78t4aKAs", promotion: "SNW" },
      { title: "Ken Powers vs Chris Black (Ironcrown Rules Match)", youtube: "Svpdma_wbdA", promotion: "SNW" }
    ]
  },
  {
    slug: "sgt-stryker", name: "Sgt. Stryker", nickname: "It Has Begun", category: "Singles",
    photo: "assets/roster/sgt-stryker.jpg",
    bio: "Sgt. Stryker has been enlisted for almost 30 years in professional wrestling. He has spent most of his service in the hall of fame tag team Govament Issued with partner Low Life. He's on his own here in KCW but is a soldier ever really alone?",
    bioSource: "KCW TikTok 'Introducing the KCW Roster' (Sept 28, 2026)",
    stats: [
      { label: "Experience", value: "Almost 30 years", source: "KCW official bio" },
      { label: "Hall of Fame", value: "Govament Issued (with Low Life)", source: "KCW official bio" },
      { label: "Military", value: "30+ years of service, U.S. Army", source: "KCW Instagram" }
    ],
    socials: [],
    merch: { type: "concept", image: "assets/merch/sgt-stryker-tee.jpg", title: "Sgt. Stryker concept tee" },
    intro: { youtube: "8LRP6XyF_HY", tiktok: KCW_TT + "7690640811616259359" },
    matches: [
      { title: "Danger Boy Alfredo & Wolverine vs Low Life & Sgt Stryker", youtube: "8xJG25ikYRo", promotion: "AWL" },
      { title: "6-Man Tag: Mr. X Jr, Sgt. Stryker & Blaze Brown vs Low Life, Havoc & Sycho Nix", youtube: "ndtL9BYwaPM", promotion: "Indie" },
      { title: "Low Life & Sgt. Stryker inducted into the Hall of Fame", youtube: "jB8EQkoHKic", promotion: "Hall of Fame", note: "Ceremony" }
    ]
  },
  {
    slug: "mighty-mac", name: "Mighty Mac", nickname: "TKO", category: "Singles",
    photo: "assets/roster/mighty-mac.jpg",
    bio: "", bioSource: "",
    stats: [ { label: "Billed from", value: "Knockout City Wrestling (per KCW Tron graphic)", source: "KCW YouTube" } ],
    socials: [],
    merch: { type: "concept", image: "assets/merch/mighty-mac-tee.jpg", title: "Mighty Mac concept tee" },
    intro: { youtube: "dtjJN62t6OQ" },
    matches: [
      { title: "The Last Sheikh Ahmed Jordan vs Mighty Mac (West Warwick, RI)", youtube: "b-Dl1YO9Pbc", promotion: "Indie" },
      { title: "MG Biah aka The Orange Rush vs Mighty Mac (VFW Post 4651, Cranston RI)", youtube: "Mv1Ye-_m9z4", promotion: "Indie" },
      { title: "The Ninja vs Mighty Mac — Nathanael's Birthday Bash", youtube: "JFwgt6p2eWw", promotion: "Indie", date: "May 25, 2025" }
    ]
  },
  {
    slug: "knuckle-heads", name: "The Knuckle Heads", nickname: "", category: "Tag Team",
    photo: "assets/roster/knuckle-heads.jpg",
    bio: "", bioSource: "",
    stats: [], socials: [],
    merch: { type: "concept", image: "assets/merch/knuckle-heads-tee.jpg", title: "The Knuckle Heads concept tee" },
    intro: { youtube: "zVLMXmvqG4c" },
    matches: [
      { title: "Knuckleheads vs Kevin Chase & Cody Grange", youtube: "P89erYRL6v0", promotion: "AWL" },
      { title: "The Knuckleheads vs The Ninja & Dragonfly", youtube: "LBWdaaqkkT8", promotion: "Official Wrestling Museum" }
    ]
  },
  {
    slug: "lumen", name: "Lumen", nickname: "", category: "Singles",
    photo: "assets/roster/lumen.jpg",
    bio: "He stands up for what is right. He's witty and grounded. Don't let that fool you. Don't take his kindness for weakness.",
    bioSource: "KCW TikTok/Instagram 'Introducing the KCW Roster' (Nov 16, 2026)",
    stats: [],
    socials: [
      { type: "instagram", url: "https://www.instagram.com/lumenofprowrestling/" }
    ],
    merch: { type: "concept", image: "assets/merch/lumen-tee.jpg", title: "Lumen concept tee" },
    intro: { tiktok: KCW_TT + "7708953093622254878" },
    matches: [
      { title: "Lumen vs Cody Grange", youtube: "UN7MzYo-LWc", promotion: "KCW", kcw: true },
      { title: "Lumen vs Jekyll Sky", youtube: "q8hdTKAKos4", promotion: "AWL" },
      { title: "Lumen vs \"Bionic\" Dan Bidondi — Saturday Night Showcase", youtube: "pg5Y5FPHqII", promotion: "Showcase Pro Wrestling", date: "Sep 7, 2024" },
      { title: "Buck Nasty vs Lumen", youtube: "cPTMlT9bRUE", promotion: "Showcase Pro Wrestling", date: "Jul 20, 2024" }
    ]
  },
  {
    slug: "jason-chaos", name: "Jason Chaos", nickname: "", category: "Singles",
    photo: "assets/roster/jason-chaos.jpg",
    bio: "He is a triple crown champion. One of the unsung legends of the area. He's silent but violent. If you are in the ring with him beware… he may kick your head off.",
    bioSource: "KCW TikTok/Instagram 'Introducing the KCW Roster' (Oct 27, 2026)",
    stats: [ { label: "Accolades", value: "Triple Crown Champion", source: "KCW official bio" } ],
    socials: [],
    merch: { type: "concept", image: "assets/merch/jason-chaos-tee.jpg", title: "Jason Chaos concept tee" },
    intro: { tiktok: KCW_TT + "7701456278505278751" },
    matches: []
  },
  {
    slug: "ahmed-jordan", name: "Ahmed Jordan", nickname: "The Last Sheikh", category: "Singles",
    photo: "assets/roster/ahmed-jordan.jpg",
    bio: "He is a former heavyweight champion and a hall of famer. He is the last sheikh of professional wrestling. He still wants to show he has a lot left in the tank and is looking for a fresh start.",
    bioSource: "KCW TikTok/Instagram 'Introducing the KCW Roster' (Oct 22, 2026)",
    stats: [ { label: "Accolades", value: "Former Heavyweight Champion, Hall of Famer", source: "KCW official bio" } ],
    socials: [],
    merch: { type: "concept", image: "assets/merch/ahmed-jordan-tee.jpg", title: "Ahmed Jordan concept tee" },
    intro: { tiktok: KCW_TT + "7699610574841253151" },
    matches: [
      { title: "NQW Freakin Frenzy — Havoc vs Sheik Ahmed Jordan", youtube: "GjfRE63RnSE", promotion: "NQW", date: "Apr 26, 2026" },
      { title: "The Last Sheikh Ahmed Jordan vs Mighty Mac (West Warwick, RI)", youtube: "b-Dl1YO9Pbc", promotion: "Indie" },
      { title: "The Last Sheikh Ahmed Jordan vs Johnny Rivera (Chad Brown Block Party, Providence RI)", youtube: "MEWr80EvsoE", promotion: "Indie" },
      { title: "The Last Sheikh Ahmed Jordan vs Johnny Rivera (VFW Post 4651, Cranston RI)", youtube: "yvNg-LsHI-E", promotion: "Indie" },
      { title: "Ahmed Jordan vs Johnny Rivera (Seekonk, MA)", youtube: "eY5RpWRdfQg", promotion: "Indie" }
    ]
  },
  {
    slug: "rob-roberts", name: "Rob Roberts", nickname: "", category: "Singles",
    photo: "assets/roster/rob-roberts.jpg",
    bio: "Unhinged is a polite way to describe Rob. He has been away for a stretch of time and now he is back. He has given Commissioner Lowe his promise that he will be on his \"best behavior\".",
    bioSource: "KCW TikTok/Instagram 'Introducing the KCW Roster' (Oct 22, 2026)",
    stats: [], socials: [],
    merch: { type: "concept", image: "assets/merch/rob-roberts-tee.jpg", title: "Rob Roberts concept tee" },
    intro: { tiktok: KCW_TT + "7699610030319865118" },
    matches: [
      { title: "NQW Trail To The Title Finals — Rob Roberts vs Brian Sire", youtube: "jOAIbtf0YlM", promotion: "NQW", date: "Aug 28, 2022" },
      { title: "Versace Stoner vs Rob Roberts (New Year's Eve special)", youtube: "zYdCCrjiWdg", promotion: "XUC" },
      { title: "Rob Roberts vs Vertebreaker", youtube: "sAPs0AkQP-I", promotion: "TRP Pro Wrestling" },
      { title: "Vertabreaker vs Rob Roberts", youtube: "sucJ0kBxitk", promotion: "YPW", date: "Dec 19, 1999" },
      { title: "Vertabreaker vs Tommy Morton vs Rob Roberts", youtube: "boW1JHwCaqk", promotion: "YPW", date: "Dec 31, 1999" }
    ]
  },
  {
    slug: "dom-paretti", name: "Dom Paretti", nickname: "The Pariah", category: "Singles",
    photo: "assets/roster/dom-paretti.jpg",
    bio: "Everyone needs to watch out or be choked out. Dom Paretti is a maniac, a loose cannon and nobody can predict what he is going to do. Hence \"The Pariah\" tag.",
    bioSource: "KCW TikTok/Instagram 'Introducing the KCW Roster' (Oct 21, 2026)",
    stats: [], socials: [],
    merch: { type: "concept", image: "assets/merch/dom-paretti-tee.jpg", title: "Dom Paretti concept tee" },
    intro: { tiktok: KCW_TT + "7699233981476228382" },
    matches: [
      { title: "Vertabreaker & Havok vs Dom Paretti & Jordyn Grange (TV Edit)", youtube: "JslPWMec9p4", promotion: "KCW", kcw: true },
      { title: "One Man Riot vs Dom Paretti", youtube: "oTXqYyy9KB0", promotion: "AWL", date: "Jun 28, 2026" },
      { title: "NQW Fall River Rumble — Brian Sire vs Dom Paretti", youtube: "YI4jfu8Iymc", promotion: "NQW", date: "Jan 31, 2026" },
      { title: "NQW WrestleversarY — N.E. OpenWeight Championship: GC Knight vs Dom Paretti", youtube: "C_m-a91FRP8", promotion: "NQW", date: "Aug 27, 2023" },
      { title: "NQW Destined 4 Greatness — N.E. OpenWeight Finals: Dom Paretti vs Yoo.S.A.F.13", youtube: "h2Rc75ddRNo", promotion: "NQW", date: "Mar 18, 2023" },
      { title: "Chaska Nayati vs \"The Pariah\" Dom Paretti", youtube: "dj57SA6bFqc", promotion: "XUC" }
    ]
  },
  {
    slug: "alfredo", name: "Alfredo", nickname: "Dangerboy", category: "Singles",
    photo: "assets/roster/alfredo.jpg",
    bio: "When you think of New England wrestling, few names immediately come to mind. Alfredo is on that Mount Rushmore of New England wrestling royalty. KCW is honored to have this local legend be a part of the colony.",
    bioSource: "KCW TikTok 'Introducing the KCW Roster' (Oct 19, 2026)",
    stats: [], socials: [],
    merch: { type: "concept", image: "assets/merch/alfredo-tee.jpg", title: "Alfredo concept tee" },
    intro: { tiktok: KCW_TT + "7698529598920756511" },
    matches: [
      { title: "Danger Boy Alfredo & Wolverine vs Low Life & Sgt Stryker", youtube: "8xJG25ikYRo", promotion: "AWL" },
      { title: "RWA Consequences of Greatness — Wolverine & \"Danger Boy\" Alfredo vs Dante & \"Iceberg\" Sonny D", youtube: "BXcmfvRd3Ek", promotion: "RWA" },
      { title: "OFF THE ROPES #28 (\"Danger Boy\" Alfredo)", youtube: "aK7MhaEoPA4", promotion: "The Official Wrestling Museum", note: "Interview" },
      { title: "\"Danger Boy\" Alfredo — All Axxess Podcast #33", youtube: "2axFTSrp7SU", promotion: "All Axxess", note: "Interview" }
    ]
  },
  {
    slug: "steve-michaels", name: "Steve Michaels", nickname: "The Brutal Bear", category: "Singles",
    photo: "assets/roster/steve-michaels.jpg",
    bio: "You may have seen him on POWERSLAP. You may have seen him in Chicago or Hawaii. KCW is happy to announce that you will see Steve Michaels, the giant of a man with hands like bear paws, for special limited dates.",
    bioSource: "KCW TikTok 'Introducing the KCW Roster' (Oct 13, 2026)",
    stats: [
      { label: "Hometown", value: "Chicago, Illinois", source: KCW_CAGEMATCH },
      { label: "Height / Weight", value: "6'6\" / 374 lbs", source: KCW_CAGEMATCH },
      { label: "Finisher", value: "The Chicago Bear Hug", source: KCW_CAGEMATCH },
      { label: "Trained at", value: "Team 3D Academy (Bubba Ray & D-Von Dudley)", source: KCW_CAGEMATCH },
      { label: "KCW status", value: "Special limited dates", source: "KCW official bio" }
    ],
    socials: [
      { type: "instagram", url: "https://instagram.com/ChicagoBearHug" },
      { type: "facebook", url: "https://www.facebook.com/ChicagoBearHug" },
      { type: "x", url: "https://x.com/ChicagoBearHug" }
    ],
    merch: { type: "concept", image: "assets/merch/steve-michaels-tee.jpg", title: "Steve Michaels concept tee" },
    intro: { tiktok: KCW_TT + "7696081843883379998" },
    matches: [
      { title: "Steve Michaels vs Chris L.O.G.A.N. — BCW Heavyweight Championship", youtube: "F6AZ9D-Nii0", promotion: "BCW" },
      { title: "RPW Spring Break 2026 — FANTASIA vs Steve Michaels (w/ Damien Saint)", youtube: "N9UIvOVBg2E", promotion: "Rocket Pro Wrestling", date: "2026" },
      { title: "\"Chicago Bearhug\" Steve Michaels vs \"Wild Heart\" Auron West", youtube: "s1F9CEmv1vM", promotion: "907 Pro Wrestling", date: "Sep 9, 2023" },
      { title: "Chicago Bear Hug Steve Michaels vs Kory Oliver", youtube: "Dje-srR6Zxg", promotion: "UCE Wrestling" }
    ]
  },
  {
    slug: "john-lowe", name: "John Lowe", nickname: "The Commissioner", category: "Officials",
    photo: "assets/roster/john-lowe.jpg",
    bio: "KCW Commissioner. Get ready for the Swarm!", bioSource: "KCW YouTube / TikTok",
    stats: [ { label: "Role", value: "KCW Commissioner", source: "KCW socials" } ],
    socials: [],
    merch: { type: "concept", image: "assets/merch/john-lowe-tee.jpg", title: "John Lowe concept tee" },
    intro: { youtube: "JSQBlBtw4SU", tiktok: KCW_TT + "7702264786632887582", label: "Get Ready for the Swarm!" },
    matches: []
  },
  {
    slug: "tony-jones", name: "Tony Jones", nickname: "KCW Commentator", category: "Announce Team",
    photo: "assets/roster/tony-jones.jpg",
    bio: "It's the big man himself. The voice of New England independent wrestling and local radio. Always wanting to help promote local and small business. You will hear his voice calling the action on every episode of Sunday Night Swarm.",
    bioSource: "KCW TikTok 'Introducing the KCW Roster' (Oct 8, 2026)",
    stats: [ { label: "Role", value: "Play-by-play, Sunday Night Swarm", source: "KCW official bio" } ],
    socials: [],
    merch: { type: "concept", image: "assets/merch/tony-jones-tee.jpg", title: "Tony Jones concept tee" },
    intro: { youtube: "tCguysuN6EU", tiktok: KCW_TT + "7694320693890108702" },
    matches: []
  },
  {
    slug: "jay-roch", name: "Jay Roch", nickname: "KCW Announcer", category: "Announce Team",
    photo: "assets/roster/jay-roch.jpg",
    bio: "A new voice has emerged on the scene. He's a second generation talent born into a wrestling family and has decided to cut his teeth announcing for KCW. He is sure to make sure you feel the buzz!",
    bioSource: "KCW TikTok 'Introducing the KCW Roster' (Oct 13, 2026)",
    stats: [ { label: "Role", value: "Ring announcer", source: "KCW official bio" } ],
    socials: [],
    merch: { type: "concept", image: "assets/merch/jay-roch-tee.jpg", title: "Jay Roch concept tee" },
    intro: { youtube: "DojPiK33C1s", tiktok: KCW_TT + "7696319449346903326" },
    matches: []
  }
];
