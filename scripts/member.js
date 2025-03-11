if (window.innerWidth > 600) {
  Shery.mouseFollower({
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}

const profiles = [
  {
    name: "Gaurav Singh",
    img: "./Public/Memberspfp/Gaurav Singh.jpg",
    linkedin: "",
    instagram: "",
    github: "",
  },
  {
    name: "Vansh Nagar",
    img: "./Public/Memberspfp/7617684d-5f62-4cfe-af8d-329071caddb5.jpg",
    linkedin: "https://www.linkedin.com/in/vansh-nagar-469648346/",
    instagram: "https://www.instagram.com/vanshnagar1029/",
    github: "https://github.com/vasnhNagar1223",
  },
  {
    name: "IMG-20250215-WA0046",
    img: "./Public/Memberspfp/IMG-20250215-WA0046.jpg",
    linkedin: "",
    instagram: "",
    github: "",
  },
  {
    name: "Priyal Bhardwaj",
    img: "./Public/Memberspfp/Priyal Bhardwaj.jpg",
    linkedin: "",
    instagram: "",
    github: "",
  },
  {
    name: "Rudraksh Goyal",
    img: "./Public/Memberspfp/Rudraksh Goyal.jpg",
    linkedin: "",
    instagram: "",
    github: "",
  },
  {
    name: "Saksham Kasliwal",
    img: "./Public/Memberspfp/Saksham Kasliwal .jpg",
    linkedin: "",
    instagram: "",
    github: "",
  },
  {
    name: "Shwetank Kumar",
    img: "./Public/Memberspfp/shwetank kumar.jpg",
    linkedin: "",
    instagram: "",
    github: "",
  },
];

const swiperContainer = document.querySelector(".mySwiper");

profiles.forEach((profile) => {
  const slide = document.createElement("swiper-slide");
  slide.classList.add("relative");
  slide.innerHTML = `
    <img src="${profile.img}" alt="${
    profile.name
  }" loading="lazy" class="PROJECTS swiper-lazy" />
    <div class="absolute bottom-0 right-0 left-0 z-50 h-[7vw] max-sm:h-[30vw] flex justify-center items-center gap-0">
      ${
        profile.instagram
          ? `<a href="${profile.instagram}" target="_blank"><i class="ri-instagram-line text-[3vw] text-white max-sm:text-[15vw]"></i></a>`
          : ""
      }
      ${
        profile.linkedin
          ? `<a href="${profile.linkedin}" target="_blank"><i class="ri-linkedin-fill text-[3vw] text-white max-sm:text-[15vw]"></i></a>`
          : ""
      }
      ${
        profile.github
          ? `<a href="${profile.github}" target="_blank"><i class="ri-github-fill text-[3vw] text-white max-sm:text-[15vw]"></i></a>`
          : ""
      }
    </div>
  `;
  swiperContainer.appendChild(slide);
});

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

document.addEventListener("DOMContentLoaded", function () {
  const swiper = document.querySelector(".mySwiper");

  Object.assign(swiper, {
    slidesPerView: 3,
    breakpoints: {
      768: { slidesPerView: 3 },
      480: { slidesPerView: 2 },
      0: { slidesPerView: 1 },
    },
  });

  swiper.initialize();
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

console.log("made by vansh nagar");
