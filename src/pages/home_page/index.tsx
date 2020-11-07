import React from 'react';

import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.text} accessible={true} testID="text">
          Agora sim vai dar certo \o/
        </Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'visible',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {},
});

export default App;
