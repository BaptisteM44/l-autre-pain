let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".location",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".location").offsetWidth,
  },
});

ScrollTrigger.matchMedia({

  "(min-width: 780px)": function(){
   gsap.to(".about_content_img", {
  yPercent: 25,
  duration: 1,
  scrollTrigger: {
    trigger: ".about",
    scrub: true,
    start: "top top",
  },
});
gsap.to(".about_content_right", {
  yPercent: 30,
  duration: 1,
  scrollTrigger: {
    trigger: ".about",
    scrub: true,
    start: "top top",
  },
}); 
  }
});


const tl = gsap.timeline({ delay: 0.6 });

tl.from(".title1, .header_logo", {
  duration: 2,
  y: 80,
  ease: "power4.out",
  skewY: 4,
  opacity: 0,
  stagger: 0.3
})
.from(".nav_ul", {
  duration: 2,
  x: 80,
  ease: "power4.out",
  opacity: 0
}, "-=1.8"); // Ici, utilisation de la position relative pour l'animation de .nav_ul

// Assurez-vous que les animations ne sont pas exécutées inutilement sur des appareils inadaptés
ScrollTrigger.matchMedia({
  "(min-width: 780px)": function() {
    // Animations spécifiques pour les appareils de largeur supérieure à 780px
  }
});