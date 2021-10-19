import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

//components
import AppNavigation from './src/Navigation';




export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
        <AppNavigation />
    </Provider>
  );
}



//avec l'utilisation de NavigationContainer, nous n'avons plus besoin de View ou de safetyView.