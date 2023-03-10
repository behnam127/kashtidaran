import React, { useEffect, useState } from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Button, Image, ScrollView, Section } from 'tags'
import { BlogItem } from './components/BlogItem'
import { Pagination } from 'components/Pagination'
import { callApi } from 'services'
import { Dimensions, FlatList, StyleSheet } from 'react-native'
import { Shadow } from 'react-native-shadow-2'
import { AppInput, BlackText, GrayText } from 'components'
import { commonStyles } from 'commonStyles'
import { navigator } from 'services/navigator'
import { dateFormater } from 'services/dateFormatter'
import { useLoading } from 'hooks/useLoading'
import { Header } from 'components/Header'
import { useNavigation } from '@react-navigation/native'
import FilterModal from './FilterModal'

const LOCATION = require('assets/icon/023-location-pin.png')
const CLOCK = require('assets/icon/022-clock-time.png')
const SEARCH = require('assets/icon/008-search.png')

const appHeight = Dimensions.get('window').height

export function AdvertiseArchive() {
  // const [DATA, setData] = useState([])
  const [paginationVisibility, setPaginationVisibility] = useState(false)
  const { showLoading, hideLoading } = useLoading()
  const navigation = useNavigation()
  const [showFilterModal, setShowFilterModal] = useState(false)

  const searchIcon = () => {
    return <Image style={styles.icon} source={SEARCH} />
  }

  // useEffect(() => {
  //   getPosts()
  // }, [])

  // const getPosts = async () => {
  //   try {
  //     const PostUrl = `https://blog.sarmayex.com/api/v1/posts?page=1`
  //     const PostRequestConfig = {
  //       method: 'get',
  //       url: PostUrl,
  //       timeout: 0,
  //       headers: {
  //         Accept: 'application/json'
  //       }
  //     }
  //     showLoading()
  //     const PostResponse = await callApi(PostRequestConfig)
  //     const { message, status } = PostResponse
  //     hideLoading()
  //     if (status == 200) {
  //       setData(PostResponse.posts)
  //       setPaginationVisibility(true)
  //     }
  //   } catch (error) {}
  // }

  const DATA = [
    {
      id: 1,
      image: require('assets/img/7.png'),
      title: 'آغاز ساخت دو فروند کشتی تانکر چند منظوره',
      date: '12-بهمن-1401',
      location: 'هرمزگان، بندرعباس',
      slug: 1
    },
    {
      id: 2,
      image: require('assets/img/4.png'),
      title: 'آغاز ساخت دو فروند کشتی تانکر چند منظوره',
      date: '12-بهمن-1401',
      location: 'هرمزگان، بندرعباس',
      slug: 1
    },
    {
      id: 3,
      image: require('assets/img/3.jpg'),
      title: 'آغاز ساخت دو فروند کشتی تانکر چند منظوره',
      date: '12-بهمن-1401',
      location: 'هرمزگان، بندرعباس',
      slug: 1
    },
    {
      id: 4,
      image: require('assets/img/1.jpg'),
      title: 'آغاز ساخت دو فروند کشتی تانکر چند منظوره',
      date: '12-بهمن-1401',
      location: 'هرمزگان، بندرعباس',
      slug: 1
    },
    {
      id: 5,
      image: require('assets/img/7.png'),
      title: 'آغاز ساخت دو فروند کشتی تانکر چند منظوره',
      date: '12-بهمن-1401',
      location: 'هرمزگان، بندرعباس',
      slug: 1
    },
    {
      id: 6,
      image: require('assets/img/4.png'),
      title: 'آغاز ساخت دو فروند کشتی تانکر چند منظوره',
      date: '12-بهمن-1401',
      location: 'هرمزگان، بندرعباس',
      slug: 1
    },
    {
      id: 7,
      image: require('assets/img/3.jpg'),
      title: 'آغاز ساخت دو فروند کشتی تانکر چند منظوره',
      date: '12-بهمن-1401',
      location: 'هرمزگان، بندرعباس',
      slug: 1
    },
    {
      id: 8,
      image: require('assets/img/1.jpg'),
      title: 'آغاز ساخت دو فروند کشتی تانکر چند منظوره',
      date: '12-بهمن-1401',
      location: 'هرمزگان، بندرعباس',
      slug: 1
    }
  ]

  const renderPosts = ({ item }) => {
    return (
      <Button
        onPress={() => navigator(navigation, 'AdvertiseSingle', { slug: item.slug })}
        key={item.id}
        style={styles.itemContainer}>
        <Shadow viewStyle={styles.shadowStyle} startColor="rgba(0,0,0,0.05)">
          <Image style={styles.itemImage} source={item.image} />
          <BlackText size={9} style={styles.statusN}>
            نمایشگاه آنلاین
          </BlackText>
          <BlackText size={9} style={styles.statusF}>
            فوری
          </BlackText>
          <Section style={styles.contentWrapper}>
            {/* <Image style={styles.itemImage} source={{ uri: picture }} /> */}
            <Section style={styles.leftSection}>
              <BlackText style={commonStyles.mb20} numberOfLines={3}>
                {item.title}
              </BlackText>
              <Section style={styles.dateInfoContainer}>
                <Section style={styles.itemDateContainer}>
                  <Image source={CLOCK} style={{ ...styles.dateIcon }} />
                  {/* <GrayText size={9}>{dateFormater({DATA.date})}</GrayText> */}
                  <GrayText size={9}>1 ساعت پیش</GrayText>
                </Section>
                <Section style={styles.itemDateContainer}>
                  <Image source={LOCATION} style={{ ...styles.dateIcon }} />
                  {/* <GrayText size={9}>{dateFormater({DATA.date})}</GrayText> */}
                  <GrayText size={9}>بوشهر، جم</GrayText>
                </Section>
              </Section>
            </Section>
          </Section>
        </Shadow>
      </Button>
    )
  }

  return (
    <Section style={styles.container}>
      <Header setShowFilterModal={setShowFilterModal} title="آرشیو آگهی ها" leftIcon="filter" />
      <FilterModal visible={showFilterModal} setShowFilterModal={setShowFilterModal} />
      <Section style={styles.searchContainer}>
        <AppInput
          placeholder="جستجو کنید..."
          LeftElement={searchIcon}
          borderColor={EStyleSheet.value('$bg.gray')}
          style={{ backgroundColor: 'rgba(0,0,0,0)' }}
        />
      </Section>
      <Section style={styles.scrollContainer}>
        <ScrollView horizontal={true} contentContainerStyle={{}} showsVerticalScrollIndicator={false}>
          <FlatList data={DATA} renderItem={renderPosts} numColumns={2} />
          {/* <Pagination visible={paginationVisibility} /> */}
        </ScrollView>
      </Section>
    </Section>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: appHeight - 235,
    // paddingBottom: 20,
    backgroundColor: EStyleSheet.value('$bg.white')
  },
  scrollContainer: {
    width: '100%',
    heigth: appHeight,
    alignItems: 'center',
    backgroundColor: EStyleSheet.value('$bg.white')
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
  itemContainer: {
    marginBottom: 4,
    borderRadius: 6,
    width: '47%',
    alignContent: 'stretch',
    justifyContent: 'center',
    margin: 5
  },
  shadowStyle: {
    width: '100%',
    backgroundColor: EStyleSheet.value('$bg.white'),
    borderRadius: EStyleSheet.value('$d.small'),
    paddingLeft: 5
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemImage: {
    width: '90%',
    height: appHeight * 0.2,
    alignSelf: 'center',
    resizeMode: 'cover',
    borderRadius: 6,
    marginTop: EStyleSheet.value('$d.small'),
    marginBottom: EStyleSheet.value('$d.small'),
    marginRight: 5
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
    left: 15
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
    right: 15
  },
  leftSection: {
    padding: EStyleSheet.value('$d.small'),
    paddingRight: EStyleSheet.value('$d.small') * 2,
    flex: 1,
    justifyContent: 'space-between'
  },
  calendarIcon: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    marginRight: EStyleSheet.value('$d.small'),
    tintColor: EStyleSheet.value('$text.darkBlue')
  },
  dateInfoContainer: {
    width: '100%'
  },
  itemDateContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  dateIcon: {
    width: 12,
    height: 12,
    marginRight: 5,
    tintColor: EStyleSheet.value('$text.gray')
  },
  arrowIcon: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    paddingRight: EStyleSheet.value('$d.small') * 2,
    opacity: 0.4
  }
})
