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

// Form validation for the addemploy page
const form = document.getElementById("form");
const fname = document.getElementById("fname");
const sname = document.getElementById("sname");
const dob = document.getElementById("dob");
const price = document.getElementById("price");
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
  const validTypes = ["image/jpeg", "image/png", "image/jpeg", "image/pdf"];
  return validTypes.includes(file.type);
};

const isValidFileSize = (file) => {
  const maxSizeInBytes = 2 * 1024 * 1024;
  return file.size <= maxSizeInBytes;
};

const validateInput = () => {
  const fnameValue = fname.value.trim();
  const snameValue = sname.value.trim();
  const dobValue = dob.value.trim();
  const priceValue = price.value.trim();
  const fileValue = file.files[0];

  if (fnameValue === "") {
    setError(fname, "Username is required");
  } else {
    setSuccess(fname);
  }

  if (snameValue === "") {
    setError(sname, "Username is required");
  } else {
    setSuccess(sname);
  }

  if (dobValue === "") {
    setError(dob, "Username is required");
  } else {
    setSuccess(dob);
  }

  if (priceValue === "") {
    setError(price, "Username is required");
  } else {
    setSuccess(price);
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
