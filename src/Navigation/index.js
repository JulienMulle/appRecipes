import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//components
import RecipesList from '../screen/RecipesList';
import RecipesDetails from '../screen/RecipesDetails';
import TaskScreen from '../screen/tasks';

export default function AppNavigation() {

    const Stack = createNativeStackNavigator();
    const Tabs = createBottomTabNavigator();

    return (
        <NavigationContainer>
          <Tabs.Navigator>
            <Tabs.Screen name="Recettes" component={RecipesList} />
            <Tabs.Screen name="Liste" component={TaskScreen} />
          </Tabs.Navigator>
        {/*<Stack.Navigator>
          <Stack.Screen name="TaskList" component={TaskScreen} />
          <Stack.Screen name="RecipesList" component={RecipesList} />
          <Stack.Screen name="RecipesDetails" component={RecipesDetails} />
        </Stack.Navigator>*/}
      </NavigationContainer>
    )
}
