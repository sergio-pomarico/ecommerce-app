import {
  createStore,
  combineReducers,
  applyMiddleware,
  AnyAction,
  Reducer,
} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';

// Reducers & Sagas
import {UIReducer} from './ui';
import {authReducer, authSaga} from './auth';

const reducers: Reducer<any, AnyAction> = combineReducers({
  ui: UIReducer,
  auth: authReducer,
});

// Saga
function* rootSaga() {
  yield all([...authSaga]);
}

const sagaMiddleware = createSagaMiddleware();

// Middlewares
const middlewares = [sagaMiddleware];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

export default store;
