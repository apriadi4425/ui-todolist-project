import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack'

const Tab = createBottomTabNavigator();

const MainStack = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Kalender" component={HomeStack} />
            <Tab.Screen name="Pengguna" component={HomeStack} />
        </Tab.Navigator>
    )
}

export default MainStack