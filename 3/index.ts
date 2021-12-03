const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

const counter: any = {

}

const lineCount = lines.length

lines.map(element => [...element])
    .forEach((element) => {
        element.forEach((char, index) => {
            if (char === '1') {
                counter[index] = (counter[index] || 0) + 1
            }
        })
    }) 

console.log(counter)

type Result = {
    gamma: '1' | '0'
    epsilon: '1' | '0'
}

const result: Result[] = Object.keys(counter).map((index: any) => {
    const tmp: any = {}
    const zeroCount = lineCount - counter[index]
    const oneCount = counter[index]

    const gamma = oneCount > zeroCount ? '1' : '0'
    const epsilon = oneCount > zeroCount ? '0' : '1'
    return {
        gamma,
        epsilon
    }
})

const gammaResult = result.map(i => i.gamma).join('')
const epsilonResult = result.map(i => i.epsilon).join('')

const decGamma = parseInt(gammaResult, 2)
const decEpsilon = parseInt(epsilonResult, 2)
console.log(decGamma * decEpsilon)

