
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import InitialScreen from '../screens/InitialScreen';
import { Dimensions ,StyleSheet} from 'react-native';
import PredictionScreen from '../screens/PredictionScreen';
import IotScreen from '../screens/IotScreen';
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')


const Tab= createBottomTabNavigator();
const Tabs = ()=>{
    return(
        
        <Tab.Navigator>
            <Tab.Screen name="Home" component={InitialScreen} 
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen name="Crop" component={HomeScreen} 
            options={{
                tabBarLabel: 'Crop',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="leaf" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen name="Heal" component={PredictionScreen} 
            options={{
                tabBarLabel: 'Heal',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="medkit" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen name="Iot" component={IotScreen} 
            options={{
                tabBarLabel: 'Iot',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="analytics" color={color} size={size} />
                ),
              }}
            />
        
        </Tab.Navigator>
     
            
    );

}
export default Tabs;

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