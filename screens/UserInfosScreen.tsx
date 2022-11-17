import { Text, View } from 'components/Themed';
import * as WebBrowser from 'expo-web-browser';
import { globalStyles } from 'globals/GlobalStyles';
import { RootStackScreenProps } from 'navigation/types';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useAppSelector } from 'redux_toolkit/hooks';

WebBrowser.maybeCompleteAuthSession();

const API_USER_BASE_URL = 'https://api.intra.42.fr/v2/users/';

export default function UserInfosScreen({ route, navigation }: RootStackScreenProps<'UserInfos'>) {
    const { userName } = route.params;
    const user = useAppSelector((state) => state.user);
    const [UserInfo42, setUserInfo42] = useState();

    async function getUserInfos() {
        const HEADERS = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + user.userTokenData.accessToken,
        };
        const url = encodeURI(API_USER_BASE_URL);
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: HEADERS,
            });
            const json_response = await response.json();
            console.log(json_response);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUserInfos();
    });

    return (
        <View style={styles.mainContainer}>
            <Text>User code? : {user.userToken}</Text>
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
});
