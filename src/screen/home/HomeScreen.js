import React from 'react'
import { View, Text } from 'react-native'

const HomeScreen = () => {
    return(
        <View style={{flex : 1, backgroundColor : '#fff'}}>
            <View style={{marginTop : 10, marginHorizontal : 10}}>
                <Text>Selamat Datang</Text>
                <Text>di Sistem Informasi Agenda Kegiatan Pimpinan</Text>
                <Text>Setda Kabupaten Sukamara</Text>
            </View>
        </View>
    )
}

export default HomeScreen