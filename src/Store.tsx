import React, { createContext, useState } from 'react';
import { AppContextType } from './types';

const initialValue: AppContextType = {
  name: '',
  responses: [0],
  updateName: (_: string) => {
    return;
  },
  updateResponses: (_: Array<number>) => {
    return;
  },
};

export const AppContext = createContext<AppContextType>(initialValue);

const Store = ({ children }: { children: JSX.Element }) => {
  const [name, setName] = useState<string>('');
  const [responses, setResponses] = useState<Array<number>>([
    ...Array(12).fill(0),
  ]);

  const updateName = (name: string) => {
    setName(name);
  };
  const updateResponses = (responses: Array<number>) => {
    setResponses(responses);
  };

  return (
    <AppContext.Provider
      value={{
        responses,
        updateResponses,
        name,
        updateName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Store;
