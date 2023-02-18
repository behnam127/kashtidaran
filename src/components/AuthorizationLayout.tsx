import React from 'react'
import Logo from 'components/logo'
import { ThemeContext } from '../../App'
import EStyleSheet from 'react-native-extended-stylesheet'
import { ScrollView, Section } from 'tags'
import { KeyboardAvoidingView, StyleSheet } from 'react-native'

type props = {
  style?: any
  children?: any
}

export function AuthorizationLayout({ style, children }: props) {
  const { theme = 'dark' } = React.useContext(ThemeContext)
  return (
    <ScrollView contentContainerStyle={styles.authLayoutContainer}>
      <Section style={{ ...styles.logoContainer }}>
        <Logo type={'logotype'} theme={'light'} />
      </Section>
      <Section style={{ width: '100%', flex: 1, justifyContent: 'flex-end' }}>{children}</Section>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  authLayoutContainer: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    minHeight: '100%',
    backgroundColor: EStyleSheet.value('$bg.white'),
    paddingLeft: EStyleSheet.value('$d.large'),
    paddingRight: EStyleSheet.value('$d.large'),
    paddingBottom: EStyleSheet.value('$d.large')
  },
  logoContainer: {
    height: 150,
    marginTop: EStyleSheet.value('$d.large') * 2,
    marginBottom: EStyleSheet.value('$d.large') * 4,
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    top: 20
  }
})
