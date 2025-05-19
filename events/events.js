let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");

btn1.addEventListener("click", () => {
    btn1.style.background = "red";
});

btn2.addEventListener("dblclick", () => {
    btn2.style.background = "blue";
});

box1.addEventListener("mouseenter", () => {
    box1.style.background = "green";
});
btn3.addEventListener("mousemove", () => {
    btn3.style.background = "skyblue";
})
box2.addEventListener("click", () => {
    box2.style.animation = "move 4s 2 ease";

    box2.addEventListener("animationstart", () => {
        box2.innerHTML = "the animation has started";
        box2.style.background = "coral";
    });

    box2.addEventListener("animationiteration", () => {
        box2.innerHTML = "the animation was played again";
        box2.style.background = "green";
    });

    box2.addEventListener("animationend", () => {
        box2.innerHTML = "the animation has completed";
        box2.style.background = "crimson";
    });
})
btn4.addEventListener("focus", () => {
    btn4.innerHTML = "focus btn"
})
box3.addEventListener("mouseout", () => {
    box3.style.background = "coral";
});

box4.addEventListener("mousedown", () => {
    box4.style.background = "crimson";

});

let myWindow;
btn5.onclick = (openWindow) => {
    myWindow = window.open("http://www.google.com", "", "width=400px,height=400px");
}
btn6.onclick = (closeWindow) => {
    myWindow.close();
}

// onchange
function changeBackgroundColor() {

    let selectedColor = document.getElementById("colorPicker").value;
    document.body.style.backgroundColor = selectedColor;
}

// email
function email() {
    let emailInput = document.getElementById("emailInput");
    let errorMessage = document.getElementById('errorMessage');
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    }
    let emailValue = emailInput.value;

    if (!validateEmail(emailValue)) {
        errorMessage.textContent = "Please enter a valid email.";
    } else {
        alert("succesessfull");
        errorMessage.textContent = "";
    }
}



