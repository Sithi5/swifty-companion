import { Text, View } from 'components/Themed';
import Env from 'config/Env';
import { useAuthRequest } from 'expo-auth-session';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { RootStackScreenProps } from 'navigation/types';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useAppDispatch } from 'redux_toolkit/hooks';
import { setUserCode, setUserLogged } from 'redux_toolkit/UserSlice';

WebBrowser.maybeCompleteAuthSession();

export default function OauthLogin({ navigation }: RootStackScreenProps<'OauthLogin'>) {
    const dispatch = useAppDispatch();

    dispatch(setUserLogged(true));

    const discovery = { authorizationEndpoint: 'https://api.intra.42.fr/oauth/authorize' };
    const redirectUrl = Linking.createURL('home');
    const [request, response, promptAsync] = useAuthRequest(
        {
            clientId: Env.API_UID,
            scopes: ['public'],
            redirectUri: redirectUrl,
            clientSecret: Env.API_SECRET,
        },
        discovery
    );

    React.useEffect(() => {
        if (response?.type === 'success') {
            const { code } = response.params;
            dispatch(setUserCode(code));
            navigation.navigate('Home');
        }
    }, [response]);

    return (
        <View
            style={{
                backgroundColor: 'grey',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <TouchableOpacity
                style={{
                    backgroundColor: '#009688',
                    width: '70%',
                    height: '10%',
                    alignItems: 'center',
                    borderRadius: 50,
                    justifyContent: 'center',
                }}
                onPress={() => {
                    promptAsync();
                }}
            >
                <Text>Login with 42</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
    },
});
