import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RecipesList from './src/screen/RecipesList';
import RecipesDetails from './src/screen/RecipesDetails';

import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="RecipesList" component={RecipesList} />
          <Stack.Screen name="RecipesDetails" component={RecipesDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}



//avec l'utilisation de NavigationContainer, nous n'avons plus besoin de View ou de safetyView.