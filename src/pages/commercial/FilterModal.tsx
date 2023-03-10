import { Dimensions, Modal, StyleSheet, Switch } from 'react-native'
import React, { useState } from 'react'
import { Button, Image, ScrollView, Section } from 'tags'
import { AppInput, BlackText, FullWidthButton, GrayText } from 'components'
import EStyleSheet from 'react-native-extended-stylesheet'

const ARROW_DOWN = require('assets/icons/downArrow.png')
const TITLE_DOTS = require('assets/icon/titleDots.png')
const SEARCH = require('assets/icon/008-search.png')

const appHeight = Dimensions.get('window').height

type LogoutProps = {
  visible: boolean
  setShowFilterModal: boolean
}

const FilterModal = ({ visible, setShowFilterModal }: LogoutProps) => {
  const [dropDown, setDropDown] = useState(false)
  const [isEnabled1, setIsEnabled1] = useState(false)
  const [isEnabled2, setIsEnabled2] = useState(false)
  const [isEnabled3, setIsEnabled3] = useState(false)

  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState)
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState)
  const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState)

  const searchIcon = () => {
    return <Image style={styles.icon} source={SEARCH} />
  }

  const drop1 = [
    {
      id: 1,
      title: 'sdgfshs'
    },
    {
      id: 2,
      title: 'sdgfshs'
    },
    {
      id: 3,
      title: 'sdgfshs'
    }
  ]

  return (
    <Modal dismissable={false} transparent={true} animationType={'slide'} visible={visible} style={{ flex: 1 }}>
      <Section style={styles.modalScreen}>
        <Section style={styles.modalContainer}>
          <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%' }}>
            <BlackText size={22} style={styles.topTitle}>
              فیلترها
            </BlackText>
            <Section style={styles.searchContainer}>
              <AppInput
                placeholder="جستجوی شماره آگهی..."
                LeftElement={searchIcon}
                borderColor={EStyleSheet.value('$bg.gray')}
                style={{ backgroundColor: 'rgba(0,0,0,0)' }}
              />
            </Section>
            <Section style={{ ...styles.titleChildContainer }}>
              <Image style={styles.titleDots} source={TITLE_DOTS} />
              <BlackText style={styles.title}>دسته بندی</BlackText>
            </Section>
            <Button
              onPress={() => {
                setDropDown((state) => !state)
              }}
              style={styles.modalBtn}>
              <AppInput
                LeftElement={() => <Image style={styles.inputIcons} source={ARROW_DOWN} />}
                editable={false}
                //   onChangeText={onGenderChange}
                //   value={gender}
                placeholder="انتخاب کنید"
              />
            </Button>
            {dropDown ? (
              <Section style={styles.dropDownContainer}>
                {drop1.map((listItem, index) => {
                  return (
                    <BlackText style={styles.dropDownItems} key={index}>
                      {listItem.title}{' '}
                    </BlackText>
                  )
                })}
              </Section>
            ) : null}
            <Section style={{ ...styles.titleChildContainer }}>
              <Image style={styles.titleDots} source={TITLE_DOTS} />
              <BlackText style={styles.title}>محدوده قیمت</BlackText>
            </Section>
            <Section style={styles.priceContainer}>
              <AppInput
                placeholder="از"
                // value={priceFrom}
                // onChangeText={onPriceFromChange}
                containerStyle={styles.priceFrom}
                borderColor="rgba(0,0,0,0)"
                LeftElement={() => <GrayText>تومان</GrayText>}
              />
              <AppInput
                placeholder="تا"
                // value={priceTo}
                // onChangeText={onPriceToChange}
                borderColor="rgba(0,0,0,0)"
                LeftElement={() => <GrayText>تومان</GrayText>}
              />
            </Section>
            <Section style={{ ...styles.titleChildContainer }}>
              <Image style={styles.titleDots} source={TITLE_DOTS} />
              <BlackText style={styles.title}>سایر موارد</BlackText>
            </Section>
            <Section style={styles.listItems}>
              <Section style={styles.listTitleContainer}>
                <BlackText size={13}>آگهی های دارای تصویر</BlackText>
              </Section>
              <Switch
                trackColor={{ false: EStyleSheet.value('$bg.gray'), true: EStyleSheet.value('$bg.darkBlueAlpha') }}
                thumbColor={EStyleSheet.value('$bg.white')}
                ios_backgroundColor={EStyleSheet.value('$bg.darkBlueAlpha')}
                onValueChange={toggleSwitch1}
                value={isEnabled1}
              />
            </Section>
            <Section style={styles.listItems}>
              <Section style={styles.listTitleContainer}>
                <BlackText size={13}>آگهی های فوری</BlackText>
              </Section>
              <Switch
                trackColor={{ false: EStyleSheet.value('$bg.gray'), true: EStyleSheet.value('$bg.darkBlueAlpha') }}
                thumbColor={EStyleSheet.value('$bg.white')}
                ios_backgroundColor={EStyleSheet.value('$bg.darkBlueAlpha')}
                onValueChange={toggleSwitch2}
                value={isEnabled2}
              />
            </Section>
            <Section style={styles.listItems}>
              <Section style={styles.listTitleContainer}>
                <BlackText size={13}>آگهی های ویژه</BlackText>
              </Section>
              <Switch
                trackColor={{ false: EStyleSheet.value('$bg.gray'), true: EStyleSheet.value('$bg.darkBlueAlpha') }}
                thumbColor={EStyleSheet.value('$bg.white')}
                ios_backgroundColor={EStyleSheet.value('$bg.darkBlueAlpha')}
                onValueChange={toggleSwitch3}
                value={isEnabled3}
              />
            </Section>
            <Section style={styles.fullWidthBtn}>
              <FullWidthButton
                onPress={() => setShowFilterModal && setShowFilterModal(false)}
                text="اعمال فیلترها"
                state="activeBlue"
              />
            </Section>
          </ScrollView>
        </Section>
      </Section>
    </Modal>
  )
}

export default FilterModal

const styles = StyleSheet.create({
  modalScreen: {
    backgroundColor: EStyleSheet.value('$bg.blackHulfOpacity'),
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 15
  },
  modalContainer: {
    backgroundColor: EStyleSheet.value('$bg.white'),
    width: '90%',
    maxHeight: appHeight * 0.85,
    borderRadius: 10,
    marginBottom: 10,
    paddingBottom: 10,
    alignItems: 'center'
  },

  titleChildContainer: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 5
  },
  title: {
    marginLeft: 14
  },
  titleDots: {
    width: 15,
    height: 25,
    bottom: 6,
    tintColor: EStyleSheet.value('$border.dark')
  },
  modalBtn: {
    width: '90%',
    marginTop: 5,
    alignSelf: 'center'
  },
  modalIcons: {
    width: 20,
    height: 20,
    marginRight: 11,
    tintColor: EStyleSheet.value('$bg.darkBlueAlpha')
  },
  arrowIcon: {
    width: 20,
    height: 20,
    marginRight: 11,
    tintColor: EStyleSheet.value('$border.dark')
  },
  fullWidthBtn: {
    width: '90%',
    marginTop: 10,
    alignSelf: 'center'
  },
  inputIcons: {
    width: 15,
    height: 15
  },
  dropDownContainer: {
    width: '85%',
    alignSelf: 'center',
    marginBottom: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: EStyleSheet.value('$bg.white'),
    // borderWidth: 0.5,
    // borderColor: EStyleSheet.value('$border.dark'),
    overflow: 'hidden',
    shadowColor: EStyleSheet.value('$shadow'),
    elevation: 10
  },
  dropDownItems: {
    marginTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 0.5,
    borderColor: EStyleSheet.value('$border.dark')
  },
  topTitle: {
    width: '90%',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  searchContainer: {
    width: '90%',
    height: 55,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: EStyleSheet.value('$bg.gray')
  },
  icon: {
    width: 15,
    height: 15
  },
  priceContainer: {
    width: '90%',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: EStyleSheet.value('$border.dark')
  },
  priceFrom: {
    borderBottomWidth: 0.5,
    borderColor: EStyleSheet.value('$border.dark')
  },
  listItems: {
    flexDirection: 'row',
    width: '90%',
    // height: 40,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginBottom: 2,
    borderRadius: 10,
    marginTop: 5
  },
  listTitleContainer: {
    flexDirection: 'row',
    width: '70%',
    height: '100%'
  }
})
