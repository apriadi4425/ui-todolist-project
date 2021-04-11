import React from 'react'
import {AuthProvider} from './provider/AuthProvider'
import {View, Text} from 'react-native'

const Main = () => {
    return(
        <AuthProvider>
            <View>
                <Text>Tes</Text>
            </View>
        </AuthProvider>
    )
}

export default Main