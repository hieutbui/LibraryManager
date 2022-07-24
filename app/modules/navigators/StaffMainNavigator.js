import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState, Component } from "react";
import { enableScreens } from "react-native-screens";
import { ScreenNames } from '../../general/constants/ScreenNames';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Assets } from '../../assets/Assets';
import { Image } from 'react-native';
import StaffHomeNavigator from './StaffHomeNavigator'
import StaffQrScreen from '../screens/interfaces/staff/staffQR/StaffQRScreen'
import StaffSettingScreen from '../screens/interfaces/staff/staffSetting/StaffSettingScreen'

enableScreens()
const Tab = createBottomTabNavigator()

const StaffMainNavigator = ({ route }) => {

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
                name={ScreenNames.staffHomeNavigator}
                component={StaffHomeNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (<Image source={focused ? Assets.Icons.ic_activeHome : Assets.Icons.ic_inactiveHome} style={{ width: 28.03, height: 28, resizeMode: 'contain' }} />),
                    tabBarLabel: 'Trang chủ'
                }}
                initialParams={{
                    staffId: route.params.staffId
                }}
            />
            <Tab.Screen
                name={ScreenNames.staffQRScreen}
                component={StaffQrScreen}
                options={{
                    tabBarIcon: ({ focused }) => (<Image source={Assets.Icons.ic_scanQR} style={{ width: 28, height: 28, resizeMode: 'contain', tintColor: focused ? Assets.Colors.mainColor : Assets.Colors.text }} />),
                    tabBarLabel: 'Quét mã QR',
                }}
            />
            <Tab.Screen
                name={ScreenNames.staffSettingScreen}
                component={StaffSettingScreen}
                options={{
                    tabBarIcon: ({ focused }) => (<Image source={focused ? Assets.Icons.ic_activeProfile : Assets.Icons.ic_inactiveProfile} style={{ width: 22.17, height: 28, resizeMode: 'contain' }} />),
                    tabBarLabel: 'Tôi'
                }}
                initialParams={{
                    staffId: route.params.staffId,
                }}
            />
        </Tab.Navigator>
    )
}

export default StaffMainNavigator