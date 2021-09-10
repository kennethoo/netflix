import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Platform ,ScrollView,Dimensions} from 'react-native';
import Home from "./screen/home"
const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
export default function App() {
  
  return (
    <View style={styles.container}>
    <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
   // alignItems: 'center',
    //justifyContent: 'center',
    ...Platform.select({
      ios:{paddingTop:20},
      android:{paddingTop:StatusBar.currentHeight}
  })
  },
});
