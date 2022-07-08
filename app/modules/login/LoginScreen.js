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
import {Assets} from '../../assets/Assets'

const LoginScreen = () => {
    return (
        <View style ={{backgroundColor: Assets.Colors.background, flex: 1}}>
            <Text>Login</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default LoginScreen;
