function validationMail() {
  const form = document.getElementById("form");
  const email = document.getElementById("email").value;
  const text = document.getElementById("text");
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let errors = [];

  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Your e-mail is valid";
    text.style.color = "#5BE472";
    document.querySelector("#success-icon").style.display = "block";
    document.querySelector("#error-icon").style.display = "none";
  } else {
    errors.push("Please enter valid e-mail");

  }

  if (email === "") {
    errors.push("E-mail is required");

  }
  
  if (errors.length > 0){
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.style.color = "#dc3545";
    document.querySelector("#error-icon").style.display = "block";
    document.querySelector("#success-icon").style.display = "none";

    let errorMessage = "";
    errors.forEach((error) => {
      errorMessage += error;
      errorMessage += ". ";
    });

    text.innerHTML = errorMessage;
  }
  else {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Your e-mail is valid";
    text.style.color = "#5BE472";
    document.querySelector("#success-icon").style.display = "block";
    document.querySelector("#error-icon").style.display = "none";
  }
  
}

function validationPassword() {
  var form = document.getElementById("form");
  var password = document.getElementById("password").value;
  var textPassword = document.getElementById("text-password");
  var errors = [];

  if (password === "") {
    errors.push("Password is required");
  }

  if (password.length < 6 || password.length > 8) {
    errors.push("Password need to have between 6 and 8 characters");
  }

  if (errors.length > 0) {
    form.classList.remove("valid");
    form.classList.add("invalid");
    textPassword.style.color = "rgb(220, 53, 69)";
    document.querySelector("#error-icon-password").style.display = "block";
    document.querySelector("#success-icon-password").style.display = "none";

    let errorMessage = "";
    errors.forEach((error) => {
      errorMessage += error;
      errorMessage += ". ";
    });

    textPassword.innerHTML = errorMessage;
  }
}

function validationCheckbox() {
  var form = document.getElementById("form");
  var checkbox = document.getElementById("checkbox-input");

  if ((checkbox.checked = false)) {
    form.classList.remove("valid");
    form.classList.add("invalid");
  }
}

function validation() {
  validationMail();
  validationPassword();
  //  validationCheckbox();
}

document.getElementById("sign-in-button").addEventListener("click", openModal);
function openModal() {
  document.querySelector(".modal").style.opacity = 1;
  document.querySelector(".modal").style.zIndex = 3;
}

document
  .getElementById("button-close-modal")
  .addEventListener("click", closeModal);
function closeModal() {
  document.querySelector(".modal").style.opacity = 0;
  document.querySelector(".modal").style.zIndex = -1;
}

/* document.addEventListener(
  "click",
  function(event) {
    // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
    if (
      event.target.matches(".button-close-modal") ||
      !event.target.closest(".modal")
    ) {
      closeModal()
    }
  },
  false
)

function closeModal() {
  document.querySelector(".modal").style.opacity = 1;
} */
