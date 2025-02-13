const cursor = document.querySelector(".cursor1");

document.addEventListener("mousemove", (event) => {
  cursor.style.left = event.x + "px";
  cursor.style.top = event.y + "px";
});

gsap.to(".navBar", {
  y: -100,
  duration: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".page2",
    endTrigger: ".page5",
    start: "top top",
    end: "bottom top",
    toggleActions: "play reverse play reverse",
  },
});
gsap.from(".page2Div", {
  y: -100,
  scale: 0.8,
  borderRadius: "50px",
  scrollTrigger: {
    trigger: ".page2",
    end: "top 30%",
    scrub: 2,
  },
});
gsap.from(".page2Boxes", {
  y: 100,
});

gsap.to(".page1scaleInc", {
  scale: 1.2,
  scrollTrigger: {
    trigger: ".page2",
    end: "top 30%",
    scrub: 2,
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const cursor = document.getElementById("cursor");

  tabs.forEach((tab) => {
    tab.addEventListener("mouseenter", () => {
      const rect = tab.getBoundingClientRect();
      const parentRect = tab.parentElement.getBoundingClientRect();

      cursor.style.width = `${rect.width}px`;
      cursor.style.left = `${rect.left - parentRect.left}px`;
      cursor.style.opacity = "1";
    });
  });

  document.getElementById("tabs").addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
  });
});

// shery
Shery.mouseFollower({
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.textAnimate(".text-target" /* Element to target.*/, {
  //Parameters are optional.
  style: 2,
  y: 10,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

Shery.makeMagnet(".magnet-target" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = document.querySelector(".mySwiper");

  Object.assign(swiper, {
    slidesPerView: 3,
    breakpoints: {
      768: { slidesPerView: 3 }, // For tablets and larger screens
      480: { slidesPerView: 2 }, // For small tablets
      0: { slidesPerView: 1 }, // For mobile screens
    },
  });

  swiper.initialize();
});
