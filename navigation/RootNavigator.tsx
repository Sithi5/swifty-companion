import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ModalScreen from 'screens/ModalScreen';
import NotFoundScreen from 'screens/NotFoundScreen';
import BottomTabNavigator from './BottomTabNavigator';
import { RootStackParamList } from './types';

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Root" component={BottomTabNavigator} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
            <Stack.Group screenOptions={{ presentation: 'containedModal' }}>
                <Stack.Screen name="Modal" component={ModalScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
}
