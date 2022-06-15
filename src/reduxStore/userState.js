/* eslint-disable default-param-last */
//! Reducers take the state and actions as arguments and returns the updated versions of the state
//! ACTION OBJECT
export const LOG_IN_ACTION = 'LOG_IN';
export const LOG_OUT_ACTION = 'LOG_OUT';
export const CLEAR_FAVORITES_ACTION = 'CLEAR_FAVORITES';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case LOG_IN_ACTION:
      return action.payload.user;
    case LOG_OUT_ACTION:
      return null;
    case CLEAR_FAVORITES_ACTION:
      return { ...state, favorites: [] };
    default:
      return state;
  }
};

export default userReducer;
