const form = document.getElementById("form");
const email = document.getElementById("email");

function showError(input, message) {
  const formControl = input.parentElement;
  const errorIcon = document.querySelector(".error-icon");
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
  errorIcon.classList.remove("hide-visibility");
}

// show success message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// function checkRequiredInput(emailInput) {}

function isValidEmail(email) {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(String(email).toLowerCase);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // checkRequiredInput(email);

  if (email.value.trim() === "") {
    showError(email, "Please provide your email");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Please provide a valid email");
  } else if (isValidEmail) {
    showSuccess(email);
  }
});
