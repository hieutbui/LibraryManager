import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme,Text} from 'react-native';
import HomeScreen from './home/HomeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import {persistor, store} from '../controllers/redux/AppStore';


const App  = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
                    <HomeScreen/>
                </PersistGate>
            </Provider>
        </SafeAreaProvider>
    );
};


export default App;
