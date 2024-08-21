let inputs = document.querySelector("#inp");
let text = document.querySelector(".text");
let Clear = document.querySelector("#clear");
let add = document.querySelector("#add");
let store = document.querySelector("#store")
function Add() {
    if (inputs.value == "") {
        alert("please enter task");
    }  
     if(inputs.value) {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-check"></i><i class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        newEle.contentEditable = "false";
        inputs.value = "";
        let deleteIcon = newEle.querySelector(".fa-trash");
        let editIcon = newEle.querySelector(".fa-pen-to-square");
        let saveIcon = newEle.querySelector(".fa-check");
        editIcon.contentEditable = "false";
        saveIcon.contentEditable = "false";
        saveIcon.style.display = "none"; 
        deleteIcon.addEventListener("click", function() {
            newEle.remove();
        });
        editIcon.addEventListener("click", function() {
            newEle.contentEditable = "true";
            deleteIcon.style.display = "none";
            saveIcon.style.display = "inline"; 
            editIcon.style.display = "none"; 
        });
        saveIcon.addEventListener("click", function() {
            newEle.contentEditable = "false";
            saveIcon.style.display = "none"; 
            editIcon.style.display = "inline"; 
            deleteIcon.style.display = "inline"; 
        });
    }
};
//  Add task on Enter key press
inputs.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        Add();  
    }
});
// Clear all
Clear.onclick = () => {
    while (text.firstChild) {
        text.removeChild(text.firstChild);
    }
};
// Add task on button click
add.onclick = () => {
    Add();
    let key = "task";
    let value = `${inputs}`;
    localStorage.setItem(key,value);
};