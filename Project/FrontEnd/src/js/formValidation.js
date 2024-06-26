// Form validation for the signup page
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateInput();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;

  alert(message);
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;

  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const characters = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return characters.test(String(email).toLowerCase());
};

const validatePhoneNumber = (phoneNumber) => {
  const phoneRegex = /^(?:\+251|0)?9\d{8}$/;
  const nextNumbs = phoneNumber.replace(/[\s-()]/g, "");
  return phoneRegex.test(nextNumbs);
};

const validateInput = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Enter a valid email address");
  } else {
    setSuccess(email);
  }

  if (phoneNumberValue === "") {
    setSuccess(phoneNumber);
  } else if (!validatePhoneNumber(phoneNumberValue)) {
    setError(phoneNumber, "Enter a valid phone number");
  } else {
    setSuccess(phoneNumber);
  }

  if (passwordValue === "") {
    setError(password, "password must be required");
  } else if (passwordValue.length < 8) {
    setError(password, "password must be 8 character");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "password must be required");
  } else if (password2Value !== passwordValue) {
    setError(password2, "confirm the password");
  } else {
    setSuccess(password2);
  }
};
