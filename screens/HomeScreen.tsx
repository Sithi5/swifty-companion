import { getUserByLogin } from 'api/42ApiCall';
import PrimaryButton from 'components/PrimaryButton';
import { Text, TextInput, View } from 'components/Themed';
import { LinearGradient } from 'expo-linear-gradient';
import * as WebBrowser from 'expo-web-browser';
import { globalStyles, coaBannerSize } from 'globals/GlobalStyles';
import { RootStackScreenProps } from 'navigation/types';
import React from 'react';
import { ImageBackground, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import { useAppSelector } from 'redux_toolkit/hooks';
import truncate from 'utils/truncate';

WebBrowser.maybeCompleteAuthSession();

const coalitionImages = {
    alliance: require('../images/alliance.jpg'),
    order: require('../images/order.jpg'),
    assembly: require('../images/assembly.jpg'),
    federation: require('../images/federation.jpg'),
    unknown: require('../images/unknown.jpg'),
};

export default function Home({ navigation }: RootStackScreenProps<'Home'>) {
    console.log('HOME PAGE');
    const user = useAppSelector((state) => state.user);
    const [text, onChangeText] = React.useState('');
    const [error, setError] = React.useState('');

    const login = user.userInfos.userLogin;
    const level = user.userInfos.userLevel;
    console.log("level.toString().split('.')[1]", level.toString().split('.')[1]);
    const levelbar = '0.' + level.toString().split('.')[1];

    async function getUser(userLogin: string) {
        try {
            const response_json = await getUserByLogin({
                api_user_token: user.userTokenData.accessToken,
                login: userLogin.toLowerCase(),
            });
            console.log('response_json = ', response_json);
            if (response_json != undefined) {
                navigation.navigate('UserInfos', { userInfos: response_json });
            } else {
                setError("error : User '" + truncate(userLogin, 25) + "' not found.");
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <KeyboardAvoidingView
            enabled={true}
            style={styles.mainContainer}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ImageBackground
                source={
                    user.userInfos.userCoalition === 'The Alliance'
                        ? coalitionImages.alliance
                        : user.userInfos.userCoalition === 'The Order'
                        ? coalitionImages.order
                        : user.userInfos.userCoalition === 'The Assembly'
                        ? coalitionImages.assembly
                        : coalitionImages.federation
                }
                style={styles.coaContainer}
            >
                <Text style={styles.text}>User : {login}</Text>
                <Text style={styles.text}>Level: {level}</Text>
                <View style={styles.barContainer}>
                    <Progress.Bar progress={parseFloat(levelbar)} />
                </View>
            </ImageBackground>
            <LinearGradient
                style={styles.inputContainer}
                colors={['black', 'grey']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <ImageBackground
                    style={styles.inputContainerLogo}
                    source={require('../images/logo.png')}
                ></ImageBackground>

                <Text style={styles.text_error}>{error}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Type user name"
                    onChangeText={onChangeText}
                    value={text}
                />
                <PrimaryButton
                    text="Search 42 user"
                    onPressFunction={() => {
                        getUser(text);
                    }}
                ></PrimaryButton>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    mainContainer: { flex: 1 },
    coaContainer: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: coaBannerSize,
        zIndex: 2,
        justifyContent: 'center',
        resizeMode: 'cover',
        alignItems: 'flex-end',
        shadowOffset: {
            width: 0,
            height: 15,
        },
        shadowOpacity: 11,
        shadowRadius: 14,
        elevation: 14,
    },
    inputContainer: {
        paddingTop: coaBannerSize,
        flex: 1,
        zIndex: 1,
        alignItems: 'center',
    },
    inputContainerLogo: {
        margin: 10,
        width: 350,
        height: 290,
    },
    title: {
        color: 'white',
        fontSize: globalStyles.h1.fontSize,
    },
    input: {
        margin: 20,
        width: '60%',
        borderColor: 'black',
        backgroundColor: 'lightgrey',
        color: 'black',
        borderRadius: 10,
    },
    barContainer: {
        paddingRight: 10,
        paddingTop: 10,
        backgroundColor: 'transparent',
    },
    text: {
        paddingRight: 10,
        color: 'white',
    },
    text_error: {
        paddingRight: 10,
        color: 'red',
    },
});
