// Normal for loop example
for (let i=0; i<10;i++){
    console.log("Hello World");//its pint hello world in console 10 times
}

// For loop exmaple on array
const number_arr = [334,534,124];
for (let i = 0; i < number_arr.length; i++) {
    const element = number_arr[i];//we know we can acess the element from its index here we can using this tecnique by using for loop
    console.log(element);
}

// For loop with break
console.log("Break example");
const score = 10;
for (let i = 0; i < score; i++) {
    if (i ==5){
        break;
    }
    console.log(i);
    
}

// For loop with continue
console.log("Continue example");

const num = 9;
for (let i = 0; i < num; i++) {
    if (i==6){
        continue;
    }
    console.log(i);
    
}