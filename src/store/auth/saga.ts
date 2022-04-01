import {takeLatest} from 'redux-saga/effects';
import {AuthActionsType} from './actions.types';
import {Action} from '@core/types/redux';

export function* signIn(action: Action<string, any>) {
  const {email, password} = action.payload;
  console.log(email, password);
}

const authSaga = [takeLatest(AuthActionsType.LOGIN_ATTEMPT, signIn)];
export default authSaga;
