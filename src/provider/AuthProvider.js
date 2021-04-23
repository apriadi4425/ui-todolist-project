import React, {createContext, useReducer, useCallback} from 'react'
import {initialState, reducer} from './reducer'
import axios from 'axios'


export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const BaseUrl = 'http://192.168.26.113:8000'

    const getJadwal = useCallback(async () => {
        await axios({
          method : 'get',
          url : `${BaseUrl}/api/jadwal`,
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

    const AuthState = {state, dispatch, getJadwal, BaseUrl}

    return(
        <AuthContext.Provider value={AuthState}>
            {children}
        </AuthContext.Provider>
    )
}