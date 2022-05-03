import { StyleSheet, Text, View ,Image,Button} from 'react-native'
import React from 'react'



const InitialScreen = () => {
  return ( 
    <View style={styles.mainContainer}>
     <View style={styles.homeTop}>
      <Image style={styles.headerImage}
      resizeMode="contain"
      source={require('../assets/dstlogo.jpg')}
      />
      <Text style={[styles.headerText,{fontSize:20}]}>Welcome To </Text>
      <Text style={[styles.headerText,{
        fontSize:33,color:"green",marginTop:0,
      }]}>PlantIOT-IPU</Text>
      <Button
      title="Button1"
      onPress={() => Alert.alert('Simple Button pressed')}
    />
    <Button
      title="Button2"
      onPress={() => Alert.alert('Simple Button pressed')}
    />
     </View>

    </View>
    
    
    
);
}
  
 const styles = StyleSheet.create({
   container: {
    height:"30%",
    display:'flex',
    justifyContent: 'space-between',
    paddingHorizontal:20,
    backgroundColor: '#fff',
    textAlign: 'center',
    
  },
  homeTop:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:10,
  },

  headerImage:{
    height:undefined,
    width:"30%",
    aspectRatio:1,
    display:'flex',
    alignItems:'stretch',
    marginTop:60,
  },
  headerText:{
    fontSize:30,
    textTransform:'uppercase',
    marginTop:50,
  }
 });

export default InitialScreen;