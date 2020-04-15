//in Provider.js

import React from 'react'
import {Provider} from 'react-redux'
import {createStore} from "redux";
import reducer from "../src/reducers";

export const store = createStore(reducer)

export const withProvider = (story) => {
    return <Provider store={store}>
        {story()}
    </Provider>
}