import React, {useContext, useState} from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import axios from 'axios'
import { AuthContext } from '../../provider/AuthProvider'

const LoginScreen = ({navigation}) => {
    
    const { BaseUrl, HandleLogin } = useContext(AuthContext)

    const [Form, setForm] = useState({
        username : '', password : ''
    })

    const CobaLogin = () => {
        axios({
            method : 'post',
            url : `${BaseUrl}/api/user/singin`,
            data : Form,
            headers : {
                Accept : 'aplication/json'
            }
        }).then(async res => {
            await HandleLogin(res.data)
            navigation.navigate('Home')
        }).catch(err => {
            console.log(err)
        })
    }
    return(
        <View style={{flex : 1, backgroundColor : '#fff'}}>
            <View style={{flex :1, alignItems : 'flex-start', justifyContent : 'flex-end', marginBottom : 10, marginHorizontal : 20}}>
                <Text>Username</Text>
                <View style={{borderBottomWidth : 1, width : '100%', borderBottomColor : '#ccc', marginBottom : 20}}>
                    <TextInput placeholder='Ketikan Username Anda' value={Form.username} onChangeText={(text) => setForm({...Form, username : text})}/>
                </View>
                <Text>Password</Text>
                <View  style={{borderBottomWidth : 1, width : '100%', borderBottomColor : '#ccc', marginBottom : 20}}>
                    <TextInput secureTextEntry={true} placeholder='Ketikan Password Anda' value={Form.password} onChangeText={(text) => setForm({...Form, password : text})}/>
                </View>
            </View>
            <View style={{marginBottom : 20, marginHorizontal : 20}}>
                <Button onPress={CobaLogin} title='Login'/>
            </View>
        </View>
    )
}

export default LoginScreen