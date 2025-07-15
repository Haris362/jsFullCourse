class user {
    constructor(user,userEmail,password) {
        this.userName = user;
        this.email = userEmail;
        this.password = password;
    }

    logMe(){
        console.log(`User name is ${this.userName}`);
    }
}

const userProperties = new user("Haris","haris@google.com",23241);
userProperties.logMe()

class car extends user {
    constructor(userName,model,colour) {
        super(userName);
        this.model = model;
        this.color = colour;
    }
    carProp(){
        console.log(this.userName);
    }
    static createNumber(){
        return console.log('12y8');
    }
}

const carProperties = new car("Haris",'Civic',"Red");
console.log(carProperties)
console.log(userProperties instanceof user,carProperties instanceof user);

car.createNumber()


class person {
    constructor(personName,location) {
        this.name = personName;
        this.location = location;

        this.newFunction = this.sayHello.bind(person2)
    }
    sayHello(){
        console.log(`hello${this.name}`);
    }
}

const person2 = {
    name:"John",
    location:"UK",
    greet:function(){
        console.log(`Person name is ${this.name}`);    
    }
}

const p1 = new person("Haris","Pakistan");
console.log(p1.newFunction());
