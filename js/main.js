/* KCW site script: shared header/footer + page renderers. No build step. */
(function () {
  const S = window.KCW_SITE, R = window.KCW_ROSTER || [];
  const $ = (q, el = document) => el.querySelector(q);
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ytThumb = id => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  const ytUrl = id => `https://www.youtube.com/watch?v=${id}`;

  const ICONS = {
    youtube: '<svg viewBox="0 0 24 24"><path fill="#FF0000" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8z"/><path fill="#fff" d="M9.6 15.6V8.4l6.3 3.6z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24"><path fill="#25F4EE" d="M9.4 9.6v-1a7.5 7.5 0 0 0-1-.1 7.3 7.3 0 0 0-4.2 13.3A7.3 7.3 0 0 1 9.4 9.6z"/><path fill="#25F4EE" d="M9.6 20.6a3.3 3.3 0 0 0 3.3-3.2V1.5h2.9a5.6 5.6 0 0 1-.1-1h-4v15.9a3.3 3.3 0 0 1-3.3 3.2 3.3 3.3 0 0 1-1.5-.4 3.3 3.3 0 0 0 2.7 1.4zM21.4 6.9V6a5.5 5.5 0 0 1-3-.9 5.6 5.6 0 0 0 3 1.8z"/><path fill="#FE2C55" d="M18.4 5.1a5.5 5.5 0 0 1-1.4-3.6h-1a5.6 5.6 0 0 0 2.4 3.6zM8.4 13a3.3 3.3 0 0 0-1.5 6.2 3.3 3.3 0 0 1 3.7-5.4V9.6a7.5 7.5 0 0 0-1-.1H9.4v3.6a3.3 3.3 0 0 0-1-.1z"/><path fill="#fff" d="M21.4 6.9v3.5a9.3 9.3 0 0 1-5.5-1.8v8.1a7.3 7.3 0 0 1-11.6 5.9 7.3 7.3 0 0 0 12.6-5V9.5a9.3 9.3 0 0 0 5.5 1.8V7.7a5.6 5.6 0 0 1-1-.1z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24"><defs><linearGradient id="ig" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#FEDA75"/><stop offset=".4" stop-color="#FA7E1E"/><stop offset=".7" stop-color="#D62976"/><stop offset="1" stop-color="#4F5BD5"/></linearGradient></defs><rect x="2" y="2" width="20" height="20" rx="6" fill="url(#ig)"/><circle cx="12" cy="12" r="4.4" fill="none" stroke="#fff" stroke-width="2"/><circle cx="17.4" cy="6.6" r="1.3" fill="#fff"/></svg>',
    facebook: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#1877F2"/><path fill="#fff" d="M13.4 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5a20 20 0 0 0-2.2-.1c-2.2 0-3.6 1.3-3.6 3.7v2.1H8.1V14h2.4v7z"/></svg>',
    threads: '<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#000" stroke="#555"/><path fill="#fff" d="M16.55 11.65c-.15-2.55-1.55-4.3-4.35-4.3-2.95 0-4.9 2.15-4.9 5.85 0 4.15 2.2 6.05 5.5 6.05 1.85 0 3.35-.5 4.4-1.45v-1.7c-.9.85-2.05 1.4-3.55 1.4-2.2 0-3.7-1.3-3.7-3.95 0-2.55 1.4-4.15 3.4-4.15 1.45 0 2.4.8 2.7 2.15h-2.15v1.55h3.85c.05-.45.15-.95.15-1.5 0-.15 0-.3-.05-.5z"/></svg>',
    email: '<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="#f5b800" stroke-width="2"/><path d="M3 6l9 7 9-7" fill="none" stroke="#f5b800" stroke-width="2"/></svg>',
    x: '<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#000" stroke="#444"/><path fill="#fff" d="M13.6 10.8 19 4.5h-1.3l-4.7 5.5-3.8-5.5H5l5.7 8.3L5 19.5h1.3l5-5.8 4 5.8H19.6zm-1.8 2-.6-.8-4.6-6.6h2l3.7 5.3.6.8 4.8 6.9h-2z"/></svg>',
    website: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="#f5b800" stroke-width="2"/><path d="M2 12h20M12 2c3 3 3 17 0 20M12 2c-3 3-3 17 0 20" fill="none" stroke="#f5b800" stroke-width="1.5"/></svg>'
  };
  const SIL = '<svg viewBox="0 0 64 64" fill="currentColor"><circle cx="32" cy="20" r="11"/><path d="M10 60c0-14 10-24 22-24s22 10 22 24z"/></svg>';
  window.KCW_ICONS = ICONS;

  /* ---------- header / footer ---------- */
  const page = document.body.dataset.page || "";
  const NAV = [["index.html", "Home", "home"], ["roster.html", "Roster", "roster"], ["events.html", "Shows", "events"], ["videos.html", "Videos", "videos"], ["about.html", "About", "about"], ["contact.html", "Follow / Contact", "contact"]];
  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `<div class="wrap">
    <a class="brand" href="index.html"><img src="assets/img/favicon-180.png" alt="KCW bee"><div><span>KCW</span><small>KRAZY CHAMPIONSHIP WRESTLING</small></div></a>
    <button class="menu-btn" aria-label="Menu">&#9776;</button>
    <nav class="nav">${NAV.map(([h, l, k]) => `<a href="${h}" class="${k === page || (page === "wrestler" && k === "roster") ? "active" : ""}">${l}</a>`).join("")}</nav></div>`;
  document.body.prepend(header);
  $(".menu-btn", header).onclick = () => $(".nav", header).classList.toggle("open");

  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `<div class="wrap">
    <div><img src="assets/img/kcw-logo-sm.png" alt="KCW logo" style="width:150px;margin-bottom:10px"><p class="muted" style="margin:0">${esc(S.tagline)}</p></div>
    <div><h4>Explore</h4>${NAV.map(([h, l]) => `<a href="${h}">${l}</a>`).join("")}<a href="${S.merchUrl}" target="_blank" rel="noopener">Merch Store</a></div>
    <div><h4>Follow The Hive</h4>${S.socials.map(s => `<a href="${s.url}" target="_blank" rel="noopener">${s.label} · ${esc(s.handle)}</a>`).join("")}${S.email ? `<a href="mailto:${esc(S.email)}">Email · ${esc(S.email)}</a>` : ""}</div>
    <div class="copy">© ${new Date().getFullYear()} Krazy Championship Wrestling. All rights reserved. Please don't try this at home.</div></div>`;
  document.body.appendChild(footer);

  /* ---------- helpers ---------- */
  function socialLinks(list) {
    return `<div class="socials">${list.map(s => `<a class="soc" href="${s.url}" target="_blank" rel="noopener">${ICONS[s.type] || ICONS.website}<span>${esc(s.label || s.type.toUpperCase())}${s.handle ? " · " + esc(s.handle) : ""}</span></a>`).join("")}</div>`;
  }
  function photoHTML(w) {
    return w.photo ? `<img src="${w.photo}" alt="${esc(w.name)}" loading="lazy">`
      : `<div class="placeholder-photo">${SIL}<span>Photo coming soon</span></div>`;
  }
  function card(w) {
    const n = (w.matches || []).length;
    return `<a class="card" href="wrestler.html?w=${encodeURIComponent(w.slug)}" data-cat="${esc(w.category)}" data-name="${esc((w.name + " " + w.nickname).toLowerCase())}">
      <div class="ph">${photoHTML(w)}</div>
      <div class="body"><div class="nick">${esc(w.nickname)}</div><h3>${esc(w.name)}</h3>
      <div class="meta"><span class="tag">${esc(w.category)}</span><span>${n ? n + " video" + (n > 1 ? "s" : "") : "View bio"} &rarr;</span></div></div></a>`;
  }
  function ytFacade(id, title, short, thumb) {
    return `<div class="yt${short ? " short" : ""}" data-yt="${id}" role="button" tabindex="0" aria-label="Play ${esc(title)}"><img src="${thumb || ytThumb(id)}" alt="${esc(title)}" loading="lazy"><span class="play"></span></div>`;
  }
  document.addEventListener("click", e => {
    const el = e.target.closest(".yt[data-yt]");
    if (!el) return;
    const id = el.dataset.yt;
    if (location.protocol === "file:") { window.open(ytUrl(id), "_blank"); return; } // YouTube blocks embeds on local files
    el.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen title="YouTube video"></iframe>`;
    el.removeAttribute("data-yt");
  });
  function videoTile(v) {
    return `<div>${ytFacade(v.youtube, v.title, v.kind === "Short", v.thumb)}<div class="vcap"><b>${esc(v.title)}</b><small>${esc(v.sub || v.kind || "")} · <a href="${ytUrl(v.youtube)}" target="_blank" rel="noopener">Watch on YouTube</a></small></div></div>`;
  }
  function fmtDate(iso) { const d = new Date(iso); return { m: d.toLocaleString("en-US", { month: "short", timeZone: "America/New_York" }).toUpperCase(), d: d.toLocaleString("en-US", { day: "numeric", timeZone: "America/New_York" }), w: d.toLocaleString("en-US", { weekday: "long", timeZone: "America/New_York" }), t: d.toLocaleString("en-US", { hour: "numeric", minute: "2-digit", timeZone: "America/New_York" }) + " ET" }; }
  function nextSundays(n) {
    const out = [], last = S.events.length ? new Date(S.events[S.events.length - 1].start) : new Date();
    let d = new Date(last.getTime() + 7 * 864e5);
    for (let i = 0; i < n; i++) { out.push({ title: "KCW Sunday Night Swarm", start: d.toISOString(), where: "Streaming on YouTube, Facebook, Instagram & TikTok", blurb: S.weekly.note, source: "KCW Instagram (weekly schedule)" }); d = new Date(d.getTime() + 7 * 864e5); }
    return out;
  }
  function upcoming() { const now = Date.now() - 3 * 3600e3; return S.events.concat(nextSundays(4)).filter(e => new Date(e.start).getTime() > now); }
  function eventRow(e) {
    const f = fmtDate(e.start);
    const yt = S.socials.find(s => s.type === "youtube").url;
    return `<div class="event"><div class="date"><div class="m">${f.m}</div><div class="d">${f.d}</div><div class="w">${f.w}</div></div>
      <div><h3>${esc(e.title)}</h3><div class="muted">${f.t} · ${esc(e.where)}</div><p style="margin:.4em 0 0">${esc(e.blurb)}</p></div>
      <div class="cta"><a class="btn" href="${yt}" target="_blank" rel="noopener">Watch</a></div></div>`;
  }
  function countdown(el, iso) {
    const t = new Date(iso).getTime();
    const tick = () => { let s = Math.max(0, Math.floor((t - Date.now()) / 1000)); const d = Math.floor(s / 86400); s %= 86400; const h = Math.floor(s / 3600); s %= 3600; const m = Math.floor(s / 60); s %= 60;
      el.innerHTML = [[d, "Days"], [h, "Hours"], [m, "Min"], [s, "Sec"]].map(([v, l]) => `<div><b>${String(v).padStart(2, "0")}</b><span>${l}</span></div>`).join(""); };
    tick(); setInterval(tick, 1000);
  }
  function allKcwMatches() {
    const seen = new Map();
    R.forEach(w => (w.matches || []).forEach(m => { if (m.kcw && m.youtube && !seen.has(m.youtube)) seen.set(m.youtube, { youtube: m.youtube, title: m.title, sub: (m.date ? m.date + " · " : "") + "KCW match video" }); }));
    return [...seen.values()];
  }

  /* ---------- pages ---------- */
  const P = {
    home() {
      const up = upcoming()[0];
      if (up) { $("#next-title").textContent = up.title; const f = fmtDate(up.start); $("#next-when").textContent = `${f.w}, ${f.m} ${f.d} · ${f.t}`; $("#next-blurb").textContent = up.blurb; countdown($("#countdown"), up.start); }
      $("#home-roster").innerHTML = R.filter(w => w.category === "Singles" || w.category === "Tag Team").slice(0, 8).map(card).join("");
      const vids = allKcwMatches().slice(0, 3);
      $("#home-videos").innerHTML = vids.map(videoTile).join("");
      $("#home-socials").innerHTML = socialLinks(S.socials);
    },
    roster() {
      const cats = ["All", ...new Set(R.map(w => w.category))];
      $("#filters").innerHTML = cats.map((c, i) => `<button class="${i ? "" : "on"}" data-c="${c}">${c}</button>`).join("") + `<input class="search" id="q" placeholder="Search the roster…" aria-label="Search roster">`;
      $("#roster").innerHTML = R.map(card).join("");
      $("#count").textContent = R.length;
      let cat = "All";
      const apply = () => { const q = $("#q").value.trim().toLowerCase();
        document.querySelectorAll("#roster .card").forEach(c => { c.style.display = (cat === "All" || c.dataset.cat === cat) && (!q || c.dataset.name.includes(q)) ? "" : "none"; }); };
      $("#filters").addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; cat = b.dataset.c; document.querySelectorAll("#filters button").forEach(x => x.classList.toggle("on", x === b)); apply(); });
      $("#q").addEventListener("input", apply);
    },
    wrestler() {
      const slug = new URLSearchParams(location.search).get("w");
      const w = R.find(x => x.slug === slug);
      const root = $("#wrestler");
      if (!w) { root.innerHTML = `<div class="wrap" style="padding:80px 20px"><h1>Wrestler not found</h1><p><a class="btn" href="roster.html">Back to roster</a></p></div>`; return; }
      document.title = `${w.name} | KCW Roster`;
      const stats = (w.stats || []).map(s => `<tr><th>${esc(s.label)}</th><td>${esc(s.value)}${s.source ? `<small>Source: ${esc(s.source)}</small>` : ""}</td></tr>`).join("");
      const partners = (w.partners || []).map(p => R.find(x => x.slug === p)).filter(Boolean);
      const kcwM = (w.matches || []).filter(m => m.kcw), otherM = (w.matches || []).filter(m => !m.kcw);
      const mItem = m => { const href = m.youtube ? ytUrl(m.youtube) : m.url;
        return `<li><a class="match" href="${href}" target="_blank" rel="noopener">${m.youtube ? `<img src="${ytThumb(m.youtube)}" alt="" loading="lazy">` : `<div class="noimg">RESULT</div>`}
        <div><div class="t">${esc(m.title)}</div><div class="s"><span class="tag ${m.kcw ? "kcw" : ""}">${esc(m.promotion || "")}</span>${m.date ? `<span>${esc(m.date)}</span>` : ""}${m.note ? `<span>${esc(m.note)}</span>` : ""}<span>${m.youtube ? "▶ YouTube" : "↗ Link"}</span></div></div></a></li>`; };
      const ownSoc = (w.socials || []).map(s => ({ ...s, label: { instagram: "Instagram", tiktok: "TikTok", youtube: "YouTube", facebook: "Facebook", threads: "Threads", x: "X", website: "Website" }[s.type] }));
      const intro = w.intro || {};
      root.innerHTML = `<div class="wrap"><div class="breadcrumb"><a href="roster.html">&larr; Roster</a> / ${esc(w.name)}</div>
        <div class="w-hero"><div><div class="photo">${photoHTML(w)}</div></div>
        <div><div class="nick">${esc(w.nickname)}</div><h1>${esc(w.name)}</h1><span class="tag">${esc(w.category)}</span>
          ${w.bio ? `<p class="bio">${esc(w.bio)}</p><div class="bio-src">Official bio: ${esc(w.bioSource)}</div>` : `<p style="margin:18px 0"><span class="coming">Bio coming soon</span></p>`}
          ${stats ? `<table class="stats">${stats}</table>` : ""}
          ${partners.length ? `<p><span class="eyebrow">Aligned with</span><br>${partners.map(p => `<a href="wrestler.html?w=${p.slug}">${esc(p.name)}</a>`).join(" · ")}</p>` : ""}
          <div style="margin-top:16px"><div class="eyebrow" style="margin-bottom:8px">${ownSoc.length ? "Follow " + esc(w.name) : "Social media"}</div>
          ${ownSoc.length ? socialLinks(ownSoc) : `<span class="muted" style="font-size:.9rem">Personal accounts coming soon. Follow KCW for updates:</span>${socialLinks(S.socials.slice(0, 3))}`}</div>
        </div></div>
        ${intro.youtube || intro.tiktok ? `<section class="block" style="padding-top:10px"><div class="section-head"><h2>KCW <span class="gold">Intro</span></h2></div>
          <div class="two">${intro.youtube ? `<div>${ytFacade(intro.youtube, w.name + " KCW intro", false, w.photo)}</div>` : ""}
          <div class="panel"><p style="margin-top:0">Watch ${esc(w.name)}'s official KCW roster introduction.</p><div class="socials">
          ${intro.youtube ? `<a class="soc" href="${ytUrl(intro.youtube)}" target="_blank" rel="noopener">${ICONS.youtube}<span>Watch on YouTube</span></a>` : ""}
          ${intro.tiktok ? `<a class="soc" href="${intro.tiktok}" target="_blank" rel="noopener">${ICONS.tiktok}<span>Watch on TikTok</span></a>` : ""}</div></div></div></section>` : ""}
        <section class="block" style="padding-top:10px"><div class="section-head"><h2>Match <span class="gold">History</span></h2><span class="muted">${(w.matches || []).length} video${(w.matches || []).length === 1 ? "" : "s"}</span></div>
          ${kcwM.length ? `<h3 style="color:var(--gold)">In KCW</h3><ul class="match-list">${kcwM.map(mItem).join("")}</ul>` : ""}
          ${otherM.length ? `<h3 style="margin-top:28px">Around the Independents</h3><p class="muted" style="margin-top:-6px;font-size:.9rem">Matches and appearances outside KCW, found on YouTube and wrestling databases.</p><ul class="match-list">${otherM.map(mItem).join("")}</ul>` : ""}
          ${!(w.matches || []).length ? `<span class="coming">Match videos coming soon</span>` : ""}
        </section></div>`;
    },
    events() {
      $("#upcoming").innerHTML = upcoming().map(eventRow).join("");
      $("#past").innerHTML = S.pastEvents.map(p => `<div class="event"><div class="date"><div class="m">${fmtDate(p.date + "T12:00:00-05:00").m}</div><div class="d">${fmtDate(p.date + "T12:00:00-05:00").d}</div><div class="w">2026</div></div><div><h3>${esc(p.title)}</h3><p style="margin:0">${esc(p.note)}</p></div><div class="cta">${p.youtube ? `<a class="btn ghost" href="${ytUrl(p.youtube)}" target="_blank" rel="noopener">Watch</a>` : ""}</div></div>`).join("");
    },
    videos() {
      $("#v-official").innerHTML = S.featured.map(videoTile).join("");
      $("#v-matches").innerHTML = allKcwMatches().map(videoTile).join("");
      $("#v-intros").innerHTML = R.filter(w => w.intro && w.intro.youtube).map(w => videoTile({ youtube: w.intro.youtube, title: w.name + " — " + (w.intro.label || "KCW Tron"), sub: w.category, thumb: w.photo })).join("");
      $("#v-tiktok").innerHTML = R.filter(w => w.intro && w.intro.tiktok && !w.intro.youtube).map(w => `<a class="card" href="${w.intro.tiktok}" target="_blank" rel="noopener"><div class="ph">${photoHTML(w)}</div><div class="body"><div class="nick">TikTok</div><h3>${esc(w.name)}</h3><div class="meta"><span>Introducing the KCW Roster</span><span>Watch &rarr;</span></div></div></a>`).join("")
        + S.tiktokHighlights.map(t => `<a class="card" href="${t.url}" target="_blank" rel="noopener"><div class="ph"><img src="${t.img}" alt=""></div><div class="body"><div class="nick">TikTok</div><h3>${esc(t.title)}</h3><div class="meta"><span>KCW</span><span>Watch &rarr;</span></div></div></a>`).join("");
    },
    about() {
      $("#about-sponsors").innerHTML = S.sponsors.map(s => `<a class="soc" href="${s.url}" target="_blank" rel="noopener sponsored"><span><b>${esc(s.name)}</b> · ${esc(s.note)}</span></a>`).join("");
      $("#about-staff").innerHTML = R.filter(w => ["Officials", "Announce Team", "Manager"].includes(w.category)).map(card).join("");
    },
    contact() {
      $("#big-socials").innerHTML = S.socials.map(s => `<a href="${s.url}" target="_blank" rel="noopener">${ICONS[s.type] || ICONS.website}<b>${s.label}</b><span class="muted">${esc(s.handle)}</span></a>`).join("");
      const box = $("#contact-email");
      if (box && S.email) {
        box.innerHTML = `<div class="eyebrow">Email</div><h2 style="margin:.2em 0 .4em"><a href="mailto:${esc(S.email)}">${esc(S.email)}</a></h2><p class="muted" style="margin:0">For bookings, sponsorships and talent inquiries. This is the address listed on KCW's official Facebook page.</p>`;
      }
      const sl = $("#contact-slogan");
      if (sl && S.slogan) sl.textContent = S.slogan;
    }
  };
  if (P[page]) P[page]();
})();
