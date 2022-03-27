import {ModalProps} from '@core/types/modal';
import {createAction} from '@core/types/redux';
import {UIActionsType} from './actions.types';

export const showLoading = (show: boolean) =>
  createAction(UIActionsType.SHOW_LOADING, show);

export const showModal = (modal: ModalProps) =>
  createAction(UIActionsType.SHOW_MODAl, modal);

export const hideModal = () => createAction(UIActionsType.HIDE_MODAl);
