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

function showOverlay() {
  document.getElementById("socialsOverlay").style.display = "flex";
}
function hideOverlay() {
  document.getElementById("socialsOverlay").style.display = "none";
}

if (window.innerWidth > 600) {
  Shery.mouseFollower({
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}

const overlayContent = document.querySelector(".overlay-content");

overlayContent.innerHTML = ` <div
      class="overlayContent relative h-screen w-full flex max-sm:flex-wrap backdrop-blur-md"
    >
      <i
        class="absolute right-5 top-3 max-sm:absolute ri-close-large-fill text-5xl cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.75)]"
        onclick="hideOverlay()"
      ></i>
      <!--left-->
      <div
        class="flex justify-between flex-col bg-white bg-opacity-15 rounded-lg w-1/3 max-sm:w-full m-[1vw] max-sm:m-[13px]"
      >
        <div>
          <h1 class="m-[0.5vw] mt-2 text-[35px] font-bold">
            Microsoft Learn Student Ambassadors
          </h1>

          <h2 class="border-b-2 mx-2 text-[15px] pb-[1vw]">
            BIT JIPUR CHAPTER
          </h2>
          <div class="m-[1vw] text-2xl font-bold">About Us</div>
          <div class="m-[1vw]">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Proin eget
            eleifend vitae aenean curae volutpat. Rutrum vel rhoncus proin elit
            turpis; lacinia montes feugiat. Aenean velit aptent fermentum
            natoque ad. Fermentum vivamus consectetur et netus nunc. Quam morbi
            eleifend non nulla metus a porttitor. Nunc litora fermentum feugiat
            tortor eros augue elementum leo. Ultricies egestas erat duis donec
            mattis turpis auctor. Eleifend himenaeos eros augue elementum leo.
            Ultricies egestas erat duis donec mattis turpis auctor. Eleifend
            himenaeos
          </div>
        </div>

        <div class="m-[1vw]">
          <div class="flex gap-[1vw] items-center">
            <img
              src="./Public/dakshpfp.jpg"
              class="w-[50px] rounded-full object-cover"
              alt="img"
            />
            <a
              href="https://mvp.microsoft.com/en-US/studentambassadors/profile/68c11703-b4e9-4f40-a4fc-d88638eba224"
            >
              <div>Daksh Gupta</div>
            </a>
          </div>
          <div>
            Founding Lead, Microsoft Learn Student Ambassadors - BIT Jaipur
            Chapter
          </div>
        </div>
      </div>
      <!--right-->

      <div class="w-full overflow-hidden m-[1vw]">
        <div class="text-3xl mb-[1vw] max-sm:text-center font-bold">
          OUR COMMUNALS
        </div>
        <div
          class="bg-white bg-opacity-15 rounded-lg p-[1vw] flex gap-[1vw] max-sm:m-[13px] justify-start items-center mb-[1vw] overflow-x-auto"
        >
          <a
            href="https://github.com/mlsa-bitjaipur"
            target="_blank"
            class="flex items-center gap-4 bg-gray-900 py-6 px-6 rounded-lg hover:bg-black transition magnet-target"
          >
            <i class="ri-github-fill text-6xl"></i>
          </a>
          <a
            href="https://www.instagram.com/mlsa_bitjaipur"
            target="_blank"
            class="flex items-center gap-4 bg-gray-900 py-6 px-6 rounded-lg hover:bg-pink-500 transition magnet-target"
          >
            <i class="ri-instagram-line text-6xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/mlsa-bit-jaipur-chapter/posts/"
            target="_blank"
            class="flex items-center gap-4 bg-gray-900 py-6 px-6 rounded-lg hover:bg-blue-700 transition magnet-target"
          >
            <i class="ri-linkedin-box-fill text-6xl"></i>
          </a>
          <a
            href="https://x.com/mlsabitjaipur"
            target="_blank"
            class="flex items-center gap-4 bg-gray-900 py-6 px-6 rounded-lg hover:bg-sky-500 transition magnet-target"
          >
            <i class="ri-twitter-fill text-6xl righ"></i>
          </a>
          <a
            href="https://www.youtube.com/@mlsa_bitjaipur"
            target="_blank"
            class="flex items-center gap-4 bg-gray-900 py-6 px-6 rounded-lg hover:bg-red-600 transition magnet-target"
          >
            <i class="ri-youtube-fill text-6xl"></i>
          </a>
        </div>
        <div
          class="bg-white bg-opacity-15 rounded-lg max-sm:m-[13px] p-[2vw] overflow-y-scroll h-full"
        >
          <div
            class="elfsight-app-48ffdb2f-093a-4942-bf71-2574b71e4d05"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </div>
`;
