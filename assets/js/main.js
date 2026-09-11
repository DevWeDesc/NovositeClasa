/* =========================================================
   CLASA — JS principal
   ========================================================= */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Ano no rodapé ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Header: sombra ao rolar ---------- */
  var header = document.getElementById("siteHeader");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Menu mobile ---------- */
  var navToggle = document.getElementById("navToggle");
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    });
    document.querySelectorAll("#primaryNav a").forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Hero carousel ---------- */
  (function heroCarousel() {
    var track = document.getElementById("heroTrack");
    var barsWrap = document.getElementById("heroBars");
    if (!track || !barsWrap) return;

    var slides = track.children.length;
    var index = 0;
    var timer = null;
    var DURATION = 6000;

    for (var i = 0; i < slides; i++) {
      var b = document.createElement("button");
      b.className = "hero__bar";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-label", "Slide " + (i + 1));
      b.innerHTML = "<span></span>";
      (function (n) {
        b.addEventListener("click", function () { go(n); });
      })(i);
      barsWrap.appendChild(b);
    }
    var bars = Array.prototype.slice.call(barsWrap.children);

    function render() {
      track.style.transform = "translateX(-" + index * 100 + "%)";
      bars.forEach(function (bar, n) {
        bar.classList.toggle("is-active", n === index && !reduceMotion);
        bar.classList.toggle("is-done", n < index);
        if (n !== index) bar.classList.remove("is-active");
        // reinicia a animação da barra ativa
        if (n === index) {
          var span = bar.querySelector("span");
          span.style.transition = "none";
          span.style.width = "0";
          void span.offsetWidth;
          span.style.transition = "";
          bar.classList.add("is-active");
        }
      });
    }

    function go(n) {
      index = (n + slides) % slides;
      render();
      restart();
    }
    function next() { go(index + 1); }
    function prev() { go(index - 1); }

    function restart() {
      if (timer) clearInterval(timer);
      if (reduceMotion) return;
      timer = setInterval(next, DURATION);
    }

    var nextBtn = document.getElementById("heroNext");
    var prevBtn = document.getElementById("heroPrev");
    if (nextBtn) nextBtn.addEventListener("click", next);
    if (prevBtn) prevBtn.addEventListener("click", prev);

    var hero = track.closest(".hero");
    hero.addEventListener("mouseenter", function () { if (timer) clearInterval(timer); });
    hero.addEventListener("mouseleave", restart);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) { if (timer) clearInterval(timer); } else { restart(); }
    });

    // swipe
    var startX = null;
    track.addEventListener("touchstart", function (e) { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener("touchend", function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 45) (dx < 0 ? next : prev)();
      startX = null;
    }, { passive: true });

    render();
    restart();
  })();

  /* ---------- Carrossel de logos (parceiros) ---------- */
  (function parceirosCarousel() {
    var root = document.getElementById("parceirosCarousel");
    var track = document.getElementById("parceirosTrack");
    var dotsWrap = document.getElementById("parceirosDots");
    if (!root || !track) return;

    var LOGOS = [
      "4rubber---athuale-(preto)", "911-fidc", "ampacet", "aramaan", "babibs",
      "cana", "coop", "dc-ar", "diauto", "etursa---viao-guaianzes---viao-curua",
      "faisa", "fame-brindes", "fb-servios", "gas", "gti-log---arget",
      "hortifruti-da-vila", "irsa", "itay-(logo-azul)", "local-service", "loi-brasil",
      "molas-padroeira", "nova-opo", "nutrii-liffe", "oficial-farma", "pires-do-rio",
      "prometeon", "r.v-manuteno-e-reparos", "rt", "ruma-paisagismo", "sacolo-saraiva",
      "smartcomp", "stn", "thermocom", "todo-mundo-feliz", "unyduy",
      "utilrent---pluri-rental", "vitrocolor", "viva", "vov-mocinha", "wiermann-miranda"
    ];

    function perGroup() {
      var w = window.innerWidth;
      if (w <= 560) return 4;
      if (w <= 860) return 9;
      return 10;
    }

    var groups = 0;

    function build() {
      track.innerHTML = "";
      dotsWrap.innerHTML = "";
      var size = perGroup();
      groups = Math.ceil(LOGOS.length / size);
      for (var g = 0; g < groups; g++) {
        var grp = document.createElement("div");
        grp.className = "logo-carousel__group";
        LOGOS.slice(g * size, g * size + size).forEach(function (name) {
          var cell = document.createElement("div");
          cell.className = "logo-carousel__cell";
          var img = document.createElement("img");
          img.src = "assets/img/parceiros/" + name + ".png";
          img.alt = "Empresa parceira da CLASA";
          img.loading = "lazy";
          cell.appendChild(img);
          grp.appendChild(cell);
        });
        track.appendChild(grp);

        var dot = document.createElement("button");
        dot.type = "button";
        dot.setAttribute("aria-label", "Grupo " + (g + 1));
        (function (n) { dot.addEventListener("click", function () { goto(n); }); })(g);
        dotsWrap.appendChild(dot);
      }
      cur = 0;
      update();
    }

    var cur = 0;
    function update() {
      track.style.transform = "translateX(-" + cur * 100 + "%)";
      Array.prototype.forEach.call(dotsWrap.children, function (d, n) {
        d.setAttribute("aria-current", n === cur ? "true" : "false");
      });
    }
    function goto(n) { cur = (n + groups) % groups; update(); }

    root.querySelector(".logo-carousel__arrow--next").addEventListener("click", function () { goto(cur + 1); });
    root.querySelector(".logo-carousel__arrow--prev").addEventListener("click", function () { goto(cur - 1); });

    var auto = null;
    function startAuto() {
      if (reduceMotion) return;
      stopAuto();
      auto = setInterval(function () { goto(cur + 1); }, 4500);
    }
    function stopAuto() { if (auto) clearInterval(auto); }
    root.addEventListener("mouseenter", stopAuto);
    root.addEventListener("mouseleave", startAuto);

    var rt;
    window.addEventListener("resize", function () {
      clearTimeout(rt);
      rt = setTimeout(build, 200);
    });

    build();
    startAuto();
  })();

  /* ---------- Acordeão ---------- */
  document.querySelectorAll(".accordion").forEach(function (acc) {
    var single = acc.hasAttribute("data-single");
    acc.querySelectorAll(".accordion__head").forEach(function (btn) {
      btn.setAttribute("aria-expanded", "false");
      btn.addEventListener("click", function () {
        var item = btn.closest(".accordion__item");
        var open = item.classList.contains("is-open");
        if (single) {
          acc.querySelectorAll(".accordion__item").forEach(function (it) {
            it.classList.remove("is-open");
            it.querySelector(".accordion__head").setAttribute("aria-expanded", "false");
          });
        }
        item.classList.toggle("is-open", !open);
        btn.setAttribute("aria-expanded", !open ? "true" : "false");
      });
    });
  });

  /* ---------- Carrossel de fotos ---------- */
  document.querySelectorAll(".photo-carousel").forEach(function (car) {
    var track = car.querySelector(".photo-carousel__track");
    var step = function () {
      var first = track.querySelector("img");
      return first ? first.getBoundingClientRect().width + 16 : 300;
    };
    var prev = car.querySelector(".photo-carousel__arrow--prev");
    var next = car.querySelector(".photo-carousel__arrow--next");
    if (next) next.addEventListener("click", function () { track.scrollBy({ left: step(), behavior: "smooth" }); });
    if (prev) prev.addEventListener("click", function () { track.scrollBy({ left: -step(), behavior: "smooth" }); });
  });

  /* ---------- FAQ em cards ---------- */
  document.querySelectorAll(".faq-card__toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var card = btn.closest(".faq-card");
      var open = card.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.textContent = open ? "Fechar" : "Ver resposta";
    });
  });

  /* ---------- Modais ---------- */
  (function modals() {
    var lastFocus = null;
    function open(id) {
      var m = document.getElementById(id);
      if (!m) return;
      lastFocus = document.activeElement;
      m.classList.add("is-open");
      m.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      var c = m.querySelector(".modal__close");
      if (c) c.focus();
    }
    function close(m) {
      m.classList.remove("is-open");
      m.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      if (lastFocus) lastFocus.focus();
    }
    document.querySelectorAll("[data-modal-open]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        open(btn.getAttribute("data-modal-open"));
      });
    });
    document.querySelectorAll(".modal").forEach(function (m) {
      m.addEventListener("click", function (e) {
        if (e.target === m || e.target.hasAttribute("data-modal-close")) close(m);
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        var openM = document.querySelector(".modal.is-open");
        if (openM) close(openM);
      }
    });
  })();

  /* ---------- Reveal on scroll ---------- */
  (function reveal() {
    var els = document.querySelectorAll(".reveal");
    if (!els.length) return;

    var revealAll = function () {
      els.forEach(function (el) { el.classList.add("is-visible"); });
    };

    if (!("IntersectionObserver" in window) || reduceMotion) {
      revealAll();
      return;
    }

    // A partir daqui o conteúdo pode começar escondido para animar.
    document.documentElement.classList.add("js-reveal");

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (el) { io.observe(el); });

    // Segurança: fallback por scroll, caso o IntersectionObserver não dispare.
    var checkInView = function () {
      var pending = document.querySelectorAll(".reveal:not(.is-visible)");
      if (!pending.length) {
        window.removeEventListener("scroll", onScrollReveal);
        return;
      }
      pending.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight - 40 && r.bottom > 0) el.classList.add("is-visible");
      });
    };
    var scrollTick = false;
    var onScrollReveal = function () {
      if (scrollTick) return;
      scrollTick = true;
      requestAnimationFrame(function () { scrollTick = false; checkInView(); });
    };
    window.addEventListener("scroll", onScrollReveal, { passive: true });
    window.addEventListener("load", function () { setTimeout(checkInView, 400); });
    checkInView();
  })();

})();
