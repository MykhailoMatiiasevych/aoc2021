const label = 'Day2-1'
console.time(label)
const readToLines = require('../common/readToLines')

const input = readToLines('./input.txt')
const { x, depth } = input
  .filter(Boolean)
  .map(cmd => cmd.split(' '))
  .map(([cmd, val]) => [cmd, Number(val)])
  .reduce(
    ({ x, depth }, [command, v]) =>
      command === 'forward'
        ? { x: x + v, depth }
        : command === 'down'
        ? { x, depth: depth + v }
        : { x, depth: depth - v },
    { x: 0, depth: 0 }
  )

console.log(x * depth)
console.timeEnd(label)
