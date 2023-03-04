export const lightTheme = (WINDOW_WIDTH: number) => ({
  $theme: 'light',
  $rem: WINDOW_WIDTH > 340 ? 18 : 16,
  $d: {
    small: 7,
    medium: 14,
    large: 21
  },
  $bg: {
    darkBlue: '#5aa6d8',
    darkBlueAlpha: '#3e98d4',
    lightBlue: '#ebf2f8',
    white: '#fff',
    whiteWithOpacity: 'rgba(256,256,256,0.5)',
    gray: '#f7f7f7',
    red: '#fe4823',
    green: '#38ba7b',
    yellow: '#ffa800',
    lightRed: '#fdc3c3',
    lightYellow: '#ffe5b2',
    lightGreen: '#c4edd9',
    veryLightRed: '#fff9f9',
    veryLightGreen: '#f7fdfa',
    veryLightYellow: '#fffcf7',
    darkGray: 'rgba(0,0,0,0.05)',
    black: '#000',
    blackHulfOpacity: 'rgba(0,0,0,0.5)',
    lightGrayWithOpacity: 'rgba(191,191,191,0.9)',
    veryLightGrayWithOpacity: 'rgba(191,191,191,0.2)'
  },
  $text: {
    darkBlue: '#5aa6d8',
    darkBlueAlpha: '#3e98d4',
    darkGray: '#626262',
    black: '#4c4c4c',
    lightGray: '#dadada',
    gray: 'rgba(0, 0, 0, 0.4)',
    red: '#fe4823',
    lightRed: '#fd6564',
    white: '#fff',
    green: '#38ba7b',
    lightGreen: '#c4edd9',
    yellow: '#ffa800'
  },
  $border: {
    darkBlueAlpha: '#3e98d4',
    light: '#f2f2f2',
    medium: '#e5e5e5e5',
    dark: '#dcdcdc',
    red: '#fe4823',
    lightRed: '#fdc3c3',
    gray: '#6b7280',
    green: '#38ba7b',
    lightGreen: '#c4edd9',
    yellow: '#ffa800',
    lightYellow: '#ffe5b2',
    veryLightRed: '#fff9f9',
    veryLightGreen: '#f7fdfa',
    veryLightYellow: '#fffcf7',
    veryLightGrayWithOpacity: 'rgba(191,191,191,0.2)'
  },
  $darkBlue: '#5aa6d8',
  $darkBlueAlpha: '#3e98d4',
  $green: '#3bb97a',
  $yellow: '#ffa800',
  $red: '#fe4823',
  $darkGray: '#494949',
  $shadow: '#999',
  $ccc: '#ccc'
})
// #ffa800
// #3bb97a
// #494949
// #b2b2b2
// #fff1ee
