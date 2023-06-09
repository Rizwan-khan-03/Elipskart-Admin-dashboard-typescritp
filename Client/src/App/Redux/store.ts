import {  ThunkAction, Action } from "@reduxjs/toolkit";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { default as storage } from "redux-persist/lib/storage/v5";
import { default as storage } from "redux-persist/lib/storage";


import { combineReducers } from "redux";


import commonDataSlice from "./Reducers/Common/commonDataSlice";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  commonDataSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
