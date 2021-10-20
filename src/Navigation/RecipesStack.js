import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RecipesDetails from '../screen/RecipesDetails';
import RecipesList from '../screen/RecipesList';
        
export default function RecipesStack() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="RecipesList" component={RecipesList} />
            <Stack.Screen name="RecipesDetails" component={RecipesDetails} />
      </Stack.Navigator>
    )
        }