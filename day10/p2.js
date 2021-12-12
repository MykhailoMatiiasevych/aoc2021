const readToLines = require('../common/readToLines')

const label = 'Day10-2'
console.time(label)

const input = readToLines('./input.txt').filter(Boolean)

const scores = {
  ')': 1,
  ']': 2,
  '}': 3,
  '>': 4,
}
const open = '([{<'
const close = ')]}>'
const lines = input
  .map(str => {
    const { stack } = str.split('').reduce(
      ({ stack }, c) => {
        if (!stack) return {}
        if (open.includes(c)) {
          stack.push(open.indexOf(c))
          return { stack }
        }
        if (c !== close[stack.pop()]) {
          return {}
        }
        return { stack }
      },
      { stack: [] }
    )
    return stack
      ? stack.reverse().reduce((sum, v) => sum * 5 + scores[close[v]], 0)
      : null
  })
  .filter(Boolean)
  .sort((a, b) => a - b)

console.log(lines[Math.floor(lines.length / 2)])

console.timeEnd(label)
