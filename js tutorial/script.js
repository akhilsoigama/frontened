//function
function sum(x,y){
    s = x + y;
    return s;
}
let result1 = sum(100,200);
document.getElementById("result1").innerHTML ="x+y =" + result1;
console.log(result1);

function mul(x,y){
    s = x * y;
    return s;
}
let result2 = mul(100,200);
document.getElementById("result2").innerHTML ="x*y =" + result2;
console.log(result2);
// object methods
let userInfo = {
    firstName : "Jhon",
    lastName : "Doe",
    id : 5566,
    fullName : function(){
        return this.firstName + this.lastName;
    }
};
console.log(userInfo);
delete userInfo.id;
console.log(userInfo);
let info = userInfo.fullName();
console.log(info);
let name = document.getElementById("obj").innerHTML = userInfo.fullName();

// strings method
let text = "Jhon doe"
let text2 = "tonny stark";

document.getElementById("str").innerHTML = (text);
document.getElementById("str2").innerHTML = text.length;
 
let upp = text.toUpperCase();
console.log(upp);

let low = text.toLowerCase();
console.log(low);

console.log(text.slice(2,7));

let add = text2.concat(text);
console.log(add);

let text3 = "hello world!"
console.log (text3.replace("h","y"));
console.log(text3.charAt(3));
console.log(text3.repeat(3));

// the user to  enter their fullname. generate to username for theme based on the input.
// let fullName = prompt("enter your fullname whitout spaces:");
// let userName = "@" + fullName + fullName.length;
// console.log(userName);
let a = "5";
a = a.padEnd(10,"0");
console.log(a);

