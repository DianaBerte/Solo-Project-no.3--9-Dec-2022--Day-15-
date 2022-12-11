function testingExercise() {

    const arr5 = [5, 15, 45];
    let sum5 = 0;

    for (const value5 of arr5) {
        sum5 += value5;
    }

    const arr6 = [100, 2, 2];
    let sum6 = 0;

    for (const value6 of arr6) {
        sum6 += value6;
    }

    if (sum5 > sum6) {
        return sum5;
    } else {
    return sum6
    } 
   
}

console.log(testingExercise()); 