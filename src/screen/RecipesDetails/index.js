import React, { useEffect} from 'react'
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';

import { useFetchRecipes } from '../../api/recipes/useFetchRecipes';
import { getSelectedRecipe } from '../../redux/selectors'

export default function RecipesDetails({ route, navigation }) {
    const {id} = route.params;
    console.log("ID=", id);
    const { getRecipesById } = useFetchRecipes();
    const recipe = useSelector(getSelectedRecipe);
    

    useEffect(()=>{
        getRecipesById(id)
    }, []);

    if (!recipe) {
        return <View />
    }

    return (
        <ScrollView>
            
            <Image source={{uri: recipe.image}} style={styles.image}/>
            <Text style={styles.title}>{recipe.title}</Text>
            <Text style={styles.caption}> Ready in {recipe.readyInMinutes}min</Text>
            <View style={styles.containerIng}>
                    <Text style={styles.titleIng}>Ingredients </Text>
                {/*je recherche une partie des données contenue dans extendIngredient */}
                { recipe.extendedIngredients?.map(ing =>(
                    <Text>{ing.name}</Text>    
                ))}
            </View>
            <Pressable
            onPress={()=>{navigation.goBack()}}>
                <Text>Retour</Text>
            </Pressable>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    
    caption:{
        textAlign: "center"
    },
    titleIng:{
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 5
    },
    containerIng:{
        padding: 5,
        marginHorizontal: 16,
        marginVertical: 10,
        borderTopColor: "black",
        borderTopWidth: 1,
        borderBottomColor: "black",
        borderBottomWidth: 1,

    }
})