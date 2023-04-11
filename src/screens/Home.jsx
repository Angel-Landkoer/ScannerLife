import {
  Button,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../components/Card";
import { deletedAllCard } from "../store/actions/card.action";

export function Home() {
  const dispatch = useDispatch();

  const cards = useSelector((state) => state.cards);
  const sizeCards = useSelector((state) => state.sizeCard);

  const handleDeleted = () => dispatch(deletedAllCard());

  return (
    <View style={container}>
      <View>
        <Text
          style={
            sizeCards
              ? { fontSize: 15, color: "green" }
              : { fontSize: 15, color: "red" }
          }
        >
          The Length is {sizeCards}
        </Text>
      </View>
      <FlatList
        data={cards}
        renderItem={({ item }) => <Card data={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      <Button title="Delete ALL" onPress={handleDeleted} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    height: Dimensions.get("window").height / 1.2,
    padding: 10,
  },
});

const { container } = styles;
