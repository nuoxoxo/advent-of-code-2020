a = []

with open('10.txt') as file:
    for line in file:
        a.append(int(line.rstrip()))

### Part 1

path = a # mapping

# count one-jolt and three-jolt
c1 = 1
c3 = 1

start = 0
# end = 0
for x in range(len(a)):
    if a[x] == 1:
        start = x

x = 1 # x is jolt
while True:
    if x == max(a):
        break
    elif x + 1 in path:
        x += 1
        c1 += 1
    elif x + 2 in path:
        x +=2
    elif x + 3 in path:
        x += 3
        c3 += 1
    else:
        break
w = c1 * c3
print(w)


### Part 2

# def check(n):
#     counter = 0
#     if n + 1 in path:
#         counter += 1
#     if n + 2 in path:
#         counter += 1
#     if n + 3 in path:
#         counter += 1
#     return counter


# for x in range(len(a)):
#     in a[x] == max(a):
#         if check()
    


print(w)
