import { Route } from '@react-navigation/native';
import { getUserByLogin } from 'api/42ApiCall';

import { LinearGradient } from 'expo-linear-gradient';
import * as Progress from 'react-native-progress';

import { Text, View } from 'components/Themed';
import * as WebBrowser from 'expo-web-browser';
import { globalStyles } from 'globals/GlobalStyles';
import { RootStackScreenProps } from 'navigation/types';
import React, { useEffect, useState } from 'react';
import { StyleSheet, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';
import { useAppSelector } from 'redux_toolkit/hooks';

WebBrowser.maybeCompleteAuthSession();

const API_USER_BASE_URL = 'https://api.intra.42.fr/v2/users/';
const COA_BANNER_SIZE = 150;
const coalitionImages = {
    alliance: require('../images/alliance.jpg'),
    order: require('../images/order.jpg'),
    assembly: require('../images/assembly.jpg'),
    federation: require('../images/federation.jpg'),
    unknown: require('../images/unknown.jpg'),
};

export default function UserInfosScreen({ route }: RootStackScreenProps<'UserInfos'>) {
    console.log('USER INFOS SCREEN PAGE');
    const { userInfos } = route.params;
    console.log(userInfos);
    const login = userInfos.login;
    const level = '10.0';
    const levelbar = '0.' + level.toString().slice(-2);

    const user = useAppSelector((state) => state.user);
    const [UserInfo42, setUserInfo42] = useState();
    console.log('userInfos ', userInfos);

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
                        : user.userInfos.userCoalition === 'The Federation'
                        ? coalitionImages.federation
                        : coalitionImages.unknown
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
                style={styles.firstContainer}
                colors={['black', 'grey']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <Text>User code? : {userInfos.email}</Text>
                <Text>User code? : {userInfos.first_name}</Text>
                <Text>User code? : {userInfos.last_name}</Text>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    mainContainer: { flex: 1 },
    firstContainer: {
        paddingTop: COA_BANNER_SIZE,
        flex: 1,
        zIndex: 1,
        alignItems: 'center',
    },
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
    title: {
        color: 'white',
        fontSize: globalStyles.h1.fontSize,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
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
