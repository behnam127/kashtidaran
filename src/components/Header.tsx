import { Dimensions, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Image, Section } from 'tags'
import { commonStyles } from 'commonStyles'
import EStyleSheet from 'react-native-extended-stylesheet'
import { GrayText } from 'components'
import { navigator } from 'services/navigator'
import { useSupport } from 'hooks/UseSupport'
import { UserDataContext } from 'context'
import { callApi } from 'services'
import { defaultErrorMessage } from 'configs'
import AsyncStorage from '@react-native-async-storage/async-storage'

type headerProps = {
  backgroundColor?: string
  titleColor?: string
  title?: string | any
  rightBtnNavigation?: Function
  navigation?: any
  rightIcon?: string
  isLogin?: boolean
}

const NOTIFICATION = require('assets/icons/notification.png')
const SUPPORT = require('assets/icons/support.png')
const BACK = require('assets/icons/back.png')
const GRID = require('assets/icons/grid.png')
const PROFILE = require('assets/icons/user.png')

const Header = ({ backgroundColor, titleColor, title, navigation, rightIcon, isLogin }: headerProps) => {
  const { showSupport } = useSupport()
  const { userData, setUserData } = useContext(UserDataContext)
  const [redDot, setRedDot] = useState(false)

  useEffect(() => {
    getNotifications()
    console.log('=========isLogin===========================')
    console.log(isLogin)
    console.log('====================================')
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
      <Section style={{ ...styles.container, backgroundColor: backgroundColor }}>
        <Section style={commonStyles.row}>
          <Button
            onPress={() => navigator(navigation, 'MainMenu')}
            style={{ ...styles.circles, marginLeft: 0, marginRight: EStyleSheet.value('$d.small') }}>
            <Image source={rightIcon == 'menu' ? GRID : BACK} style={styles.icons} />
          </Button>
          <GrayText style={{ ...styles.text, color: titleColor }}>{title}</GrayText>
        </Section>
        <Section style={{ ...commonStyles.row }}>
          <Button onPress={showSupport} style={styles.circles}>
            <Image source={SUPPORT} style={styles.icons} />
          </Button>
          <Button
            onPress={() => {
              userData.avatar && isLogin ? navigator(navigation, 'Notifications') : navigator(navigation, 'Login')
            }}
            style={{ ...styles.circles, display: userData.avatar && isLogin ? 'flex' : 'none' }}>
            <Section style={{ ...styles.redDot, display: redDot ? 'flex' : 'none' }} />
            <Image source={NOTIFICATION} style={styles.icons} />
          </Button>
          <Button
            onPress={() => {
              userData.avatar && isLogin ? navigator(navigation, 'ProfileMainPage') : navigator(navigation, 'Login')
            }}
            style={styles.circles}>
            <Image
              source={userData.avatar && isLogin ? { uri: userData.avatar } : PROFILE}
              style={userData.avatar && isLogin ? styles.profileImage : styles.icons}
            />
          </Button>
        </Section>
      </Section>
    </>
  )
}

export { Header }

const styles = StyleSheet.create({
  container: {
    ...commonStyles.row,
    backgroundColor: EStyleSheet.value('$bg.white'),
    height: 100,
    width: '100%',
    justifyContent: 'space-between',
    paddingLeft: EStyleSheet.value('$d.large'),
    paddingRight: EStyleSheet.value('$d.large'),
    marginBottom: EStyleSheet.value('$d.small')
  },
  circles: {
    width: 45,
    height: 45,
    borderRadius: 100,
    backgroundColor: 'rgba(0,0,0,0.03)',
    marginLeft: EStyleSheet.value('$d.small'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 14,
    width: Dimensions.get('window').width - 250,
    textAlign: 'left',
    marginLeft: 10
  },
  roundDivider: {
    width: '100%',
    position: 'absolute',
    top: 80,
    height: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    zIndex: 2
  },
  icons: {
    width: 20,
    height: 20,
    borderRadius: 50,
    tintColor: EStyleSheet.value('$bg.darkBlue')
  },
  menuIcon: {
    width: 30,
    height: 30,
    borderRadius: 50,
    tintColor: EStyleSheet.value('$bg.darkBlue')
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 50
  },
  redDot: {
    width: 13,
    height: 13,
    borderRadius: 10,
    backgroundColor: EStyleSheet.value('$text.red'),
    position: 'absolute',
    top: -1,
    left: -2
  }
})
