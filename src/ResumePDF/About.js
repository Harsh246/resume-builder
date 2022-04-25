import React from "react";

import { useSelector } from "react-redux";
import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: "MontserratRegular",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/montserrat/v12/JTUSjIg1_i6t8kCHKm459Wlhzg.ttf",
    },
  ],
});

const styles = StyleSheet.create({
  title: {
    width: "40%",
    textTransform: "capitalize",
    fontSize: "25px",
    color:"black"
  },
  line: {
    width: "90%",
    height: "2px",
    backgroundColor: "black",
  },
  about_box: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    color: "#232323",
    textTransform: "capitalize",
    height: "20%",
    maxHeight:"35%"
  },
  about_container: {
    fontSize: "12px",
    width: "100%",
    height: "100%",
    padding: "10px 20px 10px 0px",
    textAlign: "left",
    color:"black",
   fontFamily :"MontserratRegular",
   lineHeight:"1.5"
  },
});
export default function About() {
    const objective = useSelector((state) => state.objective);



  return (
    <View style={styles.about_box}>
      <View style={{ width: "100%", height: "auto", marginBottom: "2rem" }}>
        <Text style={styles.title}>About Me</Text>
        <Text style={styles.line}>_</Text>
      </View>

      <Text style={styles.about_container}>
        {objective}
        </Text>
    </View>
  );
}
