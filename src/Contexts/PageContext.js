import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State

const initialState = {
    origin_page: ''
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

    return(<PageContext.Provider value={{
        origin_page: state.origin_page,
        setOriginPage: setOriginPage
    }}>
        {children}
    </PageContext.Provider>)
}