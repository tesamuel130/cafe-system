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

// Form validation for the addfood page
const form = document.getElementById("form");
const fname = document.getElementById("fname");
const price = document.getElementById("price");
const imgDis = document.getElementById("imgd");
const file = document.getElementById("imgfile");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateInput();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;

  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;

  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidImageType = (file) => {
  const validTypes = ["image/jpeg", "image/png", "image/jpeg"];
  return validTypes.includes(file.type);
};

const isValidFileSize = (file) => {
  const maxSizeInBytes = 2 * 1024 * 1024;
  return file.size <= maxSizeInBytes;
};

const validateInput = () => {
  const fnameValue = fname.value.trim();
  const priceValue = price.value.trim();
  const imgDisValue = imgDis.value.trim();
  const fileValue = file.files[0];

  if (fnameValue === "") {
    setError(fname, "Username is required");
  } else {
    setSuccess(fname);
  }

  if (priceValue === "") {
    setError(price, "price required");
  } else {
    setSuccess(price);
  }

  if (imgDisValue === "") {
    setError(imgDis, "image discription is required");
  } else {
    setSuccess(imgDis);
  }

  if (!fileValue) {
    setError(file, "File is required");
  } else if (!isValidImageType(fileValue)) {
    setError(file, "file is not valid type");
  } else if (!isValidFileSize(fileValue)) {
    setError(file, "file is not valid size");
  } else {
    setSuccess(file);
  }
};
