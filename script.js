document.documentElement.classList.add("js-enabled");

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector("[data-menu-toggle]");
const navLinks = document.querySelectorAll(".mobile-nav a, .mobile-cta");
const revealItems = document.querySelectorAll(".reveal");
const carousels = document.querySelectorAll("[data-carousel]");

if (menuToggle && header) {
  menuToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

carousels.forEach((carousel) => {
  const track = carousel.querySelector("[data-carousel-track]");
  const prevButton = carousel.querySelector("[data-carousel-prev]");
  const nextButton = carousel.querySelector("[data-carousel-next]");

  if (!track || !prevButton || !nextButton) {
    return;
  }

  const getScrollAmount = () => {
    const firstCard = track.querySelector(".company-card");

    if (!firstCard) {
      return track.clientWidth * 0.9;
    }

    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;

    return firstCard.getBoundingClientRect().width + gap;
  };

  const updateControls = () => {
    const maxScrollLeft = track.scrollWidth - track.clientWidth - 4;
    const isScrollable = maxScrollLeft > 8;
    prevButton.disabled = track.scrollLeft <= 4;
    nextButton.disabled = track.scrollLeft >= maxScrollLeft;
    carousel.classList.toggle("is-scrollable", isScrollable);
    carousel.classList.toggle("is-scroll-start", !isScrollable || track.scrollLeft <= 4);
    carousel.classList.toggle("is-scroll-end", !isScrollable || track.scrollLeft >= maxScrollLeft);
  };

  prevButton.addEventListener("click", () => {
    track.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
  });

  nextButton.addEventListener("click", () => {
    track.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
  });

  track.addEventListener("scroll", updateControls, { passive: true });
  window.addEventListener("resize", updateControls);
  updateControls();

  if (carousel.id !== "systems") {
    return;
  }

  const companiesButton = carousel.querySelector("[data-companies-view]");

  if (!companiesButton) {
    return;
  }

  const systemsMarkup = track.innerHTML;
  const systemsLinks = document.querySelectorAll('a[href="#systems"]');
  const companiesLinks = document.querySelectorAll('a[href="#companies-view"]');
  const companiesButtonLabel = "view companies";
  const systemsButtonLabel = "view systems";
  let activeView = "systems";
  let pendingView = "systems";
  let switchTimer = 0;
  let focusTimer = 0;
  let focusNavigationTimer = 0;

  const systemTargets = {
    "ai systems implementation": "automation",
    "data infrastructure and integrity": "modernization",
    "automation architecture": "automation",
    "workflow design and optimization": "operating-design",
    "customer operations systems": "operating-design",
    "reporting and visibility systems": "reporting",
  };

  const companyProfiles = [
    {
      name: "lumen home services",
      ceo: "Ashley Morgan",
      businessType: "hvac and field services",
      primarySystem: "ai systems implementation",
      primaryTarget: systemTargets["ai systems implementation"],
      supports: [
        "ai systems implementation",
        "workflow design and optimization",
        "customer operations systems",
      ],
      scope: "lead qualification, technician scheduling, estimate follow-up, review automation",
      tone: "automation",
    },
    {
      name: "atlas private clinic",
      ceo: "Dr. Nathan Cole",
      businessType: "outpatient medical clinic",
      primarySystem: "customer operations systems",
      primaryTarget: systemTargets["customer operations systems"],
      supports: [
        "ai systems implementation",
        "customer operations systems",
        "reporting and visibility systems",
      ],
      scope: "intake systems, follow-up workflows, referral tracking, operational dashboards",
      tone: "operations",
    },
    {
      name: "bluehaven insurance services",
      ceo: "Victor Hall",
      businessType: "insurance brokerage",
      primarySystem: "automation architecture",
      primaryTarget: systemTargets["automation architecture"],
      supports: [
        "ai systems implementation",
        "automation architecture",
        "customer operations systems",
      ],
      scope: "lead triage, renewal reminders, crm automation, pipeline visibility",
      tone: "automation",
    },
    {
      name: "harbor freight logistics",
      ceo: "Marcus Lee",
      businessType: "regional logistics company",
      primarySystem: "data infrastructure and integrity",
      primaryTarget: systemTargets["data infrastructure and integrity"],
      supports: [
        "data infrastructure and integrity",
        "automation architecture",
        "reporting and visibility systems",
      ],
      scope: "dispatch automation, shipment visibility, escalation workflows, operational reporting",
      tone: "infrastructure",
    },
    {
      name: "cedarstone legal support",
      ceo: "Daniel Cruz",
      businessType: "legal operations support",
      primarySystem: "workflow design and optimization",
      primaryTarget: systemTargets["workflow design and optimization"],
      supports: [
        "data infrastructure and integrity",
        "automation architecture",
        "workflow design and optimization",
      ],
      scope: "intake routing, document workflows, internal handoff systems, status tracking",
      tone: "operations",
    },
    {
      name: "forge industrial supply",
      ceo: "Jared Kim",
      businessType: "b2b industrial supplier",
      primarySystem: "data infrastructure and integrity",
      primaryTarget: systemTargets["data infrastructure and integrity"],
      supports: [
        "data infrastructure and integrity",
        "automation architecture",
        "reporting and visibility systems",
      ],
      scope: "order workflows, inventory visibility, sales follow-up systems, internal reporting",
      tone: "infrastructure",
    },
    {
      name: "ironwood manufacturing",
      ceo: "Hannah Brooks",
      businessType: "light manufacturing",
      primarySystem: "reporting and visibility systems",
      primaryTarget: systemTargets["reporting and visibility systems"],
      supports: [
        "data infrastructure and integrity",
        "automation architecture",
        "reporting and visibility systems",
      ],
      scope: "production reporting, qa workflows, escalation systems, executive summaries",
      tone: "infrastructure",
    },
    {
      name: "ridgeway property management",
      ceo: "Olivia Bennett",
      businessType: "property management",
      primarySystem: "customer operations systems",
      primaryTarget: systemTargets["customer operations systems"],
      supports: [
        "automation architecture",
        "workflow design and optimization",
        "customer operations systems",
      ],
      scope: "maintenance routing, tenant communication, vendor coordination, visibility systems",
      tone: "operations",
    },
    {
      name: "northfield dental group",
      ceo: "Emma Reyes",
      businessType: "multi-location dental practice",
      primarySystem: "customer operations systems",
      primaryTarget: systemTargets["customer operations systems"],
      supports: [
        "workflow design and optimization",
        "customer operations systems",
        "reporting and visibility systems",
      ],
      scope: "patient intake automation, scheduling workflows, recall systems, reporting dashboards",
      tone: "operations",
    },
    {
      name: "summit learning collective",
      ceo: "Sophia Ramirez",
      businessType: "education and training",
      primarySystem: "workflow design and optimization",
      primaryTarget: systemTargets["workflow design and optimization"],
      supports: [
        "workflow design and optimization",
        "customer operations systems",
        "reporting and visibility systems",
      ],
      scope: "enrollment workflows, onboarding systems, student communication, progress reporting",
      tone: "operations",
    },
  ];

  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");

  const renderSystemLinks = (systems) =>
    systems
      .map((system) => {
        const target = systemTargets[system];

        if (!target) {
          return `<span>${escapeHtml(system)}</span>`;
        }

        return `
          <button class="company-system-link" type="button" data-system-focus="${escapeHtml(
            target
          )}">
            ${escapeHtml(system)}
          </button>
        `;
      })
      .join("");

  const renderCompaniesMarkup = () =>
    companyProfiles
      .map(
        (company) => `
          <article class="company-card company-card-company company-card-${company.tone}">
            <div class="company-head">
              <h3>${escapeHtml(company.name)}</h3>
              <p class="company-lead">${escapeHtml(company.businessType)}</p>
              <button
                class="company-system-pill"
                type="button"
                data-system-focus="${escapeHtml(company.primaryTarget)}"
              >
                ${escapeHtml(company.primarySystem)}
              </button>
            </div>
            <dl class="company-meta">
              <div class="company-meta-line company-meta-ceo">
                <dt>ceo</dt>
                <dd>${escapeHtml(company.ceo)}</dd>
              </div>
              <div class="company-meta-line company-meta-supports">
                <dt>supports</dt>
                <dd>${renderSystemLinks(company.supports)}</dd>
              </div>
            </dl>
            <p class="company-support">${escapeHtml(company.scope)}</p>
          </article>
        `
      )
      .join("");

  const focusSystemCard = (targetCard) => {
    const card = track.querySelector(`[data-system-card="${targetCard}"]`);

    if (!card) {
      return;
    }

    const trackStyles = window.getComputedStyle(track);
    const gap = Number.parseFloat(trackStyles.columnGap || trackStyles.gap || "0") || 0;
    const left = Math.max(card.offsetLeft - gap * 0.25, 0);

    track.scrollTo({ left, behavior: "smooth" });
    card.classList.add("is-focused");
    window.clearTimeout(focusTimer);
    focusTimer = window.setTimeout(() => {
      card.classList.remove("is-focused");
    }, 1400);
  };

  const goToRelevantSystem = (targetCard) => {
    const animateSwitch = activeView !== "systems";

    window.clearTimeout(focusNavigationTimer);
    setSystemsView("systems", { animate: animateSwitch });
    focusNavigationTimer = window.setTimeout(() => {
      focusSystemCard(targetCard);
    }, animateSwitch ? 170 : 0);

    if (window.location.hash !== "#systems") {
      window.history.replaceState(null, "", "#systems");
    }
  };

  const syncCompaniesButton = (nextView) => {
    const isCompaniesView = nextView === "companies";
    companiesButton.classList.toggle("is-active", isCompaniesView);
    companiesButton.setAttribute("aria-pressed", String(isCompaniesView));
    companiesButton.textContent = isCompaniesView ? systemsButtonLabel : companiesButtonLabel;
  };

  const commitView = (nextView) => {
    track.innerHTML = nextView === "companies" ? renderCompaniesMarkup() : systemsMarkup;
    track.scrollLeft = 0;
    activeView = nextView;
    pendingView = nextView;
    carousel.dataset.view = nextView;
    syncCompaniesButton(nextView);
    updateControls();
  };

  const setSystemsView = (nextView, options = {}) => {
    const { animate = true } = options;

    if (nextView === activeView && nextView === pendingView) {
      syncCompaniesButton(nextView);
      carousel.dataset.view = nextView;
      return;
    }

    window.clearTimeout(switchTimer);
    window.clearTimeout(focusNavigationTimer);
    pendingView = nextView;

    if (!animate) {
      carousel.classList.remove("is-view-transitioning");
      commitView(nextView);
      return;
    }

    if (nextView === activeView) {
      carousel.classList.remove("is-view-transitioning");
      syncCompaniesButton(nextView);
      carousel.dataset.view = nextView;
      return;
    }

    carousel.classList.add("is-view-transitioning");
    switchTimer = window.setTimeout(() => {
      commitView(nextView);
      requestAnimationFrame(() => {
        carousel.classList.remove("is-view-transitioning");
      });
    }, 120);
  };

  companiesButton.addEventListener("click", () => {
    const nextView = activeView === "companies" ? "systems" : "companies";

    setSystemsView(nextView);

    if (nextView === "companies") {
      if (window.location.hash !== "#companies-view") {
        window.history.replaceState(null, "", "#companies-view");
      }
      return;
    }

    if (window.location.hash !== "#systems") {
      window.history.replaceState(null, "", "#systems");
    }
  });

  systemsLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setSystemsView("systems");
    });
  });

  companiesLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setSystemsView("companies");
    });
  });

  track.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-system-focus]");

    if (!trigger || !track.contains(trigger)) {
      return;
    }

    event.preventDefault();
    goToRelevantSystem(trigger.dataset.systemFocus);
  });

  const syncSystemsViewFromHash = () => {
    if (window.location.hash === "#companies-view") {
      setSystemsView("companies", { animate: false });
      return;
    }

    if (window.location.hash === "#systems") {
      setSystemsView("systems", { animate: false });
    }
  };

  syncSystemsViewFromHash();
  window.addEventListener("hashchange", syncSystemsViewFromHash);
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.15,
    }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
