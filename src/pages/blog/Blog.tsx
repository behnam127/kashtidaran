import React, { useEffect, useState } from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Button, Image, ScrollView, Section } from 'tags'
import { BlogItem } from './components/BlogItem'
import { Pagination } from 'components/Pagination'
import { callApi } from 'services'
import { Dimensions, StyleSheet } from 'react-native'
import { Shadow } from 'react-native-shadow-2'
import { AppInput, BlackText, GrayText } from 'components'
import { commonStyles } from 'commonStyles'
import { navigator } from 'services/navigator'
import { dateFormater } from 'services/dateFormatter'
import { useLoading } from 'hooks/useLoading'
import { Header } from 'components/Header'
import { useNavigation } from '@react-navigation/native'

const appHeight = Dimensions.get('window').height
const CALENDAR = require('assets/icon/025-calendar-date.png')
const AUTHOR = require('assets/icon/009-user-avatar.png')
const SEARCH = require('assets/icon/008-search.png')

export function Blog() {
  // const [DATA, setData] = useState([])
  const [paginationVisibility, setPaginationVisibility] = useState(false)
  const { showLoading, hideLoading } = useLoading()
  const navigation = useNavigation()

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
      title: '???????? ???????? ???? ?????????? ???????? ?????????? ?????? ????????????',
      date: '12-????????-1401',
      location: '???????????????? ????????????????'
    },
    {
      id: 2,
      image: require('assets/img/4.png'),
      title: '???????? ???????? ???? ?????????? ???????? ?????????? ?????? ????????????',
      date: '12-????????-1401',
      location: '???????????????? ????????????????'
    },
    {
      id: 3,
      image: require('assets/img/3.jpg'),
      title: '???????? ???????? ???? ?????????? ???????? ?????????? ?????? ????????????',
      date: '12-????????-1401',
      location: '???????????????? ????????????????'
    },
    {
      id: 4,
      image: require('assets/img/1.jpg'),
      title: '???????? ???????? ???? ?????????? ???????? ?????????? ?????? ????????????',
      date: '12-????????-1401',
      location: '???????????????? ????????????????'
    }
  ]

  const renderPosts = () => {
    return DATA.map((item) => {
      const title = item.title
      const picture = item.picture
      const date = item.date
      const slug = item.slug

      return (
        <Button
          onPress={() => navigator(navigation, 'BlogSingle', { slug })}
          key={item.id}
          style={styles.itemContainer}>
          <Shadow viewStyle={styles.shadowStyle} startColor="rgba(0,0,0,0.05)">
            <Image style={styles.itemImage} source={item.image} />
            <Section style={styles.contentWrapper}>
              {/* <Image style={styles.itemImage} source={{ uri: picture }} /> */}
              <Section style={styles.leftSection}>
                <BlackText style={commonStyles.mb20} numberOfLines={3}>
                  {title}
                </BlackText>
                <Section style={styles.dateInfoContainer}>
                  <Section style={styles.itemDateContainer}>
                    <Image source={AUTHOR} style={{ ...styles.dateIcon }} />
                    {/* <GrayText size={9}>{dateFormater({DATA.date})}</GrayText> */}
                    <GrayText size={9}>???????? ??????????</GrayText>
                  </Section>
                  <Section style={styles.itemDateContainer}>
                    <Image source={CALENDAR} style={{ ...styles.dateIcon }} />
                    {/* <GrayText size={9}>{dateFormater({DATA.date})}</GrayText> */}
                    <GrayText size={9}>12-????????-1401</GrayText>
                  </Section>
                </Section>
              </Section>
            </Section>
          </Shadow>
        </Button>
      )
    })
  }

  return (
    <Section style={styles.container}>
      <Header title="?????????? ?????????? ?? ????????????" />
      <Section style={styles.searchContainer}>
        <AppInput
          placeholder="?????????? ????????..."
          LeftElement={searchIcon}
          borderColor={EStyleSheet.value('$bg.gray')}
          style={{ backgroundColor: 'rgba(0,0,0,0)' }}
        />
      </Section>
      <Section style={styles.scrollContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {renderPosts()}
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
    backgroundColor: EStyleSheet.value('$bg.white')
  },
  scrollContainer: {
    backgroundColor: EStyleSheet.value('$bg.white'),
    heigth: appHeight,
    width: '100%'
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
    width: '90%',
    alignContent: 'stretch',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  shadowStyle: {
    width: '100%',
    backgroundColor: EStyleSheet.value('$bg.white'),
    borderRadius: EStyleSheet.value('$d.small'),
    paddingLeft: EStyleSheet.value('$d.small')
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
    marginRight: EStyleSheet.value('$d.medium')
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
    ...commonStyles.row,
    width: '100%'
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
  arrowIcon: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    paddingRight: EStyleSheet.value('$d.small') * 2,
    opacity: 0.4
  }
})
