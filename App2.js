import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import './src/App.css';
import {CoinList} from "./src/components/CoinList.js"
import { TouchableOpacity } from 'react-native';
const HomeScreen = ({navigation})=> {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Lista Bitcoin</Text>
      <CoinList />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8A66B9',
    alignItems: 'center'
  },
});
