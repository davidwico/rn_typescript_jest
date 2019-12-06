import React, {useState} from 'react';

type Props = {
  children: React.ReactNode;
};

type State = {
  display: string;
  result: string;
  currentOperation: null | string;
};

const INIT_STATE: State = {display: '0', result: '0', currentOperation: null};

const AppContext = React.createContext(INIT_STATE);

const ContextProvider = ({children}: Props) => {
  const [state, dispatch] = useState(INIT_STATE);

  return <AppContext.Provider value={[state, dispatch] as any}>{children}</AppContext.Provider>;
};

export {AppContext, ContextProvider, INIT_STATE};
