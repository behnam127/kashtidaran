import React from 'react'
import { TextInput, TextInputProps } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

const BOLD = 'YekanBakhBold'
const REGULAR = 'YekanBakhRegular'

const Input = React.forwardRef(function (props, ref) {
  const {
    value = '',
    onChangeText = () => ({}),
    placeholder,
    placeholderTextColor,
    secureTextEntry,
    style,
    underlineColorAndroid,
    multiline,
    maxLength,
    keyboardType,
    selection,
    selectionColor,
    onKeyPress,
    onFocus = () => ({}),
    returnKeyType,
    onSubmitEditing,
    disabled,
    editable
  }: TextInputProps = props

  return (
    <TextInput
      value={value}
      onChangeText={(value) => {
        onChangeText(value)
      }}
      onFocus={() => {
        onFocus()
      }}
      disabled={disabled}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      style={Object.assign({}, styles.input, style)}
      secureTextEntry={secureTextEntry}
      underlineColorAndroid={underlineColorAndroid}
      multiline={multiline}
      maxLength={maxLength}
      keyboardType={keyboardType}
      selection={selection}
      selectionColor={selectionColor}
      ref={ref}
      onKeyPress={onKeyPress}
      returnKeyType={returnKeyType}
      onSubmitEditing={onSubmitEditing}
      editable={editable}
    />
  )
})

Input.displayName = 'input'

const styles = EStyleSheet.create({
  input: {
    fontFamily: BOLD,
    color: '$text.black'
  }
})

export { Input }
