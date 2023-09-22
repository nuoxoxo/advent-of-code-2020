const choice = 'in'
const axios = require('axios')
const url = 'https://raw.githubusercontent.com/nuoxoxo/in/main/aoc/2001.' + choice;

( async () => {

    try {

        const resp = await axios.get( url )
        const lines = resp.data.split('\n')

        lines.pop()

        // lines.map(n => parseInt(n)) // why this line does not work
        // console.log(lines)

        let i = -1
        while (++i < lines.length)
            lines[i] = parseInt(lines[i])

        let [res1, res2] = [undefined, undefined]

        //  Part 1

        let S = new Set<number>(lines)
        for (let n of lines) {
            const diff = 2020 - n
            if (S.has(diff)) {
                res1 = diff * n
                break
            }
            S.add(n)
        }

        //  Part 2

        let D: Record<number, number[]> = {}
        i = -1
        while (++i < lines.length) {
            let j = i
            while (++j < lines.length) {
                let key = lines[i] + lines[j]
                D[ key ] = [ lines[i], lines[j] ]
            }
        }
        for (let n of lines) {
            const key = 2020 - n
            if (D.hasOwnProperty(key)) {
                let [l, r] = D[key]
                res2 = l * r * n
                break
            }
        }

        console.log('Part1: ', res1)
        console.log('Part2: ', res2)

    } catch (e) {
        console.log('error - ', e)
    }
})()
