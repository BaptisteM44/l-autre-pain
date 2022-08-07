gsap.registerPlugin(ScrollTrigger);

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
gsap.to(".header_container", {
  scale: 1.2,
  duration: 1,
  scrollTrigger: {
    trigger: ".header_container",
    scrub: true,
    start: "bottom bottom",
  },
});
gsap.to(".about_content_img_scroll", {
  scale: 1.2,
  duration: 1,
  scrollTrigger: {
    trigger: ".about",
    scrub: true,
    start: "bottom bottom",
  },
});
