import React, { useContext, useState } from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import { BlackText, AppInput, FullWidthButton, GrayText } from 'components'
import { Button, Image, ScrollView, Section } from 'tags'
import { commonStyles } from 'commonStyles'
import { UserDataContext } from 'context'
import { useLoading } from 'hooks/useLoading'
import Logo from 'components/logo'
import { Dimensions } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { callApi, requestDataStringify } from 'services'
import { serverResponseMessageHandler } from 'services/serverResponseMessageHandler'
import { navigator } from 'services/navigator'
import { defaultErrorMessage } from 'configs'
import { useIsFocused } from '@react-navigation/native'

const BACK_BUTTON = require('assets/icons/021-forward.png')
const PEOPLE = require('assets/icons/091-user-2.png')

const UserInfo = ({ navigation }) => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [errorText, setErrorText] = useState('')
  const { userData, setUserData } = useContext(UserDataContext)
  const { showLoading, hideLoading } = useLoading()
  const isFocused = useIsFocused()

  const onChangeName = (Ntext: string) => {
    setName(Ntext)
    setErrorText('')
  }
  const onChangeLastName = (Ltext: string) => {
    setLastName(Ltext)
    setErrorText('')
  }

  const MobileIcon = () => {
    return <Image style={styles.mobileIcon} source={PEOPLE} />
  }

  const hanndleNextStep = async () => {
    setErrorText('')

    navigator(navigation, 'Stacks')
    //   const loginUrl = '/authenticate'
    //   const loginConfig = {
    //     method: 'post',
    //     url: loginUrl,
    //     data: loginData,
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/x-www-form-urlencoded'
    //     }
    //   }
    //   showLoading()
    //   const loginResponse = await callApi(loginConfig)
    //   console.log('=======loginResponse=============================')
    //   console.log(loginResponse)
    //   console.log('====================================')
    //   const { status, data, message } = loginResponse
    //   hideLoading()

    //   if (status == 200) {
    //     navigator(navigation, 'LoginOtp', { mobile: name })
    //     return
    //   } else {
    //     setErrorText(loginResponse.errors.mobile[0])
    //   }
  }

  return (
    <ScrollView contentContainerStyle={styles.authLayoutContainer}>
      <Section style={{ ...styles.logoContainer }}>
        <Logo type={'logo'} theme={'light'} />
      </Section>
      <Section style={{ width: '100%', flex: 1, justifyContent: 'flex-end' }}>
        <GrayText style={{ ...commonStyles.mb7, ...commonStyles.mt20 }}>نام</GrayText>

        <AppInput
          value={name}
          keyboardType="numeric"
          LeftElement={MobileIcon}
          onChangeText={onChangeName}
          direction="right"
          hasErrorMessage={errorText == '' ? false : true}
          errorText={errorText}
          style={styles.inputStyle}
        />
        <GrayText style={{ ...commonStyles.mb7, ...commonStyles.mt20 }}>نام خانوادگی</GrayText>

        <AppInput
          value={lastName}
          keyboardType="numeric"
          LeftElement={MobileIcon}
          onChangeText={onChangeLastName}
          direction="right"
          hasErrorMessage={errorText == '' ? false : true}
          errorText={errorText}
          style={styles.inputStyle}
        />
      </Section>
      <FullWidthButton
        onPress={() => hanndleNextStep()}
        style={commonStyles.mt20}
        text="ثبت نهایی اطلاعات"
        shadow={name && lastName ? true : false}
        state={name && lastName ? 'activeBlue' : 'disable'}
      />
    </ScrollView>
  )
}
export { UserInfo }
const styles = EStyleSheet.create({
  authLayoutContainer: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    minHeight: Dimensions.get('window').height,
    backgroundColor: EStyleSheet.value('$bg.white'),
    paddingLeft: EStyleSheet.value('$d.large'),
    paddingRight: EStyleSheet.value('$d.large'),
    paddingBottom: 100
  },
  logoContainer: {
    height: 150,
    marginTop: EStyleSheet.value('$d.large') * 2,
    marginBottom: EStyleSheet.value('$d.large') * 4,
    width: '100%',
    alignItems: 'center',
    position: 'absolute'
    // top: 20
  },
  fingerprintContainer: {
    ...commonStyles.centerAlignHorizontally,
    marginTop: EStyleSheet.value('$d.large') * 2,
    marginBottom: EStyleSheet.value('$d.large') * 3
  },
  fingerprintIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
    tintColor: EStyleSheet.value('$bg.lightRed')
  },
  inputStyle: {
    right: -14,
    top: 3
  },
  mobileIcon: {
    width: 15,
    height: 15
  },
  backBtn: {
    width: 30,
    height: 30,
    top: 30,
    left: 20,
    position: 'absolute',
    zIndex: 10
  },
  backBtnIcon: {
    width: 30,
    height: 20
  }
})
