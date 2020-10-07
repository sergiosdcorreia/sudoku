import React, { FC, Children } from 'react'

const Grid: FC = () => {
  return (
    <div data-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <div data-cy="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => <div data-cy="block"></div>)
            )}
          </div>
        ))
      )}
    </div>
  )
}

export default Grid
