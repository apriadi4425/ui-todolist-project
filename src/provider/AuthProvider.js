import React, {createContext, useReducer} from 'react'
import {initialState, reducer} from './reducer'


export const AuthContext = createContext()

export const AuthProvider = ({childreen}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const AuthState = {state, dispatch}

    return(
        <AuthContext.Provider value={AuthState}>
            {childreen}
        </AuthContext.Provider>
    )
}