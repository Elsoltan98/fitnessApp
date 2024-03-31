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
import { useLazyQuery } from "@apollo/client";
import { GET_SEARCH } from "../../graphql/quieries";
import LottieView from "lottie-react-native";

export default function Search() {
  const [runSearch, { data, loading, error }] = useLazyQuery(GET_SEARCH);
  const [search, setSearch] = useState("");

  const performSearch = () => {
    runSearch({ variables: { ingr: search } });
  };

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

        {loading && (
          <View>
            <LottieView
              source={require("./../../assets/Animation.json")}
              style={[
                styles.loadingContainer,
                {
                  width: "50%",
                  height: "50%",
                  alignSelf: "center",
                },
              ]}
              autoPlay
              loop={loading}
            />
          </View>
        )}
        <FlatList
          data={data ? data.search.hints : []}
          renderItem={({ item }) => <FoodListItem item={item} />}
          ListEmptyComponent={() => <Text>Search for food</Text>}
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
  loadingContainer: {},
});
