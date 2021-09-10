
import React from 'react';
import {StyleSheet,Text, View,Image } from 'react-native';

import Globalstyle from "../globastylel"

export default function Header(){

    return(
      <View style={styles.headeri} >
          <View style={styles.titleHer}>
      <View style={styles.logo}>
     <Image style={styles.logoIco} source={{uri: `https://pngimg.com/uploads/netflix/netflix_PNG15.png`}}/>   
      </View>
      <Text style={styles.text} >TV Show</Text>
      <Text  style={styles.text}>Movies</Text>
      <Text  style={styles.text}>My List</Text>
          </View>
          <View style={styles.ImageCo}>
          <Image style={styles.poster} source={{uri: `https://static.onecms.io/wp-content/uploads/sites/6/2018/10/lgc_s1_8x12_300dpi1-2000.jpg`}}/>   
          </View>
      </View>
    )
}

const styles = StyleSheet.create({
    headeri:{
       height:450,
       
            },
            titleHer:{
                position:"absolute",
                  top:0,
                flexDirection:"row",
              
                width:"100%",
             
                height:60,
              justifyContent:"space-around",
              alignItems:"center",
              zIndex: 1
            },
            ImageCo:{
              height:"100%",
              height:"100%",
               
               

            },
            text:{
                color:"#fff",
                letterSpacing:1,
                fontWeight:"600"
            },
            logo:{
              height:"90%",
              width:30,
              
            },
            logoIco:{
              width:"100%",
              height:"100%"
            },
            poster:{
              width:"100%",
              height:"100%"
            }
  });
  