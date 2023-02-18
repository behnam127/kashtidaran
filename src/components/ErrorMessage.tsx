import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image, Section } from 'tags'
import { BlackText } from './BlackText'
import { commonStyles } from 'commonStyles'
import EStyleSheet from 'react-native-extended-stylesheet'

const ALERT = require('assets/icons/alert.png')
const CAUTION = require('assets/icons/information.png')

type ErrorMessageProps = {
  message?: string
  visible?: boolean
  state?: 'danger' | 'caution'
  style?: any
}

const ErrorMessage = ({ visible = true, message = '', state = 'danger', style }: ErrorMessageProps) => {
  return (
    <Section
      style={{
        ...styles.notificationContainer,
        backgroundColor:
          state == 'danger' ? EStyleSheet.value('$bg.veryLightRed') : EStyleSheet.value('$bg.veryLightYellow'),
        display: visible === true ? 'flex' : 'none',
        ...style
      }}>
      <Section style={{ ...commonStyles.row, ...styles.announcementChild }}>
        <Image
          source={state == 'danger' ? ALERT : CAUTION}
          style={{
            ...styles.infoIcons,
            tintColor: state == 'danger' ? EStyleSheet.value('$bg.red') : EStyleSheet.value('$bg.yellow')
          }}
        />
        <BlackText style={styles.notificationText}>{message}</BlackText>
      </Section>
    </Section>
  )
}

export default ErrorMessage

const styles = StyleSheet.create({
  announcementChild: {
    paddingLeft: 14
  },
  notificationContainer: {
    ...commonStyles.row,
    width: '100%',
    // height: 50,
    padding: 10,

    borderRadius: 5,
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: EStyleSheet.value('$d.medium'),
    marginBottom: EStyleSheet.value('$d.medium')
    // marginRight: EStyleSheet.value('$d.large')
  },
  notificationText: {
    width: '85%',
    fontSize: 11
  },
  infoIcons: {
    width: 15,
    height: 15,
    marginRight: 15,
    tintColor: '#fe5959'
  }
})
