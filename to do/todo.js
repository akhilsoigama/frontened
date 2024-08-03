let inputs = document.querySelector("#inp");
let text = document.querySelector(".text");
let Clear = document.querySelector("#clear");
let add = document.querySelector("#add");
function Add(){
    if(inputs.value == ""){
        alert("plese enter task");
    }
    else{
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-pen-to-square" ></i><i class="fa-solid fa-trash"></i>`
        text.appendChild(newEle);
        newEle.contentEditable = "false";
        newEle.className = `${inputs.value}`;
        inputs.value = "";
        let deleteIcon = newEle.querySelector(".fa-trash");
        deleteIcon.contentEditable = "false"
        let editIcon = newEle.querySelector(".fa-pen-to-square");
        add.addEventListener("click",function(){
            newEle.style.transform = `translate${(newEle*2)*215}px`;
        })
        editIcon.contentEditable = "false";
        deleteIcon.addEventListener("click", function() {
            newEle.remove();
        });
        editIcon.addEventListener("click", function(){
            newEle.contentEditable = "true";
        });
    };

};
// clear all
    Clear.onclick = () => {
        text.remove();
    }
