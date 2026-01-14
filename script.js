gsap.registerPlugin(ScrollTrigger)

const cursor = document.querySelector('.cursor');
const hoverElements = document.querySelectorAll('[data-cursor="hover"]');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
    });
});

hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
});

const tl = gsap.timeline();

tl.from(".logo", { y: -50, opacity: 0, duration: 1, ease: "power4.out" })
  .from(".nav-links li", { y: -50, opacity: 0, stagger: 0.1, duration: 0.8 }, "-=0.5")
  .from(".hero h4", { y: 30, opacity: 0, duration: 0.8 }, "-=0.5")
  .from(".hero h1", { y: 50, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.6")
  .from(".hero h3", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
  .from(".hero p", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
  .from(".hero-buttons a", { scale: 0, opacity: 0, stagger: 0.2, duration: 0.8, ease: "back.out(1.7)" }, "-=0.4");

gsap.utils.toArray('.fade-up').forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});

const textElement = document.querySelector(".typing-text");
const texts = ["Full Stack Developer", "Backend Mimarı", "Problem Çözücü", "Teknoloji Tutkunu"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;

(function type() {
    if (count === texts.length) { count = 0; }
    currentText = texts[count];

    if (isDeleting) {
        letter = currentText.slice(0, --index);
    } else {
        letter = currentText.slice(0, ++index);
    }

    textElement.textContent = letter;

    let typeSpeed = isDeleting ? 50 : 150;

    if (!isDeleting && letter.length === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && letter === "") {
        isDeleting = false;
        count++;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
})();