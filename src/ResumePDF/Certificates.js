import React from "react";

import { useSelector } from "react-redux";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Text, View, StyleSheet, Font, Link } from "@react-pdf/renderer";

Font.register({
  family: "MontserratRegular",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/montserrat/v12/JTUSjIg1_i6t8kCHKm459Wlhzg.ttf",
    },
  ],
});

const styles = StyleSheet.create({
  certi_container: {
    marginTop: "20px",
    width: "100%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-start",
    justifyContent: "flex-start",
  },

  title: {
    width: "80%",
    marginBottom: "1px",
    textTransform: "capitalize",
    fontSize: "25px",
  },
  line: {
    width: "90%",
    height: "2px",
    backgroundColor: "white",
    marginBottom: "10px",
  },
  skills_box: {
    width: "100%",
    minHeight: "20%",
    maxHeight: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: "20px",
    marginTop: "10px",
  },
  field: {
    fontSize: "13px",
    fontFamily: "MontserratRegular",
    margin: "15px 0",
  },
});
export default function Certificates() {
  const certification = useSelector((state) => state.certification);

  return (
    <View style={styles.skills_box}>
      <Text style={styles.title}>certificates</Text>
      <Text style={styles.line}></Text>
      <View style={{ justifyContent: "flex-start" }}>
        {certification.map((item, index) => (
          <View key={index}>
            <Text style={styles.field}>
              <Link src={item.url} style={{ textDecoration: "none" }}>
                {" "}
                🔗{" "}
              </Link>
              {"    "}&nbsp;<span> {item.name}</span>
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
