import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack'
import LoginScreen from '../screen/auth/LoginScreen'
import { AuthContext } from '../provider/AuthProvider';

const Drawer = createDrawerNavigator();

const MainStack = () => {
    const { state } = useContext(AuthContext)

    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeStack} />
            {
                !state.Login ?
                <Drawer.Screen name="Login" component={LoginScreen} /> :
                <Drawer.Screen name="History" component={LoginScreen} />
            }
           
        </Drawer.Navigator>
    )
}

export default MainStack