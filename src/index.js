import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import '../src/css/iconos.css'
import App from './components/App';
import reducers from './reducers';

import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

const store = createStore(
  reducers, //Son todos lo Reducers
  {}, //Estado inicial
  applyMiddleware(reduxThunk)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);