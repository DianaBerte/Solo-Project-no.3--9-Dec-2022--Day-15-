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

//let array = Array.from({length: 100}, () => Math.floor(Math.random() *200));
//console.log(array)

// Create an array with 100 random numbers in it:
let arrayOf100RandomNumbers = [];
for (let i = 0; i < 100; i++ ) {
    arrayOf100RandomNumbers.push(Math.floor(Math.random() *100))
}

console.log(arrayOf100RandomNumbers)

console.log("\n---------------------------------exercise 27-----------------------------\n")

//console.log(Math.max.apply(Math, array));
//console.log(Math.min.apply(Math, array));

//Write a function to get the maximum and minimum values from the previously created array:
function minAndMax() {
    let max = arrayOf100RandomNumbers[0];
    let min = arrayOf100RandomNumbers[0];

    for (let i=0; i < arrayOf100RandomNumbers.length; i++ ) {
        if (arrayOf100RandomNumbers[i] > max) {
            max = arrayOf100RandomNumbers[i]
        }
        if (arrayOf100RandomNumbers[i] < min) {
            min = arrayOf100RandomNumbers[i]
        }
    }
    return {min, max}
}

console.log(minAndMax())

console.log("\n---------------------------------exercise 28-----------------------------\n")

let arr2 = [];
for (let i = 0; i<3; i++) {
    let current = [];
    for (let j = 0; j < 10; j++)
    current.push(Math.floor(Math.random() *10));
    arr2.push(current);
}

console.log(arr2)

console.log("\n---------------------------------exercise 29-----------------------------\n")

let arr3 = [];
let arr4 = [];

function longestArray(arr3, arr4) {
    
    if (arr3.length > arr4.length) {
        console.log(arr3);
        } else {
        console.log(arr4)
        }   
}

console.log(longestArray(["l", "theLongest"], ["long", "longer", "actually the longest"]))

console.log("\n---------------------------------exercise 30-----------------------------\n")

//Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values

console.log("\n---------------------------------exercise 31-----------------------------\n")

let idNode = document.getElementById('container');
console.log(idNode)

console.log("\n---------------------------------exercise 32-----------------------------\n")

let tdNode = document.getElementsByTagName('td');
console.log(tdNode)

console.log("\n---------------------------------exercise 33-----------------------------\n")

let allTheTdNodes = tdNode;

for (let i = 0; i < tdNode.length; i++) {
    console.log(allTheTdNodes[i].innerText);
}

console.log("\n---------------------------------exercise 34-----------------------------\n")

function changeTitle () {
    let h1Node = document.getElementById("title").innerHTML = "New Title!"
}

console.log("\n---------------------------------exercise 35-----------------------------\n")

function addExtraRow () {
    let newRow = document.createElement('td');
    newRow.innerText = "Added Extra Row";

    document.getElementById("tableContainer").appendChild(newRow)
}

console.log("\n---------------------------------exercise 36-----------------------------\n")

function addTestClass () {
    let rowsNode = document.querySelectorAll("td");
    for (let row of rowsNode) {
        row.classList.add("Test");
    }
}

addTestClass()
