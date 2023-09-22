infile = 'in'

from collections import defaultdict
from helpers.reader import read_as_list

suffix = '2001.' + infile

lines = read_as_list( suffix )
lines.pop()

for x in range(len(lines)):
    lines[x] = int(lines[x])

res1, res2 = None, None

S = set()
for n in lines:
    diff = 2020 - n
    if diff in S:
        res1 = n * diff
    S.add(n)

D = defaultdict()
for i in range(len(lines)):
    for j in range(i + 1, len(lines)):
        key = lines[i] + lines[j]
        D[key] = (lines[i], lines[j])
for n in lines:
    key = 2020 - n
    if key not in D:
        continue
    l, r = D[key]
    res2 = l * r * n
    break

print('Part 1:', res1)
print('Part 2:', res2)

