infile = 'in'

from helpers.reader import read_as_list

suffix = '2001.' + infile

lines = read_as_list( suffix )
lines.pop()

for x in range(len(lines)):
    lines[x] = int(lines[x])

res1 = None
for x in range(len(lines)):
    for y in range(x + 1, len(lines)):
        if lines[x] + lines[y] == 2020:
            res1 = lines[x] * lines[y]

res2 = None
for x in range(len(lines)):
    for y in range(x + 1, len(lines)):
        for z in range(y + 1, len(lines)):
            if lines[x] + lines[y] + lines[z] == 2020:
                res2 = lines[x] * lines[y] * lines[z]

print('Part 1:', res1)
print('Part 2:', res2)

