function move(){
    let redBox = document.querySelector("#box2");
    let position = 0;
    let animation = setInterval(animate , 5);

    function animate(){
        if(position == 400){
            clearInterval(animation);
            redBox.style.backgroundColor = "blue";
        }
        else{
        position++;
        redBox.style.top = position + "px";
        redBox.style.left = position + "px";
        redBox.style.backgroundColor = "red";
        }
    }
} 


let icon = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";
     icon.addEventListener ("click", () => {
        if(currMode === "light"){
            currMode = "dark";
            body.classList.add("dark");
            body.classList.remove("light");
            }
        else{
            currMode = "light"
            body.classList.add("light");
            body.classList.remove("dark");    
        }
        console.log(currMode);
    });