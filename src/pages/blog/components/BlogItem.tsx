import { commonStyles } from 'commonStyles'
import { BlackText, GrayText } from 'components'
import React from 'react'
import { StyleSheet } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Shadow } from 'react-native-shadow-2'
import { Button, Image, Section } from 'tags'

const ITEM_IMAGE = require('assets/img/homeSample/newsSample1.jpeg')
const ARROW = require('assets/icons/leftArrow.png')
const CALENDAR = require('assets/icons/calendar.png')

export function BlogItem() {
  return (
    <Button style={styles.container}>
      <Shadow viewStyle={styles.shadowStyle} startColor="rgba(0,0,0,0.05)">
        <Section style={styles.contentWrapper}>
          <Image style={styles.itemImage} source={ITEM_IMAGE} />
          <Section style={styles.leftSection}>
            <BlackText style={commonStyles.mb7} numberOfLines={3}>
              رئیس ب ارز رائه کنند ئیس بانک مرکزی ایران: ارائه کن
            </BlackText>
            <Section style={commonStyles.rowJustifySpaceBetween}>
              <Section style={commonStyles.row}>
                <Image style={styles.calendarIcon} source={CALENDAR} />
                <GrayText size={10}>17 فروردین ماه 1400</GrayText>
              </Section>
              <Image style={styles.arrowIcon} source={ARROW} />
            </Section>
          </Section>
        </Section>
      </Shadow>
    </Button>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: EStyleSheet.value('$d.small'),
    marginRight: EStyleSheet.value('$d.large'),
    marginLeft: EStyleSheet.value('$d.large'),
    borderRadius: 6,
    width: '100%',
    alignContent: 'stretch',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  shadowStyle: {
    width: '100%',
    backgroundColor: EStyleSheet.value('$bg.white'),
    borderRadius: EStyleSheet.value('$d.small'),
    paddingLeft: EStyleSheet.value('$d.small')
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemImage: {
    width: 110,
    height: 90,
    resizeMode: 'contain',
    borderRadius: 6,
    marginTop: EStyleSheet.value('$d.small'),
    marginBottom: EStyleSheet.value('$d.small'),
    marginRight: EStyleSheet.value('$d.large')
  },
  leftSection: {
    padding: EStyleSheet.value('$d.small'),
    flex: 1,
    justifyContent: 'space-between'
  },
  calendarIcon: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    marginRight: EStyleSheet.value('$d.small')
  },
  arrowIcon: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    opacity: 0.4
  }
})
