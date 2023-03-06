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
  backgroundColor?: 'blue' | string
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
const CALL = require('assets/icon/005-bell-school.png')
const HEART = require('assets/icon/005-bell-school.png')
const FILTER = require('assets/icon/005-bell-school.png')
const BLOG_MENU = require('assets/icon/005-bell-school.png')
const BACK = require('assets/icon/021-angle-right.png')
const MENU = require('assets/icon/011-menu.png')
const DATE_ICON = require('assets/icon/004-clock.png')
const LOCATION_ICON = require('assets/icons/location.png')
const PROFILE = require('assets/icons/user.png')

const appWidth = Dimensions.get('window').width - 250

const Header = ({ backgroundColor, titleColor, title, leftIcon, rightIcon, isLogin }: headerProps) => {
  const { showSupport } = useSupport()
  const { userData, setUserData } = useContext(UserDataContext)
  const [redDot, setRedDot] = useState(false)
  const navigation = useNavigation()

  return (
    <>
      <Section
        style={{
          ...styles.mainContainer,
          backgroundColor: backgroundColor == 'blue' ? EStyleSheet.value('$bg.darkBlue') : backgroundColor
        }}>
        <Section
          style={{
            ...styles.container
          }}>
          <Section style={{ ...commonStyles.row, flex: 1 }}>
            <Button
              onPress={() => {
                rightIcon == 'menu' ? navigator(navigation, 'Stacks') : navigation.canGoBack() && navigation.goBack()
              }}
              style={{ ...styles.squire, borderColor: backgroundColor == 'blue' && 'rgba(256,256,256,0.3)' }}>
              <Image
                source={rightIcon == 'menu' ? MENU : BACK}
                style={{ ...styles.icons, tintColor: backgroundColor == 'blue' && EStyleSheet.value('$text.white') }}
              />
            </Button>
          </Section>
          <Section style={styles.logoTextContainer}>
            {title == 'logo' ? (
              <Image source={HEADER_LOGO} style={styles.logoTextIcons} />
            ) : (
              <BlackText size={18} style={{ color: backgroundColor == 'blue' && EStyleSheet.value('$text.white') }}>
                {title}
              </BlackText>
            )}
          </Section>
          <Section style={{ ...commonStyles.row }}>
            <Button
              onPress={showSupport}
              style={{ ...styles.squire, borderColor: backgroundColor == 'blue' && 'rgba(256,256,256,0.3)' }}>
              <Image
                source={
                  leftIcon == 'bell' ? BELL : leftIcon == 'heart' ? HEART : leftIcon == 'filter' ? FILTER : BLOG_MENU
                }
                style={{ ...styles.icons, tintColor: backgroundColor == 'blue' && EStyleSheet.value('$text.white') }}
              />
            </Button>
          </Section>
        </Section>
      </Section>

      {backgroundColor == 'blue' && (
        <>
          <Section style={styles.commersialContainer}>
            <Section style={styles.ComercialRow}>
              <Section>
                <BlackText style={{ color: '#fff' }}>فروش شناور کروبوت</BlackText>
                <Section style={{ ...commonStyles.row }}>
                  <Section style={styles.itemDateContainer}>
                    <Image source={DATE_ICON} style={styles.dateIcon} />
                    <GrayText style={{ color: 'rgba(256,256,256,0.6)' }} size={9}>
                      20 دقیقه پیش
                    </GrayText>
                  </Section>
                  <Section style={{ ...styles.itemDateContainer, marginLeft: 10 }}>
                    <Image source={LOCATION_ICON} style={styles.dateIcon} />
                    <GrayText style={{ color: 'rgba(256,256,256,0.6)' }} size={9}>
                      هرمزگان، بندرعباس
                    </GrayText>
                  </Section>
                </Section>
              </Section>
              <Section style={{ ...styles.commercialIconContainer }}>
                <Image source={CALL} style={{ ...styles.commercialIcon }} />
              </Section>
            </Section>
          </Section>
          <Section style={styles.roundDivider} />
        </>
      )}
    </>
  )
}

export { Header }

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: 100,
    backgroundColor: EStyleSheet.value('$bg.white')
  },
  container: {
    flexDirection: 'row',
    height: 100,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between'
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
    backgroundColor: '#fff',
    top: 150,
    height: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    zIndex: 20
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
  },
  commersialContainer: {
    width: '100%',
    height: 60,
    backgroundColor: EStyleSheet.value('$bg.darkBlue')
  },
  ComercialRow: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  itemDateContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  dateIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
    tintColor: 'rgba(256,256,256,0.6)'
  },
  commercialIcon: {
    width: 20,
    height: 20,
    borderRadius: 50,
    tintColor: EStyleSheet.value('$text.white')
  },
  commercialIconContainer: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: 'rgba(256,256,256,0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
