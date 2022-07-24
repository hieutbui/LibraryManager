import { DarkTheme, NavigationContainer } from "@react-navigation/native"
import React, { useEffect, useLayoutEffect, useState, Component } from "react"
import { enableScreens } from "react-native-screens"
import { ScreenNames } from '../../general/constants/ScreenNames'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import UserHomeScreen from '../screens/interfaces/user/userHome/UserHomeScreen'
import UserLibrarianScreen from '../screens/interfaces/user/userLibrarian/UserLibrarianScreen'
import UserQRScreen from '../screens/interfaces/user/userQR/UserQRScreen'
import UserHomeNavigator from './UserHomeNavigator'
import { Assets } from '../../assets/Assets'
import { Image } from 'react-native'
import UserLibrarianNavigator from './UserLibrarianNavigator'
import UserProfileNavigator from './UserProfileNavigator'

enableScreens()
const Tab = createBottomTabNavigator()

const UserMainNavigator = ({ route }) => {

    return (
        <Tab.Navigator
            initialRouteName={ScreenNames.userHomeNavigator}
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    height: 90,
                    position: 'absolute',
                },
                tabBarInactiveTintColor: Assets.Colors.text,
                tabBarActiveTintColor: Assets.Colors.mainColor,
                tabBarLabelStyle: {
                    marginBottom: 8,
                },
                tabBarAllowFontScaling: true,
            }}
        >
            <Tab.Screen
                name={ScreenNames.userHomeNavigator}
                component={UserHomeNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (<Image source={focused ? Assets.Icons.ic_activeHome : Assets.Icons.ic_inactiveHome} style={{ width: 28.03, height: 28, resizeMode: 'contain' }} />),
                    tabBarLabel: 'Trang chủ'
                }}
            />
            <Tab.Screen
                name={ScreenNames.userLibrarianNavigator}
                component={UserLibrarianNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (<Image source={focused ? Assets.Icons.ic_activeLibrarian : Assets.Icons.ic_inactiveLibrarian} style={{ width: 27.84, height: 28, resizeMode: 'contain' }} />),
                    tabBarLabel: 'Thư viện'
                }}
            />
            <Tab.Screen
                name={ScreenNames.userQRScreen}
                component={UserQRScreen}
                options={{
                    tabBarIcon: ({ focused }) => (<Image source={Assets.Icons.ic_scanQR} style={{ width: 28, height: 28, resizeMode: 'contain', tintColor: focused ? Assets.Colors.mainColor : Assets.Colors.text }} />),
                    tabBarLabel: 'Quét mã QR',
                }}
            />
            <Tab.Screen
                name={ScreenNames.userProfileNavigator}
                component={UserProfileNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (<Image source={focused ? Assets.Icons.ic_activeProfile : Assets.Icons.ic_inactiveProfile} style={{ width: 22.17, height: 28, resizeMode: 'contain' }} />),
                    tabBarLabel: 'Tôi'
                }}
                initialParams={{
                    userId: route.params.userId,
                }}
            />
        </Tab.Navigator>
    )
}

export default UserMainNavigator