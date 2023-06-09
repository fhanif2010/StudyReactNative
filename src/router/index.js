
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PropsDinamis, StateDinamis, PropsAndState, BasicJavaScript, CallApiVanilaJS, FakeApi } from '../pages';    

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator initialRouteName='FakeApi'>
            <Stack.Screen name='PropsDinamis' component={PropsDinamis} options={{ headerShown: false }} />
            <Stack.Screen name='StateDinamis' component={StateDinamis} options={{ headerShown: false }} />
            <Stack.Screen name='PropsAndState' component={PropsAndState} options={{ headerShown: false }} />
            <Stack.Screen name='BasicJavaScript' component={BasicJavaScript} options={{ headerShown: false }} />
            <Stack.Screen name='CallApiVanilaJS' component={CallApiVanilaJS} options={{ headerShown: false }} />
            <Stack.Screen name='FakeApi' component={FakeApi} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})