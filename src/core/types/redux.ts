import store from '@store/reducers';

export interface Action<T, P> {
  readonly type: T;
  readonly payload?: P;
}

export function createAction<T extends string, P>(
  type: T,
  payload?: P,
): Action<T, P> {
  return {type, payload};
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
