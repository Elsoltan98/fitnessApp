import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import FoodListItem from "../components/FoodListItem";
import { foodItems } from "../_mockup/data";
import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");

  const performSearch = () => {
    console.warn("Searching for: ", search);

    setSearch("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search...."
          style={styles.input}
        />
        {search && <Button title="Search" onPress={performSearch} />}

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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    gap: 10,
  },
  input: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 20,
  },
});
