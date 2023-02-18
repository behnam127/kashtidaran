import { StyleSheet, ViewStyle } from 'react-native'
import React from 'react'
import { Image, Section } from 'tags'
import { AppInput } from './AppInput'
import EStyleSheet from 'react-native-extended-stylesheet'

import SEARCH_ICON from 'assets/icons/search.png'

export function SearchInput({ style }: { style: ViewStyle }) {
  const LeftElement = () => <Image style={styles.icon} source={SEARCH_ICON} />
  const borderColor = EStyleSheet.value('$border.light')
  return (
    <Section style={styles.searchContainer}>
      <AppInput borderColor={borderColor} title="جستجو کنید" LeftElement={LeftElement} />
    </Section>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 10
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: EStyleSheet.value('$bg.darkBlue'),
    resizeMode: 'contain'
  }
})
