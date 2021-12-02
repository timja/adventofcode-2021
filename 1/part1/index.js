#!/usr/bin/env node

const fs = require('fs')
const { cursorTo } = require('readline')

const file = fs.readFileSync('input.txt', 'utf-8')

const input = file.split('\n')

let increasedFromPrevious = 0
let decreasedFromPrevious = 0

let previousValue

for (i of input) {
    if (previousValue === undefined) {
        previousValue = parseInt(i, 10)
        continue
    }
    console.log('previous: ' + previousValue + ' current ' + i)
    if (previousValue < parseInt(i)) {
        increasedFromPrevious++
    } else {
        decreasedFromPrevious++
    }
    previousValue = i
}

console.log(increasedFromPrevious)
