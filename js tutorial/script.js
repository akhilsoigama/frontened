// function rest parameter

function sum(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}
let x = sum(4, 5, 6, 7, 8, 12, 34, 45);
console.log(x);

// Array entries()
let fruits = ["banana", "apple", "orange", "mango"];
let y = fruits.entries();
for (let add of y) {
    console.log(add);
}
// string padding;

let a = "5";
console.log(a.padStart(5, 0));

// settimeout

let name = setTimeout(function () {
    console.log("hello");
}, 3000);

// let name2 = setInterval(() => {
//     console.log("hello");
// }, 5000);

// flatmap

let arr = [1, 2, 3, 4, 5];
let newArr = arr.flatMap(x => [x, x * 10]);
console.log(newArr);

let btn = document.getElementById("btn");
let p = document.getElementById("result");
btn.addEventListener("click", () => {
    try {
        let demo = document.getElementById("demo").value;
        if (demo.trim() == "") {
            throw "empty";
        } else if (isNaN(demo)) {
            throw "not a number";
        }
        demo = Number(demo);
        if (demo < 5) {
            throw "too low";
        } else if (demo > 10) {
            throw "two high";
        };
    }
    catch (err) {
        p.innerHTML = "input is" + "" + err;
    }
});