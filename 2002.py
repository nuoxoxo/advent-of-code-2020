from helpers.reader import read_as_list

infile = 'in'
lines = read_as_list('2002.' + infile)
lines.pop()

P = []
for line in lines:
    item = line.split()
    P.append(item)

# part 1

res1 = 0

for p in P:

    temp = p[0].split('-')
    mini = int(temp[0])
    maxi = int(temp[1])
    c = p[1][0]
    cnt = p[2].count(c)
    if mini <= cnt <= maxi:
        res1 += 1

# part 2

res2 = 0

for p in P:

    temp = p[0].split('-')
    L = int(temp[0]) - 1
    R = int(temp[1]) - 1
    c = p[1][0]
    if c == p[2][L] and c == p[2][R]:
        continue
    if c == p[2][L] or c == p[2][R]:
        res2 += 1

print('Part 1:', res1)
print('Part 2:', res2)

