import React from 'react'
import { Image, Section } from 'tags'
import { BlackText } from './BlackText'
import { commonStyles } from 'commonStyles'
import EStyleSheet from 'react-native-extended-stylesheet'
import { GrayText } from './GrayText'
import { StyleSheet } from 'react-native'

const ARROW_ICON = require('assets/icons/right-arrow.png')
const LOADING_ICON = require('assets/icons/reload.png')

type PaginationType = {
  page: number
  isLoading: boolean
  hasNextPage: boolean
  hasPreviousPage: boolean
  visible?: Boolean
}

export function Pagination({
  visible = false,
  page = 12,
  isLoading = false,
  hasNextPage = true,
  hasPreviousPage
}: PaginationType) {
  const activeBg = EStyleSheet.value('$bg.white')
  const inactiveBg = EStyleSheet.value('$bg.gray')
  const prevButtonBg = hasPreviousPage ? activeBg : inactiveBg
  const nextButtonBg = hasNextPage ? activeBg : inactiveBg

  if (isLoading) {
    return (
      <Section style={styles.container}>
        <Section style={{ ...styles.bigBox, ...{ backgroundColor: inactiveBg } }}>
          <Image style={styles.icon} source={LOADING_ICON} />
          <GrayText size={12}>مشاهده بیشتر</GrayText>
        </Section>
      </Section>
    )
  }

  return (
    <Section style={{ ...styles.container, display: visible ? 'flex' : 'none' }}>
      <Section style={{ ...styles.bigBox, ...{ backgroundColor: prevButtonBg } }}>
        <Image style={styles.icon} source={ARROW_ICON} />
        <BlackText size={12}>صفحه قبلی</BlackText>
      </Section>
      <Section style={styles.middleBox}>
        <BlackText size={12}>{page}</BlackText>
      </Section>
      <Section style={{ ...styles.bigBox, ...{ backgroundColor: nextButtonBg } }}>
        <BlackText size={12}>صفحه بعدی</BlackText>
        <Image style={{ ...styles.icon, ...{ transform: [{ rotate: '-180deg' }] } }} source={ARROW_ICON} />
      </Section>
    </Section>
  )
}

const styles = StyleSheet.create({
  container: {
    ...commonStyles.rowJustifySpaceBetween,
    backgroundColor: EStyleSheet.value('$bg.white'),

    marginTop: EStyleSheet.value('$d.medium'),
    paddingRight: EStyleSheet.value('$d.small'),
    paddingLeft: EStyleSheet.value('$d.small')
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 52,
    borderRadius: 5
  },
  bigBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 52,
    borderRadius: 5,
    flex: 1,
    shadowColor: EStyleSheet.value('$shadow'),
    elevation: 10
  },
  middleBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 52,
    borderRadius: 5,
    minWidth: 70,
    marginLeft: EStyleSheet.value('$d.medium'),
    marginRight: EStyleSheet.value('$d.medium'),
    backgroundColor: EStyleSheet.value('$bg.darkGray')
  },
  icon: {
    width: 28,
    height: 20,
    resizeMode: 'contain',
    opacity: 0.4
  }
})
