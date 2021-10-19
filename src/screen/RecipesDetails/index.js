import React from 'react'
import { Pressable, Text } from 'react-native'
import { useSelector } from 'react-redux';

import { getSelectedRecipe } from '../../redux/selectors'

export default function RecipesDetails({ route, navigation }) {
    const {id} = route.params
    console.log("ID=", id)
    const recipe = useSelector(getSelectedRecipe)
    return (
        <>
            <Text>{id}</Text>
            {/*<Text>{recipe.title}</Text>*/}
            <Pressable
            onPress={()=>{navigation.goBack()}}>
                <Text>Retour</Text>
            </Pressable>
        </>
    )
}
