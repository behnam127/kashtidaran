import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Section } from 'tags'

export default function TextContainer({ children, style }: { children: React.ReactNode; style: object }) {
  return <Section style={Object.assign({}, styles.container, style)}>{children}</Section>
}

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$bg.gray',
    padding: 20,
    borderRadius: 10
  }
})
