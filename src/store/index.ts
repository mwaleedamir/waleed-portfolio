import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";
import contactReducer from "./slices/contactSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      ui: uiReducer,
      contact: contactReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
