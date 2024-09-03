function setError(id, error) {
  let element = document.getElementById(id);
  element.getElementsByClassName('formerror')[0].innerHTML = error;
};

function clearError() {
  let errors = document.getElementsByClassName('formerror');
  for (let item of errors) {
    item.innerHTML = '';
  }
}

function validateForm() {
  let returnval = true;
  clearError();

  let name = document.forms['myForm']['fname'].value;
  if (name.length < 5) {
    setError('name', '* Length of name is too short');
    returnval = false;
  }
  if (name.length == 0) {
    setError('name', '* Length of name cannot be zero');
    returnval = false;
  }

  let email = document.forms['myForm']['femail'].value;
  if (email.length < 5) {
    setError('email', '* Email length is too short');
    returnval = false;
  }

  let pass = document.forms['myForm']['fpass'].value;
  if (pass.length < 8) {
    setError('pass', '* Password should be at least 8 characters long');
    returnval = false;
  }

  let cpass = document.forms['myForm']['fcpass'].value;
  if (pass != cpass) {
    setError('cpass', '* Password and confirm password should match!');
    returnval = false;
  }

  return returnval;
}
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
let userName = document.getElementById("name");
let title = document.getElementById("title");

btn2.addEventListener("click", () => {
  btn.style.backgroundColor = 'white';
  btn.style.color = 'black';
  btn2.style.backgroundColor = 'rgba(24, 242, 60, 0.824)';
  btn2.style.color = 'white';
  userName.style.display = 'none';
  title.innerHTML = 'Sign in';
});
btn.addEventListener("click", () => {
  btn.style.backgroundColor = 'rgba(24, 242, 60, 0.824)';
  btn.style.color = 'white';
  btn2.style.backgroundColor = 'white';
  btn2.style.color = 'black';
  userName.style.display = 'flex';
  title.innerHTML = 'Sign Up';
});
