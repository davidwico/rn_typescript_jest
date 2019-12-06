import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type Props = {
  text: string;
  callback: () => void;
};

const Button = ({text, callback}: Props) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={callback}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'lightgrey',
    width: '23%',
    marginVertical: 10,
    paddingVertical: 10,
  },
  text: {
    fontSize: 20,
  },
});

export default Button;
