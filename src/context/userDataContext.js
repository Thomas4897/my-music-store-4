import React, { createContext, useContext, useState } from 'react';

export const userDataContext = createContext();

export const useUserData = () => useContext(userDataContext);

// This component is gonna handle everythign that relates to the shopping cart.
// that way all we have to do is wrap our application with it.
// and that will allows to have a cleaner app.js file
function UserDataProvider(props) {
  const { children } = props;

  const [userData, setUserData] = useState();

  const addToUserData = (user) => setUserData(user);

  const removeUserData = () => setUserData(undefined);

  return (
    <userDataContext.Provider value={{ userData, addToUserData, removeUserData }}>
      {children}
    </userDataContext.Provider>
  );
}

export default UserDataProvider;
