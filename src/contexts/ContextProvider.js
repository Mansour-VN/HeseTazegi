import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const ContextProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [idFood, setIdFood] = useState("1");
  return (
    <StateContext.Provider
      value={{
        modal,
        setModal,
        idFood,
        setIdFood,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

export default ContextProvider;
