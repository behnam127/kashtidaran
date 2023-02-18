import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image, Section } from 'tags'
import { BlackText } from 'components'
import { commonStyles } from 'commonStyles'
import EStyleSheet from 'react-native-extended-stylesheet'
import { string } from 'yup'

const NOTICE = require('assets/icons/003-info.png')
const ALERT = require('assets/icons/044-alert.png')

type alertTypes = {
  text: string
  alertType: 'notice' | 'danger'
  backgroundExistance?: boolean
  containerStyle?: any
  imageStyle?: any
  textStyle?: any
  visible?: boolean
}

const AlertBox = ({
  containerStyle,
  imageStyle,
  textStyle,
  text,
  alertType = 'notice',
  backgroundExistance = true
}: alertTypes) => {
  return (
    <Section
      style={{
        ...styles.notificationContainer,
        backgroundColor: backgroundExistance
          ? alertType == 'notice'
            ? EStyleSheet.value('$bg.veryLightYellow')
            : EStyleSheet.value('$bg.veryLightRed')
          : 'rgba(0,0,0,0)',
        ...containerStyle
      }}>
      <Section style={{ ...commonStyles.row, ...styles.announcementChild }}>
        <Image
          source={alertType == 'notice' ? NOTICE : ALERT}
          style={{
            ...styles.infoIcons,
            tintColor: alertType == 'notice' ? EStyleSheet.value('$text.yellow') : EStyleSheet.value('$text.red'),
            ...imageStyle
          }}
        />
        <BlackText style={{ ...styles.notificationText, ...textStyle }}>{text}</BlackText>
      </Section>
    </Section>
  )
}

export default AlertBox

const styles = StyleSheet.create({
  notificationContainer: {
    ...commonStyles.row,
    width: '90%',
    height: 45,

    borderRadius: 5,
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  notificationText: {
    fontSize: 11
  },
  infoIcons: {
    width: 15,
    height: 15,
    marginRight: 15
  },
  announcementChild: {
    paddingLeft: 14
  }
})
