import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import App from './../App'
import TopTab from './TopTab'
import Five from './../screen/Five'
import Ten from './../screen/Ten'
import Fifteen from './../screen/Fifteen'
import Twenty from './../screen/Twenty'

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        // <NavigationContainer>
            <Stack.Navigator initialRouteName="App" headerMode="none">
                <Stack.Screen name="NemoLogic" component={App} />
                <Stack.Screen name="Five" component={Five} />
                <Stack.Screen name="Ten" component={Ten} />
                <Stack.Screen name="Fifteen" component={Fifteen} />
                <Stack.Screen name="Twenty" component={Twenty} />
            </Stack.Navigator>
        // </NavigationContainer>
    );
}