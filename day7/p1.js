const readToLines = require('../common/readToLines')

const label = 'Day7-1'
console.time(label)
const input = readToLines('./input.txt')[0].split(',').map(Number)
const arr = input.reduce((arr, v) => (arr[v] = (arr[v] || 0) + 1) && arr, [])

const sum = input.length
let left = 0,
  right = sum,
  cur = 0,
  dif = sum,
  index = 0

// Using iteration because reduce doesn't support break
for (let i = 0; i < arr.length; i++) {
  if (!arr[i]) {
    continue
  }
  left += cur
  cur = arr[i]
  right -= arr[i]
  const newDif = Math.abs(right - left)
  if (newDif > dif) {
    break
  }
  dif = newDif
  index = i
}
const res = arr.reduce((sum, v, i) => sum + Math.abs(i - index) * v, 0)

console.log(res)

console.timeEnd(label)
