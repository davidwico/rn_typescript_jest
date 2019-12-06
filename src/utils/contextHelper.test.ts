import {useAppContext} from './contextHelper';

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
  ({}) => null,
];

const expected = {
  display: '0',
  result: '0',
  currentOperation: null,
  update: () => null,
};

it('convert context array to expected helper object', () => {
  const appContext = useAppContext(context);
  expect(JSON.stringify(appContext)).toEqual(JSON.stringify(expected));
});
