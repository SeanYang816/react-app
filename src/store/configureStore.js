
// import { createStore, applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createReducer from "reducers"

import { createLogger } from 'redux-logger'
import { createInjectorsEnhancer } from "redux-injectors";

import createSagaMiddleware from "redux-saga";
// import reducer from "./reducers"; //the rootReducer

const logger = createLogger({
  diff: true,
  collapsed: true,
})

const sagaMiddleware = createSagaMiddleware();
const runSaga = sagaMiddleware.run
const middlewares = [logger, sagaMiddleware]


const store = configureStore({
  reducer: createReducer(),
  // apply all middlewares in the array
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ...middlewares],
  // devTools: process.env.NODE_ENV !== 'production' || process.env.PUBLIC_URL.length > 0,
  enhancers: [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ],

})
// const store = compose(
//   applyMiddleware(...middleware),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )(createStore)(reducers);

// runSaga(rootSaga);

export default store;


