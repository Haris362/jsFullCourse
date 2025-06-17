// console.log(name);//Here its give refrence error because we are initiallizing the variable after the log.
// const name = "Haris";

console.log(id);//Here its give undefined because var is a global scope and it is set at the top with undefined refrence
var id = "7893759"

myFunction()
function myFunction(){
    console.log("Hello World");
}

function anotherFunction(){
    const status = "Active";
    function another2Function(){
        const item = "Laptop";
        console.log(status)
    }
    another2Function()
    // console.log(item);
    
}
anotherFunction()