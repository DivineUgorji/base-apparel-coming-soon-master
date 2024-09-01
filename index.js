const form = document.getElementById("form");
const email = document.getElementById("email");
const emailSuccess = document.getElementById("email-success-page");
const mainPage = document.getElementById("main-page");
const submit = document.getElementById("submit");
const formControl = document.querySelector(".form-control");

function showError(input, message) {
  const formControl = input.parentElement;
  const errorIcon = document.querySelector(".error-icon");
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
  errorIcon.classList.remove("hide-visibility");
  formControl.classList.add("shake");
}

formControl.addEventListener("animationend", (e) => {
  formControl.classList.remove("shake");
});

// show success message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
  emailSuccess.classList.remove("page-disabled");
  mainPage.classList.add("page-disabled");
}

function checkEmail(input) {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRegex.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Please provide a valid email");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (email.value.trim() === "") {
    showError(email, "Please provide your email");
  } else {
    checkEmail(email);
  }
});
