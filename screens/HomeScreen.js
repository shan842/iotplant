import React, { Component} from 'react';
import { StyleSheet, Text, View,Image,Button,TouchableOpacity } from 'react-native'

//import Button from 'react-native-button';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { launchCameraAsync,useCameraPermissions ,PermissionStatus,takeImageHandler} from 'expo-image-picker';


// Import Image Pi
import Camera from '../components/Camera';
import { render } from 'react-dom';




class HomeScreen extends Component {

render(){ 
  return (
    
    <View style={styles.container}>
        
          <View style={styles.rect}>
          <Image
          style={ styles.image1 }
          resizeMode='contain'
          source={ require('../assets/logoiot.png') }
        /> 
            
              
              
                </View> 
                
                
                <View style={styles.rect4}>
                <Text style={styles.healYourCrop}>Heal Your Plant !</Text>
                
                <View style={styles.rect6}>

                <FontAwesome name="camera" size={30} color="red"   />
                
                
                <MaterialIcons name="healing" size={30} color="red"  />
                
                <FontAwesome5 name="diagnoses" size={30} color="red" />
                
                </View>
                
                <Camera navigation={this.props.navigation} />
  


               
                
                </View>
                
                
             
              
           </View>
      
      
      
  );
}

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
     
      
      width: 320,
      height: 120,
      position:'absolute',
      marginLeft:13
      
  },


  image1:{
    width:'30%',
    marginTop:-50, 
  },

  loremIpsum: {
    fontFamily:'sans-serif',
    color: '#195F57',
    fontSize: 20,
    marginTop: 19,
    marginLeft: 24
  },
  rect4: {
    width: 320,
    height: 200,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 15,
    marginTop: 120,
    marginLeft: 18,
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
  // rect2Stack: {
  //   top: 0,
  //   left: 57,
  //   width: 402,
  //   height: 647,
  //   position: 'absolute'
  // },
  // rect2StackStack: {
  //   width: 459,
  //   height: 692,
  //   marginLeft: -50
  // },
  
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