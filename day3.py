grid = []

with open ('3.txt', 'r') as file:
    for line in file:
        # plan.append(line.split()) # add not string but sublist!
        grid.extend(line.split())

counter = 0
x = 0
y = 0

while x < len(grid):
    if grid[x][y] == '#':
        counter += 1
    x += 1
    if y + 3 > len(grid[0]) - 1:
        # rest y
        y = y + 3 - 31
    else:
        y += 3

print(counter)
