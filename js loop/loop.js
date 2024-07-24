// conditional statements
let num = prompt("enter a number");
if(num % 2 === 0){
   console.log(num ,"is even");
   document.getElementById("result1").innerHTML = num +""+"is even";
}
else{
    console.log(num,"is odd");
    document.getElementById("result1").innerHTML = num +""+"is odd";
}
// check if the number is multiple of 5 or not?
let num2 = num;
if(num2 % 5 ===0){
    console.log(num2 , "is multiple of 5")
    document.getElementById("result2").innerHTML = num2 +""+"is multiple of 5";
}
else{
    console.log(num2 , "is not a multiple of 5")
    document.getElementById("result2").innerHTML = num2 +""+"is not a multiple of 5";
}
// for loop
// calculate sum 1 to 100
// let sum = 0;
// for(i = 1 ; i <= 100 ; i++){
//     sum = sum + i;
// }
// console.log("sum =",sum);
// document.querySelector("#result3").innerHTML = "sum=" + sum;

// // print 1 to 100
// let number = 0;
// for(i = 1; i<=100; i++){
//    console.log("num = ", i);
// }
// // print all even number from 0 to 100
// for(i = 1;i<=100;i++){
//     if(i%2 ===0){
//         console.log(i);
//     }
// }

// // while loop
// let s = 1;
// while(s<=50){
//     console.log("i=",s);
//     s++;
// }
// gues the gamenumber
// let gameNum = "25";
// let userNum = prompt("guess the correct game number :");
// while(userNum != gameNum){
//    userNum= prompt(" you guess wrong number ,guess again :");
// }
// console.log("congratulations you entered the rigth game number")
// // for of
// let name = "tonystark";
// let size = 0;
// for (let i of name){
//     console.log("i=",i);
//     size++;
// }
// console.log("string size =",size);

// for in loop
// let student ={
//    name : "xyz",
//    age:20,
//    cgpa:7.8,
//    ispass: true,
// };
// for(let i in student){
//     console.log("key=",i, "value=",student[i]);
// }

// for each loop
let arr = [1,2,3,4,5];
arr.forEach((val) => {
      console.log(val);
})