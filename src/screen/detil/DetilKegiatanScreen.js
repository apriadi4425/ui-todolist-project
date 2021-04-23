import React, {useState, useEffect, useContext} from 'react'
import { View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios'
import moment from 'moment'
import { AuthContext } from '../../provider/AuthProvider'
import { useIsFocused } from "@react-navigation/native";

const DetilKegiatanScreen = ({navigation, route}) => {
    const {getJadwal, BaseUrl} = useContext(AuthContext)
    const {id} = route.params
    const [Loading, setLoading] = useState(true)
    const [LoadingHapus, setLoadingHapus] = useState(false)
    const [Data, setData] = useState({})
    const isFocused = useIsFocused();

    const getData = async () => {
        await axios({
            method : 'get',
            url : `${BaseUrl}/api/jadwal/${id}`,
            headers : {
                Accept : 'aplication/json'
            }
        }).then(res => {
            setData(res.data.data)
        }).catch(err => {
            console.log(err)
        })
        setLoading(false)
    }

    const deleteData = async () => {
        setLoadingHapus(true)
        await axios({
            method : 'delete',
            url : `${BaseUrl}/api/jadwal/${id}`,
            headers : {
                Accept : 'aplication/json'
            }
        }).then(async res => {
            await getJadwal()
            navigation.goBack()
        }).catch(err => {
            console.log(err)
        })
        setLoadingHapus(false)
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
              <TouchableWithoutFeedback disabled={LoadingHapus} onPress={deleteData}>
                  <Icon name="trash" size={20} style={{marginTop : 5, marginRight : 20, color : LoadingHapus ? 'red' : '#fff'}} />
              </TouchableWithoutFeedback>
          )
          })
        getData()
    }, [isFocused])

    return(
        <View style={{flex : 1, backgroundColor : '#fff'}}>
            {
                Loading ? <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}><Text>Loading...</Text></View> :
                <ScrollView>
                    <View style={{marginTop : 10, marginHorizontal : 10}}>
                        <View style={{marginBottom : 30}}>
                            <View style={{flexDirection : 'row'}}>
                                <Text style={{color : '#0099cc', fontSize : 20, fontWeight : 'bold'}}>Tanggal Kegiatan</Text>
                                <TouchableWithoutFeedback onPress={() => navigation.navigate('Edit', {data : Data})}>
                                    <View style={{flex : 1, alignItems : 'flex-end'}}>
                                        <Text style={{fontSize : 20, fontWeight : 'bold', color : 'green'}}>Ubah</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                            <Text style={{fontSize : 15, marginTop : 10}}>{moment(Data.tanggal).format('dddd, DD MMMM YYYY')}</Text>
                        </View>
                        <View style={{marginBottom : 30}}>
                            <Text style={{color : '#0099cc', fontSize : 20, fontWeight : 'bold'}}>Waktu Kegiatan</Text>
                            <Text style={{fontSize : 15, marginTop : 10}}>{moment(new Date(Data.jam)).format('LT').toUpperCase()} WITA - {Data.jam === Data.jam_2 ? 'Selesai' : `${moment(new Date(Data.jam_2)).format('LT')} WITA`}</Text>
                        </View>
                        <View style={{marginBottom : 30}}>
                            <Text style={{color : '#0099cc', fontSize : 20, fontWeight : 'bold'}}>Tempat Kegiatan</Text>
                            <Text style={{fontSize : 15, marginTop : 10}}>{Data.tempat}</Text>
                        </View>
                        <View style={{marginBottom : 30}}>
                            <Text style={{color : '#0099cc', fontSize : 20, fontWeight : 'bold'}}>Uraian Kegiatan</Text>
                            <Text style={{fontSize : 15, marginTop : 10}}>{Data.uraian}</Text>
                        </View>
                        <View style={{marginBottom : 30}}>
                            <Text style={{color : '#0099cc', fontSize : 20, fontWeight : 'bold'}}>Keterangan</Text>
                            <Text style={{fontSize : 15, marginTop : 10}}>{Data.keterangan}</Text>
                        </View>
                    </View>
                </ScrollView>
            }
        </View>
    )
}

export default DetilKegiatanScreen;