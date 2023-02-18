export const darkTheme = (WINDOW_WIDTH: number) => ({
  $theme: 'dark',
  $rem: WINDOW_WIDTH > 340 ? 18 : 16,
  $bg: {
    darkBlue: '#1c1f69',
    lightBlue: '#ededf3',
    white: '#000',
    gray: '#f5f5f5',
    red: '#fe4723'
  },
  $text: {
    darkBlue: '#1c1f69',
    darkGray: '#626262',
    black: '#333',
    gray: '#4c000000',
    red: '#fd6564'
  },
  $border: {
    light: '#f2f2f2',
    medium: '#e5e5e5e5',
    dark: '#dcdcdc',
    red: '#ffeeee',
    gray: '#9ca3af'
  },
  $shadow: '#19000000',
  $ccc: '#ccc'
})
