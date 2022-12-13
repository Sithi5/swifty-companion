import { Route } from '@react-navigation/native';
import { getUserByLogin, getCoa } from 'api/42ApiCall';

import { Text, View } from 'components/Themed';
import { LinearGradient } from 'expo-linear-gradient';
import * as WebBrowser from 'expo-web-browser';
import { globalStyles, coaBannerSize } from 'globals/GlobalStyles';
import { RootStackScreenProps } from 'navigation/types';
import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { useAppSelector } from 'redux_toolkit/hooks';
import * as Progress from 'react-native-progress';

WebBrowser.maybeCompleteAuthSession();

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
    const level = userInfos.cursus_users[userInfos.cursus_users.length - 1].level;
    const levelbar = '0.' + level.toString().split('.')[1];
    const user = useAppSelector((state) => state.user);
    const [userCoalition, setUserCoalition] = React.useState('');

    console.log('userInfos ', userInfos);

    async function awaitCoa() {
        try {
            const response = await getCoa({
                id: userInfos.id,
                api_user_token: user.userTokenData.accessToken,
            });
            if (response != undefined) {
                setUserCoalition(response[response.length - 1]['name']);
            }
        } catch (error) {
            console.error(error);
        }
    }

    React.useEffect(() => {
        awaitCoa();
    });

    return (
        <KeyboardAvoidingView
            enabled={true}
            style={styles.mainContainer}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ImageBackground
                source={
                    userCoalition === 'The Alliance'
                        ? coalitionImages.alliance
                        : userCoalition === 'The Order'
                        ? coalitionImages.order
                        : userCoalition === 'The Assembly'
                        ? coalitionImages.assembly
                        : userCoalition === 'The Federation'
                        ? coalitionImages.federation
                        : coalitionImages.unknown
                }
                style={styles.coaContainer}
            >
                <Image
                    source={{
                        uri: userInfos.image.link,
                    }}
                    style={styles.userImage}
                />
                <Text style={styles.text}>Loging : {login}</Text>
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
                <Text style={styles.text}>User code? : {userInfos.email}</Text>
                <Text style={styles.text}>User code? : {userInfos.first_name}</Text>
                <Text style={styles.text}>User code? : {userInfos.last_name}</Text>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    mainContainer: { flex: 1 },
    firstContainer: {
        paddingTop: coaBannerSize,
        flex: 1,
        zIndex: 1,
        alignItems: 'center',
    },
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
    userImage: {
        zIndex: 2,

        width: 80,
        height: 80,
        borderRadius: 100,
    },
});
