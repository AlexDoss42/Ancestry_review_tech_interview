import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


// Initial State
const initialState = {
    origin_page: 'http://localhost:3000/',
    path: '/'
};

// Create Context

export const PageContext = createContext(initialState);

// Provider Component

export const PageProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(<PageContext.Provider value={{
        origin_page: state.origin_page,
        path: state.path
    }}>
        {children}
    </PageContext.Provider>)
}