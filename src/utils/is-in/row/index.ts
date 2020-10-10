import { GRID, NUMBERS } from 'typings'

interface Input {
  grid: GRID
  row: number
  value: NUMBERS
}

/**
 * A function that returns true if the value is already being used in the current grid row.
 * @param input Object with 9x9 Sudoku Grid, row Index and value
 */
function isInRow({ grid, row, value }: Input): boolean {
  return grid[row].includes(value)
}

export default isInRow
