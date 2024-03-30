import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { foodItems } from "../_mockup/data";
import FoodListItem from "../components/FoodListItem";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.addContainer}>
        <Text style={styles.todayText}>Calories</Text>
        <Text>1770 - 360 = 1692</Text>
      </View>
      <View style={styles.addContainer}>
        <Text style={styles.todayText}>Today's logged food</Text>
        <Link href="/search" asChild>
          <Button title="Add Food" />
        </Link>
      </View>
      <FlatList
        data={foodItems}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => <FoodListItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
    gap: 10,
  },
  addContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  todayText: {
    fontSize: 18,
    fontWeight: "500",
    flex: 1,
    color: "dimgray",
  },
});

export default HomeScreen;
