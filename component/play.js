import React from 'react';
import { Feather } from '@expo/vector-icons';
import {StyleSheet,Text, View,Image ,TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
export default function  Play(){
    return(
        <View style={styles.box}>
<View style={styles.boxx}>
<AntDesign name="plus" size={24} color="#fff" />
<Text style={styles.text}>My List</Text>
</View>
<View style={styles.boxxp}>
<FontAwesome name="play" size={24} color="#000" />
<Text style={styles.textt}>Play</Text>
</View>

<View style={styles.boxx}>
<Feather name="info" size={24} color="#fff" />
<Text style={styles.text}>Info</Text>
</View>

    </View>
    )
}



const styles  = StyleSheet.create({
box:{
   
    height:80,
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center"
},
boxx:{
    
    width:100,
    padding:5,
    alignItems:"center",
    justifyContent:"center"
},
boxxp:{
    width:100,
    height:40,
  
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5,
    backgroundColor:"white"
},
textt:{
    marginLeft:10,
    fontWeight:"bold"
   
},
text:{
color:"#fff",
marginTop:1
}
})