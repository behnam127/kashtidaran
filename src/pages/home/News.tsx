import { Dimensions, FlatList, StyleSheet } from 'react-native'
import { Button, Image, Section } from 'tags'
import React, { useEffect, useState } from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import { commonStyles } from 'commonStyles'
import { BlackText, GrayText } from 'components'
import { callApi } from 'services'
import { navigator } from 'services/navigator'
import { Skeleton } from 'components/skeleton'
import { dateFormater } from 'services/dateFormatter'
import { useNavigation } from '@react-navigation/native'

const TITLE_DOTS = require('assets/icon/titleDots.png')
const DOBLE_ARROW_LEFT = require('assets/icon/019-angle-left.png')
const DATE_ICON = require('assets/icon/004-clock.png')
const CALENDAR = require('assets/icon/025-calendar-date.png')

type commercialTypes = {
  title?: string
}

const News = ({ title }: commercialTypes) => {
  //   const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation()
  //   useEffect(() => {
  //     getNews()
  //   }, [])

  //   const getNews = async () => {
  //     try {
  //       const NewsUrl = `https://blog.sarmayex.com/api/v1/posts?page=1`
  //       const NewsRequestConfig = {
  //         method: 'get',
  //         url: NewsUrl,
  //         timeout: 0,
  //         headers: {
  //           Accept: 'application/json'
  //         }
  //       }
  //       const NewsResponse = await callApi(NewsRequestConfig)
  //       const { message, status } = NewsResponse
  //       if (status == 200) {
  //         setData(NewsResponse.posts)
  //         setLoading(false)
  //       }
  //     } catch (error) {}
  //   }

  const data = [
    {
      id: 1,
      image: require('assets/img/7.png'),
      title: 'آغاز ساخت دو فروند کشتی تانکر چند منظوره',
      date: '20 دقیقه پیش',
      location: 'هرمزگان، بندرعباس'
    },
    {
      id: 2,
      image: require('assets/img/4.png'),
      title: 'آغاز ساخت دو فروند کشتی تانکر چند منظوره',
      date: '20 دقیقه پیش',
      location: 'هرمزگان، بندرعباس'
    },
    {
      id: 3,
      image: require('assets/img/3.jpg'),
      title: 'آغاز ساخت دو فروند کشتی تانکر چند منظوره',
      date: '20 دقیقه پیش',
      location: 'هرمزگان، بندرعباس'
    },
    {
      id: 4,
      image: require('assets/img/1.jpg'),
      title: 'آغاز ساخت دو فروند کشتی تانکر چند منظوره',
      date: '20 دقیقه پیش',
      location: 'هرمزگان، بندرعباس'
    }
  ]

  const renderBoxes = ({ item }) => {
    const slug = item.slug
    return (
      <Button onPress={() => navigator(navigation, 'BlogSingle', { slug })} style={styles.itemsContainer}>
        {/* <Image source={{ uri: item.picture }} style={styles.itemsImage} /> */}
        <Image source={item.image} style={styles.itemsImage} />
        <BlackText size={11} style={styles.itemTitle}>
          {item.title}
        </BlackText>
        <Section style={styles.itemDateContainer}>
          <Image source={DATE_ICON} style={styles.dateIcon} />
          <GrayText size={9}>{item.date}</GrayText>
        </Section>
        <Section style={styles.itemDateContainer}>
          <Image source={CALENDAR} style={{ ...styles.dateIcon }} />
          {/* <GrayText size={9}>{dateFormater({DATA.date})}</GrayText> */}
          <GrayText size={9}>12-بهمن-1401</GrayText>
        </Section>
      </Button>
    )
  }

  return (
    <Section style={styles.container}>
      <Button onPress={() => navigator(navigation, 'Blog')} style={{ ...commonStyles.row, ...styles.titleContainer }}>
        <Section style={{ ...styles.titleChildContainer }}>
          <Image style={styles.titleDots} source={TITLE_DOTS} />
          <BlackText style={styles.title}>{title}</BlackText>
        </Section>
        <Section style={{ ...styles.titleChildContainer }}>
          <GrayText size={11} style={styles.title}>
            مشاهده همه
          </GrayText>
          <Image style={styles.dobleArrowIcon} source={DOBLE_ARROW_LEFT} />
        </Section>
      </Button>
      <Section style={commonStyles.rowJustifySpaceBetween}>
        <Skeleton display={loading}>
          <Section style={styles.skeletonCricle} />
          <Section style={styles.skeletonLine} />
          <Section style={styles.skeletonLine} />
        </Skeleton>
        <Skeleton display={loading}>
          <Section style={styles.skeletonCricle} />
          <Section style={styles.skeletonLine} />
          <Section style={styles.skeletonLine} />
        </Skeleton>
        <Skeleton display={loading}>
          <Section style={styles.skeletonCricle} />
          <Section style={styles.skeletonLine} />
          <Section style={styles.skeletonLine} />
        </Skeleton>
      </Section>
      <FlatList
        overScrollMode={'always'}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderBoxes}
        keyExtractor={(item, index) => index}
      />
    </Section>
  )
}

export default News

const styles = StyleSheet.create({
  container: {
    height: 280,
    width: Dimensions.get('window').width,
    marginTop: EStyleSheet.value('$d.large'),
    paddingLeft: '5%'
  },
  titleContainer: {
    ...commonStyles.row,
    justifyContent: 'space-between',
    width: '95%'
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
  dobleArrowIcon: {
    width: 25,
    height: 25,
    marginLeft: 10,
    tintColor: EStyleSheet.value('$border.dark'),
    alignSelf: 'center',
    bottom: 6
  },

  itemsContainer: {
    flex: 1,
    width: 250,
    minHeight: 190,
    maxHeight: 200,
    borderRadius: 5,
    shadowColor: EStyleSheet.value('$shadow'),
    elevation: 10,
    alignItems: 'center',
    marginBottom: 40,
    marginRight: 5,
    marginLeft: 5,
    backgroundColor: EStyleSheet.value('$bg.white'),
    borderWidth: 0.2,
    borderColor: '#f1f1f1',
    padding: 5,
    justifyContent: 'space-between'
  },
  itemsImage: {
    width: '100%',
    height: 110,
    resizeMode: 'contain',
    borderRadius: 5
  },
  itemTitle: {
    maxHeight: 85,
    marginTop: 5,
    marginBottom: 10,
    textAlign: 'left',
    alignSelf: 'flex-start'
  },
  itemDateContainer: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  dateIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
    tintColor: EStyleSheet.value('$text.gray')
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
  }
})
