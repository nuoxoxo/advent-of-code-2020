oper = []
with open('8.txt','r') as file:
    for line in file:
        oper.append(line.rstrip())

trace = []
for x in range(len(oper)):
    w = 1;
    trace.append(w);

# print(sum(trace)) # 612

### Part 1

def debug(ls): # pass in a list

    n = 0
    accu = 0

    while n <= len(ls):

        if trace[n] == 0:
            break

        if 'acc' in ls[n]:
            trace[n] = 0
            if '+' in ls[n]:
                accu += int(ls[n].rsplit('+')[1])
            elif '-' in ls[n]:
                accu -= int(ls[n].rsplit('-')[1])
            n += 1

        if 'nop' in ls[n]:
            trace[n] = 0
            n += 1

        if 'jmp' in ls[n]:
            trace[n] = 0
            if '+' in ls[n]:
                n += int(ls[n].rsplit('+')[1])
            elif '-' in ls[n]:
                n -= int(ls[n].rsplit('-')[1])

    return [accu, sum(trace)]


### Part 2

def fix(ls): # pass in a list

    return accu


print(fix(oper))
print(sum(trace))