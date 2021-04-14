import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/home/HomeScreen';
import TambahKegiatanScreen from '../screen/add/TambahKegiatanScrenn';
import DetilKegiatanScreen from '../screen/detil/DetilKegiatanScreen';
import EditKegiatanScreen from '../screen/add/EditKegiatanScreen'

const Stack = createStackNavigator();

const HomeStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{
                title : 'Agenda Kegiatan Pimpinan',
                headerStyle : {
                    backgroundColor : '#4d94ff'
                },
                headerTintColor: '#fff'
            }}/>
            <Stack.Screen name='Tambah' component={TambahKegiatanScreen} options={{
                title : 'Tambah Agenda Kegiatan',
                headerStyle : {
                    backgroundColor : '#4d94ff'
                },
                headerTintColor: '#fff'
            }}/>
            <Stack.Screen name='Detil' component={DetilKegiatanScreen} options={{
                title : 'Detil Agenda Kegiatan',
                headerStyle : {
                    backgroundColor : '#4d94ff'
                },
                headerTintColor: '#fff'
            }}/>
            <Stack.Screen name='Edit' component={EditKegiatanScreen} options={{
                title : 'Edit Agenda Kegiatan',
                headerStyle : {
                    backgroundColor : '#4d94ff'
                },
                headerTintColor: '#fff'
            }}/>
        </Stack.Navigator>
    )
}

export default HomeStack