import { StyleSheet } from 'react-native'
import { Button, Image, Section } from 'tags'
import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import { commonStyles } from 'commonStyles'
import { BlackText, GrayText } from 'components'
import { navigator } from 'services/navigator'
import { useNavigation } from '@react-navigation/native'

const SHIP = require('assets/icon/012-cruise.png')
const SHIP2 = require('assets/icon/013-ship.png')
const JOBS = require('assets/icon/014-job.png')
const CHARTER = require('assets/icon/016-earth-globe.png')
const WAVE = require('assets/icon/015-sea.png')
const SAILOR_HAT = require('assets/icon/017-sailor-hat.png')

const AccessBtn = ({}) => {
  const { navigation } = useNavigation()

  return (
    <Section style={styles.container}>
      <Section style={commonStyles.row}>
        <Button onPress={() => navigator(navigation, 'AdvertiseArchive')} style={styles.btn}>
          <Image style={{ ...styles.icon }} source={SHIP} />
          <GrayText style={styles.btnText}>شناور دریایی</GrayText>
        </Button>
        <Button onPress={() => navigator(navigation, 'AdvertiseArchive')} style={styles.btn}>
          <Image style={{ ...styles.icon }} source={SHIP2} />
          <GrayText style={styles.btnText}>تجهیزات دریایی</GrayText>
        </Button>

        <Button onPress={() => navigator(navigation, 'AdvertiseArchive')} style={styles.btn}>
          <Image style={styles.icon} source={JOBS} />
          <GrayText style={styles.btnText}>کاریابی و استخدام دریایی</GrayText>
        </Button>
      </Section>
      <Section style={commonStyles.row}>
        <Button onPress={() => navigator(navigation, 'AdvertiseArchive')} style={styles.btn}>
          <Image style={{ ...styles.icon }} source={CHARTER} />
          <GrayText style={styles.btnText}>اجاره کشتی و چارترینگ دریایی</GrayText>
        </Button>
        <Button onPress={() => navigator(navigation, 'AdvertiseArchive')} style={styles.btn}>
          <Image style={{ ...styles.icon }} source={WAVE} />
          <GrayText style={styles.btnText}>خدمات دریایی</GrayText>
        </Button>

        <Button onPress={() => navigator(navigation, 'AdvertiseArchive')} style={styles.btn}>
          <Image style={styles.icon} source={SAILOR_HAT} />
          <GrayText style={styles.btnText}>همه آگهی ها</GrayText>
        </Button>
      </Section>
    </Section>
  )
}

export default AccessBtn

const styles = StyleSheet.create({
  container: {
    width: '90%',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    backgroundColor: EStyleSheet.value('$bg.white'),
    shadowColor: EStyleSheet.value('$shadow'),
    elevation: 10,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 30
  },
  btn: {
    height: 100,
    flex: 1,
    backgroundColor: EStyleSheet.value('$bg.white'),
    borderColor: EStyleSheet.value('$border.light'),
    borderWidth: 0.3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: EStyleSheet.value('$bg.darkBlue')
  },
  btnText: {
    fontSize: 11,
    marginTop: 10,
    textAlign: 'center'
  }
})
