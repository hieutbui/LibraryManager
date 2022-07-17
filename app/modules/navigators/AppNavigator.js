import 'react-native-gesture-handler'
import { DarkTheme, NavigationContainer, } from "@react-navigation/native"
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"
import React, { useEffect, useLayoutEffect, useState } from "react"
import { enableScreens } from "react-native-screens"
import { ScreenNames } from '../../general/constants/ScreenNames'
import { View, Text, TouchableOpacity } from 'react-native'
import { navigationRef } from './RootNavigation'
import SignInScreen from '../screens/auth/signIn/SignInScreen'
import SignUpScreen from '../screens/auth/signUp/SignUpScreen'
import UserMainNavigator from './UserMainNavigator'

enableScreens()
const Stack = createStackNavigator()

const AppNavigator = () => {
    return (
        <NavigationContainer
            ref={navigationRef}
        >
            <Stack.Navigator
                initialRouteName={ScreenNames.signInScreen}
                screenOptions={{
                    headerMode: 'screen',
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'tomato' },
                }}
            >
                <Stack.Screen
                    name={ScreenNames.signInScreen}
                    component={SignInScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={ScreenNames.signUpScreen}
                    component={SignUpScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={ScreenNames.userMainNavigator}
                    component={UserMainNavigator}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
