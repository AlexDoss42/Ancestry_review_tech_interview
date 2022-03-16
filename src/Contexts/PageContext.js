import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State

const initialState = {
    origin_page: '',
    path: ''
};

// Create Context

export const PageContext = createContext(initialState);

// Provider Component

export const PageProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

// Actions 

function setOriginPage(url) {
    dispatch({
        type: 'setOriginPage',
        payload: url
    });
};

function setPath(path) {
    dispatch({
        type: 'setPath',
        payload: path
    })
};

    return(<PageContext.Provider value={{
        origin_page: state.origin_page,
        path: state.path,
        setOriginPage: setOriginPage,
        setPath: setPath
    }}>
        {children}
    </PageContext.Provider>)
}