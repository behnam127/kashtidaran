import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import { BlackText } from 'components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from 'components/Header'
import { Image, ScrollView, Section } from 'tags'
import Search from './Search'
import TopSlider from './TopSlider'
import Commercials from './Commersials'
import AccessBtn from './AccessBtn'
import News from './News'
import { useNavigation } from '@react-navigation/native'

const BANNER2 = require('assets/img/5.png')
const BANNER3 = require('assets/img/6.png')

const appHeight = Dimensions.get('window').height
const appWidth = Dimensions.get('window').width

const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <Header rightIcon="menu" leftIcon="bell" title={'logo'} backgroundColor={EStyleSheet.value('$bg.white')} />
      <Section style={styles.mainContainer}>
        <ScrollView>
          <Search />
          <TopSlider />
          <Commercials title="جدیدترین آگهی ها" />
          <AccessBtn />
          <Commercials title="آگهی های فوری" />
          <Section style={styles.itemContainer}>
            <Image style={styles.itemImage} source={BANNER2} />
          </Section>
          <Commercials title="کاریابی و استخدام" />
          <Section style={styles.itemContainer}>
            <Image style={styles.itemImage} source={BANNER3} />
          </Section>
          <News title="اخبار ومقالات" />
        </ScrollView>
      </Section>
    </SafeAreaView>
  )
}
export { HomeScreen }

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: appHeight - 160,
    backgroundColor: EStyleSheet.value('$bg.white')
  },
  itemContainer: {
    width: '90%',
    alignSelf: 'center',
    height: 150,
    marginLeft: 7,
    marginRight: 7,
    borderRadius: 10,
    overflow: 'hidden'
  },
  itemImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover'
  }
})
