import { DarkTheme, NavigationContainer } from "@react-navigation/native"
import React, { useEffect, useLayoutEffect, useState, Component } from "react"
import { enableScreens } from "react-native-screens"
import { ScreenNames } from '../../general/constants/ScreenNames'
import { createStackNavigator } from '@react-navigation/stack';
import BookScreen from '../screens/interfaces/user/book/BookScreen'
import CalendarScreen from '../screens/interfaces/user/calendar/CalendarScreen'
import UserSettingScreen from '../screens/interfaces/user/userSetting/UserSettingScreen'
import UserProfileScreen from '../screens/interfaces/user/userProfile/UserProfileScreen'
import { Image } from 'react-native'
import { Assets } from "../../assets/Assets";

enableScreens()

const Stack = createStackNavigator()

const UserProfileNavigator = ({ route }) => {

    const headerBackImage = () => {
        return (
            <Image source={Assets.Icons.ic_backArrow} style={{ width: 10, height: 17.32, resizeMode: 'contain' }} />
        )
    }

    return (
        <Stack.Navigator
            initialRouteName={ScreenNames.userProfileScreen}
            screenOptions={{
                headerShown: false,
                headerTitleAlign: 'center',
                headerBackImage
            }}
        >
            <Stack.Screen
                name={ScreenNames.userProfileScreen}
                component={UserProfileScreen}
                initialParams={{
                    userId: route.params.userId
                }}
            />

            <Stack.Screen
                name={ScreenNames.bookScreen}
                component={BookScreen}
                options={{
                    headerShown: true,
                    headerTitle: ''
                }}
            />

            <Stack.Screen
                name={ScreenNames.calendarScreen}
                component={CalendarScreen}
                options={{
                    headerShown: true
                }}
            />
            <Stack.Screen
                name={ScreenNames.userSettingScreen}
                component={UserSettingScreen}
                options={{
                    headerShown: true
                }}
            />
        </Stack.Navigator>
    )
}

export default UserProfileNavigator;