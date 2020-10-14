import React, { FC, Children, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

import { createGrid } from 'reducers'

import { Container, Row } from './styles'
import Block from './block'

const Grid: FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const create = useCallback(() => dispatch(createGrid()), [dispatch])
  useEffect(() => {
    create()
  }, [create])
  
  return (
    <Container data-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block colIndex={colIndex} rowIndex={rowIndex}></Block>
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default Grid
