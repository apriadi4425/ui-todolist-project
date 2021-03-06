import React, {useState, useContext} from 'react'
import  { View, Text, Button, TouchableWithoutFeedback, TextInput } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'
import CustomHooks from './CustomeHooks'
import axios from 'axios'
import { AuthContext } from '../../provider/AuthProvider';


const TambahKegiatanScreen = ({navigation}) => {
    const {state, getJadwal, BaseUrl} = useContext(AuthContext)
    const [ date, mode, show, onChange, showDatepicker, showTimepicker ] = CustomHooks()
    const [ time1, mode1, show1, onChange1, showDatepicker1, showTimepicker1 ] = CustomHooks()
    const [ time2, mode2, show2, onChange2, showDatepicker2, showTimepicker2 ] = CustomHooks()
    const [Tempat, setTempat] = useState('')
    const [Uraian, setUraian] = useState('')
    const [Keterangan, setKeterangan] = useState('')
    const [LoadingTombol, setLoadingTombol] = useState(false)

    const TambahAgendaKegiatan = async () => {
        setLoadingTombol(true)
        await axios({
            method : 'post',
            url : `${BaseUrl}/api/jadwal`,
            data : {
                tanggal : moment(date).format('YYYY-MM-DD'),
                jam : `${time1}`,
                jam_2 : `${time2}`,
                tempat : Tempat,
                uraian : Uraian,
                keterangan: Keterangan
            },
            headers : {
                Accept : 'aplication/json',
                Authorization : `Bearer ${state.Token}`
            }
        }).then(async res => {
            await getJadwal()
            navigation.goBack()
        }).catch(err => {
            console.log(err)
        })
        setLoadingTombol(false)
    }




    return(
        <View style={{flex : 1, backgroundColor : '#fff'}}>
            <View style={{marginHorizontal : 10, marginTop : 20}}>
                <View style={{marginBottom : 20}}>
                    <Text style={{marginBottom : 10}}>Tanggal Kegiatan</Text>
                    <TouchableWithoutFeedback onPress={showDatepicker}>
                        <View style={{borderBottomWidth : 1, borderBottomColor : 'grey'}}>
                            <Text style={{marginBottom : 10}}>{moment(date).format('dddd, DD/MM/YYYY')}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={{marginBottom : 20}}>
                    <Text style={{marginBottom : 10}}>Waktu Kegiatan</Text>
                    <View style={{flexDirection : 'row'}}>
                        <TouchableWithoutFeedback onPress={showTimepicker1}>
                            <View style={{flex : 1, borderBottomWidth : 1, borderBottomColor : 'grey', marginRight : 40}}>
                                <Text style={{marginBottom : 10}}>Mulai : {moment(time1).format('LT')}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={showTimepicker2}>
                            <View style={{flex : 1, borderBottomWidth : 1, borderBottomColor : 'grey'}}>
                                <Text style={{marginBottom : 10}}>Hingga : {moment(time2).format('LT') === moment(time1).format('LT') ? 'Selesai' : moment(time2).format('LT')}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        
                    </View>
                </View>

                <View style={{marginBottom : 20}}>
                    <Text>Tempat Kegiatan</Text>
                    <View style={{borderBottomWidth : 1, borderBottomColor : 'grey'}}>
                        <TextInput value={Tempat} onChangeText={(e) => setTempat(e)} placeholder='Isikan Tempat Kegiatan atau Acara'/>
                    </View>
                </View>
                <View style={{marginBottom : 20}}>
                    <Text>Uraian Kegiatan</Text>
                    <View style={{borderBottomWidth : 1, borderBottomColor : 'grey'}}>
                        <TextInput multiline={true} value={Uraian} onChangeText={(e) => setUraian(e)} placeholder='Isikan Uraian Kegaiatan atau Acara'/>
                    </View>
                </View>
                <View style={{marginBottom : 30}}>
                    <Text>Keterangan</Text>
                    <View style={{borderBottomWidth : 1, borderBottomColor : 'grey'}}>
                        <TextInput multiline={true} value={Keterangan} onChangeText={(e) => setKeterangan(e)} placeholder='Keterangan tambahan'/>
                    </View>
                </View>

                <Button disabled={LoadingTombol} title={LoadingTombol ? 'Loading' : 'Tambah Agenda'} onPress={TambahAgendaKegiatan}/>
            </View>
            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
                />
            )}

            {show1 && (
                <DateTimePicker
                testID="dateTimePicker"
                value={time1}
                mode={mode1}
                is24Hour={true}
                display="default"
                onChange={onChange1}
                />
            )}
            {show2 && (
                <DateTimePicker
                testID="dateTimePicker"
                value={time2}
                mode={mode2}
                is24Hour={true}
                display="default"
                onChange={onChange2}
                />
            )}
            </View>
    )
}

export default TambahKegiatanScreen;