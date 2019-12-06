import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from '../Button';
import KEYS from './constants';
import {AppContext} from '../../Context';
import {handleNumberPress, handleAddPress, handleEqualsPress, handleErasePress} from '../../utils/pressHandler';

const Keyboard = () => {
  const context: any = useContext(AppContext);
  const buttons = [
    {key: KEYS.NUM_7, callback: () => handleNumberPress(context, 7)},
    {key: KEYS.NUM_8, callback: () => handleNumberPress(context, 8)},
    {key: KEYS.NUM_9, callback: () => handleNumberPress(context, 9)},
    {key: KEYS.DIVIDE, callback: () => null},
    {key: KEYS.NUM_4, callback: () => handleNumberPress(context, 4)},
    {key: KEYS.NUM_5, callback: () => handleNumberPress(context, 5)},
    {key: KEYS.NUM_6, callback: () => handleNumberPress(context, 6)},
    {key: KEYS.MULTIPLY, callback: () => null},
    {key: KEYS.NUM_1, callback: () => handleNumberPress(context, 1)},
    {key: KEYS.NUM_2, callback: () => handleNumberPress(context, 2)},
    {key: KEYS.NUM_3, callback: () => handleNumberPress(context, 3)},
    {key: KEYS.ADD, callback: () => handleAddPress(context)},
    {key: KEYS.NUM_0, callback: () => handleNumberPress(context, 0)},
    {key: KEYS.DOT, callback: () => null},
    {key: KEYS.EQUALS, callback: () => handleEqualsPress(context)},
    {key: KEYS.SUBTRACT, callback: () => null},
    {key: KEYS.CLEAR, callback: () => handleErasePress(context)},
  ];
  return (
    <View style={styles.container}>
      {buttons.map((item, index) => (
        <Button key={index} text={`${item.key}`} callback={item.callback} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});

export default Keyboard;
