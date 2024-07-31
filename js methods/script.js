// string search()
let result1= document.querySelector("#result1");
let find = "Please locate where 'locate' occurs";
let search1 = find.search("locate");
result1.innerHTML = search1;

// string match()
// let result2= document.querySelector("#result2");
let match = "The rain in SPAIN stays mainly in the plain";
let search2 = match.match("ain");
result2.innerHTML = search2.length + "" +search2;
// global serch ()
let result3= document.querySelector("#result3");
let match2 = "The rain in SPAIN stays mainly in the plain";
let search3 = match2.match(/ain/g);
result3.innerHTML = search3.length + "" +search3;

// includes()
let demo = document.querySelector("#result4"); 
let text = "Hello world,welcome to the universe.";
demo.innerHTML = text.includes("world");

// date method
let date = new Date();
let dateDemo = document.querySelector("#date");
dateDemo.innerHTML = date;
let dateDemo1 = document.querySelector("#date1");
dateDemo1.innerHTML = date.getFullYear();
let dateDemo2 = document.querySelector("#date2");
dateDemo2.innerHTML = date.getMonth();
let dateDemo3 = document.querySelector("#date3");
dateDemo3.innerHTML = date.getDate();
let dateDemo4 = document.querySelector("#date4");

// Array sort method
let fruits = ["Banana","Apple","Orange","Mango"];
console.log(fruits.sort());
console.log(fruits.reverse());

// numeric sort
let points = [40, 50, 1, 5, 2, 79, 26, 43];
points.sort(function(a,b){
    return a - b
});
console.log(points);

// Fisher Yates method
let num = [40, 100, 1, 5, 25, 10];
console.log(num);
function myFunction(){
    for(let i= num.length -1; i > 0; i--){
        let j = Math.floor(Math.random()*(i+1));
        console.log(j,"value of j");
        let k = num[i];
        num[i] = num [j];
        num[j] = k;
    }
    document.getElementById("btn").innerHTML = num;
}
