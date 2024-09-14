
let imgBox2 = document.querySelector(".img-box2");

let boxes = document.getElementsByClassName("box");

imgBox2.addEventListener("dragstart", (e) => {
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = ' hide';
    }, 0);
});
imgBox2.addEventListener("dragend", (e) => {
    e.target.className = ' img-box2';
});


for (box of boxes) {
    box.addEventListener("dragover", (e) => {
        e.preventDefault();
    })
    box.addEventListener("dragenter", (e) => {
        e.target.className += " dashed"
    })
    box.addEventListener("dragleave", (e) => {
        e.target.className = 'box';
    })
    box.addEventListener("drop", (e) => {
        e.target.append(imgBox2);

    })
}