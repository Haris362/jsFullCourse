// IFFE in normal function
(function messageFunction() {
    return console.log("Hello haris what are you doing");
})();

// IFFE in arrow function
(() =>{
    console.log("Welcome in learning of course");
})();

const name = "Haris";
(function(){
    const lastName = "Tariq"
    return console.log(name);
})()
// console.log(lastName);//Here it give error becuase lastName is delared inside the iffe function which avoid global scope
