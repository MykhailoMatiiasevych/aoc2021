const label = 'Day5-1'
console.time(label)
const R = require('ramda')
const readToLines = require('../common/readToLines')

const input = readToLines('./input.txt').filter(Boolean)

const xKey = x => y => `${x}_${y}`
const yKey = y => x => `${x}_${y}`
const map = new Map()

const count = input
  .map(s => s.split(' '))
  .map(([start, , end]) => start.split(',').concat(end.split(',')))
  .filter(([xs, ys, xe, ye]) => xs === xe || ys === ye)
  .reduce(
    (count, [xs, ys, xe, ye]) => {
      const {key, from, to} =
        xs === xe
          ? { key: xKey(xs), from: Math.min(ys, ye), to: Math.max(ys, ye) }
          : { key: yKey(ys), from: Math.min(xs, xe), to: Math.max(xs, xe) }
      R.range(from, to + 1).forEach(i => {
        const v = map.get(key(i)) || 0
        if (v === 1) count++
        map.set(key(i), v + 1)
      })
      return count
    },
    0
  )

console.log(count)
console.timeEnd(label)
