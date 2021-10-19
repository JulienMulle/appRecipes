import React from 'react'
import { Pressable, Text } from 'react-native'

export default function RecipesDetails({ navigation }) {
    return (
        <>
            <Text>Détails des recettes</Text>
            <Pressable
            onPress={()=>{navigation.goBack()}}>
                <Text>Retour</Text>
            </Pressable>
        </>
    )
}
