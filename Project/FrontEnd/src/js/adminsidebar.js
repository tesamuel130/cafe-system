//adding responsive navigation bar for the admin pages
const openAdminNav = document.getElementById("adminNavi");
const closeAdminNav = document.getElementById("closeAdminSide");
const listAdminNav = document.querySelector(".admin-cont-left");

const openAdminSide = () => {
  listAdminNav.classList.toggle("open-nav");
};

const closeAdminSide = () => {
  listAdminNav.classList.remove("open-nav");
};

openAdminNav.addEventListener("click", openAdminSide);

closeAdminNav.addEventListener("click", closeAdminSide);
