import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    name: 'Rakibul Hasan',
    email: 'rakibhbrand@gmail.com',
  });

  const signIn = (email) => {
    setUser({
      name: 'Rakibul Hasan',
      email: email || 'rakibhbrand@gmail.com',
    });
    setIsLoggedIn(true);
  };

  const signUp = (name, email) => {
    setUser({
      name: name || 'Rakibul Hasan',
      email: email || 'rakibhbrand@gmail.com',
    });
    setIsLoggedIn(true);
  };

  const signOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        user,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}