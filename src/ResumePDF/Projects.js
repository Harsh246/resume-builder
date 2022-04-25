import React from "react";

import { useSelector } from "react-redux";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Text, View, StyleSheet, Font,Link  } from "@react-pdf/renderer";
import { faColumns } from "@fortawesome/free-solid-svg-icons";

Font.register({
  family: "MontserratRegular",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/montserrat/v12/JTUSjIg1_i6t8kCHKm459Wlhzg.ttf",
    },
  ],
});

const styles = StyleSheet.create({

    about_container: {
        fontSize: "12px",
        width: "100%",
        height: "100%",
        textAlign: "left",
        color:"black",
       fontFamily :"MontserratRegular",
       lineHeight:"1.5"
      },
      title: {
        width: "80%",
        textTransform: "capitalize",
        fontSize: "25px",
        color:"black"
      },
      line: {
        width: "90%",
        height: "2px",
        backgroundColor: "black",
        marginBottom:"5px"
      },
     
     
      "edu_decor": {
        "flex": 2,
        "backgroundColor": "#449399",
        paddingBottom:"10px"
      },
      "edu_right": {
        "flex": 15,
        "marginLeft": "20px",
        justifyContent:"center",
        alignItems:"flex-start"
      },
      "edu_container_title": {
      
        "fontSize": "11px"
      },
      "edu_container_year_marks": {
        "display": "flex",
        flexDirection:"row",
        "justifyContent": "space-between",
        "color": "#449399",
        "fontSize": "8px",
        width:"100%"
      },
      "edu_container_school": {
        "fontSize": "10px"
      },
    
      edu_box:{
        "width": "90%",
        "height": "100px",
        "display": "flex",
        flexDirection:"row",
     marginBottom:"10px"
      },
      about_box: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        color: "#232323",
        textTransform: "capitalize",
        height: "30%",
        maxHeight:"50%"
      },

      project:{
          display:"flex",
          flexDirection:"column",
          width:"100%",
          maxHeight:"100px"


      }

      
});
export default function Projects() {
    const projects = useSelector((state) => state.projects);
  


  return (
    <View style={styles.about_box}>
    <View style={{ width: "100%", height: "auto", marginBottom: "2rem" }}>
      <Text style={styles.title}>Personal Projects</Text>
      <Text style={styles.line}>_</Text>
    </View>

    
    <View style={styles.about_container}>
      
     

{projects.map((item, index) => (
                    <View key={index} style={styles.project}>
                      <Text style={{fontSize:"16px", justifyContent:"center"}}>⏺{"   "}{item.name} </Text>
                      <View style={{fontSize:"12px"}}>

                        <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.description}</Text>
                      </View>
                    </View>
                  ))}
                  
                 
      </View>
    </View>
  );
}
