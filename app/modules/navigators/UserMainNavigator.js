import { DarkTheme, NavigationContainer } from "@react-navigation/native"
import React, { useEffect, useLayoutEffect, useState, Component } from "react"
import { enableScreens } from "react-native-screens"
import { ScreenNames } from '../../general/constants/ScreenNames'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import UserHomeScreen from '../screens/interfaces/user/userHome/UserHomeScreen'
import UserLibrarianScreen from '../screens/interfaces/user/userLibrarian/UserLibrarianScreen'
import UserQRScreen from '../screens/interfaces/user/userQR/UserQRScreen'
import UserProfileScreen from '../screens/interfaces/user/userProfile/UserProfileScreen'
import UserHomeNavigator from './UserHomeNavigator'
import { Assets } from '../../assets/Assets'
import { Image } from 'react-native'

enableScreens()
const Tab = createBottomTabNavigator()

const UserMainNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName={ScreenNames.userHomeNavigator}
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    height: 90,
                    position: 'absolute'
                },
                tabBarInactiveTintColor: Assets.Colors.text,
                tabBarActiveTintColor: Assets.Colors.mainColor
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
                name={ScreenNames.userLibrarianScreen}
                component={UserLibrarianScreen}
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
                name={ScreenNames.userProfileScreen}
                component={UserProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (<Image source={focused ? Assets.Icons.ic_activeProfile : Assets.Icons.ic_inactiveProfile} style={{ width: 22.17, height: 28, resizeMode: 'contain' }} />),
                    tabBarLabel: 'Tôi'
                }}
            />
        </Tab.Navigator>
    )
}

export default UserMainNavigator