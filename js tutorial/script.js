
//body bg color
let body = document.querySelector("body");
body.style.backgroundColor = "skyblue";
let myPage = alert("java script tutorial");
//Arithmetic operator
{
let x = 10;
console.log(x);
}
//addition
{
    let x = 5;
    let y = 3;
    let z = x + y;
    const a = 3;
    console.log(z);
}
// multiplication
{
    let x = 5;
    let y = 4;
    let a = x*y;
    console.log(a);
}
//devision
{
    let a = 100;
    let b = 30 ;
    let c = a/b;
    console.log(c); 
}
//substraction
{
    let a = 100;
    let b = 30 ;
    let c = a-b;
    console.log(c); 
}
//modulus
{
    let a = 100;
    let b = 20 ;
    let c = a%b;
    console.log(c);  
}
//assignment operator

//addition assignment operator
{
    let a = 10;
    let b = a += 5;
    console.log(b);
}
//substraction assignment operator
{
    let a = 10;
    let b = a -= 5;
    console.log(b);
}
//devision assignment operator
{
    let a = 10;
    let b = a /= 5;
    console.log(b);
}
// multiplication assignment operator
{
    let a = 10;
    let b = a *= 5;
    console.log(b);
}
// modulus assignment operator
{
    let a = 10;
    let b = a %= 5;
    console.log(b);
}
//  square
{
    let a = 2;
    let b = a **= 5;
    console.log(b);
}
//String Operator
{
    let text1 = "A";
    let text2 = "B";
    let result = text1 <= text2; //true
    console.log(result);
}
//number string
{
    let text1 = "20";
    let text2 = "10";
    let result = text1 < text2; //false
    console.log(result);
}
// string addition
{
    let text1 = "tonny";
    let text2 = "stark";
    let result = text1 + text2; 
    console.log(result);
}
{
    let text1 = "tonny";
    let result = text1 += "stark"
    console.log(result);
}
//array
let arrayName = ["fullname","username","emails","password"];
console.log(arrayName[2]);
//object
let objectName = {
    fullName : "xyz", 
    userName : "xyz",
    emails : "xyz@gmail.com",
    password : "123xyz"
};
console.log(objectName);
console.log(objectName.password);
