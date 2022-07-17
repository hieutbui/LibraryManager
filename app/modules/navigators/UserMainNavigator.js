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

enableScreens()
const Tab = createBottomTabNavigator()

const UserMainNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName={ScreenNames.userHomeNavigator}
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen
                name={ScreenNames.userHomeNavigator}
                component={UserHomeNavigator}
            />
            <Tab.Screen
                name={ScreenNames.userLibrarianScreen}
                component={UserLibrarianScreen}
            />
            <Tab.Screen
                name={ScreenNames.userQRScreen}
                component={UserQRScreen}
            />
            <Tab.Screen
                name={ScreenNames.userProfileScreen}
                component={UserProfileScreen}
            />
        </Tab.Navigator>
    )
}

export default UserMainNavigator