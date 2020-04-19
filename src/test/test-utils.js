// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import {render as rtlRender} from '@testing-library/react'
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import reducer from '../reducers'
import React from "react";
import createSagaMiddleware from "redux-saga";
import dynamicMiddlewares, {addMiddleware, removeMiddleware, resetMiddlewares} from 'redux-dynamic-middlewares'
import rootSaga from "../sagas";



function renderWithRedux(
    ui
) {
    const renderOptions = {}
    const sagaMiddleware = createSagaMiddleware();
    let myStore = createStore(reducer, {}, applyMiddleware(sagaMiddleware))
    sagaMiddleware.run(rootSaga)

    function Wrapper({children}) {
        return <Provider store={myStore}>{children}</Provider>
    }

    return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
}

afterEach(() => {
    jest.resetAllMocks()
    resetMiddlewares()
});

export function getTextFieldByLabel(screen, label) {
    return screen.queryByText(label).parentNode.querySelector('input')
}

// re-export everything
export * from '@testing-library/react'

// override render method
export {renderWithRedux}