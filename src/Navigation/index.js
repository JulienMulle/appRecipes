import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//components
import RecipesList from '../screen/RecipesList';
import RecipesDetails from '../screen/RecipesDetails';
import TaskScreen from '../screen/tasks';

export default function AppNavigation() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="TaskList" component={TaskScreen} />
          <Stack.Screen name="RecipesList" component={RecipesList} />
          <Stack.Screen name="RecipesDetails" component={RecipesDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}
