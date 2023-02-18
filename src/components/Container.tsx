import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Section } from 'tags'

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    minHeight: '100%',
    backgroundColor: '$bg.white'
  }
})

export function Container({ children }: { children: React.ReactNode }) {
  return <Section style={styles.container}>{children}</Section>
}
