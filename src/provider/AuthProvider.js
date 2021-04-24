import React, {createContext, useReducer, useCallback} from 'react'
import {initialState, reducer} from './reducer'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import { useEffect } from 'react/cjs/react.development';


export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const BaseUrl = 'http://192.168.213.113:8000'

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



      const HandleLogin = async (res) => {
        try {
            await AsyncStorage.setItem('Token', JSON.stringify(res.token));
            dispatch({type : 'LOGIN_SUKSES', token : res.token, user : res.user})
        } catch (e) {
            alert(e);
        }
      }


      const CheckIsLogin = async () => {
        try {
            const value = await AsyncStorage.getItem('Token');
            if(value !== null){
              GetUserData(JSON.parse(value))
            }else{
              dispatch({type : 'PENGGUNA_UMUM'})
            }
        }catch (e) {
            alert(e);
        }
      }

      const GetUserData = (Token) => {
        if(Token !== null){
          axios({
            method : 'get',
            url : `${BaseUrl}/api/user`,
            headers : {
              Accept: 'application/json',
              Authorization : `Bearer ${Token}`
            }
          }).then(res => {
            dispatch({type : 'LOGIN_SUKSES', token : Token, user : res.data.user})
          }).catch(err => {
            console.log(err)
          })
        }
      }

    useEffect(() => {
      CheckIsLogin()
    }, [])

    const AuthState = {state, dispatch, getJadwal, BaseUrl, HandleLogin}

    return(
        <AuthContext.Provider value={AuthState}>
            {children}
        </AuthContext.Provider>
    )
}