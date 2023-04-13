import { Alert, Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useDispatch } from "react-redux";
import { addCard } from "../store/actions/card.action";

export function Scanner() {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanner, setScanner] = useState(false);
  const [permissionResponse, requestPermission] =
    BarCodeScanner.usePermissions();

  const dispatch = useDispatch();

  const verifyPerssiion = async () => {
    if (permissionResponse.status !== "granted") {
      Alert.alert("Sorry, it is necessaty to lend the permission");
      const request = await requestPermission();
      return request;
    }

    if (permissionResponse.status == "granted") {
      setHasPermission(true);
      setScanner(true);
    }
  };

  const handleOverAgain = () => {
    setScanner(!scanner);
  };

  const handleScanner = ({ type, data, target }) => {
    setScanner(false);
    const dataSave = {
      id: type,
      data,
      target,
    };

    dispatch(addCard(dataSave));
    Alert.alert("Scanned!");
  };

  return (
    <View style={container}>
      <Text style={{ marginBottom: 20 }}>
        {hasPermission ? "" : "You don't have permission"}
      </Text>
      {hasPermission && (
        <BarCodeScanner
          key={"scanner"}
          onBarCodeScanned={!scanner ? undefined : handleScanner}
          style={styleScanner}
        />
      )}
      {hasPermission ? (
        <View style={contentBtnActive}>
          <Button title="Tap to Scan Again" onPress={handleOverAgain} />
        </View>
      ) : (
        <View style={contentBtnActive}>
          <Button title="Scanner" onPress={verifyPerssiion} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  styleScanner: {
    position: "absolute",

    width: 310,
    height: 310,

    borderRadius: 20,
  },

  contentBtnActive: {
    position: "absolute",
    bottom: "30%",
  },
});

const { container, styleScanner, contentBtnActive } = styles;
