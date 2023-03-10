import { Dimensions, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button, Image, Section } from 'tags'
import { Header } from 'components/Header'
import { AppInput, BlackText } from 'components'
import EStyleSheet from 'react-native-extended-stylesheet'
import { FlatList } from 'react-native-gesture-handler'
import { commonStyles } from 'commonStyles'

const MAP = require('assets/img/tehranMap.png')
const ITEM_ICON_1 = require('assets/icon/sun.png')
const ITEM_ICON_2 = require('assets/icon/farming.png')
const SEARCH = require('assets/icon/008-search.png')
const ARROW_LEFT = require('assets/icon/019-angle-left.png')

const appWidth = Dimensions.get('window').width

const WetherSingle = ({ route }) => {
  const { cityName } = route.params
  const [cities, setCities] = useState([
    {
      id: 1,
      name: 'پیش بینی 5 روزه',
      icon: ITEM_ICON_1,
      iconColor: EStyleSheet.value('$text.yellow')
    },
    {
      id: 2,
      name: 'پیش بینی کشاورزی',
      icon: ITEM_ICON_2,
      iconColor: EStyleSheet.value('$text.green')
    }
  ])

  const searchIcon = () => {
    return <Image style={styles.icon} source={SEARCH} />
  }

  const renderCities = ({ item, index }) => {
    return (
      <Button style={styles.itemContainer}>
        <Image source={item.icon} style={{ ...styles.itemPicturs, tintColor: item.iconColor }} />
        <Section style={commonStyles.rowJustifySpaceBetween}>
          <BlackText style={styles.itemName}>{item.name}</BlackText>
          <Image style={styles.itemIcon} source={ARROW_LEFT} />
        </Section>
      </Button>
    )
  }

  return (
    <Section style={styles.mainContainer}>
      <Header wetherSection={true} title={cityName} leftIcon="bell" />
      <Image style={styles.backgroundImage} source={MAP} />
      <Section style={styles.searchContainer}>
        <AppInput
          placeholder="شهر مورد نظر..."
          LeftElement={searchIcon}
          borderColor={'rgba(0,0,0,0)'}
          containerStyle={{ borderRadius: 20 }}
        />
      </Section>
      <Section style={styles.itemsMainContainer}>
        <FlatList
          inverted={true}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={cities}
          renderItem={renderCities}
          keyExtractor={(item, index) => index.toString()}
        />
      </Section>
    </Section>
  )
}

export default WetherSingle

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%'
  },
  backgroundImage: {
    width: '100%',
    height: '100%'
  },
  searchContainer: {
    width: '90%',
    height: 55,
    borderRadius: 10,
    alignSelf: 'center',
    position: 'absolute',
    top: 100,
    backgroundColor: EStyleSheet.value('$bg.white')
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: EStyleSheet.value('$border.dark')
  },
  itemIcon: {
    width: 15,
    height: 15,
    tintColor: EStyleSheet.value('$border.dark')
  },
  itemsMainContainer: {
    width: '100%',
    position: 'absolute',
    top: 200
  },
  itemContainer: {
    width: appWidth * 0.45,
    height: appWidth * 0.3,
    backgroundColor: EStyleSheet.value('$bg.white'),
    borderRadius: 20,
    padding: 5,
    margin: 5
  },
  itemPicturs: {
    width: '40%',
    height: '50%',
    margin: 10,
    resizeMode: 'contain'
  },
  itemName: {
    margin: 5
  }
})
