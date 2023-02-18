import React, { useContext, useEffect, useState } from 'react'
import { Dimensions, Modal, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Button, Image, Section } from 'tags'
import { commonStyles } from 'commonStyles'
import { BlackText, GrayText } from 'components'

import NOTIFICATION_ICON from 'assets/icons/notification.png'
import SUPPORT_ICON from 'assets/icons/support.png'
import BACK_ICON from 'assets/icons/back.png'
import GRID_ICON from 'assets/icons/grid.png'
import PROFILE_IMAGE from 'assets/img/profleSample.jpeg'
import { navigator } from 'services/navigator'
import SupportModal from './modals/SupportModal'
import { useSupport } from 'hooks/UseSupport'
import { UserDataContext } from 'context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { callApi } from 'services'

const PROFILE = require('assets/icons/user.png')
const SUCCESS = require('assets/icons/136-check-2.png')
const DANGER = require('assets/icons/139-warn.png')
const CAUTION = require('assets/icons/138-info.png')
const NORMAL = require('assets/icons/140-info-1.png')

type HeaderWithDarkBGType = {
  title?: string
  rightIcon?: string
  rightBtnNavigation?: Function
  navigation?: any
  deviderBg?: 'white' | 'gray'
  status?: 'danger' | 'success' | 'caution' | 'normal'
}

export function HeaderWithDarkBG({
  title,
  rightIcon = 'back' || 'menu',
  deviderBg = 'white',
  status
}: HeaderWithDarkBGType) {
  const navigation = useNavigation()
  const roundDeviderBg = deviderBg == 'gray' ? EStyleSheet.value('$bg.gray') : EStyleSheet.value('$bg.white')
  const { showSupport } = useSupport()
  const { userData } = useContext(UserDataContext)
  const [redDot, setRedDot] = useState(false)

  useEffect(() => {
    getNotifications()
  }, [])

  const getNotifications = async () => {
    try {
      const token = await AsyncStorage.getItem('@token')

      const notificationUrl = `/user/messages?count=25&page=1`
      const notificationRequestConfig = {
        method: 'GET',
        url: notificationUrl,
        timeout: 0,
        headers: {
          Authorization: token,
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      console.log(notificationRequestConfig)

      const notificationResponse = await callApi(notificationRequestConfig)
      const { message, status, data: notificationResponseData } = notificationResponse
      console.log('notificationResponseData')
      console.log(notificationResponseData)
      if (notificationResponseData.unreadCount == 0) {
        setRedDot(false)
      } else {
        setRedDot(true)
        console.log(userData)
      }
    } catch (error) {
      // setErrorText(defaultErrorMessage)
    }
  }

  return (
    <>
      <Section
        style={{
          ...styles.container,
          height: status ? 120 : 90,
          backgroundColor:
            status == 'danger'
              ? EStyleSheet.value('$red')
              : status == 'caution'
              ? EStyleSheet.value('$yellow')
              : status == 'success'
              ? EStyleSheet.value('$green')
              : EStyleSheet.value('$bg.darkBlue')
        }}>
        <Section style={commonStyles.row}>
          <Button
            onPress={() => navigation.canGoBack() && navigation.goBack()}
            style={{ ...styles.circles, marginLeft: 0, marginRight: EStyleSheet.value('$d.small') }}>
            <Image source={rightIcon == 'menu' ? GRID_ICON : BACK_ICON} style={styles.icons} />
          </Button>
          <BlackText style={styles.text} size={14} light={true}>
            {title}
          </BlackText>
        </Section>

        <Section style={commonStyles.row}>
          <Button onPress={showSupport} style={styles.circles}>
            <Image source={SUPPORT_ICON} style={styles.icons} />
          </Button>
          <Button
            onPress={() => {
              userData.userCode === undefined || false
                ? navigator(navigation, 'Login')
                : navigator(navigation, 'Notifications')
            }}
            style={styles.circles}>
            <Section style={{ ...styles.redDot, display: redDot ? 'flex' : 'none' }} />
            <Image source={NOTIFICATION_ICON} style={styles.icons} />
          </Button>
          <Button
            onPress={() => {
              userData.userCode === undefined || false
                ? navigator(navigation, 'Login')
                : navigator(navigation, 'ProfileMainPage')
            }}
            style={styles.circles}>
            <Image
              source={userData.avatar ? { uri: userData.avatar } : PROFILE}
              style={userData.avatar ? styles.profileImage : styles.icons}
            />
          </Button>
        </Section>
      </Section>
      <Section style={{ ...styles.roundDivider, ...{ backgroundColor: roundDeviderBg }, top: status ? 110 : 80 }} />
      {status && (
        <Section style={styles.statusImageContainer}>
          <Image
            source={
              status == 'danger' ? DANGER : status == 'caution' ? CAUTION : status == 'success' ? SUCCESS : NORMAL
            }
            style={styles.statusIcon}
          />
        </Section>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    ...commonStyles.row,
    alignItems: 'flex-start',
    paddingTop: 25,
    justifyContent: 'space-between',
    paddingLeft: EStyleSheet.value('$d.large'),
    paddingRight: EStyleSheet.value('$d.large')
  },
  circles: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: 'rgba(256,256,256,0.2)',
    marginLeft: EStyleSheet.value('$d.small'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: EStyleSheet.value('$text.white'),
    marginLeft: 10
  },
  roundDivider: {
    width: '100%',
    position: 'absolute',
    height: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    zIndex: 2
  },
  icons: {
    width: 20,
    height: 20,
    borderRadius: 50,
    tintColor: EStyleSheet.value('$bg.white')
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 50
  },
  redDot: {
    width: 13,
    height: 13,
    borderRadius: 10,
    backgroundColor: EStyleSheet.value('$bg.red'),
    position: 'absolute',
    top: -1,
    left: -2
  },
  statusImageContainer: {
    width: 85,
    height: 85,
    borderRadius: 70,
    backgroundColor: EStyleSheet.value('$bg.white'),
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    top: 70,
    shadowColor: EStyleSheet.value('$shadow'),
    elevation: 10,
    zIndex: 20
  },
  statusIcon: {
    width: '85%',
    height: '85%'
  }
})
