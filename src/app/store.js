import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import loginReducer from "../features/loginSlice";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, cartReducer);
const persistedReducerlogin = persistReducer(persistConfig, loginReducer);

export default configureStore({
  reducer: { auth: persistedReducer, login: persistedReducerlogin },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
