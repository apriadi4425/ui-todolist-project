import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card} from 'react-native-paper';


const AgendaScreen = ({items}) => {

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
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
            <Text>{item.jam} - SELESAI</Text>
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