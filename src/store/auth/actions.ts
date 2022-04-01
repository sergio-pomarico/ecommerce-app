import {createAction} from '@core/types/redux';
import {AuthActionsType} from './actions.types';

export const loginAttempt = (data: {email: string; password: string}) =>
  createAction(AuthActionsType.LOGIN_ATTEMPT, data);
export const login = () => createAction(AuthActionsType.LOGIN);
