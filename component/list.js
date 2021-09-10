import React from 'react';
import {StyleSheet,Text, View,Image } from 'react-native';

export default function List({item}){
    return(
        <View style={styles.listbox}>
 <Image style={styles.boxMi} source={{uri: `${item.post}`}}/>   
      </View>
    )
}

const styles = StyleSheet.create({
    listbox:{
        
        height:150,
      width:100,
    marginTop:10,
    marginBottom:10,
    marginLeft:5
    },
    boxMi:{
width:"100%",
height:"100%",

    }

})