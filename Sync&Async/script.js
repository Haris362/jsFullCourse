// Synchronus example
console.log("Synchronous example.");
console.log(1);
console.log(2);
console.log(3);

//Asynchronous example
console.log("Asynchronous example.");
console.log(1);
setTimeout(function(){
    console.log(2);
},2000)
const delay = setTimeout(function(){
    console.log(8);
},3000)
console.log(3);

clearTimeout(delay);