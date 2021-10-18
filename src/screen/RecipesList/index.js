import React, {useEffect} from 'react';
import { Text } from 'react-native';

import { useSelector } from 'react-redux';
import { useFetchRecipes } from '../../api/recipes/useFetchRecipes';
import { getRecipesList } from '../../redux/selectors';

export default function RecipesList() {
    const { getAllRecipes } = useFetchRecipes()
    const allRecipes = useSelector(getRecipesList)
    console.log("toutes les recettes", allRecipes)
    

    //affichage de l'ecran
    useEffect(() => {
        getAllRecipes()
    }, [])

    return (
        <>
            <Text>RecipesList</Text>
            {allRecipes.map(recipe => (
                <Text>recipe.title</Text>
            ))}
        </>
    )
}
