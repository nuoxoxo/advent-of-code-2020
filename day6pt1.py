file = open('6.txt', 'r')
team = [x.strip() for x in file.readlines()]
# above line: .split -> list of lists ; .strip -> list of strings

r = -1
for x in range(len(team)):
    r += 1
    if team[x] == '':
        for y in range(x-r+1, x):
            team[x-r] += team[y]
            team[y] = ''
        r = 0
    if x == len(team) - 1:
        for y in range(x-r+1, len(team)):
            team[x-r] += team[y]
            team[y] = ''
            
# then the list looks like:
#'juqckrlojlhsyfcn', '', '', 'jngdhxfesqzwcptlmvbtlpyhvnoxsagwmqrdzcue', '', '']

team = list(filter(None, team))

# after filter empty strs:
#wfzghucjvs', 'juqckrlojlhsyfcn', 'jngdhxfesqzwcptlmvbtlpyhvnoxsagwmqrdzcue']

def yess(s):
    find_uniq_char = ''.join(set(s))
    leng = len(find_uniq_char)
    return leng

count = 0
for x in range(len(team)):
    w = yess(team[x])
    count += w

print(count)
