const promiseOne = new Promise((resolve,reject)=>{
    const score =10;
    if (score ==11){
        resolve()
    }
    else{
        reject()
    }
}).then(()=>{
    console.log("Promise works");
}).catch(()=>{
    console.log("Promise is not working.");
    
})


const promiseTwo = new Promise((resolve,reject)=>{
    if (true){
        resolve()
    }
    else{
        reject()
    }
})
async function consumePromseTwo(){
    try {
       const response = await promiseTwo;
        console.log("Its work");
    } catch (error) {
        console.log("Its not working.");
    }
}
consumePromseTwo()

const promiseFunction = async ()=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    }
    catch(error){
        console.log("Please check your url.");
        
    }
}
promiseFunction()

const promiseThree = new Promise((resolve,reject)=>{
    const value = 3
    if (value===3){
        resolve(2)    
    }
    else{
        reject(console.log("System is not working"))
        return 2
    }
})
async function consumePromiseTwo(result){
    try {
        const response = await promiseThree;
        console.log(response+1)
        
    } catch (error) {
        console.log("new error");
        
    }
}
consumePromiseTwo()
