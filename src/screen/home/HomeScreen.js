import React, {useState, useEffect} from 'react'
import { View, Text, ScrollView } from 'react-native'
import AgendaScreen from './Agenda'
import axios from 'axios'

const HomeScreen = () => {
    const [items, setItems] = useState({});
    const [Loading, setLoading] = useState(true)

    const getJadwal = async () => {
        await axios({
          method : 'get',
          url : 'http://192.168.133.113:8000/api/jadwal',
          headers : {
            Accept: 'application/json',
          }
        }).then(res => {
          setItems(res.data.data)
        }).catch(err => {
          console.log(err)
        })
        setLoading(false)
      };


    useEffect(() => {
        getJadwal()
    },[])

    return(
        <View style={{flex : 1, backgroundColor : '#fff'}}>
            
            <View style={{marginTop : 10, marginHorizontal : 10}}>
                <Text>Selamat Datang</Text>
                <Text>di Sistem Informasi Agenda Kegiatan Pimpinan</Text>
                <Text>Setda Kabupaten Sukamara</Text>
            </View>
            {
                Loading ? <View><Text>Loading...</Text></View> : <AgendaScreen items={items}/>
            }
            
        </View>
    )
}

export default HomeScreen