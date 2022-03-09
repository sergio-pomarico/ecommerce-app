import {Action} from '@core/types/action';
import {UIActionsType} from './actions.types';

const initialState = {
  loading: false,
};

export default function UIReducer(
  state = initialState,
  action: Action<string, any>,
) {
  switch (action.type) {
    case UIActionsType.SHOW_LOADING: {
      console.log('dispatch');
      const {loading} = action.payload;
      return {...state, loading};
    }
    default:
      return state;
  }
}