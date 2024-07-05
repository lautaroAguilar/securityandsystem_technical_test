"use client";
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const initialContent = "Inicio";
export const AppContextProvider = ({ children }) => {
  const [section, setSection] = useState(initialContent);
  const [denied, setDenied] = useState(false);
  const updateSection = (newState) => {
    setSection(newState);
  };
  const handleDenied = () => {
    setDenied(true);
  };
  return (
    <AppContext.Provider
      value={{ section, updateSection, denied, handleDenied }}
    >
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
