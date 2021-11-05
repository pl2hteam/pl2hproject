import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'core-js';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  //import App from './components/App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Reducer from './_reducers';
import rootReducer from './module';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools());

// 아래 코드 에러 (원인모름)
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(store);

ReactDOM.render(
  <Provider
    store={store}
  >
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
serviceWorker.unregister();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();