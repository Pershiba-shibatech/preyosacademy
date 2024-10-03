import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root_reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
  key: "root", // Key in storage
  storage,     // Default storage: localStorage
  blacklist: [], // Add the names of reducers you want to persist, e.g., ['auth', 'user']
};

// Wrap the rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export default store;
