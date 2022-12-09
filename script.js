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

function myFunc (array1, array2) {
    
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

console.log(myFunc(["a", "njcdnjddnjc", "kd"]))