import {PayloadAction} from '@reduxjs/toolkit';
import {takeLatest} from 'redux-saga/effects';

export function* signIn(
  action: PayloadAction<{email: string; password: string}, string>,
) {
  const {email, password} = action.payload;
  console.log(email, password);
}

const authSaga = [takeLatest('auth/loginAttempt', signIn)];
export default authSaga;
