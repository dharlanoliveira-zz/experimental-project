import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/index.js'
import createSagaMiddleware from "redux-saga";
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import rootSaga from "./sagas";
import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer, composeWithDevTools(
        //applyMiddleware(thunk),
        applyMiddleware(sagaMiddleware),
    )
);

// noinspection JSUnresolvedFunction
sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
