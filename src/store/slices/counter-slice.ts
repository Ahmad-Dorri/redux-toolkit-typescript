import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increament: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    increamentByValue: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(increamentAsync.pending, () => {
        console.log('is pending');
      })
      .addCase(
        increamentAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value += action.payload;
        }
      );
  },
});

//! async function that will send to the server
export const increamentAsync = createAsyncThunk(
  'counter/increamentAsync',
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

export const { increament, decrement, increamentByValue } =
  counterSlice.actions;
export default counterSlice.reducer;
