import { createSlice } from '@reduxjs/toolkit';

type ThemeStateTypes = 'light' | 'dark';

interface ThemeState {
  value: ThemeStateTypes;
}
const initialState: ThemeState = {
  value: 'light',
};
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.value === 'light'
        ? (state.value = 'dark')
        : (state.value = 'light');
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
