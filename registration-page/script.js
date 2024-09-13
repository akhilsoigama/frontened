let firstName = document.getElementById("First-name");
let lastName = document.getElementById("Last-name");
let email = document.getElementById("Email");
let mobileNum = document.getElementById("Mobile-num");
let password = document.getElementById("Password");
let confirmPass = document.getElementById("Confirm-pass");
let registerInfo = document.getElementById("Submit");
let verify = document.getElementById("verify");

let newArray = [];

let getData = localStorage.getItem("user-Information");
if (getData != null) {
  newArray = JSON.parse(getData);
}

registerInfo.onclick = (e) => {
  e.preventDefault();
  if (validation()) {
    saveData();
    verify.style.visibility = "visible";
  }
};

function saveData() {
  let userData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    mobileNum: mobileNum.value,
    password: password.value,
  };
  newArray.push(userData);
  let setData = JSON.stringify(newArray);
  localStorage.setItem("user-Information", setData);
}

function setError(id, errorMsg) {
  let element = document.getElementById(id);
  let errorElement = element.nextElementSibling;
  if (errorElement && errorElement.classList.contains("error")) {
    errorElement.innerHTML = errorMsg;
  }
}

function clearError() {
  let errors = document.getElementsByClassName("error");
  for (let item of errors) {
    item.innerHTML = "";
  }
}

function validation() {
  clearError();
  let returnval = true;

  if (firstName.value.length < 4) {
    setError("First-name", "* Length of first name is too short");
    returnval = false;
  }
  if (firstName.value.length === 0) {
    setError("First-name", "* Please enter a first name");
    returnval = false;
  }

  if (lastName.value.length < 4) {
    setError("Last-name", "* Length of last name is too short");
    returnval = false;
  }
  if (lastName.value.length === 0) {
    setError("Last-name", "* Please enter a last name");
    returnval = false;
  }

  if (!email.value) {
    setError("Email", "* Please enter a valid email address");
    returnval = false;
  }

  if (mobileNum.value.length !== 10 || isNaN(mobileNum.value)) {
    setError("Mobile-num", "* Please enter a valid 10-digit mobile number");
    returnval = false;
  }
  if (mobileNum.value.length === 0) {
    setError("Mobile-num", "* Please enter a mobile number");
    returnval = false;
  }

  if (password.value.length < 8) {
    setError("Password", "* Password should be at least 8 characters long");
    returnval = false;
  }

  if (password.value !== confirmPass.value) {
    setError("Confirm-pass", "* Password and confirm password should match!");
    returnval = false;
  }
  if (confirmPass.value.length === 0) {
    setError("Confirm-pass", "* Please confirm your password");
    returnval = false;
  }

  return returnval;
}

let eyeIcon = document.getElementById("icon-eye");
let eyeSlash = document.getElementById("icon-eye-slash");
let eyeIcon2 = document.getElementById("icon-eye2");
let eyeSlash2 = document.getElementById("icon-eye-slash2");

eyeIcon.addEventListener("click",() =>{
  eyeIcon.style.display = "none";
  if(password.type == "password"){
    password.type = "text";
  }
  eyeSlash.style.display = "block";

});
eyeSlash.addEventListener("click",() =>{
  eyeIcon.style.display = "block";
  if(password.type == "text"){
    password.type = "password";
  }
  eyeSlash.style.display = "none";
});

eyeIcon2.addEventListener("click",() =>{
  eyeIcon2.style.display = "none";
  if(confirmPass.type == "password"){
    confirmPass.type = "text";
  }
  eyeSlash2.style.display = "block";

});
eyeSlash2.addEventListener("click",() =>{
  eyeIcon2.style.display = "block";
  if(confirmPass.type == "text"){
    confirmPass.type = "password";
  }
  eyeSlash2.style.display = "none";
});
