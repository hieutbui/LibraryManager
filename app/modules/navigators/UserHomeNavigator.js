import { DarkTheme, NavigationContainer } from "@react-navigation/native"
import React, { useEffect, useLayoutEffect, useState, Component } from "react"
import { enableScreens } from "react-native-screens"
import { ScreenNames } from '../../general/constants/ScreenNames'
import { createStackNavigator } from '@react-navigation/stack';
import UserHomeScreen from '../screens/interfaces/user/userHome/UserHomeScreen'
import BookScreen from '../screens/interfaces/user/book/BookScreen'
import CategoryScreen from '../screens/interfaces/user/category/CategoryScreen'
import UserNotificationScreen from '../screens/interfaces/user/userNoti/UserNotificationScreen'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Assets } from '../../assets/Assets'
import { Font, FontSize, FontWeight } from '../../general/constants/FontStyle'
import * as RootNavigator from './RootNavigation'

enableScreens()

const Stack = createStackNavigator()

const UserHomeNavigator = () => {

    const gotoUserNotificationScreen = () => {
        RootNavigator.navigate(ScreenNames.userNotificationScreen)
    }

    const headerRight = () => {
        return (
            <TouchableOpacity style={styles.buttonNotification} onPress={gotoUserNotificationScreen}>
                <Image source={Assets.Icons.ic_notification} style={styles.icNotificationStyle} />
            </TouchableOpacity>
        )
    }

    const headerBackImage = () => {
        return (
            <Image source={Assets.Icons.ic_backArrow} style={{ width: 10, height: 17.32, resizeMode: 'contain' }} />
        )
    }

    const bookScreenHeaderRight = () => {
        return (
            <TouchableOpacity style={{ marginRight: 10 }}>
                <Image source={Assets.Icons.ic_heart} style={{ height: 18, width: 22, resizeMode: 'contain' }} />
            </TouchableOpacity>
        )
    }

    return (
        <Stack.Navigator
            initialRouteName={ScreenNames.userHomeScreen}
            screenOptions={{
                headerTitleAlign: 'center',
                headerTitleStyle: styles.headerTitleStyle,
                headerBackImage: headerBackImage
            }}
        >
            <Stack.Screen
                name={ScreenNames.userHomeScreen}
                component={UserHomeScreen}
                options={{
                    headerStyle: styles.headerStyle,
                    headerLeft: () => null,
                    headerRight: headerRight,
                }}
            />

            <Stack.Screen
                name={ScreenNames.bookScreen}
                component={BookScreen}
                options={{
                    headerStyle: styles.headerStyle,
                    headerTitle: '',
                    headerRight: bookScreenHeaderRight
                }}
            />

            <Stack.Screen
                name={ScreenNames.categoryScreen}
                component={CategoryScreen}
                options={{
                    headerStyle: styles.headerStyle,
                }}
            />

            <Stack.Screen
                name={ScreenNames.userNotificationScreen}
                component={UserNotificationScreen}
                options={{
                    headerStyle: styles.headerStyle,
                }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: Assets.Colors.pureWhite,
        elevation: 0,
        shadowOpacity: 0,
    },
    headerTitleStyle: {
        fontFamily: Font.bold,
        fontSize: FontSize.s_20,
        color: Assets.Colors.text,
        lineHeight: 22,
    },
    icNotificationStyle: {
        width: 21.49,
        height: 24,
        resizeMode: 'contain',
    },
    buttonNotification: {
        marginRight: 12.5
    }
})

export default UserHomeNavigator;