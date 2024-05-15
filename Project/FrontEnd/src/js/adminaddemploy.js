// functionality for the order admin page
const addedEmployList = document.querySelector(".edit-employ-container");
const editemploybtn = document.querySelectorAll(".edit-employer");
const closeEditEmployBtn = document.getElementById("editEmployClose");

const openFoodEdit = () => {
  addedEmployList.classList.toggle("open-edit-employer");
};

const closeFoodEdit = () => {
  addedEmployList.classList.remove("open-edit-employer");
};

editemploybtn.forEach((button, index) => {
  button.addEventListener("click", openFoodEdit);
});

closeEditEmployBtn.addEventListener("click", closeFoodEdit);
