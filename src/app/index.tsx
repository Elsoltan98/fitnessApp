import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import FoodListItem from "../components/FoodListItem";
import { foodItems } from "../_mockup/data";

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search...." style={styles.input} />
      <FlatList
        data={foodItems}
        renderItem={({ item }) => (
          <FoodListItem
            item={{ label: item.label, cal: item.cal, brand: item.brand }}
          />
        )}
        contentContainerStyle={{ gap: 5 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10,
    gap: 5,
  },
  input: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 20,
  },
});
