import React from 'react'
import { Image, View, StyleSheet, Text } from 'react-native'

export default function RecipeTile({item}) {
    return (
        <View>
            <Image source={{uri: item.image}}  style={styles.image}/>
            <Text> {item.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width: "30%",
        height:70,
    }
})
