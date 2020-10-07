import React, { FC } from 'react'

import { Container } from './styles'

interface IProps {
  colIndex: number
  rowIndex: number
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  return <Container data-cy={`block-${rowIndex}-${colIndex}`} />
}

export default Block
