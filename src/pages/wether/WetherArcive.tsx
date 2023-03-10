import { Dimensions, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Image, Section } from 'tags'
import { Header } from 'components/Header'
import { AppInput, BlackText } from 'components'
import EStyleSheet from 'react-native-extended-stylesheet'
import { FlatList } from 'react-native-gesture-handler'
import { commonStyles } from 'commonStyles'
import { navigator } from 'services/navigator'
import { useNavigation } from '@react-navigation/native'
import { callApi } from 'services'
import { useLoading } from 'hooks/useLoading'

const MAP = require('assets/img/tehranMap.png')
const CITY = require('assets/img/tehran.jpg')
const SEARCH = require('assets/icon/008-search.png')
const ARROW_LEFT = require('assets/icon/019-angle-left.png')

const appWidth = Dimensions.get('window').width

const WetherArcive = () => {
  const navigation = useNavigation()
  const { showLoading, hideLoading } = useLoading()

  const [cities, setCities] = useState([])

  useEffect(() => {
    getCities()
  }, [])

  const getCities = async () => {
    try {
      const citiesUrl = `/provinces/tree`
      const citiesRequestConfig = {
        method: 'get',
        url: citiesUrl,
        timeout: 0,
        headers: {
          Accept: 'application/json'
        }
      }
      showLoading()
      const citiesResponse = await callApi(citiesRequestConfig)
      const { message, status } = citiesResponse
      hideLoading()

      console.log('===========citiesResponse=========================')
      console.log(citiesResponse)
      console.log('====================================')
      if (status == 200) {
        setCities(citiesResponse.data)
        console.log('======cities==============================')
        console.log(cities)
        console.log('====================================')
      }
    } catch (error) {}
  }

  const searchIcon = () => {
    return <Image style={styles.icon} source={SEARCH} />
  }

  const renderCities = ({ item, index }) => {
    return (
      <Button
        onPress={() => navigator(navigation, 'WetherSingle', { cityName: item.name })}
        style={styles.itemContainer}>
        <Image source={CITY} style={styles.itemPicturs} />
        <Section style={commonStyles.rowJustifySpaceBetween}>
          <BlackText style={styles.itemName}>{item.name}</BlackText>
          <Image style={styles.itemIcon} source={ARROW_LEFT} />
        </Section>
      </Button>
    )
  }

  return (
    <Section style={styles.mainContainer}>
      <Header wetherSection={true} title={'هواشناسی دریایی'} leftIcon="bell" />
      <Image style={styles.backgroundImage} source={MAP} />
      <Section style={styles.searchContainer}>
        <AppInput
          placeholder="شهر مورد نظر..."
          LeftElement={searchIcon}
          borderColor={'rgba(0,0,0,0)'}
          containerStyle={{ borderRadius: 20 }}
        />
      </Section>
      <Section style={styles.citiesContainer}>
        <FlatList
          inverted={false}
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

export default WetherArcive

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
  citiesContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 50
  },
  itemContainer: {
    width: appWidth * 0.45,
    height: appWidth * 0.4,
    backgroundColor: EStyleSheet.value('$bg.white'),
    borderRadius: 20,
    padding: 5,
    margin: 2
  },
  itemPicturs: {
    width: '100%',
    height: '70%',
    borderRadius: 20,
    resizeMode: 'contain'
  },
  itemName: {
    margin: 10
  }
})
