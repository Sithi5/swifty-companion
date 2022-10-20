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
import { setUserCode, setUserLogged } from 'redux_toolkit/UserSlice';

WebBrowser.maybeCompleteAuthSession();

export default function OauthLogin({ navigation }: RootStackScreenProps<'OauthLogin'>) {
    const dispatch = useAppDispatch();

    dispatch(setUserLogged(true));

    const discovery = { authorizationEndpoint: 'https://api.intra.42.fr/oauth/authorize' };
    const redirectUrl = Linking.createURL('home');
    console.log(redirectUrl);
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
        <View style={styles.mainContainer}>
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
