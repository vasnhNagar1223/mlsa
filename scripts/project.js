gsap.from(".PROJECT-CONTAINER div", {
  y: 100,
  stagger: 0.1,
  filter: "blur(2px)",
  scale: 0,
  transform: "rotate(50deg)",
  scrollTrigger: {
    trigger: ".page4seemywork",
    scrub: 2,
    start: "top 80%",
    end: "top 10%",
  },
});
gsap.to(".PROJECT-CONTAINER div", {
  scrollTrigger: {
    trigger: ".page1",
    pin: true,
    scrub: 2,
  },
});

gsap.from(".page1Projects", {
  scale: 100,
  scrollTrigger: {
    trigger: ".page1",
    scrub: 2,
  },
});

if (window.innerWidth > 600) {
  Shery.mouseFollower({
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}

console.log("made by vansh nagar 8824458774");
