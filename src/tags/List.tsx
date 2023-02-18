import React from 'react'
import { FlatList, FlatListProps } from 'react-native'

export function List<ItemType>({ renderItem, data }: FlatListProps<ItemType>) {
  return <FlatList renderItem={renderItem} data={data} />
}
