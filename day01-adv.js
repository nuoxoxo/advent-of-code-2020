// This solution: O(n) constant time lookup

// Header and and parsing

const fs = require('fs');

const lines = fs.readFileSync('2001.txt').toString().split('\n')
const numberArr = lines.map(Number);

// Part 1 function

let partOne = arr => {
    
    let numberSet = new Set();

    for (let number of arr){
        const diff = 2020 - number;
        if (numberSet.has(diff)){
            console.log(number * diff);
        }

        numberSet.add(number);
    }
}

// Part 2 function

let partTwo = arr => {

    let pairsum = {};

    // Populate the pairsum set

    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            const sum = arr[i] + arr[j];
            pairsum[sum] = [arr[i], arr[j]];
        }
    }

    for (let number of arr){
        const diff = 2020 - number;
        if (diff in pairsum){
            let [ a, b ] = pairsum[diff];
            console.log(number * a * b);
            break;
        }
    }
}

// Driver

partOne(numberArr);
partTwo(numberArr);

