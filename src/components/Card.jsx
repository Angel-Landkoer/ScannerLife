import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export function Card({ data }) {
  return (
    <View style={[container]}>
      <View style={contentImg}>
        <Image
          style={img}
          source={{
            uri: "https://qrcg-free-editor.qr-code-generator.com/main/assets/images/websiteQRCode_noFrame.png",
          }}
        />
      </View>

      <View style={contentContext}>
        <Text>Type: {data.id}</Text>

        <Text style={{ fontSize: 10 }}>Data: {data.data}</Text>

        <Text>Target: {data.target}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: 100,
  },
  img: {
    width: 50,
    height: 50,

    borderRadius: 20,
  },
  contentImg: {
    justifyContent: "center",
    alignItems: "center",
  },
  contentContext: {
    // flexDirection: "row",
    // alignItems: "center",
    // flexWrap: "wrap"
    // justifyContent: "center",
    // textDecorationLine: "line-through"
  },
});

const { container, img, contentImg, contentContext } = styles;
