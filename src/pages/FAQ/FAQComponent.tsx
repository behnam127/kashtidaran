import { SafeAreaView, Dimensions, Animated, FlatList } from 'react-native'
import styles from './styles'
import React, { Component } from 'react'
import { Button, Section, Text, Image } from 'tags'
import { BlackText, GrayText } from 'components'

const htmlFile = require('')
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export default class FAQComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subItems: null,
      allData: null,

      id: null,
      parent_id: null,
      model: null,
      show_form: null,
      question: null,
      answer: null,
      position: null,
      hits: null,
      qu_text: null,
      qu_btn: null,

      message: null,

      answerDisplay: 'none',
      borderRadus0: 5,

      fadeAnim: new Animated.Value(0),

      arrowDeg: '90deg',

      spinerVisiblity: true,

      activeToggle: null,

      sub_item_ID: null,
      sub_parent_id: null
    }
  }

  componentDidMount() {
    this._isMounted = true
    console.log('============listData========================')
    console.log(this.props.listData)
    console.log('====================================')
  }

  //////////////////////////////////////////////// Functions ////////////////////////////////////////////////////

  fadeIn = () => {
    Animated.timing(this.state.fadeAnim, {
      toValue: screenWidth,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

  fadeOut = () => {
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

  toggleDown() {
    if (this.state.answerDisplay == 'none') {
      this.setState({ answerDisplay: 'flex', borderRadus0: 0 })
      this.fadeIn()
    } else {
      this.setState({ answerDisplay: 'none', borderRadus0: 5 })
      this.fadeOut()
    }
  }

  ///////////////////////////////////////////////// Renders /////////////////////////////////////////////////////

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          overScrollMode={'always'}
          data={this.props.listData}
          style={{ width: '100%', height: 500 }}
          showsVerticalScrollIndicator={false}
          renderItem={this.renderSubitems.bind(this)}
          listKey={(item, index) => index.toString()}
        />
      </SafeAreaView>
    )
  }

  renderSubitems({ item, index }) {
    const html = item.answer
    return (
      <>
        <Section
          style={{
            ...styles.subItems,
            borderBottomLeftRadius: item.id == this.state.activeToggle && this.state.answerDisplay == 'flex' ? 0 : 15,
            borderBottomRightRadius: item.id == this.state.activeToggle && this.state.answerDisplay == 'flex' ? 0 : 15,
            marginBottom: this.state.answerDisplay == 'flex' ? 0 : 15
          }}>
          <Section style={styles.answerContainer}>
            <Button
              onPressIn={() => {
                this.setState({
                  answerDisplay:
                    item.id == this.state.activeToggle && this.state.answerDisplay == 'flex' ? 'flex' : 'none',

                  sub_parent_id: item.id
                })
              }}
              onPress={() => {
                this.toggleDown()

                this.setState({
                  sub_parent_id: item.id,
                  answer: html,
                  activeToggle: item.id,
                  answerDisplay: this.state.answerDisplay == 'flex' ? 'none' : 'flex'
                })
              }}
              style={styles.arrowDownBtn}>
              <Image
                style={{
                  ...styles.arrowDown
                }}
                source={
                  item.id == this.state.activeToggle && this.state.answerDisplay == 'flex'
                    ? require('assets/icon/018-angle-up.png')
                    : require('assets/icon/020-angle-down.png')
                }
              />
            </Button>
            <BlackText size={12} style={styles.questionText}>
              {item.title}
            </BlackText>
          </Section>
        </Section>
        <Animated.View
          style={{
            ...styles.answerText,
            display: item.id == this.state.activeToggle ? this.state.answerDisplay : 'none',
            opacity: this.state.fadeAnim
          }}>
          {/* <RenderHtml contentWidth={screenWidth} source={{ html }} /> */}
          <GrayText>{item.excerpt}</GrayText>
        </Animated.View>
      </>
    )
  }
}
