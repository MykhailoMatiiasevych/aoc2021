const readToLines = require('../common/readToLines')

const label = 'Day9-2'
console.time(label)

const input = readToLines('./input.txt').filter(Boolean)

const width = input[0].length
const arr = input.join('').split('').map(Number)
const sizes = []
let first
while ((first = arr.findIndex(v => v < 9)) >= 0) {
  const next = [first]
  let size = 0
  while (next.length > 0) {
    const i = next.pop()
    size += (arr[i] === 9) ? 0 : 1
    arr[i] = 9
    ;(arr[i - width] || 9) < 9 && next.push(i - width)
    ;(arr[i + width] || 9) < 9 && next.push(i + width)
    ;(i % width === 0 ? 9 : arr[i - 1]) < 9 && next.push(i - 1)
    ;((i + 1) % width === 0 ? 9 : arr[i + 1]) < 9 && next.push(i + 1)
  }
  sizes.push(size)
}

const res = sizes.sort((a,b) => b - a).slice(0,3).reduce((s,v) => s * v)

console.log(res)
console.timeEnd(label)
