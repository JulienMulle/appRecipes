import React from 'react'
import { Pressable, Text } from 'react-native'

export default function RecipesDetails({ route, navigation }) {
    const {id} = route.params
    console.log("ID=", id)
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
