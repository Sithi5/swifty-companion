import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useAppSelector } from 'redux_toolkit/hooks';
import { HomeScreen, OauthLogin } from 'screens';
import NotFoundScreen from 'screens/NotFoundScreen';
import UserInfosScreen from 'screens/UserInfosScreen';
import { RootStackParamList } from './types';

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
    const user = useAppSelector((state) => state.user);

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={user.logged === false ? 'OauthLogin' : 'Home'}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
            <Stack.Screen name="OauthLogin" component={OauthLogin} />
            <Stack.Screen name="UserInfos" component={UserInfosScreen} />
        </Stack.Navigator>
    );
}
