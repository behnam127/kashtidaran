import React, { useState } from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import { BlackText, AppInput, FullWidthButton } from 'components'
import { Image, ScrollView, Section } from 'tags'
import { commonStyles } from 'commonStyles'
import { useLoading } from 'hooks/useLoading'
import Logo from 'components/logo'
import { Dimensions, KeyboardAvoidingView } from 'react-native'
import { callApi, requestDataStringify } from 'services'
import { navigator } from 'services/navigator'
import { useIsFocused } from '@react-navigation/native'

const MOBILE_ICON = require('assets/icon/028-keypad.png')

const Login = ({ navigation }) => {
  const [mobile, setMobile] = useState('')
  const [errorText, setErrorText] = useState('')
  const { showLoading, hideLoading } = useLoading()

  const onChangeText = (text: string) => {
    setErrorText('')
    setMobile(text)
  }

  const MobileIcon = () => {
    return <Image style={styles.mobileIcon} source={MOBILE_ICON} />
  }

  const loginData = requestDataStringify({ mobile })

  const handleLogin = async () => {
    setErrorText('')
    console.log('====================================')
    console.log(mobile)
    console.log('====================================')
    if (mobile.length != 11) {
      setErrorText('شماره موبایل باید 11 رقم باشد.')
      return
    }

    const loginUrl = '/authenticate'
    const loginConfig = {
      method: 'post',
      url: loginUrl,
      data: loginData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    showLoading()
    const loginResponse = await callApi(loginConfig)
    console.log('=======loginResponse=============================')
    console.log(loginResponse)
    console.log('====================================')
    const { status, data, message } = loginResponse
    hideLoading()

    if (status == 200) {
      navigator(navigation, 'LoginOtp', { mobile })
      return
    } else {
      setErrorText(loginResponse.errors.mobile[0])
    }
  }

  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={-130}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.authLayoutContainer}>
        <Section style={{ ...styles.logoContainer }}>
          <Logo type={'logo'} theme={'light'} />
        </Section>
        <Section style={{ width: '100%', flex: 1, justifyContent: 'flex-end' }}>
          <BlackText style={commonStyles.mb20}>شماره همراه</BlackText>

          <AppInput
            value={mobile}
            maxLength={11}
            keyboardType="numeric"
            LeftElement={MobileIcon}
            onChangeText={onChangeText}
            direction="right"
            hasErrorMessage={errorText == '' ? false : true}
            errorText={errorText}
            style={styles.inputStyle}
          />
        </Section>
        <FullWidthButton
          onPress={() => handleLogin()}
          style={commonStyles.mt20}
          text="دریافت کد تایید"
          shadow={mobile ? true : false}
          state={mobile ? 'activeBlue' : 'disable'}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
export { Login }
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
