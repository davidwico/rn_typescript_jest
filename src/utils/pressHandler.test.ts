import {handleNumberPress, handleErasePress, handleAddPress, handleEqualsPress} from './pressHandler';

type Context = [
  {
    display: string;
    result: string;
    currentOperation: null | string;
  },
  ({}: {}) => void,
];

const context: Context = [
  {
    display: '0',
    result: '0',
    currentOperation: null,
  },
  updated => ({...context[0], ...updated}),
];

describe('handleNumberPress', () => {
  it('when 0 is on display, pressing 0 should do nothing on state context', () => {
    const expected = {
      display: '0',
      result: '0',
      currentOperation: null,
      update: () => null,
    };
    const result = handleNumberPress(context, 0);
    expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
  });

  it('when 0 is on display, pressing 4 should update display value to 4', () => {
    const expected = {
      display: '4',
      result: '0',
      currentOperation: null,
      update: () => null,
    };
    const result = handleNumberPress(context, 4);
    expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
  });

  it('when 5 is on display, pressing 4 should update display value to 54', () => {
    const expected = {
      display: '54',
      result: '0',
      currentOperation: null,
      update: () => null,
    };
    // change default display value to 5
    context[0].display = '5';
    const result = handleNumberPress(context, 4);
    expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
  });

  it('when 54 is on display and current operation is equals, should overwrite display value and erase current operation', () => {
    const expected = {
      display: '5',
      result: '0',
      currentOperation: null,
      update: () => null,
    };
    // change default display value to 5
    context[0].display = '54';
    context[0].currentOperation = 'equals';
    const result = handleNumberPress(context, 5);
    expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
  });
});

describe('handleAddPress', () => {
  it('when 7 is on display and add is pressed, should change currentOperation value and add + sign to display value', () => {
    const expected = {
      display: '7+',
      result: '0',
      currentOperation: 'add',
      update: () => null,
    };
    context[0].display = '7';
    const result = handleAddPress(context);
    expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
  });
});

describe('handleErasePress', () => {
  it('when 7 is on display and result is 77, should change currentOperation value to erase and reset display, result values', () => {
    const expected = {
      display: '0',
      result: '0',
      currentOperation: 'erase',
      update: () => null,
    };
    context[0].display = '7';
    context[0].result = '74';
    const result = handleErasePress(context);
    expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
  });
});

describe('handleErasePress', () => {
  it('when 7 is on display and result is 77, should change currentOperation value to erase and reset display, result values', () => {
    const expected = {
      display: '0',
      result: '0',
      currentOperation: 'erase',
      update: () => null,
    };
    context[0].display = '7';
    context[0].result = '74';
    const result = handleErasePress(context);
    expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
  });
});

describe('handleEqualsPress', () => {
  it('when 7+8 is on display, should calculate and result as display, result values, should change currentOperation to equals', () => {
    const expected = {
      display: '15',
      result: '15',
      currentOperation: 'equals',
      update: () => null,
    };
    context[0].display = '7+8';
    const result = handleEqualsPress(context);
    expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
  });
});
