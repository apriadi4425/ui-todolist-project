import React from 'react'
import {AuthProvider} from './provider/AuthProvider'
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './stack/MainStack'


const Main = () => {
    return(
        <AuthProvider>
            <NavigationContainer>
                <MainStack/>
            </NavigationContainer>
        </AuthProvider>
    )
}

export default Main