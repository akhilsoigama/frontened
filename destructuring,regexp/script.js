// Object destructuring
const person = {
    firstName : "Jhon",
    lastName : "Doe",
    age : 50
};
// destructuring
let{firstName, lastName,age,country = "US"} = person;
console.log(firstName,"",lastName); 
console.log(firstName,"",age);
console.log(country);
// object property alias
let{lastName:name} = person;
console.log(name);

// string destructuring
let Name = "JavaScript";
let[a1,a2,a3,a4,a5,a6,a7,a8,a9,a10]= Name;
console.log(a3,a5,a9);
console.log(...Name);

// array destructuring
// const fruits= ["Bananas","oranges","Apples","Mangos"];
// let[fruit1,fruit2,fruit3,fruit4]= fruits;
// console.log(fruit1,fruit3);
// console.log(...fruits);
// skiping Array values
// let[fruit1,,,fruit2]=fruits;
// console.log(fruit1,"",fruit2);

// array position 
// let{[0]:fruit1,[1]:fruit2}=fruits;
// console.log(fruit1,"",fruit2);

// rest method
let number = [10,20,30,40,50,60,70,80];
console.log(...number);

// maps destructuring
const fruits= new Map([
    ["Bananas",300],
    ["oranges",400],
    ["Apples",500],
    ["Mangos",600]
]);
for(const[key,value] of fruits){
    console.log(key ,"is",value);   
};
