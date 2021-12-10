const R = require('ramda')
const readToLines = require('../common/readToLines')

const label = 'Day4-2'
console.time(label)

const input = readToLines('./input.txt').filter(Boolean)

const boards = input
  .slice(1)
  .map(line => line.split(' ').filter(Boolean).map(Number))
  .reduce(
    (res, v) =>
      res.length === 0 || res[res.length - 1].v.length === 25
        ? R.append(
            {
              rows: [0, 0, 0, 0, 0],
              columns: [0, 0, 0, 0, 0],
              sum: R.sum(v),
              v,
            },
            res
          )
        : R.adjust(
            res.length - 1,
            R.evolve({
              sum: R.add(R.sum(v)),
              v: R.concat(R.__, v),
            }),
            res
          ),
    []
  )
const { final } = input[0]
  .split(',')
  .map(Number)
  .reduce(
    (res, number) => {
      if (res.final) return res
      const boards = res.boards.map(b => {
        const i = b.v.indexOf(number)
        if (i === -1) return b
        const row = Math.floor(i / 5)
        const column = i % 5
        return {
          v: b.v,
          sum: b.sum - number,
          rows: R.update(row, b.rows[row] + 1, b.rows),
          columns: R.update(column, b.columns[column] + 1, b.columns),
        }
      })
      const remaining = boards.filter(
        b => !b.rows.includes(5) && !b.columns.includes(5)
      )
      return remaining.length === 0
        ? { final: boards[0].sum * number }
        : { boards: remaining }
    },
    { boards }
  )

console.log(final)
console.timeEnd(label)
