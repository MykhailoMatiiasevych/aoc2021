const label = 'Day2-2'
console.time(label)
const readToLines = require('../common/readToLines')

const input = readToLines('./input.txt')
const { x, depth } = input
  .filter(Boolean)
  .map(cmd => cmd.split(' '))
  .map(([cmd, val]) => [cmd, Number(val)])
  .reduce(
    ({ x, depth, aim }, [command, v]) =>
      command === 'forward'
        ? { x: x + v, depth: depth + aim * v, aim }
        : command === 'down'
        ? { x, depth, aim: aim + v }
        : { x, depth, aim: aim - v },
    { x: 0, depth: 0, aim: 0 }
  )

console.log(x * depth)
console.timeEnd(label)
