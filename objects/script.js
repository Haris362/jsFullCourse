// Singleton
const user1 = new Object()
// Adding some values in object
user1.name = "John";
user1.id = "89349085";
user1.gmail = "John@chatgpt.com";
console.log(user1);

// Literals
const user = {
    name:"Haris",
    id:"48932",
    gmail:"haris46@google.com",
    password:"9340902423",
    productsBuy:[
        {1:"Shirt",2:"Graphic card"},
        {1:"Mobile",2:"Laptop"},
    ]
}
// Method1 to get value from obj
console.log(user["name"]);
// Method2 to get value from obj
console.log(user.gmail);

console.log(user.productsBuy);
console.log(user.productsBuy[0]["1"]);
console.log(user.productsBuy[1]["2"]);

const userData = {
    country:"Pakistan",
    reigon:"Rawalpindi",
    city:"New-Katarian"
}
const mergeObj = Object.assign({},user,userData);
console.log(mergeObj);

console.log({...user1,...userData});
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));