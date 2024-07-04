"use client";
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const initialContent = "Inicio";
export const AppContextProvider = ({ children }) => {
  const [state, setState] = useState(initialContent);

  const updateState = (newState) => {
    setState(newState);
  };

  return (
    <AppContext.Provider value={{ state, updateState }}>
      {children}
    </AppContext.Provider>
  );
};
export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext debe usarse dentro de un AppProvider");
  }
  return context;
}
