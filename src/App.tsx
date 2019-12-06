import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ContextProvider} from './Context';
import {Calculator} from './components';

const App = () => {
  return (
    <ContextProvider>
      <SafeAreaView style={styles.container}>
        <Calculator />
      </SafeAreaView>
    </ContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
