import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';
import reducer from './reducer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);


ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));

