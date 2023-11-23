import { combineReducers } from '@reduxjs/toolkit';
import selectedAfiliadosReducer from './selectedUserReducer'

// Combina los reducers en un root reducer
const rootReducer = combineReducers({
  selectedUser: selectedAfiliadosReducer,
  // users: usersReducer,
  
});

export default rootReducer;