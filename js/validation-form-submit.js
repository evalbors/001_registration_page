function validationMail() {
  var form = document.getElementById("form");
  var email = document.getElementById("email").value;
  var text = document.getElementById("text");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Your e-mail is valid";
    text.style.color = "#5BE472";
    document.querySelector("#success-icon").style.display = "block";
    document.querySelector("#error-icon").style.display = "none";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please enter valid e-mail";
    text.style.color = "#dc3545";
    document.querySelector("#error-icon").style.display = "block";
    document.querySelector("#success-icon").style.display = "none";
  }

  if (email === "") {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "E-mail is required";
    document.querySelector("#error-icon").style.display = "block";
    document.querySelector("#success-icon").style.display = "none";
  }
}

function validationPassword() {
  var form = document.getElementById("form");
  var password = document.getElementById("password").value;
  var textPassword = document.getElementById("text-password");

  if (password === "") {
    form.classList.remove("valid");
    form.classList.add("invalid");
    textPassword.innerHTML = "Password is required";
    textPassword.style.color = "rgb(220, 53, 69)";
    document.querySelector("#error-icon-password").style.display = "block";
    document.querySelector("#success-icon-password").style.display = "none";
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
  validationCheckbox();
}

document.getElementById("sign-in-button").addEventListener("click", openModal);
function openModal() {
  document.querySelector('.modal').style.opacity = 1;
  document.querySelector('.modal').style.zIndex = 3;

}

document.getElementById("button-close-modal").addEventListener("click", closeModal);
function closeModal() {
  document.querySelector('.modal').style.opacity = 0;
  document.querySelector('.modal').style.zIndex = -1;
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