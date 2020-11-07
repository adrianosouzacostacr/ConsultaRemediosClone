import React from 'react';

import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.text} accessibilityLabel="message">
          Agora sim vai dar certo \o/
        </Text>
        <Text style={styles.text} accessibilityLabel="brand">
          Consulta Remédios
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
