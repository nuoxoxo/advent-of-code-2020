# Read file
```r
1933
1963
1924
1832
...
```
```js
const fs = require('fs');
const parseInput = (name, sp) => {
  return fs
    .readFileSync(name)
    .toString()
    .split(sp);
}
const lines = parseInput('2001.txt', '\n').map(Number);
```
OR
```js
const fs = require('fs');
const lines = fs.readFileSync('2001.txt').toString().split('\n')
const numberArr = lines.map(Number);
```
