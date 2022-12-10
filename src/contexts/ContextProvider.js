import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const ContextProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [idFood, setIdFood] = useState("1");
  const [itemSelect,setItemSelect] = useState({})
  return (
    <StateContext.Provider
      value={{
        modal,
        setModal,
        idFood,
        setIdFood,
        itemSelect,
        setItemSelect
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

export default ContextProvider;
