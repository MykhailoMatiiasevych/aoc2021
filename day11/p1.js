const readToLines = require('../common/readToLines')

const label = 'Day11-1'
console.time(label)

const input = readToLines('./input.txt').filter(Boolean)

const width = input[0].length
let state = input.join('').split('').map(Number)
let flashes = 0
for (let step = 0; step < 100; step++) {
  // Increase level
  state = state.map(v => (v <= 0 ? 1 : v + 1))

  // Flash
  let index
  while ((index = state.findIndex(v => v > 9)) >= 0) {
    flashes++
    state[index] = Number.MIN_SAFE_INTEGER
    const isTop = index < width
    const isBottom = index + width > state.length - 1
    const isLeft = index % width === 0
    const isRight = (index + 1) % width === 0

    !isTop && !isLeft && state[index - width - 1]++
    !isTop && state[index - width]++
    !isTop && !isRight && state[index - width + 1]++
    !isRight && state[index + 1]++
    !isRight && !isBottom && state[index + width + 1]++
    !isBottom && state[index + width]++
    !isBottom && !isLeft && state[index + width - 1]++
    !isLeft && state[index - 1]++
  }
}

console.log(flashes)

console.timeEnd(label)
