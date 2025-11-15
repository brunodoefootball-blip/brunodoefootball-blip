/* ============================
   MENU MOBILE
============================ */
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav ul");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  navToggle.classList.toggle("active");
});

/* Fechar menu ao clicar em item */
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
    navToggle.classList.remove("active");
  });
});

/* ============================
   SCROLL REVEAL
============================ */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  
  reveals.forEach(el => {
    const elementPos = el.getBoundingClientRect().top;
    if (elementPos < windowHeight - 80) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ============================
   SMOOTH SCROLL FIX
============================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

/* ============================
   DIGITAÇÃO ANIMADA
============================ */
const typingText = document.querySelector("#typing-effect");
const words = [
  "📈 Transforme seu conteúdo em lucro",
  "⚡ Venda mesmo com poucos seguidores",
  "💡 A fórmula do marketing digital moderno",
  "🔥 Estratégias de impacto, zero enrolação"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const current = words[wordIndex];
  typingText.textContent = current.substring(0, charIndex);

  if (!deleting && charIndex < current.length) {
    charIndex++;
  } else if (deleting && charIndex > 0) {
    charIndex--;
  } else {
    deleting = !deleting;
    if (!deleting) wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, deleting ? 50 : 100);
}

if (typingText) typeEffect();

/* ============================
   REDIRECIONAMENTO AUTOMÁTICO
============================ */
document.querySelectorAll("[data-link]").forEach(btn => {
  btn.addEventListener("click", () => {
    window.location.href = btn.getAttribute("data-link");
  });
});

/* ============================
   DESTACAR ITEM DO MENU
============================ */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

function highlightMenu() {
  let current = "";

  sections.forEach(sec => {
    const secTop = sec.offsetTop;
    if (pageYOffset >= secTop - 100) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", highlightMenu);
