import React from "react";
import { Document, Page, View, StyleSheet, Font } from "@react-pdf/renderer";

import store from "../store";

import { Provider } from "react-redux";
import Name from "./Name";
import Contact from "./Contact";
import Skills from "./Skills";
import Certificates from "./Certificates";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";

Font.register({
  family: "KadwaRegular",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/kadwa/v2/rnCm-x5V0g7ipiTAT8M.ttf",
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    margin: 0,
    boxShadow: "0 12px -5px #00000080",
    fontFamily: "KadwaRegular",
  },
  header: {
    color: "white",
    backgroundColor: "#171b2b",
    height: "20%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    alignItems: "center",
    padding: "10px",
  },

  container: {
    width: "100%",
    height: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  aside: {
    height: "100%",
    width: "37%",
    backgroundColor: "#707273",
    color: "white",
    padding: "10px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  body: {
    height: "100%",
    width: "63%",
    padding: "10px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    color: "#232323",
  },
});

// Create Document Component
const Pdf = () => (
  <Provider store={store}>
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Name />
          <Contact />
        </View>

        <View style={styles.container}>
          <View style={styles.aside}>
            <Skills />

            <Certificates />
          </View>
          <View style={styles.body}>
            <About />
            <Education />
            <Projects />
          </View>
        </View>
      </Page>
    </Document>
  </Provider>
);

export default Pdf;
