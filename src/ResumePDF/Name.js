import React from 'react';

import { useSelector } from "react-redux";
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { padding } from '@mui/system';

const styles = StyleSheet.create({
  
  nameHeading:{
  
    width: '45%',
    height:'100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'flex-start',
    color:'white',
   },

   h3:{
       fontSize:"16px",
       margin:0,
       padding:0
      
   },
   h1:{
       fontSize:"25px",
      
   }
});
export default function Name() {

const userInfo = useSelector((state) => state.userInfo);



console.log(userInfo);
  return (
   <View style={styles.nameHeading} >
                <Text style={styles.h3}>Hi I'm</Text>

                <Text style={styles.h1}>{userInfo.name?userInfo.name:"Harsh Malhotra"}</Text>

                <Text style={styles.h3}>{userInfo.linkedIn?userInfo.linkedIn:"Full Stack Dev"}</Text>
           
           
   </View>
  )
}
