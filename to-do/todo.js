let inputs = document.querySelector("#inp");
let text = document.querySelector(".text");
let Clear = document.querySelector("#clear");
let add = document.querySelector("#add");
let store = document.querySelector("#display");


let userArray = [];
let objstr = localStorage.getItem('users');
if (objstr != null) {
    userArray = JSON.parse(objstr);
}

function displayInfo() {
    let statement = '';
    userArray.forEach((user, i) => {
        statement += `<tr>
                            <th scope="row">${i + 1}</th>
                            <td>${user.task}</td>
                        <td>
                            <i class="fa-solid fa-pen-to-square" onclick="editInfo(${i})"></i>
                            <i class="fa-solid fa-trash" onclick="deleteInfo(${i})"></i>
                        </td>
                    </tr>`;
    });
    store.innerHTML = statement;
}
displayInfo();

add.onclick = () => {
    const task = inputs.value;
    userArray.push({ 'task': task });
    saveInfo(userArray);
    inputs.value = '';
    displayInfo();
}
function saveInfo(userArray) {
    let str = JSON.stringify(userArray);
    localStorage.setItem('users', str);
}
function editInfo(index) {
    const newTask = prompt("Edit your task:", userArray[index].task);
    if (newTask !== null && newTask !== "") {
        userArray[index].task = newTask;
        saveInfo(userArray);
        displayInfo();
    }
    alert("your task was updated");
}

function deleteInfo(index) {
    if (confirm("Are you sure you want to delete this task?")) {
        userArray.splice(index, 1);
        saveInfo(userArray);
        displayInfo();
        alert("your task was is deleted");
    }
    
}

// Clear all
Clear.onclick = () => {
    while (store.firstChild) {
        store.removeChild(store.firstChild);
    }
    userArray.splice(0);
    saveInfo(userArray);
    confirm("Are you sure you want to delete all task?")
};


