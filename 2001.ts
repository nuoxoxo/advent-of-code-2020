const choice = 'in'
const axios = require('axios')
const url = 'https://raw.githubusercontent.com/nuoxoxo/in/main/aoc/1801.' + choice;

( async () => {

    try {

        const resp = await axios.get( url )
        const lines = resp.data.split('\n')

        lines.pop()
        console.log(lines)

        let S = new Set()
        // for (let n of lines)

    } catch (e) {
        console.log('error - ', e)
    }
})()
