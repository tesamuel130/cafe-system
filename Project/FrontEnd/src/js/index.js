//login and register btn function
import toggleMenu from "./regBtn.js";
document
  .getElementById("openAdminModalBtn")
  .addEventListener("click", toggleMenu);

// data featching for the menu list and the foodlist files
// data featching for the menu list

// import MenuList from "./menulist.js";
// MenuList();

// data featching for the food list

// import FoodList from "./foodlist.js";
// FoodList();

// add items to the cart
// import AddCart from "./addToCart.js";
// AddCart();

//edit the navigation bar
const navBar = document.getElementById("navi");
const listedNav = document.getElementById("listedNav");

navBar.addEventListener("click", () => {
  listedNav.classList.toggle("open-nav");
});

//edit the book history button
const bookHisbtn = document.getElementById("bookHist");
const boodDitCloseBtn = document.getElementById("hisDitClose");
const bookDetail = document.getElementById("bookDetail");

const openBookDet = () => {
  bookDetail.classList.toggle("openBookDit");
};

const closeBookDet = () => {
  bookDetail.classList.remove("openBookDit");
};

bookHisbtn.addEventListener("click", openBookDet);

boodDitCloseBtn.addEventListener("click", closeBookDet);
