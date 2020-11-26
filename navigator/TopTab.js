import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
    createMaterialTopTabNavigator
} from '@react-navigation/material-top-tabs';
import App from './../App'
import Stack from './Stack'
import Setting from './../screen/Setting'

const Tab = createMaterialTopTabNavigator();

export default function TopTab() {
    return (
        // <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Stack} />
                <Tab.Screen name="Settings" component={Setting} />
            </Tab.Navigator>
        // </NavigationContainer>
    );
}