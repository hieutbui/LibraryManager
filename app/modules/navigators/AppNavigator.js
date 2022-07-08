import {DarkTheme, NavigationContainer} from "@react-navigation/native"
import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack"
import React, {useEffect, useLayoutEffect, useState} from "react"
import {enableScreens} from "react-native-screens"
import HomeScreen from './modules/home/HomeSlice';


enableScreens()
const Stack = createStackNavigator()


const AppNavigator = () => {
    return (
        <NavigationContainer theme={DarkTheme}>
            <Stack.Navigator
                initialRouteName={'Home'}
                screenOptions={{
                    headerMode: 'screen',
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'tomato' },
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
