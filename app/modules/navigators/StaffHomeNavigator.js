import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BookManagementScreen from "../screens/interfaces/staff/bookManagement/BookManagementScreen";
import InvoiceManagementScreen from "../screens/interfaces/staff/invoiceManagement/InvoiceManagementScreen";
import { ScreenNames } from "../../general/constants/ScreenNames";
import { Assets } from "../../assets/Assets";
import { Font, FontSize, FontWeight } from "../../general/constants/FontStyle";
import { Librarians } from "../../general/constants/librarian/Librarians";
import { Account } from "../../general/constants/Account";

const StaffHomeNavigator = ({ route }) => {
    const Tab = createMaterialTopTabNavigator()

    let librarianId
    Account.forEach(user => {
        if (user.userId == route.params.staffId) {
            librarianId = user.librarianId
        }
    })

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarIndicatorStyle: {
                    backgroundColor: Assets.Colors.mainColor
                },
                tabBarActiveTintColor: Assets.Colors.mainColor,
                tabBarInactiveTintColor: Assets.Colors.text,
                tabBarLabelStyle: {
                    fontFamily: Font.bold,
                    fontSize: FontSize.s_20,
                    lineHeight: 22,
                }
            }}
        >
            <Tab.Screen
                name={ScreenNames.bookManagementScreen}
                component={BookManagementScreen}
                initialParams={{
                    librarianId: librarianId
                }}
            />
            <Tab.Screen
                name={ScreenNames.invoiceManagementScreen}
                component={InvoiceManagementScreen}
                initialParams={{
                    librarianId: librarianId
                }}
            />
        </Tab.Navigator>

    )
}

export default StaffHomeNavigator;