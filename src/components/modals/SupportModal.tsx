import { StyleSheet } from 'react-native'
import React from 'react'
import { Modal } from 'react-native-paper'
import { Button, Image, Section } from 'tags'
import { BlackText } from 'components/BlackText'
import { commonStyles } from 'commonStyles'
import EStyleSheet from 'react-native-extended-stylesheet'
import { navigator } from 'services/navigator'
import { useSupport } from 'hooks/UseSupport'
import { useNavigation } from '@react-navigation/native'
import { GrayText } from 'components/GrayText'

const CAMERA = require('assets/icons/camera.png')
const LEFT_ARROW = require('assets/icons/leftArrow.png')
const BACK = require('assets/icons/047-next.png')

type supportType = {
  visible?: Boolean
}

export default function SupportModal({ visible }: supportType) {
  const { hideSupport } = useSupport()
  const navigation = useNavigation()
  return (
    <Modal dismissable={false} style={{ flex: 1 }} visible={visible} transparent animationType="slide">
      <Section style={styles.mainContainer}>
        <Section style={styles.modalChildContainer}>
          <Button
            onPress={() => {
              navigator(navigation, 'TicketList')
              hideSupport()
            }}
            style={{ ...commonStyles.row, ...styles.modalBtn }}>
            <Section style={{ ...commonStyles.row }}>
              <Image style={styles.modalIcons} source={CAMERA} />
              <GrayText>گفتگوی آنلاین</GrayText>
            </Section>
            <Image style={styles.arrowIcon} source={LEFT_ARROW} />
          </Button>

          <Button
            onPress={() => {
              navigator(navigation, 'TicketList')
              hideSupport()
            }}
            style={{ ...commonStyles.row, ...styles.modalBtn }}>
            <Section style={{ ...commonStyles.row }}>
              <Image style={styles.modalIcons} source={CAMERA} />
              <BlackText>تیکت های پشتیبانی</BlackText>
            </Section>
            <Image style={styles.arrowIcon} source={LEFT_ARROW} />
          </Button>

          <Button
            onPress={() => {
              navigator(navigation, 'FAQList')
              hideSupport()
            }}
            style={{ ...commonStyles.row, ...styles.modalBtn }}>
            <Section style={{ ...commonStyles.row }}>
              <Image style={styles.modalIcons} source={CAMERA} />
              <BlackText>پرسش های متداول</BlackText>
            </Section>
            <Image style={styles.arrowIcon} source={LEFT_ARROW} />
          </Button>

          <Button
            onPress={() => {
              navigator(navigation, 'TicketList')
              hideSupport()
            }}
            style={{ ...commonStyles.row, ...styles.modalBtn }}>
            <Section style={{ ...commonStyles.row }}>
              <Image style={styles.modalIcons} source={CAMERA} />
              <GrayText>تماس با ما</GrayText>
            </Section>
            <Image style={styles.arrowIcon} source={LEFT_ARROW} />
          </Button>
        </Section>
        <Section style={styles.modalContainer}>
          <Button onPress={hideSupport} style={{ ...commonStyles.row, ...styles.modalBtn }}>
            <Section style={{ ...commonStyles.row }}>
              <Image style={{ ...styles.modalIcons, tintColor: EStyleSheet.value('$text.red') }} source={BACK} />
              <BlackText>بازگشت</BlackText>
            </Section>
          </Button>
        </Section>
      </Section>
    </Modal>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  modalContainer: {
    backgroundColor: '#fff',
    width: '85%',
    height: 60,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center'
  },
  modalChildContainer: {
    backgroundColor: '#fff',
    width: '85%',
    height: 240,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center'
  },
  modalBtn: {
    height: 60,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 21,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc'
  },
  modalIcons: {
    width: 20,
    height: 20,
    marginRight: 11,
    tintColor: '#ddd'
  },
  arrowIcon: {
    width: 20,
    height: 20,
    marginRight: 11,
    tintColor: '#ccc'
  }
})
