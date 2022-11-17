import { getMe, getUserByLogin } from 'api/42ApiCall';
import PrimaryButton from 'components/PrimaryButton';
import { Text, TextInput, View } from 'components/Themed';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';
import { globalStyles } from 'globals/GlobalStyles';
import { RootStackScreenProps } from 'navigation/types';
import React from 'react';
import {
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    TextInput,
} from 'react-native';
import * as Progress from 'react-native-progress';
import { useAppSelector } from 'redux_toolkit/hooks';

WebBrowser.maybeCompleteAuthSession();

const COA_BANNER_SIZE = 150;

export default function Home({ navigation }: RootStackScreenProps<'Home'>) {
    const [text, onChangeText] = React.useState('');
    const user = useAppSelector((state) => state.user);
    console.log('user: ', user);
    console.log('try api call');
    // getUserByLogin({ login: 'mabouce', api_user_token: user.userCode });
    getMe({ api_user_token: user.userCode });
    console.log('try api call end');

    const level = '19.48';
    const levelbar = '0.' + level.slice(-2);
    const student = 'maginist';
    const [text, onChangeText] = React.useState('');
    const coa = 'alliance';
    const coaColor = '#05DFF7';
    // const coaColor = '#E300EB'
    //     ? coa === 'assembly'
    //     : '05DFF7'
    //     ? coa === 'federation'
    //     : '#00EB14'
    //     ? coa === 'alliance'
    //     : '#F50502';

    console.log('USER = ', user);
    return (
        <KeyboardAvoidingView
            enabled={true}
            style={styles.mainContainer}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <StatusBar backgroundColor="white" />
            <ImageBackground
                source={require('../images/' + coa + '.jpg')}
                style={styles.coaContainer}
            >
                <Text style={styles.text}>User : {student}</Text>
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

                <TextInput
                    style={styles.input}
                    placeholder="Type user name"
                    onChangeText={onChangeText}
                    value={text}
                />
                <PrimaryButton
                    text="Search 42 user"
                    onPressFunction={() => {
                        GetUser(text);
                        return;
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
        height: COA_BANNER_SIZE,
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
        paddingTop: COA_BANNER_SIZE,
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
});
