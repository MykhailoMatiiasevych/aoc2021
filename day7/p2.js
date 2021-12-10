const readToLines = require('../common/readToLines')

const label = 'Day7-1'
console.time(label)
const input = readToLines('./input.txt')[0].split(',').map(Number)
const arr = input.reduce((arr, v) => (arr[v] = (arr[v] || 0) + 1) && arr, [])

const s = i => (Math.abs(i) * (Math.abs(i) + 1)) / 2

// brute force :(
let minCost = Number.MAX_SAFE_INTEGER
for (let i = 0; i < arr.length; i++) {
  const cost = arr.reduce((sum, v, j) => sum + s(j - i) * v, 0)
  if (cost < minCost) {
    minCost = cost
  } else {
    break
  }
}

console.log(minCost)
console.timeEnd(label)
