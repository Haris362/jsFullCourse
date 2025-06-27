//Only If else example
const score = 83;
document.write(
    `<h1>Score:<span>${score}</span></h1>`
)
if (score < 100) {
    document.write(
        `<p>Score is less than 100</p>`
    )
}
else {
    document.write(
        `<p>Score is greater than 100</p>`
    )
}

// Exmaple of if else with else-if
const tempratrue = 10;
document.write(
    `<h1>Temprature is ${tempratrue}</h1>`
)

if (tempratrue >= 35) {
    console.log("Tempreature is hot");
    document.write(
        `<p>Temprature is hot.</p>`
    )
}
else if (tempratrue <= 20) {
    console.log("Temperture is cold");
    document.write(
        `<p>Temprature is cold.</p>`
    )
}
else {
    console.log("Temperature is average");
    document.write(
        `<p>Temprature is average.</p>`
    )
}

// Slice the part of line using if else
const jsLine = "JavaScript is a versatile language used to make websites interactive, handle events, and build both front-end and back-end applications using tools like React and Node.js, making it essential for modern web development."
if (jsLine.length == 219) {
    const slicedLine = jsLine.slice(0, 83)
    document.write(`
        <h1>Sliced line:</h1>
        <span>${slicedLine + ("...")}</span>
        `)


}
else {
    console.log(jsLine);
}