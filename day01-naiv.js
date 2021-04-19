// header function to read txt input

const fs = require('fs');

const parseInput = (name, sp) => {
    return fs.readFileSync(name).toString().split(sp).filter(entry => entry);
}

let part1, part2;

const lines = parseInput('2001.txt', '\n').map(Number);

for (let i = 0; i < lines.length; i++)
{
    for (let j = i + 1; j < lines.length; j++)
    {
        if (lines[i] + lines[j] == 2020)
        {
            part1 = lines[i] * lines[j];
        }

        for (let k = j + 1; k < lines.length; k++)
        {
            if (lines[i] + lines[j] + lines[k] == 2020)
            {
                part2 = lines[i] * lines[j] * lines[k];
            }}}}

console.log(part1 + "\n" + part2);
