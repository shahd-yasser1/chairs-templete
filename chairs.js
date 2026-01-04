let images = [
  "Templeteimgs/main-banner-1-1600x700.jpg",
  "Templeteimgs/main-banner-2-1600x700.jpg",
];

let index = 0;
const slideImg = document.getElementById("slideImage");

setInterval(() => {
  index = (index + 1) % images.length;
  slideImg.style.opacity = 0; // fade out

  setTimeout(() => {
    slideImg.src = images[index];
    slideImg.style.opacity = 1; // fade in
  }, 300);
}, 3000);

const items = document.querySelectorAll(".list-product li");
const list = document.querySelector(".list-product");

items.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
      list.classList.remove("hide-others");
      return;
    }

    items.forEach((i) => i.classList.remove("active"));

    item.classList.add("active");

    list.classList.add("hide-others");
  });
});

const menuBtn = document.querySelector(".menu-btn");
const headerContent = document.querySelector(".header-content");
let overlay;

menuBtn.addEventListener("click", () => {
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.classList.add("nav-overlay");

    overlay.innerHTML = `
      <span class="close-btn">&times;</span>
      ${headerContent.querySelector(".Navbar").outerHTML}
    `;
    document.body.appendChild(overlay);

    const dropdowns = overlay.querySelectorAll(".dropdown");

    dropdowns.forEach((drop) => {
      const link = drop.querySelector(".navLinks");
      const menu = drop.querySelector(".dropdown-menu");
      menu.style.display = "none";

      link.addEventListener("click", (e) => {
        e.preventDefault();

        dropdowns.forEach((d) => {
          const m = d.querySelector(".dropdown-menu");
          if (m !== menu) m.style.display = "none";
        });

        menu.style.display = menu.style.display === "none" ? "block" : "none";
      });
    });

    const closeBtn = overlay.querySelector(".close-btn");
    closeBtn.addEventListener("click", () => {
      overlay.style.right = "-100%";
    });
  }

  overlay.style.right = "0";
});

const menuItems = document.querySelectorAll(".list-product li");
const contentBox = document.getElementById("productContent");

const contentss = {
  wood: "Wooden chairs are known for their durability, elegance, and timeless appeal. They are often crafted from high-quality natural woods such as oak, beech, walnut, or pine, each offering different levels of strength, color, and texture. ",
  plastic:
    "Lightweight plastic chairs, perfect for outdoor use, durable and easy to clean.",
  study:
    "A compact and modern study table suitable for students and home offices.",
  armoires:
    "A collection of elegant armoires with spacious storage and premium finishing.",
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    let key = item.dataset.content;

    menuItems.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");

    if (
      contentBox.style.display === "block" &&
      contentBox.innerHTML === contentss[key]
    ) {
      contentBox.style.display = "none";
      contentBox.innerHTML = "";
      return;
    }

    contentBox.innerHTML = contentss[key] || "";
    contentBox.style.display = "block";
  });
});

const discountDiv = document.querySelector(".discount-description");
const nameEl = discountDiv.querySelector(".descount-item");
const subtitleEl = discountDiv.querySelector(".discount-subtitle");
const textEl = discountDiv.querySelector(".desc-text");

const contents = [
  {
    name: "Penelope Astrid",
    subtitle: "(Marketing)",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure vitae omnis molestias minus...",
  },
  {
    name: "Alex Johnson",
    subtitle: "(Sales)",
    text: "Alex is an experienced sales manager who excels in customer relations and increasing revenue.",
  },
  {
    name: "Sophia Lee",
    subtitle: "(Design)",
    text: "Sophia is a creative designer with a passion for modern UI/UX and product design.",
  },
];

let currentIndex = 0;

function flipContent() {
  currentIndex = (currentIndex + 1) % contents.length;
  nameEl.textContent = contents[currentIndex].name;
  subtitleEl.textContent = contents[currentIndex].subtitle;
  textEl.textContent = contents[currentIndex].text;
}

setInterval(flipContent, 3000);

const container = document.getElementById("logosContainer");
let scrollAmount = 0;

function autoScroll() {
  scrollAmount += 1.7;
  if (scrollAmount >= container.scrollWidth / 2) {
    scrollAmount = 0;
  }
  container.scrollTo({
    left: scrollAmount,
    behavior: "smooth",
  });
}

setInterval(autoScroll, 50);
