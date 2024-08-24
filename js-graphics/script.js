// Scatter Plots
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.height = canvas.width;
ctx.transform(1, 0, 0, -1, 0, canvas.height);

const xArray = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
const yArray = [7, 8, 8, 9, 9, 9, 10, 11, 14, 15];

ctx.fillStyle = "red";
for (let i = 0; i < xArray.length - 1; i++) {
    let x = xArray[i] * 400 / 150;
    let y = yArray[i] * 400 / 15;
    ctx.beginPath();
    ctx.ellipse(x, y, 3, 3, 0, 0, Math.PI * 2);
    ctx.fill();
}

// line graph

const canvas2 = document.getElementById("myCanvas2");
const ctx2 = canvas2.getContext("2d");
ctx2.fillStyle = "#ff0000";
canvas2.height = canvas2.width;
ctx2.transform(1, 0, 0, -1, 0, canvas2.height);

let xMax = canvas2.height;
let slope = 1.2;
let intercept = 70;

ctx2.moveTo(0, intercept);
ctx2.lineTo(xMax, f(xMax));
ctx2.strokeStyle = "black";
ctx2.stroke();
function f(x) {
    return x * slope + intercept;
}

// Bar Charts

const xArray2 = ["Italy", "France", "Spain", "USA", "Argentina"];
const yArray2 = [55, 49, 44, 24, 15];

const data = [{
    x: xArray2,
    y: yArray2,
    type: "bar",
    orientation: "v",
    marker: { color: "rgba(0,0,255,0.6)" }
}];

const layout = { title: "World Wide Wine Production" };
Plotly.newPlot("myPlot", data, layout);

// bar charts horizontal

const xArray3 = [55, 49, 44, 24, 15];
const yArray3 = ["Italy", "France", "Spain", "USA", "Argentina"];
const data2 = [{
    x: xArray3,
    y: yArray3,
    type: "bar",
    orientation: "h",
    marker: { color: "rgba(0,0,255,0.6)" }
}];

const layout2 = { title: "World Wide Wine Production" };
Plotly.newPlot("myPlot2", data2, layout2);

// pie charts

const xArray4 = ["Italy", "France", "Spain", "USA", "Argentina"];
const yArray4 = [55, 49, 44, 24, 15];
const layout3 = { title: "World Wide Wine Production" };
const data3 = [{
    labels: xArray4,
    value: yArray4,
    type: "pie"
}];
Plotly.newPlot("myPlot3", data3, layout3);

// Donut charts
const xArray5 = ["Italy", "France", "Spain", "USA", "Argentina"];
const yArray5 = [55, 49, 44, 24, 15];
const layout4 = { title: "World Wide Wine Production" };
const data4 = [{
    labels: xArray5,
    value: yArray5,
    hole: 4,
    type: "pie"
}];
Plotly.newPlot("myPlot4", data4, layout4);

// Plotting Equations
let exp = "Math.sin(x)";

// generate values

const xValues = [];
const yValues = [];
for (let x = 0; x <= 10; x += 0.1) {
    xValues.push(x);
    xValues.push(eval(exp));
}

// Display Using Plotly

const data5 = [{
    x: xValues,
    y: yValues,
    mode: "lines"
}];

const layout5 = { title: "y = " + exp };
Plotly.newPlot("myPlot5", data5, layout5);

// Bubbles Plots

const xArray6 = [1, 2, 3, 4];
const yArray6 = [10, 20, 30, 40];
const trace1 = {
    x: xArray6,
    y: yArray6,
    mode: 'markers',
    marker: {
        color: ['red', 'green', 'blue', 'orange'],
        size: [20, 30, 40, 50]
    },
};

const trace2 = {
    x: [1, 2, 3, 4],
    y: [15, 30, 45, 60],
    mode: 'markers',
    marker: {
        color: "rgb(31,119,180)",
        size: 18,
        Symbol: ["circle", "square", "diamond", "cross"]
    },
};

const data6 = [trace1, trace2];
const layout6 = {
    title: "plotting Bubbles"
};
Plotly.newPlot("myPlot6", data6, layout6);

// multiple lines

let exp1 = "x";
let exp2 = "1.5*x";
let exp3 = "1.5*x + 7";

// generate values

const x1Values = [];
const x2Values = [];
const x3Values = [];
const y1Values = [];
const y2Values = [];
const y3Values = [];

for (let x = 0; x <= 10; x += 1) {
    x1Values.push(x);
    x2Values.push(x);
    x3Values.push(x);
    y1Values.push(eval(exp1));
    y2Values.push(eval(exp2));
    y3Values.push(eval(exp3));
}

// define data 
const data7 = [
    { x : x1Values, y : y1Values, mode : "lines"},
    { x : x2Values, y : y2Values, mode : "lines"},
    { x : x3Values, y : y3Values, mode : "lines"}
]

const layout7 = {
    title : "[y =" + exp1 + "] [y = " + exp2 + "] [y = " + exp3 + "]"
}
Plotly.newPlot("myPlot7",data7,layout7);