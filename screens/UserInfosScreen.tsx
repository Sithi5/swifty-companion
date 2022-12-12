import { Route } from '@react-navigation/native';
import { getUserByLogin } from 'api/42ApiCall';
import { StatusBar } from 'components/StatusBar';
import { Text, View } from 'components/Themed';
import * as WebBrowser from 'expo-web-browser';
import { globalStyles } from 'globals/GlobalStyles';
import { RootStackScreenProps } from 'navigation/types';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { useAppSelector } from 'redux_toolkit/hooks';

WebBrowser.maybeCompleteAuthSession();

const API_USER_BASE_URL = 'https://api.intra.42.fr/v2/users/';

export default function UserInfosScreen({ route }: RootStackScreenProps<'UserInfos'>) {
    console.log('USER INFOS SCREEN PAGE');
    const { userInfos } = route.params;
    console.log(userInfos);

    const user = useAppSelector((state) => state.user);
    const [UserInfo42, setUserInfo42] = useState();
    console.log('userInfos ', userInfos);

    return (
        <View style={styles.mainContainer}>
            <StatusBar />
            <Image
                source={{
                    uri: userInfos.image.link,
                }}
                style={styles.userImage}
            />
            <Text>User code? : {userInfos.email}</Text>
            <Text>User code? : {userInfos.first_name}</Text>
            <Text>User code? : {userInfos.last_name}</Text>
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    userImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
});
