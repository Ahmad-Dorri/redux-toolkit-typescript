import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter-slice';
import themeReducer from './slices/theme-slice';
import modalReducer from './slices/modal-slice';
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    counter: counterReducer,
    theme: themeReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
