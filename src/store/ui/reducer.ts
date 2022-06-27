import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {ModalProps, ModalTypes} from '@core/types/modal';

const defaultModal: ModalProps = {
  show: false,
  title: '',
  description: '',
  type: ModalTypes.INFO,
};

const initialState = {
  loading: false,
  modal: defaultModal,
};

const uiSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    showLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    showModal: (state, action: PayloadAction<ModalProps>) => {
      state.modal = action.payload;
    },
    hideModal: state => {
      state.modal = defaultModal;
    },
  },
});

export const Actions = uiSlice.actions;
export default uiSlice.reducer;
