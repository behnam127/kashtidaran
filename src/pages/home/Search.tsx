import { StyleSheet } from 'react-native'
import React from 'react'
import { AppInput } from 'components'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Image, Section } from 'tags'

const SEARCH = require('assets/icon/008-search.png')

const Search = () => {
  const searchIcon = () => {
    return <Image style={styles.icon} source={SEARCH} />
  }
  return (
    <Section style={styles.searchContainer}>
      <AppInput
        placeholder="جستجو کنید..."
        LeftElement={searchIcon}
        borderColor={EStyleSheet.value('$bg.gray')}
        style={{ backgroundColor: 'rgba(0,0,0,0)' }}
      />
    </Section>
  )
}

export default Search

const styles = StyleSheet.create({
  searchContainer: {
    width: '90%',
    height: 55,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: EStyleSheet.value('$bg.gray')
  },
  icon: {
    width: 15,
    height: 15
  }
})
