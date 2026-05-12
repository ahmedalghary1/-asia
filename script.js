document.documentElement.classList.add("reveal-ready");

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

const iconPaths = {
  "arrow-left": ["M19 12H5", "m12 5-7 7 7 7"],
  "arrow-up": ["M12 19V5", "m5 12 7-7 7 7"],
  "arrow-up-right": ["M7 17 17 7", "M7 7h10v10"],
  menu: ["M4 6h16", "M4 12h16", "M4 18h16"],
  x: ["M18 6 6 18", "m6 6 12 12"],
  "chevron-left": ["m15 18-6-6 6-6"],
  "chevron-right": ["m9 18 6-6-6-6"],
  "chevron-down": ["m6 9 6 6 6-6"],
  "play-circle": ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z", "m10 8 6 4-6 4V8Z"],
  sparkles: ["M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z", "M5 3v4", "M3 5h4", "M19 17v4", "M17 19h4"],
  target: ["M12 2v4", "M12 18v4", "M2 12h4", "M18 12h4", "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"],
  megaphone: ["M3 11v2a2 2 0 0 0 2 2h2l7 4V5L7 9H5a2 2 0 0 0-2 2Z", "M18 9a4 4 0 0 1 0 6"],
  "messages-square": ["M21 15a2 2 0 0 1-2 2H9l-4 4v-4H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z", "M8 8h8", "M8 12h5"],
  "pen-tool": ["M12 19 5 12l7-9 7 9-7 7Z", "M12 3v16", "M7 14h10"],
  "monitor-code": ["M4 5h16v11H4Z", "M8 20h8", "M12 16v4", "m10 9-2 2 2 2", "m14 9 2 2-2 2"],
  "bar-chart-3": ["M4 19V9", "M12 19V5", "M20 19v-7"],
  trophy: ["M8 21h8", "M12 17v4", "M7 4h10v5a5 5 0 0 1-10 0Z", "M5 5H3v2a4 4 0 0 0 4 4", "M19 5h2v2a4 4 0 0 1-4 4"],
  "trending-up": ["M3 17 9 11l4 4 8-8", "M14 7h7v7"],
  users: ["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z", "M22 21v-2a4 4 0 0 0-3-3.87"],
  globe: ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z", "M2 12h20", "M12 2a15 15 0 0 1 0 20", "M12 2a15 15 0 0 0 0 20"],
  "globe-2": ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z", "M2 12h20", "M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10", "M12 2a15 15 0 0 0-4 10 15 15 0 0 0 4 10"],
  quote: ["M7 17a4 4 0 0 1-4-4V7h6v6H6a1 1 0 0 0 1 1Z", "M17 17a4 4 0 0 1-4-4V7h6v6h-3a1 1 0 0 0 1 1Z"],
  phone: ["M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.7 2.6a2 2 0 0 1-.4 2.1L8.1 9.7a16 16 0 0 0 6.2 6.2l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.7 2Z"],
  mail: ["M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z", "m22 6-10 7L2 6"],
  "map-pin": ["M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z", "M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"],
  "circle-play": ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z", "m10 8 6 4-6 4V8Z"],
  "circle-plus": ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z", "M12 8v8", "M8 12h8"],
  "badge-check": ["M12 2 15 5l4 .5.5 4L22 12l-2.5 2.5-.5 4-4 .5-3 3-3-3-4-.5-.5-4L2 12l2.5-2.5.5-4 4-.5 3-3Z", "m9 12 2 2 4-4"],
  "audio-waveform": ["M2 13v-2", "M6 17V7", "M10 20V4", "M14 17V7", "M18 13v-2", "M22 15V9"],
  "shield-check": ["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z", "m9 12 2 2 4-4"],
  rocket: ["M4.5 16.5c-1.5 1.3-2 3.5-2 5 1.5 0 3.7-.5 5-2L4.5 16.5Z", "M9 15 4 10l2-4 5 5", "M14 10l5 5-4 2-5-5", "M15 9l-6 6", "M14 4c2-2 5-2 6-2 0 1 0 4-2 6l-4 4-4-4 4-4Z"],
  gauge: ["M12 14l4-4", "M3.3 18a9 9 0 1 1 17.4 0", "M7 18h10"],
  linkedin: ["M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z", "M2 9h4v12H2Z", "M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"],
  instagram: ["M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z", "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z", "M17.5 6.5h.01"],
  twitter: ["M22 4s-.7 2.1-2 3.4c1.6 10-9.4 16-17 10.6 2.2.1 4.4-.6 6-2C4 15 2 10 4 6c2.2 2.6 5.5 4.1 9 4-.9-4.2 4-6.6 7-3.8.9 0 2-.5 2-.5Z"],
  "message-circle": ["M21 11.5a8.4 8.4 0 0 1-9 8.4 8.7 8.7 0 0 1-4-.9L3 21l2-4.8a8.5 8.5 0 1 1 16-4.7Z"],
};

const defaultIconPath = ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"];

const createSvgIcon = (name, source) => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const classes = source.getAttribute("class");

  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "1.8");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  svg.setAttribute("aria-hidden", source.getAttribute("aria-hidden") || "true");
  svg.setAttribute("focusable", "false");
  svg.dataset.lucide = name;

  if (classes) svg.setAttribute("class", classes);

  (iconPaths[name] || defaultIconPath).forEach((pathData) => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData);
    svg.append(path);
  });

  return svg;
};

const initIcons = () => {
  qsa("[data-lucide]").forEach((icon) => {
    icon.replaceWith(createSvgIcon(icon.dataset.lucide, icon));
  });
};

const initReveal = () => {
  const items = qsa("[data-reveal]");

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
  );

  items.forEach((item) => observer.observe(item));
};

const initNavigation = () => {
  const header = qs("[data-header]");
  const toggle = qs("[data-menu-toggle]");
  const menu = qs("[data-mobile-menu]");
  const allMenuLinks = qsa(".desktop-nav a, .mobile-menu a");
  const sections = qsa("main section[id]");

  const setToggleIcon = (open) => {
    const icon = qs("[data-lucide]", toggle);
    if (!icon) return;
    icon.dataset.lucide = open ? "x" : "menu";
    initIcons();
  };

  const closeMenu = () => {
    menu?.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    toggle?.setAttribute("aria-expanded", "false");
    setToggleIcon(false);
  };

  toggle?.addEventListener("click", () => {
    const open = !menu?.classList.contains("is-open");
    menu?.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    setToggleIcon(open);
  });

  qsa("a", menu || document).forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (!menu?.classList.contains("is-open")) return;
    if (menu.contains(event.target) || toggle?.contains(event.target)) return;
    closeMenu();
  });

  const update = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 10);

    const current = sections
      .filter((section) => section.getBoundingClientRect().top <= 140)
      .at(-1);

    if (!current) return;

    allMenuLinks.forEach((link) => {
      const hash = new URL(link.href, window.location.href).hash;
      const active = hash === `#${current.id}`;
      link.classList.toggle("is-active", active);
      if (active) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) closeMenu();
    update();
  });
  update();
};

const initFilters = () => {
  const buttons = qsa("[data-filter]");
  const cards = qsa("[data-category]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      buttons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      cards.forEach((card) => {
        const hidden = filter !== "all" && card.dataset.category !== filter;
        card.classList.toggle("is-hidden", hidden);
      });
    });
  });

  buttons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.classList.contains("is-active")));
  });
};

const initTestimonials = () => {
  const track = qs("[data-testimonial-track]");
  const prev = qs("[data-testimonial-prev]");
  const next = qs("[data-testimonial-next]");

  if (!track || !prev || !next) return;

  const cards = qsa(".testimonial-card", track);
  let index = 0;

  if (cards.length === 0) return;

  const visibleCount = () => {
    if (window.innerWidth <= 760) return 1;
    if (window.innerWidth <= 960) return 2;
    return 3;
  };

  const update = () => {
    const max = Math.max(cards.length - visibleCount(), 0);
    index = Math.min(Math.max(index, 0), max);
    const gap = parseFloat(getComputedStyle(track).gap || "0");
    const step = cards[0].getBoundingClientRect().width + gap;
    track.style.transform = `translateX(${-index * step}px)`;
    prev.disabled = index === 0;
    next.disabled = index === max;
  };

  prev.addEventListener("click", () => {
    index -= 1;
    update();
  });

  next.addEventListener("click", () => {
    index += 1;
    update();
  });

  window.addEventListener("resize", update);
  update();
};

const initFaq = () => {
  const items = qsa(".faq-item");

  const setItemState = (item, open) => {
    const button = qs("button", item);
    const content = qs(".faq-content", item);

    item.classList.toggle("is-open", open);
    button?.setAttribute("aria-expanded", String(open));
    content?.setAttribute("aria-hidden", String(!open));
  };

  items.forEach((item) => {
    const button = qs("button", item);
    const content = qs(".faq-content", item);
    if (!button) return;

    if (content) {
      const contentId = content.id || `faq-answer-${items.indexOf(item) + 1}`;
      content.id = contentId;
      button.setAttribute("aria-controls", contentId);
    }

    setItemState(item, item.classList.contains("is-open"));

    button.addEventListener("click", () => {
      const open = !item.classList.contains("is-open");
      items.forEach((faqItem) => {
        if (faqItem !== item) setItemState(faqItem, false);
      });
      setItemState(item, open);
    });
  });
};

const initToTop = () => {
  const button = qs("[data-to-top]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const update = () => button?.classList.toggle("is-visible", window.scrollY > 720);

  button?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reduceMotion.matches ? "auto" : "smooth" });
  });

  window.addEventListener("scroll", update, { passive: true });
  update();
};

window.addEventListener("DOMContentLoaded", () => {
  initIcons();
  initReveal();
  initNavigation();
  initFilters();
  initTestimonials();
  initFaq();
  initToTop();
});
