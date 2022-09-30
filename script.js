// gsap.registerPlugin(ScrollTrigger);

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
  yPercent: 20,
  duration: 1,
  scrollTrigger: {
    trigger: ".about",
    scrub: true,
    start: "top top",
  },
});
gsap.to(".about_content_right", {
  yPercent: 17,
  duration: 1,
  scrollTrigger: {
    trigger: ".about",
    scrub: true,
    start: "top top",
  },
}); 
  }
});


const tl = gsap.timeline();

tl.from(".title1, .header_logo", 2, {
  y: 80,
  ease: "power4.out",
  delay: 0.6,
  skewY: 4,
  opacity:0,
  stagger: {
    amount: 0.3
  }
})
.from(".nav_ul", 2, {
  x: 80,
  ease: "power4.out",
  delay: -1.8,
  opacity:0,
  stagger: {
    amount: 0
  }
})