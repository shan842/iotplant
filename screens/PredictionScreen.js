import { StyleSheet, Text, View,Components ,Image} from 'react-native'
import React from 'react'

const PredictionScreen = ({Components}) => {
  return (
    <View style={styles.container}>
    <View style={styles.rect2StackStack}>
      
        <Image
          source={require('../assets/pngwing.png')}
          resizeMode='cover'
          style={styles.rect2}
        ></Image>
        </View>
        </View>
  )
}

export default PredictionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  rect2: {
    
    
    height: 600,
    position: 'absolute'
  },
  rect2StackStack: {
    width: 459,
    height: 692,
    marginLeft: -50
  }

})