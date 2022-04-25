import React from 'react';

import { useSelector } from "react-redux";
import { Text, View, StyleSheet ,Font} from '@react-pdf/renderer';
Font.registerEmojiSource({
    format: 'png',
    url: 'https://twemoji.maxcdn.com/2/72x72/',
  });
  Font.register( { family: 'MontserratRegular', fonts: [
    {
      src:'https://fonts.gstatic.com/s/montserrat/v12/JTUSjIg1_i6t8kCHKm459Wlhzg.ttf' ,
    }  ]});

const styles = StyleSheet.create({
  
  contactHeading:{
  
    width: '30%',
    height:'100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'flex-start',
    color:'white',
   },

   h3:{
       fontSize:"16px",
       marginBottom:"5px"
   },
   h1:{
       fontSize:"21px",
       marginBottom:"5px"
   },
   title: {
    width: "90%",
    marginBottom: "1px",
    textTransform: "capitalize",
    fontSize:"25px"
  },
  line:{
    width:"90%",
    height:"2px",
    backgroundColor:"white"
  },
  field:{
      fontSize:"13px",
      fontFamily: 'MontserratRegular',
      marginTop:"10px"
  }
});
export default function Contact() {

const userInfo = useSelector((state) => state.userInfo);



console.log(userInfo);
  return (
   <View style={styles.contactHeading}>
                
                <Text style={styles.title}>
                  Contact
                </Text>
                <text style={styles.line}></text>
                <View>
                  <Text style={styles.field}>
                  &#x1F4DE; {"    "}  <span>{userInfo.mobile} {userInfo.altMobile? `,${userInfo.altMobile}`:<></> }789455558</span>
                  </Text>
                  <Text style={styles.field}>
                  📍 {"    "} <span style={{textTransform:"capitalize"}}>{userInfo.address} {userInfo.country}india, india </span>
                  </Text>
                  <Text style={styles.field}>
                  📧{"    "}  <span style={{textTransform:"lowercase" , width:"70%"}}>{userInfo.email} JDDHKJgjgcj</span>
                  </Text>
                </View>
            
           
   </View>
  )
}
