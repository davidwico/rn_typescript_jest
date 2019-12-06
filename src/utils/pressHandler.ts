import {useAppContext} from './contextHelper';
import KEYS from '../components/Keyboard/constants';

type Context = [
  {
    display: string;
    result: string;
    currentOperation: null | string;
  },
  ({}) => void,
];

export const handleNumberPress = (context: Context, num: number) => {
  const {display, currentOperation, update} = useAppContext(context);
  if (currentOperation === 'equals') {
    return update({display: `${num}`, currentOperation: null});
  }
  if (display === `${KEYS.NUM_0}` && display.length === 1) {
    return update({display: `${num}`});
  }
  return update({display: display + `${num}`});
};

export const handleErasePress = (context: Context) => {
  const {update} = useAppContext(context);
  return update({display: '0', result: '0', currentOperation: 'erase'});
};

export const handleAddPress = (context: Context) => {
  const {display, update} = useAppContext(context);
  return update({display: display + '+', currentOperation: 'add'});
};

export const handleEqualsPress = (context: Context) => {
  const {display, update} = useAppContext(context);
  const arr = display.split('+').reduce((a, b) => Number(a) + Number(b), 0);
  return update({
    display: `${arr}`,
    result: `${arr}`,
    currentOperation: 'equals',
  });
};
