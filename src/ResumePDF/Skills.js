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
  skills_container: {
    marginTop: "7px",
    width: "100%",
    height: "80%",
    display: "flex",
    flexDirection: "row",
    alignContent: "flex-start",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  skill_box: {
    padding: "5px",
    backgroundColor: "#171b2b",
    color: "#ffffff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "11px",
    borderRadius: "10px",
    minWidth: "20%",
    maxWidth: "90%",
    height: "25px",
    textTransform: "uppercase",

    fontFamily: "MontserratRegular",
    marginLeft: "5px",
    marginTop: "5px",
  },

  title: {
    width: "40%",
    textTransform: "capitalize",
    fontSize: "25px",
  },
  line: {
    width: "90%",
    height: "2px",
    backgroundColor: "white",
  },
  skills_box: {
    width: "100%",
    height: "25%",
    maxHeight: "40%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: "10px",
    marginTop: "5px",
  },
});
export default function Skills() {
  const skills = useSelector((state) => state.skills);

  return (
    <View style={styles.skills_box}>
      <View style={{ width: "100%", height: "auto", marginBottom: "10px" }}>
        <Text style={styles.title}>Skills</Text>
        <Text style={styles.line}>_</Text>
      </View>

      <View style={styles.skills_container}>
        {skills?.map((item, index) => (
          <Text key={index} style={styles.skill_box}>
            {item}
          </Text>
        ))}
      </View>
    </View>
  );
}
