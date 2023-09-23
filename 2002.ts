const infile = 'alt';
const axios = require('axios')
const url = 'https://raw.githubusercontent.com/nuoxoxo/in/main/aoc/2002.' + infile;

( async () => {

    try {

        const resp = await axios.get( url )
        const lines = resp.data.split('\n')
        lines.pop()
        let P:string[][] = []
        for (let line of lines)
            P.push(line.split(' '))

        let res1 = 0
        let res2 = 0

        //  Part 1

        for (let p of P) {

            let temp:string[] = p[0].split('-')
            let [min, max] = [ parseInt(temp[0]), parseInt(temp[1]) ]
            let c = p[1].split(':')[0]
            // console.log(p[1], p[1].split(':'), p[2])
            let cnt = 0
            for (let char of p[2].split('')) {
                if (c === char)
                    ++cnt
            }
            if (cnt <= max && cnt >= min)
                ++res1
        }

        //  Part 2

        for (let p of P) {
            let temp:string[] = p[0].split('-')
            let L = parseInt(temp[0]) - 1
            let R = parseInt(temp[1]) - 1
            let c = p[1].split(':')[0]
            if (c === p[2][L] && c === p[2][R])
                continue
            if (c === p[2][L] || c === p[2][R])
                ++res2
        }


        console.log('Part 1:', res1)
        console.assert(res1 === 519 || res1 === 607)

        console.log('Part 2:', res2)
        console.assert(res2 === 708 || res1 === 321)

    } catch (e) {
        console.log('error - ', e)
    }
})()

