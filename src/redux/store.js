import { createStore } from 'redux';
//import persistState from 'redux-localstorage';

import rootReducer from './rootReducer';

// const enhancer = compose(persistState('historySearch'));
// const store = createStore(rootReducer, [], enhancer);
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

//window.store = store;

export default store;
