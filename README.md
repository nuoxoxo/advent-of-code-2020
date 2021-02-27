# 🎄

### basic open a file 
```python
seat = []
with open('5.txt') as file:
    for line in file:
        seat.append(line.rstrip())
```

` ..., 'BFFFBBBRRR', 'BFBBBBBRRL', 'FBBBFFFLLR']`

*cf.* day 5
##
```python
file = open('6.txt', 'r')
team = [x.split() for x in file.readlines()]
```
`.split -> list of lists`

`.strip -> list of strings`

*cf.* day 6
##
### Consider a list of strings like this

`[, [...], ['juqckrl', 'ojlhsyfcn'], ['jngdhxfesqzwcptlmvb', 'tlpyhvnoxsagwmqrdzcue']]`

#### count uniq chars

```python
n = 0
for x in range(len(team)):
    temp = (set(line) for line in team[x])
    cntr = Counter(chain.from_iterable(temp))
    lett = [chr for chr, count in cntr.items()]
    n += len(lett)
print(n)
```

#### count char that appears in every strings in a sublist 

```python
n = 0
for x in range(len(team)):
    temp = (set(line) for line in team[x])
    cntr = Counter(chain.from_iterable(temp))
    lett = [chr for chr, count in cntr.items() if count == len(team[x])]
    n += len(lett)
print(n)
```

*cf.* day 6
##
#### consider a <.txt> like this : 

    hcl:#c0946f
    ecl:brn
    iyr:2017 eyr:2028
    pid:161390075 byr:1993 cid:50
    hgt:171cm

    ecl:#ae12d3 hgt:74cm cid:239 hcl:z pid:345439730 iyr:1924 byr:2029 eyr:2031


```python
pax = []
with open('4.txt', 'r') as file:
    for line in file:
        elem = line.split()
        pax.append(elem)
r = -1
for x in range(len(pax)):
    r += 1
    if pax[x] == []:
        for y in range(x - r + 1, x):
            pax[x - r] += pax[y]
            pax[y] = []
        r = 0
pax = list(filter(None, pax))
```

#### convert the txt to 

`['hcl:#c0946f', 'ecl:brn', 'iyr:2017', 'eyr:2028', 'pid:161390075', 'byr:1993', 'cid:50', 'hgt:171cm']`
`['ecl:#ae12d3', 'hgt:74cm', 'cid:239', 'hcl:z', 'pid:345439730', 'iyr:1924', 'byr:2029', 'eyr:2031']`

#### and then

```python
paks = []

for x in range(len(pacs)):
    res = dict(item.split(":") for item in pacs[x])
    paks.append(res)
```
#### turns the list into key-value pairs

`{'hcl': '#c0946f', 'ecl': 'brn', 'iyr': '2017', 'eyr': '2028', 'pid': '161390075', 'byr': '1993', 'cid': '50', 'hgt': '171cm'}`
`{'ecl': '#ae12d3', 'hgt': '74cm', 'cid': '239', 'hcl': 'z', 'pid': '345439730', 'iyr': '1924', 'byr': '2029', 'eyr': '2031'}`

*cf.* day 4
