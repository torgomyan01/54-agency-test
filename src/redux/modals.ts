import { createSlice } from '@reduxjs/toolkit';
import { AlertSiteTypes } from '../enums/enums';

interface IAlertSite {
  modalRegister: boolean;
  modalLogin: boolean;
  resetPasswordEmail: boolean;
  modalSaveNewPassword: boolean;
  modalCreateUsername: boolean;
  chat: boolean;
}
const initialState: IAlertSite = {
  modalRegister: false,
  modalLogin: false,
  resetPasswordEmail: false,
  modalSaveNewPassword: false,
  modalCreateUsername: false,
  chat: false
};

const Modals = createSlice({
  name: 'modal-register',
  initialState,
  reducers: {
    setModalRegister(state, action) {
      state.modalRegister = action.payload;
    },
    setModalLogin(state, action) {
      state.modalLogin = action.payload;
    },
    setResetPasswordEmail(state, action) {
      state.resetPasswordEmail = action.payload;
    },
    setModalSaveNewPassword(state, action) {
      state.modalSaveNewPassword = action.payload;
    },
    setModalCreateUsername(state, action) {
      state.modalCreateUsername = action.payload;
    },
    setChat(state, action) {
      state.chat = action.payload;
    }
  }
});

export const {
  setModalRegister,
  setModalLogin,
  setResetPasswordEmail,
  setModalSaveNewPassword,
  setModalCreateUsername,
  setChat
} = Modals.actions;

export default Modals.reducer;
