const readToLines = require('../common/readToLines')

const label = 'Day9-1'
console.time(label)

const input = readToLines('./input.txt').filter(Boolean)
const width = input[0].length

const res = input
  .join('')
  .split('')
  .reduce(
    (sum, v, i, arr) =>
      sum +
      (v < (arr[i - width] || 9) &&
      v < (arr[i + width] || 9) &&
      v < (i % width === 0 ? 9 : arr[i - 1]) &&
      v < ((i + 1) % width === 0 ? 9 : arr[i + 1])
        ? Number(v) + 1
        : 0),
    0
  )

console.log(res)

console.timeEnd(label)
