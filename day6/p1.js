const label = 'Day6-1'
console.time(label)
const R = require('ramda')
const readToLines = require('../common/readToLines')

const init = Array(9).fill(0)
const input = readToLines('./input.txt')[0].split(',').map(Number)
input.forEach(v => init[v]++)

R.range(0,80).forEach(() => {
  const zero = init[0]
  for (let i = 1; i<9; i++) {
    init[i-1] = init[i]
  }
  init[6]+= zero
  init[8] = zero
})

console.log(R.sum(init))
console.timeEnd(label)
