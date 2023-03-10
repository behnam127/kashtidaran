import { StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Image, Section, Text } from 'tags'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from 'components/Header'
import { commonStyles } from 'commonStyles'
import EStyleSheet from 'react-native-extended-stylesheet'
import { AppInput, FullWidthButton, GrayText } from 'components'
import FAQComponent from './FAQComponent'
import { navigator } from 'services/navigator'
import { callApi } from 'services'
import { FlatList } from 'react-native-gesture-handler'
import { useLoading } from 'hooks/useLoading'

const SEARCH = require('assets/icons/search.png')

const screenHeight = Dimensions.get('window').height

const FAQList = ({ navigation }) => {
  const [BtnKey, setBtnKey] = useState(0)
  const { showLoading, hideLoading } = useLoading()
  const [tabs, setTabs] = useState([
    {
      id: 1,
      title: 'ثبت آگهی'
    },
    {
      id: 2,
      title: 'پرداخت'
    },
    {
      id: 3,
      title: 'شرایط و قوانین'
    },
    {
      id: 4,
      title: 'آموزش'
    }
  ])
  const [list, setList] = useState([
    {
      id: 1,
      title: 'سوال',
      excerpt: 'جواب'
    },
    {
      id: 2,
      title: 'سوال',
      excerpt: 'جواب'
    },
    {
      id: 3,
      title: 'سوال',
      excerpt: 'جواب'
    },
    {
      id: 4,
      title: 'سوال',
      excerpt: 'جواب'
    }
  ])

  useEffect(() => {
    // getTabs()
  }, [])

  // const getTabs = async () => {
  //   try {
  //     const tabsUrl = `https://blog.sarmayex.com/api/v1/knowledges/app_faq`
  //     const tabsRequestConfig = {
  //       method: 'get',
  //       url: tabsUrl,
  //       timeout: 0,
  //       headers: {
  //         Accept: 'application/json'
  //       }
  //     }
  //     showLoading()
  //     const tabsResponse = await callApi(tabsRequestConfig)
  //     const { message, status } = tabsResponse

  //     console.log('===========tabsResponse=========================')
  //     console.log(tabsResponse)
  //     console.log('====================================')
  //     if (status == 'success') {
  //       setTabs(tabsResponse.knowledge.folders)
  //       getQuestions(tabsResponse.knowledge.folders[0].slug)
  //     }
  //   } catch (error) {
  //     hideLoading()
  //   }
  // }

  // const getQuestions = async (slug) => {
  //   try {
  //     const questionsUrl = `https://blog.sarmayex.com/api/v1/knowledges/1faq/folders/${slug}`
  //     const questionsRequestConfig = {
  //       method: 'get',
  //       url: questionsUrl,
  //       timeout: 0,
  //       headers: {
  //         Accept: 'application/json'
  //       }
  //     }
  //     console.log('============questionsRequestConfig========================')
  //     console.log(questionsRequestConfig)
  //     console.log('====================================')
  //     showLoading()
  //     const questionsResponse = await callApi(questionsRequestConfig)
  //     const { status } = questionsResponse
  //     hideLoading()
  //     console.log('===========questionsResponse=========================')
  //     console.log(questionsResponse)
  //     console.log('====================================')
  //     if (status == 'success') {
  //       setList(questionsResponse.solution_folder.solutions)
  //     }
  //   } catch (error) {}
  // }

  const searchIcon = () => {
    return <Image style={styles.icon} source={SEARCH} />
  }

  const renderTabs = ({ item, index }) => {
    return (
      <Button
        onPress={() => {
          setBtnKey(index)
          // getQuestions(item.slug)
        }}
        style={{
          ...styles.tabBtn,
          elevation: BtnKey == index ? 10 : 0,
          backgroundColor: BtnKey == index ? EStyleSheet.value('$bg.darkBlue') : 'rgba(0,0,0,0)'
        }}>
        <GrayText
          style={{ color: BtnKey == index ? EStyleSheet.value('$text.white') : EStyleSheet.value('$text.gray') }}>
          {item.title}
        </GrayText>
      </Button>
    )
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header title="قوانین و مقررات" leftIcon="bell" />
      <Section style={styles.container}>
        <Section style={styles.searchContainer}>
          <AppInput
            placeholder="جستجوی شماره آگهی..."
            LeftElement={searchIcon}
            borderColor={EStyleSheet.value('$bg.gray')}
            style={{ backgroundColor: 'rgba(0,0,0,0)' }}
          />
        </Section>
        <FlatList
          contentContainerStyle={{ width: '100%', alignSelf: 'flex-end' }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={tabs}
          renderItem={renderTabs}
          keyExtractor={(item, index) => index.toString()}
        />
      </Section>
      <Section style={styles.listContainer}>
        <FAQComponent listData={list} />
      </Section>
      {/* <Section style={styles.fullWidthBtnContainer}>
        <FullWidthButton
          onPress={() => navigator(navigation, 'FAQSingle')}
          state="activeLightRed"
          text="ثبت سوال جدید"></FullWidthButton>
      </Section> */}
    </SafeAreaView>
  )
}

export { FAQList }

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: EStyleSheet.value('$bg.white')
  },
  container: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'flex-end'
  },
  tabContainer: {
    marginBottom: 5
  },
  tabBtn: {
    padding: 10,
    borderRadius: 5,
    margin: 2,
    shadowColor: EStyleSheet.value('$bg.darkBlue')
  },
  tabBtnActive: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: EStyleSheet.value('$border.light')
  },

  icon: {
    width: 25,
    height: 25,
    tintColor: EStyleSheet.value('$border.dark')
  },
  listContainer: {
    width: '100%',
    height: screenHeight - 350
  },
  fullWidthBtnContainer: {
    width: '80%',
    marginTop: 10,
    alignSelf: 'center'
  },
  search: {
    marginBottom: 20
  },
  searchContainer: {
    width: '100%',
    height: 55,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: EStyleSheet.value('$bg.gray')
  }
})
