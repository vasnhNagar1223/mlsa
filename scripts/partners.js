// Dynamic content array (for future flexibility)
const partners = [
  { img: "partner2.png", link: "#" },
  { img: "partner2.png", link: "#" },
  { img: "partner3.png", link: "#" },
  { img: "partner4.png", link: "#" },
];

const sponsors = [
  { img: "./Public/partners/SiGlobal.jpg", link: "https://www.siglobal.com" },
  { img: "sponsor2.png", link: "#" },
  { img: "sponsor3.png", link: "#" },
  { img: "sponsor4.png", link: "#" },
];

function renderSection(sectionId, data) {
  const container = document.getElementById(sectionId);
  container.innerHTML = data
    .map(
      (item) =>
        `<a href="${item.link}" target="_blank" class="bg-white p-4 shadow rounded-lg block">
            <img src="${item.img}" alt="${item.img}" class="w-full h-32 object-contain">
        </a>`
    )
    .join("");
}

renderSection("partners-section", partners);
renderSection("sponsors-section", sponsors);
