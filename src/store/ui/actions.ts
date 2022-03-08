import {createAction} from '@core/types/action';
import {UIActionsType} from './actions.types';

export const showLoading = (loading: boolean) =>
  createAction(UIActionsType.SHOW_LOADING, loading);
