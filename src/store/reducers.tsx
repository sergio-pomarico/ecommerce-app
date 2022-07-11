import {configureStore} from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';

// Reducers & Sagas
import {UIReducer} from './ui';
import {authReducer, authSaga} from './auth';

// Saga
function* rootSaga() {
  yield all([...authSaga]);
}

// Middlewares
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer: {
    ui: UIReducer,
    auth: authReducer,
  },
  middleware: middlewares,
});

sagaMiddleware.run(rootSaga);

export default store;
