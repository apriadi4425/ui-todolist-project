import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './stack/MainStack'
import {View, Text } from 'react-native'
import { AuthContext } from './provider/AuthProvider';


const Main = () => {
    const { state } = useContext(AuthContext)
    return(
        <NavigationContainer>
            {
                state.Loading ? <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}><Text>Loading...</Text></View> :
                <MainStack/>
            }
        </NavigationContainer>
    )
}

export default Main