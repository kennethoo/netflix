import React from "react"
import { AntDesign } from '@expo/vector-icons'; 
import {StyleSheet, Text , View, TouchableOpacity} from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
export default function Navigation({Changepage}){
    return(
        <View style={styles.navbar}>
        
        <TouchableOpacity style={styles.touch}  >
           <Feather name="home" size={20} color="#fff" />
           <Text  style={styles.text}>Home</Text>
           </TouchableOpacity>

            <TouchableOpacity  style={styles.touch} >
            <AntDesign name="search1" size={20} color="#fff" />
            <Text  style={styles.text}>Search</Text>
           </TouchableOpacity>

           <TouchableOpacity  style={styles.touch}>
           <Entypo name="folder-video" size={20} color="#fff" />
            <Text  style={styles.text}>Comming Soon</Text>
           </TouchableOpacity>
           
           <TouchableOpacity  style={styles.touch}>
           <MaterialIcons name="file-download" size={20} color="#fff" />
            <Text  style={styles.text}> Download</Text>
           </TouchableOpacity>
           
          
            <TouchableOpacity  style={styles.touch} >
            <EvilIcons name="navicon" size={20} color="#fff" />
            <Text  style={styles.text}>More</Text>
           </TouchableOpacity>     
        </View>
    )
}

const styles= StyleSheet.create({
    navbar:{
height:50,
flexDirection:"row",
alignItems:"center",
justifyContent:"space-around"
    },
    touch:{
        height:"100%",
        width:"20%",
        alignItems:"center",
      justifyContent:"center"
    },
    text:{
        color:"#fff",
        fontSize:10,
        marginTop:2
    }
    

})