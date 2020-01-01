import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from './src/component/Appbar';
import MemoList from './src/component/MemoList';
import CircleButton from './src/elements/CircleButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar />
      <MemoList />
      <CircleButton>+</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
});
