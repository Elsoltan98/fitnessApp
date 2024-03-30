import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://beauceville.stepzen.net/api/turbulent-bird/__graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      "apikey beauceville::stepzen.io+1000::37c123805377ae47a9efb77301d8f61303f8f4c348275ebd10e28f2d419ac70b",
  },
});

const RootLayout = () => {
  return (
    <ApolloProvider client={client}>
      <Stack />
    </ApolloProvider>
  );
};

export default RootLayout;
