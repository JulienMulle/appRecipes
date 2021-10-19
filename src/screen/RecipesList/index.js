import React, {useEffect, useState} from 'react';
import { FlatList } from 'react-native';

import { useSelector } from 'react-redux';
import { useFetchRecipes } from '../../api/recipes/useFetchRecipes';
import { getRecipesList } from '../../redux/selectors';
import RecipeTile from './RecipeTile';

export default function RecipesList({ navigation }) {
    const [page, setPage] = useState(0)
    const { getAllRecipes } = useFetchRecipes()
    const allRecipes = useSelector(getRecipesList)
    
    

    //affichage de l'ecran
    useEffect(() => {
        getAllRecipes(page)
    }, [page])

    //chargement infini des recettes
    const onEndReached = () =>{
        setPage( currentPage => currentPage + 1)
    }
    //alone function
    const renderItem = ({item}) => <RecipeTile navigation={navigation} item={item} />
    

    return (
            <FlatList
                data={allRecipes}
                keyExtractor={(item, index) =>index.toString()}
                renderItem={renderItem}
                onEndReached={onEndReached}
            />
    )
}
