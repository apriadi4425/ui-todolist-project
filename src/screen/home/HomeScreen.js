import React, {useEffect, useContext} from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import AgendaScreen from './Agenda'
import { AuthContext } from '../../provider/AuthProvider'

const HomeScreen = ({navigation}) => {
    const {state, getJadwal} = useContext(AuthContext)

    useEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Tambah')}>
                <Icon name="plus" size={20} style={{marginTop : 5, marginRight : 20, color : '#fff'}} />
            </TouchableWithoutFeedback>
        )
        })
        getJadwal()
    }, [])

    return(
        <View style={{flex : 1, backgroundColor : '#fff'}}>
            <View style={{marginTop : 10, marginHorizontal : 10}}>
                <Text>Selamat Datang</Text>
                <Text>di Sistem Informasi Agenda Kegiatan Pimpinan</Text>
                <Text>Setda Kabupaten Sukamara</Text>
            </View>
            {
                state.LoadingAgenda ? <View><Text>Loading...</Text></View> : <AgendaScreen items={state.agenda}/>
            }
            
        </View>
    )
}

export default HomeScreen