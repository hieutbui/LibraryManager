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

const BookScreen = ({ route }) => {

    console.log(route.params.bookName)

    return (
        <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
            <Text style={{ color: '#000000' }}>Book</Text>
        </View>
    )
}

export default BookScreen;
