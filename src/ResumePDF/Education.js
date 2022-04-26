import React from "react";

import { useSelector } from "react-redux";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
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
  education_container: {
    width: "100%",
    height: "55%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "10px 0",
    maxHeight: "60%",
  },
  about_container: {
    fontSize: "12px",
    width: "100%",
    height: "100%",
    textAlign: "left",
    color: "black",
    fontFamily: "MontserratRegular",
    lineHeight: "1.5",
  },
  title: {
    width: "80%",
    textTransform: "capitalize",
    fontSize: "25px",
    color: "black",

    marginBottom: "15px",
  },
  line: {
    width: "90%",
    height: "2px",
    backgroundColor: "black",
    marginBottom: "5px",
  },

  edu_decor: {
    flex: 2,
    backgroundColor: "#449399",
    paddingBottom: "10px",
  },
  edu_right: {
    flex: 15,
    marginLeft: "20px",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  edu_container_title: {
    fontSize: "11px",
  },
  edu_container_year_marks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#449399",
    fontSize: "8px",
    width: "100%",
  },
  edu_container_school: {
    fontSize: "10px",
  },

  edu_box: {
    width: "90%",
    height: "100px",
    display: "flex",
    flexDirection: "row",
    marginBottom: "10px",
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
    maxHeight: "50%",
  },
});
export default function Education() {
  const educational = useSelector((state) => state.educational);

  return (
    <View style={styles.about_box}>
      <View style={{ width: "100%", height: "auto", marginBottom: "25px" }}>
        <Text style={styles.title}>Education</Text>
        <Text style={styles.line}>_</Text>
      </View>

      <View style={styles.about_container}>
        {educational.map((item) => (
          <View style={styles.edu_box}>
            <Text style={styles.edu_decor}></Text>
            <View style={styles.edu_right}>
              <Text style={styles.edu_container_title}>{item.title}</Text>
              <Text style={styles.edu_container_school}>{item.name}</Text>
              <View style={styles.edu_container_year_marks}>
                <Text>{item.year}</Text>
                <Text>{item.marks}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/*       
<View style={styles.education_container} >
 </View>
 */}
    </View>
  );
}
