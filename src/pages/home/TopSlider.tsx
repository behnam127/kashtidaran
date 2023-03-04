import { Animated, Dimensions, FlatList, StyleSheet } from 'react-native'
import { Image, Section } from 'tags'
import React, { useEffect, useState } from 'react'
import { serverResponseMessageHandler } from 'services/serverResponseMessageHandler'
import { callApi } from 'services'
import { defaultErrorMessage } from 'configs'
import { Skeleton } from 'components/skeleton'
import EStyleSheet from 'react-native-extended-stylesheet'
import { ExpandingDot } from 'react-native-animated-pagination-dots'

const appWidth = Dimensions.get('window').width

const TopSlider = () => {
  const [errorText, setErrorText] = useState<string>('')
  //   const [DATA, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [index, setIndex] = useState(0)

  const renderSlider = ({ item }) => {
    return (
      <Section style={styles.itemContainer}>
        {/* <Image style={styles.itemImage} source={{ uri: item.image }} /> */}
        <Image style={styles.itemImage} source={item.image} />
      </Section>
    )
  }

  //   useEffect(() => {
  //     getHomeSlider()
  //   }, [])

  //   const getHomeSlider = async () => {
  //     try {
  //       const HomeSliderUrl = `https://blog.sarmayex.com/api/v1/sliders/app_slider`
  //       const HomeSliderRequestConfig = {
  //         method: 'get',
  //         url: HomeSliderUrl,
  //         timeout: 0,
  //         headers: {
  //           Accept: 'application/json'
  //         }
  //       }
  //       const HomeSliderResponse = await callApi(HomeSliderRequestConfig)
  //       const { message, status } = HomeSliderResponse

  //       if (status == 200) {
  //         setLoading(false)
  //         setData(HomeSliderResponse.slider.sliderItems)
  //       }

  //       const errorMessage = serverResponseMessageHandler(message)
  //       setErrorText(errorMessage)
  //     } catch (error) {
  //       setErrorText(defaultErrorMessage)
  //     }
  //   }

  // const flatListRef = null
  // const slideToIndex = (i) => {
  //   flatListRef.scrollToIndex({ animated: true, index: i })
  // }

  const data = [
    {
      id: 1,
      image: require('assets/img/4.png')
    },
    {
      id: 2,
      image: require('assets/img/2.jpg')
    },
    {
      id: 3,
      image: require('assets/img/3.jpg')
    },
    {
      id: 4,
      image: require('assets/img/1.jpg')
    }
  ]

  const scrollX = React.useRef(new Animated.Value(0)).current

  return (
    <Section style={{ ...styles.container }}>
      <Skeleton display={false}>
        <Section style={styles.skeletonCricle} />
        <Section style={styles.skeletonLine} />
        <Section style={styles.skeletonLine} />
      </Skeleton>
      <FlatList
        pagingEnabled={true}
        snapToInterval={appWidth - 10}
        disableIntervalMomentum={true}
        snapToAlignment={'center'}
        overScrollMode={'always'}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={data}
        renderItem={renderSlider}
        keyExtractor={(item, index) => index}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false
        })}
      />
      <ExpandingDot
        data={data}
        expandingDotWidth={5}
        scrollX={scrollX}
        inActiveDotOpacity={0.4}
        dotStyle={{
          width: 0.1,
          height: 0.1,
          borderColor: '#fff',
          borderWidth: 3,
          borderRadius: 5,
          marginHorizontal: 2
        }}
        containerStyle={styles.dotsContainer}
      />
    </Section>
  )
}

export default TopSlider

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: appWidth,
    marginLeft: '0%'
  },
  itemContainer: {
    width: appWidth - 30,
    height: 150,
    marginLeft: 7,
    marginRight: 7,
    borderRadius: 10,
    resizeMode: 'cover',
    overflow: 'hidden'
  },
  itemImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover'
  },
  skeletonLine: {
    width: '70%',
    height: 20,
    backgroundColor: EStyleSheet.value('$bg.gray'),
    marginBottom: 20,
    borderRadius: 10,
    alignSelf: 'flex-start'
  },
  skeletonCricle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: EStyleSheet.value('$bg.gray'),
    alignSelf: 'flex-end',
    margin: 20
  },
  sliderDots: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: EStyleSheet.value('$bg.lightGrayWithOpacity')
  },
  dotsContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 15,
    backgroundColor: EStyleSheet.value('$bg.blackHulfOpacity'),
    borderRadius: 10,
    position: 'absolute',
    bottom: 15,
    left: 40,
    paddingLeft: 5,
    paddingRight: 5
  }
})
