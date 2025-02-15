const p2tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2imagecontainer",
    scrub: 2,
    end: "top 0%",
    start: "top 60%",
  },
});

p2tl.from(".list", {
  scale: 0.5,
  duration: 4,
});

gsap.to(".page1comingsoon", {
  y: 500,
  scale: 2,
  scrollTrigger: {
    trigger: ".page2imagecontainer",
    scrub: true,
  },
});

if (window.innerWidth > 600) {
  Shery.mouseFollower({
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}
