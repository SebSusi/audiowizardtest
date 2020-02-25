import React, { createContext, useState } from "react";

export const UserContext = createContext();

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [sex, setSex] = useState(null);

  return (
    <UserContext.Provider
      value={{
        name,
        surname,
        setName,
        setSurname,
        sex,
        setSex
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
