import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {AppContext} from '../../Context';
import {useAppContext} from '../../utils/contextHelper';

const Display = () => {
  const context: any = useContext(AppContext);
  const {display} = useAppContext(context);
  console.log('he')
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{display}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  text: {
    fontSize: 26,
    textAlign: 'right',
  },
});

export default Display;
