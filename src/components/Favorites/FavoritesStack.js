import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Favorites from './Favorites.js'
import Colors from '../../res/Colors.js'

const Stack = createStackNavigator();

const FavoriteStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Favorites" component={Favorites}></Stack.Screen>
        </Stack.Navigator>
    )
};


export default FavoriteStack;