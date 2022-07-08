import { DarkTheme, NavigationContainer } from "@react-navigation/native"
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"
import React, { useEffect, useLayoutEffect, useState } from "react"
import { enableScreens } from "react-native-screens"
import HomeScreen from '../home/HomeScreen';
import LoginScreen from '../login/LoginScreen'
import { ScreenNames } from '../../general/constants/ScreenNames'



enableScreens()
const Stack = createStackNavigator()


const AppNavigator = () => {
    return (
        <NavigationContainer theme={DarkTheme}>
            <Stack.Navigator
                initialRouteName={ScreenNames.LoginScreen}
                screenOptions={{
                    headerMode: 'screen',
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'tomato' },
                }}
            >
                <Stack.Screen
                    name={ScreenNames.LoginScreen}
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
