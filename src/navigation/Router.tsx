import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from 'pages'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, Text } from 'tags'

const Stack = createNativeStackNavigator()

const screenOptions = {
  headerShown: false
}

function Stacks() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

const tabsScreenOptions = {
  headerShown: false,
  tabBarActiveTintColor: '#fe4723',
  tabBarInactiveTintColor: '#2f3279',
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
      {/* <Tab.Screen
        name="Splash"
        component={Splash}
        options={{
          tabBarStyle: { display: 'none' },
          tabBarItemStyle: { display: 'none' }
        }}
      /> */}
      <Tab.Screen
        name="Stacks"
        component={Stacks}
        options={{
          tabBarLabel: () => <Text style={{ color: '#000', fontSize: 11 }}>خانه</Text>,
          tabBarIcon: ({ size, color }) => {
            return (
              <Image
                style={{ width: size * 0.7, height: size * 0.7, tintColor: color }}
                source={require('assets/icons/005-home.png')}
              />
            )
          }
        }}
      />
    </Tab.Navigator>
  )
}
