import { StyleSheet, Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import { Button, Image, Section } from 'tags'
import { BlackText, FullWidthButton, GrayText } from 'components'
import { commonStyles } from 'commonStyles'
import EStyleSheet from 'react-native-extended-stylesheet'
import RNFadedScrollView from 'rn-faded-scrollview'
import BlogComments from 'pages/blog/BlogComments'

const EYE = require('assets/icon/045-eye.png')
const EMBED_MAP = require('assets/img/embed.png')
const WHATSAPP = require('assets/icon/048-whatsapp.png')

const appHeight = Dimensions.get('window').height
const appWidth = Dimensions.get('window').width

const ComponiesAbout = () => {
  const [BtnKey, setBtnKey] = useState(1)
  const [section, setSection] = useState('intro')
  const [showTheRest, setShowTheRest] = useState(false)
  const [detailToggled, setDetailToggled] = useState(false)

  const DATA = [
    {
      id: 1,
      title: 'مدیریت',
      detail: '-------'
    },
    {
      id: 2,
      title: 'شماره تماس',
      detail: '-------'
    },
    {
      id: 3,
      title: 'تلفن مدیریت',
      detail: '-------'
    },
    {
      id: 4,
      title: 'پست الکترونیک',
      detail: '-------'
    },
    {
      id: 5,
      title: 'وبسایت',
      detail: '-------'
    },
    {
      id: 6,
      title: 'کد پستی',
      detail: '-------'
    },
    {
      id: 7,
      title: 'نشانی',
      detail: 'بیت کوین نخستین ارز دیجیتال و در واقع نوعی از پول هست که ویژگی های منحصر به فردی را دارد که قصد داریم در'
    }
  ]

  const renderDetails = () => {
    return DATA.map((item) => {
      return (
        <Section key={item.id} style={styles.detailRow}>
          <GrayText style={{ width: '50%', textAlign: 'left' }}>{item.title}</GrayText>
          <BlackText style={{ width: '50%', textAlign: 'right' }}>{item.detail}</BlackText>
        </Section>
      )
    })
  }

  return (
    <>
      <Section style={{ ...styles.tabContainer, backgroundColor: EStyleSheet.value('$border.light') }}>
        <Button
          onPress={() => {
            setBtnKey(1)
            setSection('intro')
          }}
          style={{
            ...styles.tabBtn,
            backgroundColor: BtnKey == 1 ? EStyleSheet.value('$border.white') : EStyleSheet.value('$border.light')
          }}>
          <GrayText style={{ ...styles.tabBtnText }}>توضیحات</GrayText>
        </Button>
        <Button
          onPress={() => {
            setBtnKey(2)
            setSection('history')
          }}
          style={{
            ...styles.tabBtn,
            backgroundColor: BtnKey == 2 ? EStyleSheet.value('$border.white') : EStyleSheet.value('$border.light')
          }}>
          <GrayText style={{ ...styles.tabBtnText }}>اطلاعات تماس</GrayText>
        </Button>
      </Section>
      <Section style={styles.tabContainer}>
        {section == 'intro' ? (
          <Section>
            <RNFadedScrollView
              allowStartFade={false}
              overScrollMode={'never'}
              horizontal={false}
              scrollThreshold={0}
              showsVerticalScrollIndicator={false}
              allowDivider={true}
              fadeSize={appHeight * 0.5}
              style={{ height: showTheRest ? null : 300, width: '100%', display: 'flex' }}
              bounces={true}
              fadeColors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 1)']}>
              <BlackText>
                بیت کوین نخستین ارز دیجیتال و در واقع نوعی از پول هست که ویژگی های منحصر به فردی را دارد که قصد داریم در
                ادامه تمامی ویژگی های این پول شگفت انگیز را باهم بررسی کنیم. ابتدا با ساتوشی ناکاموتو خالق بیت کوین آشنا
                شوید؛ هر چند ایشان هویت ناشناسی دارد ولی به عنوان خالق بیت کوین شناخته شده و طبق تعریفی که از بیت کوین و
                نحوه کار کردن با آن داشتند: بیت کوین را یک سیستم همتا به همتا از پول نقد الکترونیکی می داند، برای این
                پول جدید خود یک بستر متفاوت و حساب شده ای را راه اندازی کرد. این بستر به مهم ترین اصل نقل و انتقالات
                مالی یعنی امنیت توجه ویژه ای داشته و ضریب امنیتی بالایی برای آن طراحی شده که هک شدن این بستر و زیرساخت
                تقریبا نشدنی است. بیت کوین نخستین ارز دیجیتال و در واقع نوعی از پول هست که ویژگی های منحصر به فردی را
                دارد که قصد داریم در ادامه تمامی ویژگی های این پول شگفت انگیز را باهم بررسی کنیم. ابتدا با ساتوشی
                ناکاموتو خالق بیت کوین آشنا شوید؛ هر چند ایشان هویت ناشناسی دارد ولی به عنوان خالق بیت کوین شناخته شده و
                طبق تعریفی که از بیت کوین و نحوه کار کردن با آن داشتند: بیت کوین را یک سیستم همتا به همتا از پول نقد
                الکترونیکی می داند، برای این پول جدید خود یک بستر متفاوت و حساب شده ای را راه اندازی کرد. این بستر به
                مهم ترین اصل نقل و انتقالات مالی یعنی امنیت توجه ویژه ای داشته و ضریب امنیتی بالایی برای آن طراحی شده که
                هک شدن این بستر و زیرساخت تقریبا نشدنی است. بیت کوین نخستین ارز دیجیتال و در واقع نوعی از پول هست که
                ویژگی های منحصر به فردی را دارد که قصد داریم در ادامه تمامی ویژگی های این پول شگفت انگیز را باهم بررسی
                کنیم. ابتدا با ساتوشی ناکاموتو خالق بیت کوین آشنا شوید؛ هر چند ایشان هویت ناشناسی دارد ولی به عنوان خالق
                بیت کوین شناخته شده و طبق تعریفی که از بیت کوین و نحوه کار کردن با آن داشتند: بیت کوین را یک سیستم همتا
                به همتا از پول نقد الکترونیکی می داند، برای این پول جدید خود یک بستر متفاوت و حساب شده ای را راه اندازی
                کرد. این بستر به مهم ترین اصل نقل و انتقالات مالی یعنی امنیت توجه ویژه ای داشته و ضریب امنیتی بالایی
                برای آن طراحی شده که هک شدن این بستر و زیرساخت تقریبا نشدنی است. بیت کوین نخستین ارز دیجیتال و در واقع
                نوعی از پول هست که ویژگی های منحصر به فردی را دارد که قصد داریم در ادامه تمامی ویژگی های این پول شگفت
                انگیز را باهم بررسی کنیم. ابتدا با ساتوشی ناکاموتو خالق بیت کوین آشنا شوید؛ هر چند ایشان هویت ناشناسی
                دارد ولی به عنوان خالق بیت کوین شناخته شده و طبق تعریفی که از بیت کوین و نحوه کار کردن با آن داشتند: بیت
                کوین را یک سیستم همتا به همتا از پول نقد الکترونیکی می داند، برای این پول جدید خود یک بستر متفاوت و حساب
                شده ای را راه اندازی کرد. این بستر به مهم ترین اصل نقل و انتقالات مالی یعنی امنیت توجه ویژه ای داشته و
                ضریب امنیتی بالایی برای آن طراحی شده که هک شدن این بستر و زیرساخت تقریبا نشدنی است. بیت کوین نخستین ارز
                دیجیتال و در واقع نوعی از پول هست که ویژگی های منحصر به فردی را دارد که قصد داریم در ادامه تمامی ویژگی
                های این پول شگفت انگیز را باهم بررسی کنیم. ابتدا با ساتوشی ناکاموتو خالق بیت کوین آشنا شوید؛ هر چند
                ایشان هویت ناشناسی دارد ولی به عنوان خالق بیت کوین شناخته شده و طبق تعریفی که از بیت کوین و نحوه کار
                کردن با آن داشتند: بیت کوین را یک سیستم همتا به همتا از پول نقد الکترونیکی می داند، برای این پول جدید
                خود یک بستر متفاوت و حساب شده ای را راه اندازی کرد. این بستر به مهم ترین اصل نقل و انتقالات مالی یعنی
                امنیت توجه ویژه ای داشته و ضریب امنیتی بالایی برای آن طراحی شده که هک شدن این بستر و زیرساخت تقریبا
                نشدنی است. بیت کوین نخستین ارز دیجیتال و در واقع نوعی از پول هست که ویژگی های منحصر به فردی را دارد که
                قصد داریم در ادامه تمامی ویژگی های این پول شگفت انگیز را باهم بررسی کنیم. ابتدا با ساتوشی ناکاموتو خالق
                بیت کوین آشنا شوید؛ هر چند ایشان هویت ناشناسی دارد ولی به عنوان خالق بیت کوین شناخته شده و طبق تعریفی که
                از بیت کوین و نحوه کار کردن با آن داشتند: بیت کوین را یک سیستم همتا به همتا از پول نقد الکترونیکی می
                داند، برای این پول جدید خود یک بستر متفاوت و حساب شده ای را راه اندازی کرد. این بستر به مهم ترین اصل نقل
                و انتقالات مالی یعنی امنیت توجه ویژه ای داشته و ضریب امنیتی بالایی برای آن طراحی شده که هک شدن این بستر
                و زیرساخت تقریبا نشدنی است.
              </BlackText>
            </RNFadedScrollView>
            {detailToggled ? null : (
              <Button onPress={() => setDetailToggled((state) => !state)} style={styles.seeMore}>
                <Image source={EYE} style={styles.icon} />
                <BlackText>مشاهده همه توضیحات</BlackText>
              </Button>
            )}
          </Section>
        ) : (
          <Section style={styles.contactInfo}>
            <Image source={EMBED_MAP} style={styles.embedMap} />
            {renderDetails()}
            <FullWidthButton ICON={WHATSAPP} state="activeGreen" text="تماس از طریق واتساپ" />
          </Section>
        )}
      </Section>
    </>
  )
}

export default ComponiesAbout

const styles = StyleSheet.create({
  commentsContainer: {
    width: '100%',
    alignSelf: 'center',
    marginBottom: 100
  },
  tabContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 15,
    padding: 2
  },
  tabBtn: {
    width: '48%',
    height: 35,
    justifyContent: 'center',
    padding: 5,
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: EStyleSheet.value('$border.light')
  },
  plusBtn: {
    width: 50,
    height: 50,
    backgroundColor: EStyleSheet.value('$bg.darkBlue'),
    borderRadius: 50,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    zIndex: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: EStyleSheet.value('$bg.darkBlue'),
    elevation: 10
  },
  plusBtnIcon: {
    width: '25%',
    height: '25%',
    tintColor: EStyleSheet.value('$text.white')
  },
  seeMore: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0
  },
  icon: {
    width: 20,
    height: 20,
    margin: 5,
    resizeMode: 'contain'
  },
  contactInfo: {
    width: '100%',
    padding: 10,
    // paddingBottom: -10,
    borderRadius: 10,
    backgroundColor: EStyleSheet.value('$bg.white'),
    shadowColor: EStyleSheet.value('$shadow'),
    elevation: 10
  },
  detailRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 0.5,
    borderColor: EStyleSheet.value('$border.dark')
  },
  embedMap: {
    width: appWidth * 0.8,
    height: appWidth * 0.8,
    borderRadius: 10,
    alignSelf: 'center',
    overFlow: 'hidden'
  }
})
