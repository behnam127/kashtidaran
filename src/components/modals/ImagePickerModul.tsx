import { Dimensions, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button, Image, Section } from 'tags'
import EStyleSheet from 'react-native-extended-stylesheet'
import { BlackText, GrayText } from 'components'
import { commonStyles } from 'commonStyles'
import ImagePicker from 'react-native-image-crop-picker'

const appHeight = Dimensions.get('window').height
const appWidth = Dimensions.get('window').width

const DEFAULT_HEIGHT = appHeight / 2
const DEFAULT_WITH = appWidth
const defaultPickerOptions = {
  cropping: true,
  height: DEFAULT_HEIGHT,
  width: DEFAULT_WITH
}

type PickerTypes = {
  icon?: 'upload' | 'selfie' | 'plus' | 'documents'
  setAttachment?: string | any
  title?: string
}

const CAMERA = require('assets/icons/camera.png')
const GALLERY = require('assets/icons/picture.png')
const LEFT_ARROW = require('assets/icons/leftArrow.png')
const INFO_ICON = require('assets/icons/information.png')
const UPLOAD = require('assets/icons/037-upload-1.png')
const SELFIE = require('assets/icons/selfie.png')
const PLUS = require('assets/icons/plus2.png')
const BACK = require('assets/icons/047-next.png')
const DOCS = require('assets/icons/059-newspaper.png')

const ImagePickerModul = ({ icon, setAttachment, title }: PickerTypes) => {
  const [imgSrc, setImgSrc] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const recognizeFromPicker = async (options = defaultPickerOptions) => {
    try {
      const image = await ImagePicker.openPicker(options)
      setImgSrc({ uri: image.path })
      setAttachment && setAttachment(image.path)
      setShowModal(false)
    } catch (err) {}
  }

  const recognizeFromCamera = async (options = defaultPickerOptions) => {
    try {
      const image = await ImagePicker.openCamera(options)
      setImgSrc({ uri: image.path })
      setAttachment && setAttachment(image.path)
      setShowModal(false)
    } catch (err) {
      if (err.message !== 'User cancelled image selection') {
        console.error(err)
      }
    }
  }

  const plusStyle = {
    width: 30,
    height: 30,
    alignSelf: 'center',
    borderRadius: 10,
    top: appHeight / 25,
    marginBottom: EStyleSheet.value('$d.large'),
    marginTop: EStyleSheet.value('$d.large')
  }

  return (
    <Section style={styles.mainContainer}>
      <Section style={styles.container}>
        <Section
          style={{ ...styles.imagePickerContainer, maxHeight: icon == 'plus' ? appHeight / 5 : appHeight / 3.1 }}>
          {imgSrc ? (
            <Section style={{ ...styles.container2 }}>
              <Button onPress={() => setShowModal(true)}>
                <Section style={styles.imageContainer}>
                  <Image style={styles.image} source={imgSrc} />
                </Section>
              </Button>
            </Section>
          ) : (
            <Button
              onPress={() => {
                setShowModal(true)
              }}
              style={styles.selfieBtn}>
              <Image
                style={icon == 'plus' ? plusStyle : styles.selfieImg}
                source={icon == 'upload' ? UPLOAD : icon == 'selfie' ? SELFIE : icon == 'documents' ? DOCS : PLUS}
              />
              <GrayText style={{ ...styles.title }}>{title}</GrayText>

              {icon == 'plus' ? null : (
                <Section style={styles.uploadInfoContainer}>
                  <Image source={INFO_ICON} style={styles.infoIcons} />
                  <BlackText style={styles.uploadInfoText}>فرمت مجاز: png , jpg / حجم: حداکثر 4 مگابایت</BlackText>
                </Section>
              )}
            </Button>
          )}
        </Section>
      </Section>

      {/* ..................................................................choosing image source modal.................................................................. */}
      <Modal dismissable={false} animationType="slide" transparent={true} visible={showModal} style={{ flex: 1 }}>
        <Section style={styles.modalScreen}>
          <Section style={styles.modalContainer}>
            <Button
              onPress={() => {
                setShowModal(false)
                recognizeFromCamera()
              }}
              style={{ ...commonStyles.row, ...styles.modalBtn }}>
              <Section style={{ ...commonStyles.row }}>
                <Image style={styles.modalIcons} source={CAMERA} />
                <BlackText>گرفتن عکس</BlackText>
              </Section>
              <Image style={styles.modalIcons} source={LEFT_ARROW} />
            </Button>
            <Section style={styles.divider} />
            <Button
              onPress={() => {
                setShowModal(false)
                recognizeFromPicker()
              }}
              style={{ ...commonStyles.row, ...styles.modalBtn }}>
              <Section style={{ ...commonStyles.row }}>
                <Image style={styles.modalIcons} source={GALLERY} />
                <BlackText>انتخاب از گالری تصاویر</BlackText>
              </Section>
              <Image style={styles.modalIcons} source={LEFT_ARROW} />
            </Button>
          </Section>
          <Section style={styles.modalContainer}>
            <Button onPress={() => setShowModal(false)} style={{ ...commonStyles.row, ...styles.modalBtn }}>
              <Section style={{ ...commonStyles.row }}>
                <Image style={{ ...styles.modalIcons, tintColor: EStyleSheet.value('$text.red') }} source={BACK} />
                <BlackText>بازگشت</BlackText>
              </Section>
            </Button>
          </Section>
        </Section>
      </Modal>
    </Section>
  )
}

export { ImagePickerModul }

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: EStyleSheet.value('$bg.white')
  },
  container: {
    width: '100%',
    paddingTop: 0
  },

  title: {
    textAlign: 'center',
    textAlignVertical: 'bottom',
    marginLeft: 14,
    marginBottom: 14
  },
  titleDots: {
    width: 15,
    height: 25
  },
  info: {
    width: 15,
    height: 15,
    tintColor: EStyleSheet.value('$text.gray')
  },
  infoIcons: {
    width: 15,
    height: 15,
    marginRight: 15,
    tintColor: 'orange'
  },
  infoText: {
    fontSize: 11
  },
  imagePickerContainer: {
    borderWidth: 2,
    borderRadius: 10,

    borderStyle: 'dashed',
    marginTop: EStyleSheet.value('$d.large'),
    borderColor: EStyleSheet.value('$border.light')
  },
  container2: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: EStyleSheet.value('$bg.white')
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: appHeight * 0.3,
    width: appWidth * 0.85,
    borderColor: EStyleSheet.value('$bg.darkGray'),
    borderWidth: 1,
    backgroundColor: EStyleSheet.value('$bg.gray'),
    borderRadius: 20
  },
  selfieBtn: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    padding: 10
  },
  selfieImg: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    tintColor: EStyleSheet.value('$text.gray'),
    marginBottom: EStyleSheet.value('$d.large'),
    marginTop: EStyleSheet.value('$d.large')
  },
  uploadInfoContainer: {
    ...commonStyles.row,
    width: '100%',
    height: 50,
    backgroundColor: EStyleSheet.value('$bg.veryLightYellow'),
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  uploadInfoText: {
    fontSize: 11
  },
  modalScreen: {
    backgroundColor: EStyleSheet.value('$bg.blackHulfOpacity'),
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    zIndex: 15
  },
  modalContainer: {
    backgroundColor: EStyleSheet.value('$bg.white'),
    width: '85%',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 10
  },
  modalBtn: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 21
  },
  modalIcons: {
    width: 15,
    height: 15,
    marginRight: 11
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: EStyleSheet.value('$bg.gray')
  }
})
