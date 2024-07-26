// let cars = ["thar","fortuner","swift","safari","volvo","creta"];
// console.log(cars);
// cars[3] = "BMW";
// console.log(cars);
// // for loop
// for( let idx = 0 ; idx < cars.length ; idx++){
//     console.log(cars[idx]);
// }
// // for of loop
// for(let items of cars){
//     console.log(items);
// }

// // find average
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for(let val of marks){
//      sum += val;
// }
// let avg = sum / marks.length;
// console.log(`average  marks of the class= ${avg}`);
// document.querySelector("#avg").innerHTML = `average  marks of the class= ${avg}`;

// // Array method
// let Cars = ["thar","fortuner","swift","safari","volvo","creta"];
// Cars.push("vanue");
// console.log(Cars);
// Cars.pop();
// console.log(Cars);
// console.log(Cars.toString());
// Cars.unshift("Audi");
// console.log(Cars);

// let arr = [1, 2, 3, 4, 5, 6];
// arr.splice(2, 0, 101);
// console.log(arr);
// // sub array 
// let array = [[1,2],[3,4],[5,6]];
// console.log(array.flat());

// // array find()
// let numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);
// function myFunction(value,index,array){
//     return value > 18;
// }
// console.log(first);
// // forEach loop
// let num = [1,2, 3,4,5,6,7];

// num.forEach((val) =>{
//       console.log(val*val);
// });
btn1.onclick = (evt) =>{
    console.log("btn1 was clicked");
    alert("btn1 was clicked");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
}
btn2.ondblclick = (evt) =>{
    console.log("btn2 was clicked 2x");
    alert("btn2 was clicked");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
}
box1.onmouseover = (evt) =>{
    console.log("you are inside div");
    alert("you are inside div");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
}
btn3.onclick = (evt) =>{
    console.log(Date());
    alert("btn3 was clicked");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
}
box2.onmousedown = (evt) =>{
    console.log("box2 was clicked");
    alert("box2 was clicked");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
}
box3.onmouseout = (evt) =>{
    console.log("box3 was clicked");
    alert("box3 was clicked");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
}
