// Filter Example
const num = [2,45,6,23,32];
const result =  num.filter(x=>{
    return x%2==0
})
console.log(result);

// forEach Example
num.forEach(a=>{
    console.log(a+10);
    
})
console.log(num);

// Map example
const result2 = num.map((q=>
     q+10
))
console.log(result2.toString());

