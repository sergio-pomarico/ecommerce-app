import {AuthActionsType} from './actions.types';
import {Action} from '@core/types/redux';

const initialState = {
  user: null,
};

export default function authReducer(
  state = initialState,
  action: Action<string, any>,
) {
  switch (action.type) {
    case AuthActionsType.LOGIN: {
      return {...state};
    }
    default:
      return state;
  }
}
