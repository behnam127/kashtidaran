import { Modal, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Image, Section } from 'tags'
import EStyleSheet from 'react-native-extended-stylesheet'
import { BlackText } from './BlackText'
import { commonStyles } from 'commonStyles'
import { useErrorModal } from 'hooks/useErrorModal'

const SERVER_ICON = require('assets/icons/server.png')
const BACK_ICON = require('assets/icons/back.png')
const REFRESH_ICON = require('assets/icons/refresh.png')

type ErrorModalType = {
  visible: boolean
  message?: string
  errorModalAction: () => any
}

export function ErrorModal({ visible, message = '', errorModalAction }: ErrorModalType) {
  const { hideErrorModal } = useErrorModal()
  const modalMessage = message || 'ارتباط با سرور قطع شده , دقایقی دیگر مراجعه کنید'
  const buttonTextSize = EStyleSheet.value('0.62rem')
  return (
    <Modal dismissable={false} style={{ flex: 1 }} visible={visible} transparent animationType="slide">
      <Section style={styles.contentContainer}>
        <Section style={styles.bigBox}>
          <Image style={styles.bigIcon} source={SERVER_ICON} />
          <BlackText bold={false}>کاربر گرامی سرمایکس</BlackText>
          <BlackText style={commonStyles.mt7} bold={false}>
            {modalMessage}
          </BlackText>
        </Section>
        <Section style={styles.buttonContainer}>
          <Button onPress={hideErrorModal} style={{ ...styles.box, ...commonStyles.row, ...commonStyles.mr7 }}>
            <Image style={styles.smallIcon} source={BACK_ICON} />
            <BlackText size={buttonTextSize} bold>
              بازگشت
            </BlackText>
          </Button>
          <Button onPress={errorModalAction} style={{ ...styles.box, ...commonStyles.row }}>
            <Image style={styles.smallIcon} source={REFRESH_ICON} />
            <BlackText size={buttonTextSize} bold>
              تلاش مجدد
            </BlackText>
          </Button>
        </Section>
      </Section>
    </Modal>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
    padding: EStyleSheet.value('$d.large')
  },
  bigBox: {
    backgroundColor: EStyleSheet.value('$bg.white'),
    padding: EStyleSheet.value('$d.large'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    elevation: 1,
    minHeight: 200
  },
  box: {
    backgroundColor: EStyleSheet.value('$bg.white'),
    padding: EStyleSheet.value('$d.large'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    elevation: 1,
    flex: 1,
    maxHeight: 200
  },
  bigIcon: {
    width: 56,
    height: 56,
    resizeMode: 'contain',
    opacity: 0.15,
    marginBottom: EStyleSheet.value('$d.large')
  },
  buttonContainer: {
    alignItems: 'stretch',
    flexDirection: 'row',
    width: '100%',
    marginTop: EStyleSheet.value('$d.small')
  },
  smallIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: EStyleSheet.value('$d.small')
  }
})
