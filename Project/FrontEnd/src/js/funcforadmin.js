// functionality for the order admin page
const addedFoodList = document.querySelector(".edit-food-container");
const editfoodbtn = document.querySelectorAll(".edit-food");
const closeEditFoodBtn = document.getElementById("editFoodClose");

const openFoodEdit = () => {
  addedFoodList.classList.toggle("open-edit-food");
};

const closeFoodEdit = () => {
  addedFoodList.classList.remove("open-edit-food");
};

editfoodbtn.forEach((button, index) => {
  button.addEventListener("click", openFoodEdit);
});

closeEditFoodBtn.addEventListener("click", closeFoodEdit);
