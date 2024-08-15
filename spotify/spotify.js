let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById("masterPlay");
let musicbar = document.getElementById("musicbar");
let pause = document.getElementById("pause"); 

let songs = [
    {songName: "DJ bravo", filePath: "song/1.mp3", coverPath: "covers/1.mp3"},
    {songName: "song 2", filePath: "song/2.mp3", coverPath: "covers/2.mp3"},
    {songName: "song 3", filePath: "song/3.mp3", coverPath: "covers/3.mp3"},
    {songName: "song 4", filePath: "song/4.mp3", coverPath: "covers/4.mp3"},
    {songName: "song 5", filePath: "song/5.mp3", coverPath: "covers/5.mp3"}
];

masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-pause");
    } else {
        audioElement.pause();
        masterPlay.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-pause");
    }
});

audioElement.addEventListener("timeupdate", () => {
    console.log("timeupdate");
});
