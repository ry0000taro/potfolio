(function () {
  var D = window.PORTFOLIO;
  var $ = function (id) { return document.getElementById(id); };

  function el(tag, attrs, children) {
    var e = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "class") e.className = attrs[k];
      else if (k === "text") e.textContent = attrs[k];
      else e.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) e.appendChild(c); });
    return e;
  }
  function safeLink(url) { return /^(https?:|mailto:)/.test(url) ? url : "#"; }
  function linkEl(l, cls) {
    return el("a", { href: safeLink(l.url), target: "_blank", rel: "noopener noreferrer", class: cls || "", text: l.label });
  }

  // hero
  $("heroName").textContent = D.name;
  $("heroRole").textContent = D.role;
  $("heroTagline").textContent = D.tagline;
  $("heroIntro").textContent = D.intro;
  $("year").textContent = new Date().getFullYear();

  // about
  D.about.forEach(function (t) { $("aboutText").appendChild(el("p", { text: t })); });
  D.strengths.forEach(function (s) {
    $("strengths").appendChild(el("div", { class: "strength reveal" }, [el("h4", { text: s.t }), el("p", { text: s.d })]));
  });
  D.awards.forEach(function (a) {
    $("awards").appendChild(el("div", { class: "award reveal" }, [el("h4", { text: a.t }), el("p", { text: a.d })]));
  });

  // works
  var types = ["All"];
  D.works.forEach(function (w) { if (types.indexOf(w.type) < 0) types.push(w.type); });
  var current = "All";
  function renderFilters() {
    $("filters").innerHTML = "";
    types.forEach(function (t) {
      var b = el("button", { class: "chip-btn" + (t === current ? " on" : ""), type: "button", text: t });
      b.addEventListener("click", function () { current = t; renderFilters(); renderCards(); });
      $("filters").appendChild(b);
    });
  }
  function renderCards() {
    $("cards").innerHTML = "";
    D.works.filter(function (w) { return current === "All" || w.type === current; }).forEach(function (w) {
      var card = el("button", { class: "card reveal in", type: "button", "aria-label": w.title + " の詳細を開く" }, [
        w.thumb ? el("div", { class: "card-thumb" }, [el("img", { src: w.thumb, alt: w.title + " のサムネイル", loading: "lazy" })]) : null,
        w.badge ? el("span", { class: "badge", text: "🏆 " + w.badge }) : null,
        el("div", { class: "meta" }, [el("span", { class: "tag", text: w.type }), el("span", { text: w.period })]),
        el("h3", { text: w.title }),
        el("p", { text: w.blurb }),
        el("div", { class: "role", text: "役割:" + w.role }),
        el("div", { class: "chips" }, w.tech.map(function (t) { return el("span", { text: t }); })),
        el("span", { class: "more", text: "詳細を見る →" })
      ]);
      card.addEventListener("click", function () { openModal(w); });
      $("cards").appendChild(card);
    });
  }
  renderFilters();
  renderCards();

  // timeline
  D.experience.forEach(function (x) {
    var li = el("li", { class: "tl-item reveal" }, [
      el("div", { class: "tl-period", text: x.period }),
      el("h3", { text: x.title }),
      x.body ? el("p", { text: x.body }) : null
    ]);
    if (x.points && x.points.length) {
      li.appendChild(el("ul", {}, x.points.map(function (p) { return el("li", { text: p }); })));
    }
    if (x.links && x.links.length) {
      var d = el("div", { class: "tl-links" });
      x.links.forEach(function (l) { d.appendChild(linkEl(l)); });
      li.appendChild(d);
    }
    $("timeline").appendChild(li);
  });

  // skills
  D.skills.forEach(function (g) {
    var ul = el("ul");
    g.items.forEach(function (i) {
      ul.appendChild(el("li", { class: i.main ? "main" : "" }, [el("span", { text: i.n }), i.note ? el("em", { text: i.note }) : null]));
    });
    $("skillsGrid").appendChild(el("div", { class: "skill-box reveal" }, [el("h3", { text: g.group }), ul]));
  });

  // contact
  var mail = $("mailLink");
  mail.href = "mailto:" + D.contact.email;
  mail.textContent = D.contact.email;
  D.contact.links.forEach(function (l) { $("links").appendChild(linkEl(l)); });

  // modal
  var modal = $("modal"), body = $("modalBody"), lastFocus = null;
  function openModal(w) {
    lastFocus = document.activeElement;
    body.innerHTML = "";
    var head = el("div", { class: "m-head" }, [
      el("span", { class: "tag", text: w.type }),
      el("h2", { id: "mTitle", text: w.title })
    ]);
    body.appendChild(head);
    var meta = el("dl", { class: "m-meta" }, [
      el("dt", { text: "期間" }), el("dd", { text: w.period }),
      el("dt", { text: "役割" }), el("dd", { text: w.role }),
      el("dt", { text: "技術" }), el("dd", { text: w.tech.join(" / ") })
    ]);
    body.appendChild(meta);
    if (w.links && w.links.length) {
      var ls = el("div", { class: "m-links" });
      w.links.forEach(function (l) { ls.appendChild(linkEl(l)); });
      body.appendChild(ls);
    }
    if (w.images && w.images.length) {
      var g = el("div", { class: "gallery" });
      w.images.forEach(function (src) { g.appendChild(el("img", { src: src, alt: w.title + " のスクリーンショット", loading: "lazy" })); });
      body.appendChild(g);
    }
    w.sections.forEach(function (s) {
      var sec = el("section", { class: "m-sec" }, [el("h3", { text: s.h })]);
      if (s.p) sec.appendChild(el("p", { text: s.p }));
      if (s.table) {
        var t = el("table");
        t.appendChild(el("thead", {}, [el("tr", {}, s.table.head.map(function (h) { return el("th", { text: h }); }))]));
        t.appendChild(el("tbody", {}, s.table.rows.map(function (r) { return el("tr", {}, r.map(function (c) { return el("td", { text: c }); })); })));
        sec.appendChild(el("div", { class: "table-wrap" }, [t]));
      }
      if (s.list) sec.appendChild(el("ul", {}, s.list.map(function (i) { return el("li", { text: i }); })));
      body.appendChild(sec);
    });
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("lock");
    modal.querySelector(".modal-panel").scrollTop = 0;
    modal.querySelector(".modal-close").focus();
  }
  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lock");
    if (lastFocus) lastFocus.focus();
  }
  modal.addEventListener("click", function (e) { if (e.target.hasAttribute("data-close")) closeModal(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && modal.classList.contains("open")) closeModal(); });

  // nav
  var toggle = $("navToggle"), links = $("navLinks");
  toggle.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.addEventListener("click", function (e) { if (e.target.tagName === "A") { links.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); } });

  // reveal on scroll
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    items.forEach(function (i) { io.observe(i); });
  } else {
    items.forEach(function (i) { i.classList.add("in"); });
  }
})();
