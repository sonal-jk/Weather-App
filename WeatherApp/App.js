import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello App!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
