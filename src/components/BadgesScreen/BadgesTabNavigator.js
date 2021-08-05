import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BadgesStack from './BadgesStack.js'
import Colors from '../../res/Colors.js';

const Tabs = createBottomTabNavigator();

const BadgesTabNavigator = () => {
    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#43FF0D',
                tabBarInactiveTintColor: Colors.white,
                tabBarStyle: { backgroundColor: Colors.zircon },
            }}
        >
            <Tabs.Screen
                name="Edit"
                component={BadgesStack}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Image
                            style={{ tintColor: color, width: size, height: size }}
                            source={require('../../assets/edit_icon.png')}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="Badges"
                component={BadgesStack}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Image
                            style={{ tintColor: color, width: size, height: size }}
                            source={require('../../assets/home.png')}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="Delete"
                component={BadgesStack}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Image
                            style={{ tintColor: color, width: size, height: size }}
                            source={require('../../assets/delete_icon.png')}
                        />
                    ),
                }}
            />
        </Tabs.Navigator>
    );
};

export default BadgesTabNavigator;