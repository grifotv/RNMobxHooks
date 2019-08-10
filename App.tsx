import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  description: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
});

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.inner}>
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.description}>World</Text>
      </View>
    </SafeAreaView>
  );
};