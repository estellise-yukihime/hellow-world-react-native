/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

// I didn't use Flow cause of the following reasons:
// 1. disabling javascript intellisense
// 2. Flow intellisense is slow
// 3. 

const App = () => {
  const helloWorld = "Hello, World!";

  return (
    <View style={styles.main}>
      <Text style={styles.helloWorldText}>
        {helloWorld}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  helloWorldText: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default App;
