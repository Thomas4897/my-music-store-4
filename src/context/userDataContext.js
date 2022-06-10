import React, {
  createContext, useContext, useReducer,
} from 'react';

export const userDataContext = createContext();

export const useUserData = () => useContext(userDataContext);

//! ACTION OBJECT
const LOG_IN_ACTION = 'LOG_IN';
const LOG_OUT_ACTION = 'LOG_OUT';
const CLEAR_FAVORITES_ACTION = 'CLEAR_FAVORITES';

const userDataReducer = (state, action) => {
  switch (action.type) {
    case LOG_IN_ACTION:
      return action.payload.user;
    case LOG_OUT_ACTION:
      return undefined;
    case CLEAR_FAVORITES_ACTION:
      return { ...state, favorites: [] };
    default:
      return state;
  }
};

// This component is gonna handle everythign that relates to the shopping cart.
// that way all we have to do is wrap our application with it.
// and that will allows to have a cleaner app.js file
function UserDataProvider(props) {
  const { children } = props;

  const [user, dispatch] = useReducer(userDataReducer, undefined);

  const signIn = (userData) => {
    dispatch({
      type: LOG_IN_ACTION,
      payload: {
        user: userData,
      },
    });
  };

  const signOut = () => {
    dispatch({ type: LOG_OUT_ACTION });
  };

  //! Not preferred method
  // const addToUserData = (user) => setUserData(user);
  // const removeUserData = () => setUserData(undefined);

  return (
    <userDataContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </userDataContext.Provider>
  );
}

export default UserDataProvider;
