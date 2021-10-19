import React from 'react'
import { Image, View, StyleSheet, Text } from 'react-native'

export default function RecipeTile({item}) {
    return (
        <View style={styles.container}>
            <Image source={{uri: item.image}}  style={styles.image}/>
            <View style={styles.subcontainer}>
            <Text style={styles.title}> {item.title}</Text>
            </View>
        </View>
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
