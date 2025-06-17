const user = {
    name:"Haris",
    id:"90335",
    email:"Haris@google.com",
    loggedIn:true   
}

let {name,id,email,loggedIn} = user;//Use this syntax instead of console.log(user.name,user,id)
console.log(loggedIn);

// Here,we are changing the name of the keys
let {name:newName} = user;
console.log(newName);
