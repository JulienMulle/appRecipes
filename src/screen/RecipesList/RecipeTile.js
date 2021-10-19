import React from 'react'
import { Image, View, StyleSheet, Text, Pressable } from 'react-native'

export default function RecipeTile({item, navigation}) {
    return (
        /* grace à pressable et onPress, je pourrais acceder à la page RecipesDetails en appuyant sur une recette */
        <Pressable 
        
            onPress={() =>{
                navigation.navigate("RecipesDetails", {id: item.id})
            }}
            style={styles.container}>
            <Image source={{uri: item.image}}  style={styles.image}/>
            <View style={styles.subcontainer}>
            <Text style={styles.title}> {item.title}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        marginBottom: 2
    },
    subcontainer:{
        width: "60%",
        padding: 7
    },
    image:{
        width: "40%",
        height: 70,
    },
    title:{
        fontWeight:"bold",
        fontSize: 16
    },

})
