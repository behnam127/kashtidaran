import { commonStyles } from 'commonStyles'
import React from 'react'
import { TextInputProps, ViewStyle } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Image, Input, Section, Text } from 'tags'
import { GrayText } from './GrayText'

const ERROR_ICON = require('assets/icons/information.png')

type AppInputType = TextInputProps & {
  RightElement?: () => JSX.Element
  LeftElement?: () => JSX.Element
  errorText?: string
  direction?: 'right' | 'left'
  containerStyle?: ViewStyle
  value?: string | number
  onInput?: Function
  title?: string
  multiline?: boolean
  style?: ViewStyle
  disabled?: boolean
  onFocus?: Function
  editable?: boolean
  onKeyPress?: any
  hasErrorMessage?: boolean
  maxLength?: number
  textAlign?: string
  borderColor?: string
  titleBackground?: string
}

export function AppInput({
  RightElement,
  LeftElement,
  keyboardType,
  secureTextEntry,
  errorText = '',
  placeholder,
  direction,
  containerStyle,
  value = '',
  title = '',
  style,
  maxLength,
  textAlign,
  multiline = false,
  disabled = false,
  editable = true,
  hasErrorMessage = false,
  onFocus = () => ({}),
  onChangeText,
  borderColor,
  titleBackground = EStyleSheet.value('$bg.white')
}: AppInputType) {
  const hasError = errorText.length > 0 || hasErrorMessage
  const inputStyle = hasError ? styles.inputError : styles.input
  const inputContainerStyle = hasError ? styles.containerError : styles.container
  const hasTitle = title?.length > 0
  const titleTextColor = hasErrorMessage ? EStyleSheet.value('$text.lightRed') : EStyleSheet.value('$text.gray')

  const componentBorderColor = hasError
    ? EStyleSheet.value('$border.lightRed')
    : Boolean(borderColor)
    ? borderColor
    : EStyleSheet.value('$border.light')

  const InputTitle = () => {
    if (hasTitle) {
      return (
        <Text style={{ ...styles.title, color: titleTextColor, backgroundColor: titleBackground }}>
          {hasErrorMessage ? '*  ' : ''}
          {title}
        </Text>
      )
    }
    return null
  }

  return (
    <Section style={{ marginTop: title ? 15 : 0, ...containerStyle }}>
      <InputTitle />
      <Section style={{ ...inputContainerStyle, ...{ borderColor: componentBorderColor } }}>
        {Boolean(RightElement) && (
          <Section style={styles.iconContainer}>
            <RightElement />
          </Section>
        )}

        <Input
          keyboardType={keyboardType}
          multiline={multiline}
          numberOfLines={5}
          textAlignVertical={'top'}
          textAlign={textAlign}
          secureTextEntry={secureTextEntry}
          style={{ ...inputStyle, ...{ textAlign: direction }, ...style }}
          placeholderTextColor="#ccc"
          placeholder={placeholder}
          value={value}
          onChangeText={(text: string) => onChangeText(text)}
          disabled={disabled}
          hasErrorMessage={hasErrorMessage}
          editable={editable}
          maxLength={maxLength}
          onFocus={() => {
            onFocus()
          }}
        />

        {Boolean(LeftElement) && (
          <Section style={styles.iconContainer}>
            <LeftElement />
          </Section>
        )}
      </Section>
      {errorText?.length > 0 && (
        <Section style={styles.errorTextContainer}>
          <Image style={styles.errorIcon} source={ERROR_ICON} />
          <GrayText size={11} style={styles.errorText}>
            {errorText}
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
  container: {
    width: '100%',
    borderWidth: 2,
    borderRadius: 10,
    minHeight: '3rem',
    // minHeight: 40,
    flexDirection: 'row',
    overflow: 'hidden',
    paddingTop: 0
  },
  containerError: {
    width: '100%',
    borderWidth: 2,
    borderRadius: 10,
    minHeight: 40,
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: '$bg.white'
  },
  input: {
    flex: 1,
    letterSpacing: 2.5,
    marginLeft: 5,
    fontSize: '0.75rem',
    color: '$text.black',
    paddingRight: 10,
    backgroundColor: '$bg.white'
  },
  inputError: {
    flex: 1,
    letterSpacing: 2.5,
    marginLeft: 5,
    fontSize: '0.75rem',
    color: '$text.lightRed',
    paddingRight: 10
  },
  iconContainer: {
    width: '2.2rem',
    maxHeight: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5
  },
  errorTextContainer: {
    marginTop: '$d.medium',
    marginBottom: '$d.medium',
    ...commonStyles.centerAlignHorizontally
  },
  errorText: {
    textAlign: 'center'
  },
  title: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 14,
    paddingRight: 14,
    position: 'absolute',
    top: -10,
    left: 21,
    borderRadius: 3,
    zIndex: 2,
    fontSize: 12
  }
})
