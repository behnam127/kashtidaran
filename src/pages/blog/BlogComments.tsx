import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Image, Section } from 'tags'
import { AppInput, BlackText, FullWidthButton, GrayText } from 'components'
import EStyleSheet from 'react-native-extended-stylesheet'
import { commonStyles } from 'commonStyles'
import { callApi } from 'services'

const LIKE_ICON = require('assets/icons/like.png')
const STAR_ICON = require('assets/icons/star.png')
const TITLE_DOTS = require('assets/icons/titleDots.png')

const BlogComments = ({ slug }) => {
  const [DATA, setDATA] = useState([])
  const [BtnKey, setBtnKey] = useState(1)
  const [commentsVisibility, setCommentsVisibility] = useState(false)

  useEffect(() => {
    getComments()
  }, [])

  const getComments = async () => {
    try {
      const commentsUrl = `https://blog.sarmayex.com/api/v1/comments/${slug}`
      const commentsRequestConfig = {
        method: 'get',
        url: commentsUrl,
        timeout: 0,
        headers: {
          Accept: 'application/json'
        }
      }

      const commentsResponse = await callApi(commentsRequestConfig)
      const { message, status } = commentsResponse
      console.log({ commentsResponse })
      if (status == 200) {
        setDATA(commentsResponse.post)
        setCommentsVisibility(true)
      } else {
        setCommentsVisibility(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Section style={{ display: commentsVisibility ? 'flex' : 'none' }}>
      <Section style={{ ...styles.titleContainer }}>
        <Image style={styles.titleDots} source={TITLE_DOTS} />
        <BlackText style={styles.title}>ثبت نظر جدید</BlackText>
      </Section>
      <AppInput title={'نظر خود را یادداشت کنید'} multiline={true} />
      <AppInput title={'نام و نام خانوادگی'} />
      <AppInput title={'پست الکترونیک'} keyboardType="email-address" />
      <AppInput title={'امتیاز شما به مقاله'} />
      <FullWidthButton text="نظر خود را ثبت کنید" style={styles.fullWidthBtn}></FullWidthButton>
      <Section style={{ ...styles.titleContainer }}>
        <Image style={styles.titleDots} source={TITLE_DOTS} />
        <BlackText style={styles.title}>لیست نظرات کاربران (27 نظر)</BlackText>
      </Section>
      {/* ....................Tabs..................... */}
      <Section style={{ ...commonStyles.row, ...styles.tabContainer }}>
        <Button
          onPress={() => setBtnKey(1)}
          style={{
            ...styles.tabBtn,
            backgroundColor: BtnKey == 1 ? EStyleSheet.value('$border.light') : 'rgba(0,0,0,0)'
          }}>
          <GrayText style={{ ...styles.tabBtnText }}>جدید ترین ها</GrayText>
        </Button>
        <Button
          onPress={() => setBtnKey(2)}
          style={{
            ...styles.tabBtn,
            backgroundColor: BtnKey == 2 ? EStyleSheet.value('$border.light') : 'rgba(0,0,0,0)'
          }}>
          <GrayText style={{ ...styles.tabBtnText }}>محبوب ترین ها</GrayText>
        </Button>
        <Button
          onPress={() => setBtnKey(3)}
          style={{
            ...styles.tabBtn,
            backgroundColor: BtnKey == 3 ? EStyleSheet.value('$border.light') : 'rgba(0,0,0,0)'
          }}>
          <GrayText style={{ ...styles.tabBtnText }}>پر امتیاز ترین ها</GrayText>
        </Button>
      </Section>
      <Section style={styles.commentContainer}>
        <Section style={styles.commentChildContainer}>
          <Section style={styles.profilInfoContainer}>
            <Section style={styles.imageContainer}></Section>
            <Section>
              <BlackText size={14}>فرهاد موسوی راد</BlackText>
              <BlackText size={11}>24 دی ماه 1400 / ساعت 15:48 ظهر</BlackText>
            </Section>
          </Section>
          <GrayText size={11} style={styles.commentText}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردی است .
          </GrayText>
          <FullWidthButton text="پاسخ دادن" state="white" />
          <Section style={styles.likeStarContainer}>
            <Button style={styles.commentStar}>
              <Image source={LIKE_ICON} style={{ ...styles.likeStarIcon, tintColor: EStyleSheet.value('$text.red') }} />
              <Text style={styles.commentLikesText}>140 بار پسندیدند</Text>
            </Button>
            <Button style={styles.commentLikes}>
              <Image
                source={STAR_ICON}
                style={{ ...styles.likeStarIcon, tintColor: EStyleSheet.value('$text.darkBlueAlpha') }}
              />
              <Text style={styles.commentStarText}>امتیاز 4 از 5</Text>
            </Button>
          </Section>
        </Section>
        {/*.............................................CHILD ANSWER............................................. */}
        <Section style={{ ...styles.commentChildAnswerContainer }}>
          <Section style={styles.profilInfoContainer}>
            <Section style={{ ...styles.imageContainer, backgroundColor: '#fff' }}></Section>
            <Section>
              <BlackText size={14}>فرهاد موسوی راد</BlackText>
              <BlackText size={11}>24 دی ماه 1400 / ساعت 15:48 ظهر</BlackText>
            </Section>
          </Section>
          <GrayText size={11} style={styles.commentText}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردی است .
          </GrayText>
          <FullWidthButton text="پاسخ دادن" state="white" />
        </Section>
      </Section>
    </Section>
  )
}

export default BlogComments

const styles = StyleSheet.create({
  titleContainer: {
    ...commonStyles.row,
    alignItems: 'center',
    marginTop: 20
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
  fullWidthBtn: {
    marginTop: 15
  },
  tabContainer: {
    marginTop: 15,
    marginBottom: 15
  },
  tabBtn: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: EStyleSheet.value('$bg.gray')
  },
  tabBtnActive: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: EStyleSheet.value('$bg.gray')
  },
  tabBtnText: {
    fontSize: 10
  },
  commentContainer: {
    width: '100%',
    shadowColor: EStyleSheet.value('$shadow'),
    elevation: 10,
    backgroundColor: EStyleSheet.value('$bg.white'),
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden'
  },
  commentChildContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 21,
    borderRadius: 10,
    backgroundColor: EStyleSheet.value('$bg.white'),
    zIndex: 2
  },
  commentChildAnswerContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 21,
    backgroundColor: EStyleSheet.value('$bg.gray'),
    top: -30,
    borderRadius: 10
  },
  profilInfoContainer: {
    ...commonStyles.row,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 40,
    marginRight: 20,
    backgroundColor: EStyleSheet.value('$bg.gray')
  },
  commentText: {
    marginBottom: 21
  },
  likeStarContainer: {
    ...commonStyles.row,
    width: '100%',
    marginTop: 21,
    justifyContent: 'space-between'
  },
  commentLikes: {
    ...commonStyles.row,
    width: '48%',
    borderRadius: 5,
    height: 40,
    backgroundColor: EStyleSheet.value('$bg.lightBlue'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  commentStar: {
    ...commonStyles.row,
    width: '48%',
    borderRadius: 5,
    height: 40,
    backgroundColor: EStyleSheet.value('$bg.veryLightRed'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  commentLikesText: {
    color: EStyleSheet.value('$text.red'),
    fontSize: 11
  },
  commentStarText: {
    color: EStyleSheet.value('$text.darkBlueAlpha'),
    fontSize: 11
  },
  likeStarIcon: {
    width: 20,
    height: 20,
    marginRight: 10
  }
})
