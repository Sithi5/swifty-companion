import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import useColorScheme from 'hooks/useColorScheme';
import React from 'react';
import { StyleSheet } from 'react-native';

import Colors from 'globals/Colors';
import { HomeScreen } from 'screens';
import { RootTabParamList } from './types';

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tabIconSelected,
                headerShown: false,
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: true,
                    title: 'Home',
                }}
            />
        </BottomTab.Navigator>
    );
}

const styles = StyleSheet.create({});
