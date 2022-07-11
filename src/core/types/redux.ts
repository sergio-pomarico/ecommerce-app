import store from '@store/reducers';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
