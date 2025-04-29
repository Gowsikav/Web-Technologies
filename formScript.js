function validate(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let number = document.getElementById("number").value.trim();
  let gender = document.getElementById("gender").value;
  let email = document.getElementById("email").value.trim();

  let nameError = document.getElementById("name-error");
  let numberError = document.getElementById("number-error");
  let genderError = document.getElementById("gender-error");
  let emailError = document.getElementById("email-error");

  nameError.innerHTML = "";
  numberError.innerHTML = "";
  genderError.innerHTML = "";
  emailError.innerHTML = "";

  let isValid = true;

  if (name.length <= 3) {
    nameError.innerHTML = "Name must be more than 3 characters.";
    isValid = false;
  }

  if (number.length < 10) {
    numberError.innerHTML = "Contact number must be exactly 10 digits.";
    isValid = false;
  }

  if (gender === "") {
    genderError.innerHTML = "Please select a gender.";
    isValid = false;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    emailError.innerHTML = "Please enter a valid email address.";
    isValid = false;
  }

  if (isValid) {
    console.log("Name:", name);
    console.log("Number:", number);
    console.log("Gender:", gender);
    console.log("Email:", email);
    alert("Form submitted successfully!");
  }
}
