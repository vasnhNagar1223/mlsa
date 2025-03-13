const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

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

Shery.mouseFollower({
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.textAnimate(".text-target", {
  style: 2,
  y: 10,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

Shery.makeMagnet(".magnet-target", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

const PROJECTS = document.querySelectorAll(".PROJECTS");
const cursor1 = document.querySelector(".cursor1");
PROJECTS.forEach((element) => {
  const image = element.getAttribute("data-image");
  element.addEventListener("mouseenter", () => {
    cursor1.style.height = "40px";
    cursor1.style.width = "40px";
    cursor1.style.borderRadius = "0";
    cursor1.style.backgroundImage = `url(${image})`;
    cursor1.style.mixBlendMode = "normal";
    cursor1.style.backgroundImage;
  });
  element.addEventListener("mouseleave", () => {
    cursor1.style.height = "30px";
    cursor1.style.width = "30px";
    cursor1.style.borderRadius = "50%";
    cursor1.style.backgroundImage = ``;
    cursor1.style.mixBlendMode = "difference";
  });
});

handleCloseButtonclick = () => {
  const button = document.querySelector(".navSideBar");
  button.style.display = "none";
  const sidebarButton = document.querySelector(".ri-menu-line");
  sidebarButton.style.display = "initial";
};

handlesidebarButton = () => {
  const button = document.querySelector(".navSideBar");
  button.style.display = "initial";
  const sidebarButton = document.querySelector(".ri-menu-line");
  sidebarButton.style.display = "none";
};

if (window.innerWidth > 600) {
  Shery.mouseFollower({
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}
