import React from 'react';
import { StyleSheet,Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './navigation/Tabs';


const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Tabs />
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
                    height: 0,
                    borderTopColor: "blue",
                    borderTopWidth: SCREEN_HEIGHT / 2,
                    borderRightWidth: SCREEN_WIDTH,
                    borderRightColor: 'transparent'
  },
});
