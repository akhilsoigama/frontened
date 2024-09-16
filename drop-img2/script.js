let input = document.getElementById("choose-img");
let dropArea = document.getElementById("drop-area");
let imgBox = document.getElementById("img-box");

input.addEventListener("change", function chooseImg (){

});

function chooseImg() {
    let urlLink = URL.createObjectURL(input.files[0]);
    imgBox.style.backgroundImage = `URL(${urlLink})`;
    imgBox.textContent = "";
    imgBox.style.border = "none";
}
dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
});
dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    input.files = e.dataTransfer.files;
    console.log(input.files);
    chooseImg();
})