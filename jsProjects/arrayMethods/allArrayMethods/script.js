// const weekDays = ["Monday","Tuesday","Wednesday","Thursday"];
// console.log(weekDays.shift(),weekDays);
// // Unshift
// console.log(weekDays.unshift("Monday"),weekDays)
// // Pop
// console.log(weekDays.pop(),weekDays);
// // Push
// console.log(weekDays.push("Thursday"),weekDays)
// // Concat
// const Days = ["Friday","Saturday","Sunday"]
// console.log(weekDays.concat(Days))
// // Join
// console.log(weekDays.join("-"))
// // Tostring
// console.log(weekDays.toString())
// // AT
// console.log(weekDays.at(0),weekDays.at(1))
// // Flat
// const subDaysArr = [["Monday","Tuesday"],["Wednesday","Thursday"],["Friday","Saturday",]];
// // IsArray
// console.log(Array.isArray(weekDays))
// // Delete
// delete weekDays[1];
// console.log(weekDays)
// // Sort
// const alphabets = ["Z","Y","X","U","B","E","A"]
// // let compare = ((a,b)=>{
// //     return a-b;
// // })
// // const num = [2,4,590,35,68]
// // console.log(alphabets.sort())
// // console.log(num.sort(compare))

// // // Reverse
// // console.log(weekDays.reverse())
// // Splice
// // console.log(alphabets.splice(2))
// const evenNumbers = [2,4,6,8]
// evenNumbers.splice(4,0,10,12)
// console.log(evenNumbers)
// // Slice
// const num = [0,1,2,3,4,5]
// console.log(num.slice(1,4),num)

const arr = [12,22,33,44,55];
arr.find(function(value,index,array){
    console.log(value,index,array);
    
})

const newArr =  [4,56,90,89];
newArr.find(function(num){
     console.log(num < 12)
})

const findArr = [34,56,78,90];
findArr.find((x)=>{
    return console.log(x ==34)
})
// const animals = ["Lion","Tiger","Pig","Snake"]
// console.log(animals.at(-1));

// const result = (animals.includes("Pig"));
// const conversion = Number(result);
// console.log(conversion);

// const country = ["Pakistan","China","Japan","Russia"]
// console.log(country.indexOf("Japan"))
// console.log(`Here the result is ${country.indexOf("Japan",3)} becuase we give it the index 3 from where its start searching and its not find it.`);

// const students = ["Ali","Haris","Umer","Umair","Haroon"];
// console.log(students.lastIndexOf("Haris",0));

// const city = ["Rawalpindi","Lahore","Karachi","Peshawar"];
// city.fill("a")
// console.log(city);

// const team = ["Islamabad","Peshawar","Karachi"];
// team.fill("Lahore",1,2)
// console.log(team);

// const nums = [1,12,67,23,4,67,90,67];
// console.log(nums.lastIndexOf(67,-2));

// const numbers = [10,34,90,12,3,7,5,11,19]
// console.log(numbers.sort((a,b)=>{return (a-b);
// }));

// const newNumbers =[12,41,5,43,124]
// // function somefunction(num){
// //     return num > 100
// // }
// // console.log(newNumbers.some(somefunction()));

// newNumbers.some((num)=>{
//     return console.log(num>100)
// }
// )

// const user = [
//     {name:"Haris",id:"q42413",email:"haris362@gmail.com",newId:"234"},
//     {name:"Albert",id:"34s2413",email:"albert3642@gmail.com",newId:"234"},
// ]
// function userEmailFind_Function(x){
//     return x.email == "haris362@gmail.com"
// }
// console.log(user.some(userEmailFind_Function))


// function everyFunction(x){
//     return x.email == "haris362@gmail.com"
// }
// console.log(user.every(everyFunction));
