import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//components
import TaskScreen from '../screen/tasks';
import  RecipesStack  from './RecipesStack'
export default function AppNavigation() {

    
    const Tabs = createBottomTabNavigator();

    return (
        <NavigationContainer>
          <Tabs.Navigator screenOptions={{headerShown: false}}>
            <Tabs.Screen name="Recettes" component={RecipesStack} />
            <Tabs.Screen name="Liste" component={TaskScreen} />
          </Tabs.Navigator>
      </NavigationContainer>
    )
}
