import { contactsReducer } from './Contacts/contactsReducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

// -----------------------------------------------------
// import { combineReducers, createStore } from 'redux';
// import { devToolsEnhancer } from "@redux-devtools/extension";

// const rootReducer = combineReducers({
//     contacts: contactsReducer
// })

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
