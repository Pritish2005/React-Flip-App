import React, { createContext, useContext } from 'react';

const CardContext = createContext();

export const useCardContext = () => useContext(CardContext);

export const CardProvider = ({ value, children }) => (
  <CardContext.Provider value={value}>{children}</CardContext.Provider>
);
