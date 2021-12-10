const readToLines = require('../common/readToLines')

const label = 'Day8-1'
console.time(label)

const input = readToLines('./input.txt').filter(Boolean)
const res = input
  .map(s => s.split(' | '))
  .map(([, s]) => s.split(' '))
  .flat()
  .filter(s => [2,3,4,7].includes(s.length))
  .length

console.log(res)

console.timeEnd(label)
