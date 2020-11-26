import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import App from './../App'
import Stack from './Stack'
import TopTab from './TopTab'
import Setting from './../screen/Setting'

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Home"
                backBehavior="initialRoute"
                drawerType="front"
                >
                <Drawer.Screen name="Home" component={TopTab} />
                <Drawer.Screen name="Settings" component={Setting} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}