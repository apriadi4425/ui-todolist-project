import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack'

const Drawer = createDrawerNavigator();

const MainStack = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeStack} />
            <Drawer.Screen name="Login" component={HomeStack} />
        </Drawer.Navigator>
    )
}

export default MainStack