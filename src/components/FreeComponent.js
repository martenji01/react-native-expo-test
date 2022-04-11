import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import {CoinList} from "./CoinList.js";

const FreeComponent = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Lista Bitcoin</Text>
      <CoinList />
    </View>
  )
}

export default FreeComponent;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#8A66B9',
      alignItems: 'center'
    },
  });