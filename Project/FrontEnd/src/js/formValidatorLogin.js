// Form validation for the login page
const form = document.getElementById("form");
const useremName = document.getElementById("userOrEmail");
const password = document.getElementById("password");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateInput();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;

  element.value = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;

  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateInput = () => {
  const UorEValue = useremName.value.trim();
  const passwordValue = password.value.trim();

  if (UorEValue === "") {
    setError(useremName, "Email or User name");
  } else {
    setSuccess(useremName);
  }

  if (passwordValue === "") {
    setError(password, "");
  } else if (passwordValue.length < 8) {
    setError(password, "");
  } else {
    setSuccess(password);
  }
};
