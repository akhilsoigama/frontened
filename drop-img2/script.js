let input = document.getElementById("file-input");
let dropImg = document.getElementById("drop-img");
let imgView = document.getElementById("img-view");

input.addEventListener("change", uploadImage);

function uploadImage() {
    let url = URL.createObjectURL(input.files[0]);
    imgView.style.backgroundImage = `URL(${url})`;
    imgView.textContent = "";
    imgView.style.border = "none";
}
dropImg.addEventListener("dragover", (e) => {
    e.preventDefault();
});
dropImg.addEventListener("drop", (e) => {
    e.preventDefault();
    input.files = e.dataTransfer.files;
    console.log(input.files);
    uploadImage();
})