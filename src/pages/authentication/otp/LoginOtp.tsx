import React, { useContext, useEffect, useState } from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import { BlackText, AppInput, FullWidthButton, GrayText, SMSCodeInputs } from 'components'
import { Button, Image, ScrollView, Section } from 'tags'
import { commonStyles } from 'commonStyles'
import { UserDataContext } from 'context'
import { useLoading } from 'hooks/useLoading'
import Logo from 'components/logo'
import { Dimensions, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { callApi, requestDataStringify } from 'services'
import useCountDown from 'react-countdown-hook'
import { navigator } from 'services/navigator'
import TextInputMask from 'react-native-text-input-mask'
import AlertBox from 'components/AlertBox'

const EDIT_ICON = require('assets/icons/editing.png')
const TIMER_ICON = require('assets/icons/clock.png')
const MOBILE_ICON = require('assets/icons/104-pin-code.png')

const LoginOtp = ({ navigation, route }) => {
  const [code, setCode] = useState('')
  const [otpCode, setOtpCode] = useState('')
  const [errorText, setErrorText] = useState('')
  const { userData, setUserData } = useContext(UserDataContext)
  const { showLoading, hideLoading } = useLoading()
  const { mobile } = route.params

  const [timer, { start }] = useCountDown(120)
  const minutes = Math.floor(timer / 1000 / 60)
  const seconds = Math.floor(timer / 1000 - minutes * 60)
  const time = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

  const [isTimerEnded, setIsTimerEnded] = useState(false)

  useEffect(() => {
    start(120 * 1000)
  }, [])

  useEffect(() => {
    if (timer === 1000) setIsTimerEnded(true)
  }, [timer])

  const onChangeText = (text: string) => {
    setOtpCode(text)
    let OC = text.replace(/ /g, '')
    setCode(OC)
    setErrorText('')
  }

  const handleNextStep = () => {
    setErrorText('')
    if (isTimerEnded) {
      setIsTimerEnded(false)
      resendCode()
      start(120 * 1000)
      return
    } else {
      handleLogin()
      return
    }
  }

  const storeToken = async (data) => {
    console.log('====================================')
    console.log(data.token)
    console.log(userData)
    console.log('====================================')
    const apiToken = data.token
    await AsyncStorage.setItem('@token', apiToken)
  }

  const resendCodeData = requestDataStringify({ mobile })

  const resendCode = async () => {
    setErrorText('')
    const resendCodeUrl = '/resend-code'
    const resendCodeConfig = {
      method: 'post',
      url: resendCodeUrl,
      data: resendCodeData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    showLoading()
    const resendCodeResponse = await callApi(resendCodeConfig)
    console.log('=======resendCodeResponse=============================')
    console.log(resendCodeResponse)
    console.log('====================================')
    const { status, data, message } = resendCodeResponse
    hideLoading()

    if (status == 200) {
      return
    } else {
      setErrorText(resendCodeResponse.errors.mobile[0])
    }
  }

  const loginData = requestDataStringify({ mobile, code })

  const handleLogin = async () => {
    console.log('===code=================================')
    console.log(code.length)
    console.log('====================================')
    setErrorText('')
    if (code.length != 5) {
      setErrorText('کد وارد شده 5 رقمی می باشد.')
      return
    } else {
      setErrorText('')
      const loginUrl = '/verify-code'
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
        setUserData(data.user)
        storeToken(data)
        if (loginResponse.data.user.first_name === null || loginResponse.data.user.last_name === null) {
          navigator(navigation, 'UserInfo')
        } else {
          navigator(navigation, 'Stacks')
        }
        return
      } else {
        setErrorText(loginResponse.errors.code[0])
      }
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.authLayoutContainer}>
      <Section style={{ ...styles.logoContainer }}>
        <Logo type={'logo'} theme={'light'} />
      </Section>
      <Section style={{ width: '100%', flex: 1, justifyContent: 'flex-end' }}>
        <Section style={styles.defaultContainer}>
          <Section style={styles.editContainer}>
            <GrayText style={styles.phoneNumberText}>{mobile}</GrayText>
            <Button onPress={() => navigator(navigation, 'Login')}>
              <Image style={styles.editIcon} source={EDIT_ICON} />
            </Button>
          </Section>
          <Section style={commonStyles.rowJustifySpaceBetween}>
            <GrayText>کد تایید</GrayText>
            {timer > 1000 && (
              <Section style={styles.timerContainer}>
                <GrayText style={{ top: 2 }}>{time}</GrayText>
                <Image style={styles.timerIcon} source={TIMER_ICON} />
              </Section>
            )}
          </Section>

          <Section style={{ marginTop: 10, marginBottom: 10 }}>
            <TextInputMask
              style={styles.maskInput}
              value={otpCode}
              direction="left"
              textAlign="center"
              keyboardType="numeric"
              onChangeText={onChangeText}
              placeholder={'-   -   -   -   -'}
              mask={'[0]   [0]   [0]   [0]   [0]'}
            />
          </Section>
          <AlertBox
            alertType="danger"
            text={errorText}
            visible={errorText ? true : false}
            containerStyle={{ width: '100%' }}
          />
          <FullWidthButton
            style={commonStyles.mt20}
            onPress={() => handleNextStep()}
            state={isTimerEnded ? 'activeYellow' : 'activeBlue'}
            text={isTimerEnded ? 'ارسال مجدد کد' : 'تایید کنید'}
          />
        </Section>
      </Section>
    </ScrollView>
  )
}
export { LoginOtp }
const styles = StyleSheet.create({
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
  },
  title_timeContainer: {
    width: '100%',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center'
  },
  timerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  timerIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginLeft: 4,
    tintColor: EStyleSheet.value('$text.gray')
  },
  titleContainer: {
    flex: 0.5,
    alignItems: 'flex-start'
  },
  editContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 41,
    backgroundColor: EStyleSheet.value('$bg.gray'),
    borderRadius: 7,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: EStyleSheet.value('$d.large'),
    marginBottom: EStyleSheet.value('$d.large')
  },
  phoneNumberText: {
    letterSpacing: 1.2
  },
  editIconContainer: {
    flex: 0.5,
    alignSelf: 'flex-start'
  },
  editIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    tintColor: EStyleSheet.value('$text.gray')
  },
  btnContainer: {
    width: '100%'
  },
  inputContainer: {
    marginVertical: 5
  },
  inputIcon: {
    width: 20,
    height: 20
  },
  show_hideBtn: {
    width: 20,
    height: 20
  },
  successIcon: {
    width: 100,
    height: 100,
    alignSelf: 'center'
  },
  successText: {
    textAlign: 'center',
    margin: 15
  },
  passError: {
    fontFamily: 'YekanBakhRegular',
    fontSize: 14,
    marginVertical: 10,
    alignSelf: 'center',
    color: EStyleSheet.value('$text.black')
  },
  maskInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: EStyleSheet.value('$border.dark'),
    borderRadius: 10,
    color: '#000',
    fontSize: 20,
    textAlignVertical: 'center',
    zIndex: 20
  }
})
