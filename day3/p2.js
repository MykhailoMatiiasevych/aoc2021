const readToLines = require('../common/readToLines')

const label = 'Day3-2'
console.time(label)

const input = readToLines('./input.txt').filter(Boolean)

const getMost = (list, i) => {
  if (list.length === 1) return list
  const mostCommon = list.reduce((sum,s) => sum + Number(s[i]), 0) >= list.length / 2 ? '1' : '0'
  return list.filter(s => s[i] === mostCommon)
}

const getLeast = (list, i) => {
  if (list.length === 1) return list
  const leastCommon = list.reduce((sum,s) => sum + Number(s[i]), 0) >= list.length / 2 ? '0' : '1'
  return list.filter(s => s[i] === leastCommon)
}

const {
  most: [v1],
  least: [v2],
} = input[0]
  .split('')
  .reduce(
    ({ most, least }, _, i) => ({
      most: getMost(most, i),
      least: getLeast(least, i),
    }),
    { most: input, least: input }
  )

const b1 = parseInt(v1, 2)
const b2 = parseInt(v2, 2)

console.log(b1 * b2)
console.timeEnd(label)
