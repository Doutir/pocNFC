import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Routes} from './routes';
const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <Routes />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
});

export default App;
