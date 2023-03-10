import { Dimensions, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Image, ScrollView, Section } from 'tags'
import EStyleSheet from 'react-native-extended-stylesheet'
import { BlackText, GrayText } from 'components'
import { commonStyles } from 'commonStyles'
import { SafeAreaView } from 'react-native-safe-area-context'
import RenderHtml from 'react-native-render-html'
import { Skeleton } from 'components/skeleton'
import { Header } from 'components/Header'
import { useNavigation } from '@react-navigation/native'

const DATE_ICON = require('assets/icon/025-calendar-date.png')
const COMMENT_ICON = require('assets/icons/comment.png')
const AUTHOR = require('assets/icon/024-user-avatar-1.png')
const BANNER = require('assets/img/7.png')

const BlogSingle = ({ route }) => {
  const [DATA, setDATA] = useState([])
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation()

  const { slug } = route.params

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
      <Header title="جزییات اخبار و مقالات" />
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
        <ScrollView showsVerticalScrollIndicator={false} style={{ height: '90%' }}>
          <Section style={styles.container}>
            {/* <Image style={styles.titleImage} source={{ uri: DATA.picture }} /> */}
            <Image style={styles.titleImage} source={BANNER} />
            <BlackText size={14} style={styles.titleText}>
              آغاز ساخت دو فروند کشتی تانکر چند منظوره
            </BlackText>
            <Section style={styles.dateInfoContainer}>
              <Section style={styles.itemDateContainer}>
                <Image source={AUTHOR} style={{ ...styles.dateIcon }} />
                {/* <GrayText size={9}>{dateFormater({DATA.date})}</GrayText> */}
                <GrayText size={9}>محمد قاسمی</GrayText>
              </Section>
              <Section style={styles.itemDateContainer}>
                <Image source={DATE_ICON} style={{ ...styles.dateIcon }} />
                {/* <GrayText size={9}>{dateFormater({DATA.date})}</GrayText> */}
                <GrayText size={9}>12-بهمن-1401</GrayText>
              </Section>
            </Section>
            {/*................................................ html rendering...................................................... */}
            <Section style={styles.htmlContainer}>
              <RenderHtml contentWidth={Dimensions.get('window').width * 0.9} source={source} />
            </Section>
            {/*................................................ END html rendering...................................................... */}
          </Section>
        </ScrollView>
      )}
    </SafeAreaView>
  )
}

export { BlogSingle }

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: EStyleSheet.value('$bg.white')
  },
  container: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 100
  },
  titleImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10
  },
  titleText: {
    marginTop: 21
  },
  dateInfoContainer: {
    ...commonStyles.row,
    width: '100%',
    marginTop: 14
  },
  itemDateContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: 10
  },
  dateIcon: {
    width: 12,
    height: 12,
    marginRight: 5,
    tintColor: EStyleSheet.value('$text.gray')
  },
  htmlContainer: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20
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
