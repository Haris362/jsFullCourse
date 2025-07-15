const user = {
    name:"Haris",
    location:"Pakistan",
    sayHello:function(){
        return `Hello ${this.name}`
    }
}
var name = "john";

const greetFunction = user.sayHello.bind(user);
console.log(greetFunction());

const helloFunction = user.sayHello;
console.log(helloFunction());

class personOne{
    constructor(gender,country){
        this.personGender = gender;
        this.personCountry = country;
    }

    personExplaination(){
        console.log(`Person is lived in ${this.personCountry} and his gender is ${this.personGender}`);
    }
}

const p1 = new personOne("Male","Uk").personExplaination.bind(personOne)
console.log(p1);


