let latters = new Set(["a","b","c"]);
console.log("latters = ",latters);
console.log("latter size =",latters.size);

// set add()
let set = new Set();
// add values to the Set
set.add("a");
set.add("b");
set.add("c");
console.log("add values to the set =",set);
console.log("latter size =",set.size);

// create a set and add variable
let newSet = new Set();
// create a variable
let a = "a";
let b = "b";
let c = "c";
// add variables to the set
newSet.add(a);
newSet.add(b);
newSet.add(c);
console.log(newSet);
console.log("newSet size =",newSet.size);

// list all elements
let set2 = new Set(["a","b","c"]);
console.log("set = ",set2);
let text = "";
for(let x of set2){
    text += x + "<br>";
}
console.log("text = ",text);

// has() method
let x = new Set(["a","b","c"]);
console.log("x =",x);
console.log("answer =",x.has("d"));

// Map method
// new Map()
let fruits = new Map([
    ["Apples",500],
    ["bananas",300],
    ["oranges",200]
]);
let text2 = "";
console.log("fruits =",fruits);
fruits.forEach(function(value,key){
    text2 += key +"="+value + "<br>"
});
document.write(text2);
console.log("keys =",fruits.keys());
console.log("there are",fruits.get("Apples"),"apples");
console.log("deleted =", fruits.delete("bananas"));
console.log("fruits =",fruits);
console.log("clear all elements",fruits.clear());
console.log("fruits =",fruits);

// map.groupBy)=()
let fruits2 = [
    {name : "apples",quantity:300},
    {name: "bananas",quantity:500},
    {name: "oranges",quantity:200},
    {name: "kiwi",quantity:150}
];
console.log("fruits2 =",fruits2);
// Callback funtion to select low volumes
function myCallback({ quantity}){
    return quantity > 200 ? "ok" : "low";
}

// group by ok and low
let result = Map.groupBy(fruits2,myCallback);
// Display Results
let text3 = "these fruits are ok:<br>";
for ( let y of result.get("ok")){
    text3 += y.name + "" + y.quantity + "<br>";
};
for (let y of result.get("low")){
    text3 += y.name + "" + y.quantity + "<br>";
};
console.log(result.get("ok"));
document.write(text3);
console.log("quantity=",myCallback("apples"));
