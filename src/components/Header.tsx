import { Dimensions, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Image, Section } from 'tags'
import { commonStyles } from 'commonStyles'
import EStyleSheet from 'react-native-extended-stylesheet'
import { BlackText, GrayText } from 'components'
import { navigator } from 'services/navigator'
import { useSupport } from 'hooks/UseSupport'
import { UserDataContext } from 'context'
import { callApi } from 'services'
import { defaultErrorMessage } from 'configs'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

type headerProps = {
  backgroundColor?: string
  titleColor?: string
  title?: string | any
  rightBtnNavigation?: Function
  navigation?: any
  rightIcon?: string
  isLogin?: boolean
  leftIcon?: string
}

const HEADER_LOGO = require('assets/icon/logoText.png')
const BELL = require('assets/icon/005-bell-school.png')
const HEART = require('assets/icon/005-bell-school.png')
const FILTER = require('assets/icon/005-bell-school.png')
const BLOG_MENU = require('assets/icon/005-bell-school.png')
const BACK = require('assets/icon/021-angle-right.png')
const MENU = require('assets/icon/011-menu.png')
const PROFILE = require('assets/icons/user.png')

const appWidth = Dimensions.get('window').width - 250

const Header = ({ backgroundColor, titleColor, title, leftIcon, rightIcon, isLogin }: headerProps) => {
  const { showSupport } = useSupport()
  const { userData, setUserData } = useContext(UserDataContext)
  const [redDot, setRedDot] = useState(false)
  const navigation = useNavigation()

  return (
    <>
      <Section style={{ ...styles.container, backgroundColor: backgroundColor }}>
        <Section style={{ ...commonStyles.row, flex: 1 }}>
          <Button
            onPress={() => {
              rightIcon == 'menu' ? navigator(navigation, 'Stacks') : navigation.canGoBack() && navigation.goBack()
            }}
            style={{ ...styles.squire }}>
            <Image source={rightIcon == 'menu' ? MENU : BACK} style={styles.icons} />
          </Button>
        </Section>
        <Section style={styles.logoTextContainer}>
          {title == 'logo' ? (
            <Image source={HEADER_LOGO} style={styles.logoTextIcons} />
          ) : (
            <BlackText size={18}>{title}</BlackText>
          )}
        </Section>
        <Section style={{ ...commonStyles.row, flex: 1 }}>
          <Button onPress={showSupport} style={styles.squire}>
            <Image
              source={
                leftIcon == 'bell' ? BELL : leftIcon == 'heart' ? HEART : leftIcon == 'filter' ? FILTER : BLOG_MENU
              }
              style={styles.icons}
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
    paddingRight: EStyleSheet.value('$d.large')
  },
  squire: {
    width: 45,
    height: 45,
    borderRadius: 15,
    borderColor: 'rgba(0,0,0,0.03)',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 14,
    width: appWidth - 250,
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
    tintColor: EStyleSheet.value('$text.darkGray')
  },
  logoTextContainer: {
    ...commonStyles.row,
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoTextIcons: {
    width: '50%',
    alignSelf: 'center',
    resizeMode: 'contain'
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
