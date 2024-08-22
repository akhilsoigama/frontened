document.cookie = "name1 = akhil4885658";
document.cookie = "name2 = akhil4985658";
document.cookie = "name3 = akhil4685658";
document.cookie = "name4 = akhil4285658";
document.cookie = "name5 = akhil4785658";
document.cookie = "name6 = akhil4385658";
// let key = prompt("enter your key");
// let value = prompt("enter your value");
// document.cookie=`${encodeURIComponent(key)} = ${encodeURIComponent(value)}`;
console.log(document.cookie);

// worker API

let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let result = document.querySelector("#result")
let w;
start.addEventListener("click",()=>{
    if(typeof(w) == "undefined"){
        w = new Worker("demo_worker.js");
    };
    w.onmessage = function(event){
        result.innerHTML = event.data;
    };
})
stop.addEventListener( "click",() =>{
    w.terminate();
    w = undefined;
})