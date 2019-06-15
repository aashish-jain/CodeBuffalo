import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainNavigator from './src/navigators';
export default function App() {
  return <MainNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
