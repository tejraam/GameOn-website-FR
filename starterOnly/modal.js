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
const divFormulaire = document.getElementById("formulaire-id");
const formulaireValide = document.getElementById("formulaireValide-id");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  divFormulaire.style.display = "block";
  formulaireValide.style.display = "none";
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
const nombreConcoursInput = document.getElementById("nombre-concours-id");
const conditionsCheckbox = document.getElementById("conditions-id");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche l'envoi du formulaire par défaut

  if (validerFormulaire()) {
    form.reset(); // clear formulaire
    divFormulaire.style.display = "none";
    formulaireValide.style.display = "block";
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
  const spanMsgErrorVille = document.getElementById("ville-error-msg-id");
  const spanMsgErrorConditions = document.getElementById(
    "conditions-error-msg-id"
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

  if (verifierVilles()) {
    spanMsgErrorVille.style.display = "none";
  } else {
    spanMsgErrorVille.style.display = "block";
    isFormValid = false;
  }

  if (conditionsCheckbox.checked) {
    spanMsgErrorConditions.style.display = "none";
  } else {
    spanMsgErrorConditions.style.display = "block";
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

function verifierVilles() {
  const checkboxes = document.querySelectorAll('input[type = "radio"]');
  for (const checkbox of checkboxes) {
    if (checkbox.checked) return true;
  }
  return false;
}

// Validation Formulaire :

console.log(validerFormulaire);

/*
if (validerFormulaire()) {
  console.log(validerFormulaire);
  formulaireValide.style.display = "none";
} else {
  formulaireValide.style.display = "block";
  isFormValid = false;
}
  */
