import React, { createContext, useState } from 'react';

const initialValue = {
  name: '',
  responses: [0],
  colorType: '',
  updateName: (_: string) => {
    return;
  },
  updateResponses: (_: Array<number>) => {
    return;
  },
  updateColorType: (_: string) => {
    return;
  },
};

export const AppContext = createContext(initialValue);

const Store = ({ children }: { children: JSX.Element }) => {
  const [name, setName] = useState<string>('');
  const [responses, setResponses] = useState<Array<number>>([
    ...Array(12).fill(0),
  ]);
  const [colorType, setColorType] = useState<string>('');
  const updateName = (name: string) => {
    setName(name);
  };
  const updateResponses = (responses: Array<number>) => {
    setResponses(responses);
  };
  const updateColorType = (colorType: string) => {
    setColorType(colorType);
  };
  return (
    <AppContext.Provider
      value={{
        responses,
        updateResponses,
        colorType,
        updateColorType,
        name,
        updateName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Store;
