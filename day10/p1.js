const readToLines = require('../common/readToLines')

const label = 'Day10-1'
console.time(label)

const input = readToLines('./input.txt').filter(Boolean)
const scores = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137,
}
const open = '([{<'
const close = ')]}>'
const res = input.reduce((sum, str) => {
  const { ch } = str.split('').reduce(
    ({ stack, ch }, c) => {
      if (ch) return { ch }
      if (open.includes(c)) {
        stack.push(open.indexOf(c))
        return { stack }
      }
      if (c !== close[stack.pop()]) {
        return { ch: c }
      }
      return { stack }
    },
    { stack: [] }
  )
  return ch ? sum + scores[ch] : sum
}, 0)

console.log(res)

console.timeEnd(label)
