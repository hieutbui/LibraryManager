import React from 'react';
import { useState } from 'react';
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

const LibraryInfoScreen = () => {

    return (
        <View style={{ backgroundColor: Assets.Colors.background, justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text style={{ color: '#000000' }}>Coming soon!</Text>
        </View>
    )
}

export default LibraryInfoScreen;
