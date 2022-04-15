import React from 'react';
import { StyleSheet, Text, View,Image,Button } from 'react-native'
//import Button from 'react-native-button';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import Camera from '../components/Camera';

const HomeScreen = () => {
  return (
    
    <View style={styles.container}>
        <View style={styles.rect2StackStack}>
          <View style={styles.rect2Stack}>
          <View style={styles.rect}>
            <Text style={styles.loremIpsum}></Text>
              
              <View style={styles.rect4}>
              <Image
               source={{ uri: 'https://media.istockphoto.com/photos/young-plant-growing-in-sunlight-picture-id658291850?k=20&m=658291850&s=170667a&w=0&h=ZXYKgS9KvA5cfTyqxf1oLLZHLI7lKrhlvH-Q6XwJl_8=' }}
              
        
        
      
               style={{
                 resizeMode: "contain",
                 marginLeft:13,
                 height: 180,
                 width: 210,
                overflow:'hidden',
                 borderRadius:35

              
               }}
             />
                </View> 
                
                
                <View style={styles.rect4}>
                <Text style={styles.healYourCrop}>Heal Your Plant !</Text>
                
                <View style={styles.rect6}>

                <FontAwesome name="camera" size={30} color="red"   />
                
                
                <MaterialIcons name="healing" size={30} color="red"  />
                
                <FontAwesome5 name="diagnoses" size={30} color="red" />
                
                </View>
                <Button
        title="Take Picture"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
                
                </View>
                
                
              </View>
              
           </View>
        </View>
      </View>
      
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue'
    
  },
  rect2: {
    top: -40,
    left: 110,
    height: 350,
    position: 'absolute'
  },

    rect: {
      top: 40,
      width: 278,
      height: 513,
      position: 'absolute',
      backgroundColor: '#ffffff',
      borderRadius: 40,
      shadowColor: 'rgba(0,0,0,1)',
      shadowOffset: {
        width: 0,
        height: 0
      },
      elevation: 7,
    shadowOpacity: 2,
    shadowRadius: 4,
    left: 35
  },

  loremIpsum: {
    fontFamily:'sans-serif',
    color: '#195F57',
    fontSize: 20,
    marginTop: 19,
    marginLeft: 24
  },
  rect4: {
    width: 238,
    height: 176,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 27,
    marginTop: 30,
    marginLeft: 20,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 5,
    shadowOpacity: 0.16,
    shadowRadius: 10
  },
  healYourCrop: {
    fontFamily: 'sans-serif',
    color: '#195F57',
    fontSize: 18,
    marginTop: 14,
    marginLeft: 21
  },
  rect2Stack: {
    top: 0,
    left: 57,
    width: 402,
    height: 647,
    position: 'absolute'
  },
  rect2StackStack: {
    width: 459,
    height: 692,
    marginLeft: -50
  },
  
  rect6:{
    
    flexDirection:'row',
    marginTop:20,
    marginLeft:15,
    alignItems: 'center',
    paddingHorizontal:40,
   justifyContent: 'space-between',
    
  },
  rect7:{
     marginTop:30,
  },
  
  



});