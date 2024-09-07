btn1.onclick = (evt) =>{
    console.log("btn1 was clicked");
    alert("btn1 was clicked");
}
btn2.ondblclick = (evt) =>{
    console.log("btn2 was clicked 2x");
    alert("btn2 was clicked");
}
box1.onmouseover = (evt) =>{
    console.log("you are inside div");
    alert("you are inside div");
}
btn3.onclick = (evt) =>{
    console.log(Date());
    alert("btn3 was clicked");
}
box2.onmousedown = (evt) =>{
    console.log("box2 was clicked");
    alert("box2 was clicked");
}
box3.onmouseout = (evt) =>{
    console.log("box3 was clicked");
    alert("box3 was clicked");
}
let myWindow;
btn5.onclick = (openWindow) =>{
   myWindow = window.open("http://www.google.com","","width=400px,height=400px");
}
btn6.onclick = (closeWindow) =>{
   myWindow.close();
}
