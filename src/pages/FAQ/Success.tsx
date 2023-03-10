import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Image, Section } from 'tags'
import { FullWidthButton, GrayText } from 'components'
import { commonStyles } from 'commonStyles'
import { SafeAreaView } from 'react-native-safe-area-context'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Header } from 'components/Header'

const titleDots = require('assets/icons/titleDots.png')
const downArrow = require('assets/icons/downArrow.png')
const tick = require('assets/icons/tick.png')

const Success = () => {
  const [modalDisplay, setModalDisplay] = useState('none')

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header title="پرسش های متداول" />
      <Section style={styles.noDataContainer}>
        <Image source={tick} style={styles.noDataImage} />
        <GrayText size={14}>کاربر گرامی سرمایکس</GrayText>
        <GrayText size={14}>سوال شما با موفقیت در سامانه پشتیبانی ثبت شد</GrayText>
        <Section style={styles.fullWidthBtnContainer}>
          <FullWidthButton text="پرسش های متداول" state="activeLightRed"></FullWidthButton>
        </Section>
      </Section>
    </SafeAreaView>
  )
}

export { Success }

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: EStyleSheet.value('$bg.white')
  },

  noDataContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain'
  },
  noDataImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    tintColor: EStyleSheet.value('$text.green')
  },
  fullWidthBtnContainer: {
    width: '85%',
    alignSelf: 'center',
    marginTop: 30
  }
})
