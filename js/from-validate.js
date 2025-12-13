const nameError = document.getElementById("nameError");
const genderError = document.getElementById("genderError");
const checkError = document.getElementById("checkError");
const btnSub = document.getElementById("subBtn");

btnSub.disabled = true;

function checkName() {
    const personName = document.getElementById("name").value;

    if (personName === "") {
        nameError.innerText = "Name cannot be empty";
    } else if (personName.length < 3) {
        nameError.innerText = "Name must be at least 3 characters long";
    } else {
        nameError.innerText = "";
    }

    formValidate();
    validateCheckbox();
}

function validateCheckbox() {
    if (!document.querySelector("input[type='checkbox']:checked")) {
        checkError.innerText = "Select at least one option";

    } else {
        checkError.innerText = "";
    }
}

function formValidate() {
    if (!document.querySelector("input[name='gender']:checked")) {
        genderError.innerText = "Select any one gender";
    } else {
        genderError.innerText = "";
    }

    if (nameError.innerText === "" && genderError.innerText === "" && checkError.innerText === "") {
        btnSub.disabled = false;
    } else {
        btnSub.disabled = true;
    }
}
