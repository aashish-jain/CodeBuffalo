import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainNavigator from './src/navigators';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from "graphql-tag";
import { ApolloProvider } from 'react-apollo';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/'
});
const client = new ApolloClient({
  cache,
  link
});
export default function App() {
  return (<ApolloProvider client={client}>
    <MainNavigator />
  </ApolloProvider>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
