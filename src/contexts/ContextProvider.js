import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();



const ContextProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  return (
    <StateContext.Provider
      value={{
        modal,
        setModal
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

export default ContextProvider;
