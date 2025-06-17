// Arrowfunctions
const basicFunction = () =>{
    return console.log("Hello World");
}

basicFunction();

// Arrow Function with parameters
const sumFunction = (num1,num2) => {
    return num1 + num2
}
console.log(sumFunction(12,45))

// Implicit arrow function means without return keyword 
const implicitFunction = () =>
console.log("Welcome Haris in united kingdom");
implicitFunction()

// Explicit arrow function means with return keyword
const numberArray = [2,4,6,8,10,12]
const explicitFunction = (anyArray) =>{
    return console.log(anyArray[3]);
}
explicitFunction(numberArray)


// Quadratic formula

const quadraticFunction = (a,b,c) =>{
    const squareRootPart = b**2 - 4*a*c;
    const formulaInPlus = (-b + Math.sqrt(squareRootPart)) / (2*a)
    const formulaInMinus = (-b - Math.sqrt(squareRootPart)) / (2*a)
    console.log(formulaInPlus),console.log(formulaInMinus)
    
}
quadraticFunction(1,6,8)

const multiplicationFunction = (num1=2,num2=5) =>{
    return num1*num2
}
console.log(multiplicationFunction());
