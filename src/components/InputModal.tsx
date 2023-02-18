import { Dimensions, FlatList, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button, Section } from 'tags'
import { BlackText } from './BlackText'

type inputModalTypes = {
  data?: any
  onPress?: () => void
  visible?: string
  setId?: number | string
  setCityId?: number | string
  setCity?: string
  setState?: string
  setModalVisibility?: string
  setGenderModalVisibility?: string
  setNationalityModalVisibility?: string
  setStatesModalVisibility?: string
  setCitiesModalVisibility?: string
  setGender?: string
  setGenderCode?: string
  setNationality?: string
  setNationalityCode?: string
}

const InputModal = ({
  data,
  onPress,
  visible = 'none',
  setId,
  setCityId,
  setState,
  setCity,
  setModalVisibility,
  setGenderModalVisibility,
  setNationalityModalVisibility,
  setStatesModalVisibility,
  setCitiesModalVisibility,
  setGender,
  setGenderCode,
  setNationality,
  setNationalityCode
}: inputModalTypes) => {
  const renderList = ({ item }) => {
    return (
      <Button
        key={item.id}
        onPress={() => {
          onPress
          setId && setId(item.id)
          setCityId && setCityId(item.id)
          setState && setState(item.title)
          setCity && setCity(item.title)
          setGender && setGender(item.gender)
          setGenderCode && setGenderCode(item.genderCode)
          setNationality && setNationality(item.nationality)
          setNationalityCode && setNationalityCode(item.nationalityCode)
          setModalVisibility && setModalVisibility('none')
          setNationalityModalVisibility && setNationalityModalVisibility('none')
          setGenderModalVisibility && setGenderModalVisibility('none')
          setStatesModalVisibility && setStatesModalVisibility('none')
          setCitiesModalVisibility && setCitiesModalVisibility('none')
        }}
        style={styles.listItems}>
        <BlackText style={styles.listItemsText}>
          {item.title || item.state || item.city || item.gender || item.nationality}
        </BlackText>
      </Button>
    )
  }

  return (
    <Button
      onPress={() => {
        setNationalityModalVisibility && setNationalityModalVisibility('none')
        setGenderModalVisibility && setGenderModalVisibility('none')
        setStatesModalVisibility && setStatesModalVisibility('none')
        setCitiesModalVisibility && setCitiesModalVisibility('none')
      }}
      style={{ ...styles.modalScreen, display: visible }}>
      <Section style={styles.modalContainer}>
        <FlatList
          overScrollMode={'always'}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderList}
          keyExtractor={(item) => item.id}
        />
      </Section>
    </Button>
  )
}

export default InputModal

const styles = StyleSheet.create({
  modalScreen: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 15
  },
  modalContainer: {
    backgroundColor: '#fff',
    width: '60%',
    maxHeight: '60%',
    borderRadius: 10
  },
  modalBtn: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 21
  },

  listItems: {
    width: '100%',
    height: 50,
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  listItemsText: {
    marginLeft: 10
  }
})
