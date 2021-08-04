import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BadgesTabNavigator from '../BadgesScreen/BadgesTabNavigator.js'
import BadgesLanding from '../BadgesLanding/BadgesLanding'
import Colors from '../../res/Colors'

const Stack = createStackNavigator();

const AppStack = () =>{
    return(
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
                name="Landing"
                component={BadgesLanding}
                options={{headerShown: false}}            
            />

            <Stack.Screen name="BadgesTabNavigator" component={BadgesTabNavigator}/>
        </Stack.Navigator>
    );
};

export default AppStack;