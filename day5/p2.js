const label = 'Day5-2'
console.time(label)
const readToLines = require('../common/readToLines')

const input = readToLines('./input.txt').filter(Boolean)

const map = new Map()
const count = input
  .map(s => s.split(' '))
  .map(([start, , end]) => start.split(',').concat(end.split(',')).map(Number))
  .reduce((count, [xs, ys, xe, ye]) => {
    const iteration = () => {
      const key = `${xs}_${ys}`
      const v = map.get(key) || 0
      if (v === 1) count++
      map.set(key, v + 1)
    }
    while (xs !== xe || ys !== ye) {
      iteration()
      xs += xs === xe ? 0 : (xe - xs) / Math.abs(xe - xs)
      ys += ys === ye ? 0 : (ye - ys) / Math.abs(ye - ys)
    }
    iteration()

    return count
  }, 0)

console.log(count)
console.timeEnd(label)
