import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeScreen, OauthLogin } from 'screens';
import NotFoundScreen from 'screens/NotFoundScreen';
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
            initialRouteName="OauthLogin"
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
            <Stack.Group screenOptions={{ presentation: 'containedModal' }}>
                <Stack.Screen name="OauthLogin" component={OauthLogin} />
            </Stack.Group>
        </Stack.Navigator>
    );
}
