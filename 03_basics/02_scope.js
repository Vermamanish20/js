// var c = 300
let c = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("Inner:", a);

}




console.log(c);
// console.log(a);
// console.log(b);

function one() {
    const username = "manish"

    function two() {
        const website = "Github"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one()

if (true) {
    const username = "manish"
    if (username === "manish") {
        const website = "Github"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username)

// +++++++++++++ interesting ++++++++++



console.log(addone(5))

function addone(num){
    return num + 1
} 



addTwo(5)
const addTwo = function(num){
    return num + 2
}
