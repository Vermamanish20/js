// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUsers = {
    name: "manish",
    "full name": "Manish Verma",
   [mySym]: "mykey1",
    age: 18,
    location: "jaipur",
    email: "manish@google.com",
    isloogedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUsers.email)
console.log(JsUsers["email"])
console.log(JsUsers["full name"])
console.log(JsUsers[mySym])

JsUsers.email = "manish@chatgpt.com"
// Object.freeze(JsUsers)
JsUsers.email = "manish@microsoft.com"
// console.log(JsUsers);


JsUsers.greeting = function(){
    console.log("Hello Js users");
}
JsUsers.greetingTwo = function(){
    console.log(`Hello Js users,${this.name}`);
}

console.log(JsUsers.greeting());
console.log(JsUsers.greetingTwo());