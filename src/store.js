import { createStore } from "redux";
import reducerFunction from "./reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const config = {
  key: "user",
  storage,
  whitelist: "user",
};

const persistedReducer = persistReducer(config, reducerFunction);
const store = createStore(persistedReducer);

export default store;
