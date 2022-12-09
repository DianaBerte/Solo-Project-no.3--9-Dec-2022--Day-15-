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

let array = Array.from({length: 100}, () => Math.floor(Math.random() *200));

console.log(array)

console.log("\n---------------------------------exercise 27-----------------------------\n")

console.log(Math.max.apply(Math, array));
console.log(Math.min.apply(Math, array));

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

//Create a function that gets 2 arrays as parameters and returns the longest one

/*function myFunc (array1, array2) {

    let max_str = array1[0].length;
    let ans = array1[0];

    for (let i = 1; i<array1.length; i++) {
        let maxi = array1[i].length;
        if (maxi > max_str) {
            ans = array1[i];
            max_str = maxi
        }
    }
    return ans
}



console.log(myFunc(["a", "njcdnjddnjc", "kd"]))*/

/*let array1 = ["asd", "asdasd", "asdasdasd"];
let array2 = ["asd", "asdasdasdasd", "asdasd"];

function myFunc (array1, array2) {
    if (array1 > array2) {
        return array1;
    } else {
        return array2
    }
}

console.log([array1, array2])*/

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
