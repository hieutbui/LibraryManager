import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import { Assets } from '../../../../../assets/Assets';

const UserNotificationScreen = () => {
    return (
        <View style={{ backgroundColor: Assets.Colors.background, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#000000' }}>Coming soon!</Text>
        </View>
    )
}

export default UserNotificationScreen;
