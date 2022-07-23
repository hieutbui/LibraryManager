import { DarkTheme, NavigationContainer } from "@react-navigation/native"
import React, { useEffect, useLayoutEffect, useState, Component } from "react"
import { enableScreens } from "react-native-screens"
import { ScreenNames } from '../../general/constants/ScreenNames'
import { createStackNavigator } from '@react-navigation/stack';
import BookScreen from '../screens/interfaces/user/book/BookScreen'
import CalendarScreen from '../screens/interfaces/user/calendar/CalendarScreen'
import UserSettingScreen from '../screens/interfaces/user/userSetting/UserSettingScreen'
import UserProfileScreen from '../screens/interfaces/user/userProfile/UserProfileScreen'

enableScreens()

const Stack = createStackNavigator()

const UserProfileNavigator = ({ route }) => {
    return (
        <Stack.Navigator
            initialRouteName={ScreenNames.userProfileScreen}
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name={ScreenNames.userProfileScreen}
                component={UserProfileScreen}
                initialParams={{
                    userName: route.params.userName
                }}
            />

            <Stack.Screen
                name={ScreenNames.bookScreen}
                component={BookScreen}
            />

            <Stack.Screen
                name={ScreenNames.calendarScreen}
                component={CalendarScreen}
            />
            <Stack.Screen
                name={ScreenNames.userSettingScreen}
                component={UserSettingScreen}
            />
        </Stack.Navigator>
    )
}

export default UserProfileNavigator;