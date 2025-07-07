const user = {
    name:"Haris",
    coursePrice:"999",
    // We can use (this) in normal function
    welcomeMessage: function(){
        return console.log(`${this.name},welcome to the js course`);
    },
    // We cannot use (this) in arrow function
    newMessage:()=>{
        return console.log(`Course price:${this.coursePrice} `);//Here its display undefined becuse we cannot use this in arrow function
    }
}
user.welcomeMessage()
user.newMessage()

