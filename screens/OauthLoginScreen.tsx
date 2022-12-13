import { getMe, getCoa } from 'api/42ApiCall';
import PrimaryButton from 'components/PrimaryButton';
import { Text, View } from 'components/Themed';
import Env from 'config/Env';
import { useAuthRequest } from 'expo-auth-session';
import { LinearGradient } from 'expo-linear-gradient';
import * as Linking from 'expo-linking';
import { StatusBar } from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';
import { globalStyles } from 'globals/GlobalStyles';
import { RootStackScreenProps } from 'navigation/types';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { useAppDispatch } from 'redux_toolkit/hooks';
import { setTokenData, setUserInfos, setUserLogged } from 'redux_toolkit/UserSlice';

WebBrowser.maybeCompleteAuthSession();

export default function OauthLogin({ navigation }: RootStackScreenProps<'OauthLogin'>) {
    const dispatch = useAppDispatch();

    const discovery = { authorizationEndpoint: 'https://api.intra.42.fr/oauth/authorize' };
    const redirectUrl = Linking.createURL('/');
    const [request, response, promptAsync] = useAuthRequest(
        {
            clientId: Env.API_UID,
            scopes: ['public'],
            redirectUri: redirectUrl,
            clientSecret: Env.API_SECRET,
        },
        discovery
    );

    async function getUserAccessToken(args: { code: string; state: string }) {
        const { code, state } = args;
        const HEADERS = {
            'Content-Type': 'application/json',
        };
        const url = encodeURI('https://api.intra.42.fr/oauth/token');
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
                    state: state,
                }),
            });
            let json_response = await response.json();
            const access_token = json_response.access_token;
            dispatch(setUserLogged(true));
            dispatch(
                setTokenData({
                    accessToken: access_token,
                    accessTokenCreatedAt: json_response.created_at,
                    accessTokenExpiresIn: json_response.expires_in,
                    refreshToken: json_response.refresh_token,
                })
            );
            json_response = await getMe({ api_user_token: access_token });
            const userLogin = json_response['login'];
            const userLevel =
                json_response['cursus_users'][json_response['cursus_users'].length - 1]['level'];
            const userImage = json_response['image']['link'];
            json_response = await getCoa({
                id: json_response['id'],
                api_user_token: access_token,
            });
            const userCoalition = json_response[json_response.length - 1]['name'];

            dispatch(
                setUserInfos({
                    userCoalition: userCoalition,
                    userLevel: userLevel,
                    userLogin: userLogin,
                    userImage: userImage,
                })
            );

            navigation.navigate('Home');
        } catch (error) {
            console.error(error);
        }
    }

    React.useEffect(() => {
        if (response?.type === 'success') {
            const { code, state } = response.params;
            getUserAccessToken({ code: code, state: state });
        }
    }, [response]);

    return (
        <View style={styles.mainContainer}>
            <StatusBar backgroundColor="white" />

            <LinearGradient
                colors={['black', 'grey']}
                style={styles.mainContainer}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <Image
                    style={{ resizeMode: 'cover', width: 350, height: 290 }}
                    source={require('../images/logo.png')}
                ></Image>
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
