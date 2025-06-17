function basicFunction(){
    console.log("Hello world my name is Haris");
}
basicFunction()

function addFunction(num1,num2,num3){
    return num1+num2+num3
}
console.log(addFunction(3,45,3));

function myFunction(a,b,c){
    return b**2-4*a*c;
}
const disc=myFunction(1,4,1)
console.log(disc);


// Here we are changing some concepts
// Adding object elements dynamically in functions
const user = {
    name:"Haris",
    lastName:"Tariq",
    id:"893579",
    gmail:"Haris@google.com"
}

function getObjElements(anyObject){
    return (`Our user first name is ${anyObject.name} and his last name is ${anyObject.lastName}`)
}
console.log(getObjElements(user));

function productsPrice(...num){
    return num
}
console.log(100,200,3000,40);

// Using function getting some values from array
const numbersArr = [100,459,3289,878];

function getNumber_Arr(anyArray){
    return anyArray[1];
}
console.log(getNumber_Arr(numbersArr));
