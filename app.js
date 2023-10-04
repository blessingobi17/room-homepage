const data = [
  {
    img: "./images/desktop-image-hero-1.jpg",
    mediaImg: "./images/mobile-image-hero-1.jpg",
    head: "Discover innovative ways to decorate",
    desc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    img: "./images/desktop-image-hero-2.jpg",
    mediaImg: "./images/mobile-image-hero-2.jpg",
    head: "We are available all across the globe",
    desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    img: "./images/desktop-image-hero-3.jpg",
    mediaImg: "./images/mobile-image-hero-3.jpg",
    head: "Manufactured with the best materials",
    desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const prevBtn2 = document.querySelector("#prev-btn2");
const nextBtn2 = document.querySelector("#next-btn2");
const img = document.querySelector("#headerImg");
const mediaImg = document.querySelector(".mediaHeaderImg");
const head = document.querySelector("#containerHeader");
const para = document.querySelector("#containerText");
let index = 0;

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    img.src = data[index].img;
    mediaImg.src = data[index].mediaImg;
    head.innerHTML = data[index].head;
    para.innerHTML = data[index].desc;
  }
});
nextBtn.addEventListener("click", () => {
  if (index < data.length - 1) {
    index++;
    img.src = data[index].img;
    mediaImg.src = data[index].mediaImg;
    head.innerHTML = data[index].head;
    para.innerHTML = data[index].desc;
  }
});

prevBtn2.addEventListener("click", () => {
  if (index > 0) {
    index--;
    img.src = data[index].img;
    mediaImg.src = data[index].mediaImg;
    head.innerHTML = data[index].head;
    para.innerHTML = data[index].desc;
  }
});
nextBtn2.addEventListener("click", () => {
  if (index < data.length - 1) {
    index++;
    img.src = data[index].img;
    mediaImg.src = data[index].mediaImg;
    head.innerHTML = data[index].head;
    para.innerHTML = data[index].desc;
  }
});

const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
  const navHeader = document.querySelector(".nav-header");
  const overlay = document.querySelector(".overlay");

  if (navHeader.style.display == "flex") {
    navHeader.style.display = "none";
  } else {
    navHeader.style.display = "flex";
    overlay.style.display = "block";
  }
});

const Iclose = document.querySelector("#icon-close");

Iclose.addEventListener("click", () => {
  const navHeader = document.querySelector(".nav-header");
  const overlay = document.querySelector(".overlay");

  if (navHeader.style.display == "flex") {
    navHeader.style.display = "none";
    overlay.style.display = "none";
  }
});
