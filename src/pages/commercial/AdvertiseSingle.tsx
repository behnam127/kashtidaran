import { Dimensions, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button, Image, ScrollView, Section } from 'tags'
import EStyleSheet from 'react-native-extended-stylesheet'
import { BlackText, GrayText } from 'components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Skeleton } from 'components/skeleton'
import RNFadedScrollView from 'rn-faded-scrollview'
import { Header } from 'components/Header'
import { useNavigation } from '@react-navigation/native'
import { commonStyles } from 'commonStyles'

const EYE = require('assets/icon/045-eye.png')
const BANNER = require('assets/img/2.jpg')
const TITLE_DOTS = require('assets/icon/titleDots.png')

const appWidth = Dimensions.get('window').width
const appHeight = Dimensions.get('window').height

const AdvertiseSingle = ({ route }) => {
  // const [DATA, setDATA] = useState([])
  const [loading, setLoading] = useState(false)
  const [detailToggled, setDetailToggled] = useState(false)
  const [showTheRest, setShowTheRest] = useState(false)

  const navigation = useNavigation()

  const { slug } = route.params

  const DATA = [
    {
      id: 1,
      title: 'طول',
      detail: '6.14متر'
    },
    {
      id: 2,
      title: 'طول',
      detail: '6.14متر'
    },
    {
      id: 3,
      title: 'طول',
      detail: '6.14متر'
    },
    {
      id: 4,
      title: 'طول',
      detail: '6.14متر'
    },
    {
      id: 5,
      title: 'طول',
      detail: '6.14متر'
    },
    {
      id: 6,
      title: 'طول',
      detail: '6.14متر'
    },
    {
      id: 7,
      title: 'طول',
      detail: '6.14متر'
    }
  ]

  // useEffect(() => {
  //   getPostsDetails()
  // }, [])

  // const getPostsDetails = async () => {
  //   setLoading(true)

  //   try {
  //     const postDetailesUrl = `https://blog.sarmayex.com/api/v1/posts/${slug}`
  //     const postDetailesRequestConfig = {
  //       method: 'get',
  //       url: postDetailesUrl,
  //       timeout: 0,
  //       headers: {
  //         Accept: 'application/json'
  //       }
  //     }

  //     const postDetailesResponse = await callApi(postDetailesRequestConfig)
  //     const { message, status } = postDetailesResponse
  //     console.log(postDetailesResponse)
  //     if (status == 200) {
  //       setDATA(postDetailesResponse.post)
  //       setLoading(false)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const renderDetails = () => {
    return DATA.map((item) => {
      return (
        <Section key={item.id} style={styles.detailRow}>
          <GrayText>{item.title}</GrayText>
          <BlackText>{item.detail}</BlackText>
        </Section>
      )
    })
  }

  const source = {
    // html: `<!DOCTYPE html><html><body style="font-size: 1rem; color: #000;">${DATA.body}</body></html>`
    html: `<!DOCTYPE html><html><body style="font-size: 1rem; color: #000;">
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
    
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
    </body></html>`
    // html: `${DATA.body}`
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header backgroundColor="blue" title="جزییات اخبار و مقالات" />
      {loading ? (
        <>
          <Skeleton>
            <Section style={styles.skeletonSquare} />
            <Section style={styles.skeletonLine} />
            <Section style={styles.skeletonLine} />
          </Skeleton>
          <Skeleton>
            <Section style={{ ...styles.skeletonCricle, alignSelf: 'flex-start' }} />
            <Section style={styles.skeletonLine} />
            <Section style={styles.skeletonLine} />
          </Skeleton>
        </>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} style={{ height: '100%' }}>
          <Section style={styles.container}>
            {/* <Image style={styles.titleImage} source={{ uri: DATA.picture }} /> */}
            <Image style={styles.titleImage} source={BANNER} />
            <BlackText size={14} style={styles.statusN}>
              نمایشگاه آنلاین
            </BlackText>
            <BlackText size={14} style={styles.statusF}>
              فوری
            </BlackText>
            <Section style={{ ...styles.detailContainer, height: detailToggled ? null : 300 }}>
              <RNFadedScrollView
                allowStartFade={false}
                overScrollMode={'never'}
                horizontal={false}
                scrollThreshold={0}
                showsVerticalScrollIndicator={false}
                allowDivider={true}
                fadeSize={appHeight * 0.5}
                style={{ height: detailToggled ? null : 300, width: '100%', display: 'flex' }}
                bounces={true}
                fadeColors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 1)']}>
                {renderDetails()}
              </RNFadedScrollView>
              {detailToggled ? null : (
                <Button onPress={() => setDetailToggled((state) => !state)} style={styles.seeMore}>
                  <Image source={EYE} style={styles.icon} />
                  <BlackText>مشاهده همه جزییات</BlackText>
                </Button>
              )}
            </Section>
            {/*................................................ html rendering...................................................... */}
            <Section style={styles.htmlContainer}>
              {/* <RenderHtml contentWidth={Dimensions.get('window').width * 0.9} source={source} /> */}
              <Section style={{ ...styles.titleChildContainer }}>
                <Image style={styles.titleDots} source={TITLE_DOTS} />
                <BlackText style={styles.title}>توضیحات آگهی</BlackText>
              </Section>
              <RNFadedScrollView
                allowStartFade={false}
                overScrollMode={'never'}
                horizontal={false}
                scrollThreshold={0}
                showsVerticalScrollIndicator={false}
                allowDivider={true}
                fadeSize={appHeight * 0.4}
                style={{ height: showTheRest ? null : 400, width: '100%', display: 'flex' }}
                bounces={true}
                fadeColors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 1)']}>
                <BlackText>
                  بیت کوین نخستین ارز دیجیتال و در واقع نوعی از پول هست که ویژگی های منحصر به فردی را دارد که قصد داریم
                  در ادامه تمامی ویژگی های این پول شگفت انگیز را باهم بررسی کنیم. ابتدا با ساتوشی ناکاموتو خالق بیت کوین
                  آشنا شوید؛ هر چند ایشان هویت ناشناسی دارد ولی به عنوان خالق بیت کوین شناخته شده و طبق تعریفی که از بیت
                  کوین و نحوه کار کردن با آن داشتند: بیت کوین را یک سیستم همتا به همتا از پول نقد الکترونیکی می داند،
                  برای این پول جدید خود یک بستر متفاوت و حساب شده ای را راه اندازی کرد. این بستر به مهم ترین اصل نقل و
                  انتقالات مالی یعنی امنیت توجه ویژه ای داشته و ضریب امنیتی بالایی برای آن طراحی شده که هک شدن این بستر
                  و زیرساخت تقریبا نشدنی است. بیت کوین نخستین ارز دیجیتال و در واقع نوعی از پول هست که ویژگی های منحصر
                  به فردی را دارد که قصد داریم در ادامه تمامی ویژگی های این پول شگفت انگیز را باهم بررسی کنیم. ابتدا با
                  ساتوشی ناکاموتو خالق بیت کوین آشنا شوید؛ هر چند ایشان هویت ناشناسی دارد ولی به عنوان خالق بیت کوین
                  شناخته شده و طبق تعریفی که از بیت کوین و نحوه کار کردن با آن داشتند: بیت کوین را یک سیستم همتا به همتا
                  از پول نقد الکترونیکی می داند، برای این پول جدید خود یک بستر متفاوت و حساب شده ای را راه اندازی کرد.
                  این بستر به مهم ترین اصل نقل و انتقالات مالی یعنی امنیت توجه ویژه ای داشته و ضریب امنیتی بالایی برای
                  آن طراحی شده که هک شدن این بستر و زیرساخت تقریبا نشدنی است. بیت کوین نخستین ارز دیجیتال و در واقع نوعی
                  از پول هست که ویژگی های منحصر به فردی را دارد که قصد داریم در ادامه تمامی ویژگی های این پول شگفت انگیز
                  را باهم بررسی کنیم. ابتدا با ساتوشی ناکاموتو خالق بیت کوین آشنا شوید؛ هر چند ایشان هویت ناشناسی دارد
                  ولی به عنوان خالق بیت کوین شناخته شده و طبق تعریفی که از بیت کوین و نحوه کار کردن با آن داشتند: بیت
                  کوین را یک سیستم همتا به همتا از پول نقد الکترونیکی می داند، برای این پول جدید خود یک بستر متفاوت و
                  حساب شده ای را راه اندازی کرد. این بستر به مهم ترین اصل نقل و انتقالات مالی یعنی امنیت توجه ویژه ای
                  داشته و ضریب امنیتی بالایی برای آن طراحی شده که هک شدن این بستر و زیرساخت تقریبا نشدنی است. بیت کوین
                  نخستین ارز دیجیتال و در واقع نوعی از پول هست که ویژگی های منحصر به فردی را دارد که قصد داریم در ادامه
                  تمامی ویژگی های این پول شگفت انگیز را باهم بررسی کنیم. ابتدا با ساتوشی ناکاموتو خالق بیت کوین آشنا
                  شوید؛ هر چند ایشان هویت ناشناسی دارد ولی به عنوان خالق بیت کوین شناخته شده و طبق تعریفی که از بیت کوین
                  و نحوه کار کردن با آن داشتند: بیت کوین را یک سیستم همتا به همتا از پول نقد الکترونیکی می داند، برای
                  این پول جدید خود یک بستر متفاوت و حساب شده ای را راه اندازی کرد. این بستر به مهم ترین اصل نقل و
                  انتقالات مالی یعنی امنیت توجه ویژه ای داشته و ضریب امنیتی بالایی برای آن طراحی شده که هک شدن این بستر
                  و زیرساخت تقریبا نشدنی است. بیت کوین نخستین ارز دیجیتال و در واقع نوعی از پول هست که ویژگی های منحصر
                  به فردی را دارد که قصد داریم در ادامه تمامی ویژگی های این پول شگفت انگیز را باهم بررسی کنیم. ابتدا با
                  ساتوشی ناکاموتو خالق بیت کوین آشنا شوید؛ هر چند ایشان هویت ناشناسی دارد ولی به عنوان خالق بیت کوین
                  شناخته شده و طبق تعریفی که از بیت کوین و نحوه کار کردن با آن داشتند: بیت کوین را یک سیستم همتا به همتا
                  از پول نقد الکترونیکی می داند، برای این پول جدید خود یک بستر متفاوت و حساب شده ای را راه اندازی کرد.
                  این بستر به مهم ترین اصل نقل و انتقالات مالی یعنی امنیت توجه ویژه ای داشته و ضریب امنیتی بالایی برای
                  آن طراحی شده که هک شدن این بستر و زیرساخت تقریبا نشدنی است. بیت کوین نخستین ارز دیجیتال و در واقع نوعی
                  از پول هست که ویژگی های منحصر به فردی را دارد که قصد داریم در ادامه تمامی ویژگی های این پول شگفت انگیز
                  را باهم بررسی کنیم. ابتدا با ساتوشی ناکاموتو خالق بیت کوین آشنا شوید؛ هر چند ایشان هویت ناشناسی دارد
                  ولی به عنوان خالق بیت کوین شناخته شده و طبق تعریفی که از بیت کوین و نحوه کار کردن با آن داشتند: بیت
                  کوین را یک سیستم همتا به همتا از پول نقد الکترونیکی می داند، برای این پول جدید خود یک بستر متفاوت و
                  حساب شده ای را راه اندازی کرد. این بستر به مهم ترین اصل نقل و انتقالات مالی یعنی امنیت توجه ویژه ای
                  داشته و ضریب امنیتی بالایی برای آن طراحی شده که هک شدن این بستر و زیرساخت تقریبا نشدنی است.
                </BlackText>
              </RNFadedScrollView>
              {showTheRest ? null : (
                <Button onPress={() => setShowTheRest((state) => !state)} style={{ ...styles.seeAbout }}>
                  <Image source={EYE} style={styles.icon} />
                  <BlackText>مشاهده همه جزییات</BlackText>
                </Button>
              )}
            </Section>
            {/*................................................ END html rendering...................................................... */}
            <Section style={styles.btnContainer}>
              <Button style={styles.btn}>
                <BlackText style={{ color: EStyleSheet.value('$text.darkBlue') }}>من هستم</BlackText>
              </Button>
              <Button style={styles.btn}>
                <BlackText style={{ color: EStyleSheet.value('$text.red') }}>گزارش خطا</BlackText>
              </Button>
            </Section>
          </Section>
        </ScrollView>
      )}
    </SafeAreaView>
  )
}

export { AdvertiseSingle }

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: appHeight - 60,
    backgroundColor: EStyleSheet.value('$bg.white')
  },
  container: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 200
  },
  titleImage: {
    width: appWidth * 0.9,
    height: appWidth * 0.9,
    resizeMode: 'cover',
    borderRadius: 10
  },
  titleText: {
    marginTop: 21
  },
  statusN: {
    borderRadius: 15,
    padding: 10,
    paddingBottom: 5,
    paddingTop: 5,
    color: EStyleSheet.value('$text.white'),
    backgroundColor: EStyleSheet.value('$bg.darkBlue'),
    position: 'absolute',
    top: 10,
    left: 10
  },
  statusF: {
    borderRadius: 15,
    padding: 10,
    paddingBottom: 5,
    paddingTop: 5,
    color: EStyleSheet.value('$text.white'),
    backgroundColor: EStyleSheet.value('$bg.yellow'),
    position: 'absolute',
    top: 10,
    left: '35%'
  },
  detailContainer: {
    width: '100%',
    marginTop: 20,
    shadowColor: EStyleSheet.value('$shadow'),
    elevation: 10,
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: EStyleSheet.value('$bg.white'),
    overflow: 'hidden'
  },
  detailRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 0.5,
    borderColor: EStyleSheet.value('$border.dark')
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
  seeAbout: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 40
  },
  icon: {
    width: 20,
    height: 20,
    margin: 5,
    resizeMode: 'contain'
  },
  titleChildContainer: {
    ...commonStyles.row
  },
  title: {
    marginLeft: 14,
    marginBottom: 14
  },
  titleDots: {
    width: 15,
    height: 25,
    bottom: 6,
    tintColor: EStyleSheet.value('$border.dark')
  },
  htmlContainer: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20
  },
  btnContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btn: {
    padding: 20,
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: EStyleSheet.value('$border.dark'),
    borderRadius: 10
  },
  skeletonLine: {
    width: '70%',
    height: 20,
    backgroundColor: EStyleSheet.value('$bg.gray'),
    marginBottom: 20,
    borderRadius: 10
  },
  skeletonCricle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: EStyleSheet.value('$bg.gray'),
    margin: 20
  },
  skeletonSquare: {
    width: '100%',
    height: 120,
    borderRadius: 20,
    backgroundColor: EStyleSheet.value('$bg.gray'),
    margin: 20
  }
})
