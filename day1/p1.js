const label = 'Day1-1'
console.time(label)
const readToLines = require('../common/readToLines')

const input = readToLines('./input.txt')
const { count } = input
  .map(Number)
  .reduce(
    ({ count, last }, n) => ({ count: count + (n > last ? 1 : 0), last: n }),
    { count: 0, last: Number.MAX_SAFE_INTEGER }
  )

console.log(count)
console.timeEnd(label)
