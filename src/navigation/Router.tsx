import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Blog, BlogSingle, HomeScreen, Login, LoginOtp, Splash, UserInfo } from 'pages'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, Section, Text } from 'tags'

const Stack = createNativeStackNavigator()

const screenOptions = {
  headerShown: false
}

function Stacks() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Blog" component={Blog} />
      <Stack.Screen name="BlogSingle" component={BlogSingle} />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

const tabsScreenOptions = {
  headerShown: false,
  tabBarActiveTintColor: '#5aa6d8',
  tabBarInactiveTintColor: '#d4d4d4',
  showIcon: true,
  tabBarStyle: {
    backgroundColor: '#fff',
    height: 60,
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowRadius: 10,
    elevation: 15
  },
  tabBarItemStyle: {
    borderRadius: 10,
    marginBottom: 14
  }
}

export default function Router() {
  return (
    <Tab.Navigator screenOptions={tabsScreenOptions}>
      <Tab.Screen
        name="Splash"
        component={Splash}
        options={{
          tabBarStyle: { display: 'none' },
          tabBarItemStyle: { display: 'none' }
        }}
      />
      <Tab.Screen
        name="Stacks"
        component={Stacks}
        options={{
          tabBarLabel: () => <Text style={{ display: 'none' }} />,
          tabBarIcon: ({ size, color }) => {
            return (
              <Image
                style={{ width: size * 1, height: size * 1, tintColor: color }}
                source={require('assets/icon/007-home.png')}
              />
            )
          }
        }}
      />
      <Tab.Screen
        name="Commercial"
        component={Stacks}
        options={{
          tabBarLabel: () => <Text style={{ display: 'none' }} />,
          tabBarIcon: ({ size, color }) => {
            return (
              <Image
                style={{ width: size * 1, height: size * 1, tintColor: color }}
                source={require('assets/icon/010-grid.png')}
              />
            )
          }
        }}
      />
      <Tab.Screen
        name="CreatNew"
        component={Stacks}
        options={{
          tabBarLabel: () => <Text style={{ color: '#000', fontSize: 11 }}>ثبت آگهی جدید</Text>,
          tabBarIcon: ({ size, color }) => {
            return (
              <Section
                style={{
                  width: size * 2,
                  height: size * 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 30,
                  backgroundColor: '#5aa6d8',
                  borderRadius: 15,
                  padding: 10,
                  elevation: 10,
                  shadowColor: '#5aa6d8'
                }}>
                <Image
                  style={{
                    width: size * 1,
                    height: size * 1,
                    tintColor: '#fff'
                  }}
                  source={require('assets/icon/006-plus.png')}
                />
              </Section>
            )
          }
        }}
      />
      <Tab.Screen
        name="Search"
        component={Stacks}
        options={{
          tabBarLabel: () => <Text style={{ display: 'none' }} />,
          tabBarIcon: ({ size, color }) => {
            return (
              <Image
                style={{ width: size * 1, height: size * 1, tintColor: color }}
                source={require('assets/icon/008-search.png')}
              />
            )
          }
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Stacks}
        options={{
          tabBarLabel: () => <Text style={{ display: 'none' }} />,
          tabBarIcon: ({ size, color }) => {
            return (
              <Image
                style={{ width: size * 1, height: size * 1, tintColor: color }}
                source={require('assets/icon/009-user-avatar.png')}
              />
            )
          }
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarStyle: { display: 'none' },
          tabBarItemStyle: { display: 'none' }
        }}
      />
      <Tab.Screen
        name="LoginOtp"
        component={LoginOtp}
        options={{
          tabBarStyle: { display: 'none' },
          tabBarItemStyle: { display: 'none' }
        }}
      />
      <Tab.Screen
        name="UserInfo"
        component={UserInfo}
        options={{
          tabBarStyle: { display: 'none' },
          tabBarItemStyle: { display: 'none' }
        }}
      />
    </Tab.Navigator>
  )
}
