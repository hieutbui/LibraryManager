import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistor, store } from '../controllers/redux/AppStore';
import AppNavigator from './navigators/AppNavigator'


const App = () => {
  // const isDarkMode = useColorScheme() === 'light';

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {/* 
          use it when have 2 interfaces
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> 
          */}
          <StatusBar barStyle={'light-content'} />
          <AppNavigator />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};


export default App;
