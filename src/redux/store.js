import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storageModule from "redux-persist/lib/storage/index.js";
import taskReducer from "./slices/taskSlice";

const storage = storageModule.default;

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  tasks: taskReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/REGISTER", "persist/FLUSH", "persist/PAUSE", "persist/PERSIST", "persist/PURGE", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
export default store;