import React, {createContext, useReducer, useCallback} from 'react'
import {initialState, reducer} from './reducer'
import axios from 'axios'


export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getJadwal = useCallback(async () => {
        await axios({
          method : 'get',
          url : 'http://192.168.142.113:8000/api/jadwal',
          headers : {
            Accept: 'application/json',
          }
        }).then(res => {
         
          dispatch({type : 'GET_AGENDA', data : res.data.data})
        }).catch(err => {
          console.log(err)
        })
        dispatch({type : 'LOADING_FALSE'})
      }, []);

    const AuthState = {state, dispatch, getJadwal}

    return(
        <AuthContext.Provider value={AuthState}>
            {children}
        </AuthContext.Provider>
    )
}