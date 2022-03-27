import {Action} from '@core/types/redux';
import {ModalProps, ModalTypes} from '@core/types/modal';
import {UIActionsType} from './actions.types';

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

export default function UIReducer(
  state = initialState,
  action: Action<string, any>,
) {
  switch (action.type) {
    case UIActionsType.SHOW_LOADING: {
      const {payload} = action;
      return {...state, loading: payload};
    }
    case UIActionsType.SHOW_MODAl: {
      const {modal} = action.payload;
      return {...state, modal};
    }
    case UIActionsType.HIDE_MODAl: {
      return {...state, modal: defaultModal};
    }
    default:
      return state;
  }
}
