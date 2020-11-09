import React from 'react';

import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';

import env from './../../../../env';

const App = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.safeArea}>
        <Text accessibilityLabel="brand" testID="">
          {env.product_name}
        </Text>
        <Text accessibilityLabel="message" testID="">
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
});

export default App;
