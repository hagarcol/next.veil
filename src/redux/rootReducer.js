import { combineReducers } from "redux";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

import CryptoReducer from "./slices/crypto";
import ExtraReducer from "./slices/extra";
// ----------------------------------------------------------------------

export const createNoopStorage = () => ({
  getItem() {
    return Promise.resolve(null);
  },
  setItem(_key, value) {
    return Promise.resolve(value);
  },
  removeItem() {
    return Promise.resolve();
  },
});

export const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

export const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  crypto: CryptoReducer,
  extra: ExtraReducer
});

export default rootReducer;
