// O(n) constant time lookup

const fs = require('fs');

const lines = fs.readFileSync('2001.txt').toString().split('\n').filter(entry => entry)
const numberArr = lines.map(Number);
const numberSet = new Set();

// Part 1

for (let number of numberArr)
{
  const diff = 2020 - number;
  if (numberSet.has(diff))
  {
    console.log(number * diff);
  }
  numberSet.add(number);
}

// Part 2

const pairsum = [];

for (let i = 0; i < numberArr.length; i++)
{
  for (let j = i + 1; j < numberArr.length; j++)
  {
    const sum = numberArr[i] + numberArr[j];
    pairsum[sum] = [numberArr[i], numberArr[j]];
  }
}

for (let number of numberArr)
{
  const diff = 2020 - number;
  if (diff in pairsum)
  {
    let [ a, b ] = pairsum[diff];
    console.log(number * a * b);
    break;
  }
}

// 
// "js object" revision
//
// obj = {name: "my name", age: 45}
//
// 'name' in obj
// > true
//
// 'age' in obj
// > true
//

