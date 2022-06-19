import React from 'react'
import { IRecipeItem } from '../../types/recipes'

interface ItemProps {
  item: IRecipeItem
}

export const Item = ({ item }: ItemProps) => {
  return <p style={{ height: '384px', width: '348px' }}>{item.title}</p>
}
