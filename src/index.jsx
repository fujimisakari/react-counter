import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from '../components/App'
import configureStore from '../store/configureStore';
/* global document */

// 作成したreducerであるcounter関数を引数に指定してstoreを作成
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
