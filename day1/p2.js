const label = 'Day2-1'
console.time(label)
const R = require('ramda')
const readToLines = require('../common/readToLines')

const input = readToLines('./input.txt')
const sum = (arr, i) => R.sum(arr.slice(i, i + 3))
const count = input
  .map(Number)
  .reduce(
    (count, n, i, arr) => count + (sum(arr, i + 1) > sum(arr, i) ? 1 : 0),
    0
  )

console.log(count)
console.timeEnd(label)
