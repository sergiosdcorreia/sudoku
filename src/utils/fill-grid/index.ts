import { GRID, NUMBERS } from 'typings'
import { identifySquare, isInCol, isInRow, isInSquare, shuffle } from 'utils'

const gridExample: GRID = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
]

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * A backtracking/recursive function to check all the possible combinations of numbers until a solution is found
 * @param grid  9 X 9 solution grid
 */

function fillGrid(grid: GRID) {
  let row = 0
  let col = 0

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9)
    col = i % 9

    if (grid[row][col] === 0) {
      shuffle(numbers)

      for (let value of numbers) {
        // is it not in the grid row?
        if (!isInRow({ grid, row, value })) {
          // is it not in the grid col?

          if (!isInCol({ col, grid, value })) {
            const square = identifySquare({ col, grid, row })
            if (!isInSquare({ square, value })) {
            }
            // is it not in the grid square?
            // if this is the case

            grid[row][col] = value
            // check grid if it is full, if yes, stop and return
            // otherwise we run fillGrid(grid)
          }
        }
      }

      break
    }
  }

  grid[row][col] = 0
}

export default fillGrid
