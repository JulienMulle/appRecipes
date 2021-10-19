import React, {useEffect} from 'react';
import { FlatList, Text } from 'react-native';

import { useSelector } from 'react-redux';
import { useFetchRecipes } from '../../api/recipes/useFetchRecipes';
import { getRecipesList } from '../../redux/selectors';
import RecipeTile from './RecipeTile';

export default function RecipesList() {
    const { getAllRecipes } = useFetchRecipes()
    const allRecipes = useSelector(getRecipesList)
    
    

    //affichage de l'ecran
    useEffect(() => {
        getAllRecipes()
    }, [])
    
    //alone function
    const renderItem = ({item}) => <RecipeTile item={item} />
    

    return (
            <FlatList
                data={allRecipes}
                keyExtractor={(item, index) =>index.toString()}
                renderItem={renderItem}
            />
    )
}
