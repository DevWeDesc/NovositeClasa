/* =========================================================
   CLASA — Cabeçalho e rodapé compartilhados
   Editar aqui reflete em todas as páginas.
   ========================================================= */
(function () {
  "use strict";

  var NAV = [
    { href: "index.html", label: "Home", key: "home" },
    { href: "institucional.html", label: "Institucional", key: "institucional" },
    { href: "programas.html", label: "Programas", key: "programas" },
    { href: "trabalhe-conosco.html", label: "Trabalhe Conosco", key: "trabalhe-conosco" },
    { href: "alugue-nosso-espaco.html", label: "Alugue Nosso Espaço", key: "alugue" }
  ];

  // Link do sistema de inscrição do Jovem Aprendiz
  var SEJA_APRENDIZ_URL = "https://clasa.conectrh.com.br/p/NovoCandidatoSimplificadoPreAprendizagem/PBe6nlstGtpH5xNKjpWZ5KsZuETLGo7MhXxsduGezfgdQpomkZ";

  // Redes sociais
  var SOCIAL = {
    instagram: "https://www.instagram.com/clasa.oficial/",
    facebook: "https://www.facebook.com/1363357683678070",
    linkedin: "https://www.linkedin.com/company/clasalions/",
    youtube: "https://www.youtube.com/@clasa.oficial"
  };

  // Ícones de traço (outline), herdam a cor do texto (currentColor)
  var ICONS = {
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    whatsapp: '<path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    youtube: '<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>'
  };

  function icon(name) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[name] + "</svg>";
  }

  var page = document.body.getAttribute("data-page") || "";

  /* ---------- Header ---------- */
  var navItems = NAV.map(function (n) {
    var cur = n.key === page ? ' aria-current="page"' : "";
    return '<li><a href="' + n.href + '"' + cur + ">" + n.label + "</a></li>";
  }).join("");

  var headerHTML =
    '<header class="site-header" id="siteHeader">' +
      '<div class="site-header__inner">' +
        '<a class="brand" href="index.html" aria-label="CLASA — página inicial">' +
          '<img class="brand__logo" src="assets/img/logo-clasa.png" alt="CLASA Aprendiz" />' +
          '<span class="brand__tag">Casa Lions de Adolescentes<br />de Santo André</span>' +
        "</a>" +
        '<button class="nav-toggle" id="navToggle" aria-label="Abrir menu" aria-expanded="false" aria-controls="primaryNav"><span></span></button>' +
        '<nav class="primary-nav" id="primaryNav" aria-label="Menu principal">' +
          "<ul>" + navItems + "</ul>" +
          '<div class="header-cta">' +
            '<a class="btn" href="' + SEJA_APRENDIZ_URL + '" data-cta="seja-aprendiz" target="_blank" rel="noopener">Seja Aprendiz</a>' +
            '<a class="btn" href="para-empresas.html">Para Empresas</a>' +
          "</div>" +
        "</nav>" +
      "</div>" +
    "</header>";

  /* ---------- Footer ---------- */
  var socialLinks = [
    ["instagram", "Instagram"],
    ["facebook", "Facebook"],
    ["linkedin", "LinkedIn"],
    ["youtube", "YouTube"]
  ].map(function (s) {
    return '<a href="' + SOCIAL[s[0]] + '" data-social="' + s[0] + '" aria-label="' + s[1] + '" target="_blank" rel="noopener">' + icon(s[0]) + "</a>";
  }).join("");

  var footerHTML =
    '<footer class="site-footer">' +
      '<div class="container">' +
        '<div class="site-footer__grid">' +
          '<div class="footer-brand">' +
            '<img src="assets/img/lions-international.png" alt="Lions Clubs International" />' +
            "<span>Lions Clube Santo André — Jardim<br />Lions Clube Santo André — Centro</span>" +
          "</div>" +
          '<div class="footer-col">' +
            "<h3>Contato</h3>" +
            '<div class="footer-contact footer-contact--row">' +
              '<a href="tel:+551144287932">' + icon("phone") + "(11) 4428-7932</a>" +
              '<a href="https://wa.me/5511973991689" target="_blank" rel="noopener">' + icon("whatsapp") + "(11) 97399-1689</a>" +
              '<a href="mailto:clasa@clasa.org.br">' + icon("mail") + "clasa@clasa.org.br</a>" +
            "</div>" +
            "<h3>Localização</h3>" +
            '<div class="footer-contact"><p>' + icon("pin") + "Avenida Dom Jorge Marcos de Oliveira n° 50, Vila Guiomar - Santo André - SP</p></div>" +
            '<nav class="footer-links" aria-label="Links do rodapé">' +
              '<a href="institucional.html">Institucional</a>' +
              '<a href="programas.html">Programas</a>' +
              '<a href="diretoria.html">Diretoria</a>' +
              '<a href="contribua.html">Contribua</a>' +
              '<a href="faq.html">Dúvidas frequentes</a>' +
            "</nav>" +
          "</div>" +
          '<div class="footer-col">' +
            "<h3>Redes sociais</h3>" +
            '<div class="social-links">' + socialLinks + "</div>" +
          "</div>" +
        "</div>" +
        '<p class="site-footer__legal">© <span id="year"></span> CLASA — Casa Lions de Adolescentes de Santo André · CNPJ 48.135.800/0001-46</p>' +
      "</div>" +
    "</footer>" +
    '<a class="help-fab" href="faq.html" aria-label="Dúvidas frequentes">?</a>';

  var hSlot = document.getElementById("site-header");
  var fSlot = document.getElementById("site-footer");
  if (hSlot) hSlot.outerHTML = headerHTML;
  if (fSlot) fSlot.outerHTML = footerHTML;
})();
