let firstName = document.getElementById("First-name");
let lastName = document.getElementById("Last-name");
let email = document.getElementById("Email");
let mobileNum = document.getElementById("Mobile-num");
let password = document.getElementById("Password");
let confirmPass = document.getElementById("Confirm-pass");
let registerInfo = document.getElementById("Submit");

let newArray = [];

let getData = localStorage.getItem("user-Information");
if (getData != null) {
    newArray = JSON.parse(getData);
};

registerInfo.onclick = () => {
    saveData();
};
function saveData() {
    let userData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        mobileNum: mobileNum.value,
        password: password.value
    };
    newArray.push(userData);
    let setData = JSON.stringify(newArray);
    localStorage.setItem("user-Information", setData);
};
