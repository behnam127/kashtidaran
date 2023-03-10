import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Image, Section } from 'tags'
import { AppInput, BlackText, FullWidthButton } from 'components'
import { commonStyles } from 'commonStyles'
import { SafeAreaView } from 'react-native-safe-area-context'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Header } from 'components/Header'

const TITLE_DOTS = require('assets/icons/titleDots.png')
const DOWNARROW = require('assets/icons/downArrow.png')
const INFO_ICON = require('assets/icons/information.png')

const FAQSingle = () => {
  const [modalDisplay, setModalDisplay] = useState('none')

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header title="پرسش های متداول" />
      <Section style={styles.container}>
        <Section style={{ ...styles.titleContainer }}>
          <Image style={styles.titleDots} source={TITLE_DOTS} />
          <BlackText style={styles.title}>ثبت سوال جدید</BlackText>
        </Section>
        <Button style={styles.modalInputBtn} onPress={() => setModalDisplay('flex')}>
          <AppInput
            editable={false}
            LeftElement={() => <Image style={styles.icon} source={DOWNARROW} />}
            title={'دسته بندی'}
            placeholder={'انتخاب کنید'}
          />
        </Button>
        <AppInput title={'متن سوال'} multiline={true} style={styles.question} />
      </Section>

      {/* ..........................................choosing image source modal........................................ */}

      <Button
        onPress={() => {
          setModalDisplay('none')
        }}
        style={{ ...styles.modalContainer, display: modalDisplay }}>
        <Section style={styles.modal}></Section>
      </Button>

      <Section style={styles.notificationContainer}>
        <Section style={{ ...commonStyles.row, ...styles.announcementChild }}>
          <Image source={INFO_ICON} style={styles.infoIcons} />
          <BlackText style={styles.notificationText}>متن سوال خود را وارد نمایید</BlackText>
        </Section>
      </Section>
      <Section style={styles.fullwidthBtnContainer}>
        <FullWidthButton text="ثبت و ارسال می کنم" state="activeGray"></FullWidthButton>
      </Section>
    </SafeAreaView>
  )
}

export { FAQSingle }

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: EStyleSheet.value('$bg.white')
  },
  container: {
    width: '90%',
    alignSelf: 'center'
  },

  titleContainer: {
    ...commonStyles.row,
    alignItems: 'center'
  },
  title: {
    marginLeft: 14,
    marginBottom: 14
  },
  titleDots: {
    width: 15,
    height: 25,
    bottom: 6
  },
  icon: {
    width: 15,
    height: 15
  },
  modalContainer: {
    backgroundColor: EStyleSheet.value('$bg.blackHulfOpacity'),
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 15
  },
  modal: {
    backgroundColor: EStyleSheet.value('$bg.white'),
    width: '85%',
    height: '60%',
    borderRadius: 10
  },
  modalBtn: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 21
  },
  modalIcons: {
    width: 20,
    height: 20,
    marginRight: 11
  },
  announcementChild: {
    paddingLeft: 14
  },
  notificationContainer: {
    ...commonStyles.row,
    width: '90%',
    height: 50,
    backgroundColor: EStyleSheet.value('$bg.veryLightRed'),
    borderRadius: 5,
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: EStyleSheet.value('$d.medium'),
    marginBottom: EStyleSheet.value('$d.medium')
    // marginRight: EStyleSheet.value('$d.large')
  },
  notificationText: {
    fontSize: 11
  },
  infoIcons: {
    width: 25,
    height: 25,
    marginRight: 15,
    tintColor: EStyleSheet.value('$text.red')
  },
  modalInputBtn: {
    zIndex: 2
  },
  question: {
    minHeight: 150,
    textAlignVertical: 'top'
  },
  fullwidthBtnContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 14
  }
})
