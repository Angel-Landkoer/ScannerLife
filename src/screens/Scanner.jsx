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

  // usePermissions:  {"canAskAgain": true, "expires": "never", "granted": true, "status": "granted"}
  // usePermissions:  {"canAskAgain": true, "expires": "never", "granted": false, "status": "denied"}

  const verifyPerssiion = async () => {
    console.log("permissionResponse.status: ", permissionResponse.status);
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
    console.log(scanner);
  };

  const handleScanner = ({ type, data, target }) => {
    setScanner(false);
    const dataSave = {
      id: type,
      data,
      target,
    };

    dispatch(addCard(dataSave));
  };

  return (
    <View style={container}>
      <Text style={{ marginBottom: 20 }}>
        {hasPermission ? "" : "You don't have permission"}
      </Text>
      <BarCodeScanner
        onBarCodeScanned={!hasPermission ? undefined : handleScanner}
        key={counterKey}
        style={styleScanner}
      />
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

// useEffect(() => {
//   (async () => {
//     const { status } = await BarCodeScanner.requestPermissionsAsync();

//     if (status !== "granted") {
//       Alert.alert("Sorry, it is necessaty to lend the permission");
//     }

//     if (status == "granted") {
//       setHasPermission(true);
//       setScanner(true);
//     }
//   })();
// }, [hasPermission]);
