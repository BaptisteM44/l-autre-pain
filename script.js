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
gsap.to(".about_content_img", {
  yPercent: 30,
  duration: 1,
  scrollTrigger: {
    trigger: ".about",
    scrub: true,
    start: "top center",
  },
});
gsap.to(".about_content_right", {
  yPercent: 40,
  duration: 1,
  scrollTrigger: {
    trigger: ".about",
    scrub: true,
    start: "top center",
  },
});