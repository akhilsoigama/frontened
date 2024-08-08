const employee = {
    calcTax(){
        console.log("tax rate is 10%");
    }
}
let employee1 = {
    salary :5000,
}
employee1.__proto__ = employee;

// classes
class toyotaCar {
    constructor(brand){
        console.log("creating new object");
        this.brandName = brand;
    }
    start(){
        console.log("start")
    }
    stop(){
        console.log("stop")
    }
    // setBrand(brand){
    //     this.brandName = brand;
    // }
}
let fortuner = new toyotaCar("fortuner");
console.log(fortuner);
// fortuner.setBrand("fortuner");
let innova = new toyotaCar("innova");
console.log(innova);

// inheritance
class parent{
    hello(){
        console.log("hello");
    }
}
class child extends parent{}
let obj = new child();

// sync
// console.log("one");
// console.log("two");
// console.log("three");

// // async
// function hello(){
//     console.log("hello");
// }
// setTimeout(() => {
//     console.log("hello");
// },3000)

// console.log("four");
// console.log("five");

// callback hell
// function getData(dataId,getNextData){
//     setTimeout( ()=>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },3000)
// }
// getData(1, () =>{
//     getData(2, ()=>{
//         getData(3, () =>{
//             getData(4);
//         });
//     });
// });

// promises
// let promise = new Promise((resolve,reject) =>{
//     console.log("promise");
//     // resolve("success");
//     // reject("error");
// });
// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//     setTimeout( ()=>{
//         console.log("data",dataId);
//         resolve("success")
//         if(getNextData){
//             getNextData();
//         }
//         },3000);
//     })
// };
const getPromise = () =>{
 return new Promise((resolve,reject) =>{
    console.log("promise");
    resolve("success");
    // reject("error");
  });
}
let promise = getPromise();
promise.then(() =>{
    console.log("promise fulfiled");
});

// async function
async function hello(){
    console.log("hello");
}
// function getData(dataId,getNextData){
//         return new Promise((resolve,reject)=>{
//         setTimeout( ()=>{
//             console.log("data",dataId);
//             resolve("success")
//             },3000);
//         })
//     };
// async function getAllData() {
//     console.log("getting data1...");
//     await getData(1);    
//     console.log("getting data2...");
//     await getData(2);   
//     console.log("getting data3...");
//     await getData(3);   
//     console.log("getting data4...");
//     await getData(4);   
//     console.log("getting data5...");
//     await getData(5);   
// }
// // IIFE = immediately invoked function expression 
// (async function () {
//     console.log("getting data1...");
//     await getData(1);    
//     console.log("getting data2...");
//     await getData(2);   
//     console.log("getting data3...");
//     await getData(3);   
//     console.log("getting data4...");
//     await getData(4);   
//     console.log("getting data5...");
//     await getData(5);   
// })();

// fetch API = Application programing interface
const URL = "https://cat-fact.herokuapp.com/facts";
 const getFacts = async () =>{
    console.log("getting data");
    let responce = await fetch(URL);
    console.log(responce);
 }