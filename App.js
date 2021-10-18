import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RecipesList from './src/screen/RecipesList';

export default function App() {
  return (
    <View style={styles.container}>
      <RecipesList />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  
});
