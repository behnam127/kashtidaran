import React, { useEffect, useState } from 'react'
import { AppState, AppStateStatus, Dimensions, Platform, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider, onlineManager, focusManager } from '@tanstack/react-query'
import NetInfo from '@react-native-community/netinfo'
import EStyleSheet from 'react-native-extended-stylesheet'
import Router from 'navigation/Router'
import { ErrorModal, LoadingModal } from 'components'
import { darkTheme, lightTheme } from 'configs'
import SupportModal from 'components/modals/SupportModal'

const queryClient = new QueryClient()

const { width: WINDOW_WIDTH } = Dimensions.get('window')

const themeLight = lightTheme(WINDOW_WIDTH)
const themeDark = darkTheme(WINDOW_WIDTH)

type UserDataContextType = {
  userData: any
  setUserData: Function
}

type AppSettingContextType = {
  appSetting: any
  setAppSetting: Function
}

type GlobalModalsContextType = {
  globalModals?: { showOfflineModal: boolean; showErrorModal: boolean; showLoadingModal: boolean }
  setGlobalModals?: Function
  setErrorMessage?: Function
  errorModalAction?: () => () => any
}

export const ThemeContext = React.createContext({})
export const UserDataContext = React.createContext<UserDataContextType>({ userData: {}, setUserData: () => {} })
export const AppSettingContext = React.createContext<AppSettingContextType>({ appSetting: {}, setAppSetting: () => {} })
export const GlobalModalsContext = React.createContext<GlobalModalsContextType>({})

const ThemeProvider = ThemeContext.Provider
const UserDataProvider = UserDataContext.Provider
const AppSettingProvider = AppSettingContext.Provider
const GlobalModalsProvider = GlobalModalsContext.Provider

const App = ({ navigation }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [userData, setUserData] = useState({})
  const [appSetting, setAppSetting] = useState({})
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [errorModalAction, setErrorModalAction] = useState(() => () => {})
  const [globalModals, setGlobalModals] = useState<any>({
    showOfflineModal: false,
    showErrorModal: false,
    showLoadingModal: false,
    showSupportModal: false
  })

  const appTheme = theme === 'light' ? themeLight : themeDark

  EStyleSheet.build(appTheme)

  onlineManager.setEventListener((setOnline) => {
    return NetInfo.addEventListener((state) => {
      setOnline(!!state.isConnected)
    })
  })

  function onAppStateChange(status: AppStateStatus) {
    if (Platform.OS !== 'web') {
      focusManager.setFocused(status === 'active')
    }
  }

  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange)
    return () => subscription.remove()
  }, [])

  const globalModalsValue = { globalModals, setGlobalModals, setErrorMessage, setErrorModalAction, errorModalAction }

  return (
    <GlobalModalsProvider value={globalModalsValue}>
      <UserDataProvider value={{ userData, setUserData }}>
        <AppSettingProvider value={{ appSetting, setAppSetting }}>
          <ThemeProvider value={{ theme, setTheme }}>
            <QueryClientProvider client={queryClient}>
              <NavigationContainer>
                <StatusBar hidden />
                <Router />
                <ErrorModal
                  errorModalAction={errorModalAction}
                  message={errorMessage}
                  visible={globalModals.showErrorModal}
                />
                <LoadingModal visible={globalModals.showLoadingModal} />
                <SupportModal navigation={navigation} visible={globalModals.showSupportModal} />
              </NavigationContainer>
            </QueryClientProvider>
          </ThemeProvider>
        </AppSettingProvider>
      </UserDataProvider>
    </GlobalModalsProvider>
  )
}

export default App
