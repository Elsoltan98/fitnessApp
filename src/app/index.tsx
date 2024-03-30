import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
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
import { useQuery } from "@apollo/client";
import { GET_SEARCH } from "../../graphql/quieries";

export default function Search() {
  const { data, loading, error } = useQuery(GET_SEARCH, {
    variables: { ingr: "Pizza" },
  });
  const [search, setSearch] = useState("");

  const performSearch = () => {
    console.warn("Searching for: ", search);

    setSearch("");
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) return <Text>Faild to fetching data</Text>;

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
          data={data.search.hints}
          renderItem={({ item }) => <FoodListItem item={item} />}
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
