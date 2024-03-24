import { View, Text, StyleSheet } from "react-native";
import React, { FC } from "react";
import { AntDesign } from "@expo/vector-icons";

export type Item = {
  label: string;
  cal: number;
  brand: string;
};

type FoodListItemProp = {
  item: Item;
};

const FoodListItem: FC<FoodListItemProp> = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.labelTxt}>{item.label}</Text>
        <Text style={styles.descTxt}>
          {item.cal} cal, {item.brand}
        </Text>
      </View>
      <AntDesign name="pluscircleo" size={24} color="royalblue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gainsboro",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemContainer: {
    flex: 1,
    gap: 5,
  },
  labelTxt: {
    fontWeight: "bold",
    fontSize: 16,
  },
  descTxt: {
    color: "dimgray",
  },
});

export default FoodListItem;
