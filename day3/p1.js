const readToLines = require('../common/readToLines')

const label = 'Day3-1'
console.time(label)

const input = readToLines('./input.txt').filter(Boolean)
const bin = input
  .reduce(
    (res, str) =>
      str
        .split('')
        .map(Number)
        .map((n, i) => [...res[i], n]),
    Array(input[0].length)
      .fill(0)
      .map(() => [])
  )
  .map(arr => arr.reduce((s, v) => s + v))
  .map(v => (v > input.length / 2 ? 1 : 0))
  .join('')

const b1 = parseInt(bin, 2)
const b2 = Math.pow(2, input[0].length) - 1 - b1

console.log(b1 * b2)
console.timeEnd(label)
