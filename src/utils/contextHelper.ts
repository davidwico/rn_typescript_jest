type Context = [
  {
    display: string;
    result: string;
    currentOperation: null | string;
  },
  ({}) => void,
];

export const useAppContext = (context: Context) => {
  const state = context[0];
  const dispatch = context[1];
  return {
    ...state,
    display: state && state.display,
    result: state && state.result,
    currentOperation: state && state.currentOperation,
    update: (object: {}) => dispatch({...state, ...object}),
  };
};
