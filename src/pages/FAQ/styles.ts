import { StyleSheet, Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: EStyleSheet.value('$bg.white'),
    alignItems: 'center',
    marginBottom: 20
  },

  subItems: {
    width: '90%',
    // height: 60,
    backgroundColor: EStyleSheet.value('$bg.white'),
    justifyContent: 'center',
    shadowColor: EStyleSheet.value('$shadow'),
    elevation: 10,
    //paddingVertical:10,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 15,
    alignSelf: 'center'
  },
  answerContainer: {
    flex: 1,
    width: '90%',
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: EStyleSheet.value('$shadow'),
    elevation: 10
  },
  arrowDownBtn: {
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  questionText: {
    color: EStyleSheet.value('$bg.black'),
    marginVertical: 2,
    width: '85%',
    textAlign: 'left'
  },
  answerText: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignSelf: 'center',
    backgroundColor: EStyleSheet.value('$bg.white'),
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    padding: 10,
    paddingEnd: 15,
    overflow: 'hidden',
    margintop: -10,
    shadowColor: EStyleSheet.value('$shadow'),
    elevation: 10
  },

  arrowDown: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: EStyleSheet.value('$border.dark')
  },
  fullWidthBtnContainer: {
    width: '80%',
    marginTop: 10,
    alignSelf: 'center'
  }
})
