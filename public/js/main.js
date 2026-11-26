/* Center Fitness Academia — scripts (sem dependências) */
(function () {
  "use strict";

  var WA = "5544991063220";
  var doc = document;

  /* ---------- Cabeçalho: sombra ao rolar + menu mobile ---------- */
  var header = doc.querySelector(".site-header");
  var toggle = doc.querySelector(".menu-toggle");
  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 24);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  function setMenu(open) {
    if (!header || !toggle) return;
    header.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    doc.body.style.overflow = open ? "hidden" : "";
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      setMenu(!header.classList.contains("open"));
    });
    doc.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenu(false);
    });
  }

  /* ---------- Reveal ao rolar ---------- */
  var reveals = doc.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { rootMargin: "0px 0px -60px 0px" }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Status "Aberto agora" (America/Sao_Paulo) ---------- */
  function toMin(s) { var p = s.split(":"); return +p[0] * 60 + +p[1]; }
  var WEEKDAY = [[toMin("05:30"), toMin("12:00")], [toMin("14:00"), toMin("22:00")]];
  var SATURDAY = [[toMin("09:00"), toMin("12:00")]];
  var DAY_NAMES = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];

  function intervalsFor(day) {
    if (day >= 1 && day <= 5) return WEEKDAY;
    if (day === 6) return SATURDAY;
    return null; // domingo não consta nos horários divulgados
  }
  function fmt(min) {
    var h = Math.floor(min / 60), m = min % 60;
    return m === 0 ? h + "h" : h + "h" + String(m).padStart(2, "0");
  }
  function nowSP() {
    var parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Sao_Paulo", weekday: "short", hour: "numeric", minute: "numeric", hour12: false
    }).formatToParts(new Date());
    var get = function (t) { var f = parts.filter(function (p) { return p.type === t; })[0]; return f ? f.value : "0"; };
    var map = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    return { day: map[get("weekday")] || 0, minutes: (Number(get("hour")) % 24) * 60 + Number(get("minute")) };
  }
  function getStatus() {
    var n = nowSP();
    var today = intervalsFor(n.day);
    if (!today) return { state: "unknown", label: "Domingo: consulte pelo WhatsApp" };
    var cur = today.filter(function (i) { return n.minutes >= i[0] && n.minutes < i[1]; })[0];
    if (cur) return { state: "open", label: "Aberto agora · fecha às " + fmt(cur[1]) };
    var later = today.filter(function (i) { return n.minutes < i[0]; })[0];
    if (later) return { state: "closed", label: "Fechado · abre hoje às " + fmt(later[0]) };
    for (var i = 1; i <= 7; i++) {
      var d = (n.day + i) % 7, next = intervalsFor(d);
      if (next) return { state: "closed", label: "Fechado · abre " + (i === 1 ? "amanhã" : DAY_NAMES[d]) + " às " + fmt(next[0][0]) };
    }
    return { state: "unknown", label: "Consulte pelo WhatsApp" };
  }
  var statusEls = doc.querySelectorAll("[data-open-status]");
  function updateStatus() {
    var s = getStatus();
    statusEls.forEach(function (el) {
      el.setAttribute("data-state", s.state);
      var t = el.querySelector(".status-text");
      if (t) t.textContent = s.label;
    });
  }
  if (statusEls.length) { updateStatus(); setInterval(updateStatus, 60000); }

  /* ---------- Formulário de contato → WhatsApp ---------- */
  var form = doc.getElementById("contact-form");
  if (form) {
    var msgs = {
      name: "Informe seu nome.",
      phone: "Informe um telefone com DDD, ex.: (44) 99999-9999.",
      message: "Máximo de 500 caracteres."
    };
    var setErr = function (id, text) {
      var input = doc.getElementById(id);
      var box = doc.getElementById(id + "-erro");
      if (!input || !box) return;
      if (text) {
        input.setAttribute("aria-invalid", "true");
        input.setAttribute("aria-describedby", id + "-erro");
        box.textContent = text;
        box.hidden = false;
      } else {
        input.removeAttribute("aria-invalid");
        input.removeAttribute("aria-describedby");
        box.textContent = "";
        box.hidden = true;
      }
    };
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.elements.name.value.trim();
      var phone = form.elements.phone.value.trim();
      var interest = form.elements.interest.value;
      var message = form.elements.message.value.trim();
      var digits = phone.replace(/\D/g, "");
      var ok = true;

      var nameBad = name.length < 2 || name.length > 80;
      var phoneBad = !(digits.length === 10 || digits.length === 11);
      var msgBad = message.length > 500;
      setErr("name", nameBad ? msgs.name : "");
      setErr("phone", phoneBad ? msgs.phone : "");
      setErr("message", msgBad ? msgs.message : "");
      if (nameBad || phoneBad || msgBad) ok = false;
      if (!ok) {
        var first = form.querySelector("[aria-invalid='true']");
        if (first) first.focus();
        return;
      }

      var lines = [
        "Olá! Vim pelo site da Center Fitness.",
        "Nome: " + name,
        "Telefone: " + phone,
        "Interesse: " + interest
      ];
      if (message) lines.push("Mensagem: " + message);
      window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener,noreferrer");
      var note = doc.getElementById("form-note");
      if (note) note.textContent = "Pronto! O WhatsApp foi aberto com a sua mensagem. Se não abriu, toque no botão novamente.";
    });
  }
})();
