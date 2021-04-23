import moment from 'moment';
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Agenda, LocaleConfig} from 'react-native-calendars';
import {Card} from 'react-native-paper';


LocaleConfig.locales['id'] = {
  monthNames: ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'],
  monthNamesShort: ['Jan.','Feb.','Mar','Apr','Mei','Jun','Jul.','Agu','Sep.','Okt.','Nov.','Des.'],
  dayNames: ['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu'],
  dayNamesShort: ['Sen.','Sel.','Rab.','Kam.','Jum.','Sab.','Min.'],
  today: 'Hari ini'
};
LocaleConfig.defaultLocale = 'id';

const AgendaScreen = ({items, navigation}) => {


  const renderItem = (item) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Detil', {id : item.id})} style={{marginRight: 10, marginTop: 17}}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{textAlign : 'right', flex : 1, color : 'grey', fontSize : 12}}>{item.tanggal}</Text>
            </View>
            <Text>{moment(new Date(item.jam)).format('LT').toUpperCase()} WITA - {item.jam === item.jam_2 ? 'Selesai' : `${moment(new Date(item.jam_2)).format('LT')} WITA`}</Text>
            <Text>Bertempat di {item.tempat}</Text>
            <Text>Tentang:</Text>
            <Text>{item.uraian}</Text>
            <Text style={{marginTop : 10, fontWeight : 'bold', fontSize : 12}}>Keterangan</Text>
            <Text style={{color : 'grey', fontSize : 12}}>{item.keterangan}</Text>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Agenda
        items={items}
        selected={new Date()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default AgendaScreen;