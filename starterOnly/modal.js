function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelector(".close"); //const pour fermer modal

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Ferme le modale lorsqu'on clique sur la croix
const handleCloseModal = (event) => {
  console.log(event);
  modalbg.style.display = "none";
};
closeModal.addEventListener("click", handleCloseModal);

//test part 2 du 2 :

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche l'envoi du formulaire par défaut
});

const prenomInput = document.getElementById("first-id");
const nomInput = document.getElementById("last-id");
const emailInput = document.getElementById("email-id");
const birthDateInput = document.getElementById("birthdate-id");
const nombreConcoursInput = document.getElementById("nombreConcours");
const conditionsCheckbox = document.getElementById("conditions");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche l'envoi du formulaire par défaut

  if (validerFormulaire()) {
    form.submit(); // Soumet le formulaire si la validation réussit
  }
});

function validerFormulaire() {
  console.log(prenomInput.value);
  console.log(prenomInput.id);
  console.log(prenomInput.className);
  console.log(nomInput.value);
  console.log(nomInput.id);
  console.log(nomInput.className);
  let isFormValid = true;
  const spanMsgError = document.getElementById("first-error-msg-id");
  const spanMsgErrorLast = document.getElementById("last-error-msg-id");
  const spanMsgErrorEmail = document.getElementById("email-error-msg-id");
  const spanMsgErrorBirthdate = document.getElementById(
    "birthdate-error-msg-id"
  );

  if (prenomInput.value.length < 2) {
    spanMsgError.style.display = "block";
    isFormValid = false;
  } else {
    spanMsgError.style.display = "none";
  }

  if (nomInput.value.length < 2) {
    spanMsgErrorLast.style.display = "block";
    isFormValid = false;
  } else {
    spanMsgErrorLast.style.display = "none";
  }

  if (validateEmail(emailInput.value)) {
    spanMsgErrorEmail.style.display = "none";
  } else {
    spanMsgErrorEmail.style.display = "block";
    isFormValid = false;
  }

  if (validateDate(birthDateInput.value)) {
    spanMsgErrorBirthdate.style.display = "none";
  } else {
    spanMsgErrorBirthdate.style.display = "block";
    isFormValid = false;
  }

  if (isNaN(nombreConcoursInput.value)) {
    isFormValid = false;
  }

  if (!document.querySelector('input[name="choix"]:checked')) {
    //alert("Veuillez sélectionner un choix de concours.");
    isFormValid = false;
  }

  if (!conditionsCheckbox.checked) {
    //alert("Veuillez accepter les conditions générales.");
    isFormValid = false;
  }

  return isFormValid;
}
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateDate(date) {
  const currentDate = new Date(date);
  if (isNaN(currentDate.getFullYear())) return false;
  const currentYear = currentDate.getFullYear();
  const todayYear = new Date().getFullYear();
  return todayYear - currentYear < 13 ? false : true;
}
