import React, { useRef, useState } from 'react'
import { Keyboard, StyleSheet } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Image, Input, Section } from 'tags'
import { Shadow } from 'react-native-shadow-2'
import { commonStyles } from 'commonStyles'
import { GrayText } from './GrayText'

type SMSCodeInputsTypes = {
  parentSMSCountStateHandler?: Function
  onChangeOtpValue: Function
  errorText?: string
}

const ERROR_ICON = require('assets/icons/information.png')

export function SMSCodeInputs({ parentSMSCountStateHandler, onChangeOtpValue, errorText, otp }: SMSCodeInputsTypes) {
  const [value, setValue] = useState(Array(6))

  const smsCountStateHandler = (smsArray: []) => {
    if (!parentSMSCountStateHandler) return
    let smsValuesArray = []
    for (const code of smsArray) {
      if (Boolean(code)) {
        smsValuesArray.push(code)
      }
    }
    const smsValues = smsValuesArray.join('')
    if (smsValues.length === 6) {
      parentSMSCountStateHandler(true)
    } else {
      parentSMSCountStateHandler(false)
    }
  }

  const onChangeText = function (text, index) {
    let temp = [...value]
    temp[index] = text
    setValue(temp)
    smsCountStateHandler(temp)
    onChangeOtpValue(temp.join(''))
    if (index !== 5 && text.length) {
      refs[index + 1]?.current.focus()
    }

    if (index === 5 && text !== '') {
      Keyboard.dismiss()
    }
  }

  const refs = {
    0: useRef(null),
    1: useRef(null),
    2: useRef(null),
    3: useRef(null),
    4: useRef(null),
    5: useRef(null)
  }

  const onKeyPress = (nativeEvent, index: number) => {
    const { key } = nativeEvent
    if (index === 0) return
    if (key === 'Backspace') {
      if (!value[index]?.length) {
        refs[index - 1]?.current?.focus()
      }
      if (value[index]?.length) {
        onChangeText('', index)
      }
    }
    try {
    } catch (error) {}
  }

  const onSubmitEditing = (index) => {
    if (index === 5) {
      Keyboard.dismiss()
      return
    }
    refs[index + 1].current.focus()
  }

  const inputStyle = errorText?.length > 0 ? styles.errorInput : styles.input
  const shadowColor = errorText?.length > 0 ? 'transparent' : 'rgba(0,0,0,0.05)'

  return (
    <Section>
      <Section style={styles.container}>
        <Shadow startColor={shadowColor}>
          <Input
            onChangeText={(e) => onChangeText(e, 0)}
            style={inputStyle}
            keyboardType="numeric"
            maxLength={1}
            selection={{ start: 0, end: 1 }}
            value={value[0]}
            selectionColor={EStyleSheet.value('$bg.lightBlue')}
            ref={refs[0]}
            returnKeyType="next"
            onSubmitEditing={() => onSubmitEditing(0)}
            onKeyPress={({ nativeEvent }) => onKeyPress(nativeEvent, 0)}
          />
        </Shadow>

        <Shadow startColor={shadowColor}>
          <Input
            onChangeText={(e) => onChangeText(e, 1)}
            style={inputStyle}
            keyboardType="numeric"
            maxLength={1}
            selection={{ start: 0, end: 1 }}
            value={value[1]}
            selectionColor={EStyleSheet.value('$bg.lightBlue')}
            ref={refs[1]}
            returnKeyType="next"
            onSubmitEditing={() => onSubmitEditing(1)}
            onKeyPress={({ nativeEvent }) => onKeyPress(nativeEvent, 1)}
          />
        </Shadow>

        <Shadow startColor={shadowColor}>
          <Input
            onChangeText={(e) => onChangeText(e, 2)}
            style={inputStyle}
            keyboardType="numeric"
            maxLength={1}
            selection={{ start: 0, end: 1 }}
            value={value[2]}
            selectionColor={EStyleSheet.value('$bg.lightBlue')}
            ref={refs[2]}
            returnKeyType="next"
            onSubmitEditing={() => onSubmitEditing(2)}
            onKeyPress={({ nativeEvent }) => onKeyPress(nativeEvent, 2)}
          />
        </Shadow>

        <Shadow startColor={shadowColor}>
          <Input
            onChangeText={(e) => onChangeText(e, 3)}
            style={inputStyle}
            keyboardType="numeric"
            maxLength={1}
            selection={{ start: 0, end: 1 }}
            value={value[3]}
            selectionColor={EStyleSheet.value('$bg.lightBlue')}
            ref={refs[3]}
            returnKeyType="next"
            onSubmitEditing={() => onSubmitEditing(3)}
            onKeyPress={({ nativeEvent }) => onKeyPress(nativeEvent, 3)}
          />
        </Shadow>

        <Shadow startColor={shadowColor}>
          <Input
            onChangeText={(e) => onChangeText(e, 4)}
            style={inputStyle}
            keyboardType="numeric"
            maxLength={1}
            selection={{ start: 0, end: 1 }}
            value={value[4]}
            selectionColor={EStyleSheet.value('$bg.lightBlue')}
            ref={refs[4]}
            returnKeyType="next"
            onSubmitEditing={() => onSubmitEditing(4)}
            onKeyPress={({ nativeEvent }) => onKeyPress(nativeEvent, 4)}
          />
        </Shadow>

        <Shadow startColor={shadowColor}>
          <Input
            onChangeText={(e) => onChangeText(e, 5)}
            style={inputStyle}
            keyboardType="numeric"
            maxLength={1}
            selection={{ start: 0, end: 1 }}
            value={value[5]}
            selectionColor={EStyleSheet.value('$bg.lightBlue')}
            ref={refs[5]}
            onSubmitEditing={() => onSubmitEditing(5)}
            onKeyPress={({ nativeEvent }) => onKeyPress(nativeEvent, 5)}
          />
        </Shadow>
      </Section>

      {(errorText?.length > 0 || otp) && (
        <Section style={styles.errorTextContainer}>
          <Image style={styles.errorIcon} source={ERROR_ICON} />
          <GrayText size={11} style={styles.errorText}>
            {errorText}
          </GrayText>
          <GrayText size={11} style={styles.errorText}>
            {otp}
          </GrayText>
        </Section>
      )}
    </Section>
  )
}

const styles = EStyleSheet.create({
  errorIcon: {
    width: 17,
    height: 17,
    resizeMode: 'contain',
    marginRight: 10
  },
  errorTextContainer: {
    marginTop: '$d.medium',
    marginBottom: '$d.medium',
    ...commonStyles.centerAlignHorizontally
  },
  errorText: {
    textAlign: 'center'
  },
  container: {
    flexDirection: 'row-reverse',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
    // backgroundColor: 'pink'
  },
  input: {
    width: EStyleSheet.value('2.3rem'),
    height: EStyleSheet.value('3rem'),
    textAlign: 'center',
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
    borderRadius: 8,
    color: EStyleSheet.value('$text.black'),
    fontSize: EStyleSheet.value('1.1rem')
  },
  errorInput: {
    width: EStyleSheet.value('2.3rem'),
    height: EStyleSheet.value('3rem'),
    textAlign: 'center',
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
    borderRadius: 8,
    color: EStyleSheet.value('$text.lightRed'),
    fontSize: EStyleSheet.value('1.1rem'),
    backgroundColor: '$bg.veryLightRed'
  }
})
