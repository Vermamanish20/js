// # Primitive

// 7 types : String, Number,  Boolean, null, undefined, symbol, BigInt

const score  = 100
const scoreValue  = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// const bigNumber = 789654525678956n



// Reference (Non primitive)

// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "manish",
    age: 22,
}
const myFunction = function(){
    console.log("Hello World")
}


console.log(typeof  anotherId);





// ************************************************

// stack (primitive), Heap (Non-Primitive)

let myname = "Manish"

let anothername =  myname
anothername = "verma";

console.log(myname)
console.log(anothername)

let userOne = {
    email: "usergoogle.com",
    upi: "upi@ubl"
}

let userTwo = userOne

userTwo.email = "manish@google.com"

console.log(userOne.email);
console.log(userTwo.email);