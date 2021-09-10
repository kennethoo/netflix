
import React from 'react';
import {useState} from "react"
import { StyleSheet, Text, View,FlatList ,Dimensions, ScrollView} from 'react-native';
import Header from "../component/header"
import Play from "../component/play"
import List from "../component/list"
import Navigation from "../component/nav"
const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
export default function Home(){


    const [first, setListone]= useState([
        {post:"https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg", key:"1"},
        {post:"https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg", key:"2"},
        {post:"https://i.pinimg.com/originals/96/a0/0d/96a00d42b0ff8f80b7cdf2926a211e47.jpg", key:"3"},
        {post:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1576732289", key:"7"},
        {post:"https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217", key:"4"},
        {post:"https://images-na.ssl-images-amazon.com/images/I/91jatiUZjtL._AC_SL1500_.jpg", key:"5"}
        
        
    ])

    const [listTwo ,setListtwo]=useState([
        {post:"http://smashinghub.com/wp-content/uploads/2012/06/Use-AIDA-Formula.jpg", key:"1"},
        {post:"https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500", key:"2"},
        {post:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1573101130", key:"3"},
        {post:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrx7eZQvp7r2Rn8VNY1WISR7SzKqMV0421Xw&usqp=CAU", key:"4"},
        {post:"https://cdn.shopify.com/s/files/1/0290/5663/0868/products/movinghouse_1024x1024.jpg?v=1583512021", key:"5"},
        {post:"https://i1.wp.com/www.chilliprinting.com/Online-Printing-Blog/wp-content/uploads/2017/02/Arrival-Best-Oscar-Movie-Poster-Chilliprinting.jpg?resize=220%2C343&ssl=1", key:"9"},
    ])
    const [listthree ,setListThree]=useState([
        {post:"https://i.pinimg.com/originals/96/a0/0d/96a00d42b0ff8f80b7cdf2926a211e47.jpg", key:"7"},
        {post:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1576732289", key:"59"},
        {post:"https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217", key:"6"},
        {post:"https://images-na.ssl-images-amazon.com/images/I/91jatiUZjtL._AC_SL1500_.jpg", key:"10"},
        {post:"http://smashinghub.com/wp-content/uploads/2012/06/Use-AIDA-Formula.jpg", key:"19"},
        {post:"https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500", key:"2"},
        {post:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1573101130", key:"3"},
        {post:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrx7eZQvp7r2Rn8VNY1WISR7SzKqMV0421Xw&usqp=CAU", key:"4"},
        {post:"https://cdn.shopify.com/s/files/1/0290/5663/0868/products/movinghouse_1024x1024.jpg?v=1583512021", key:"5"},
        {post:"https://i1.wp.com/www.chilliprinting.com/Online-Printing-Blog/wp-content/uploads/2017/02/Arrival-Best-Oscar-Movie-Poster-Chilliprinting.jpg?resize=220%2C343&ssl=1", key:"9"},
    ])
    return(

        <View style={styles.home}>
        <ScrollView>
        <Header/>
        <View style={styles.text}>
        <Text style={styles.textt} >#1 in the U.S. Today</Text>
        </View>
        <Play/>
        <View style={styles.holdLis}>
        <View style={styles.list}>
       <Text  style={styles.title}>Treading Now</Text>
       <FlatList
       horizontal={true}
         style={styles.controlItem}
             data={first}
             renderItem={({item})=>(
                <List item={item}/>  
             )}
         />  

        </View>

        <View style={styles.list}>
       <Text  style={styles.title}>Tv Dramas</Text>
       <FlatList
       horizontal={true}
         style={styles.controlItem}
             data={listTwo}
             renderItem={({item})=>(
                <List item={item}/>  
             )}
         />  

        </View>
        <View style={styles.list}>
       <Text  style={styles.title}>Favorite Show</Text>
       <FlatList
       horizontal={true}
         style={styles.controlItem}
             data={listTwo}
             renderItem={({item})=>(
                <List item={item}/>  
             )}
         />  

        </View>
        <View style={styles.list}>
       <Text  style={styles.title}>Movies</Text>
       <FlatList
       horizontal={true}
         style={styles.controlItem}
             data={listthree}
             renderItem={({item})=>(
                <List item={item}/>  
             )}
         />  

        </View>

        </View>
        </ScrollView>
       
        <Navigation/>
        </View>
    )
}

const styles = StyleSheet.create({
    home:{
        width:"100%",
        paddingTop:30,
        height:screenHeight - 0,
        backgroundColor:"#000",
      
    
      
    },
   text:{
       width:"100%",
height:30,
letterSpacing:1,
justifyContent:"center",
flexDirection:"row",

alignItems:"center",

   },
   textt:{
    color:"#fff",
    fontWeight:"600"
   },
   list:{
       width:"100%",
       backgroundColor:"#000"
     

   },
   title:{
       height:30,
       width:"100%",
       color:"#fff",
       fontWeight:"bold",
      fontSize:20,
      alignItems:"center",
  
   },
   controlItem:{
width:"100%",
backgroundColor:"#000"
   }
   
  });
  
