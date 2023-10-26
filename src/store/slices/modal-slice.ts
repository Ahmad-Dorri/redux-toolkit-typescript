import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export enum ModalType {
  AddTodo = 'AddTodo',
  DeleteTodo = 'DeleteTodo',
}

interface ModalState {
  type: ModalType | null;
  isOpen: boolean;
}

const initialState: ModalState = {
  type: null,
  isOpen: false,
};

export const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    onOpen: (state, action: PayloadAction<ModalType>) => {
      state.type = action.payload;
      state.isOpen = true;
    },
    onClose: (state) => {
      state.isOpen = false;
      state.type = null;
    },
  },
});

export default ModalSlice.reducer;
export const { onClose, onOpen } = ModalSlice.actions;
