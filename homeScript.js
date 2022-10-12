// **************************************
// Dark mode
// **************************************

const headerLinks = Array.from(document.querySelectorAll(".header-link"));
const footerLinks = Array.from(document.querySelectorAll(".footer-links"));
const contactLinks = Array.from(document.querySelectorAll(".contact-link"));
const product = Array.from(document.querySelectorAll(".product"));
const footer = document.querySelector(".footer");
const body = document.querySelector(".section-body");
const extras = document.querySelector(".extras");
const contactHeading = document.querySelector(".contact-heading");
const darkBulb = document.querySelector(".dark-mode-btn");
const bulbImg = document.querySelector(".bulb-img");
const logo = document.querySelector(".logo");

const darkModeBtn = document
  .querySelector(".dark-mode-btn")
  .addEventListener("click", darkMode);

function darkMode() {
  body.classList.toggle("dark");
  console.log(body.classList);
  footer.classList.toggle("footer-dark");
  extras.classList.toggle("extras-dark");
  contactHeading.classList.toggle("contact-heading-dark");
  darkBulb.classList.toggle("dark-mode-btn-dark");

  for (let i = 0; i < headerLinks.length; i++) {
    headerLinks[i].classList.toggle("links-dark");
  }

  for (let j = 0; j < footerLinks.length; j++) {
    footerLinks[j].classList.toggle("links-dark");
  }

  for (let k = 0; k < contactLinks.length; k++) {
    contactLinks[k].classList.toggle("links-dark");
  }

  for (let l = 0; l < product.length; l++) {
    product[l].classList.toggle("item-dark");
  }
  changeLogo();
  bulbChange();
}

function bulbChange() {
  const bodyArray = Array.from(body.classList);
  console.log(bodyArray);
  if (bodyArray.includes("dark")) {
    bulbImg.src = "https://i.ibb.co/GPPtnTn/on-light-bulb.png";
  } else {
    bulbImg.src = "https://i.ibb.co/z5bRyms/off-light-bulb.png";
  }
}
function changeLogo() {
  const bodyArray = Array.from(body.classList);
  if (bodyArray.includes("dark")) {
    logo.src = "https://i.ibb.co/Ct6LrLK/Untitled-final.png";
  } else {
    logo.src = "https://i.ibb.co/mcy9WKg/healthkart-logo-2.png";
  }
}

// **************************************
// Coupon
// **************************************
const couponCloseBtn = document.querySelector(".coupon-close");
const coupon = document.querySelector(".coupon-container");
const overlay = document.querySelector(".overlay");

window.onload = openCoupon();
function openCoupon() {
  coupon.style.visibility = "visible";
  overlay.classList.remove("hidden");
}
couponCloseBtn.addEventListener("click", closeCoupon);
function closeCoupon() {
  coupon.style.visibility = "hidden";
  overlay.classList.add("hidden");
}
