import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BadgesTabNavigator from '../BadgesScreen/BadgesTabNavigator.js'
import BadgesLanding from '../BadgesLanding/BadgesLanding.js'
import Colors from '../../res/Colors.js'
import Login from '../UsersScreen/Login.js'
import Signup from '../UsersScreen/Signup.js'

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: Colors.charade,
                    shadowColor: Colors.charade,
                },
                headerTintColor: Colors.white,
            }}>
            <Stack.Screen
                name="Loading"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Signup"
                component={Signup}
                options={{ headerShown: false }}
            />

            <Stack.Screen name="BadgesTabNavigator" component={BadgesTabNavigator} />
        </Stack.Navigator>
    );
};

export default AppStack;