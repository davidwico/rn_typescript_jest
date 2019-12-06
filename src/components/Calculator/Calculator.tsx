import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Display} from '../Display';
import {Keyboard} from '../Keyboard';

const Calculator = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Display />
        <Keyboard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '90%',
    padding: 20,
    marginVertical: '10%',
  },
});

export default Calculator;
