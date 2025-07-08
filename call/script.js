const user = {
        name:"Haris",
        isLoggedIn:true,
        email:"haris@gmail.com"
}


function userInfo(){
    console.log(`User name is ${this.name}`);
}
userInfo.call(user)


const firstUser= {
    name:"Uzair",
    id:"345kojd34",
    greet:function(){
        console.log(`User name is ${this.name}`);
        
    },
    key:this.key
}   
const secondUser= {
    name:"ali",
    id:"244jljsd",
    passwod:"P@$df$w0Rd2op2$",
    key:"afs"

}
console.log(firstUser.greet.call(secondUser));
secondUser.call(firstUser)
console.log(firstUser);
