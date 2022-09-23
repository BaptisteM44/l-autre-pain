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
// gsap.to(".about_content_img", "(min-width: 733px)", {
//   yPercent: 20,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".about",
//     scrub: true,
//     start: "center center",
//   },
// });
gsap.to(".about_content_right", {
  "(max-width: 733px)": {
    yPercent: 11,
    duration: 1,
    scrollTrigger: {
      trigger: ".about",
      scrub: true,
      start: "center center",
    },
  },
});
// ScrollTrigger.matchMedia({
//   "(max-width: 2600px)": function() {
//       gsap.set(".link", {
//           y: 1670,
//           xPercent: -15,
//           skewY: 30,
//           scale: 1.6,
//       });
