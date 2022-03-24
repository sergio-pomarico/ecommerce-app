import {Action} from '@core/types/redux';
import {UIActionsType} from './actions.types';

const initialState = {
  loading: false,
  modal: true,
};

export default function UIReducer(
  state = initialState,
  action: Action<string, any>,
) {
  switch (action.type) {
    case UIActionsType.SHOW_LOADING: {
      const {show} = action.payload;
      return {...state, show};
    }
    case UIActionsType.SHOW_MODAl: {
      const {show} = action.payload;
      return {...state, show};
    }
    default:
      return state;
  }
}
