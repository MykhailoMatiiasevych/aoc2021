const readToLines = require('../common/readToLines')

const label = 'Day8-2'
console.time(label)
const input = readToLines('./input.txt').filter(Boolean)

/*
7 && 4 = 9 (5/6)
!7 = 6 (4/6)
6 = 5 (5/5)
!5 = 2(2/5)
rest 5 = 3
rest 6 = 0
*/
const extra = (a, b) =>
  b.split('').reduce((res, c) => res + (a.includes(c) ? 0 : 1), 0)

const inv = (a) => ['a','b','c','d','e','f','g'].filter(v => !a.includes(v)).join('')
const len = (keys, l) => keys.filter(v => v.length === l)

const decode = (keys, values) => {
  keys = keys.map(v => v.split('').sort().join(''))
  values = values.map(v => v.split('').sort().join(''))
  const res = []
  res[1] = len(keys,2)[0]
  res[4] = len(keys,4)[0]
  res[7] = len(keys,3)[0]
  res[8] = len(keys,7)[0]
  res[9] = len(keys, 6).find(b => extra(res[4] + res[7],b) === 1)
  res[6] = len(keys, 6).find(b => extra(inv(res[7]),b) === 2)
  res[5] = len(keys, 5).find(b => extra(res[6],b) === 0)
  res[2] = len(keys, 5).find(b => extra(inv(res[5]),b) === 3)
  res[3] = len(keys, 5).find(b => ![res[2],res[5]].includes(b))
  res[0] = len(keys, 6).find(b => ![res[6],res[9]].includes(b))

  return Number(values.map(v => res.findIndex(r => r === v)).join(''))
}

const res = input
  .map(s => s.split(' | '))
  .map(([v, s]) => decode(v.split(' '), s.split(' ')))
  .reduce((res, v) => res + v, 0)
console.log(res)
console.timeEnd(label)
