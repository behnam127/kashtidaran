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
import LatestCommersials from './LatestCommersials'
import ComponiesAbout from './ComponiesAbout'

const EYE = require('assets/icon/045-eye.png')
const CALL = require('assets/icon/041-phone-call.png')
const LOCATION = require('assets/icon/023-location-pin.png')
const STAR = require('assets/icon/046-star.png')
const LOGO = require('assets/img/comp/1.png')

const appWidth = Dimensions.get('window').width
const appHeight = Dimensions.get('window').height

const ComponiesSingle = ({ route }) => {
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
      <Header type="componies" leftIcon="heart" backgroundColor="blue" title="جزییات نمایشگاه آنلاین" />
      <Section style={styles.logoSection}>
        <Section style={styles.logoBack}>
          <Image source={LOGO} style={styles.logoContainer} />
        </Section>
      </Section>
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
          <>
            <Section style={styles.commersialContainer}>
              <Section style={styles.ComercialRow}>
                <Section>
                  <BlackText>لوازم دریایی یوسفی</BlackText>
                  <Section style={{ ...commonStyles.row }}>
                    <Section style={{ ...styles.itemDateContainer }}>
                      <Image
                        source={STAR}
                        style={{ ...styles.dateIcon, tintColor: EStyleSheet.value('$text.yellow') }}
                      />
                      {/* <GrayText size={9}>{dateFormater({DATA.date})}</GrayText> */}
                      <GrayText size={11}>4/7 از 5 (2900 رای)</GrayText>
                    </Section>
                    <Section style={{ ...styles.itemDateContainer, marginLeft: 10 }}>
                      <Image source={LOCATION} style={{ ...styles.dateIcon }} />
                      {/* <GrayText size={9}>{dateFormater({DATA.date})}</GrayText> */}
                      <GrayText size={11}>چابهار، بندر هدوک</GrayText>
                    </Section>
                  </Section>
                </Section>
                <Section style={{ ...styles.commercialIconContainer }}>
                  <Image source={CALL} style={{ ...styles.commercialIcon }} />
                </Section>
              </Section>
            </Section>
            <Section style={styles.roundDivider} />
          </>
          <Section style={styles.container}>
            {/* <Image style={styles.titleImage} source={{ uri: DATA.picture }} /> */}

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
            <LatestCommersials title="آخرین آگهی ها" />
            {/*................................................ Tabs rendering...................................................... */}
            <ComponiesAbout />
            {/*................................................ END Tabs rendering...................................................... */}
            <Section style={styles.btnContainer}>
              <Button style={styles.btn}>
                <BlackText style={{ color: EStyleSheet.value('$text.darkBlue') }}>شبکه های اجتماعی</BlackText>
              </Button>
              <Button style={styles.btn}>
                <BlackText style={{ color: EStyleSheet.value('$text.red') }}>گزارش تخلف</BlackText>
              </Button>
            </Section>
          </Section>
        </ScrollView>
      )}
    </SafeAreaView>
  )
}

export { ComponiesSingle }

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
  },
  commersialContainer: {
    width: '100%',
    height: 60,
    marginTop: appWidth * 0.17
  },
  ComercialRow: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  itemDateContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  dateIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
    tintColor: EStyleSheet.value('$text.gray')
  },
  commercialIcon: {
    width: 20,
    height: 20,
    borderRadius: 50,
    tintColor: EStyleSheet.value('$text.darkBlue')
  },
  commercialIconContainer: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: EStyleSheet.value('$bg.darkBluewithOpacity'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoSection: {
    backgroundColor: 'rgba(0,0,0,0)',
    zIndex: 22
  },
  logoBack: {
    width: appWidth * 0.3,
    height: appWidth * 0.3,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: appWidth * -0.17,
    shadowColor: EStyleSheet.value('$shadow'),
    elevation: 5
  },
  logoContainer: {
    width: '90%',
    height: '90%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  }
})
