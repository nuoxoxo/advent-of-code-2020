// O(n) constant time lookup

const fs = require('fs').promises;

const parseInput = async () => 
{
  const data = await fs.readFile('2001.txt', {encoding: 'utf-8'});
  return data.split('\n');
}

const solve = async () =>
{
  const lines = await parseInput();
  const numbers = lines.map(Number);
  const numberSet = new Set();

  //console.log(lines); // STRINGS
  //console.log(numbers); // NUMS
 
  for (let number of numbers)
  {
    const difference = 2020 - number;
    if (numberSet.has(difference))
    {
      return number * difference;
    }
    numberSet.add(number);
  }

}


solve();
