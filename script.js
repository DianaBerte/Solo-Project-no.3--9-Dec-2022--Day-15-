console.log("\n---------------------------------exercise 21-----------------------------\n")

let x = "John";
let y = "Doe";

console.log(x, "<>", y)

console.log("\n---------------------------------exercise 22-----------------------------\n")

let object = {
    name: "someone",
    surname: "else",
    email: "someone.else@hotmail.si"
}

console.log(object)

console.log("\n---------------------------------exercise 23-----------------------------\n")

delete object.email

console.log(object)

console.log("\n---------------------------------exercise 24-----------------------------\n")

let arr = ["string 1","string 2","string 3","string 4","string 5","string 6","string 7","string 8","string 9","string 10"]

console.log("\n---------------------------------exercise 25-----------------------------\n")

console.log(arr)

console.log("\n---------------------------------exercise 26-----------------------------\n")

//Create an array with 100 random numbers in it

let arrayLength = 100;
let randomArray = [];
for (let i=0; i<arrayLength; i++) {randomArray.push(Math.random())}

console.log(randomArray)