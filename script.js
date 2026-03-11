// Sorunsuz, bugsız, tertemiz Scroll ve Reveal animasyonları
gsap.registerPlugin(ScrollTrigger);

// 1. Navbar Scroll Efekti
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Sayfa Yüklendiğinde Hero Kısmı Animasyonu
window.addEventListener("load", () => {
    gsap.to(".hero .reveal-up", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
    });
});

// 3. Sayfa Kaydırıldıkça Bölümlerin Belirmesi
const revealElements = document.querySelectorAll('section .reveal-up');

revealElements.forEach((el) => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%", // Eleman ekranın %85'ine geldiğinde başlar
            toggleActions: "play none none none" // Sadece bir kere çalışır, yukarı çıkınca geri gitmez
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
    });
});