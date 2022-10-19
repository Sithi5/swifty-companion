import PrimaryButton from 'components/PrimaryButton';
import { Text, View } from 'components/Themed';
import Env from 'config/Env';
import { useAuthRequest } from 'expo-auth-session';
import { LinearGradient } from 'expo-linear-gradient';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { globalStyles } from 'globals/GlobalStyles';
import { RootStackScreenProps } from 'navigation/types';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { useAppDispatch } from 'redux_toolkit/hooks';
import { setUserLogged } from 'redux_toolkit/UserSlice';

WebBrowser.maybeCompleteAuthSession();

export default function OauthLogin({ navigation }: RootStackScreenProps<'OauthLogin'>) {
    const dispatch = useAppDispatch();

    dispatch(setUserLogged(true));

    const discovery = { authorizationEndpoint: 'https://api.intra.42.fr/oauth/authorize' };
    const redirectUrl = Linking.createURL('/');
    console.log('redirectUrl: ', redirectUrl);
    const [request, response, promptAsync] = useAuthRequest(
        {
            clientId: Env.API_UID,
            scopes: ['public'],
            redirectUri: redirectUrl,
            clientSecret: Env.API_SECRET,
        },
        discovery
    );

    async function getUserAccessToken(args: { code: string }) {
        const { code } = args;
        const HEADERS = {
            'Content-Type': 'application/json',
        };
        const url = encodeURI('https://api.intra.42.fr/oauth/token');
        console.log('code = ', code);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: HEADERS,
                body: JSON.stringify({
                    grant_type: 'authorization_code',
                    client_id: Env.API_UID,
                    client_secret: Env.API_SECRET,
                    code: code,
                    redirect_uri: redirectUrl,
                }),
            });
            const json_response = await response.json();
            console.log(json_response);
            navigation.navigate('Home');
        } catch (error) {
            console.error(error);
        }
    }

    React.useEffect(() => {
        if (response?.type === 'success') {
            const { code } = response.params;
            getUserAccessToken({ code: code });
        }
    }, [response]);

    return (
        <View style={styles.mainContainer}>
            <LinearGradient
                colors={['black', 'grey']}
                style={styles.mainContainer}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <Image
                    style={{ resizeMode: 'cover', width: 350, height: 250 }}
                    source={require('../images/logo.png')}
                ></Image>
                <Text style={styles.title}>Swifty-companion</Text>
                <Text></Text>
                <PrimaryButton text="Log in with 42" onPressFunction={promptAsync}></PrimaryButton>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontSize: globalStyles.h1.fontSize,
    },
});
