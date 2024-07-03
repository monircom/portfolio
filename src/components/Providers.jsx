import React, { createContext, useContext, useState } from "react";

// Create a context
const MyContext = createContext();

// Custom hook to use the AboutContext
export const useMyContext = () => useContext(MyContext);

// Provider component
export const Provider = ({ children }) => {
  const [isAboutFirst, setIsAboutFirst] = useState(false);
  const [isRobotFirst, setRobotFirst] = useState(false);
  const [isContactFirst, setContactFirst] = useState(false);

  return (
    <MyContext.Provider
      value={{
        isAboutFirst,
        setIsAboutFirst,
        isRobotFirst,
        setRobotFirst,
        isContactFirst,
        setContactFirst,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
