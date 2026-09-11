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

  // Link do sistema de inscrição do Jovem Aprendiz (CLASA fornece a URL real)
  var SEJA_APRENDIZ_URL = "#";

  // Redes sociais (CLASA fornece as URLs reais)
  var SOCIAL = { instagram: "#", facebook: "#", linkedin: "#", youtube: "#" };

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
            '<a class="btn" href="' + SEJA_APRENDIZ_URL + '" data-cta="seja-aprendiz">Seja Aprendiz</a>' +
            '<a class="btn" href="para-empresas.html">Para Empresas</a>' +
          "</div>" +
        "</nav>" +
      "</div>" +
    "</header>";

  /* ---------- Footer ---------- */
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
              '<a href="tel:+551144287932"><svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.6 22 2 13.4 2 2.9c0-.6.5-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1L6.6 10.8z"/></svg>(11) 4428-7932</a>' +
              '<a href="https://wa.me/5511973991689" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 00-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1012 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1-1.4-1-2.6 0-1.2.6-1.8.9-2.1.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.3.3c-.1.1-.3.3-.1.5.2.4.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.6 1.6.3.1.5.1.7-.1l.9-1c.2-.2.4-.2.6-.1l2 .9c.3.1.5.2.5.4.1.2.1.8-.1 1.4z"/></svg>(11) 97399-1689</a>' +
              '<a href="mailto:clasa@clasa.org.br"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm8 7L4 6.5V6l8 4.5L20 6v.5L12 11z"/></svg>clasa@clasa.org.br</a>' +
            "</div>" +
            "<h3>Localização</h3>" +
            '<div class="footer-contact"><p><svg viewBox="0 0 24 24"><path d="M12 2C8 2 5 5 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-4-3-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"/></svg>Avenida Dom Jorge Marcos de Oliveira, nº 50 — Vila Guiomar, Santo André — SP</p></div>' +
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
            '<div class="social-links">' +
              '<a href="' + SOCIAL.instagram + '" data-social="instagram" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4a3.8 3.8 0 01-1.4-.9 3.8 3.8 0 01-.9-1.4c-.2-.4-.3-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 4.9a4.9 4.9 0 100 9.8 4.9 4.9 0 000-9.8zm0 8.1a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm6.3-8.3a1.1 1.1 0 11-2.3 0 1.1 1.1 0 012.3 0z"/></svg></a>' +
              '<a href="' + SOCIAL.facebook + '" data-social="facebook" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3V13h2.6v8h3.6z"/></svg></a>' +
              '<a href="' + SOCIAL.linkedin + '" data-social="linkedin" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M6.9 8.5V21H3V8.5h3.9zM5 2.8a2.3 2.3 0 110 4.6 2.3 2.3 0 010-4.6zM21 21h-3.9v-6.6c0-1.6-.6-2.7-2-2.7-1.1 0-1.7.7-2 1.4-.1.3-.1.6-.1 1V21H9.1s.1-11.3 0-12.5H13v1.8c.5-.8 1.4-1.9 3.5-1.9 2.5 0 4.5 1.7 4.5 5.2V21z"/></svg></a>' +
              '<a href="' + SOCIAL.youtube + '" data-social="youtube" aria-label="YouTube"><svg viewBox="0 0 24 24"><path d="M23 12s0-3.2-.4-4.7c-.2-.9-.9-1.5-1.7-1.7C19.4 5.2 12 5.2 12 5.2s-7.4 0-8.9.4c-.8.2-1.5.8-1.7 1.7C1 8.8 1 12 1 12s0 3.2.4 4.7c.2.9.9 1.5 1.7 1.7 1.5.4 8.9.4 8.9.4s7.4 0 8.9-.4c.8-.2 1.5-.8 1.7-1.7.4-1.5.4-4.7.4-4.7zM9.7 15.3V8.7l6 3.3-6 3.3z"/></svg></a>' +
            "</div>" +
          "</div>" +
        "</div>" +
        '<p class="site-footer__legal">© <span id="year"></span> CLASA — Casa Lions de Adolescentes de Santo André · CNPJ 48.135.800/0001-46</p>' +
      "</div>" +
    "</footer>" +
    '<a class="help-fab" href="https://wa.me/5511973991689" target="_blank" rel="noopener" aria-label="Fale conosco pelo WhatsApp">?</a>';

  var hSlot = document.getElementById("site-header");
  var fSlot = document.getElementById("site-footer");
  if (hSlot) hSlot.outerHTML = headerHTML;
  if (fSlot) fSlot.outerHTML = footerHTML;
})();
